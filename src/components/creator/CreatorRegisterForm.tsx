"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const AGENT_CATEGORIES = [
  { value: "", label: "에이전트 종류를 선택하세요" },
  { value: "marketing", label: "마케팅" },
  { value: "writing", label: "글쓰기·콘텐츠" },
  { value: "dev", label: "개발·코딩" },
  { value: "design", label: "디자인" },
  { value: "analytics", label: "데이터 분석" },
  { value: "support", label: "고객 응대" },
  { value: "automation", label: "업무 자동화" },
  { value: "education", label: "교육·학습" },
  { value: "etc", label: "기타" },
];

interface FormState {
  name: string;
  email: string;
  category: string;
  intro: string;
  agreed: boolean;
}

const INITIAL: FormState = { name: "", email: "", category: "", intro: "", agreed: false };

export function CreatorRegisterForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  function validate(): boolean {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "이름을 입력해주세요.";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "유효한 이메일 주소를 입력해주세요.";
    if (!form.category) next.category = "에이전트 종류를 선택해주세요.";
    if (!form.agreed) next.agreed = "개인정보 수집 및 이용에 동의해주세요.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setApiError("");
    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "creator",
          name: form.name,
          email: form.email,
          content: `에이전트종류: ${form.category}\n소개: ${form.intro}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setApiError(data.error ?? "오류가 발생했습니다. 다시 시도해주세요.");
        return;
      }
      setSubmitted(true);
    } catch {
      setApiError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center gap-5 py-12 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="w-14 h-14 text-teal" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-ink">신청 완료!</h2>
        <p className="text-ink-sub text-sm leading-relaxed max-w-xs">
          접수가 완료됐습니다.{" "}
          <strong className="text-primary">{form.email}</strong>으로
          영업일 기준 2~3일 내 안내 드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* 이름 */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="reg-name">
          이름 <span className="text-primary" aria-label="필수">*</span>
        </label>
        <input
          id="reg-name"
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="홍길동"
          className={`w-full h-12 px-4 rounded-lg border bg-surface text-ink text-sm placeholder:text-ink-sub focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
            errors.name ? "border-red-400" : "border-line focus:border-primary"
          }`}
          aria-required="true"
          aria-describedby={errors.name ? "err-name" : undefined}
          disabled={loading}
        />
        {errors.name && (
          <p id="err-name" className="mt-1 text-xs text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* 이메일 */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="reg-email">
          이메일 <span className="text-primary" aria-label="필수">*</span>
        </label>
        <input
          id="reg-email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="hello@example.com"
          className={`w-full h-12 px-4 rounded-lg border bg-surface text-ink text-sm placeholder:text-ink-sub focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
            errors.email ? "border-red-400" : "border-line focus:border-primary"
          }`}
          aria-required="true"
          aria-describedby={errors.email ? "err-email" : undefined}
          disabled={loading}
        />
        {errors.email && (
          <p id="err-email" className="mt-1 text-xs text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* 에이전트 종류 */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="reg-category">
          만들고 싶은 에이전트 종류 <span className="text-primary" aria-label="필수">*</span>
        </label>
        <select
          id="reg-category"
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
          className={`w-full h-12 px-4 rounded-lg border bg-surface text-ink text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer ${
            errors.category ? "border-red-400" : "border-line focus:border-primary"
          } ${!form.category ? "text-ink-sub" : ""}`}
          aria-required="true"
          aria-describedby={errors.category ? "err-category" : undefined}
          disabled={loading}
        >
          {AGENT_CATEGORIES.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.category && (
          <p id="err-category" className="mt-1 text-xs text-red-500" role="alert">
            {errors.category}
          </p>
        )}
      </div>

      {/* 간단 소개 */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="reg-intro">
          간단 소개{" "}
          <span className="text-ink-sub text-xs font-normal">(선택)</span>
        </label>
        <textarea
          id="reg-intro"
          value={form.intro}
          onChange={(e) => update("intro", e.target.value)}
          placeholder="만들고 싶은 에이전트나 본인 소개를 자유롭게 작성해주세요."
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-line bg-surface text-ink text-sm placeholder:text-ink-sub focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          disabled={loading}
        />
      </div>

      {/* 개인정보 동의 */}
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={(e) => update("agreed", e.target.checked)}
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
      {errors.agreed && (
        <p className="-mt-3 text-xs text-red-500" role="alert">
          {errors.agreed}
        </p>
      )}

      {apiError && (
        <p className="text-xs text-red-500 text-center" role="alert">
          {apiError}
        </p>
      )}

      <Button size="lg" onClick={handleSubmit} className="w-full mt-2" disabled={loading}>
        {loading ? "처리 중…" : "신청서 제출"}
      </Button>
    </div>
  );
}
