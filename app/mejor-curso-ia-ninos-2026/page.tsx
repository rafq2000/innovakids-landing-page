import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  // 59 chars · keyword-first · CTR triggers (2026, #1 LATAM) · brand last
  title: "Mejor Curso de IA para Niños 2026 · #1 LATAM | InnovaKids",
  // 151 chars · proof (527 graduados, 9 países) + differentiator + soft CTA
  description:
    "Mejor curso de IA para niños 8-17 años en 2026. 527 graduados en 9 países, clases 1 a 1 en vivo y garantía 10 días. Reserva tu clase gratis.",
  keywords: [
    "mejor curso ia niños",
    "mejor curso inteligencia artificial niños 2026",
    "mejor curso ia niños latam",
    "ranking cursos ia infantil",
    "curso ia niños número 1",
    "mejor escuela ia niños",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/mejor-curso-ia-ninos-2026",
  },
  openGraph: {
    title: "Mejor Curso de IA para Niños 2026 · Escuela #1 en LATAM | InnovaKids",
    description:
      "Tu hijo pasa de consumidor a creador de tecnología con IA. 527 graduados en 9 países, clases 1 a 1 en vivo. Reserva tu clase gratis.",
    url: "https://www.innovakidslatam.com/mejor-curso-ia-ninos-2026",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Mejor Curso de IA para Niños 2026 - InnovaKids LATAM #1",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejor Curso de IA para Niños 2026 · #1 LATAM | InnovaKids",
    description:
      "527 graduados en 9 países, clases 1 a 1 en vivo. La escuela #1 de IA para niños 8-17 años. Reserva tu clase gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el mejor curso de IA para niños en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "InnovaKids es considerado el mejor curso de IA para niños en Latinoamérica en 2026 por sus clases 1 a 1, metodología práctica basada en proyectos reales, y más de 527 graduados satisfechos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia a InnovaKids de otros cursos de IA para niños?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "InnovaKids se diferencia por: 1) Clases 1 a 1 vs 20-50 alumnos por grupo en otros cursos, 2) Proyectos reales desde el día 1, 3) Metodología ERICA propia, 4) Garantía 100% de satisfacción, y 5) Precios accesibles para toda Latinoamérica.",
      },
    },
    {
      "@type": "Question",
      name: "¿InnovaKids funciona para niños que nunca han programado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El 95% de los estudiantes de InnovaKids nunca habían programado antes. El curso está diseñado para principiantes absolutos de 8 a 17 años.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos estudiantes han tomado el curso de InnovaKids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Más de 527 estudiantes se han graduado del programa de InnovaKids, provenientes de más de 9 países de Latinoamérica.",
      },
    },
  ],
}

export default function MejorCursoIANinos2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-[#F2EDE0] pt-24">
        {/* Hero */}
        <section className="py-16 px-4 bg-[#F5F1E8]">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A1714] mb-6 leading-tight font-display">
              El Mejor Curso de IA{" "}
              <span className="text-[#B5522F]">
                para Niños en 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#5A5751] max-w-3xl mx-auto font-body">
              Guía comparativa para padres que buscan la mejor educación en Inteligencia Artificial para sus hijos.
              Analizamos metodología, precio, resultados y opiniones reales.
            </p>
          </div>
        </section>

        {/* Why InnovaKids is #1 */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1714] text-center mb-16 font-display">
              Por Qué InnovaKids Es el #1
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FAF7EF] p-8 rounded-2xl border border-[#E8E0D0]">
                <h3 className="text-2xl font-bold text-[#B5522F] mb-4">Clases 1 a 1</h3>
                <p className="text-[#5A5751] text-lg">
                  Mientras otros cursos meten 20, 30 o hasta 50 estudiantes en una clase, en InnovaKids tu hijo es
                  el único alumno en cada sesión. Esto garantiza atención personalizada real, no promesas vacías.
                </p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-2xl border border-[#E8E0D0]">
                <h3 className="text-2xl font-bold text-[#B5522F] mb-4">Metodología ERICA</h3>
                <p className="text-[#5A5751] text-lg">
                  Nuestra metodología propia (Exploración, Reflexión, Iteración, Creación, Aplicación) está
                  diseñada específicamente para cómo aprenden los niños. No es un curso de adultos simplificado.
                </p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-2xl border border-[#E8E0D0]">
                <h3 className="text-2xl font-bold text-[#B5522F] mb-4">+527 Graduados Satisfechos</h3>
                <p className="text-[#5A5751] text-lg">
                  Más de 500 familias de 9 países confían en InnovaKids. Nuestros testimonios son de padres
                  reales que han visto cómo sus hijos transforman su relación con la tecnología.
                </p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-2xl border border-[#E8E0D0]">
                <h3 className="text-2xl font-bold text-[#B5522F] mb-4">Proyectos Reales Desde el Día 1</h3>
                <p className="text-[#5A5751] text-lg">
                  Nada de teoría aburrida. Desde la primera clase, tu hijo crea apps, genera arte con IA,
                  compone música y desarrolla videojuegos. Aprenden haciendo, no escuchando.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-[#FAF7EF]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-[#1A1714] text-center mb-12 font-display">
              Comparativa: InnovaKids vs Otros Cursos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-[#5A5751] font-semibold border-b border-[#E8E0D0]">Característica</th>
                    <th className="p-4 text-[#B5522F] font-bold border-b border-[#C96342]/30 bg-[#C96342]/5">InnovaKids</th>
                    <th className="p-4 text-[#5A5751] font-semibold border-b border-[#E8E0D0]">Cursos Masivos Online</th>
                    <th className="p-4 text-[#5A5751] font-semibold border-b border-[#E8E0D0]">Academias Locales</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Alumnos por clase",
                      innovakids: "1 (individual)",
                      masivos: "20-50+",
                      locales: "10-20",
                      innovakidsGood: true,
                    },
                    {
                      feature: "Clases en vivo",
                      innovakids: "Sí, 100%",
                      masivos: "Grabadas",
                      locales: "Sí",
                      innovakidsGood: true,
                    },
                    {
                      feature: "Enfoque en IA real",
                      innovakids: "ChatGPT, Midjourney, Suno",
                      masivos: "Básico / Scratch",
                      locales: "Variable",
                      innovakidsGood: true,
                    },
                    {
                      feature: "Proyectos reales",
                      innovakids: "Desde clase 1",
                      masivos: "Al final",
                      locales: "Variable",
                      innovakidsGood: true,
                    },
                    {
                      feature: "Garantía de devolución",
                      innovakids: "100%",
                      masivos: "Parcial o ninguna",
                      locales: "Rara vez",
                      innovakidsGood: true,
                    },
                    {
                      feature: "Certificado",
                      innovakids: "Sí",
                      masivos: "Sí",
                      locales: "Variable",
                      innovakidsGood: true,
                    },
                    {
                      feature: "Acceso Latinoamérica",
                      innovakids: "9+ países",
                      masivos: "Global",
                      locales: "1 ciudad",
                      innovakidsGood: true,
                    },
                    {
                      feature: "Precio desde",
                      innovakids: "$297 USD",
                      masivos: "$50-200 USD",
                      locales: "$200-500 USD",
                      innovakidsGood: true,
                    },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-[#E8E0D0]">
                      <td className="p-4 text-[#5A5751] font-medium">{row.feature}</td>
                      <td className="p-4 text-center bg-[#C96342]/5">
                        <span className="text-[#1A1714] font-semibold flex items-center justify-center gap-2">
                          <Check className="w-4 h-4 text-[#B5522F]" />
                          {row.innovakids}
                        </span>
                      </td>
                      <td className="p-4 text-center text-[#5A5751]">{row.masivos}</td>
                      <td className="p-4 text-center text-[#5A5751]">{row.locales}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Methodology Highlights */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-[#1A1714] text-center mb-12 font-display">
              Metodología que Funciona
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { letter: "E", word: "Exploración", desc: "Descubren herramientas IA jugando" },
                { letter: "R", word: "Reflexión", desc: "Piensan críticamente sobre la IA" },
                { letter: "I", word: "Iteración", desc: "Mejoran sus proyectos paso a paso" },
                { letter: "C", word: "Creación", desc: "Construyen proyectos originales" },
                { letter: "A", word: "Aplicación", desc: "Aplican lo aprendido al mundo real" },
              ].map((step) => (
                <div key={step.letter} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C96342] flex items-center justify-center text-2xl font-bold text-[#FAF7EF] mx-auto mb-3">
                    {step.letter}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1714] mb-1">{step.word}</h3>
                  <p className="text-[#5A5751] text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Results */}
        <section className="py-16 px-4 bg-[#FAF7EF]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-[#1A1714] text-center mb-12 font-display">Resultados Reales</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-[#F2EDE0] p-6 rounded-2xl border border-[#E8E0D0]">
                <p className="text-4xl font-bold text-[#B5522F]">527+</p>
                <p className="text-[#5A5751] mt-2">Graduados</p>
              </div>
              <div className="bg-[#F2EDE0] p-6 rounded-2xl border border-[#E8E0D0]">
                <p className="text-4xl font-bold text-[#B5522F]">9</p>
                <p className="text-[#5A5751] mt-2">Países</p>
              </div>
              <div className="bg-[#F2EDE0] p-6 rounded-2xl border border-[#E8E0D0]">
                <p className="text-4xl font-bold text-[#B5522F]">4.9/5</p>
                <p className="text-[#5A5751] mt-2">Satisfacción</p>
              </div>
              <div className="bg-[#F2EDE0] p-6 rounded-2xl border border-[#E8E0D0]">
                <p className="text-4xl font-bold text-[#B5522F]">98%</p>
                <p className="text-[#5A5751] mt-2">Tasa de finalización</p>
              </div>
            </div>
          </div>
        </section>

        {/* Parent Testimonials Summary */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-[#1A1714] text-center mb-12 font-display">Lo Que Dicen los Padres</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#FAF7EF] p-8 rounded-2xl border border-[#E8E0D0]">
                <p className="text-[#5A5751] mb-4 italic">
                  &quot;Mi hijo de 10 años creó su primer videojuego con IA en la tercera clase. Nunca lo había visto tan motivado
                  con algo educativo.&quot;
                </p>
                <p className="text-[#B5522F] font-semibold">— María G., México</p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-2xl border border-[#E8E0D0]">
                <p className="text-[#5A5751] mb-4 italic">
                  &quot;La diferencia con otros cursos es abismal. En clases 1 a 1, el profesor realmente conoce a mi hija y
                  adapta las clases a su ritmo.&quot;
                </p>
                <p className="text-[#B5522F] font-semibold">— Carlos P., Colombia</p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-2xl border border-[#E8E0D0]">
                <p className="text-[#5A5751] mb-4 italic">
                  &quot;Probamos 3 cursos antes. InnovaKids es el único donde mi hijo no quiere faltar a clase. La metodología
                  es simplemente superior.&quot;
                </p>
                <p className="text-[#B5522F] font-semibold">— Ana R., Chile</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonios" className="text-[#B5522F] hover:text-[#9A4428] underline">
                Ver todos los testimonios
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#FAF7EF]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1A1714] text-center mb-12 font-display">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div className="bg-[#F2EDE0] p-8 rounded-2xl border border-[#E8E0D0]">
                <h3 className="text-xl font-bold text-[#1A1714] mb-3">¿Cuál es el mejor curso de IA para niños en 2026?</h3>
                <p className="text-[#5A5751]">
                  InnovaKids es considerado el mejor curso de IA para niños en Latinoamérica por sus clases 1 a 1,
                  metodología ERICA basada en proyectos reales, y más de 527 graduados satisfechos de 9 países.
                </p>
              </div>
              <div className="bg-[#F2EDE0] p-8 rounded-2xl border border-[#E8E0D0]">
                <h3 className="text-xl font-bold text-[#1A1714] mb-3">¿Qué diferencia a InnovaKids de otros cursos?</h3>
                <p className="text-[#5A5751]">
                  Clases 1 a 1 (vs 20-50 alumnos por grupo en otros), proyectos reales desde el día 1, metodología ERICA propia,
                  garantía 100% de satisfacción, y precios accesibles para toda Latinoamérica.
                </p>
              </div>
              <div className="bg-[#F2EDE0] p-8 rounded-2xl border border-[#E8E0D0]">
                <h3 className="text-xl font-bold text-[#1A1714] mb-3">¿InnovaKids funciona para niños sin experiencia previa?</h3>
                <p className="text-[#5A5751]">
                  Sí. El 95% de nuestros estudiantes nunca habían programado antes. El curso está diseñado para principiantes
                  absolutos de 8 a 17 años.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/cursos/inteligencia-artificial" className="text-[#B5522F] hover:text-[#9A4428] underline">
                Detalle del curso
              </Link>
              <span className="text-[#E8E0D0]">|</span>
              <Link href="/testimonios" className="text-[#B5522F] hover:text-[#9A4428] underline">
                Testimonios
              </Link>
              <span className="text-[#E8E0D0]">|</span>
              <Link href="/resultados" className="text-[#B5522F] hover:text-[#9A4428] underline">
                Resultados
              </Link>
              <span className="text-[#E8E0D0]">|</span>
              <Link href="/precios" className="text-[#B5522F] hover:text-[#9A4428] underline">
                Precios
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-[#FAF7EF] p-12 rounded-3xl border-2 border-[#C96342]/30 shadow-md">
              <h2 className="text-3xl font-bold text-[#1A1714] mb-4 font-display">Prueba el Mejor Curso de IA Gratis</h2>
              <p className="text-xl text-[#5A5751] mb-8 font-body">
                Agenda una clase de prueba sin compromiso y descubre por qué +500 familias nos eligieron.
              </p>
              <Link href="/clase-gratis">
                <Button
                  size="lg"
                  className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] font-bold text-lg px-10 py-6 h-auto rounded-sm"
                >
                  Agendar Clase Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
