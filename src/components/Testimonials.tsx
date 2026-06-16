import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

const typeLabelMap: Record<string, string> = {
  buyer: "사용자",
  seller: "크리에이터",
  winner: "콘테스트 수상자",
};

export function Testimonials() {
  return (
    <section
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            이미 많은 분들이 쓰고 있어요
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            사용자, 크리에이터, 수상자 모두가 AgentHub와 함께합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-surface-soft rounded-2xl border border-line p-6 flex flex-col gap-4"
            >
              <Quote
                className="w-7 h-7 opacity-80"
                style={{ color: t.color }}
                aria-hidden="true"
              />

              <p className="text-sm text-ink leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-line">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink truncate">{t.name}</p>
                  <p className="text-xs text-ink-sub truncate">{t.role}</p>
                </div>
                <span className="ml-auto shrink-0 text-[10px] font-medium text-accent bg-primary-light rounded-full px-2 py-0.5">
                  {typeLabelMap[t.type]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
