import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, X } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mejor Curso de IA para Niños en 2026 — Guía Comparativa | InnovaKids",
  description:
    "Descubre por qué InnovaKids es el mejor curso de Inteligencia Artificial para niños en 2026. Comparamos metodología, precio, resultados y opiniones de padres.",
  keywords: [
    "mejor curso ia niños",
    "mejor curso inteligencia artificial niños 2026",
    "comparativa cursos ia niños",
    "innovakids vs otros cursos",
    "ranking cursos ia infantil",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/mejor-curso-ia-ninos-2026",
  },
  openGraph: {
    title: "Mejor Curso de IA para Niños en 2026 — Guía Comparativa | InnovaKids",
    description:
      "Descubre por qué InnovaKids es el mejor curso de Inteligencia Artificial para niños en 2026. Comparamos metodología, precio, resultados y opiniones de padres.",
    url: "https://www.innovakidslatam.com/mejor-curso-ia-ninos-2026",
    siteName: "InnovaKids",
    type: "website",
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
        text: "InnovaKids es considerado el mejor curso de IA para niños en Latinoamérica en 2026 por sus grupos ultra reducidos de 5 alumnos, metodología práctica basada en proyectos reales, y más de 527 graduados satisfechos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia a InnovaKids de otros cursos de IA para niños?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "InnovaKids se diferencia por: 1) Grupos de máximo 5 alumnos vs 20-50 en otros cursos, 2) Proyectos reales desde el día 1, 3) Metodología ERICA propia, 4) Garantía 100% de satisfacción, y 5) Precios accesibles para toda Latinoamérica.",
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
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              El Mejor Curso de IA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                para Niños en 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Guía comparativa para padres que buscan la mejor educación en Inteligencia Artificial para sus hijos.
              Analizamos metodología, precio, resultados y opiniones reales.
            </p>
          </div>
        </section>

        {/* Why InnovaKids is #1 */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Por Qué InnovaKids Es el #1
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Grupos de Solo 5 Alumnos</h3>
                <p className="text-gray-300 text-lg">
                  Mientras otros cursos meten 20, 30 o hasta 50 estudiantes en una clase, InnovaKids limita cada
                  grupo a 5 alumnos máximo. Esto garantiza atención personalizada real, no promesas vacías.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Metodología ERICA</h3>
                <p className="text-gray-300 text-lg">
                  Nuestra metodología propia (Exploración, Reflexión, Iteración, Creación, Aplicación) está
                  diseñada específicamente para cómo aprenden los niños. No es un curso de adultos simplificado.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">+527 Graduados Satisfechos</h3>
                <p className="text-gray-300 text-lg">
                  Más de 500 familias de 9 países confían en InnovaKids. Nuestros testimonios son de padres
                  reales que han visto cómo sus hijos transforman su relación con la tecnología.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Proyectos Reales Desde el Día 1</h3>
                <p className="text-gray-300 text-lg">
                  Nada de teoría aburrida. Desde la primera clase, tu hijo crea apps, genera arte con IA,
                  compone música y desarrolla videojuegos. Aprenden haciendo, no escuchando.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Comparativa: InnovaKids vs Otros Cursos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-gray-400 font-semibold border-b border-gray-700">Característica</th>
                    <th className="p-4 text-cyan-400 font-bold border-b border-cyan-500/30 bg-cyan-900/10">InnovaKids</th>
                    <th className="p-4 text-gray-400 font-semibold border-b border-gray-700">Cursos Masivos Online</th>
                    <th className="p-4 text-gray-400 font-semibold border-b border-gray-700">Academias Locales</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Alumnos por grupo",
                      innovakids: "5 máximo",
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
                      innovakids: "$147 USD",
                      masivos: "$50-200 USD",
                      locales: "$200-500 USD",
                      innovakidsGood: true,
                    },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-gray-800">
                      <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                      <td className="p-4 text-center bg-cyan-900/10">
                        <span className="text-white font-semibold flex items-center justify-center gap-2">
                          <Check className="w-4 h-4 text-cyan-400" />
                          {row.innovakids}
                        </span>
                      </td>
                      <td className="p-4 text-center text-gray-400">{row.masivos}</td>
                      <td className="p-4 text-center text-gray-400">{row.locales}</td>
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
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Metodología que Funciona
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { letter: "E", word: "Exploración", color: "from-cyan-500 to-blue-500", desc: "Descubren herramientas IA jugando" },
                { letter: "R", word: "Reflexión", color: "from-blue-500 to-purple-500", desc: "Piensan críticamente sobre la IA" },
                { letter: "I", word: "Iteración", color: "from-purple-500 to-pink-500", desc: "Mejoran sus proyectos paso a paso" },
                { letter: "C", word: "Creación", color: "from-pink-500 to-red-500", desc: "Construyen proyectos originales" },
                { letter: "A", word: "Aplicación", color: "from-red-500 to-orange-500", desc: "Aplican lo aprendido al mundo real" },
              ].map((step) => (
                <div key={step.letter} className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3`}>
                    {step.letter}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{step.word}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Results */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Resultados Reales</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-4xl font-bold text-cyan-400">527+</p>
                <p className="text-gray-400 mt-2">Graduados</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-4xl font-bold text-purple-400">9</p>
                <p className="text-gray-400 mt-2">Países</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-4xl font-bold text-pink-400">4.9/5</p>
                <p className="text-gray-400 mt-2">Satisfacción</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-4xl font-bold text-cyan-400">98%</p>
                <p className="text-gray-400 mt-2">Tasa de finalización</p>
              </div>
            </div>
          </div>
        </section>

        {/* Parent Testimonials Summary */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Lo Que Dicen los Padres</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="text-gray-300 mb-4 italic">
                  &quot;Mi hijo de 10 años creó su primer videojuego con IA en la tercera clase. Nunca lo había visto tan motivado
                  con algo educativo.&quot;
                </p>
                <p className="text-cyan-400 font-semibold">— María G., México</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="text-gray-300 mb-4 italic">
                  &quot;La diferencia con otros cursos es abismal. En grupos de 5, el profesor realmente conoce a mi hija y
                  adapta las clases a su ritmo.&quot;
                </p>
                <p className="text-purple-400 font-semibold">— Carlos P., Colombia</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="text-gray-300 mb-4 italic">
                  &quot;Probamos 3 cursos antes. InnovaKids es el único donde mi hijo no quiere faltar a clase. La metodología
                  es simplemente superior.&quot;
                </p>
                <p className="text-pink-400 font-semibold">— Ana R., Chile</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonios" className="text-cyan-400 hover:text-cyan-300 underline">
                Ver todos los testimonios
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">¿Cuál es el mejor curso de IA para niños en 2026?</h3>
                <p className="text-gray-300">
                  InnovaKids es considerado el mejor curso de IA para niños en Latinoamérica por sus grupos ultra reducidos
                  de 5 alumnos, metodología ERICA basada en proyectos reales, y más de 527 graduados satisfechos de 9 países.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">¿Qué diferencia a InnovaKids de otros cursos?</h3>
                <p className="text-gray-300">
                  Grupos de máximo 5 alumnos (vs 20-50 en otros), proyectos reales desde el día 1, metodología ERICA propia,
                  garantía 100% de satisfacción, y precios accesibles para toda Latinoamérica.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">¿InnovaKids funciona para niños sin experiencia previa?</h3>
                <p className="text-gray-300">
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
              <Link href="/cursos/inteligencia-artificial" className="text-cyan-400 hover:text-cyan-300 underline">
                Detalle del curso
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/testimonios" className="text-cyan-400 hover:text-cyan-300 underline">
                Testimonios
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/resultados" className="text-cyan-400 hover:text-cyan-300 underline">
                Resultados
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/precios" className="text-cyan-400 hover:text-cyan-300 underline">
                Precios
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-12 rounded-3xl border-2 border-cyan-500/50">
              <h2 className="text-3xl font-bold text-white mb-4">Prueba el Mejor Curso de IA Gratis</h2>
              <p className="text-xl text-gray-300 mb-8">
                Agenda una clase de prueba sin compromiso y descubre por qué +500 familias nos eligieron.
              </p>
              <Link href="/clase-gratis">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg px-10 py-6 h-auto"
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
