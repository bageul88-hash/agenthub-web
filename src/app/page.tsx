import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { FeaturedAgents } from "@/components/FeaturedAgents";
import { WeeklyRanking } from "@/components/WeeklyRanking";
import { Categories } from "@/components/Categories";
import { HowTo } from "@/components/HowTo";
import { Testimonials } from "@/components/Testimonials";
import { CreatorBanner } from "@/components/CreatorBanner";
import { SignupCTA } from "@/components/SignupCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <FeaturedAgents />
        <WeeklyRanking />
        <Categories />
        <HowTo />
        <Testimonials />
        <CreatorBanner />
        <SignupCTA />
      </main>
      <Footer />
    </>
  );
}
