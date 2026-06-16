import {
  Megaphone, PenTool, Code2, Palette, BarChart2,
  MessageSquare, Zap, BookOpen, LucideProps,
} from "lucide-react";
import type { FC } from "react";
import type { Category } from "@/lib/data";

const iconMap: Record<string, FC<LucideProps>> = {
  Megaphone, PenTool, Code2, Palette, BarChart2, MessageSquare, Zap, BookOpen,
};

interface Props {
  category: Category;
  agentCount: number;
}

export function CategoryHeader({ category, agentCount }: Props) {
  const Icon = iconMap[category.icon];

  return (
    <div className="bg-surface-soft border-b border-line">
      <div className="max-w-[1120px] mx-auto px-5 py-8 md:py-10 flex flex-col sm:flex-row sm:items-center gap-5">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${category.color}18` }}
          aria-hidden="true"
        >
          {Icon && (
            <Icon className="w-8 h-8" style={{ color: category.color }} />
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-[28px] font-bold text-ink leading-snug">
            {category.name}
          </h1>
          <p className="text-sm text-ink-sub mt-1">{category.description}</p>
        </div>

        {/* Count */}
        <div className="sm:text-right shrink-0">
          <p className="text-2xl font-bold text-primary">{agentCount}</p>
          <p className="text-xs text-ink-sub mt-0.5">개의 에이전트</p>
        </div>
      </div>
    </div>
  );
}
