"use client"

import { useState } from "react"

const modules = {
  explorer: {
    number: "01",
    title: "Vibe Explorer",
    subtitle: "Fundamentos & Creatividad con IA",
    description:
      "El punto de partida obligatorio. Domina los fundamentos de la IA generativa, prompts y creatividad.",
    lessons: [
      "Vibe IA: Tu nuevo superpoder",
      "Prompt Engineering: El arte de hablar con máquinas",
      "Vibe Voice: Clonación de voz y narración",
      "Vibe Music: Composición musical con IA",
      "Generative Art I: De la imaginación a la imagen",
      "Generative Art II: Storytelling visual consistente",
      "Vibe Coding: Programación de videojuegos con IA",
      "Vibe Study: Hackea tu escuela",
      "Cyber Ethics: Deepfakes y seguridad digital",
      "The Vibe Project: Presentación final de identidad",
    ],
  },
  coding: {
    number: "02",
    title: "Vibe Coding",
    subtitle: "Programación asistida por IA",
    description:
      "Deja que la IA escriba el código mientras tú diriges la lógica. Crea webs, juegos y apps reales.",
    lessons: [
      "Algorithmic Vibe: Lógica sin código aburrido",
      "Vision to Reality: De dibujo a web real",
      "Instant Deploy: Publicando tu sitio en la nube",
      "Interactive JS: Magia y movimiento web",
      "Game Vibe I: Diseño de mecánicas de juego",
      "Remixing Classics: Recreando juegos retro con IA",
      "Original Game: Tu videojuego desde cero",
      "App Design AI: Interfaces de usuario automáticas",
      "Smart Apps: WebApps que resuelven problemas",
      "Data Vibe: Análisis de datos con Python + IA",
    ],
  },
  enterprise: {
    number: "03",
    title: "Vibe Enterprise",
    subtitle: "Incubadora de startups con IA",
    description:
      "Tu co-founder es una IA. Metodología Silicon Valley adaptada: de la idea al pitch.",
    lessons: [
      "Pain Detective: Detectando problemas reales",
      "AI Brainstorming: 100 ideas en 10 minutos",
      "Canvas Co-Pilot: Modelo de negocio con IA",
      "Avatar Creation: Entrevistando a tu cliente ideal",
      "MVP Speedrun: Prototipado rápido de producto",
      "Vibe Validation: Landing pages para validar",
      "Brand Genes: Creación de marca e identidad",
      "Smart Finance: Proyecciones financieras con IA",
      "Sales Simulator: Roleplay de ventas con bot",
      "Perfect Pitch: Oratoria para Shark Tank",
    ],
  },
  learning: {
    number: "04",
    title: "Vibe Learning",
    subtitle: "Hackea tu escuela",
    description: "Aprende el doble en la mitad de tiempo. Productividad académica extrema.",
    lessons: [
      "Neuro-AI: Aprendizaje acelerado personalizado",
      "Visual Mind: Mapas mentales automáticos",
      "Turbo Reading: Resúmenes y comprensión veloz",
      "Socratic Bot: Tu tutor particular 24/7",
      "Polyglot Vibe: Idiomas en tiempo real",
      "Elite Writing: Ensayos académicos de nivel",
      "Math Visualization: Viendo las matemáticas",
      "Presentation God: Slides espectaculares en segundos",
      "Deep Research: Investigación profunda con fuentes",
      "Master Project: Tesis final multimedia",
    ],
  },
  visual: {
    number: "05",
    title: "Creador Visual",
    subtitle: "Creadores de películas con IA",
    description:
      "De la imaginación a la pantalla grande. Crea películas completas con IA: personajes, storyboards, shorts virales y edición profesional.",
    lessons: [
      "Diseña tu personaje legendario",
      "Tu avatar habla por ti",
      "La historia secreta de 7 escenas",
      "El mapa de la aventura (storyboard)",
      "Shorts súper virales",
      "Tu primera película IA",
      "Música mágica de cine",
      "Edición de director profesional",
      "Tráiler tipo Netflix",
      "Transformaciones pro: cambia personajes y anima mundos",
    ],
  },
} as const

type ModuleKey = keyof typeof modules

export function CurriculumSection() {
  const [active, setActive] = useState<ModuleKey>("explorer")
  const m = modules[active]

  return (
    <section
      id="temario"
      className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Masthead */}
        <div className="flex items-center gap-5 mb-20">
          <div className="h-px w-12 bg-[#C96342]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
            Currículum · 50 clases
          </p>
        </div>

        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal mb-8 max-w-[16ch]"
          style={{ fontFamily: "'Charter', 'Georgia', serif" }}
        >
          Un sistema modular para convertir consumidores en{" "}
          <em className="italic text-[#C96342]">creadores</em>.
        </h2>

        <p className="text-lg md:text-xl text-[#5A5751] max-w-[52ch] leading-relaxed mb-20">
          Todos empiezan en Vibe Explorer. Después, el estudiante elige una de
          cuatro especialidades según su pasión: código, emprendimiento, estudio
          o cine.
        </p>

        {/* Module tabs as an editorial index */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-y border-[#2F2F2C]/15 mb-16">
          {(Object.keys(modules) as ModuleKey[]).map((key) => {
            const item = modules[key]
            const isActive = active === key
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`text-left py-6 px-5 border-r border-[#2F2F2C]/10 last:border-r-0 transition-colors ${
                  isActive ? "bg-[#C96342]/8" : "hover:bg-[#2F2F2C]/[0.03]"
                }`}
              >
                <span className="block text-[11px] text-[#C96342] font-semibold tracking-wider mb-2">
                  {item.number}
                </span>
                <span
                  className={`block text-lg md:text-xl tracking-tight ${
                    isActive ? "text-[#C96342]" : "text-[#2F2F2C]"
                  }`}
                  style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                >
                  {item.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active module content */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
              Módulo {m.number}
            </p>
            <h3
              className="text-3xl md:text-4xl leading-tight tracking-tight mb-6 font-normal"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              {m.subtitle}
            </h3>
            <p className="text-base text-[#5A5751] leading-relaxed">
              {m.description}
            </p>
          </div>

          <ol className="md:col-span-8 divide-y divide-[#2F2F2C]/12">
            {m.lessons.map((lesson, i) => (
              <li key={i} className="py-5 flex items-baseline gap-6">
                <span className="text-xs text-[#C96342] font-semibold tabular-nums shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-base md:text-lg text-[#2F2F2C] leading-snug"
                  style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                >
                  {lesson}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-sm text-[#5A5751] italic mt-16 pt-10 border-t border-[#2F2F2C]/12">
          Cada módulo consta de 10 clases en vivo de 60 minutos.
        </p>
      </div>
    </section>
  )
}
