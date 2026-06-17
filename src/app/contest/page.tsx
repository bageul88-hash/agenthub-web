import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContestHero } from "@/components/contest/ContestHero";
import { PrizeSection } from "@/components/contest/PrizeSection";
import { ContestTimeline } from "@/components/contest/ContestTimeline";
import { JudgingCriteria } from "@/components/contest/JudgingCriteria";
import { WinnerGallery } from "@/components/contest/WinnerGallery";
import { ContestFaq } from "@/components/contest/ContestFaq";
import { ContestApplyCTA } from "@/components/contest/ContestApplyCTA";

export const metadata: Metadata = {
  title: "Build Challenge 2026 — AgentHub",
  description:
    "총 상금 ₩10,000,000. AI 에이전트를 만들고 도전하세요. 2026.07.01 ~ 2026.08.31 참가 모집.",
};

export default function ContestPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContestHero />
        <PrizeSection />
        <ContestTimeline />
        <JudgingCriteria />
        <WinnerGallery />
        <ContestFaq />
        <ContestApplyCTA />
      </main>
      <Footer />
    </>
  );
}
