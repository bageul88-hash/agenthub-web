"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Bot } from "lucide-react";
import { AgentCard } from "@/components/ui/AgentCard";
import { SignupToast } from "@/components/ui/SignupToast";
import { Button } from "@/components/ui/Button";
import { useSignupCard } from "@/hooks/useSignupCard";
import type { Agent } from "@/lib/data";
import { parsePriceKRW } from "@/lib/data";

type SortKey = "popular" | "latest" | "price" | "rating";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "popular", label: "인기순" },
  { key: "latest", label: "최신순" },
  { key: "price", label: "가격 낮은순" },
  { key: "rating", label: "평점순" },
];

interface Props {
  agents: Agent[];
}

export function CategoryContent({ agents }: Props) {
  const [sort, setSort] = useState<SortKey>("popular");
  const { handleCardClick, toastVisible } = useSignupCard();

  const sorted = useMemo(() => {
    const copy = [...agents];
    switch (sort) {
      case "popular":
        return copy.sort((a, b) => b.usageCount - a.usageCount);
      case "latest":
        return copy.sort((a, b) => Number(b.id) - Number(a.id));
      case "price":
        return copy.sort((a, b) => parsePriceKRW(a.price) - parsePriceKRW(b.price));
      case "rating":
        return copy.sort((a, b) => b.rating - a.rating);
      default:
        return copy;
    }
  }, [agents, sort]);

  // ── Empty state ──────────────────────────────
  if (agents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mb-4">
          <Bot className="w-8 h-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-lg font-semibold text-ink mb-2">
          아직 등록된 에이전트가 없어요
        </h2>
        <p className="text-sm text-ink-sub mb-6 max-w-xs">
          이 카테고리의 첫 번째 에이전트를 등록하고 수익을 창출해보세요.
        </p>
        <Link href="/#creator">
          <Button size="md">크리에이터로 첫 에이전트 등록하기</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ── Sort bar ─────────────────────────── */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <p className="text-sm text-ink-sub">
          총 <strong className="text-ink">{agents.length}개</strong>의 에이전트
        </p>
        <div
          className="flex items-center gap-1.5 flex-wrap justify-end"
          role="group"
          aria-label="정렬 기준"
        >
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSort(opt.key)}
              className={`h-8 px-3 rounded-full text-xs font-medium border transition-all duration-150 min-w-[44px] ${
                sort === opt.key
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-ink-sub border-line hover:border-primary/40 hover:text-accent"
              }`}
              aria-pressed={sort === opt.key}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Agent grid ───────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.map((agent) => (
          <AgentCard key={agent.id} agent={agent} onClick={handleCardClick} />
        ))}
      </div>

      <SignupToast visible={toastVisible} />
    </>
  );
}
