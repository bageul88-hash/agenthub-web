import Link from "next/link";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contestContent } from "@/lib/data";

export function ContestHero() {
  const { title, theme, period, totalPrize, deadline } = contestContent;

  return (
    <section
      className="relative overflow-hidden bg-primary-deep pt-20 pb-16 md:pt-28 md:pb-24"
      aria-label="콘테스트 히어로"
    >
      {/* subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1120px] mx-auto px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 text-amber rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          <Trophy className="w-4 h-4" aria-hidden="true" />
          {title}
        </div>

        {/* H1 */}
        <h1 className="text-[32px] md:text-[44px] font-bold text-white leading-[1.25] tracking-tight mb-4">
          당신의 첫 AI 에이전트로
          <br />
          <span className="text-primary-light">{/* primary-light for contrast on dark bg */}</span>
          <span className="text-amber">도전</span>하세요.
        </h1>

        {/* Theme + period */}
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-3">
          {theme}
        </p>
        <p className="text-white/50 text-sm mb-8">
          참가 기간 : <span className="text-white/80 font-medium">{period}</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link href="/contest/apply">
            <Button size="lg">참가 신청하기</Button>
          </Link>
          <a href="#prizes">
            <Button size="lg" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
              수상 혜택 보기
            </Button>
          </a>
        </div>

        {/* Prize highlight box */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/8 border border-white/15 rounded-2xl px-8 py-5">
          <div className="text-center">
            <p className="text-white/50 text-xs mb-1">총 상금</p>
            <p className="text-3xl md:text-4xl font-bold text-amber">{totalPrize}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/15" aria-hidden="true" />
          <div className="text-center">
            <p className="text-white/50 text-xs mb-1">접수 마감</p>
            <p className="text-xl font-bold text-white">{deadline}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/15" aria-hidden="true" />
          <div className="text-center">
            <p className="text-white/50 text-xs mb-1">참가비</p>
            <p className="text-xl font-bold text-white">무료</p>
          </div>
        </div>
      </div>
    </section>
  );
}
