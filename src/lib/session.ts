import 'server-only'
import { createSupabaseServer } from './supabase-server'

export async function getSession() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) return null
  return user
}
