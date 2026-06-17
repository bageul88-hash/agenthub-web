import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CreatorRegisterForm } from "@/components/creator/CreatorRegisterForm";

export const metadata: Metadata = {
  title: "크리에이터 등록 신청 — AgentHub",
  description: "AgentHub 크리에이터로 등록하고 AI 에이전트 수익을 시작하세요.",
};

export default function CreatorRegisterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface-soft">
        <div className="max-w-[560px] mx-auto px-5 py-10 md:py-16">
          {/* Breadcrumb */}
          <nav
            aria-label="경로"
            className="flex items-center gap-1 text-xs text-ink-sub mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              홈
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <Link href="/creator" className="hover:text-primary transition-colors">
              크리에이터
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-ink font-medium">등록 신청</span>
          </nav>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-[28px] font-bold text-ink mb-2">
              크리에이터 등록 신청
            </h1>
            <p className="text-sm text-ink-sub leading-relaxed">
              신청서를 보내주시면 영업일 기준 2~3일 내 안내드려요.
              <br />
              등록 수수료는 없으며, 판매 발생 시에만 수수료(30%)가 적용됩니다.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-surface rounded-2xl border border-line p-6 md:p-8">
            <CreatorRegisterForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
