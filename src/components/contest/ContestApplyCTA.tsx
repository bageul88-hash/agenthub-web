import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { contestContent } from "@/lib/data";

export function ContestApplyCTA() {
  return (
    <section
      className="bg-primary-dark py-16 md:py-20"
      aria-labelledby="contest-cta-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5 text-center">
        <h2
          id="contest-cta-heading"
          className="text-2xl md:text-[32px] font-bold text-white mb-4 leading-snug"
        >
          지금 참가 신청하고
          <br className="hidden sm:block" />
          <span className="text-amber">{contestContent.totalPrize}</span>에 도전하세요
        </h2>
        <p className="text-white/60 text-sm md:text-base mb-8">
          참가비 없음 · 누구나 참가 가능 · {contestContent.deadline} 마감
        </p>
        <Link
          href="/contest/apply"
          className="inline-flex items-center gap-2 bg-amber text-white font-semibold rounded-lg px-8 py-4 text-base hover:bg-amber/90 transition-colors duration-150 min-h-[44px]"
        >
          참가 신청하기
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
