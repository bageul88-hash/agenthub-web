import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { supabaseAdmin } from '@/lib/supabase'

const GEMINI_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`

export async function POST(request: NextRequest) {
  // ── 1. 인증 확인 ────────────────────────────────────────────────────────
  const user = await getSession()
  if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 })

  const body = await request.json()
  const agentId: string = body?.agentId
  const input: string = body?.input?.trim()

  if (!agentId || !input) {
    return NextResponse.json({ error: '에이전트 ID와 입력값이 필요합니다.' }, { status: 400 })
  }

  // ── 2. 에이전트 조회 ────────────────────────────────────────────────────
  const { data: agent, error: agentErr } = await supabaseAdmin
    .from('agents')
    .select('id, title, prompt, price_per_run, run_count, status')
    .eq('id', agentId)
    .eq('status', 'published')
    .single()

  if (agentErr || !agent) {
    return NextResponse.json({ error: '에이전트를 찾을 수 없습니다.' }, { status: 404 })
  }

  // ── 3. 원자적 크레딧 차감 ───────────────────────────────────────────────
  const { data: deducted, error: rpcErr } = await supabaseAdmin.rpc('deduct_credits', {
    p_user: user.id,
    p_amount: agent.price_per_run,
  })

  if (rpcErr) {
    console.error('[run] deduct_credits RPC error:', rpcErr)
    return NextResponse.json({ error: '결제 처리 중 오류가 발생했습니다.' }, { status: 500 })
  }

  if (!deducted) {
    return NextResponse.json(
      { error: '크레딧이 부족합니다. 충전 후 이용해주세요.' },
      { status: 402 }
    )
  }

  // ── 4. 실행 기록 생성 (pending) ─────────────────────────────────────────
  const { data: run, error: runErr } = await supabaseAdmin
    .from('agent_runs')
    .insert({
      agent_id: agentId,
      user_id: user.id,
      input,
      credits_charged: agent.price_per_run,
      status: 'pending',
    })
    .select('id')
    .single()

  if (runErr || !run) {
    // 기록 생성 실패 → 즉시 환불
    await supabaseAdmin.rpc('add_credits', {
      p_user: user.id,
      p_amount: agent.price_per_run,
      p_type: 'refund',
    })
    console.error('[run] agent_runs insert error:', runErr)
    return NextResponse.json({ error: '실행 기록 생성 실패, 크레딧이 환불됐습니다.' }, { status: 500 })
  }

  // ── 5. Gemini API 호출 ──────────────────────────────────────────────────
  let output: string
  try {
    const geminiRes = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: `${agent.prompt}\n\n사용자 입력:\n${input}` }],
          },
        ],
      }),
    })

    if (!geminiRes.ok) {
      const errText = await geminiRes.text()
      throw new Error(`Gemini ${geminiRes.status}: ${errText.slice(0, 200)}`)
    }

    const geminiData = await geminiRes.json()
    output = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
    if (!output) throw new Error('Gemini가 빈 응답을 반환했습니다.')
  } catch (err) {
    // ── 실패 → 크레딧 환불 ─────────────────────────────────────────────
    await Promise.all([
      supabaseAdmin.rpc('add_credits', {
        p_user: user.id,
        p_amount: agent.price_per_run,
        p_type: 'refund',
        p_run: run.id,
      }),
      supabaseAdmin
        .from('agent_runs')
        .update({ status: 'refunded' })
        .eq('id', run.id),
    ])
    console.error('[run] LLM error:', err)
    return NextResponse.json(
      { error: '에이전트 실행에 실패했습니다. 크레딧이 환불됐습니다.' },
      { status: 500 }
    )
  }

  // ── 6. 성공 → 기록 업데이트 + 실행 횟수 증가 ──────────────────────────
  await Promise.all([
    supabaseAdmin
      .from('agent_runs')
      .update({ output, status: 'success' })
      .eq('id', run.id),
    supabaseAdmin.rpc('increment_run_count', { p_agent: agentId }),
  ])

  return NextResponse.json({ success: true, output, runId: run.id })
}
