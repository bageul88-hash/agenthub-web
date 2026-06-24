import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 })

  const body = await request.json()
  const amount = Number(body?.amount)

  if (!Number.isInteger(amount) || amount <= 0 || amount > 100_000) {
    return NextResponse.json({ error: '유효하지 않은 충전 금액입니다.' }, { status: 400 })
  }

  const { error } = await supabaseAdmin.rpc('add_credits', {
    p_user: user.id,
    p_amount: amount,
    p_type: 'topup',
  })

  if (error) {
    console.error('[topup]', error)
    return NextResponse.json({ error: '충전 처리 중 오류가 발생했습니다.' }, { status: 500 })
  }

  const { data: wallet } = await supabaseAdmin
    .from('wallets')
    .select('balance')
    .eq('user_id', user.id)
    .single()

  return NextResponse.json({ success: true, balance: wallet?.balance ?? 0 })
}
