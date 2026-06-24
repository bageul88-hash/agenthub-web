import { NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  const user = await getSession()
  if (!user) return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 })

  const { data, error } = await supabaseAdmin
    .from('wallets')
    .select('balance')
    .eq('user_id', user.id)
    .single()

  if (error || !data) {
    return NextResponse.json({ balance: 0 })
  }

  return NextResponse.json({ balance: data.balance })
}
