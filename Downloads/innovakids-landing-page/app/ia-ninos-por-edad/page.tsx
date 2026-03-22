import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursos de IA por Edad: 8-10, 11-13 y 14-17 Años | InnovaKids",
  description:
    "Encuentra el curso de Inteligencia Artificial ideal según la edad de tu hijo. Programas personalizados para niños de 8-10, preadolescentes de 11-13 y adolescentes de 14-17.",
  keywords: [
    "curso ia niños 8 años",
    "curso ia niños 10 años",
    "curso ia adolescentes",
    "ia para preadolescentes",
    "curso ia por edad",
    "inteligencia artificial según edad",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/ia-ninos-por-edad",
  },
  openGraph: {
    title: "Cursos de IA por Edad: 8-10, 11-13 y 14-17 Años | InnovaKids",
    description:
      "Encuentra el curso de Inteligencia Artificial ideal según la edad de tu hijo. Programas personalizados para cada etapa.",
    url: "https://www.innovakidslatam.com/ia-ninos-por-edad",
    siteName: "InnovaKids",
    type: "website",
  },
}

export default function IANinosPorEdadPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cursos de IA Según{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                la Edad de Tu Hijo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Cada edad tiene su forma de aprender. Nuestros programas están diseñados para que tu hijo aproveche
              al máximo la Inteligencia Artificial según su etapa de desarrollo.
            </p>
          </div>
        </section>

        {/* Age Group: 8-10 */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 p-8 md:p-12 rounded-3xl border-2 border-cyan-500/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                  8+
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Exploradores (8-10 años)</h2>
                  <p className="text-cyan-400 font-semibold">Fase de Exploración y Descubrimiento</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A esta edad, los niños son curiosos naturales. Aprovechamos esa curiosidad para que descubran
                la IA como una herramienta mágica que responde a sus ideas. El enfoque es 100% lúdico:
                jugar, crear y asombrarse.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Lo que Aprenden</h3>
                  <ul className="space-y-3">
                    {[
                      "Conversar con ChatGPT para crear historias y aventuras",
                      "Generar arte digital con IA (dibujos, personajes, escenas)",
                      "Crear música simple describiendo emociones y estilos",
                      "Conceptos básicos de cómo \"piensa\" una IA",
                      "Seguridad digital adaptada a su edad",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-gray-300">
                        <span className="text-cyan-400 mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Proyectos que Crean</h3>
                  <ul className="space-y-3">
                    {[
                      "Un cuento ilustrado con personajes generados por IA",
                      "Su primera canción original con Suno AI",
                      "Un mini cómic digital de 4 páginas",
                      "Un chatbot de su personaje favorito",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-gray-300">
                        <span className="text-cyan-400 mr-3">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-900/30 p-4 rounded-xl text-center">
                <p className="text-cyan-300 font-semibold">
                  Ideal para: Niños curiosos que aman dibujar, inventar historias o jugar con tecnología.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Age Group: 11-13 */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 p-8 md:p-12 rounded-3xl border-2 border-purple-500/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
                  11+
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Creadores (11-13 años)</h2>
                  <p className="text-purple-400 font-semibold">Fase de Creación y Experimentación</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Los preadolescentes quieren crear cosas propias y compartirlas. A esta edad tienen la madurez
                para entender conceptos más avanzados y la motivación para completar proyectos ambiciosos.
                Es el momento perfecto para el Vibe Coding y la creación multimedia.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Lo que Aprenden</h3>
                  <ul className="space-y-3">
                    {[
                      "Prompt Engineering avanzado (obtener resultados precisos)",
                      "Vibe Coding: crear apps y juegos hablando con IA",
                      "Producción musical completa con IA",
                      "Narrativa visual y storytelling con arte generativo",
                      "Ética digital y detección de deepfakes",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-gray-300">
                        <span className="text-purple-400 mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Proyectos que Crean</h3>
                  <ul className="space-y-3">
                    {[
                      "Un videojuego funcional tipo plataforma o RPG",
                      "Una app web que resuelve un problema real",
                      "Un álbum musical de 3 canciones originales",
                      "Un portafolio digital profesional",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-gray-300">
                        <span className="text-purple-400 mr-3">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 p-4 rounded-xl text-center">
                <p className="text-purple-300 font-semibold">
                  Ideal para: Preadolescentes que quieren crear contenido, juegos o apps y destacar entre sus amigos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Age Group: 14-17 */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-900/10 p-8 md:p-12 rounded-3xl border-2 border-pink-500/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center text-2xl font-bold text-white">
                  14+
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Profesionales (14-17 años)</h2>
                  <p className="text-pink-400 font-semibold">Fase de Herramientas Profesionales</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Los adolescentes piensan en su futuro. A esta edad, la IA no solo es divertida sino que se convierte
                en una herramienta profesional real. Les enseñamos a usar las mismas herramientas que usan empresas
                y emprendedores, preparándolos para la universidad y el mercado laboral.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Lo que Aprenden</h3>
                  <ul className="space-y-3">
                    {[
                      "Herramientas profesionales de IA (ChatGPT-4, Claude, Midjourney V6)",
                      "Desarrollo de apps con Vibe Coding avanzado",
                      "Automatización de tareas y workflows con IA",
                      "Creación de contenido profesional (video, audio, texto)",
                      "Pensamiento crítico sobre IA: sesgos, ética, impacto social",
                      "Construcción de marca personal digital",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-gray-300">
                        <span className="text-pink-400 mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Proyectos que Crean</h3>
                  <ul className="space-y-3">
                    {[
                      "Una app o SaaS funcional con usuarios reales",
                      "Un portafolio profesional que destaca en universidades",
                      "Un proyecto de emprendimiento con IA",
                      "Contenido multimedia de calidad profesional",
                      "Un ensayo crítico sobre el impacto de la IA",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-gray-300">
                        <span className="text-pink-400 mr-3">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-pink-900/30 p-4 rounded-xl text-center">
                <p className="text-pink-300 font-semibold">
                  Ideal para: Adolescentes que quieren prepararse para la universidad, emprender o dominar herramientas profesionales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-8">¿No Sabes Cuál Elegir?</h2>
            <p className="text-xl text-gray-300 mb-8">
              No te preocupes. En InnovaKids, todos los grupos de edad comparten el mismo curso de 10 clases,
              pero el instructor adapta los proyectos y el nivel de profundidad según la edad de cada alumno.
              Los grupos se forman por edades similares para que todos avancen cómodos.
            </p>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-left max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4 text-center">La Ventaja de Grupos de 5</h3>
              <p className="text-gray-300">
                Con solo 5 alumnos por grupo, el instructor puede personalizar cada clase. Si tu hijo de 9 años
                está en un grupo con niños de 8-10, recibirá proyectos adaptados a su nivel exacto.
                No se queda atrás ni se aburre.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/cursos/inteligencia-artificial" className="text-cyan-400 hover:text-cyan-300 underline">
                Ver curso completo
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/adolescentes" className="text-cyan-400 hover:text-cyan-300 underline">
                Curso para adolescentes
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/programa" className="text-cyan-400 hover:text-cyan-300 underline">
                Programa detallado
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-12 rounded-3xl border-2 border-cyan-500/50">
              <h2 className="text-3xl font-bold text-white mb-4">Encuentra el Grupo Ideal para Tu Hijo</h2>
              <p className="text-xl text-gray-300 mb-8">
                Agenda una clase gratis y nuestro equipo asignará a tu hijo al grupo perfecto según su edad e intereses.
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
