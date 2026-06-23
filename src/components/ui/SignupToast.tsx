"use client"

export function SignupToast({ visible }: { visible: boolean }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-ink text-white text-sm font-medium shadow-xl whitespace-nowrap transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      🎉 출시되면 사용 가능해요! 사전등록하고 가장 먼저 받아보세요
    </div>
  )
}
