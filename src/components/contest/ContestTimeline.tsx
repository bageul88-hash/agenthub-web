import { contestContent } from "@/lib/data";

export function ContestTimeline() {
  return (
    <section
      className="py-16 md:py-20 bg-surface-soft"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-[640px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="timeline-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            진행 일정
          </h2>
        </div>

        <ol className="relative flex flex-col gap-0">
          {contestContent.timeline.map((item, idx) => {
            const isLast = idx === contestContent.timeline.length - 1;
            return (
              <li key={item.date} className="relative flex gap-5 pb-8">
                {/* Vertical line */}
                {!isLast && (
                  <div
                    className="absolute left-[11px] top-6 bottom-0 w-px bg-line"
                    aria-hidden="true"
                  />
                )}

                {/* Dot */}
                <div
                  className={`relative z-10 w-6 h-6 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center ${
                    item.done
                      ? "bg-primary border-primary"
                      : "bg-surface border-line"
                  }`}
                  aria-hidden="true"
                >
                  {item.done && (
                    <span className="text-white text-[10px] font-bold">✓</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pb-2">
                  <p className="text-xs text-ink-sub mb-1 font-medium">{item.date}</p>
                  <h3
                    className={`text-base font-semibold mb-1 ${
                      item.done ? "text-primary" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm text-ink-sub leading-relaxed">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
