'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
import { supabaseBrowser } from '@/lib/supabase-browser'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { Button } from './ui/Button'

export function AuthButton() {
  const router = useRouter()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    supabaseBrowser.auth.getUser().then(({ data }) => setUser(data.user ?? null))

    const { data: { subscription } } = supabaseBrowser.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )
    return () => subscription.unsubscribe()
  }, [])

  async function signOut() {
    await supabaseBrowser.auth.signOut()
    setMenuOpen(false)
    router.push('/')
    router.refresh()
  }

  if (!user) {
    return (
      <Link href="/auth/login">
        <Button size="sm">로그인</Button>
      </Link>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="flex items-center gap-2 h-9 px-3 rounded-full border border-line text-sm text-ink-sub hover:border-primary hover:text-ink transition-all"
        aria-expanded={menuOpen}
      >
        <User className="w-4 h-4" />
        <span className="max-w-[140px] truncate hidden sm:block">{user.email}</span>
      </button>

      {menuOpen && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-11 z-50 w-56 bg-white rounded-xl border border-line shadow-lg py-1 overflow-hidden">
            <div className="px-4 py-2.5 border-b border-line">
              <p className="text-xs text-ink-sub truncate">{user.email}</p>
            </div>
            <button
              onClick={signOut}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-ink hover:bg-surface transition-colors"
            >
              <LogOut className="w-4 h-4 text-ink-sub" />
              로그아웃
            </button>
          </div>
        </>
      )}
    </div>
  )
}
