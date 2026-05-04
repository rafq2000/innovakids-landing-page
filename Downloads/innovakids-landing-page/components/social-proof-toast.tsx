"use client"

import { useEffect, useState, useCallback, useRef } from "react"

interface ToastEntry {
  name: string
  country: string
  action: string
  time: string
}

const DATA: ToastEntry[] = [
  { name: "María G.", country: "Chile", action: "reservó su clase gratis", time: "hace 12 min" },
  { name: "Ana L.", country: "México", action: "inscribió a su hijo", time: "hace 47 min" },
  { name: "Carolina P.", country: "Colombia", action: "agendó sesión de diagnóstico", time: "hace 2 horas" },
  { name: "Fernanda R.", country: "Argentina", action: "reservó su clase gratis", time: "hace 3 horas" },
  { name: "Lucía M.", country: "España", action: "inscribió a sus 2 hijos", time: "hace 5 horas" },
  { name: "Valentina S.", country: "Perú", action: "agendó sesión de diagnóstico", time: "hace 6 horas" },
  { name: "Camila D.", country: "Ecuador", action: "reservó su clase gratis", time: "hace 8 horas" },
  { name: "Daniela F.", country: "Costa Rica", action: "inscribió a su hija", time: "hace 1 día" },
]

const SESSION_KEY = "ik_spt_count"
const MAX_TOASTS = 4

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function isPastCalendly(): boolean {
  const el = document.getElementById("sesion-estrategica")
  if (!el) return false
  const rect = el.getBoundingClientRect()
  // Consider "past" when the section's top has scrolled above the viewport midpoint
  return rect.top < window.innerHeight * 0.5
}

export function SocialProofToast() {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [current, setCurrent] = useState<ToastEntry | null>(null)

  const queueRef = useRef<ToastEntry[]>([])
  const shownCountRef = useRef(0)
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const nextTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const dismiss = useCallback(() => {
    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current)
    setLeaving(true)
    setTimeout(() => {
      setVisible(false)
      setLeaving(false)
      setCurrent(null)
    }, 400)
  }, [])

  const showNext = useCallback(() => {
    const sessionCount = parseInt(sessionStorage.getItem(SESSION_KEY) ?? "0", 10)
    if (sessionCount >= MAX_TOASTS) return
    if (isPastCalendly()) return

    if (queueRef.current.length === 0) {
      queueRef.current = shuffle(DATA)
    }

    const entry = queueRef.current.shift()!
    setCurrent(entry)
    setLeaving(false)
    setVisible(true)

    const newCount = sessionCount + 1
    sessionStorage.setItem(SESSION_KEY, String(newCount))
    shownCountRef.current = newCount

    // Auto-dismiss after 5 s
    dismissTimerRef.current = setTimeout(() => {
      dismiss()
    }, 5000)

    // Schedule next toast (25–35 s after this one appears)
    if (newCount < MAX_TOASTS) {
      const delay = 25000 + Math.random() * 10000
      nextTimerRef.current = setTimeout(() => {
        showNext()
      }, delay + 5400) // wait for dismiss animation + gap
    }
  }, [dismiss])

  useEffect(() => {
    // Bootstrap: show first toast after 8 s
    const sessionCount = parseInt(sessionStorage.getItem(SESSION_KEY) ?? "0", 10)
    if (sessionCount >= MAX_TOASTS) return

    queueRef.current = shuffle(DATA)

    nextTimerRef.current = setTimeout(() => {
      showNext()
    }, 8000)

    return () => {
      if (nextTimerRef.current) clearTimeout(nextTimerRef.current)
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current)
    }
    // showNext is stable via useCallback — intentional single-run
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!visible || !current) return null

  return (
    <div
      role="status"
      aria-live="polite"
      onClick={dismiss}
      className={[
        "fixed bottom-4 left-4 z-40 cursor-pointer",
        "max-w-[320px] w-[calc(100vw-2rem)]",
        "bg-[#1A1714] border border-[#FAF7EF]/10 rounded-[3px] shadow-lg",
        "px-5 py-4 select-none",
        leaving
          ? "animate-[spt-leave_0.4s_ease-in_forwards]"
          : "animate-[spt-enter_0.35s_cubic-bezier(0.22,1,0.36,1)_forwards]",
      ].join(" ")}
      style={
        {
          "--tw-shadow": "0 8px 32px rgba(0,0,0,0.4)",
        } as React.CSSProperties
      }
    >
      <style>{`
        @keyframes spt-enter {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes spt-leave {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-16px); }
        }
      `}</style>

      {/* Label */}
      <p
        className="text-[#C96342] uppercase tracking-[0.24em] mb-2 leading-none"
        style={{ fontFamily: "'IBM Plex Mono', 'Courier New', monospace", fontSize: "10px" }}
      >
        Actividad reciente
      </p>

      {/* Main message */}
      <p
        className="text-[#FAF7EF] text-base leading-snug"
        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
      >
        <strong className="font-semibold">{current.name}</strong> de {current.country}{" "}
        {current.action}
      </p>

      {/* Time ago */}
      <p
        className="mt-2 text-[#FAF7EF]/40 leading-none"
        style={{ fontFamily: "'IBM Plex Mono', 'Courier New', monospace", fontSize: "9px" }}
      >
        {current.time}
      </p>
    </div>
  )
}
