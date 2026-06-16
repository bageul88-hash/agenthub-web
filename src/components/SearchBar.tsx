"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const filterPills = [
  "전체",
  "마케팅",
  "글쓰기",
  "개발",
  "디자인",
  "분석",
  "고객응대",
  "자동화",
];

export function SearchBar() {
  const [active, setActive] = useState("전체");

  return (
    <section className="bg-surface-soft py-8 md:py-10" aria-label="에이전트 검색">
      <div className="max-w-[1120px] mx-auto px-5">
        {/* Search input */}
        <div className="relative max-w-2xl mx-auto mb-5">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-sub pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="예: 인스타 게시물 자동 작성 에이전트"
            className="w-full h-14 pl-12 pr-5 rounded-xl border border-line bg-surface text-ink text-sm placeholder:text-ink-sub focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            aria-label="에이전트 검색"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="카테고리 필터">
          {filterPills.map((pill) => (
            <button
              key={pill}
              onClick={() => setActive(pill)}
              className={`h-9 px-4 rounded-full text-sm font-medium border transition-all duration-150 min-w-[44px] ${
                active === pill
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-ink-sub border-line hover:border-primary/40 hover:text-accent"
              }`}
              aria-pressed={active === pill}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
