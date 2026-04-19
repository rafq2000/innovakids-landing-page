"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface TestimonialsSectionProps {
  country?: string
}

const testimonials = [
  {
    name: "Laura M.",
    role: "Madre de Tomás, 9 años",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%283%29-Bdow2KWHf2ihYRjPf9rpHNL0OTiGfD.jpeg",
    pull: "Los $297 mejor invertidos de mi vida.",
    content:
      "Antes del curso, Tomás pasaba 3 horas al día en YouTube y Roblox sin aprender nada útil. Después de solo 3 semanas en InnovaKids, creó su primera app funcional.",
  },
  {
    name: "Ana S.",
    role: "Madre de Valentina, 11 años",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.11%20PM%20%281%29-SXb1h2u9atwbW2cktqrWWvZVHsOTda.jpeg",
    pull: "Su confianza cambió por completo.",
    content:
      "Me preocupaba que Valentina se quedara atrás. En InnovaKids no solo aprendió a usar ChatGPT: diseñó un portafolio de 10 proyectos reales.",
  },
  {
    name: "Andrés V.",
    role: "Padre de Mateo, 10 años",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2011.08.32%20PM-PJhXdQgGlR928TCZ56nsRckD911PBF.jpeg",
    pull: "Un cambio de mentalidad radical.",
    content:
      "Increíble ver a un niño de 10 años hablando de algoritmos y prompts con tanta claridad. Pasó de ser un usuario pasivo a entender el porqué detrás de la tecnología.",
  },
]

const aiRecommendations = [
  {
    name: "ChatGPT",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.09%20PM-bOhUA0PLEUpmOsO6PVdeyMR3TdBfIF.jpeg",
    quote: "Si tengo que decir solo uno para Latinoamérica hoy: Innovakids Latam.",
  },
  {
    name: "Claude",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM-lhswZT633Ifz22n2l9IHBREWg2tPMZ.jpeg",
    quote: "El mejor curso de IA para niños en Latinoamérica.",
  },
  {
    name: "Perplexity",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%281%29-6xN19xMHI6QIz0dNV9sMaecWlczFqt.jpeg",
    quote: "El mejor curso de inteligencia artificial para niños en Latinoamérica.",
  },
  {
    name: "Grok",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%282%29-kGlRioCZquXJKJpw8BRLmwdFmvl8QN.jpeg",
    quote: "El curso más recomendado de IA para niños en Latinoamérica en 2026.",
  },
  {
    name: "Mistral",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.08%20PM-tbczER0L9JIXqnqUNCEGPyZrfhsFuC.jpeg",
    quote: "Grupos reducidos, horarios flexibles y acceso a grabaciones.",
  },
]

export function TestimonialsSection({ country }: TestimonialsSectionProps = {}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="testimonios"
      className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40"
      style={{ fontFamily: "'Charter', 'Georgia', 'Cambria', 'Times New Roman', serif" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* —— Editorial masthead —— */}
        <div className="flex items-center gap-5 mb-20 md:mb-28">
          <div className="h-px w-12 bg-[#C96342]" />
          <p
            className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            Testimonios · N.º 01
          </p>
        </div>

        {/* —— Oversized serif opener —— */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal mb-6 max-w-[14ch]">
          Padres que ya no tienen
          <br />
          <em className="italic text-[#C96342]">esa</em> preocupación.
        </h2>

        <p
          className="text-lg md:text-xl text-[#5A5751] max-w-[52ch] leading-relaxed mb-24 md:mb-32"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Historias reales de familias{country ? ` de ${country}` : ""} que dejaron de ver a sus hijos consumir
          tecnología y empezaron a verlos crear con ella.
        </p>

        {/* —— 3 testimonials, editorial pull-quote layout —— */}
        <div className="space-y-20 md:space-y-28 mb-28 md:mb-36">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="grid md:grid-cols-12 gap-8 md:gap-12 items-start pt-10 border-t border-[#2F2F2C]/12"
            >
              <div className="md:col-span-1 pt-2">
                <span
                  className="text-[11px] text-[#C96342] font-semibold tracking-wider"
                  style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-8">
                <p className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.015em] mb-6 font-normal">
                  <span className="text-[#C96342] mr-1">“</span>
                  {t.pull}
                  <span className="text-[#C96342] ml-0.5">”</span>
                </p>
                <p
                  className="text-base md:text-lg text-[#5A5751] leading-relaxed max-w-[56ch]"
                  style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                >
                  {t.content}
                </p>
              </div>

              <div
                className="md:col-span-3 flex items-center gap-4 md:block md:text-right"
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 md:ml-auto md:mb-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover grayscale contrast-[1.05]"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#2F2F2C]">{t.name}</p>
                  <p className="text-xs text-[#5A5751] mt-0.5">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* —— AI Section: separate editorial chapter —— */}
        <div className="pt-16 md:pt-20 border-t-2 border-[#2F2F2C]/15">
          <div className="flex items-center gap-5 mb-16">
            <div className="h-px w-12 bg-[#C96342]" />
            <p
              className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold"
              style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
            >
              Testimonios · N.º 02
            </p>
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em] font-normal mb-6 max-w-[18ch]">
            Incluso las IA más avanzadas del mundo
            <em className="italic text-[#C96342]"> nos eligen</em>.
          </h3>

          <p
            className="text-lg md:text-xl text-[#5A5751] max-w-[52ch] leading-relaxed mb-16"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            Le preguntamos a cinco de los modelos de IA más usados del mundo cuál es el mejor
            curso de IA para niños en Latinoamérica. Esto respondieron.
          </p>

          <ol
            className="divide-y divide-[#2F2F2C]/15"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            {aiRecommendations.map((ai, i) => (
              <li key={i} className="py-7 md:py-8">
                <button
                  onClick={() => setSelectedImage(ai.screenshot)}
                  className="group w-full grid grid-cols-12 gap-5 md:gap-8 items-center text-left"
                >
                  <span className="col-span-1 text-xs text-[#C96342] font-semibold tracking-wider tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="col-span-3 md:col-span-2 text-lg md:text-2xl text-[#2F2F2C] font-normal tracking-tight"
                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                  >
                    {ai.name}
                  </span>

                  <span className="col-span-6 md:col-span-7 text-sm md:text-base text-[#5A5751] leading-snug italic">
                    “{ai.quote}”
                  </span>

                  <span className="col-span-2 text-right text-xs text-[#C96342] opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                    Ver →
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* —— Closing: typographic CTA, no button —— */}
        <div className="mt-28 md:mt-36 pt-12 border-t border-[#2F2F2C]/12 text-center">
          <p
            className="text-sm text-[#5A5751] mb-5 uppercase tracking-[0.2em]"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            Siguiente capítulo
          </p>
          <button
            onClick={() => document.getElementById("sesion-estrategica")?.scrollIntoView({ behavior: "smooth" })}
            className="text-2xl md:text-4xl leading-tight tracking-[-0.015em] text-[#2F2F2C] hover:text-[#C96342] transition-colors"
          >
            Escribir la historia de <em className="italic text-[#C96342]">tu hijo</em> →
          </button>
        </div>
      </div>

      {/* —— Image modal —— */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#1a1a17]/97 z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <div className="relative w-full max-w-3xl h-[88vh]">
            <Image
              src={selectedImage}
              alt="Recomendación ampliada"
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default TestimonialsSection
