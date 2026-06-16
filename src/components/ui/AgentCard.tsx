import { Star, Users } from "lucide-react";
import { Badge } from "./Badge";
import type { Agent } from "@/lib/data";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-surface rounded-xl border border-line p-5 flex flex-col gap-3 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between gap-2">
        <Badge label={agent.category} variant="category" />
        {agent.badge && (
          <Badge label={agent.badge} variant={agent.badge === "HOT" ? "hot" : "new"} />
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-base font-semibold text-ink leading-snug mb-1">
          {agent.name}
        </h3>
        <p className="text-sm text-ink-sub leading-relaxed line-clamp-2">
          {agent.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-line">
        <span className="text-sm font-bold text-primary">{agent.price}</span>
        <div className="flex items-center gap-3 text-xs text-ink-sub">
          <span className="flex items-center gap-0.5">
            <Star className="w-3.5 h-3.5 text-amber fill-amber" />
            {agent.rating}
          </span>
          <span className="flex items-center gap-0.5">
            <Users className="w-3.5 h-3.5" />
            {agent.usageCount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
