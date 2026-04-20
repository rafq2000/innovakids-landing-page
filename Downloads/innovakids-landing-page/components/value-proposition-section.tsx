import type { ReactNode } from "react"

/* ============================================================
   ICONOGRAPHY
   Each icon is a hand-crafted dual-tone composition:
     - Organic terracotta blob (decorative background)
     - Ink stroke illustration with personality
     - Optional terracotta accent dot/spark
   Sized at 80x80 viewBox. Rendered at 64-88px via CSS.
   ============================================================ */

const ICON_INK = "#1A1714"
const ICON_TINT = "#C96342"

const Icon = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full ${className}`}
  >
    {children}
  </svg>
)

/* — 01 — Estudiar con IA — open book + neural sparks */
const IconStudy = () => (
  <Icon>
    <path
      d="M8 22 C 14 18, 28 16, 38 22 L 38 64 C 28 58, 14 60, 8 64 Z"
      fill={ICON_TINT}
      fillOpacity="0.14"
      transform="rotate(-3 40 40)"
    />
    <path
      d="M72 22 C 66 18, 52 16, 42 22 L 42 64 C 52 58, 66 60, 72 64 Z"
      fill={ICON_TINT}
      fillOpacity="0.14"
      transform="rotate(-3 40 40)"
    />
    <path
      d="M10 24 C 16 20, 30 18, 40 24 L 40 60 C 30 54, 16 56, 10 60 Z"
      stroke={ICON_INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M70 24 C 64 20, 50 18, 40 24 L 40 60 C 50 54, 64 56, 70 60 Z"
      stroke={ICON_INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M16 32 H 32 M 16 38 H 30 M 16 44 H 30" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M48 32 H 64 M 48 38 H 62 M 48 44 H 62" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" />
    {/* AI spark above */}
    <path
      d="M40 8 L 41.6 12.4 L 46 14 L 41.6 15.6 L 40 20 L 38.4 15.6 L 34 14 L 38.4 12.4 Z"
      fill={ICON_TINT}
    />
    <circle cx="52" cy="10" r="1.6" fill={ICON_TINT} />
    <circle cx="28" cy="11" r="1.2" fill={ICON_INK} opacity="0.4" />
  </Icon>
)

/* — 02 — Programar — bracket + cursor + scaffold */
const IconCode = () => (
  <Icon>
    <rect
      x="10" y="14" width="60" height="52" rx="4"
      fill={ICON_TINT}
      fillOpacity="0.12"
      transform="rotate(-2 40 40)"
    />
    <rect x="12" y="16" width="56" height="48" rx="3" stroke={ICON_INK} strokeWidth="1.6" />
    <path d="M12 24 H 68" stroke={ICON_INK} strokeWidth="1.4" />
    <circle cx="17" cy="20" r="1.2" fill={ICON_INK} />
    <circle cx="22" cy="20" r="1.2" fill={ICON_INK} />
    <circle cx="27" cy="20" r="1.2" fill={ICON_TINT} />
    {/* Code brackets */}
    <path d="M26 36 L 20 44 L 26 52" stroke={ICON_INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M54 36 L 60 44 L 54 52" stroke={ICON_INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 32 L 36 56" stroke={ICON_TINT} strokeWidth="2.2" strokeLinecap="round" />
    {/* Cursor */}
    <rect x="38" y="58" width="2" height="4" fill={ICON_INK}>
      <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
    </rect>
  </Icon>
)

/* — 03 — Usar agentes — robot face with antenna + delegation arrows */
const IconAgent = () => (
  <Icon>
    <ellipse cx="40" cy="44" rx="30" ry="26" fill={ICON_TINT} fillOpacity="0.12" transform="rotate(2 40 44)" />
    {/* head */}
    <rect x="18" y="22" width="44" height="34" rx="8" stroke={ICON_INK} strokeWidth="1.6" />
    <path d="M40 14 V 22" stroke={ICON_INK} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="40" cy="12" r="2.4" fill={ICON_TINT} />
    {/* eyes */}
    <circle cx="30" cy="36" r="3" fill={ICON_INK} />
    <circle cx="50" cy="36" r="3" fill={ICON_INK} />
    <circle cx="31" cy="35" r="0.9" fill="#FAF7EF" />
    <circle cx="51" cy="35" r="0.9" fill="#FAF7EF" />
    {/* mouth */}
    <path d="M30 46 Q 40 50 50 46" stroke={ICON_INK} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    {/* delegation lines */}
    <path d="M14 64 L 22 60" stroke={ICON_TINT} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M66 64 L 58 60" stroke={ICON_TINT} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="65" r="1.6" fill={ICON_TINT} />
    <circle cx="68" cy="65" r="1.6" fill={ICON_TINT} />
  </Icon>
)

/* — 04 — Crear con IA — palette + magic wand sparkles */
const IconCreate = () => (
  <Icon>
    <path
      d="M40 12 C 56 12, 68 24, 68 40 C 68 50, 60 56, 52 56 C 48 56, 46 58, 46 62 C 46 66, 44 68, 40 68 C 24 68, 12 56, 12 40 C 12 24, 24 12, 40 12 Z"
      fill={ICON_TINT}
      fillOpacity="0.14"
    />
    <path
      d="M40 14 C 55 14, 66 25, 66 40 C 66 49, 59 54, 52 54 C 47 54, 44 57, 44 62 C 44 65, 42 66, 40 66 C 25 66, 14 55, 14 40 C 14 25, 25 14, 40 14 Z"
      stroke={ICON_INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="26" cy="32" r="3" fill={ICON_TINT} />
    <circle cx="38" cy="24" r="2.8" fill={ICON_INK} />
    <circle cx="50" cy="28" r="3" fill={ICON_TINT} opacity="0.7" />
    <circle cx="54" cy="42" r="2.4" fill={ICON_INK} opacity="0.5" />
    {/* sparkle */}
    <path
      d="M68 14 L 70 18 L 74 20 L 70 22 L 68 26 L 66 22 L 62 20 L 66 18 Z"
      fill={ICON_TINT}
    />
  </Icon>
)

/* === Pillars === */

const IconClock = () => (
  <Icon>
    <circle cx="40" cy="40" r="26" fill={ICON_TINT} fillOpacity="0.12" transform="rotate(-4 40 40)" />
    <circle cx="40" cy="40" r="26" stroke={ICON_INK} strokeWidth="1.6" />
    <path d="M40 22 V 40 L 52 46" stroke={ICON_INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="40" cy="40" r="2" fill={ICON_TINT} />
    <circle cx="40" cy="14" r="1.4" fill={ICON_INK} opacity="0.5" />
    <circle cx="66" cy="40" r="1.4" fill={ICON_INK} opacity="0.5" />
    <circle cx="40" cy="66" r="1.4" fill={ICON_INK} opacity="0.5" />
    <circle cx="14" cy="40" r="1.4" fill={ICON_INK} opacity="0.5" />
  </Icon>
)

const IconGroup = () => (
  <Icon>
    <ellipse cx="40" cy="44" rx="30" ry="20" fill={ICON_TINT} fillOpacity="0.12" />
    {/* 5 figures in arc */}
    {[
      { x: 14, y: 50, r: 4 },
      { x: 26, y: 38, r: 4.5 },
      { x: 40, y: 32, r: 5 },
      { x: 54, y: 38, r: 4.5 },
      { x: 66, y: 50, r: 4 },
    ].map((p, i) => (
      <g key={i}>
        <circle cx={p.x} cy={p.y} r={p.r} stroke={ICON_INK} strokeWidth="1.6" fill={i === 2 ? ICON_TINT : "none"} />
        <path
          d={`M${p.x - p.r - 1} ${p.y + p.r + 8} Q ${p.x} ${p.y + p.r + 2} ${p.x + p.r + 1} ${p.y + p.r + 8}`}
          stroke={ICON_INK}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    ))}
  </Icon>
)

const IconMentor = () => (
  <Icon>
    {/* big bubble */}
    <path
      d="M10 18 H 50 C 54 18 56 20 56 24 V 42 C 56 46 54 48 50 48 H 24 L 14 56 V 48 C 12 48 10 46 10 42 V 24 C 10 20 12 18 16 18 Z"
      fill={ICON_TINT}
      fillOpacity="0.14"
    />
    <path
      d="M12 20 H 50 C 53 20 54 22 54 24 V 40 C 54 43 53 44 50 44 H 26 L 18 52 V 44 C 14 44 12 43 12 40 V 24 C 12 22 14 20 16 20 Z"
      stroke={ICON_INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* small bubble */}
    <path
      d="M44 50 H 66 C 68 50 70 52 70 54 V 64 C 70 66 68 68 66 68 H 60 L 54 74 V 68 C 50 68 48 66 48 64 V 54 C 48 52 50 50 52 50 Z"
      stroke={ICON_INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="#FAF7EF"
    />
    <circle cx="22" cy="32" r="1.6" fill={ICON_INK} />
    <circle cx="32" cy="32" r="1.6" fill={ICON_INK} />
    <circle cx="42" cy="32" r="1.6" fill={ICON_TINT} />
  </Icon>
)

const IconChat = () => (
  <Icon>
    <path
      d="M40 12 C 24 12, 12 22, 12 36 C 12 42, 14 47, 18 51 L 14 64 L 28 60 C 32 62, 36 62, 40 62 C 56 62, 68 52, 68 38 C 68 24, 56 12, 40 12 Z"
      fill={ICON_TINT}
      fillOpacity="0.14"
    />
    <path
      d="M40 14 C 25 14, 14 24, 14 36 C 14 41, 16 46, 19 49 L 16 60 L 27 57 C 31 59, 35 60, 40 60 C 55 60, 66 50, 66 38 C 66 26, 55 14, 40 14 Z"
      stroke={ICON_INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* check */}
    <path d="M30 36 L 37 43 L 50 30" stroke={ICON_TINT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
)

const IconShield = () => (
  <Icon>
    <path
      d="M40 8 L 64 16 V 38 C 64 52, 54 62, 40 68 C 26 62, 16 52, 16 38 V 16 Z"
      fill={ICON_TINT}
      fillOpacity="0.14"
    />
    <path
      d="M40 10 L 62 17 V 38 C 62 51, 53 60, 40 66 C 27 60, 18 51, 18 38 V 17 Z"
      stroke={ICON_INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <text
      x="40"
      y="44"
      textAnchor="middle"
      fontFamily="Georgia, serif"
      fontSize="20"
      fontStyle="italic"
      fontWeight="500"
      fill={ICON_INK}
    >
      10
    </text>
    <path d="M28 50 H 52" stroke={ICON_TINT} strokeWidth="1.4" strokeLinecap="round" />
  </Icon>
)

const IconMedal = () => (
  <Icon>
    {/* ribbon */}
    <path d="M28 8 L 36 38 L 28 38 L 24 28 Z" fill={ICON_INK} opacity="0.85" />
    <path d="M52 8 L 56 28 L 52 38 L 44 38 Z" fill={ICON_TINT} />
    {/* medal */}
    <circle cx="40" cy="48" r="20" fill={ICON_TINT} fillOpacity="0.14" />
    <circle cx="40" cy="48" r="18" stroke={ICON_INK} strokeWidth="1.6" />
    <circle cx="40" cy="48" r="11" stroke={ICON_INK} strokeWidth="1.4" />
    {/* star */}
    <path
      d="M40 41 L 41.8 45.4 L 46.4 45.8 L 42.9 48.7 L 44.1 53.2 L 40 50.7 L 35.9 53.2 L 37.1 48.7 L 33.6 45.8 L 38.2 45.4 Z"
      fill={ICON_TINT}
    />
  </Icon>
)

/* ============================================================
   DATA
   ============================================================ */

interface Skill {
  num: string
  icon: ReactNode
  title: string
  desc: string
  value: string
  rise: string
}
interface Pillar {
  icon: ReactNode
  title: string
  desc: string
  value: string
}

const skills: Skill[] = [
  {
    num: "01",
    icon: <IconStudy />,
    title: "Estudia con IA",
    desc: "Resúmenes en segundos, mapas mentales, prompts probados para tareas. El colegio se vuelve rápido — y entiende mejor lo que estudia.",
    value: "$180",
    rise: "rise-1",
  },
  {
    num: "02",
    icon: <IconCode />,
    title: "Programa de verdad",
    desc: "Apps, videojuegos y webs funcionales. No ejercicios de juguete: código real que puede mostrar, compartir y seguir mejorando.",
    value: "$320",
    rise: "rise-2",
  },
  {
    num: "03",
    icon: <IconAgent />,
    title: "Maneja agentes IA",
    desc: "ChatGPT, Claude, Gemini, agentes autónomos. Aprende a delegar tareas a la IA — no a depender de ella.",
    value: "$240",
    rise: "rise-3",
  },
  {
    num: "04",
    icon: <IconCreate />,
    title: "Crea con IA",
    desc: "Imágenes, música, voces, video, presentaciones. Pasa de consumir contenido a producirlo, con su propio estilo.",
    value: "$220",
    rise: "rise-4",
  },
]

const pillars: Pillar[] = [
  { icon: <IconClock />, title: "Horarios 100% flexibles", desc: "Eligen el día y la hora. Si no pueden, hay grabación al instante.", value: "incluido" },
  { icon: <IconGroup />, title: "Educación personalizada", desc: "Máximo 5 niños por grupo. El mentor los conoce por nombre.", value: "incluido" },
  { icon: <IconMentor />, title: "Mentor 1:1 cuando lo necesite", desc: "Sesiones individuales para resolver dudas o profundizar más.", value: "$97" },
  { icon: <IconChat />, title: "Soporte por WhatsApp", desc: "Tú y tu hijo escriben cuando quieran. Respuesta en menos de 5 min.", value: "incluido" },
  { icon: <IconShield />, title: "Garantía de 10 días", desc: "Si no lo ves enganchado, devolución total. Sin preguntas.", value: "$297" },
  { icon: <IconMedal />, title: "Certificado digital", desc: "Verificable, para portafolio o postulaciones futuras.", value: "$47" },
]

/* ============================================================
   COMPONENT
   ============================================================ */

export function ValuePropositionSection() {
  return (
    <section
      id="propuesta-valor"
      className="relative bg-[#FAF7EF] text-[#1A1714] py-28 md:py-40 border-t border-[#1A1714]/10 overflow-hidden"
    >
      {/* Decorative oversized "$" character bleeding off-canvas — magazine flourish */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 md:-right-20 top-32 font-display italic leading-none select-none"
        style={{
          fontSize: "clamp(22rem, 38vw, 44rem)",
          color: "rgba(201,99,66,0.05)",
          fontVariationSettings: '"opsz" 144, "SOFT" 100',
        }}
      >
        $
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">

        {/* —— Editorial masthead with logo —— */}
        <div className="rise rise-1 flex items-center justify-between mb-20 md:mb-28">
          <div className="flex items-center gap-5">
            <div className="h-px w-12 bg-[#C96342]" />
            <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
              Capítulo III · La oferta completa
            </p>
          </div>
          <a href="/" className="flex items-baseline gap-1.5" aria-label="InnovaKids">
            <span className="font-display text-2xl md:text-3xl leading-none tracking-[-0.025em] text-[#1A1714]">
              Innova<em className="not-italic font-semibold text-[#C96342]">kids</em>
            </span>
            <span className="font-mono-accent text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-[#1A1714]/55 hidden sm:inline pb-0.5">
              latam
            </span>
          </a>
        </div>

        {/* —— Asymmetric headline (price moved to final reveal) —— */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28">
          <h2 className="rise rise-2 col-span-12 md:col-span-9 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.94] tracking-[-0.03em] font-normal">
            Todo lo que tu hijo
            <br />
            recibe — en{" "}
            <em
              className="italic text-[#C96342]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              una sola
            </em>{" "}
            cohorte.
          </h2>
          <div className="rise rise-3 col-span-12 md:col-span-3 md:pt-6 md:border-l md:border-[#1A1714]/15 md:pl-6">
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/55 mb-3">
              Antes de hablar del programa
            </p>
            <p className="font-display italic text-xl md:text-2xl leading-tight text-[#1A1714]/80">
              Cada item se vende aparte en otras academias. Aquí van todos juntos.
            </p>
          </div>
        </div>

        {/* ============================================================
            01 — HABILIDADES (large editorial cards, 2x2 magazine spread)
            ============================================================ */}
        <div className="mb-24 md:mb-32">
          <div className="rise rise-3 flex items-baseline gap-5 mb-12 md:mb-16">
            <span className="font-display italic text-[#C96342] text-3xl md:text-4xl leading-none">01</span>
            <div className="h-px flex-1 bg-[#1A1714]/15" />
            <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#1A1714]/60 font-semibold">
              Cuatro habilidades que se llevan para siempre
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-16 md:gap-y-20">
            {skills.map((s, i) => {
              const offset = i % 2 === 0 ? "" : "md:mt-12"
              return (
                <article
                  key={s.num}
                  className={`rise ${s.rise} group relative ${offset}`}
                >
                  <div className="flex items-start gap-6 md:gap-8">
                    {/* Icon — large, with decorative ring */}
                    <div className="relative shrink-0">
                      <div
                        aria-hidden
                        className="absolute inset-0 rounded-full border border-[#C96342]/20"
                        style={{ transform: "scale(1.18) rotate(-6deg)" }}
                      />
                      <div
                        aria-hidden
                        className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#C96342]"
                      />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FAF7EF] border border-[#1A1714]/10 shadow-[0_18px_40px_-22px_rgba(26,23,20,0.35)] p-3 transition-transform duration-500 group-hover:rotate-[-3deg] group-hover:scale-[1.04]">
                        {s.icon}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pt-2">
                      <div className="flex items-center gap-3 mb-3 font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#C96342] font-semibold">
                        <span className="tabular-nums">{s.num}</span>
                        <span className="h-px w-6 bg-[#C96342]/40" />
                        <span className="text-[#5A5751] line-through opacity-70">valor {s.value}</span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl lg:text-[42px] leading-[1.04] tracking-[-0.02em] mb-3 text-[#1A1714]">
                        {s.title}
                      </h3>
                      <p className="font-body text-[15px] md:text-base text-[#5A5751] leading-relaxed max-w-[42ch]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* —— Section break ornament —— */}
        <div className="flex items-center justify-center gap-4 mb-24 md:mb-32" aria-hidden>
          <div className="h-px w-20 bg-[#1A1714]/15" />
          <span className="font-display italic text-2xl text-[#C96342]">✦</span>
          <div className="h-px w-20 bg-[#1A1714]/15" />
        </div>

        {/* ============================================================
            02 — PILARES INCLUIDOS (three columns, denser)
            ============================================================ */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-baseline gap-5 mb-12 md:mb-16">
            <span className="font-display italic text-[#C96342] text-3xl md:text-4xl leading-none">02</span>
            <div className="h-px flex-1 bg-[#1A1714]/15" />
            <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#1A1714]/60 font-semibold">
              Lo que viene incluido en el programa
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-16">
            {pillars.map((p, i) => (
              <article key={i} className="group">
                <div className="flex gap-5 pb-6 border-b border-[#1A1714]/12">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#FAF7EF] border border-[#1A1714]/10 p-2.5 shadow-[0_10px_30px_-20px_rgba(26,23,20,0.3)] transition-transform duration-500 group-hover:rotate-[-4deg]">
                      {p.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-[22px] leading-tight tracking-[-0.01em] text-[#1A1714] mb-2">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm text-[#5A5751] leading-relaxed mb-3">
                      {p.desc}
                    </p>
                    <span className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#C96342] font-semibold">
                      {p.value === "incluido" ? "✓ incluido" : `valor ${p.value}`}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ============================================================
            03 — PRICE REVEAL (dramatic dark card, full-bleed within wrap)
            ============================================================ */}
        <div className="relative">
          {/* Decorative giant "297" peeking from behind */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display italic leading-none select-none whitespace-nowrap"
            style={{
              fontSize: "clamp(8rem, 14vw, 18rem)",
              color: "rgba(201,99,66,0.10)",
              fontVariationSettings: '"opsz" 144, "SOFT" 100',
            }}
          >
            297
          </div>

          <div
            className="relative bg-[#1A1714] text-[#FAF7EF] rounded-[2px] overflow-hidden"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 20%, rgba(201,99,66,0.18), transparent 38%), radial-gradient(circle at 82% 80%, rgba(201,99,66,0.10), transparent 45%)",
            }}
          >
            {/* Grain overlay (SVG noise inline) */}
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-screen pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="vp-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 0.9 0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#vp-noise)" />
            </svg>

            <div className="relative p-10 md:p-16 lg:p-20">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-10 md:mb-14">
                <span className="font-display italic text-[#C96342] text-3xl md:text-4xl leading-none">03</span>
                <div className="h-px flex-1 bg-[#FAF7EF]/20" />
                <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                  El veredicto
                </p>
              </div>

              <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#FAF7EF]/55 mb-6">
                Si lo compraras por separado
              </p>

              {/* Crossed-out total */}
              <p className="font-display text-7xl md:text-8xl lg:text-[140px] leading-[0.9] tracking-[-0.04em] text-[#FAF7EF]/40 line-through decoration-[#C96342] decoration-[5px] mb-10 md:mb-14">
                $1.401 USD
              </p>

              <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
                <div className="md:col-span-7">
                  <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                    Para tu familia, todo junto
                  </p>
                  <p className="font-display text-7xl md:text-8xl lg:text-[140px] leading-[0.88] tracking-[-0.04em] text-[#FAF7EF] mb-6">
                    $297
                    <span className="text-[#C96342]">.</span>
                  </p>
                  <p className="font-body text-sm md:text-base text-[#FAF7EF]/65 leading-relaxed max-w-[44ch]">
                    Pago único · 3 cuotas sin interés · 10 días de garantía. Sin contar los <strong className="text-[#FAF7EF]">4 bonos exclusivos</strong> de esta cohorte.
                  </p>
                </div>

                <div className="md:col-span-5 md:text-right">
                  <a
                    href="#sesion-estrategica"
                    className="group inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-8 py-4 text-base font-semibold rounded-sm shadow-[0_18px_50px_-12px_rgba(201,99,66,0.55)] hover:shadow-[0_22px_60px_-12px_rgba(201,99,66,0.7)] transition-all duration-300"
                  >
                    <span>Agendar evaluación gratis</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                  </a>
                  <p className="mt-4 font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/55">
                    30 minutos · Sin compromiso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuePropositionSection
