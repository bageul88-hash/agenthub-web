import {
  Megaphone,
  PenTool,
  Code2,
  Palette,
  BarChart2,
  MessageSquare,
  Zap,
  BookOpen,
  LucideProps,
} from "lucide-react";
import { categories } from "@/lib/data";
import type { FC } from "react";

const iconMap: Record<string, FC<LucideProps>> = {
  Megaphone,
  PenTool,
  Code2,
  Palette,
  BarChart2,
  MessageSquare,
  Zap,
  BookOpen,
};

export function Categories() {
  return (
    <section
      id="categories"
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <h2
          id="categories-heading"
          className="text-2xl md:text-[28px] font-semibold text-ink mb-8"
        >
          카테고리로 찾아보기
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.iconName];
            return (
              <button
                key={cat.id}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-line bg-surface hover:border-primary hover:shadow-[0_4px_16px_rgba(127,119,221,0.12)] transition-all duration-200 text-center cursor-pointer"
                aria-label={`${cat.name} 카테고리 — 에이전트 ${cat.agentCount}개`}
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-200"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink mb-0.5">{cat.name}</p>
                  <p className="text-xs text-ink-sub">{cat.agentCount}개 에이전트</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
