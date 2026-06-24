'use client'

import { useState, useEffect, useCallback } from 'react'
import { Copy, RefreshCw, Zap, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Props {
  agentId: string
  pricePerRun: number
  inputLabel: string
  isLoggedIn: boolean
}

export function RunPanel({ agentId, pricePerRun, inputLabel, isLoggedIn }: Props) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [balance, setBalance] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [topupLoading, setTopupLoading] = useState(false)

  const fetchBalance = useCallback(async () => {
    if (!isLoggedIn) return
    try {
      const res = await fetch('/api/wallet')
      if (res.ok) {
        const data = await res.json()
        setBalance(data.balance)
      }
    } catch {
      // ignore
    }
  }, [isLoggedIn])

  useEffect(() => {
    fetchBalance()
  }, [fetchBalance])

  async function handleRun() {
    if (!input.trim()) {
      setError('입력값을 작성해주세요.')
      return
    }
    setError('')
    setOutput('')
    setLoading(true)
    try {
      const res = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId, input }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? '실행 중 오류가 발생했습니다.')
      } else {
        setOutput(data.output)
        await fetchBalance()
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  async function handleTopup() {
    setTopupLoading(true)
    try {
      const res = await fetch('/api/topup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1000 }),
      })
      const data = await res.json()
      if (res.ok) {
        setBalance(data.balance)
        setError('')
      } else {
        setError(data.error ?? '충전 중 오류가 발생했습니다.')
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.')
    } finally {
      setTopupLoading(false)
    }
  }

  async function handleCopy() {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const insufficient = balance !== null && balance < pricePerRun

  // ── 비로그인 ──────────────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div className="bg-white rounded-2xl border border-line p-6 flex flex-col items-center gap-4 text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Zap className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-ink mb-1">로그인 후 이용 가능합니다</p>
          <p className="text-sm text-ink-sub">가입하면 테스트 크레딧을 드려요</p>
        </div>
        <a
          href="/auth/login"
          className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          무료로 시작하기
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-line overflow-hidden">
      {/* 잔액 표시 */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-line bg-surface">
        <div className="flex items-center gap-2 text-sm text-ink-sub">
          <Wallet className="w-4 h-4" />
          <span>
            잔액{' '}
            <strong className="text-ink">
              {balance === null ? '…' : `${balance.toLocaleString()} 크레딧`}
            </strong>
          </span>
        </div>
        <button
          onClick={handleTopup}
          disabled={topupLoading}
          className="text-xs text-primary font-medium hover:underline disabled:opacity-50"
        >
          {topupLoading ? '충전 중…' : '+ 1,000 크레딧 테스트 충전'}
        </button>
      </div>

      {/* 입력 영역 */}
      <div className="p-5 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-2">{inputLabel}</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="여기에 입력하세요…"
            rows={5}
            disabled={loading}
            className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-sm text-ink placeholder:text-ink-sub resize-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
          />
        </div>

        {error && (
          <div className="flex items-center justify-between gap-3 bg-red-50 rounded-xl px-4 py-3">
            <p className="text-xs text-red-600">{error}</p>
            {insufficient && (
              <button
                onClick={handleTopup}
                disabled={topupLoading}
                className="shrink-0 text-xs font-semibold text-white bg-primary rounded-full px-3 py-1 hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                충전하기
              </button>
            )}
          </div>
        )}

        <Button
          size="lg"
          onClick={handleRun}
          disabled={loading || insufficient}
          className="w-full"
        >
          {loading
            ? '실행 중…'
            : insufficient
            ? `크레딧 부족 (${pricePerRun.toLocaleString()} 크레딧 필요)`
            : `실행하기 · ${pricePerRun.toLocaleString()} 크레딧`}
        </Button>
      </div>

      {/* 결과 영역 */}
      {output && (
        <div className="border-t border-line">
          <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-surface">
            <span className="text-xs font-semibold text-ink-sub uppercase tracking-wider">결과</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-ink-sub hover:text-ink transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? '복사됨!' : '복사'}
              </button>
              <button
                onClick={() => { setOutput(''); setInput('') }}
                className="flex items-center gap-1.5 text-xs text-ink-sub hover:text-ink transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                다시 실행
              </button>
            </div>
          </div>
          <div className="px-5 py-4">
            <pre className="text-sm text-ink whitespace-pre-wrap leading-relaxed font-sans">
              {output}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
