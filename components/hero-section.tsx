import Image from "next/image"
import { HeroCountdown } from "@/components/hero-countdown"
import { HeroLiveCounter } from "@/components/hero-live-counter"

const tools = [
  "ChatGPT", "Claude", "Nano Banana", "Suno AI", "Canva AI",
  "Midjourney", "Runway", "ElevenLabs", "Cursor", "Gamma",
]

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
              <span className="hidden sm:inline">Cohorte mayo 2026 · </span>
              <span className="text-[var(--terracotta-pale)] font-semibold">7 de 15 cupos</span>
              <span className="hidden sm:inline"> restantes</span>
            </span>
          </div>
          <span className="text-[var(--paper)]/70 sm:text-[var(--paper)]/60 truncate">
            <span className="hidden sm:inline">Cierre de inscripciones · </span>
            <span className="sm:hidden">Cierra </span>Dom. 10.05
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

        {/* ============ ASYMMETRIC ROW: LEDE + PULL QUOTE CARD ============ */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
          <div className="rise rise-3 col-span-12 md:col-span-7 lg:col-span-6">
            <p className="text-lg md:text-xl leading-[1.45] text-[var(--ink-soft)] max-w-[44ch]">
              La IA es el nuevo inglés. En cinco semanas tu hijo deja de{" "}
              <em className="italic font-display text-[var(--ink)]">consumir</em> tecnología y
              empieza a <em className="italic font-display text-[var(--terracotta)]">crearla</em>:
              construye apps, videojuegos y proyectos reales. En vivo, en grupos de cinco.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="#sesion-estrategica"
                className="group relative inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] hover:shadow-[0_14px_40px_-12px_rgba(201,99,66,0.7)] transition-all duration-300"
              >
                <span>Agendar clase gratis</span>
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
              30 minutos · Sin compromiso · 100% online
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

          {/* Pull quote card — overlaps slightly, rotated */}
          <aside className="rise rise-4 col-span-12 md:col-span-5 md:col-start-8 relative md:-mt-4">
            <div
              className="relative bg-[var(--paper-card)] border border-[var(--ink)]/20 p-7 md:p-9 shadow-[0_30px_80px_-40px_rgba(26,23,20,0.3)]"
              style={{ transform: "rotate(-1deg)" }}
            >
              <span
                aria-hidden
                className="absolute -top-8 left-5 font-display italic text-8xl text-[var(--terracotta)] leading-none select-none"
              >
                &ldquo;
              </span>
              <p className="relative font-display text-xl md:text-2xl leading-[1.2] text-[var(--ink)] mb-7">
                {testimonialPull.quote}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[var(--ink)]/12">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[var(--ink)]/15 shrink-0 bg-[var(--paper-warm)]">
                  <Image
                    src={testimonialPull.image}
                    alt={testimonialPull.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base text-[var(--ink)] truncate">{testimonialPull.name}</p>
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
        <div className="rise rise-4 grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-8 py-10 md:py-12 border-y border-[var(--ink)]/15 mb-20 md:mb-28">
          {[
            ["Formato", "10 clases en vivo"],
            ["Duración", "5 semanas"],
            ["Grupos", "Máx. 5 niños"],
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

        {/* ============ PATH-TO-BOOK (3 steps) ============ */}
        <div className="rise rise-5 grid grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[var(--ink-muted)] mb-6">
              Así funciona
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1] tracking-[-0.03em]">
              Tres pasos,{" "}
              <em className="italic text-[var(--terracotta)]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                cero fricción
              </em>.
            </h2>
          </div>
          <ol className="col-span-12 md:col-span-8 grid sm:grid-cols-3 gap-8 md:gap-4">
            {[
              { n: "01", t: "Agendas", d: "Eliges un horario que te acomode. 30 minutos." },
              { n: "02", t: "Hablamos", d: "Evaluamos el nivel de tu hijo y resolvemos tus dudas." },
              { n: "03", t: "Decides", d: "Si es un fit, reservamos cupo. Si no, quedas con diagnóstico." },
            ].map((s) => (
              <li key={s.n} className="pt-6 border-t-2 border-[var(--ink)]">
                <p className="font-mono-accent text-xs text-[var(--terracotta)] tracking-[0.2em] mb-4">
                  {s.n}
                </p>
                <h3 className="font-display text-2xl md:text-3xl mb-3 text-[var(--ink)]">
                  {s.t}
                </h3>
                <p className="text-base text-[var(--ink-muted)] leading-[1.55] max-w-[28ch]">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* ============ TOOLS MARQUEE ============ */}
        <div className="rise rise-6 relative overflow-hidden border-y border-[var(--ink)]/15 py-8 mb-20 md:mb-28 -mx-6 md:-mx-10">
          <p className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 bg-[var(--paper)] pr-4 font-mono-accent text-[10px] uppercase tracking-[0.25em] text-[var(--ink-muted)] z-10">
            Herramientas enseñadas →
          </p>
          <div className="ticker flex whitespace-nowrap pl-72 md:pl-96">
            {[...tools, ...tools, ...tools].map((t, i) => (
              <span
                key={i}
                className="font-display italic text-3xl md:text-4xl text-[var(--ink)] mx-8 flex items-center gap-8"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                {t}
                <span className="text-[var(--terracotta)] not-italic font-body font-normal">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ============ COUNTDOWN + TRUST STATS ============ */}
        <div className="rise rise-7 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[var(--ink-muted)] mb-6">
              Próxima cohorte · 11 de mayo 2026
            </p>
            <HeroCountdown />
            <p className="mt-6 font-display italic text-lg text-[var(--ink-soft)] max-w-[40ch]">
              Después, la siguiente cohorte abre recién en septiembre.
            </p>
          </div>
          <aside className="col-span-12 md:col-span-5 md:border-l md:border-[var(--ink)]/15 md:pl-10 grid grid-cols-3 gap-6 items-start">
            {[
              { n: "527", l: "Graduados" },
              { n: "4.9", l: "Valoración" },
              { n: "10", l: "Días garantía" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display text-4xl md:text-5xl leading-none tabular-nums text-[var(--ink)]">
                  {s.n}
                </span>
                <span className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[var(--ink-muted)] mt-3">
                  {s.l}
                </span>
              </div>
            ))}
            <div className="col-span-3 pt-6 border-t border-[var(--ink)]/15">
              <HeroLiveCounter />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
