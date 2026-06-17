import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContestApplyForm } from "@/components/contest/ContestApplyForm";
import { contestContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Build Challenge 2026 참가 신청 — AgentHub",
  description: "Build Challenge 2026에 참가 신청하세요. 총 상금 ₩10,000,000.",
};

export default function ContestApplyPage() {
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
            <Link href="/" className="hover:text-primary transition-colors">홈</Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <Link href="/contest" className="hover:text-primary transition-colors">콘테스트</Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-ink font-medium">참가 신청</span>
          </nav>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-[28px] font-bold text-ink mb-2">
              {contestContent.title} 참가 신청
            </h1>
            <p className="text-sm text-ink-sub leading-relaxed">
              신청서를 보내주시면 접수 확인 메일을 보내드려요.
              <br />
              참가비는 없으며, 마감은{" "}
              <strong className="text-ink">{contestContent.deadline}</strong>입니다.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-surface rounded-2xl border border-line p-6 md:p-8">
            <ContestApplyForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
