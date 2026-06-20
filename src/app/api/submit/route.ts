import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

const LABEL: Record<string, string> = {
  signup: '사전등록',
  creator: '크리에이터 신청',
  contest: '콘테스트 신청',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, name, email, content } = body

    if (!type || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 1) Supabase 저장
    const { error } = await supabaseAdmin
      .from('submissions')
      .insert({ type, name: name ?? null, email, content: content ?? null })

    if (error) {
      console.error('[supabase insert error]', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // 2) Resend 운영자 알림 — 응답의 error까지 확인해서 로그
    try {
      const { data: mailData, error: mailError } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: process.env.NOTIFY_EMAIL!,
        subject: `[AgentHub] 새 ${LABEL[type] ?? type} 접수`,
        text:
          `유형: ${LABEL[type] ?? type}\n` +
          `이름: ${name ?? '-'}\n` +
          `이메일: ${email}\n` +
          `내용: ${content ?? '-'}\n` +
          `접수시각: ${new Date().toISOString()}`,
      })
      if (mailError) {
        console.error('[resend send error]', mailError)
      } else {
        console.log('[resend sent]', mailData)
      }
    } catch (mailErr) {
      console.error('[resend send exception]', mailErr)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (e) {
    console.error('[submit route error]', e)
    return NextResponse.json({ error: 'server error' }, { status: 500 })
  }
}