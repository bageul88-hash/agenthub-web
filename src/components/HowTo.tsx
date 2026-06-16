import { Search, Play, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "검색·발견",
    description:
      "원하는 업무를 자연어로 검색하세요. 인스타 게시물 자동화, 이메일 자동 답장 등 1,200개 이상의 에이전트가 기다립니다.",
  },
  {
    number: "2",
    icon: Play,
    title: "7일 무료 체험",
    description:
      "설치도, 코딩도 필요 없어요. 에이전트를 선택하고 바로 실행해보세요. 마음에 드는지 7일 동안 무료로 테스트할 수 있습니다.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "구독·자동화",
    description:
      "체험이 끝나면 마음에 드는 에이전트를 구독하세요. 월 ₩9,900부터 시작해서 내 업무를 완전히 자동화할 수 있습니다.",
  },
];

export function HowTo() {
  return (
    <section
      className="py-16 md:py-20 bg-surface-soft"
      aria-labelledby="howto-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="howto-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            이렇게 시작하세요
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            가입부터 자동화까지 단 3단계면 충분합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-px bg-line"
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-surface rounded-2xl border border-line p-6 flex flex-col items-center text-center gap-4"
              >
                {/* Step number badge */}
                <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                  </div>
                  <p className="text-sm text-ink-sub leading-relaxed">
                    {step.description}
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
