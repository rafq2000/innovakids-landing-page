"use client"

import { useEffect, useState } from "react"

export function HeroLiveCounter() {
  const [viewers, setViewers] = useState(0)

  useEffect(() => {
    setViewers(Math.floor(Math.random() * 15) + 25)
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(20, Math.min(50, prev + change))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-flex items-center gap-3 font-mono-accent text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--terracotta)] live-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--terracotta)]" />
      </span>
      <span className="tabular-nums text-[var(--ink)] text-sm normal-case tracking-normal font-display">
        {viewers}
      </span>
      familias viendo ahora
    </span>
  )
}
