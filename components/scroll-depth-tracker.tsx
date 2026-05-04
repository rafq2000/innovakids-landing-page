"use client"

import { useEffect } from "react"

const MILESTONES = [25, 50, 75, 90] as const

export function ScrollDepthTracker() {
  useEffect(() => {
    const fired = new Set<number>()

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const pct = Math.round((scrollTop / docHeight) * 100)

      for (const m of MILESTONES) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m)
          if (typeof window.gtag === "function") {
            window.gtag("event", "scroll_depth", {
              percent: m,
              page_path: window.location.pathname,
            })
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return null
}
