import Image from "next/image"
import { COHORT } from "@/lib/site-config"

const testimonialPull = {
  quote: "El mejor dinero invertido en mi vida.",
  name: "Laura M.",
  role: "Madre de Tomás, 9 años · Chile",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%283%29-Bdow2KWHf2ihYRjPf9rpHNL0OTiGfD.jpeg",
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-[var(--paper)] text-[var(--ink)] overflow-hidden">

      {/* ============ TOP URGENCY STRIP ============ */}
      <div className="relative z-20 bg-[var(--ink)] text-[var(--paper)] border-b border-[var(--ink)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between gap-6 text-[11px] md:text-xs font-mono-accent tracking-[0.14em] uppercase">
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-[var(--terracotta)] live-dot" />
              <span className="relative rounded-full bg-[var(--terracotta)] w-2 h-2" />
            </span>
            <span className="truncate">
              <span className="hidden sm:inline">Cohorte {COHORT.nameShort} · </span>
              <span className="text-[var(--terracotta-pale)] font-semibold">{COHORT.totalSpots} cupos</span>
              <span className="hidden sm:inline"> · clases 1 a 1</span>
            </span>
          </div>
          <span className="text-[var(--paper)]/70 sm:text-[var(--paper)]/60 truncate">
            <span className="hidden sm:inline">Cierre de inscripciones · </span>
            <span className="sm:hidden">Cierra </span>{COHORT.registrationCloseDate}
          </span>
          <a href="#sesion-estrategica" className="hidden md:inline-flex items-center gap-2 text-[var(--paper)] hover:text-[var(--terracotta-pale)] transition-colors shrink-0">
            Agendar <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* ============ BACKGROUND DECORATION ============ */}
      <div
        aria-hidden
        className="absolute bottom-0 -right-6 md:-right-10 pointer-events-none select-none font-display italic leading-[0.78] tracking-tighter"
        style={{
          fontSize: "clamp(12rem, 22vw, 22rem)",
          color: "rgba(201, 99, 66, 0.07)",
          fontVariationSettings: '"opsz" 144, "SOFT" 100',
        }}
      >
        11
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-24">

        {/* ============ MASTHEAD ============ */}
        <div className="rise rise-1 grid grid-cols-12 gap-6 items-baseline mb-8 md:mb-10">
          <div className="col-span-12 md:col-span-4 flex items-center gap-4">
            <span className="font-display italic text-xl md:text-2xl text-[var(--terracotta)]">No.01</span>
            <div className="h-px flex-1 bg-[var(--ink)]/20" />
          </div>
          <p className="col-span-12 md:col-span-8 font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[var(--ink-soft)]">
            Academia de Inteligencia Artificial · Niños y adolescentes · 8 a 17 años
          </p>
        </div>

        {/* ============ EDITORIAL H1 (compacto, fits in viewport) ============ */}
        <div className="relative mb-8 md:mb-10">
          <h1 className="rise rise-2 font-display text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.92] tracking-[-0.035em] text-[var(--ink)] max-w-[18ch]">
            Que tu hijo
            <br />
            no se quede{" "}
            <span className="relative inline-block">
              <em
                className="italic text-[var(--terracotta)]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                atrás
              </em>
              {/* hand-drawn scribble underline */}
              <svg
                className="scribble absolute left-0 -bottom-4 md:-bottom-6 w-full h-6 md:h-10"
                viewBox="0 0 400 40"
                fill="none"
                aria-hidden
              >
                <path
                  d="M8 28 C 80 10, 160 36, 240 20 S 380 30, 392 18"
                  stroke="#C96342"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <br />
            <span className="text-[var(--ink-soft)]">en la era de la </span>
            <em
              className="italic"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              IA.
            </em>
          </h1>
        </div>

        {/* ============ ASYMMETRIC ROW: LEDE + DREAM OUTCOME IMAGE ============ */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
          <div className="rise rise-3 col-span-12 md:col-span-7 lg:col-span-6">
            <p className="text-lg md:text-xl leading-[1.45] text-[var(--ink-soft)] max-w-[44ch]">
              En cinco semanas tu hijo deja de{" "}
              <em className="italic font-display text-[var(--ink)]">consumir</em> pantallas y
              empieza a <em className="italic font-display text-[var(--terracotta)]">crear</em>{" "}
              apps, videojuegos y proyectos reales con IA. Clases en vivo, 1 a 1.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20agendar%20la%20Sesi%C3%B3n%20de%20Diagn%C3%B3stico%20gratuita%20para%20mi%20hijo%2Fa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] hover:shadow-[0_14px_40px_-12px_rgba(201,99,66,0.7)] transition-all duration-300"
              >
                <span>Agendar diagnóstico gratis</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              </a>
              <a
                href="#inversion"
                className="inline-flex items-center gap-2 px-2 py-3 text-[var(--ink)] link-ink"
              >
                Ver qué incluye <span aria-hidden>→</span>
              </a>
            </div>
            <p className="mt-4 font-mono-accent text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              30 a 45 minutos · Sin compromiso · 100% online
            </p>

            {/* Mini trust row above fold */}
            <div className="mt-6 flex items-center gap-5 text-[11px] font-mono-accent uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              <span className="flex items-center gap-1.5">
                <span className="text-[var(--terracotta)] text-sm not-italic">★</span>
                <span><strong className="text-[var(--ink)] font-semibold">4.9</strong>/5 · 527 familias</span>
              </span>
              <span className="hidden sm:inline opacity-40">·</span>
              <span className="hidden sm:inline">10 días de garantía</span>
            </div>
          </div>

          {/* Dream Outcome Visual — niño creando con IA + Pull Quote */}
          <aside className="rise rise-4 col-span-12 md:col-span-5 md:col-start-8 relative md:-mt-4 flex flex-col gap-5">
            {/* Hero image: dream outcome visual */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-[0_30px_80px_-40px_rgba(26,23,20,0.3)]">
              <Image
                src="/innovakids-hero.webp"
                alt="Niño latino creando arte y proyectos con inteligencia artificial"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority
                unoptimized
                fetchPriority="high"
              />
            </div>
            {/* Pull quote card — rotated */}
            <div
              className="relative bg-[var(--paper-card)] border border-[var(--ink)]/20 p-6 md:p-7 shadow-[0_20px_60px_-30px_rgba(26,23,20,0.25)]"
              style={{ transform: "rotate(-1deg)" }}
            >
              <span
                aria-hidden
                className="absolute -top-7 left-4 font-display italic text-7xl text-[var(--terracotta)] leading-none select-none"
              >
                &ldquo;
              </span>
              <p className="relative font-display text-lg md:text-xl leading-[1.2] text-[var(--ink)] mb-5">
                {testimonialPull.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--ink)]/12">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--ink)]/15 shrink-0 bg-[var(--paper-warm)]">
                  <Image
                    src={testimonialPull.image}
                    alt={testimonialPull.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm text-[var(--ink)] truncate">{testimonialPull.name}</p>
                  <p className="font-mono-accent text-[9px] uppercase tracking-[0.14em] text-[var(--ink-muted)] mt-0.5 truncate">
                    Madre · Chile
                  </p>
                </div>
                <div className="flex gap-0.5 text-[var(--terracotta)] text-xs shrink-0" aria-label="5 estrellas">
                  ★★★★★
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ============ SPEC SHEET (mono labels, serif values) ============ */}
        <div className="rise rise-4 grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-8 py-10 md:py-12 border-y border-[var(--ink)]/15">
          {[
            ["Formato", "10 clases en vivo por módulo"],
            ["Duración", "5 semanas por módulo"],
            ["Formato de clase", "1 a 1 (individual)"],
            ["Edad", "8 – 17 años"],
            ["Modalidad", "100% online"],
          ].map(([k, v], i) => (
            <div key={k} className="flex flex-col gap-2 min-w-0">
              <span className="font-mono-accent text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-[var(--terracotta)] whitespace-nowrap">
                N.º {String(i + 1).padStart(2, "0")} · {k}
              </span>
              <span className="font-display text-lg md:text-xl lg:text-2xl text-[var(--ink)] leading-tight">
                {v}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HeroSection
