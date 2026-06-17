import { ArrowRight } from "lucide-react";

const flow = [
  { step: "에이전트 등록", desc: "프롬프트·설정 업로드" },
  { step: "사용자 구독", desc: "월 구독료 결제" },
  { step: "월 정산", desc: "판매액의 70% 지급" },
];

export function RevenueModel() {
  return (
    <section
      id="revenue"
      className="py-16 md:py-20 bg-surface-soft"
      aria-labelledby="revenue-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="revenue-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            이렇게 수익이 발생해요
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            구독 모델로 안정적인 월 수익을 만들 수 있어요.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          {flow.map((item, idx) => (
            <div key={item.step} className="flex items-center gap-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center mb-2">
                  {idx + 1}
                </div>
                <p className="text-sm font-semibold text-ink">{item.step}</p>
                <p className="text-xs text-ink-sub mt-0.5">{item.desc}</p>
              </div>
              {idx < flow.length - 1 && (
                <ArrowRight
                  className="w-5 h-5 text-ink-sub shrink-0 rotate-90 sm:rotate-0 mb-0 sm:mb-4"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Example calculation box */}
        <div className="max-w-lg mx-auto bg-primary-deep rounded-2xl p-6 md:p-8 text-center">
          <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-4">
            수익 계산 예시
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-white text-sm md:text-base font-medium mb-4">
            <span className="bg-white/10 rounded-lg px-3 py-1.5">월 100명 구독</span>
            <span className="text-white/40">×</span>
            <span className="bg-white/10 rounded-lg px-3 py-1.5">₩9,900</span>
            <span className="text-white/40">×</span>
            <span className="bg-white/10 rounded-lg px-3 py-1.5">70%</span>
            <span className="text-white/40">=</span>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-amber">
            월 ₩693,000
          </p>
          <p className="text-white/40 text-xs mt-3">
            * 실제 수익은 에이전트 가격·구독자 수에 따라 달라집니다.
          </p>
        </div>
      </div>
    </section>
  );
}
