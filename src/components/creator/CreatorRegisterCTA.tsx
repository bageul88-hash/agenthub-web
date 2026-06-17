import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CreatorRegisterCTA() {
  return (
    <section
      className="bg-primary-dark py-16 md:py-20"
      aria-labelledby="creator-cta-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5 text-center">
        <h2
          id="creator-cta-heading"
          className="text-2xl md:text-[32px] font-bold text-white mb-4 leading-snug"
        >
          지금 크리에이터로 등록하고
          <br className="hidden sm:block" />
          수익을 시작하세요
        </h2>
        <p className="text-white/60 text-sm md:text-base mb-8">
          등록 수수료 없음 · 언제든 탈퇴 가능 · 2~3일 내 심사 완료
        </p>
        <Link
          href="/creator/register"
          className="inline-flex items-center gap-2 bg-amber text-white font-semibold rounded-lg px-8 py-4 text-base hover:bg-amber/90 transition-colors duration-150 min-h-[44px]"
        >
          등록 신청하기
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
