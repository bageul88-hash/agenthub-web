import { TrendingUp } from "lucide-react";
import { weeklyRanking } from "@/lib/data";
import { Badge } from "./ui/Badge";

export function WeeklyRanking() {
  return (
    <section
      className="py-16 md:py-20 bg-surface-soft"
      aria-labelledby="ranking-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-6 h-6 text-teal" aria-hidden="true" />
          <h2
            id="ranking-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink"
          >
            이번 주 인기 급상승
          </h2>
        </div>

        <div className="bg-surface rounded-2xl border border-line overflow-hidden">
          {weeklyRanking.map((item, idx) => (
            <div
              key={item.rank}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-surface-soft transition-colors cursor-pointer ${
                idx !== weeklyRanking.length - 1 ? "border-b border-line" : ""
              }`}
            >
              {/* Rank */}
              <span
                className={`w-7 text-center text-sm font-bold shrink-0 ${
                  item.rank <= 3 ? "text-primary" : "text-ink-sub"
                }`}
                aria-label={`${item.rank}위`}
              >
                {item.rank}
              </span>

              {/* Name + category */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ink truncate mb-1">
                  {item.name}
                </p>
                <Badge label={item.category} variant="category" />
              </div>

              {/* Growth */}
              <div className="hidden sm:flex items-center gap-1 text-teal text-sm font-semibold shrink-0">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                <span>+{item.weeklyGrowth.toLocaleString()} 구독</span>
              </div>

              {/* Price */}
              <span className="text-sm font-bold text-primary shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
