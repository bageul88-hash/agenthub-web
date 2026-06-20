"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";

export function SignupCTA() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    if (!agreed) {
      setError("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "signup", email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "오류가 발생했습니다. 다시 시도해주세요.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="py-16 md:py-20 bg-primary-light/40"
      aria-labelledby="signup-heading"
    >
      <div className="max-w-[560px] mx-auto px-5 text-center">
        {submitted ? (
          <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
            <CheckCircle2 className="w-14 h-14 text-teal" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-ink">사전등록 완료!</h2>
            <p className="text-ink-sub text-sm leading-relaxed">
              <strong className="text-primary">{email}</strong>으로 오픈 소식을 보내드릴게요.
              <br />
              출시 시 첫 달 무료 + 얼리버드 혜택이 제공됩니다.
            </p>
          </div>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 bg-amber/10 text-amber border border-amber/30 rounded-full px-4 py-1 text-sm font-semibold mb-5">
              🎉 얼리버드 사전등록
            </div>

            <h2
              id="signup-heading"
              className="text-2xl md:text-[28px] font-bold text-ink mb-3"
            >
              얼리버드 사전등록
            </h2>
            <p className="text-ink-sub text-sm md:text-base leading-relaxed mb-8">
              지금 등록하면 출시 시{" "}
              <strong className="text-primary">첫 달 무료</strong> +
              얼리버드 전용 혜택을 드려요.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 h-12 px-4 rounded-lg border border-line bg-surface text-ink text-sm placeholder:text-ink-sub focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                aria-label="이메일 주소"
                aria-required="true"
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                disabled={loading}
              />
              <Button size="md" onClick={handleSubmit} className="h-12 sm:shrink-0" disabled={loading}>
                {loading ? "처리 중…" : "사전등록"}
              </Button>
            </div>

            <label className="inline-flex items-start gap-2 text-left cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => { setAgreed(e.target.checked); setError(""); }}
                className="mt-0.5 w-4 h-4 rounded border-line accent-primary cursor-pointer"
                aria-required="true"
                disabled={loading}
              />
              <span className="text-xs text-ink-sub leading-relaxed">
                개인정보 수집 및 이용에 동의합니다.{" "}
                <a href="#" className="text-accent underline hover:no-underline">
                  개인정보처리방침
                </a>
              </span>
            </label>

            {error && (
              <p className="mt-3 text-xs text-red-500" role="alert">
                {error}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
