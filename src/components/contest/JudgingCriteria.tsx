import { contestContent } from "@/lib/data";

export function JudgingCriteria() {
  return (
    <section
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="criteria-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="criteria-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            이렇게 평가해요
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            4가지 기준으로 종합 평가합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contestContent.criteria.map((criterion) => (
            <div
              key={criterion.title}
              className="bg-surface-soft rounded-2xl border border-line p-6 flex flex-col gap-3"
            >
              {/* Title + weight */}
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-ink">{criterion.title}</h3>
                <span className="shrink-0 text-sm font-bold text-primary bg-primary-light rounded-full px-3 py-0.5">
                  {criterion.weight}%
                </span>
              </div>

              {/* Weight bar */}
              <div
                className="h-1.5 rounded-full bg-line overflow-hidden"
                role="progressbar"
                aria-valuenow={criterion.weight}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${criterion.title} 비중 ${criterion.weight}%`}
              >
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${criterion.weight}%` }}
                />
              </div>

              <p className="text-sm text-ink-sub leading-relaxed">{criterion.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
