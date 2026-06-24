'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Bot } from 'lucide-react'
import { supabaseBrowser } from '@/lib/supabase-browser'
import { Button } from '@/components/ui/Button'

type Mode = 'login' | 'signup'

const INPUT_CLASS =
  'w-full h-11 px-4 rounded-lg border border-line bg-white text-ink text-sm placeholder:text-ink-sub focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50'

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  function reset() {
    setError('')
    setSuccess('')
  }

  async function handleSubmit() {
    reset()
    if (!email || !password) {
      setError('이메일과 비밀번호를 입력해주세요.')
      return
    }
    setLoading(true)
    try {
      if (mode === 'signup') {
        const { error: err } = await supabaseBrowser.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${location.origin}/auth/callback` },
        })
        if (err) throw err
        setSuccess('가입 확인 이메일을 보냈어요. 받은 편지함을 확인해주세요.')
      } else {
        const { error: err } = await supabaseBrowser.auth.signInWithPassword({
          email,
          password,
        })
        if (err) throw err
        router.push('/')
        router.refresh()
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : '오류가 발생했습니다.'
      if (msg.includes('Invalid login credentials')) {
        setError('이메일 또는 비밀번호가 올바르지 않습니다.')
      } else if (msg.includes('Email not confirmed')) {
        setError('이메일 인증이 필요합니다. 받은 편지함을 확인해주세요.')
      } else if (msg.includes('User already registered')) {
        setError('이미 가입된 이메일입니다. 로그인해주세요.')
      } else {
        setError(msg)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-ink">AgentHub</span>
        </Link>

        <div className="bg-white rounded-2xl border border-line p-8 shadow-sm">
          <h1 className="text-lg font-bold text-ink mb-1 text-center">
            {mode === 'login' ? '로그인' : '회원가입'}
          </h1>
          <p className="text-sm text-ink-sub text-center mb-6">
            {mode === 'login'
              ? 'AI 에이전트를 바로 실행해보세요'
              : 'AgentHub에서 AI 에이전트를 활용하세요'}
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">이메일</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                className={INPUT_CLASS}
                disabled={loading}
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8자 이상"
                className={INPUT_CLASS}
                disabled={loading}
                autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>

            {error && (
              <p className="text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>
            )}
            {success && (
              <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2">{success}</p>
            )}

            <Button
              size="lg"
              onClick={handleSubmit}
              className="w-full mt-1"
              disabled={loading}
            >
              {loading ? '처리 중…' : mode === 'login' ? '로그인' : '회원가입'}
            </Button>

            <p className="text-sm text-ink-sub text-center">
              {mode === 'login' ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}{' '}
              <button
                className="text-primary font-medium hover:underline"
                onClick={() => {
                  setMode(mode === 'login' ? 'signup' : 'login')
                  reset()
                }}
              >
                {mode === 'login' ? '회원가입' : '로그인'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
