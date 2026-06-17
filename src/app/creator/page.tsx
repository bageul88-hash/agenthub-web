import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CreatorHero } from "@/components/creator/CreatorHero";
import { CreatorBenefits } from "@/components/creator/CreatorBenefits";
import { RevenueModel } from "@/components/creator/RevenueModel";
import { CreatorSteps } from "@/components/creator/CreatorSteps";
import { CreatorStories } from "@/components/creator/CreatorStories";
import { CreatorFaq } from "@/components/creator/CreatorFaq";
import { CreatorRegisterCTA } from "@/components/creator/CreatorRegisterCTA";

export const metadata: Metadata = {
  title: "크리에이터 프로그램 — AgentHub",
  description:
    "AI 에이전트를 등록하고 구독 수익을 만드세요. 코딩 없이 시작 가능. 판매액의 70% 정산.",
};

export default function CreatorPage() {
  return (
    <>
      <Navbar />
      <main>
        <CreatorHero />
        <CreatorBenefits />
        <RevenueModel />
        <CreatorSteps />
        <CreatorStories />
        <CreatorFaq />
        <CreatorRegisterCTA />
      </main>
      <Footer />
    </>
  );
}
