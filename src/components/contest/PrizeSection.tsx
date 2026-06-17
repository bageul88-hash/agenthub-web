import { contestContent } from "@/lib/data";

export function PrizeSection() {
  return (
    <section
      id="prizes"
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="prizes-heading"
    >
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            id="prizes-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            이런 혜택이 있어요
          </h2>
          <p className="text-ink-sub text-sm md:text-base">
            총 상금 <strong className="text-primary">₩10,000,000</strong>과 마켓 노출 혜택을 드려요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contestContent.prizes.map((prize) => (
            <div
              key={prize.label}
              className={`rounded-2xl p-6 flex flex-col gap-4 ${
                prize.highlight
                  ? "border-2 border-primary bg-primary-light/30"
                  : "border border-line bg-surface-soft"
              }`}
            >
              {/* Rank + label */}
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label={prize.label}>
                  {prize.rank}
                </span>
                <span
                  className={`text-sm font-bold px-3 py-0.5 rounded-full ${
                    prize.highlight
                      ? "bg-amber text-white"
                      : "bg-primary-light text-accent"
                  }`}
                >
                  {prize.label}
                </span>
              </div>

              {/* Amount */}
              <p
                className={`text-3xl font-bold ${
                  prize.highlight ? "text-primary" : "text-ink"
                }`}
              >
                {prize.amount}
              </p>

              {/* Perks */}
              <ul className="flex flex-col gap-2">
                {prize.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-ink-sub">
                    <span className="text-teal mt-0.5 shrink-0" aria-hidden="true">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
