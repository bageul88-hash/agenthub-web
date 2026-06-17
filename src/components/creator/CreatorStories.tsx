import { Quote } from "lucide-react";
import { creatorContent } from "@/lib/data";

export function CreatorStories() {
  return (
    <section
      className="py-16 md:py-20 bg-surface-soft"
      aria-labelledby="stories-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="stories-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            먼저 시작한 분들
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            실제 크리에이터들의 수익 경험담을 들어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {creatorContent.stories.map((story) => (
            <div
              key={story.name}
              className="bg-surface rounded-2xl border border-line p-6 flex flex-col gap-4"
            >
              <Quote
                className="w-7 h-7 opacity-80"
                style={{ color: story.color }}
                aria-hidden="true"
              />

              <p className="text-sm text-ink leading-relaxed flex-1">
                &ldquo;{story.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-line">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: story.color }}
                  aria-hidden="true"
                >
                  {story.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink">{story.name}</p>
                  <p className="text-xs text-ink-sub truncate">{story.role}</p>
                </div>
                {/* Income badge */}
                <span className="shrink-0 text-xs font-bold text-amber bg-amber/10 border border-amber/20 rounded-full px-2.5 py-1">
                  {story.income}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
