"use client"

import { useEffect, useState } from "react"

/**
 * Fecha objetivo: Lunes 11 de mayo 2026, 00:00 hora Chile (UTC-4).
 * Se declara con offset explícito para que el cálculo sea idéntico
 * en servidor (SSR) y cliente, sin depender de la zona horaria local.
 */
const TARGET_ISO = "2026-05-11T00:00:00-04:00"
const TARGET_MS = new Date(TARGET_ISO).getTime()

type T = { days: number; hours: number; minutes: number; seconds: number }

function compute(): T {
  const diff = Math.max(0, TARGET_MS - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  }
}

export function HeroCountdown() {
  // Inicializamos con 0/0/0/0 para evitar mismatch SSR ↔ cliente.
  // El primer tick real ocurre en useEffect (cliente).
  const [t, setT] = useState<T>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Set inmediato al montar
    setT(compute())
    setReady(true)

    // Tick cada segundo
    const id = setInterval(() => setT(compute()), 1000)
    return () => clearInterval(id)
  }, [])

  const items: Array<{ value: number; label: string }> = [
    { value: t.days, label: "DÍAS" },
    { value: t.hours, label: "HORAS" },
    { value: t.minutes, label: "MIN" },
    { value: t.seconds, label: "SEG" },
  ]

  return (
    <div
      className="flex items-end gap-6 md:gap-10"
      aria-live="polite"
      aria-label="Cuenta regresiva hasta el inicio de la cohorte"
      data-ready={ready}
    >
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-start">
          <span
            suppressHydrationWarning
            className="font-display text-6xl md:text-7xl lg:text-[96px] leading-[0.85] tabular-nums text-[var(--ink)]"
          >
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
