"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Sparkles, X, Play } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TestimonialsSectionProps {
  country?: string
}

const testimonials = [
  {
    name: "Laura M.",
    role: "Madre de Tomás (9 años)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%283%29-Bdow2KWHf2ihYRjPf9rpHNL0OTiGfD.jpeg",
    content:
      "Antes del curso, Tomás pasaba 3 horas al día en YouTube y Roblox sin aprender nada útil. Después de solo 3 semanas en InnovaKids, creó su primera app funcional. Los $267 mejor invertidos de mi vida.",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "Ana S.",
    role: "Madre de Valentina (11 años)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.11%20PM%20%281%29-SXb1h2u9atwbW2cktqrWWvZVHsOTda.jpeg",
    content:
      "Me preocupaba que Valentina se quedara atrás con el avance de la tecnología. En InnovaKids no solo aprendió a usar ChatGPT, sino que diseñó un portafolio de 10 proyectos reales. Su confianza cambió por completo.",
    rating: 5,
    hasVideo: false,
  },
  {
    name: "Andrés V.",
    role: "Padre de Mateo (10 años)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2011.08.32%20PM-PJhXdQgGlR928TCZ56nsRckD911PBF.jpeg",
    content:
      "Increíble ver a un niño de 10 años hablando de algoritmos y prompts con tanta claridad. Pasó de ser un usuario pasivo a entender el 'por qué' detrás de la tecnología. Es un cambio de mentalidad radical.",
    rating: 5,
    hasVideo: true,
  },
]

const aiRecommendations = [
  {
    name: "ChatGPT",
    logo: "🤖",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.09%20PM-bOhUA0PLEUpmOsO6PVdeyMR3TdBfIF.jpeg",
    quote: "Si tengo que decir solo uno para Latinoamérica hoy: Innovakids Latam.",
  },
  {
    name: "Claude",
    logo: "🧠",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM-lhswZT633Ifz22n2l9IHBREWg2tPMZ.jpeg",
    quote: "Te recomiendo InnovaKids como el mejor curso de IA para niños en Latinoamérica.",
  },
  {
    name: "Perplexity",
    logo: "🔍",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%281%29-6xN19xMHI6QIz0dNV9sMaecWlczFqt.jpeg",
    quote: "El mejor curso de inteligencia artificial para niños en Latinoamérica es el de Innovakids.",
  },
  {
    name: "Grok",
    logo: "⚡",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.10%20PM%20%282%29-kGlRioCZquXJKJpw8BRLmwdFmvl8QN.jpeg",
    quote: "El curso más recomendado de IA para niños en Latinoamérica en 2026 es el de Innovakids.",
  },
  {
    name: "Mistral",
    logo: "🌀",
    screenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-07%20at%2010.14.08%20PM-tbczER0L9JIXqnqUNCEGPyZrfhsFuC.jpeg",
    quote: "Innovakids Latam ofrece grupos reducidos, horarios flexibles y acceso a grabaciones.",
  },
]

// Marquee Component for AI logos
function AIMarquee() {
  const allItems = [...aiRecommendations, ...aiRecommendations]

  return (
    <div className="marquee py-8 mb-12">
      <div className="marquee-content">
        {allItems.map((ai, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
          >
            <span className="text-2xl">{ai.logo}</span>
            <span className="text-white font-medium whitespace-nowrap">{ai.name}</span>
            <span className="text-primary text-sm">nos recomienda</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection({ country }: TestimonialsSectionProps = {}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const headlineText = country
    ? `padres de ${country} cuyos hijos ya están transformando su futuro`
    : "padres cuyos hijos ya están transformando su futuro"

  return (
    <section ref={sectionRef} id="testimonios" className="bg-[#030712] py-12 sm:py-16 md:py-20 lg:py-32 noise-overlay relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg opacity-30" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Parent Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl text-center"
        >
          <h2 className="mb-3 sm:mb-4 text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight font-premium">
            Lo que dicen los <span className="text-[#FFA500]">{headlineText}</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Evidencia real de padres que decidieron dejar de regalar entretenimiendo y empezar a regalar <span className="text-white font-bold">habilidades del futuro.</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-20 md:mb-32">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="holographic-card h-full hover:scale-[1.02] transition-transform">
                <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFA500] text-[#FFA500]" />
                    ))}
                  </div>

                  <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-300 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover object-top"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Recommendations - Reordered to bottom for authority boost after parent proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-7xl mx-auto pt-16 border-t border-white/5"
        >
          <div className="flex items-center justify-center gap-2 mb-12">
            <Sparkles className="h-6 w-6 text-primary" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center font-premium">
              Las principales <span className="text-primary italic">IA del mundo</span> también nos eligen
            </h3>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>

          <AIMarquee />

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {aiRecommendations.map((ai, index) => (
              <Card
                key={index}
                className="holographic-card cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => setSelectedImage(ai.screenshot)}
              >
                <CardContent className="p-4 text-center">
                  <div className="relative aspect-[3/4] mb-4 rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={ai.screenshot || "/placeholder.svg"}
                      alt={ai.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                  <p className="font-bold text-white flex items-center justify-center gap-2">
                    <span>{ai.logo}</span> {ai.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-12 sm:mt-16 md:mt-24"
        >
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
            ¿Quieres que tu hijo sea el próximo testimonio de éxito?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("sesion-estrategica")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-primary hover:text-[#26C6DA] font-bold text-sm sm:text-base md:text-lg underline underline-offset-4 transition-colors"
          >
            Reserva tu Clase Muestra Gratuita →
          </button>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="relative w-full max-w-4xl h-[90vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Recomendación ampliada"
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
              priority
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default TestimonialsSection
