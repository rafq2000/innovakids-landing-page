"use client"

import { useEffect, useRef, useState } from "react"

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, inView }
}

const INK = "#1A1714"
const TERRA = "#C96342"

/* ─── small atoms ─────────────────────────────────────────── */

const Check = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0 mt-[1px]" fill="none">
    <circle cx="10" cy="10" r="9" fill={TERRA} fillOpacity="0.15" />
    <path d="M5.5 10.5 L8.5 13.5 L14.5 7.5" stroke={TERRA} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Cross = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5 shrink-0 mt-[1px]" fill="none">
    <circle cx="10" cy="10" r="9" fill={INK} fillOpacity="0.07" />
    <path d="M7 7 L13 13 M13 7 L7 13" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.45" />
  </svg>
)

/* ─── para quién ─────────────────────────────────────────── */

const forYes = [
  "Tu hijo tiene entre 8 y 17 años y todavía no sabe usar la IA.",
  "Quieres que entienda cómo funciona la IA — no que solo copie respuestas.",
  "Buscas resultados concretos en 5 semanas, con clases en vivo.",
  "Valoras la atención personalizada: máx. 5 niños por grupo.",
  "Prefieres invertir hoy en vez de pagar más (en tiempo y dinero) después.",
]

const forNo = [
  "Buscas un curso grabado de miles de alumnos donde nadie lo conoce.",
  "Crees que la IA es solo una moda y no afectará el futuro de tu hijo.",
  "Quieres resultados sin que tu hijo asista a ninguna clase.",
]

/* ─── component ───────────────────────────────────────────── */

export function IrresistibleOfferSection() {
  const painRef = useInView<HTMLDivElement>(0.1)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ioFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .io-fade-up   { animation: ioFadeUp 700ms cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .io-fade-up { animation: none !important; }
        }
      `}} />

      {/* ══════════════════════════════════════════════════════
          BLOQUE 1 · EL PROBLEMA (agitación)
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#1A1714] text-[#FAF7EF] py-28 md:py-40 overflow-hidden">

        {/* grain */}
        <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-screen pointer-events-none">
          <filter id="io-grain"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" /></filter>
          <rect width="100%" height="100%" filter="url(#io-grain)" />
        </svg>

        {/* decorative giant number */}
        <div aria-hidden className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 font-display italic leading-none select-none"
          style={{ fontSize: "clamp(18rem,32vw,38rem)", color: "rgba(201,99,66,0.06)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
          ?
        </div>

        <div ref={painRef.ref} className="relative max-w-[1080px] mx-auto px-6 md:px-10">

          <div className={`${painRef.inView ? "io-fade-up" : "opacity-0"} flex items-center gap-4 mb-10`}>
            <span className="h-px w-10 bg-[#C96342]" />
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
              El problema real
            </p>
          </div>

          <h2
            className={`${painRef.inView ? "io-fade-up" : "opacity-0"} font-display leading-[0.94] tracking-[-0.03em] mb-10`}
            style={{ fontSize: "clamp(2.8rem,6.5vw,6rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100', animationDelay: "80ms" }}
          >
            En 2030, el trabajo que tu hijo quiere hacer
            <br />
            <em className="italic text-[#C96342]">ya existe con IA</em> — o no existe.
          </h2>

          <div className={`${painRef.inView ? "io-fade-up" : "opacity-0"} grid md:grid-cols-3 gap-8 md:gap-12 pt-14 border-t border-[#FAF7EF]/15`}
            style={{ animationDelay: "180ms" }}>

            {[
              { stat: "85%",  label: "de los trabajos actuales serán transformados por la IA antes de 2030.", src: "World Economic Forum" },
              { stat: "10×",  label: "más productivos son los profesionales que dominan la IA frente a los que no la usan.", src: "McKinsey 2024" },
              { stat: "Hoy",  label: "es el mejor momento para que tu hijo aprenda — antes de que el resto lo haga.", src: "InnovaKids" },
            ].map((s, i) => (
              <div key={i} className={`${painRef.inView ? "io-fade-up" : "opacity-0"}`} style={{ animationDelay: `${280 + i * 100}ms` }}>
                <p className="font-display italic text-[#C96342] leading-none mb-3 tabular-nums"
                  style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                  {s.stat}
                </p>
                <p className="text-[#FAF7EF]/80 text-base md:text-lg leading-relaxed max-w-[28ch]">{s.label}</p>
                <p className="font-mono-accent text-[9px] uppercase tracking-[0.22em] text-[#FAF7EF]/35 mt-3">Fuente: {s.src}</p>
              </div>
            ))}
          </div>

          {/* cost of inaction */}
          <div className={`${painRef.inView ? "io-fade-up" : "opacity-0"} mt-16 md:mt-20 p-8 md:p-12 bg-[#FAF7EF]/05 border border-[#FAF7EF]/12 rounded-[3px]`}
            style={{ animationDelay: "520ms" }}>
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
              El costo de no hacer nada
            </p>
            <p className="font-display text-2xl md:text-4xl leading-[1.1] tracking-[-0.02em] text-[#FAF7EF]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              Un año de clases particulares de inglés cuesta entre{" "}
              <em className="italic text-[#C96342]">$600 y $1,800 USD</em>.{" "}
              <span className="text-[#FAF7EF]/70">
                La IA es el nuevo inglés — y todavía pocas familias lo están haciendo.
                Cada semana que pasa, tu hijo acumula más retraso.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOQUE 2 · ¿PARA QUIÉN ES? (calificador)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF7EF] text-[#1A1714] py-28 md:py-36 border-t border-[#1A1714]/10">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">

          <div className="flex items-center gap-4 mb-12">
            <span className="h-px w-10 bg-[#C96342]" />
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
              Antes de continuar
            </p>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.96] tracking-[-0.03em] mb-16 md:mb-20"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
            InnovaKids es para ti{" "}
            <em className="italic text-[#C96342]">si…</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-20">

            {/* SÍ */}
            <div>
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
                Es para ti si...
              </p>
              <ul className="space-y-5">
                {forYes.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check />
                    <span className="text-base md:text-lg leading-snug text-[#1A1714]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NO */}
            <div>
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/45 font-semibold mb-6">
                No es para ti si...
              </p>
              <ul className="space-y-5 mb-10">
                {forNo.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Cross />
                    <span className="text-base md:text-lg leading-snug text-[#1A1714]/55">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-[#F2EDE0] border border-[#1A1714]/12 rounded-[3px]">
                <p className="font-display italic text-xl md:text-2xl text-[#1A1714] leading-[1.15]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                  "Somos selectivos porque{" "}
                  <em className="text-[#C96342]">queremos resultados reales</em>{" "}
                  — no solo matriculados."
                </p>
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#1A1714]/50 mt-4">
                  InnovaKids · Política de admisión
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default IrresistibleOfferSection
