"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { createClient } from "@/lib/supabase/client"

/* -----------------------------------------
   Entry animation keyframes injected once into
   the document head
----------------------------------------- */
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

/* -----------------------------------------
   Helpers
----------------------------------------- */
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

/* -----------------------------------------
   Component
----------------------------------------- */
export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!email || isSubmitting) return
      setIsSubmitting(true)

      try {
        const supabase = createClient()
        await supabase.from("booking_leads").insert({
          email,
          source: "exit-popup-lead-magnet",
          created_at: new Date().toISOString(),
        })
      } catch {
        // TODO: si supabase falla, el lead se pierde pero el usuario ve confirmacion
        console.log("[exit-popup] supabase insert failed for:", email)
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
    },
    [email, isSubmitting]
  )

  useEffect(() => {
    // Already shown in this session -- never attach listeners
    if (sessionStorage.getItem(SESSION_KEY)) {
      hasShownRef.current = true
      return
    }

    let desktopTimer: ReturnType<typeof setTimeout> | null = null
    let mobileTimer: ReturnType<typeof setTimeout> | null = null
    let mouseLeaveHandler: ((e: MouseEvent) => void) | null = null

    // -- Desktop: 5-second delay + mouse-leave from top --
    if (!isMobile()) {
      mouseLeaveHandler = (e: MouseEvent) => {
        if (e.clientY <= 0) show()
      }
      desktopTimer = setTimeout(() => {
        document.addEventListener("mouseleave", mouseLeaveHandler!)
      }, 5000)
    }

    // -- Mobile: 45-second inactivity timer --
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
    /* -- Overlay -- */
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

      {/* -- Card -- */}
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

        {isSubmitted ? (
          <>
            {/* Success state */}
            <h2
              className="font-display text-[#FAF7EF] leading-[1.05] tracking-[-0.02em] text-3xl sm:text-[2rem] mb-4"
            >
              Listo, revisa tu correo
            </h2>
            <p className="text-[#FAF7EF]/65 text-[15px] leading-relaxed mb-8 max-w-[38ch]">
              Te enviamos los 10 prompts de IA a <strong className="text-[#FAF7EF]">{email}</strong>.
              Si no los ves, revisa la carpeta de spam.
            </p>
            <div className="border-t border-[#FAF7EF]/10 mb-8" />
            <div className="text-center">
              <button
                onClick={dismiss}
                className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#FAF7EF]/50 hover:text-[#FAF7EF]/80 transition-colors duration-150"
              >
                Cerrar
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Headline */}
            <h2
              className="font-display text-[#FAF7EF] leading-[1.05] tracking-[-0.02em] text-3xl sm:text-[2rem] mb-4"
            >
              Antes de irte{" "}
              <em className="italic text-[#C96342]">-- llevate esto gratis</em>
            </h2>

            {/* Lead magnet description */}
            <p className="text-[#FAF7EF]/65 text-[15px] leading-relaxed mb-4 max-w-[38ch]">
              10 prompts de IA que tu hijo puede usar hoy para crear, aprender y sorprenderte.
            </p>

            {/* Trust line */}
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/40 mb-8">
              Sin compromiso. Sin spam. Solo valor.
            </p>

            {/* Divider */}
            <div className="border-t border-[#FAF7EF]/10 mb-8" />

            {/* Email form */}
            <form onSubmit={handleSubmit} className="mb-4">
              <label htmlFor="exit-popup-email" className="sr-only">
                Tu email
              </label>
              <input
                id="exit-popup-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full bg-[#FAF7EF]/10 border border-[#FAF7EF]/20 text-[#FAF7EF] placeholder:text-[#FAF7EF]/35 px-4 py-3 rounded-[2px] text-[15px] focus:border-[#C96342] transition-colors mb-4"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C96342] text-[#FAF7EF] font-mono-accent text-[11px] uppercase tracking-[0.26em] px-6 py-4 rounded-[2px] transition-colors duration-200 hover:bg-[#9A4428] active:bg-[#9A4428] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar los prompts gratis \u2192"}
              </button>
            </form>

            {/* Dismiss link */}
            <div className="text-center">
              <button
                onClick={dismiss}
                className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#FAF7EF]/35 hover:text-[#FAF7EF]/60 transition-colors duration-150"
              >
                No gracias, ya conozco estas herramientas
              </button>
            </div>

            {/* Social proof */}
            <p className="mt-7 text-center font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/30">
              527 graduados &middot; &#9733; 4.9 &middot; 10 dias de garantia
            </p>
          </>
        )}
      </div>
    </div>
  )
}
