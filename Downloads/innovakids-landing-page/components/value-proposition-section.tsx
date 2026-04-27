"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"

/* ============================================================
   HOOKS — tiny IntersectionObserver-based visibility hook.
   Triggers once, gives `inView` boolean for entering effects.
   ============================================================ */

function useInView<T extends HTMLElement>(options: IntersectionObserverInit = { threshold: 0.2 }) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { ref, inView }
}

/* Count-up number — animates from 0 to target when visible */
function CountUp({ to, duration = 1400, prefix = "$", suffix = "" }: { to: number; duration?: number; prefix?: string; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 })
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString("es-CL")}
      {suffix}
    </span>
  )
}

/* ============================================================
   ICONOGRAPHY
   ============================================================ */

const ICON_INK = "#1A1714"
const ICON_TINT = "#C96342"

const Icon = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`}>
    {children}
  </svg>
)

const IconStudy = () => (
  <Icon>
    <path d="M8 22 C 14 18, 28 16, 38 22 L 38 64 C 28 58, 14 60, 8 64 Z" fill={ICON_TINT} fillOpacity="0.14" transform="rotate(-3 40 40)" />
    <path d="M72 22 C 66 18, 52 16, 42 22 L 42 64 C 52 58, 66 60, 72 64 Z" fill={ICON_TINT} fillOpacity="0.14" transform="rotate(-3 40 40)" />
    <path d="M10 24 C 16 20, 30 18, 40 24 L 40 60 C 30 54, 16 56, 10 60 Z" stroke={ICON_INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M70 24 C 64 20, 50 18, 40 24 L 40 60 C 50 54, 64 56, 70 60 Z" stroke={ICON_INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M16 32 H 32 M 16 38 H 30 M 16 44 H 30" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M48 32 H 64 M 48 38 H 62 M 48 44 H 62" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M40 8 L 41.6 12.4 L 46 14 L 41.6 15.6 L 40 20 L 38.4 15.6 L 34 14 L 38.4 12.4 Z" fill={ICON_TINT} />
    <circle cx="52" cy="10" r="1.6" fill={ICON_TINT} />
    <circle cx="28" cy="11" r="1.2" fill={ICON_INK} opacity="0.4" />
  </Icon>
)
const IconCode = () => (
  <Icon>
    <rect x="10" y="14" width="60" height="52" rx="4" fill={ICON_TINT} fillOpacity="0.12" transform="rotate(-2 40 40)" />
    <rect x="12" y="16" width="56" height="48" rx="3" stroke={ICON_INK} strokeWidth="1.6" />
    <path d="M12 24 H 68" stroke={ICON_INK} strokeWidth="1.4" />
    <circle cx="17" cy="20" r="1.2" fill={ICON_INK} /><circle cx="22" cy="20" r="1.2" fill={ICON_INK} /><circle cx="27" cy="20" r="1.2" fill={ICON_TINT} />
    <path d="M26 36 L 20 44 L 26 52" stroke={ICON_INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M54 36 L 60 44 L 54 52" stroke={ICON_INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 32 L 36 56" stroke={ICON_TINT} strokeWidth="2.2" strokeLinecap="round" />
    <rect x="38" y="58" width="2" height="4" fill={ICON_INK}><animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" /></rect>
  </Icon>
)
const IconAgent = () => (
  <Icon>
    <ellipse cx="40" cy="44" rx="30" ry="26" fill={ICON_TINT} fillOpacity="0.12" transform="rotate(2 40 44)" />
    <rect x="18" y="22" width="44" height="34" rx="8" stroke={ICON_INK} strokeWidth="1.6" />
    <path d="M40 14 V 22" stroke={ICON_INK} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="40" cy="12" r="2.4" fill={ICON_TINT} />
    <circle cx="30" cy="36" r="3" fill={ICON_INK} /><circle cx="50" cy="36" r="3" fill={ICON_INK} />
    <circle cx="31" cy="35" r="0.9" fill="#FAF7EF" /><circle cx="51" cy="35" r="0.9" fill="#FAF7EF" />
    <path d="M30 46 Q 40 50 50 46" stroke={ICON_INK} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M14 64 L 22 60" stroke={ICON_TINT} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M66 64 L 58 60" stroke={ICON_TINT} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="65" r="1.6" fill={ICON_TINT} /><circle cx="68" cy="65" r="1.6" fill={ICON_TINT} />
  </Icon>
)
const IconCreate = () => (
  <Icon>
    <path d="M40 12 C 56 12, 68 24, 68 40 C 68 50, 60 56, 52 56 C 48 56, 46 58, 46 62 C 46 66, 44 68, 40 68 C 24 68, 12 56, 12 40 C 12 24, 24 12, 40 12 Z" fill={ICON_TINT} fillOpacity="0.14" />
    <path d="M40 14 C 55 14, 66 25, 66 40 C 66 49, 59 54, 52 54 C 47 54, 44 57, 44 62 C 44 65, 42 66, 40 66 C 25 66, 14 55, 14 40 C 14 25, 25 14, 40 14 Z" stroke={ICON_INK} strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="26" cy="32" r="3" fill={ICON_TINT} />
    <circle cx="38" cy="24" r="2.8" fill={ICON_INK} />
    <circle cx="50" cy="28" r="3" fill={ICON_TINT} opacity="0.7" />
    <circle cx="54" cy="42" r="2.4" fill={ICON_INK} opacity="0.5" />
    <path d="M68 14 L 70 18 L 74 20 L 70 22 L 68 26 L 66 22 L 62 20 L 66 18 Z" fill={ICON_TINT} />
  </Icon>
)
const IconClock = () => (
  <Icon>
    <circle cx="40" cy="40" r="26" fill={ICON_TINT} fillOpacity="0.12" transform="rotate(-4 40 40)" />
    <circle cx="40" cy="40" r="26" stroke={ICON_INK} strokeWidth="1.6" />
    <path d="M40 22 V 40 L 52 46" stroke={ICON_INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="40" cy="40" r="2" fill={ICON_TINT} />
    <circle cx="40" cy="14" r="1.4" fill={ICON_INK} opacity="0.5" /><circle cx="66" cy="40" r="1.4" fill={ICON_INK} opacity="0.5" />
    <circle cx="40" cy="66" r="1.4" fill={ICON_INK} opacity="0.5" /><circle cx="14" cy="40" r="1.4" fill={ICON_INK} opacity="0.5" />
  </Icon>
)
const IconGroup = () => (
  <Icon>
    <ellipse cx="40" cy="44" rx="30" ry="20" fill={ICON_TINT} fillOpacity="0.12" />
    {[{ x: 14, y: 50, r: 4 }, { x: 26, y: 38, r: 4.5 }, { x: 40, y: 32, r: 5 }, { x: 54, y: 38, r: 4.5 }, { x: 66, y: 50, r: 4 }].map((p, i) => (
      <g key={i}>
        <circle cx={p.x} cy={p.y} r={p.r} stroke={ICON_INK} strokeWidth="1.6" fill={i === 2 ? ICON_TINT : "none"} />
        <path d={`M${p.x - p.r - 1} ${p.y + p.r + 8} Q ${p.x} ${p.y + p.r + 2} ${p.x + p.r + 1} ${p.y + p.r + 8}`} stroke={ICON_INK} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </g>
    ))}
  </Icon>
)
const IconMentor = () => (
  <Icon>
    <path d="M10 18 H 50 C 54 18 56 20 56 24 V 42 C 56 46 54 48 50 48 H 24 L 14 56 V 48 C 12 48 10 46 10 42 V 24 C 10 20 12 18 16 18 Z" fill={ICON_TINT} fillOpacity="0.14" />
    <path d="M12 20 H 50 C 53 20 54 22 54 24 V 40 C 54 43 53 44 50 44 H 26 L 18 52 V 44 C 14 44 12 43 12 40 V 24 C 12 22 14 20 16 20 Z" stroke={ICON_INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M44 50 H 66 C 68 50 70 52 70 54 V 64 C 70 66 68 68 66 68 H 60 L 54 74 V 68 C 50 68 48 66 48 64 V 54 C 48 52 50 50 52 50 Z" stroke={ICON_INK} strokeWidth="1.6" strokeLinejoin="round" fill="#FAF7EF" />
    <circle cx="22" cy="32" r="1.6" fill={ICON_INK} /><circle cx="32" cy="32" r="1.6" fill={ICON_INK} /><circle cx="42" cy="32" r="1.6" fill={ICON_TINT} />
  </Icon>
)
const IconChat = () => (
  <Icon>
    <path d="M40 12 C 24 12, 12 22, 12 36 C 12 42, 14 47, 18 51 L 14 64 L 28 60 C 32 62, 36 62, 40 62 C 56 62, 68 52, 68 38 C 68 24, 56 12, 40 12 Z" fill={ICON_TINT} fillOpacity="0.14" />
    <path d="M40 14 C 25 14, 14 24, 14 36 C 14 41, 16 46, 19 49 L 16 60 L 27 57 C 31 59, 35 60, 40 60 C 55 60, 66 50, 66 38 C 66 26, 55 14, 40 14 Z" stroke={ICON_INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M30 36 L 37 43 L 50 30" stroke={ICON_TINT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
)
const IconShield = () => (
  <Icon>
    <path d="M40 8 L 64 16 V 38 C 64 52, 54 62, 40 68 C 26 62, 16 52, 16 38 V 16 Z" fill={ICON_TINT} fillOpacity="0.14" />
    <path d="M40 10 L 62 17 V 38 C 62 51, 53 60, 40 66 C 27 60, 18 51, 18 38 V 17 Z" stroke={ICON_INK} strokeWidth="1.6" strokeLinejoin="round" />
    <text x="40" y="44" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontStyle="italic" fontWeight="500" fill={ICON_INK}>10</text>
    <path d="M28 50 H 52" stroke={ICON_TINT} strokeWidth="1.4" strokeLinecap="round" />
  </Icon>
)
const IconMedal = () => (
  <Icon>
    <path d="M28 8 L 36 38 L 28 38 L 24 28 Z" fill={ICON_INK} opacity="0.85" />
    <path d="M52 8 L 56 28 L 52 38 L 44 38 Z" fill={ICON_TINT} />
    <circle cx="40" cy="48" r="20" fill={ICON_TINT} fillOpacity="0.14" />
    <circle cx="40" cy="48" r="18" stroke={ICON_INK} strokeWidth="1.6" />
    <circle cx="40" cy="48" r="11" stroke={ICON_INK} strokeWidth="1.4" />
    <path d="M40 41 L 41.8 45.4 L 46.4 45.8 L 42.9 48.7 L 44.1 53.2 L 40 50.7 L 35.9 53.2 L 37.1 48.7 L 33.6 45.8 L 38.2 45.4 Z" fill={ICON_TINT} />
  </Icon>
)
/* Document icons — all 4 bonos son documentos PDF */
const IconDocManual = () => (
  <Icon>
    <rect x="16" y="12" width="48" height="56" rx="2" fill={ICON_TINT} fillOpacity="0.14" transform="rotate(-3 40 40)" />
    <rect x="18" y="14" width="44" height="52" rx="2" stroke={ICON_INK} strokeWidth="1.6" />
    <path d="M26 26 H 54 M 26 34 H 50 M 26 42 H 52 M 26 50 H 46" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M48 58 L 54 58" stroke={ICON_TINT} strokeWidth="2" strokeLinecap="round" />
    <circle cx="58" cy="18" r="4" fill={ICON_TINT} />
  </Icon>
)
const IconDocPrompts = () => (
  <Icon>
    {/* stack of pages */}
    <rect x="20" y="22" width="44" height="48" rx="2" fill={ICON_TINT} fillOpacity="0.10" />
    <rect x="16" y="18" width="44" height="48" rx="2" fill="#FAF7EF" stroke={ICON_INK} strokeWidth="1.6" />
    {/* command prompt */}
    <path d="M24 32 L 30 38 L 24 44" stroke={ICON_TINT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M34 46 H 48" stroke={ICON_INK} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M24 54 H 52" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    <path d="M24 60 H 44" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
  </Icon>
)
const IconDocTemplates = () => (
  <Icon>
    {/* three stacked cards */}
    <rect x="22" y="22" width="42" height="48" rx="2" fill={ICON_TINT} fillOpacity="0.14" transform="rotate(6 40 40)" />
    <rect x="18" y="18" width="42" height="48" rx="2" fill={ICON_TINT} fillOpacity="0.20" transform="rotate(3 40 40)" />
    <rect x="14" y="14" width="42" height="48" rx="2" fill="#FAF7EF" stroke={ICON_INK} strokeWidth="1.6" />
    <rect x="20" y="20" width="30" height="18" rx="1" fill={ICON_TINT} fillOpacity="0.35" />
    <path d="M20 44 H 50 M 20 50 H 44 M 20 56 H 40" stroke={ICON_INK} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
  </Icon>
)
const IconDocReport = () => (
  <Icon>
    <rect x="16" y="12" width="48" height="56" rx="2" fill={ICON_TINT} fillOpacity="0.14" transform="rotate(-2 40 40)" />
    <rect x="18" y="14" width="44" height="52" rx="2" stroke={ICON_INK} strokeWidth="1.6" fill="#FAF7EF" />
    {/* header line */}
    <path d="M26 22 H 54" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M26 28 H 44" stroke={ICON_INK} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    {/* ascending bars / growth */}
    <rect x="26" y="50" width="5" height="10" fill={ICON_INK} opacity="0.7" />
    <rect x="34" y="44" width="5" height="16" fill={ICON_INK} opacity="0.85" />
    <rect x="42" y="38" width="5" height="22" fill={ICON_TINT} />
    <rect x="50" y="32" width="5" height="28" fill={ICON_TINT} />
    <path d="M26 40 L 53 30" stroke={ICON_TINT} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" opacity="0.6" />
  </Icon>
)

/* ============================================================
   DATA
   ============================================================ */

interface Lot { num: string; icon: ReactNode; kicker: string; title: string; desc: string; value: number | "incluido" }

const skills: Lot[] = [
  { num: "01", icon: <IconStudy />,  kicker: "Habilidad fundamental", title: "Estudia con IA",         desc: "Resúmenes en segundos, mapas mentales, prompts probados para tareas. El colegio se vuelve rápido — y entiende mejor lo que estudia.", value: 180 },
  { num: "02", icon: <IconCode />,   kicker: "Habilidad fundamental", title: "Programa de verdad",     desc: "Apps, videojuegos y webs funcionales. No ejercicios de juguete: código real que puede mostrar, compartir y seguir mejorando.",         value: 320 },
  { num: "03", icon: <IconAgent />,  kicker: "Habilidad fundamental", title: "Maneja agentes IA",      desc: "ChatGPT, Claude, Gemini, agentes autónomos. Aprende a delegar tareas a la IA — no a depender de ella.",                                value: 240 },
  { num: "04", icon: <IconCreate />, kicker: "Habilidad fundamental", title: "Crea con IA",            desc: "Imágenes, música, voces, video, presentaciones. Pasa de consumir contenido a producirlo, con su propio estilo.",                         value: 220 },
]

const pillars: Lot[] = [
  { num: "05", icon: <IconClock />,  kicker: "Incluido en el programa", title: "Horarios 100% flexibles",         desc: "Eligen el día y la hora. Si no pueden, hay grabación al instante.",           value: "incluido" },
  { num: "06", icon: <IconGroup />,  kicker: "Incluido en el programa", title: "Educación personalizada",         desc: "Máximo 5 niños por grupo. El mentor los conoce por nombre.",                  value: "incluido" },
  { num: "07", icon: <IconMentor />, kicker: "Incluido en el programa", title: "Mentor 1:1 cuando lo necesite",   desc: "Sesiones individuales para resolver dudas o profundizar más.",                value: 97  },
  { num: "08", icon: <IconChat />,   kicker: "Incluido en el programa", title: "Soporte por WhatsApp",            desc: "Tú y tu hijo escriben cuando quieran. Respuesta en menos de 5 min.",          value: "incluido" },
  { num: "09", icon: <IconShield />, kicker: "Incluido en el programa", title: "Garantía de 10 días",             desc: "Si no lo ves enganchado, devolución total. Sin preguntas.",                   value: 297 },
  { num: "10", icon: <IconMedal />,  kicker: "Incluido en el programa", title: "Certificado digital",             desc: "Verificable, para portafolio o postulaciones futuras.",                        value: 47  },
]

const bonos: Lot[] = [
  { num: "A", icon: <IconDocManual />,    kicker: "Documento PDF · 64 pág.", title: "Manual del padre: IA segura en casa",             desc: "Guía visual para entender, acompañar y poner reglas claras sin ser el experto. Se lee en una tarde.",           value: 57  },
  { num: "B", icon: <IconDocPrompts />,   kicker: "Dossier PDF",              title: "200 prompts probados para tareas y proyectos",    desc: "Un catálogo listo para copiar y pegar. Matemáticas, ensayos, ciencias, presentaciones — ordenado por materia.", value: 37  },
  { num: "C", icon: <IconDocTemplates />, kicker: "Pack editorial Canva",     title: "Plantillas de portafolio, pitch y presentación",  desc: "Diseño premium listo para que tu hijo entregue trabajos que se ven de agencia, no de tarea de colegio.",         value: 49  },
  { num: "D", icon: <IconDocReport />,    kicker: "Informe mensual · PDF",    title: "Reporte personalizado del progreso de tu hijo",   desc: "Un dossier cada mes con avances, proyectos entregados y próximos pasos. Sólo para padres InnovaKids.",           value: 160 },
]

const sumOf = (items: Lot[]) => items.reduce((a, it) => a + (typeof it.value === "number" ? it.value : 0), 0)
const subtotalSkills  = sumOf(skills)
const subtotalPillars = sumOf(pillars)
const subtotalBonos   = sumOf(bonos)
const grandTotal      = subtotalSkills + subtotalPillars + subtotalBonos
const priceToday      = 297
const discount        = grandTotal - priceToday
const fmt = (n: number) => `$${n.toLocaleString("es-CL")}`

/* ============================================================
   ATOMS
   ============================================================ */

/* Dot leader that draws in L→R when visible */
const DotLeader = ({ light = false }: { light?: boolean }) => {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 })
  return (
    <span
      ref={ref}
      aria-hidden
      className="hidden md:block flex-1 h-[1px] self-center opacity-30"
      style={{
        backgroundImage: `radial-gradient(circle, ${light ? "#FAF7EF" : "#1A1714"} 1px, transparent 1.2px)`,
        backgroundSize: "6px 6px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "left center",
        WebkitMaskImage: "linear-gradient(to right, #000 0%, #000 var(--leader-fill, 0%), transparent var(--leader-fill, 0%))",
        maskImage: "linear-gradient(to right, #000 0%, #000 var(--leader-fill, 0%), transparent var(--leader-fill, 0%))",
        ["--leader-fill" as any]: inView ? "100%" : "0%",
        transition: "--leader-fill 900ms cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    />
  )
}

/* One catalog row */
const LotRow = ({ item, stagger = 0 }: { item: Lot; stagger?: number }) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 })
  const isIncluded = item.value === "incluido"
  return (
    <article
      ref={ref}
      className="lot-row group relative py-7 md:py-9 border-b border-[#1A1714]/12 last:border-b-0"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        filter: inView ? "blur(0)" : "blur(6px)",
        transition: `opacity 800ms cubic-bezier(0.2,0.8,0.2,1) ${stagger}ms, transform 800ms cubic-bezier(0.2,0.8,0.2,1) ${stagger}ms, filter 800ms ease ${stagger}ms`,
      }}
    >
      <div className="relative grid grid-cols-12 gap-4 md:gap-6 items-center">
        <div className="col-span-2 md:col-span-1 flex items-center">
          <span
            className="font-display italic leading-none tabular-nums transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#9A4428]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#C96342", opacity: 0.88, fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
          >
            {item.num}
          </span>
        </div>
        <div className="col-span-2 md:col-span-1 flex items-center">
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FAF7EF] border border-[#1A1714]/10 p-2 shadow-[0_8px_24px_-16px_rgba(26,23,20,0.35)] transition-transform duration-500 group-hover:-rotate-[8deg] group-hover:scale-[1.1]">
            {item.icon}
          </div>
        </div>
        <div className="col-span-8 md:col-span-6 min-w-0">
          <div className="flex items-center gap-2 mb-1 font-mono-accent text-[9px] md:text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/50 font-semibold">
            <span>Lote</span>
            <span className="h-px w-3 bg-[#1A1714]/30" />
            <span>{item.kicker}</span>
          </div>
          <h3 className="font-display text-2xl md:text-[28px] lg:text-3xl leading-[1.08] tracking-[-0.015em] mb-1.5 text-[#1A1714]">
            {item.title}
          </h3>
          <p className="font-body text-sm md:text-[15px] text-[#5A5751] leading-relaxed max-w-[54ch]">{item.desc}</p>
        </div>
        <div className="col-span-12 md:col-span-4 flex items-baseline gap-3 md:gap-5 pl-16 md:pl-0">
          <DotLeader />
          <div className="flex flex-col items-start md:items-end shrink-0 leading-tight">
            <span className="font-mono-accent text-[9px] uppercase tracking-[0.26em] text-[#1A1714]/45">
              {isIncluded ? "Incluido" : "Valor individual"}
            </span>
            {isIncluded ? (
              <span className="font-display italic text-2xl md:text-[26px] text-[#1A1714] tabular-nums">✓ sin costo</span>
            ) : (
              <span className="font-display italic tabular-nums text-2xl md:text-3xl text-[#1A1714] transition-transform duration-300 group-hover:scale-[1.06]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                {fmt(item.value as number)}{" "}
                <span className="text-[#1A1714]/45 text-base not-italic font-mono-accent">USD</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

/* Animated subtotal row with count-up */
const SubtotalRow = ({ label, amount }: { label: string; amount: number }) => (
  <div className="flex items-baseline gap-4 py-5 md:py-6">
    <span className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-semibold text-[#1A1714]/55">{label}</span>
    <DotLeader />
    <span className="font-display italic tabular-nums text-xl md:text-2xl text-[#1A1714]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
      <CountUp to={amount} /> USD
    </span>
  </div>
)

const SectionHead = ({ num, title, kicker }: { num: string; title: string; kicker: string }) => (
  <div className="flex items-baseline gap-5 mb-10 md:mb-14">
    <span className="font-display italic text-[#C96342] leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>{num}</span>
    <div className="flex-1 min-w-0">
      <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/55 font-semibold mb-1">{kicker}</p>
      <h3 className="font-display text-2xl md:text-3xl lg:text-[36px] leading-[1.05] tracking-[-0.02em] text-[#1A1714]">{title}</h3>
    </div>
    <div className="h-px flex-1 bg-[#1A1714]/15 hidden md:block self-end mb-2" />
  </div>
)

/* ============================================================
   COMPONENT
   ============================================================ */

export function ValuePropositionSection() {
  // Parallax on the giant "$" decoration
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = parallaxRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - vh / 2) / vh))
        el.style.transform = `translate3d(0, ${progress * -120}px, 0)`
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf) }
  }, [])

  // Stamp + receipt effects trigger
  const receipt = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <>
      {/* Scoped keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes vpStampIn {
          0%   { opacity: 0; transform: rotate(-60deg) scale(2.4) translateY(-40px); filter: blur(8px); }
          60%  { opacity: 1; transform: rotate(-10deg) scale(0.92) translateY(0);   filter: blur(0); }
          75%  { transform: rotate(-16deg) scale(1.04); }
          100% { opacity: 1; transform: rotate(-14deg) scale(1); }
        }
        @keyframes vpStrikeDraw { from { width: 0; } to { width: 100%; } }
        @keyframes vpPriceShine {
          0%   { background-position: -150% 0; }
          60%  { background-position: 250% 0; }
          100% { background-position: 250% 0; }
        }
        @keyframes vpSparklePulse {
          0%, 100% { opacity: 0;  transform: scale(0.4) rotate(0deg); }
          50%      { opacity: 1;  transform: scale(1.1) rotate(18deg); }
        }
        @keyframes vpCtaPulse {
          0%, 100% { box-shadow: 0 18px 50px -12px rgba(201,99,66,0.55), 0 0 0 0 rgba(201,99,66,0.35); }
          50%      { box-shadow: 0 26px 70px -12px rgba(201,99,66,0.7),  0 0 0 14px rgba(201,99,66,0); }
        }
        @keyframes vpSlowDrift {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50%      { transform: translateY(-8px) rotate(1deg); }
        }
        .vp-stamp-animate   { animation: vpStampIn 1.1s cubic-bezier(0.2, 1.2, 0.3, 1) both; }
        .vp-strike-animate { position: relative; }
        .vp-strike-animate::after {
          content: "";
          position: absolute; left: 0; top: 50%;
          height: 5px; background: #C96342; transform: translateY(-50%);
          animation: vpStrikeDraw 900ms 300ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
          box-shadow: 0 0 12px rgba(201,99,66,0.6);
          pointer-events: none;
        }
        .vp-price-shine {
          background-image: linear-gradient(90deg,
            #FAF7EF 0%, #FAF7EF 40%,
            rgba(255,255,255,1) 50%,
            #FAF7EF 60%, #FAF7EF 100%);
          background-size: 250% 100%;
          background-position: -150% 0;
          -webkit-background-clip: text; background-clip: text;
          color: #FAF7EF;
          animation: vpPriceShine 2.2s 800ms ease-in-out 1 both;
        }
        .vp-cta-pulse { animation: vpCtaPulse 2.6s ease-in-out infinite; }
        .vp-sparkle   { animation: vpSparklePulse 2.2s ease-in-out infinite; }
        .vp-drift     { animation: vpSlowDrift 7s ease-in-out infinite; }

        @keyframes vpSealSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .vp-seal-spin { animation: vpSealSpin 40s linear infinite; transform-origin: 50% 50%; }

        @keyframes vpLivePing {
          0%   { transform: scale(1);   opacity: 0.75; }
          75%  { transform: scale(2.6); opacity: 0;    }
          100% { transform: scale(2.6); opacity: 0;    }
        }
        .vp-live-ping  { animation: vpLivePing 1.8s cubic-bezier(0,0,0.2,1) infinite; }

        @keyframes vpLivePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,99,66,0.55); }
          50%      { box-shadow: 0 0 0 18px rgba(201,99,66,0); }
        }
        .vp-live-pulse { animation: vpLivePulse 2.4s ease-out infinite; }

        /* ===== RESERVA BLOCK ANIMATIONS ===== */
        @keyframes vpReservaHalo {
          0%, 100% { transform: translate(0, 0) scale(1);      opacity: 0.55; }
          50%      { transform: translate(30px, 20px) scale(1.15); opacity: 0.85; }
        }
        .vp-reserva-halo { animation: vpReservaHalo 9s ease-in-out infinite; }

        @keyframes vpGrainShift {
          0%   { background-position: 0 0; }
          100% { background-position: 80px 40px; }
        }
        .vp-grain-shift { animation: vpGrainShift 12s linear infinite; }

        @keyframes vpPriceEnter {
          0%   { transform: translateY(14px) scale(0.94); opacity: 0; filter: blur(6px); }
          60%  { transform: translateY(-4px) scale(1.02); opacity: 1; filter: blur(0);   }
          100% { transform: translateY(0)    scale(1);    opacity: 1; filter: blur(0);   }
        }
        .vp-price-enter { animation: vpPriceEnter 1100ms cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: 80ms; }

        @keyframes vpDividerSweep {
          0%   { transform: translateX(-110%); }
          60%  { transform: translateX(150%);  }
          100% { transform: translateX(150%);  }
        }
        .vp-divider-sweep { animation: vpDividerSweep 2.8s ease-in-out infinite; }

        @keyframes vpRevealUp {
          0%   { transform: translateY(18px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        .vp-reveal-up { animation: vpRevealUp 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }

        @keyframes vpStepEnter {
          0%   { transform: translateX(-14px); opacity: 0; }
          100% { transform: translateX(0);     opacity: 1; }
        }
        .vp-step-enter { animation: vpStepEnter 700ms cubic-bezier(0.22, 1, 0.36, 1) both; }

        @keyframes vpStepNumThrob {
          0%, 100% { transform: translateY(0);    text-shadow: 0 0 0 rgba(201,99,66,0);    }
          50%      { transform: translateY(-2px); text-shadow: 0 6px 16px rgba(201,99,66,0.35); }
        }
        .vp-step-num { animation: vpStepNumThrob 3.4s ease-in-out infinite; }

        .vp-reserva-card { position: relative; }
        .vp-reserva-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(120deg, rgba(201,99,66,0) 20%, rgba(201,99,66,0.55) 50%, rgba(201,99,66,0) 80%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          background-size: 200% 200%;
          animation: vpReservaBorder 6s linear infinite;
          pointer-events: none;
        }
        @keyframes vpReservaBorder {
          0%   { background-position: 0% 50%;   }
          100% { background-position: 200% 50%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .vp-stamp-animate, .vp-strike-animate::after, .vp-price-shine, .vp-cta-pulse, .vp-sparkle, .vp-drift, .vp-seal-spin, .vp-live-ping, .vp-live-pulse,
          .vp-reserva-halo, .vp-grain-shift, .vp-price-enter, .vp-divider-sweep, .vp-reveal-up, .vp-step-enter, .vp-step-num,
          .vp-reserva-card::before { animation: none !important; }
          .vp-price-shine { color: #FAF7EF; background: none; }
        }
      `,
        }}
      />

      <section
        id="propuesta-valor"
        className="relative bg-[#FAF7EF] text-[#1A1714] py-28 md:py-40 border-t border-[#1A1714]/10 overflow-hidden"
      >
        {/* Giant decorative "$" with parallax */}
        <div
          ref={parallaxRef}
          aria-hidden
          className="pointer-events-none absolute -right-12 md:-right-20 top-40 font-display italic leading-none select-none will-change-transform"
          style={{
            fontSize: "clamp(22rem, 38vw, 44rem)",
            color: "rgba(201,99,66,0.05)",
            fontVariationSettings: '"opsz" 144, "SOFT" 100',
          }}
        >
          $
        </div>

        <div className="relative max-w-[1180px] mx-auto px-6 md:px-10">
          {/* MASTHEAD — logo con presencia */}
          <div className="rise rise-1 flex items-center justify-between mb-16 md:mb-20">
            <div className="flex items-center gap-5">
              <div className="h-px w-12 bg-[#C96342]" />
              <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                Capítulo III · El catálogo completo
              </p>
            </div>
            <a href="/" className="flex items-center gap-3" aria-label="InnovaKids LATAM">
              {/* Monograma "IK" */}
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
                  LATAM · desde 2024
                </span>
              </span>
            </a>
          </div>

          {/* HEADLINE */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
            <h2 className="rise rise-2 col-span-12 md:col-span-9 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.94] tracking-[-0.03em] font-normal">
              Así se ve el ticket
              <br />
              completo —{" "}
              <em className="italic text-[#C96342]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>antes</em>{" "}
              del precio.
            </h2>
            <div className="rise rise-3 col-span-12 md:col-span-3 md:pt-6 md:border-l md:border-[#1A1714]/15 md:pl-6">
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/55 mb-3">Cómo leer</p>
              <p className="font-display italic text-xl md:text-2xl leading-tight text-[#1A1714]/80">
                Cada ítem con su valor. Al final, la factura.
              </p>
            </div>
          </div>

          {/* NEXT COHORT BANNER — visible, responsivo, con count-ups */}
          <div className="rise rise-3 mb-20 md:mb-28">
            <div className="relative flex flex-col md:flex-row md:items-stretch gap-0 bg-[#F2EDE0] border border-[#1A1714]/12 rounded-[3px] overflow-hidden">
              {/* glow decorativo */}
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-40 h-40 md:w-56 md:h-56 rounded-full vp-drift pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,99,66,0.25), transparent 70%)" }}
              />

              {/* Bloque izquierdo — cohorte */}
              <div className="relative flex items-center gap-5 p-6 md:p-8 md:flex-1">
                <span
                  aria-hidden
                  className="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1A1714] text-[#FAF7EF] shrink-0"
                >
                  {/* pulso rojo */}
                  <span className="absolute inset-0 rounded-full vp-live-pulse" style={{ boxShadow: "0 0 0 0 rgba(201,99,66,0.7)" }} />
                  <span
                    className="relative font-display italic text-2xl md:text-3xl leading-none"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                  >
                    27
                  </span>
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative inline-block w-2 h-2 rounded-full bg-[#C96342]">
                      <span aria-hidden className="absolute inset-0 rounded-full bg-[#C96342] vp-live-ping" />
                    </span>
                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">Próxima cohorte</p>
                  </div>
                  <p
                    className="font-display text-2xl md:text-4xl leading-[1] tracking-[-0.02em] text-[#1A1714]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                  >
                    El <em className="italic text-[#C96342]">11 de mayo</em>.
                  </p>
                </div>
              </div>

              {/* Bloque derecho — stats con count-up */}
              <div className="relative grid grid-cols-3 divide-x divide-[#1A1714]/10 border-t md:border-t-0 md:border-l border-[#1A1714]/12">
                {[
                  { n: 12,    suffix: "",      label: "Cupos totales" },
                  { n: 5,     suffix: "",      label: "Niños por grupo" },
                  { n: null,  static: "8 – 17", label: "Rango de edad" },
                ].map((s, i) => (
                  <div key={i} className="py-5 md:py-6 px-4 md:px-6 flex flex-col items-center text-center justify-center">
                    <p
                      className="font-display italic text-[#1A1714] leading-none mb-1.5 tabular-nums"
                      style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                    >
                      {s.n !== null ? <CountUp to={s.n} prefix="" suffix={s.suffix || ""} duration={1600 + i * 200} /> : s.static}
                    </p>
                    <p className="font-mono-accent text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-[#1A1714]/55">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RESERVA — USD 27 hoy, resto después de la 2ª clase */}
          <div className="rise rise-3 mb-20 md:mb-28">
            <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-stretch gap-0 bg-[#1A1714] text-[#FAF7EF] rounded-[3px] overflow-hidden vp-reserva-card">
              {/* grain sutil animado */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-screen vp-grain-shift"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "3px 3px",
                }}
              />

              {/* halo terracota driftando detrás del precio */}
              <div
                aria-hidden
                className="absolute -top-24 -left-20 w-80 h-80 rounded-full pointer-events-none vp-reserva-halo"
                style={{
                  background:
                    "radial-gradient(circle, rgba(201,99,66,0.45), transparent 70%)",
                }}
              />

              {/* Columna 1 — stamp precio ESTÁTICO (siempre visible) */}
              <div className="relative flex flex-col items-start justify-center p-7 md:p-10 md:border-r border-b md:border-b-0 border-[#FAF7EF]/15 min-w-[240px]">
                <span className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3 inline-flex items-center gap-2">
                  <span className="relative inline-block w-1.5 h-1.5 rounded-full bg-[#C96342]">
                    <span aria-hidden className="absolute inset-0 rounded-full bg-[#C96342] vp-live-ping" />
                  </span>
                  Reserva hoy
                </span>

                <div className="flex items-baseline gap-1 vp-price-enter">
                  <span
                    aria-hidden
                    className="font-display italic text-[#FAF7EF]/20 leading-none select-none -mr-1 pb-1"
                    style={{
                      fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 100',
                    }}
                  >
                    $
                  </span>
                  <span
                    className="font-display italic text-[#FAF7EF] leading-none tabular-nums"
                    style={{
                      fontSize: "clamp(3.5rem, 8vw, 6rem)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 100',
                      textShadow: "0 2px 0 rgba(201,99,66,0.35)",
                    }}
                  >
                    27
                  </span>
                  <span className="font-mono-accent text-sm md:text-base uppercase tracking-[0.2em] text-[#FAF7EF]/60 pb-2 md:pb-3 ml-1">
                    USD
                  </span>
                </div>

                {/* divisor animado */}
                <div aria-hidden className="relative w-24 h-px bg-[#FAF7EF]/20 mt-4 overflow-hidden">
                  <span className="absolute inset-y-0 left-0 w-10 bg-[#C96342] vp-divider-sweep" />
                </div>

                <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#FAF7EF]/65 font-mono-accent">
                  Guarda el cupo hoy
                </span>
              </div>

              {/* Columna 2 — explicación editorial */}
              <div className="relative flex flex-col justify-center p-7 md:p-10 md:border-r border-b md:border-b-0 border-[#FAF7EF]/15">
                <p
                  className="font-display text-[#FAF7EF] leading-[1.05] tracking-[-0.02em] mb-4 vp-reveal-up"
                  style={{
                    fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 100',
                    animationDelay: "160ms",
                  }}
                >
                  Reserva con <em className="italic text-[#C96342]">USD&nbsp;27</em>.{" "}
                  <span className="text-[#FAF7EF]/85">
                    El resto se paga <em className="italic">después</em> de la 2ª clase.
                  </span>
                </p>
                <p
                  className="text-sm md:text-[15px] leading-relaxed text-[#FAF7EF]/65 max-w-[52ch] vp-reveal-up"
                  style={{ animationDelay: "320ms" }}
                >
                  Tu hijo entra a la cohorte, hace dos clases completas, y
                  recién ahí decides si continúa. Si no le convence, el saldo
                  no se cobra — y los USD&nbsp;27 también se devuelven.
                </p>
              </div>

              {/* Columna 3 — timeline 3 pasos con entrada staggered */}
              <div className="relative flex md:flex-col divide-x md:divide-x-0 md:divide-y divide-[#FAF7EF]/12 md:min-w-[280px]">
                {[
                  { k: "01", t: "Reservas", d: "USD 27 hoy" },
                  { k: "02", t: "Clases 1 + 2", d: "Sin compromiso" },
                  { k: "03", t: "Decides", d: "Sigue o se devuelve" },
                ].map((s, i) => (
                  <div
                    key={s.k}
                    className="flex-1 flex items-center gap-3 p-5 md:p-6 vp-step-enter"
                    style={{ animationDelay: `${220 + i * 140}ms` }}
                  >
                    <span
                      className="font-display italic text-[#C96342] leading-none shrink-0 vp-step-num"
                      style={{
                        fontSize: "clamp(1.25rem, 1.7vw, 1.7rem)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                      }}
                    >
                      {s.k}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-[#FAF7EF] text-base md:text-lg leading-tight tracking-[-0.01em]">
                        {s.t}
                      </p>
                      <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#FAF7EF]/55 mt-0.5 truncate">
                        {s.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* leyenda inferior tipo ticket */}
            <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/50 font-mono-accent">
              <span className="vp-reveal-up" style={{ animationDelay: "620ms" }}>
                · Cero letra chica · sin recargo por reserva
              </span>
              <span className="hidden md:inline vp-reveal-up" style={{ animationDelay: "720ms" }}>
                Ref · USD27-HOLD
              </span>
            </div>
          </div>

          {/* I — SKILLS */}
          <div className="mb-4">
            <SectionHead num="I." kicker="Las 4 habilidades que se lleva para siempre" title="Lotes 01 → 04 · El programa central" />
            <div>{skills.map((s, i) => <LotRow key={s.num} item={s} stagger={i * 80} />)}</div>
            <SubtotalRow label="Subtotal habilidades" amount={subtotalSkills} />
          </div>

          {/* GALERÍA EDITORIAL — fotos reales, prueba visual del valor */}
          <div className="my-16 md:my-24">
            <div className="flex items-baseline justify-between gap-4 mb-8 md:mb-12 pb-4 border-b border-[#1A1714]/12">
              <div className="flex items-center gap-4">
                <span className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                  Lámina A · Galería
                </span>
              </div>
              <p className="font-display italic text-lg md:text-2xl text-[#1A1714]/70 tracking-[-0.01em] max-w-[40ch] text-right">
                Proyectos reales entregados por alumnos entre 8 y 17 años.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-4 md:gap-5">
              {/* HERO grande — izquierda */}
              <figure className="relative group overflow-hidden rounded-[3px] bg-[#F2EDE0] border border-[#1A1714]/10 min-h-[360px] md:min-h-[540px]">
                <Image
                  src="/small-group-learning.jpg"
                  alt="Grupo pequeño de niños latinoamericanos aprendiendo IA"
                  fill
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(26,23,20,0.72))" }}
                />
                <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-[#FAF7EF]">
                  <p
                    className="font-display italic leading-[1] tracking-[-0.01em]"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                  >
                    “Por fin uso la IA<br className="hidden md:block" /> para algo mío.”
                  </p>
                  <span className="font-mono-accent text-[9px] md:text-[10px] uppercase tracking-[0.24em] text-[#FAF7EF]/80 shrink-0">
                    Lámina 01
                  </span>
                </figcaption>
              </figure>

              {/* Grid 2x2 — derecha */}
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {[
                  { src: "/child-creating-project.jpg",                             caption: "Crea sus proyectos", n: "02" },
                  { src: "/latino-tech-instructor.jpg",                             caption: "Mentores latinos",   n: "03" },
                  { src: "/children-creating-video-games-with-machine-learnin.jpg", caption: "Videojuegos con IA", n: "04" },
                  { src: "/kids-creating-ai-projects.jpg",                          caption: "Portafolio propio",  n: "05" },
                ].map((img) => (
                  <figure
                    key={img.n}
                    className="relative group overflow-hidden rounded-[3px] bg-[#F2EDE0] border border-[#1A1714]/10"
                  >
                    <div className="relative w-full aspect-square">
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 50vw, 21vw"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(180deg, transparent 50%, rgba(26,23,20,0.72))" }}
                      />
                    </div>
                    <figcaption className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 text-[#FAF7EF]">
                      <p
                        className="font-display italic leading-none"
                        style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.15rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                      >
                        {img.caption}
                      </p>
                      <span className="font-mono-accent text-[9px] uppercase tracking-[0.2em] text-[#FAF7EF]/75 shrink-0">
                        {img.n}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* II — PILLARS */}
          <div className="mb-4">
            <SectionHead num="II." kicker="Todo lo que viene incluido" title="Lotes 05 → 10 · La experiencia alrededor" />
            <div>{pillars.map((p, i) => <LotRow key={p.num} item={p} stagger={i * 80} />)}</div>
            <SubtotalRow label="Subtotal experiencia" amount={subtotalPillars} />
          </div>

          <div className="flex items-center justify-center gap-4 my-12 md:my-16" aria-hidden>
            <div className="h-px w-16 bg-[#1A1714]/15" />
            <span className="font-display italic text-xl text-[#C96342] inline-block">✦</span>
            <div className="h-px w-16 bg-[#1A1714]/15" />
          </div>

          {/* III — DOCUMENTS (bonos) */}
          <div className="mb-16 md:mb-20">
            <SectionHead num="III." kicker="Anexo · Documentos premium incluidos" title="4 documentos que sólo recibes en esta cohorte" />
            <div>{bonos.map((b, i) => <LotRow key={b.num} item={b} stagger={i * 80} />)}</div>
            <SubtotalRow label="Subtotal documentos premium" amount={subtotalBonos} />
          </div>

          {/* GARANTÍA — sello visual grande antes del recibo */}
          <div className="relative my-20 md:my-28">
            <div className="relative grid grid-cols-12 gap-8 md:gap-14 items-center bg-[#F2EDE0] border border-[#1A1714]/15 rounded-[3px] p-8 md:p-14 overflow-hidden">
              {/* grain */}
              <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <filter id="vp-guarantee-noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 0.1   0 0 0 0 0.09   0 0 0 0 0.08   0 0 0 0.7 0" /></filter>
                <rect width="100%" height="100%" filter="url(#vp-guarantee-noise)" />
              </svg>

              {/* decorative corners */}
              <span aria-hidden className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C96342]/40" />
              <span aria-hidden className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C96342]/40" />
              <span aria-hidden className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C96342]/40" />
              <span aria-hidden className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C96342]/40" />

              {/* Sello circular — columna izquierda */}
              <div className="relative col-span-12 md:col-span-5 flex items-center justify-center">
                <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px]">
                  {/* Rotating outer ring of text */}
                  <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full vp-seal-spin" aria-hidden>
                    <defs>
                      <path
                        id="vp-seal-circle"
                        d="M 160,160 m -132,0 a 132,132 0 1,1 264,0 a 132,132 0 1,1 -264,0"
                      />
                    </defs>
                    <text
                      fill="#1A1714"
                      style={{ fontFamily: "ui-monospace, 'SFMono-Regular', monospace", fontSize: 13, letterSpacing: 6, textTransform: "uppercase", fontWeight: 600 }}
                    >
                      <textPath href="#vp-seal-circle">
                        · Si no le gusta · te devolvemos el dinero · si no aprende · te devolvemos el dinero · 10 días · Innovakids ·
                      </textPath>
                    </text>
                  </svg>

                  {/* Inner disk */}
                  <div
                    className="absolute inset-[36px] md:inset-[48px] rounded-full border-[3px] border-[#C96342] bg-[#FAF7EF] flex flex-col items-center justify-center text-center p-5 shadow-[0_20px_50px_-20px_rgba(201,99,66,0.45)]"
                  >
                    {/* shield glyph */}
                    <svg viewBox="0 0 80 80" className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3" aria-hidden>
                      <path
                        d="M40 10 L 66 20 L 66 40 Q 66 58 40 72 Q 14 58 14 40 L 14 20 Z"
                        fill="#C96342"
                        fillOpacity="0.12"
                        stroke="#1A1714"
                        strokeWidth="2"
                      />
                      <path d="M30 40 L 37 48 L 52 32" stroke="#C96342" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p
                      className="font-display italic text-[#1A1714] leading-[0.95]"
                      style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                    >
                      10 días.
                    </p>
                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mt-2">
                      Devolución total
                    </p>
                  </div>
                </div>
              </div>

              {/* Texto — columna derecha */}
              <div className="col-span-12 md:col-span-7 relative">
                <div className="flex items-center gap-4 mb-5">
                  <span className="h-px w-10 bg-[#C96342]" />
                  <span className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                    Lámina B · Garantía
                  </span>
                </div>
                <h3
                  className="font-display text-[#1A1714] leading-[0.98] tracking-[-0.025em] mb-6"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  Si no le <em className="italic text-[#C96342]">gusta</em> o no aprende a usar la IA,
                  te devolvemos el dinero.
                </h3>
                <p className="text-base md:text-lg text-[#1A1714]/75 leading-relaxed max-w-[56ch] mb-8">
                  Tu hijo toma clases durante 10 días. Si no le gusta, o si al terminar no está usando la IA
                  para su vida — sus tareas, sus proyectos, sus ideas — escribes un mensaje por WhatsApp y
                  te devolvemos el 100%. Sin formularios, sin preguntas, sin letra chica.
                </p>

                <ul className="grid sm:grid-cols-3 gap-5 md:gap-6 border-t border-[#1A1714]/15 pt-6">
                  {[
                    { k: "01", t: "Si no le gusta",        d: "a tu hijo — fin de la historia, te devolvemos todo." },
                    { k: "02", t: "Si no aprende",         d: "a usar la IA para su vida real, te devolvemos todo." },
                    { k: "03", t: "Por WhatsApp",          d: "un mensaje basta. Cero papeleo, cero trámites." },
                  ].map((it) => (
                    <li key={it.k}>
                      <p className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#C96342]/70 font-semibold mb-1 tabular-nums">
                        {it.k}
                      </p>
                      <p
                        className="font-display italic text-[#1A1714] leading-none mb-2"
                        style={{ fontSize: "clamp(1.35rem, 2vw, 1.75rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                      >
                        {it.t}
                      </p>
                      <p className="text-sm text-[#1A1714]/70 leading-relaxed">{it.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* IV — RECEIPT */}
          <div className="relative" ref={receipt.ref}>
            <div
              aria-hidden
              className="absolute -top-3 left-0 right-0 h-3 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle at 8px -2px, #FAF7EF 10px, transparent 11px)", backgroundSize: "16px 12px", backgroundRepeat: "repeat-x" }}
            />

            <div
              className="relative bg-[#1A1714] text-[#FAF7EF] rounded-[3px] overflow-hidden"
              style={{
                backgroundImage: "radial-gradient(circle at 18% 20%, rgba(201,99,66,0.22), transparent 42%), radial-gradient(circle at 82% 80%, rgba(201,99,66,0.12), transparent 50%)",
              }}
            >
              <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.07] mix-blend-screen pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <filter id="vp-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 0.9 0" /></filter>
                <rect width="100%" height="100%" filter="url(#vp-noise)" />
              </svg>

              <div className="relative p-8 md:p-14 lg:p-20">
                {/* Receipt header */}
                <div className="flex items-start justify-between mb-10 md:mb-14 pb-6 border-b border-[#FAF7EF]/15">
                  <div>
                    <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-2">Factura · Recibo de cohorte</p>
                    <p className="font-display italic text-2xl md:text-3xl leading-none">N.º 2026 / COHORTE MAYO</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/55 mb-1">Emitido</p>
                    <p className="font-mono-accent text-[11px] md:text-xs text-[#FAF7EF]/80 tabular-nums">
                      Hoy · {new Date().toLocaleDateString("es-CL", { day: "2-digit", month: "short", year: "numeric" })}
                    </p>
                  </div>
                </div>

                {/* Itemized */}
                <div className="space-y-0.5 mb-8 md:mb-10">
                  <div className="flex items-baseline gap-4 py-3">
                    <span className="font-mono-accent text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#FAF7EF]/75">Habilidades (lotes 01–04)</span>
                    <DotLeader light />
                    <span className="font-display italic tabular-nums text-xl md:text-2xl text-[#FAF7EF]">{fmt(subtotalSkills)}</span>
                  </div>
                  <div className="flex items-baseline gap-4 py-3">
                    <span className="font-mono-accent text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#FAF7EF]/75">Experiencia (lotes 05–10)</span>
                    <DotLeader light />
                    <span className="font-display italic tabular-nums text-xl md:text-2xl text-[#FAF7EF]">{fmt(subtotalPillars)}</span>
                  </div>
                  <div className="flex items-baseline gap-4 py-3">
                    <span className="font-mono-accent text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#FAF7EF]/75">Bonos de cohorte (anexo A)</span>
                    <DotLeader light />
                    <span className="font-display italic tabular-nums text-xl md:text-2xl text-[#FAF7EF]">{fmt(subtotalBonos)}</span>
                  </div>

                  {/* Total with animated strikethrough */}
                  <div className="flex items-baseline gap-4 pt-5 mt-3 border-t border-[#FAF7EF]/20">
                    <span className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#FAF7EF]/75 font-semibold">Total si lo compras por separado</span>
                    <DotLeader light />
                    <span
                      className={`relative font-display italic tabular-nums text-3xl md:text-5xl text-[#FAF7EF]/55 ${receipt.inView ? "vp-strike-animate" : ""}`}
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                    >
                      {fmt(grandTotal)} USD
                    </span>
                  </div>

                  {/* Discount */}
                  <div className="flex items-baseline gap-4 py-3">
                    <span className="font-mono-accent text-[11px] md:text-xs uppercase tracking-[0.24em] text-[#C96342] font-semibold">Descuento de lanzamiento</span>
                    <DotLeader light />
                    <span className="font-display italic tabular-nums text-xl md:text-2xl text-[#C96342]">− {fmt(discount)}</span>
                  </div>
                </div>

                {/* FINAL PRICE + CTA */}
                <div className="relative grid md:grid-cols-12 gap-10 md:gap-16 items-end pt-8 md:pt-10 border-t border-dashed border-[#FAF7EF]/25">
                  {/* PAGADO stamp (drops in when visible) */}
                  <div
                    aria-hidden
                    className={`absolute top-6 md:top-4 right-4 md:right-8 select-none pointer-events-none hidden md:block ${receipt.inView ? "vp-stamp-animate" : "opacity-0"}`}
                  >
                    <div className="relative border-[3px] border-[#C96342] px-5 py-2 rounded-sm">
                      <p className="font-display italic text-3xl text-[#C96342] leading-none tracking-[0.04em]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>PAGADO</p>
                      <p className="font-mono-accent text-[9px] uppercase tracking-[0.3em] text-[#C96342]/80 mt-1">Mayo · 2026</p>
                    </div>
                  </div>

                  <div className="md:col-span-7 relative">
                    <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">Lo que pagas hoy</p>

                    {/* Price with single shimmer one-shot */}
                    <p
                      className="vp-price-shine font-display italic tabular-nums leading-[0.88] tracking-[-0.045em]"
                      style={{ fontSize: "clamp(4.5rem, 13vw, 10rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                    >
                      {fmt(priceToday)}
                      <span className="text-[#C96342]">.</span>
                    </p>

                    <p className="font-mono-accent text-[11px] md:text-xs uppercase tracking-[0.22em] text-[#FAF7EF]/55 mt-2">
                      USD · pago único · o 3 cuotas de {fmt(Math.round(priceToday / 3))}
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <a
                      href="#sesion-estrategica"
                      className="group relative inline-flex w-full items-center justify-between gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-5 text-base md:text-lg font-semibold rounded-sm shadow-[0_18px_50px_-12px_rgba(201,99,66,0.55)] hover:shadow-[0_28px_80px_-12px_rgba(201,99,66,0.75)] transition-all duration-500"
                    >
                      <span className="flex flex-col items-start leading-tight">
                        <span className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#FAF7EF]/75">Paso siguiente</span>
                        <span>Reservar mi cupo ahora</span>
                      </span>
                      <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                    </a>

                    <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                      {["Garantía 10 días", "3 cuotas sin interés", "Llamada sin compromiso", "Solo 12 cupos / cohorte"].map((t) => (
                        <li key={t} className="flex items-start gap-2 font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#FAF7EF]/70">
                          <span className="text-[#C96342] mt-[1px]">✓</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 md:mt-14 pt-6 border-t border-dashed border-[#FAF7EF]/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Monograma del recibo */}
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#FAF7EF]/40"
                    >
                      <span
                        className="font-display italic text-base text-[#FAF7EF] leading-none"
                        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                      >
                        I<span className="text-[#C96342]">k</span>
                      </span>
                    </span>
                    <div className="leading-tight">
                      <p className="font-display text-sm text-[#FAF7EF]">
                        Innova<em className="not-italic font-semibold text-[#C96342]">kids</em> LATAM
                      </p>
                      <p className="font-mono-accent text-[9px] uppercase tracking-[0.24em] text-[#FAF7EF]/50">
                        innovakidslatam.com
                      </p>
                    </div>
                  </div>
                  <p className="font-display italic text-sm md:text-base text-[#FAF7EF]/70 md:text-right max-w-[42ch]">
                    “Si no le gusta a tu hijo o no aprende a usar la IA — te devolvemos el dinero.”
                  </p>
                </div>
              </div>

              <div
                aria-hidden
                className="absolute -bottom-3 left-0 right-0 h-3 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 8px 14px, #FAF7EF 10px, transparent 11px)", backgroundSize: "16px 12px", backgroundRepeat: "repeat-x" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ValuePropositionSection
