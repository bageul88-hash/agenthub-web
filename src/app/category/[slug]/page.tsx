import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CategoryHeader } from "@/components/category/CategoryHeader";
import { CategoryContent } from "@/components/category/CategoryContent";
import { OtherCategories } from "@/components/category/OtherCategories";
import {
  categories,
  getCategoryBySlug,
  getAgentsByCategory,
} from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${cat.name} 에이전트 — AgentHub`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const agents = getAgentsByCategory(slug);
  const otherCategories = categories.filter((c) => c.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        {/* ── Breadcrumb ──────────────────────── */}
        <div className="max-w-[1120px] mx-auto px-5 pt-5 pb-1">
          <nav aria-label="경로" className="flex items-center gap-1 text-xs text-ink-sub">
            <Link href="/" className="hover:text-primary transition-colors">
              홈
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-ink font-medium">{category.name}</span>
          </nav>
        </div>

        {/* ── Category header ──────────────────── */}
        <CategoryHeader category={category} agentCount={agents.length} />

        {/* ── Sort bar + Agent grid ────────────── */}
        <div className="max-w-[1120px] mx-auto px-5 py-10">
          <CategoryContent agents={agents} />
        </div>

        {/* ── Other categories ─────────────────── */}
        <OtherCategories categories={otherCategories} />
      </main>
      <Footer />
    </>
  );
}
