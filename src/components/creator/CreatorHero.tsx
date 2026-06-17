import Link from "next/link";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "평균 월수익", value: "₩340,000" },
  { label: "크리에이터 정산 비율", value: "70%" },
  { label: "활성 크리에이터", value: "350+" },
];

export function CreatorHero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-primary-light/60 via-white to-white pt-20 pb-16 md:pt-28 md:pb-24"
      aria-label="크리에이터 히어로"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1120px] mx-auto px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 text-amber rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          <span role="img" aria-label="돈">💰</span>
          크리에이터 프로그램
        </div>

        {/* H1 */}
        <h1 className="text-[32px] md:text-[44px] font-bold text-ink leading-[1.25] tracking-tight mb-5">
          당신의 AI 에이전트로
          <br />
          <span className="text-primary">수익</span>을 만드세요.
        </h1>

        {/* Sub copy */}
        <p className="text-base md:text-lg text-ink-sub leading-relaxed max-w-xl mx-auto mb-8">
          코딩 몰라도 OK. 만든 에이전트를 등록하고
          <br className="hidden sm:block" />
          구독 수익을 자동으로 받으세요.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <Link href="/creator/register">
            <Button size="lg">등록 신청하기</Button>
          </Link>
          <a href="#revenue">
            <Button size="lg" variant="ghost">수익 구조 보기</Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
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
