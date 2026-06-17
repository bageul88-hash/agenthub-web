"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const CATEGORIES = [
  { value: "", label: "출품 카테고리를 선택하세요" },
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
  idea: string;
  agreed: boolean;
}

const INITIAL: FormState = { name: "", email: "", category: "", idea: "", agreed: false };

export function ContestApplyForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "이름을 입력해주세요.";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "유효한 이메일 주소를 입력해주세요.";
    if (!form.category) next.category = "출품 카테고리를 선택해주세요.";
    if (!form.idea.trim()) next.idea = "에이전트 아이디어를 입력해주세요.";
    if (!form.agreed) next.agreed = "참가 약관에 동의해주세요.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    // TODO: integrate with Supabase or email service (e.g. Resend)
    console.log("콘테스트 참가 신청:", form);
    setSubmitted(true);
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
        <h2 className="text-2xl font-bold text-ink">참가 신청 완료!</h2>
        <p className="text-ink-sub text-sm leading-relaxed max-w-xs">
          <strong className="text-primary">{form.email}</strong>으로 접수 확인 메일을
          보내드릴게요. Build Challenge 2026에서 좋은 결과 기대합니다!
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full h-12 px-4 rounded-lg border bg-surface text-ink text-sm placeholder:text-ink-sub focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";
  const inputOk = "border-line focus:border-primary";
  const inputErr = "border-red-400";

  return (
    <div className="flex flex-col gap-5">
      {/* 이름 */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="apply-name">
          이름 <span className="text-primary" aria-label="필수">*</span>
        </label>
        <input
          id="apply-name"
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="홍길동"
          className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
          aria-required="true"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
      </div>

      {/* 이메일 */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="apply-email">
          이메일 <span className="text-primary" aria-label="필수">*</span>
        </label>
        <input
          id="apply-email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="hello@example.com"
          className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
          aria-required="true"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
      </div>

      {/* 출품 카테고리 */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="apply-category">
          출품 카테고리 <span className="text-primary" aria-label="필수">*</span>
        </label>
        <select
          id="apply-category"
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
          className={`${inputBase} appearance-none cursor-pointer ${errors.category ? inputErr : inputOk} ${!form.category ? "text-ink-sub" : ""}`}
          aria-required="true"
        >
          {CATEGORIES.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.category && <p className="mt-1 text-xs text-red-500" role="alert">{errors.category}</p>}
      </div>

      {/* 에이전트 아이디어 */}
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="apply-idea">
          에이전트 아이디어 한 줄 소개 <span className="text-primary" aria-label="필수">*</span>
        </label>
        <textarea
          id="apply-idea"
          value={form.idea}
          onChange={(e) => update("idea", e.target.value)}
          placeholder="예) 인스타그램 게시물을 자동으로 기획·작성·예약하는 마케팅 에이전트"
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border bg-surface text-ink text-sm placeholder:text-ink-sub focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none ${errors.idea ? inputErr : "border-line focus:border-primary"}`}
          aria-required="true"
        />
        {errors.idea && <p className="mt-1 text-xs text-red-500" role="alert">{errors.idea}</p>}
      </div>

      {/* 약관 동의 */}
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={(e) => update("agreed", e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-line accent-primary cursor-pointer"
          aria-required="true"
        />
        <span className="text-xs text-ink-sub leading-relaxed">
          Build Challenge 2026 참가 약관 및{" "}
          <a href="#" className="text-accent underline hover:no-underline">
            개인정보처리방침
          </a>
          에 동의합니다.
        </span>
      </label>
      {errors.agreed && <p className="-mt-3 text-xs text-red-500" role="alert">{errors.agreed}</p>}

      <Button size="lg" onClick={handleSubmit} className="w-full mt-2">
        참가 신청
      </Button>
    </div>
  );
}
