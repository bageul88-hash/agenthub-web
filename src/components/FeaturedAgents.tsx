"use client"

import { featuredAgents } from "@/lib/data"
import { AgentCard } from "./ui/AgentCard"
import { SignupToast } from "./ui/SignupToast"
import { useSignupCard } from "@/hooks/useSignupCard"

export function FeaturedAgents() {
  const { handleCardClick, toastVisible } = useSignupCard()

  return (
    <section
      id="agents"
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex items-end justify-between mb-8 gap-4">
          <h2
            id="featured-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink"
          >
            지금 가장 인기 있는 에이전트
          </h2>
          <a
            href="#"
            className="text-sm text-accent font-medium hover:underline shrink-0"
          >
            전체 보기 →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      <SignupToast visible={toastVisible} />
    </section>
  )
}
