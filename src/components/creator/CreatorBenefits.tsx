import {
  TrendingUp, Zap, Megaphone, Users, LucideProps,
} from "lucide-react";
import type { FC } from "react";
import { creatorContent } from "@/lib/data";

const iconMap: Record<string, FC<LucideProps>> = {
  TrendingUp, Zap, Megaphone, Users,
};

export function CreatorBenefits() {
  return (
    <section
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="benefits-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            크리에이터가 되면 좋은 점
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            AgentHub 크리에이터만의 특별한 혜택을 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {creatorContent.benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={benefit.title}
                className="bg-surface-soft rounded-2xl border border-line p-6 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                  {Icon && (
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-ink-sub leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
