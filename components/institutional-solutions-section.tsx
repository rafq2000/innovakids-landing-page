"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/* ============================================================
   Hook — IntersectionObserver reveal (one-shot)
   ============================================================ */

function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ============================================================
   ICONS — custom dual-tone, coherent with the lot icons
   ============================================================ */

const INK = "#1A1714"
const TINT = "#C96342"

const IconSchool = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
    {/* roof */}
    <path d="M40 12 L 68 26 L 68 30 L 40 18 L 12 30 L 12 26 Z" fill={INK} />
    <path d="M40 12 L 68 26 L 40 18 L 12 26 Z" fill={TINT} fillOpacity="0.4" />
    {/* building */}
    <rect x="16" y="30" width="48" height="36" stroke={INK} strokeWidth="1.6" fill={TINT} fillOpacity="0.1" />
    {/* door */}
    <rect x="34" y="46" width="12" height="20" stroke={INK} strokeWidth="1.4" fill="#FAF7EF" />
    <circle cx="43" cy="56" r="0.8" fill={INK} />
    {/* windows */}
    <rect x="22" y="38" width="8" height="6" stroke={INK} strokeWidth="1.2" fill={TINT} fillOpacity="0.3" />
    <rect x="50" y="38" width="8" height="6" stroke={INK} strokeWidth="1.2" fill={TINT} fillOpacity="0.3" />
    {/* flagpole */}
    <path d="M40 12 L 40 4" stroke={INK} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M40 5 L 47 7 L 40 9 Z" fill={TINT} />
  </svg>
)

const IconMunicipality = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
    {/* pediment */}
    <path d="M18 30 L 40 14 L 62 30 Z" fill={TINT} fillOpacity="0.16" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    {/* architrave */}
    <rect x="14" y="30" width="52" height="5" fill={INK} />
    {/* columns */}
    <rect x="20" y="35" width="4" height="24" fill={TINT} fillOpacity="0.1" stroke={INK} strokeWidth="1.4" />
    <rect x="30" y="35" width="4" height="24" fill={TINT} fillOpacity="0.1" stroke={INK} strokeWidth="1.4" />
    <rect x="46" y="35" width="4" height="24" fill={TINT} fillOpacity="0.1" stroke={INK} strokeWidth="1.4" />
    <rect x="56" y="35" width="4" height="24" fill={TINT} fillOpacity="0.1" stroke={INK} strokeWidth="1.4" />
    {/* base */}
    <rect x="14" y="59" width="52" height="6" fill={INK} />
    {/* steps */}
    <path d="M10 65 H 70 M 12 70 H 68" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
    {/* star on pediment */}
    <path
      d="M40 20 L 41.4 23.4 L 45 24 L 41.4 25.2 L 40 28.6 L 38.6 25.2 L 35 24 L 38.6 23.4 Z"
      fill={TINT}
    />
  </svg>
)

const IconCompany = () => (
  <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
    {/* back tower */}
    <rect x="40" y="14" width="26" height="52" fill={TINT} fillOpacity="0.2" stroke={INK} strokeWidth="1.6" />
    {/* front tower */}
    <rect x="14" y="26" width="26" height="40" fill="#FAF7EF" stroke={INK} strokeWidth="1.6" />
    {/* windows pattern */}
    {[0, 1, 2, 3].map((r) => (
      <g key={`f-${r}`}>
        <rect x="19" y={32 + r * 8} width="5" height="4" fill={INK} opacity={r === 1 ? 1 : 0.35} />
        <rect x="30" y={32 + r * 8} width="5" height="4" fill={INK} opacity={r === 2 ? 1 : 0.35} />
      </g>
    ))}
    {[0, 1, 2, 3, 4].map((r) => (
      <g key={`b-${r}`}>
        <rect x="45" y={20 + r * 9} width="4" height="4" fill={TINT} opacity={r === 0 ? 1 : 0.5} />
        <rect x="53" y={20 + r * 9} width="4" height="4" fill={TINT} opacity={r === 3 ? 1 : 0.5} />
        <rect x="61" y={20 + r * 9} width="4" height="4" fill={TINT} opacity={r === 1 ? 1 : 0.5} />
      </g>
    ))}
    {/* ground */}
    <path d="M8 66 H 72" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

/* ============================================================
   DATA
   ============================================================ */

interface Audience {
  num: string
  kicker: string
  title: string
  hook: string
  bullets: string[]
  cta: string
  href: string
  icon: ReactNode
  seal: string
}

const audiences: Audience[] = [
  {
    num: "I",
    kicker: "Para colegios",
    title: "IA como asignatura, sin contratar especialistas.",
    hook: "Integramos un programa llave en mano a tu currículo — con instructores nuestros y material listo.",
    bullets: [
      "Programa modular por niveles (8 a 17 años)",
      "Plataforma, proyectos y rúbricas incluidas",
      "Reportes de avance para dirección y apoderados",
      "Formación docente opcional en 4 sesiones",
    ],
    cta: "Agendar demo con dirección",
    href: "/colegios",
    icon: <IconSchool />,
    seal: "+12 colegios activos",
  },
  {
    num: "II",
    kicker: "Para municipios",
    title: "Alfabetización digital medible para tu comuna.",
    hook: "Escalamos el programa a grupos vulnerables y mostramos indicadores de impacto trimestrales.",
    bullets: [
      "Becas 100% online a niños de la comuna",
      "Reportes SEP y de cobertura por territorio",
      "Certificados verificables para cada participante",
      "Co-branding con el municipio en materiales",
    ],
    cta: "Solicitar propuesta edil",
    href: "/municipalidades",
    icon: <IconMunicipality />,
    seal: "Cobertura en 4 regiones",
  },
  {
    num: "III",
    kicker: "Para empresas",
    title: "RSE con impacto real en las familias de tus colaboradores.",
    hook: "Convierte beneficio corporativo o acción social en una ventaja visible y medible.",
    bullets: [
      "Becas corporativas para hijos de colaboradores",
      "Dashboard de uso y avance por empresa",
      "Evento de kickoff con tu marca co-branded",
      "Informe anual de impacto para reportería ESG",
    ],
    cta: "Hablar con el equipo B2B",
    href: "/empresas",
    icon: <IconCompany />,
    seal: "Con Fundación Esperanza, Entel y +4",
  },
]

/* ============================================================
   ATOMS
   ============================================================ */

const Card = ({ item, index }: { item: Audience; index: number }) => {
  const { ref, inView } = useInView<HTMLElement>(0.15)
  return (
    <article
      ref={ref}
      className="relative bg-[#FAF7EF] border border-[#1A1714]/12 rounded-[3px] p-8 md:p-10 flex flex-col"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        filter: inView ? "blur(0)" : "blur(4px)",
        transition: `opacity 800ms cubic-bezier(0.2,0.8,0.2,1) ${index * 120}ms, transform 800ms cubic-bezier(0.2,0.8,0.2,1) ${index * 120}ms, filter 700ms ease ${index * 120}ms`,
        boxShadow: "0 30px 60px -40px rgba(26,23,20,0.3)",
      }}
    >
      {/* Corner roman numeral */}
      <span
        aria-hidden
        className="absolute top-4 right-5 font-display italic leading-none text-[#C96342]/35 select-none tabular-nums"
        style={{
          fontSize: "clamp(3rem, 5vw, 4.5rem)",
          fontVariationSettings: '"opsz" 144, "SOFT" 100',
        }}
      >
        {item.num}
      </span>

      {/* Icon */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6 rounded-full bg-[#F2EDE0] border border-[#1A1714]/10 p-3 shadow-[0_10px_26px_-18px_rgba(26,23,20,0.35)]">
        {item.icon}
      </div>

      {/* Kicker */}
      <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">
        {item.kicker}
      </p>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-[28px] lg:text-3xl leading-[1.08] tracking-[-0.015em] text-[#1A1714] mb-4 max-w-[22ch]">
        {item.title}
      </h3>

      {/* Hook */}
      <p className="font-body text-[15px] text-[#5A5751] leading-relaxed mb-6 max-w-[36ch]">
        {item.hook}
      </p>

      {/* Bullets with dot-leader hyphens */}
      <ul className="space-y-2 mb-8 flex-1">
        {item.bullets.map((b) => (
          <li
            key={b}
            className="flex items-baseline gap-3 font-body text-[14px] text-[#1A1714]/90 leading-relaxed"
          >
            <span aria-hidden className="font-display italic text-[#C96342] leading-none mt-0.5">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={item.href}
        className="group inline-flex items-center justify-between gap-3 border-t border-[#1A1714]/15 pt-5 font-display text-lg md:text-[20px] text-[#1A1714] hover:text-[#C96342] transition-colors duration-300"
      >
        <span>{item.cta}</span>
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#1A1714]/25 group-hover:border-[#C96342] group-hover:bg-[#C96342] group-hover:text-[#FAF7EF] transition-all duration-300"
          aria-hidden
        >
          →
        </span>
      </a>

      {/* Seal */}
      <p className="mt-4 font-mono-accent text-[9px] uppercase tracking-[0.24em] text-[#1A1714]/50">
        {item.seal}
      </p>
    </article>
  )
}

/* ============================================================
   COMPONENT
   ============================================================ */

export function InstitutionalSolutionsSection() {
  return (
    <section
      id="organizaciones"
      className="relative bg-[#F2EDE0] text-[#1A1714] py-28 md:py-40 border-t border-[#1A1714]/10 overflow-hidden"
    >
      {/* Decorative oversized "&" in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 md:-left-24 top-32 font-display italic leading-none select-none"
        style={{
          fontSize: "clamp(22rem, 38vw, 42rem)",
          color: "rgba(26,23,20,0.04)",
          fontVariationSettings: '"opsz" 144, "SOFT" 100',
        }}
      >
        &amp;
      </div>

      <div className="relative max-w-[1180px] mx-auto px-6 md:px-10">
        {/* Masthead + logo monogram */}
        <div className="rise rise-1 flex items-center justify-between mb-16 md:mb-20">
          <div className="flex items-center gap-5">
            <div className="h-px w-12 bg-[#C96342]" />
            <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
              Capítulo IV · Para organizaciones
            </p>
          </div>
          <a href="/" className="flex items-center gap-3" aria-label="InnovaKids LATAM">
            <span
              aria-hidden
              className="relative inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1A1714]"
            >
              <span
                className="font-display italic text-xl md:text-2xl text-[#1A1714] leading-none"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                I<span className="text-[#C96342]">k</span>
              </span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-xl md:text-2xl leading-none tracking-[-0.025em] text-[#1A1714]">
                Innova<em className="not-italic font-semibold text-[#C96342]">kids</em>
              </span>
              <span className="font-mono-accent text-[8px] md:text-[9px] uppercase tracking-[0.28em] text-[#1A1714]/60 mt-1">
                LATAM · división institucional
              </span>
            </span>
          </a>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-24">
          <h2 className="rise rise-2 col-span-12 md:col-span-9 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[0.95] tracking-[-0.03em] font-normal">
            No sólo para{" "}
            <em className="italic text-[#C96342]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              familias
            </em>
            .
            <br />
            También para tu organización.
          </h2>
          <div className="rise rise-3 col-span-12 md:col-span-3 md:pt-6 md:border-l md:border-[#1A1714]/15 md:pl-6">
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/55 mb-3">
              Tres caminos
            </p>
            <p className="font-display italic text-xl md:text-2xl leading-tight text-[#1A1714]/80">
              Elige el que calza con tu rol. Nosotros nos adaptamos.
            </p>
          </div>
        </div>

        {/* 3 audience cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          {audiences.map((a, i) => (
            <Card key={a.num} item={a} index={i} />
          ))}
        </div>

        {/* Footer ledger-style social proof */}
        <div className="relative border-t border-[#1A1714]/15 pt-10 grid md:grid-cols-12 gap-6 md:gap-10 items-baseline">
          <div className="md:col-span-5">
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-2">
              Prueba institucional
            </p>
            <p className="font-display italic text-2xl md:text-3xl leading-tight text-[#1A1714]">
              +22 instituciones en 4 países latinoamericanos confían en InnovaKids.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {[
                { big: "+12", small: "colegios" },
                { big: "+3",  small: "municipios" },
                { big: "+6",  small: "empresas" },
              ].map((stat) => (
                <div key={stat.small} className="border-l border-[#1A1714]/15 pl-4 md:pl-6">
                  <p
                    className="font-display italic leading-none tabular-nums text-4xl md:text-5xl lg:text-6xl text-[#1A1714]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                  >
                    {stat.big}
                  </p>
                  <p className="mt-2 font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/55">
                    {stat.small}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstitutionalSolutionsSection
