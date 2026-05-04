"use client"

import { useState, useEffect, useCallback, useRef } from "react"

/* ─────────────────────────────────────────────
   Entry animation keyframes injected once into
   the document head — avoids a Tailwind plugin
   dependency for a single-use animation.
───────────────────────────────────────────── */
const KEYFRAMES = `
@keyframes ik-popup-in {
  from { opacity: 0; transform: translateY(12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
}
.ik-popup-in {
  animation: ik-popup-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
}
`

function useInjectStyles(css: string) {
  useEffect(() => {
    if (typeof document === "undefined") return
    const id = "ik-exit-popup-styles"
    if (document.getElementById(id)) return
    const style = document.createElement("style")
    style.id = id
    style.textContent = css
    document.head.appendChild(style)
  }, [css])
}

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
const SESSION_KEY = "exitPopupShown"

function isCalendlySectionVisible(): boolean {
  if (typeof document === "undefined") return false
  const el = document.getElementById("sesion-estrategica")
  if (!el) return false
  const rect = el.getBoundingClientRect()
  // Consider "scrolled past" when the section top is above the middle of the viewport
  return rect.top < window.innerHeight * 0.5
}

function isMobile(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(pointer: coarse)").matches
}

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const hasShownRef = useRef(false)
  useInjectStyles(KEYFRAMES)

  const show = useCallback(() => {
    if (hasShownRef.current) return
    if (isCalendlySectionVisible()) return
    hasShownRef.current = true
    sessionStorage.setItem(SESSION_KEY, "true")
    setIsVisible(true)
  }, [])

  const dismiss = useCallback(() => {
    setIsVisible(false)
  }, [])

  const handleCTA = useCallback(() => {
    dismiss()
    // Small delay so the popup fades before the scroll jumps
    setTimeout(() => {
      const el = document.getElementById("sesion-estrategica")
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 180)
  }, [dismiss])

  useEffect(() => {
    // Already shown in this session — never attach listeners
    if (sessionStorage.getItem(SESSION_KEY)) {
      hasShownRef.current = true
      return
    }

    let desktopTimer: ReturnType<typeof setTimeout> | null = null
    let mobileTimer: ReturnType<typeof setTimeout> | null = null
    let mouseLeaveHandler: ((e: MouseEvent) => void) | null = null

    // ── Desktop: 5-second delay + mouse-leave from top ──
    if (!isMobile()) {
      mouseLeaveHandler = (e: MouseEvent) => {
        if (e.clientY <= 0) show()
      }
      desktopTimer = setTimeout(() => {
        document.addEventListener("mouseleave", mouseLeaveHandler!)
      }, 5000)
    }

    // ── Mobile: 45-second inactivity timer ──
    if (isMobile()) {
      mobileTimer = setTimeout(() => {
        show()
      }, 45_000)

      const resetTimer = () => {
        if (mobileTimer) clearTimeout(mobileTimer)
        mobileTimer = setTimeout(() => show(), 45_000)
      }

      window.addEventListener("touchstart", resetTimer, { passive: true })
      window.addEventListener("scroll", resetTimer, { passive: true })

      return () => {
        if (mobileTimer) clearTimeout(mobileTimer)
        window.removeEventListener("touchstart", resetTimer)
        window.removeEventListener("scroll", resetTimer)
      }
    }

    return () => {
      if (desktopTimer) clearTimeout(desktopTimer)
      if (mouseLeaveHandler) document.removeEventListener("mouseleave", mouseLeaveHandler)
    }
  }, [show])

  if (!isVisible) return null

  return (
    /* ── Overlay ── */
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Antes de irte"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(15, 12, 10, 0.78)", backdropFilter: "blur(6px)" }}
    >
      {/* Invisible backdrop hit-target for dismiss */}
      <div
        className="absolute inset-0"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* ── Card ── */}
      <div
        className="ik-popup-in relative w-full max-w-[440px] bg-[#1A1714] text-[#FAF7EF] border border-[#FAF7EF]/15 rounded-[3px] px-8 pt-10 pb-8"
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Cerrar"
          className="absolute top-4 right-4 text-[#FAF7EF]/50 hover:text-[#FAF7EF] transition-colors duration-150 leading-none text-lg select-none"
        >
          &#x2715;
        </button>

        {/* Label */}
        <p
          className="font-mono-accent text-[10px] uppercase tracking-[0.32em] text-[#C96342] mb-5"
        >
          Antes de irte
        </p>

        {/* Headline */}
        <h2
          className="font-display text-[#FAF7EF] leading-[1.05] tracking-[-0.02em] text-3xl sm:text-[2rem] mb-4"
        >
          ¿Sabías que la IA ya está{" "}
          <em className="italic text-[#C96342]">cambiando el futuro</em>{" "}
          de tu hijo?
        </h2>

        {/* Subtext */}
        <p className="text-[#FAF7EF]/65 text-[15px] leading-relaxed mb-8 max-w-[38ch]">
          Agenda una sesión diagnóstica gratuita de 30 minutos. Sin compromiso,
          solo claridad sobre el siguiente paso de tu hijo.
        </p>

        {/* Divider */}
        <div className="border-t border-[#FAF7EF]/10 mb-8" />

        {/* CTA */}
        <button
          onClick={handleCTA}
          className="w-full bg-[#C96342] text-[#FAF7EF] font-mono-accent text-[11px] uppercase tracking-[0.26em] px-6 py-4 rounded-[2px] transition-colors duration-200 hover:bg-[#A84F33] active:bg-[#9A4428] mb-4"
        >
          Agendar sesión gratis
        </button>

        {/* Dismiss link */}
        <div className="text-center">
          <button
            onClick={dismiss}
            className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#FAF7EF]/35 hover:text-[#FAF7EF]/60 transition-colors duration-150"
          >
            No, gracias
          </button>
        </div>

        {/* Trust line */}
        <p className="mt-7 text-center font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/30">
          527 graduados &middot; &#9733; 4.9 &middot; 10 días de garantía
        </p>
      </div>
    </div>
  )
}
