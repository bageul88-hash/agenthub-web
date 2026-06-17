"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { contestContent } from "@/lib/data";

export function ContestFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="contest-faq-heading"
    >
      <div className="max-w-[640px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2
            id="contest-faq-heading"
            className="text-2xl md:text-[28px] font-semibold text-ink mb-3"
          >
            자주 묻는 질문
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-line border border-line rounded-2xl overflow-hidden">
          {contestContent.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx}>
                <button
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-surface-soft transition-colors duration-150"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-ink leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-ink-sub shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-ink-sub leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
