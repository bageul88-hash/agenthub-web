import Link from "next/link";
import { AgentCard } from "@/components/ui/AgentCard";
import { allAgents, contestContent } from "@/lib/data";

// TODO: replace href="#" with /agent/[id] when agent detail page is ready
export function WinnerGallery() {
  const showcaseAgents = allAgents.filter((a) =>
    contestContent.winnerAgentIds.includes(a.id)
  );

  if (showcaseAgents.length === 0) return null;

  return (
    <section
      className="py-16 md:py-20 bg-surface-soft"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="gallery-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            이런 에이전트를 기대해요
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            AgentHub 마켓에서 실제로 사랑받고 있는 에이전트들이에요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {showcaseAgents.map((agent) => (
            <Link
              key={agent.id}
              href="#"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              <AgentCard agent={agent} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
