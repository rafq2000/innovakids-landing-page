"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { createClient } from "@/lib/supabase/client"
import { WHATSAPP } from "@/lib/site-config"

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

const SESSION_KEY = "exitPopupShown"

function isCalendlySectionVisible(): boolean {
  if (typeof document === "undefined") return false
  const el = document.getElementById("sesion-estrategica")
  if (!el) return false
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.5
}

function isMobile(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(pointer: coarse)").matches
}

function normalizePhone(raw: string): string {
  return raw.replace(/\D/g, "")
}

function buildWhatsappLink(name: string): string {
  const who = name.trim() || "interesado/a"
  const message = `Hola, soy ${who}. Quiero recibir la guía gratis de las 7 herramientas de IA para mi hijo/a.`
  return `https://wa.me/${WHATSAPP.sales}?text=${encodeURIComponent(message)}`
}

const RELATION_OPTIONS = [
  { value: "", label: "Soy su..." },
  { value: "papa", label: "Papá" },
  { value: "mama", label: "Mamá" },
  { value: "familiar", label: "Familiar" },
] as const

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [relation, setRelation] = useState("")
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
      const cleanPhone = normalizePhone(phone)
      if (!cleanPhone || cleanPhone.length < 8 || !relation || isSubmitting) return
      setIsSubmitting(true)

      // 1. Abrir WhatsApp de inmediato, dentro del gesto del usuario.
      //    (Debe ir ANTES de cualquier await para que el navegador móvil no lo bloquee.)
      window.open(buildWhatsappLink(name), "_blank")

      // 2. Guardar lead en Supabase (best-effort, no bloquea la apertura)
      try {
        const supabase = createClient()
        await supabase.from("booking_leads").insert({
          name: name.trim() || null,
          phone: cleanPhone,
          relation,
          source: "exit-popup-guia-whatsapp",
          created_at: new Date().toISOString(),
        })
      } catch {
        console.log("[exit-popup] supabase insert failed for:", cleanPhone)
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
    },
    [name, phone, relation, isSubmitting]
  )

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      hasShownRef.current = true
      return
    }

    // Aparece a los 3 segundos en desktop y mobile
    const timer = setTimeout(() => show(), 3000)
    return () => clearTimeout(timer)
  }, [show])

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Antes de irte"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(15, 12, 10, 0.78)", backdropFilter: "blur(6px)" }}
    >
      <div className="absolute inset-0" onClick={dismiss} aria-hidden="true" />

      <div className="ik-popup-in relative w-full max-w-[440px] bg-[#1A1714] text-[#FAF7EF] border border-[#FAF7EF]/15 rounded-[3px] px-8 pt-10 pb-8">
        <button
          onClick={dismiss}
          aria-label="Cerrar"
          className="absolute top-4 right-4 text-[#FAF7EF]/50 hover:text-[#FAF7EF] transition-colors duration-150 leading-none text-lg select-none"
        >
          &#x2715;
        </button>

        <p className="font-mono-accent text-[10px] uppercase tracking-[0.32em] text-[#B5522F] mb-5">
          Antes de irte
        </p>

        {isSubmitted ? (
          <>
            <h2 className="font-display text-[#FAF7EF] leading-[1.05] tracking-[-0.02em] text-3xl sm:text-[2rem] mb-4">
              Abrimos WhatsApp para enviarte la gu&iacute;a
            </h2>
            <p className="text-[#FAF7EF]/65 text-[15px] leading-relaxed mb-5 max-w-[38ch]">
              Env&iacute;anos el mensaje y te mandamos la gu&iacute;a al instante. Aprovecha y agenda tu clase gratis &mdash; los cupos son limitados.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP.sales}?text=${encodeURIComponent(`Hola, soy ${name.trim() || "interesado/a"}. Quiero recibir la guía de las 7 herramientas de IA y agendar la clase gratis para mi hijo/a.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-mono-accent text-[11px] uppercase tracking-[0.22em] px-6 py-4 rounded-[2px] transition-colors duration-200 hover:bg-[#1DA851] mb-3"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Agendar clase gratis por WhatsApp &rarr;
            </a>

            <a
              href={buildWhatsappLink(name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#C96342] text-[#FAF7EF] font-mono-accent text-[11px] uppercase tracking-[0.22em] px-6 py-4 rounded-[2px] transition-colors duration-200 hover:bg-[#9A4428] mb-6"
            >
              Abrir WhatsApp de nuevo &rarr;
            </a>

            <div className="border-t border-[#FAF7EF]/10 mb-6" />
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
            <h2 className="font-display text-[#FAF7EF] leading-[1.05] tracking-[-0.02em] text-3xl sm:text-[2rem] mb-4">
              Antes de irte{" "}
              <em className="italic text-[#B5522F]">&mdash; ll&eacute;vate esto gratis</em>
            </h2>

            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">&#x1F4D6;</span>
                <div>
                  <p className="text-[#FAF7EF] text-[15px] font-medium leading-snug">Gu&iacute;a: Las 7 herramientas de IA</p>
                  <p className="text-[#FAF7EF]/45 text-[13px]">PDF con paso a paso</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">&#x1F3AF;</span>
                <div>
                  <p className="text-[#FAF7EF] text-[15px] font-medium leading-snug">Clase en vivo gratis</p>
                  <p className="text-[#FAF7EF]/45 text-[13px]">Tu hijo crea su primer proyecto con IA</p>
                </div>
              </div>
            </div>

            <p className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/40 mb-6">
              Te lo enviamos directo a tu WhatsApp
            </p>

            <div className="border-t border-[#FAF7EF]/10 mb-6" />

            <form onSubmit={handleSubmit} className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="w-full bg-[#FAF7EF]/10 border border-[#FAF7EF]/20 text-[#FAF7EF] placeholder:text-[#FAF7EF]/35 px-4 py-3 rounded-[2px] text-[15px] focus:border-[#C96342] transition-colors mb-3"
              />

              {/* Selector de relación */}
              <select
                required
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full bg-[#FAF7EF]/10 border border-[#FAF7EF]/20 text-[#FAF7EF] px-4 py-3 rounded-[2px] text-[15px] focus:border-[#C96342] transition-colors mb-3 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23FAF7EF' stroke-width='1.5'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                {RELATION_OPTIONS.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.value === ""}
                    className="bg-[#1A1714] text-[#FAF7EF]"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+56 9 1234 5678"
                className="w-full bg-[#FAF7EF]/10 border border-[#FAF7EF]/20 text-[#FAF7EF] placeholder:text-[#FAF7EF]/35 px-4 py-3 rounded-[2px] text-[15px] focus:border-[#C96342] transition-colors mb-4"
              />

              <button
                type="submit"
                disabled={isSubmitting || !relation}
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-mono-accent text-[11px] uppercase tracking-[0.22em] px-6 py-4 rounded-[2px] transition-colors duration-200 hover:bg-[#1DA851] active:bg-[#1DA851] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {isSubmitting ? "Abriendo WhatsApp..." : "Recibir por WhatsApp \u2192"}
              </button>
            </form>

            <div className="text-center">
              <button
                onClick={dismiss}
                className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#FAF7EF]/35 hover:text-[#FAF7EF]/60 transition-colors duration-150"
              >
                Ahora no
              </button>
            </div>

            <p className="mt-7 text-center font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/30">
              527 graduados &middot; &#9733; 4.9 &middot; 21 pa&iacute;ses
            </p>
          </>
        )}
      </div>
    </div>
  )
}
