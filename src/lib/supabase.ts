import { createClient } from '@supabase/supabase-js'

// 브라우저용 (publishable key) — 필요할 때만
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// 서버 전용 (secret key) — RLS 우회. route.ts insert는 이걸 사용
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
)