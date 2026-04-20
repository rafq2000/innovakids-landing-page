import type { ReactNode } from "react"

interface ValueItem {
  icon: ReactNode
  title: string
  desc: string
  value: string
}

const stroke = "stroke-[#C96342]"

const skills: ValueItem[] = [
  {
    title: "Aprenden a estudiar con IA",
    desc: "Resúmenes, mapas mentales y prompts probados para que el colegio sea más rápido y entiendan mejor.",
    value: "$180",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10c5-2 12-2 18 2v28c-6-4-13-4-18-2V10Z" />
        <path d="M42 10c-5-2-12-2-18 2v28c6-4 13-4 18-2V10Z" />
        <path d="M12 18h6M12 24h6M30 18h6M30 24h6" />
      </svg>
    ),
  },
  {
    title: "Programan proyectos reales",
    desc: "Apps, videojuegos y webs funcionales — no ejercicios de juguete. Codigo que pueden mostrar.",
    value: "$320",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16l-8 8 8 8" />
        <path d="M32 16l8 8-8 8" />
        <path d="M28 12l-8 24" />
      </svg>
    ),
  },
  {
    title: "Usan agentes de IA",
    desc: "ChatGPT, Claude, Gemini, agentes autónomos. Aprenden a delegar tareas a la IA, no solo a usarla.",
    value: "$240",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="14" width="28" height="22" rx="3" />
        <path d="M18 22h.01M30 22h.01" />
        <path d="M20 30h8" />
        <path d="M24 8v6M16 14l-4-4M32 14l4-4" />
      </svg>
    ),
  },
  {
    title: "Crean con IA",
    desc: "Imagenes, musica, video, voces, presentaciones. Pasan de consumir contenido a producirlo.",
    value: "$220",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6l3.5 11.5L39 21l-9 7 3 12-9-7-9 7 3-12-9-7 11.5-3.5L24 6Z" />
      </svg>
    ),
  },
]

const pillars: ValueItem[] = [
  {
    title: "Horarios 100% flexibles",
    desc: "Eligen el día y hora que les acomoda. Si no pueden, hay grabacion al instante. Sin perder clase.",
    value: "incluido",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 12v12l8 5" />
      </svg>
    ),
  },
  {
    title: "Educación personalizada",
    desc: "Maximo 5 niños por grupo. El mentor conoce a tu hijo, su nivel y sus intereses por nombre.",
    value: "incluido",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="6" />
        <path d="M6 38c0-6 5-10 12-10s12 4 12 10" />
        <circle cx="34" cy="14" r="4" />
        <path d="M30 26c5 0 12 3 12 8" />
      </svg>
    ),
  },
  {
    title: "Mentor 1:1 cuando lo necesite",
    desc: "Sesiones individuales con un mentor para resolver dudas o profundizar en lo que mas le apasiona.",
    value: "$97",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12h32v22H22l-8 8v-8H8V12Z" />
      </svg>
    ),
  },
  {
    title: "Soporte por WhatsApp",
    desc: "Tu y tu hijo escriben cuando quieran. Respondemos en menos de 5 minutos en horario activo.",
    value: "incluido",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 24c0 8.8-7.2 16-16 16-2.5 0-4.9-.6-7-1.6L8 40l1.6-9C8.6 28.9 8 26.5 8 24c0-8.8 7.2-16 16-16s16 7.2 16 16Z" />
      </svg>
    ),
  },
  {
    title: "Garantía de 10 días",
    desc: "Si no ves a tu hijo enganchado en los primeros 10 días, devolución total. Sin preguntas.",
    value: "$297",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6l16 5v12c0 9-7 16-16 18-9-2-16-9-16-18V11l16-5Z" />
        <path d="M16 24l6 6 12-12" />
      </svg>
    ),
  },
  {
    title: "Certificado digital",
    desc: "Certificado verificable que pueden mostrar en su portafolio o postulaciones futuras.",
    value: "$47",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className={`w-7 h-7 ${stroke}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="10" />
        <path d="M18 28l-3 13 9-5 9 5-3-13" />
      </svg>
    ),
  },
]

export function ValuePropositionSection() {
  return (
    <section
      id="propuesta-valor"
      className="bg-[#FAF7EF] text-[#2F2F2C] py-28 md:py-40 border-t border-[#2F2F2C]/10"
      style={{ fontFamily: "'Charter', 'Georgia', 'Cambria', 'Times New Roman', serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Logo + masthead */}
        <div className="flex items-center justify-between mb-20 md:mb-24">
          <div className="flex items-center gap-5">
            <div className="h-px w-12 bg-[#C96342]" />
            <p
              className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold"
              style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              Lo que recibe · N.º 03
            </p>
          </div>
          <a href="/" className="flex items-baseline gap-1.5" aria-label="InnovaKids">
            <span className="text-2xl md:text-3xl leading-none tracking-[-0.02em] text-[#1A1714]">
              Innova<em className="not-italic font-semibold text-[#C96342]">kids</em>
            </span>
            <span
              className="text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-[#1A1714]/55 hidden sm:inline pb-0.5"
              style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              latam
            </span>
          </a>
        </div>

        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal mb-8 max-w-[16ch]">
          Todo lo que tu hijo
          <br />
          <em className="italic text-[#C96342]">recibe</em> por $297.
        </h2>

        <p
          className="text-lg md:text-xl text-[#5A5751] max-w-[58ch] leading-relaxed mb-20 md:mb-24"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Antes de hablar de programa, queremos que veas la oferta completa. Cada
          item se cobra aparte en otras academias — aquí van todos juntos.
        </p>

        {/* —— Habilidades (lo que aprenden) —— */}
        <div className="mb-20 md:mb-24">
          <p
            className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-10"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            01 · Cuatro habilidades concretas
          </p>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {skills.map((s, i) => (
              <div key={i} className="flex gap-5 border-t border-[#2F2F2C]/12 pt-6">
                <div className="shrink-0 w-12 h-12 rounded-full border border-[#C96342]/30 bg-[#C96342]/5 flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl leading-tight text-[#1A1714]">
                      {s.title}
                    </h3>
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] text-[#5A5751] line-through opacity-60 shrink-0"
                      style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                    >
                      valor {s.value}
                    </span>
                  </div>
                  <p
                    className="text-[15px] text-[#5A5751] leading-relaxed"
                    style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* —— Pilares (lo que viene incluido) —— */}
        <div className="mb-20 md:mb-24">
          <p
            className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-10"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            02 · Lo que viene con el curso
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {pillars.map((p, i) => (
              <div key={i} className="flex gap-5 border-t border-[#2F2F2C]/12 pt-6">
                <div className="shrink-0 w-12 h-12 rounded-full border border-[#C96342]/30 bg-[#C96342]/5 flex items-center justify-center">
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl leading-tight text-[#1A1714] mb-2">
                    {p.title}
                  </h3>
                  <p
                    className="text-sm text-[#5A5751] leading-relaxed mb-3"
                    style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                  >
                    {p.desc}
                  </p>
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] text-[#C96342] font-semibold"
                    style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                  >
                    {p.value === "incluido" ? "✓ incluido" : `valor ${p.value}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* —— Total value summary —— */}
        <div className="bg-[#1A1714] text-[#FAF7EF] rounded-sm p-10 md:p-14">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p
                className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5"
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                Resumen del valor
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight font-normal mb-6">
                Si lo compras por separado:{" "}
                <span className="text-[#FAF7EF]/50 line-through">$1.401</span>
              </p>
              <p
                className="text-base text-[#FAF7EF]/70 leading-relaxed max-w-[44ch]"
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                Sin contar los 4 bonos exclusivos de esta cohorte ($251 más en valor).
                Para tu familia, todo junto: <strong className="text-[#FAF7EF]">$297 USD</strong>.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a
                href="#sesion-estrategica"
                className="group inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] transition-all duration-300"
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                <span>Agendar evaluación gratis</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              </a>
              <p
                className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[#FAF7EF]/60"
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                30 minutos · Sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuePropositionSection
