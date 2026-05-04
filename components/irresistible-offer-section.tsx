"use client"

import { useEffect, useRef, useState } from "react"
import { COHORT } from "@/lib/site-config"

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
const PAPER = "#FAF7EF"
const WARM = "#F2EDE0"

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

interface OfferRow { label: string; value: string }

const offerRows: OfferRow[] = [
  { label: "10 clases en vivo con mentor",              value: "$500 USD" },
  { label: "Grupos de máx. 5 niños (atención real)",   value: "$200 USD" },
  { label: "4 habilidades fundamentales de IA",        value: "$400 USD" },
  { label: "Sesiones 1:1 de refuerzo",                 value: "$97 USD"  },
  { label: "Soporte por WhatsApp (respuesta < 5 min)", value: "incluido" },
  { label: "Certificado digital verificable",          value: "$47 USD"  },
  { label: "Garantía total de 10 días",                value: "incluido" },
  { label: "Manual del padre: IA segura en casa (PDF)","value": "$57 USD" },
  { label: "200 prompts probados para tareas",         value: "$37 USD"  },
  { label: "Plantillas de portafolio y pitch (Canva)", value: "$49 USD"  },
  { label: "Reporte mensual de progreso",              value: "$97 USD"  },
]

const total        = 500 + 200 + 400 + 97 + 47 + 57 + 37 + 49 + 97
const regularPrice = 797
const earlyPrice   = 267
const savings      = regularPrice - earlyPrice

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
  const offerRef = useInView<HTMLDivElement>(0.1)
  const priceRef = useInView<HTMLDivElement>(0.2)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ioFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ioStrike {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes ioPulse {
          0%,100% { box-shadow: 0 18px 50px -12px rgba(201,99,66,.5), 0 0 0 0 rgba(201,99,66,.3); }
          50%     { box-shadow: 0 26px 70px -12px rgba(201,99,66,.7), 0 0 0 14px rgba(201,99,66,0); }
        }
        .io-fade-up   { animation: ioFadeUp 700ms cubic-bezier(.22,1,.36,1) both; }
        .io-strike    { position: relative; }
        .io-strike::after {
          content: "";
          position: absolute; left:0; top: 50%;
          height: 4px; background: ${TERRA};
          transform: translateY(-50%);
          animation: ioStrike 800ms 200ms cubic-bezier(.2,.8,.2,1) both;
          pointer-events: none;
        }
        .io-cta-pulse { animation: ioPulse 2.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .io-fade-up, .io-strike::after, .io-cta-pulse { animation: none !important; }
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

      {/* ══════════════════════════════════════════════════════
          BLOQUE 3 · LA OFERTA IRRESISTIBLE
      ══════════════════════════════════════════════════════ */}
      <section id="oferta" className="bg-[#F2EDE0] text-[#1A1714] py-28 md:py-40 border-t border-[#1A1714]/10">
        <div ref={offerRef.ref} className="max-w-[1080px] mx-auto px-6 md:px-10">

          <div className={`${offerRef.inView ? "io-fade-up" : "opacity-0"} flex items-center gap-4 mb-12`}>
            <span className="h-px w-10 bg-[#C96342]" />
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
              La oferta completa
            </p>
          </div>

          <h2
            className={`${offerRef.inView ? "io-fade-up" : "opacity-0"} font-display leading-[0.94] tracking-[-0.03em] mb-4`}
            style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100', animationDelay: "80ms" }}
          >
            Todo lo que recibe tu hijo
            <br />
            <em className="italic text-[#C96342]">en una sola cohorte.</em>
          </h2>
          <p className={`${offerRef.inView ? "io-fade-up" : "opacity-0"} text-lg text-[#1A1714]/65 mb-16 max-w-[52ch]`}
            style={{ animationDelay: "140ms" }}>
            No es un catálogo de módulos grabados. Es un programa en vivo con un mentor real
            que conoce a tu hijo por nombre.
          </p>

          {/* tabla de oferta */}
          <div className={`${offerRef.inView ? "io-fade-up" : "opacity-0"} border border-[#1A1714]/15 rounded-[3px] overflow-hidden mb-10`}
            style={{ animationDelay: "200ms" }}>
            {offerRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 px-6 md:px-8 py-5 border-b border-[#1A1714]/10 last:border-b-0 bg-[#FAF7EF] odd:bg-[#F5F1E8]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Check />
                  <span className="text-sm md:text-base text-[#1A1714] leading-snug">{row.label}</span>
                </div>
                <span className={`font-mono-accent text-[11px] md:text-xs uppercase tracking-[0.18em] shrink-0 font-semibold ${row.value === "incluido" ? "text-[#C96342]" : "text-[#1A1714]/60"}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* value total + precio */}
          <div className={`${offerRef.inView ? "io-fade-up" : "opacity-0"} bg-[#1A1714] text-[#FAF7EF] rounded-[3px] overflow-hidden`}
            style={{ animationDelay: "300ms" }}>

            {/* fila superior: precio regular tachado */}
            <div className="flex items-center justify-between gap-4 px-7 md:px-10 py-5 border-b border-[#FAF7EF]/10">
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#FAF7EF]/45">
                Precio regular
              </p>
              <p className={`font-display italic tabular-nums leading-none ${offerRef.inView ? "io-strike" : ""}`}
                style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100', color: "rgba(250,247,239,0.35)" }}>
                ${regularPrice.toLocaleString("es-CL")} USD
              </p>
            </div>

            {/* fila urgencia */}
            <div className="flex items-center gap-3 px-7 md:px-10 py-3 bg-[#C96342]/15 border-b border-[#FAF7EF]/10">
              <span className="relative inline-block w-2 h-2 rounded-full bg-[#C96342] shrink-0">
                <span className="absolute inset-0 rounded-full bg-[#C96342] animate-ping opacity-75" />
              </span>
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">
                Precio de lanzamiento · solo si reservas en los próximos 5 días
              </p>
            </div>

            {/* fila precio final */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-7 md:px-10 py-8 md:py-10">
              <div>
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">
                  Tú pagas hoy
                </p>
                <p className="font-display italic text-[#FAF7EF] leading-none tabular-nums"
                  style={{ fontSize: "clamp(3.5rem,8vw,7rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                  ${earlyPrice.toLocaleString("es-CL")}
                  <span className="font-mono-accent text-base not-italic ml-2 text-[#FAF7EF]/60">USD</span>
                </p>
                <p className="font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#C96342] mt-3">
                  Ahorras ${savings.toLocaleString("es-CL")} USD vs precio regular
                </p>
              </div>
              <div className="sm:text-right shrink-0 space-y-2">
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#FAF7EF]/50">
                  o 3 cuotas de ${Math.round(earlyPrice / 3)} USD sin interés
                </p>
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#FAF7EF]/35">
                  Después del plazo: precio sube a $797 USD
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOQUE 4 · CIERRE: GARANTÍA + URGENCIA + CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#1A1714] text-[#FAF7EF] py-28 md:py-40 overflow-hidden">

        <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-screen pointer-events-none">
          <filter id="io-grain2"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" /></filter>
          <rect width="100%" height="100%" filter="url(#io-grain2)" />
        </svg>

        <div ref={priceRef.ref} className="relative max-w-[1080px] mx-auto px-6 md:px-10">

          {/* sin riesgo */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-28 pb-20 md:pb-28 border-b border-[#FAF7EF]/15">

            <div className={priceRef.inView ? "io-fade-up" : "opacity-0"}>
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
                Sin riesgo — punto.
              </p>
              <h3 className="font-display text-4xl md:text-5xl leading-[1] tracking-[-0.025em] mb-6"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                10 días de garantía total.
                <em className="block italic text-[#C96342]">Sin preguntas.</em>
              </h3>
              <p className="text-base md:text-lg text-[#FAF7EF]/70 leading-relaxed max-w-[44ch]">
                Tu hijo toma dos clases completas. Si no está enganchado, si no está aprendiendo,
                o si simplemente cambiaste de opinión — escribes un WhatsApp y te devolvemos
                el 100% de tu dinero. No hace falta explicación.
              </p>
            </div>

            <div className={`${priceRef.inView ? "io-fade-up" : "opacity-0"} grid gap-5`} style={{ animationDelay: "100ms" }}>
              {[
                { k: "01", t: "Si no le gusta a tu hijo",  d: "Devolución inmediata. Cero papeleo." },
                { k: "02", t: "Si no aprende a usar la IA", d: "Nos importan los resultados, no los matriculados." },
                { k: "03", t: "Si simplemente cambias de idea", d: "Un mensaje por WhatsApp. Eso es todo." },
              ].map((it) => (
                <div key={it.k} className="flex gap-5 p-5 border border-[#FAF7EF]/12 rounded-[3px]">
                  <span className="font-display italic text-[#C96342] text-2xl leading-none shrink-0 mt-1"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                    {it.k}
                  </span>
                  <div>
                    <p className="font-display text-lg text-[#FAF7EF] leading-tight mb-1">{it.t}</p>
                    <p className="text-sm text-[#FAF7EF]/55 leading-relaxed">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* urgencia + CTA final */}
          <div className="text-center">

            <div className={`${priceRef.inView ? "io-fade-up" : "opacity-0"} inline-flex items-center gap-3 mb-10`}>
              <span className="relative inline-block w-2 h-2 rounded-full bg-[#C96342]">
                <span className="absolute inset-0 rounded-full bg-[#C96342] animate-ping opacity-75" />
              </span>
              <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                Cohorte {COHORT.nameShort} · Solo {COHORT.totalSpots} cupos · Cierra el {COHORT.registrationCloseDateLong}
              </p>
            </div>

            <h2
              className={`${priceRef.inView ? "io-fade-up" : "opacity-0"} font-display leading-[0.94] tracking-[-0.035em] mb-6`}
              style={{ fontSize: "clamp(2.8rem,6vw,6rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100', animationDelay: "80ms" }}
            >
              Reserva hoy por{" "}
              <em className="italic text-[#C96342]">$267 USD.</em>
            </h2>

            <p className={`${priceRef.inView ? "io-fade-up" : "opacity-0"} text-lg text-[#FAF7EF]/65 mb-3 max-w-[46ch] mx-auto`}
              style={{ animationDelay: "100ms" }}>
              Precio de lanzamiento solo para los próximos 5 días.
              Después sube a $797 USD.
            </p>

            <p className={`${priceRef.inView ? "io-fade-up" : "opacity-0"} text-base text-[#FAF7EF]/45 mb-12 max-w-[46ch] mx-auto`}
              style={{ animationDelay: "140ms" }}>
              10 días de garantía total. Si no lo ves enganchado, te devolvemos
              el 100% del dinero — sin preguntas.
            </p>

            <div className={`${priceRef.inView ? "io-fade-up" : "opacity-0"} flex flex-col sm:flex-row gap-4 justify-center items-center`}
              style={{ animationDelay: "200ms" }}>
              <a
                href="#sesion-estrategica"
                className="group relative inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-10 py-5 text-lg font-semibold rounded-sm io-cta-pulse transition-colors duration-300"
              >
                <span className="flex flex-col items-start leading-tight">
                  <span className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#FAF7EF]/75">
                    Primer paso
                  </span>
                  <span>Agendar clase gratis →</span>
                </span>
              </a>
              <p className="font-mono-accent text-[11px] uppercase tracking-[0.18em] text-[#FAF7EF]/45">
                30 min · sin compromiso · 100% online
              </p>
            </div>

            {/* trust bullets */}
            <div className={`${priceRef.inView ? "io-fade-up" : "opacity-0"} mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3`}
              style={{ animationDelay: "260ms" }}>
              {[
                "Garantía 10 días",
                "Grupos de máx. 5 niños",
                "527 graduados",
                "★ 4.9 / 5",
                "Mentores latinoamericanos",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2 font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#FAF7EF]/50">
                  <span className="text-[#C96342]">✓</span>
                  {t}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default IrresistibleOfferSection
