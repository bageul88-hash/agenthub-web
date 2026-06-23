"use client"

import { useState, useCallback, useRef } from "react"

export function useSignupCard() {
  const [toastVisible, setToastVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCardClick = useCallback(() => {
    const el = document.getElementById("signup")
    if (el) el.scrollIntoView({ behavior: "smooth" })

    if (timerRef.current) clearTimeout(timerRef.current)
    setToastVisible(true)
    timerRef.current = setTimeout(() => setToastVisible(false), 3500)
  }, [])

  return { handleCardClick, toastVisible }
}
