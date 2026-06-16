import { Button } from "./ui/Button";

const stats = [
  { label: "에이전트", value: "1,200+" },
  { label: "사용자", value: "8,000+" },
  { label: "크리에이터", value: "350+" },
  { label: "평균 평점", value: "4.9" },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-primary-light/60 via-white to-white pt-20 pb-16 md:pt-28 md:pb-24"
      aria-label="히어로 섹션"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1120px] mx-auto px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-light border border-primary/20 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <span role="img" aria-label="로봇">🤖</span>
          한국 최초 AI 에이전트 마켓플레이스
        </div>

        {/* H1 */}
        <h1 className="text-[32px] md:text-[44px] font-bold text-ink leading-[1.25] tracking-tight mb-5">
          내 업무에 딱 맞는
          <br />
          <span className="text-primary">AI 에이전트</span>를, 지금 바로.
        </h1>

        {/* Sub copy */}
        <p className="text-base md:text-lg text-ink-sub leading-relaxed max-w-xl mx-auto mb-8">
          AgentHub는 AI 에이전트 크리에이터와 업무 자동화가 필요한 사용자를
          연결하는 국내 최초 AI 에이전트 마켓플레이스입니다.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <Button size="lg">무료로 시작하기</Button>
          <Button size="lg" variant="ghost">
            에이전트 둘러보기
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-sm text-ink-sub">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
