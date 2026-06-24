import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Star, Users, ChevronLeft, Zap } from 'lucide-react'
import { supabaseAdmin } from '@/lib/supabase'
import { getSession } from '@/lib/session'
import { RunPanel } from './RunPanel'

interface Agent {
  id: string
  title: string
  description: string
  category: string
  price_per_run: number
  prompt: string
  input_label: string
  status: string
  rating_avg: number
  run_count: number
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // ── 에이전트 조회 ────────────────────────────────────────────────────────
  const { data: agent, error } = await supabaseAdmin
    .from('agents')
    .select('id, title, description, category, price_per_run, input_label, status, rating_avg, run_count')
    .eq('id', id)
    .eq('status', 'published')
    .single<Agent>()

  if (error || !agent) {
    notFound()
  }

  const user = await getSession()

  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-[1120px] mx-auto px-5 py-10">
        {/* 뒤로가기 */}
        <Link
          href="/#agents"
          className="inline-flex items-center gap-1.5 text-sm text-ink-sub hover:text-ink mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          에이전트 목록으로
        </Link>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10">
          {/* ── 좌측: 에이전트 정보 ─────────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                {agent.category}
              </span>
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 rounded-full px-3 py-1">
                HOT
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-ink mb-3">
              {agent.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-ink-sub mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-medium text-ink">{Number(agent.rating_avg).toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{agent.run_count.toLocaleString()}회 실행</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">
                  {agent.price_per_run.toLocaleString()} 크레딧 / 회
                </span>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-ink-sub leading-relaxed text-base">{agent.description}</p>
            </div>

            {/* 안내 박스 */}
            <div className="mt-8 bg-primary/5 border border-primary/15 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-ink mb-2">이런 분께 추천해요</h3>
              <ul className="flex flex-col gap-1.5 text-sm text-ink-sub list-disc list-inside">
                <li>반복 작업을 AI로 빠르게 처리하고 싶은 분</li>
                <li>전문 결과물을 빠르게 얻고 싶은 분</li>
                <li>아이디어를 즉시 실행으로 옮기고 싶은 분</li>
              </ul>
            </div>
          </div>

          {/* ── 우측: 실행 패널 ──────────────────────────────────────────── */}
          <div className="lg:sticky lg:top-20 self-start">
            <RunPanel
              agentId={agent.id}
              pricePerRun={agent.price_per_run}
              inputLabel={agent.input_label}
              isLoggedIn={!!user}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
