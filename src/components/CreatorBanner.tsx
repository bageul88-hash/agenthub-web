import { ArrowUpRight } from "lucide-react";

export function CreatorBanner() {
  return (
    <section
      id="creator"
      className="bg-primary-deep py-16 md:py-20"
      aria-labelledby="creator-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2
            id="creator-heading"
            className="text-2xl md:text-[32px] font-bold text-white mb-3 leading-snug"
          >
            AI 에이전트 크리에이터가 되어보세요
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg">
            나만의 에이전트를 등록하고 수익을 창출하세요.
            <br className="hidden md:block" />
            월 평균 크리에이터 수익{" "}
            <strong className="text-amber font-bold">₩340,000</strong>
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-amber text-white font-semibold rounded-lg px-7 py-3.5 hover:bg-amber/90 transition-colors duration-150 shrink-0 min-h-[44px] text-base"
          aria-label="크리에이터 등록하기"
        >
          크리에이터 등록하기
          <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
