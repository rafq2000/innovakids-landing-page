"use client"

import { useEffect, useState } from "react"

export function HeroCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const startDate = new Date("2026-04-27T00:00:00")
    const update = () => {
      const diff = startDate.getTime() - Date.now()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }
    update()
    const i = setInterval(update, 1000)
    return () => clearInterval(i)
  }, [])

  const items = [
    { value: timeLeft.days, label: "DÍAS" },
    { value: timeLeft.hours, label: "HORAS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEG" },
  ]

  return (
    <div className="flex items-end gap-6 md:gap-10">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-start">
          <span className="font-display text-6xl md:text-7xl lg:text-[96px] leading-[0.85] tabular-nums text-[var(--ink)]">
            {item.value.toString().padStart(2, "0")}
          </span>
          <span className="font-mono-accent text-[10px] text-[var(--ink-muted)] tracking-[0.25em] mt-2">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
