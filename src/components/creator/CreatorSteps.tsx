import {
  FileText, Bot, ShieldCheck, CreditCard, LucideProps,
} from "lucide-react";
import type { FC } from "react";
import { creatorContent } from "@/lib/data";

const iconMap: Record<string, FC<LucideProps>> = {
  FileText, Bot, ShieldCheck, CreditCard,
};

export function CreatorSteps() {
  return (
    <section
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="steps-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="steps-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            이렇게 시작하세요
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            신청부터 판매까지 단 4단계입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {creatorContent.steps.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.no}
                className="relative bg-surface-soft rounded-2xl border border-line p-6 flex flex-col gap-3"
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {step.no}
                  </div>
                  {Icon && (
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  )}
                </div>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-sm text-ink-sub leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
