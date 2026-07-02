import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  // 59 chars · TRANSACTIONAL · age-specific courses + brand
  title: "Cursos de IA para Niños por Edad · Inscríbete 2026 | InnovaKids",
  // 154 chars · transactional differentiator + proof + CTA
  description:
    "Inscríbete en cursos de IA por edad: programas para 8-10, 11-13 y 14-17 años. Clases en vivo, grupos de 5, 527 graduados en 9 países. Clase gratis.",
  keywords: [
    "cursos ia niños por edad",
    "curso ia niños 10 años",
    "curso ia niños 8 años",
    "inscripcion curso ia adolescentes",
    "curso ia 14-17 años",
    "clases ia por edad niños",
    "curso inteligencia artificial niños por nivel",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/ia-ninos-por-edad",
  },
  openGraph: {
    title: "Cursos de IA para Niños por Edad · Inscríbete 2026 | InnovaKids",
    description:
      "Inscríbete en el curso de IA diseñado para la edad de tu hijo. Grupos de 5, clases en vivo, proyectos reales. Clase gratis.",
    url: "https://www.innovakidslatam.com/ia-ninos-por-edad",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Cursos de IA por edad para niños 8-10, 11-13 y 14-17 años - InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de IA para Niños por Edad · Inscríbete 2026 | InnovaKids",
    description:
      "Inscríbete en programas de IA por edad. Grupos de 5, clases en vivo, proyectos reales. Clase gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function IANinosPorEdadPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#FAF7EF] pt-24">
        {/* Hero */}
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F] mb-4">Programas por edad</p>
            <h1 className="text-5xl md:text-7xl font-display text-[#1A1714] mb-6 leading-tight">
              Cursos de IA Según{" "}
              <span className="italic text-[#B5522F]">
                la Edad de Tu Hijo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B645B] max-w-3xl mx-auto">
              Cada edad tiene su forma de aprender. Nuestros programas están diseñados para que tu hijo aproveche
              al máximo la Inteligencia Artificial según su etapa de desarrollo.
            </p>
          </div>
        </section>

        {/* Age Group: 8-10 */}
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-[#FAF7EF] p-8 md:p-12 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center text-2xl font-display italic text-[#FAF7EF]">
                  8+
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display text-[#1A1714]">Exploradores (8-10 años)</h2>
                  <p className="text-[#B5522F] font-semibold">Fase de Exploración y Descubrimiento</p>
                </div>
              </div>

              <p className="text-lg text-[#3B3630] mb-8 leading-relaxed">
                A está edad, los niños son curiosos naturales. Aprovechamos esa curiosidad para que descubran
                la IA como una herramienta mágica que responde a sus ideas. El enfoque es 100% lúdico:
                jugar, crear y asombrarse.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-[#1A1714] mb-4">Lo que Aprenden</h3>
                  <ul className="space-y-3">
                    {[
                      "Conversar con ChatGPT para crear historias y aventuras",
                      "Generar arte digital con IA (dibujos, personajes, escenas)",
                      "Crear música simple describiendo emociones y estilos",
                      "Conceptos básicos de cómo \"piensa\" una IA",
                      "Seguridad digital adaptada a su edad",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-[#3B3630]">
                        <span className="text-[#B5522F] mr-3">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-display text-[#1A1714] mb-4">Proyectos que Crean</h3>
                  <ul className="space-y-3">
                    {[
                      "Un cuento ilustrado con personajes generados por IA",
                      "Su primera canción original con Suno AI",
                      "Un mini cómic digital de 4 páginas",
                      "Un chatbot de su personaje favorito",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-[#3B3630]">
                        <span className="text-[#B5522F] mr-3">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F1E8] p-4 rounded-sm text-center border border-[#1A1714]/12">
                <p className="text-[#B5522F] font-semibold">
                  Ideal para: Niños curiosos que aman dibujar, inventar historias o jugar con tecnología.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Age Group: 11-13 */}
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-[#FAF7EF] p-8 md:p-12 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center text-2xl font-display italic text-[#FAF7EF]">
                  11+
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display text-[#1A1714]">Creadores (11-13 años)</h2>
                  <p className="text-[#B5522F] font-semibold">Fase de Creación y Experimentación</p>
                </div>
              </div>

              <p className="text-lg text-[#3B3630] mb-8 leading-relaxed">
                Los preadolescentes quieren crear cosas propias y compartirlas. A está edad tienen la madurez
                para entender conceptos más avanzados y la motivación para completar proyectos ambiciosos.
                Es el momento perfecto para el Vibe Coding y la creación multimedia.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-[#1A1714] mb-4">Lo que Aprenden</h3>
                  <ul className="space-y-3">
                    {[
                      "Prompt Engineering avanzado (obtener resultados precisos)",
                      "Vibe Coding: crear apps y juegos hablando con IA",
                      "Producción músical completa con IA",
                      "Narrativa visual y storytelling con arte generativo",
                      "Ética digital y detección de deepfakes",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-[#3B3630]">
                        <span className="text-[#B5522F] mr-3">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-display text-[#1A1714] mb-4">Proyectos que Crean</h3>
                  <ul className="space-y-3">
                    {[
                      "Un videojuego funcional tipo plataforma o RPG",
                      "Una app web que resuelve un problema real",
                      "Un álbum músical de 3 canciones originales",
                      "Un portafolio digital profesional",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-[#3B3630]">
                        <span className="text-[#B5522F] mr-3">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F1E8] p-4 rounded-sm text-center border border-[#1A1714]/12">
                <p className="text-[#B5522F] font-semibold">
                  Ideal para: Preadolescentes que quieren crear contenido, juegos o apps y destacar entre sus amigos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Age Group: 14-17 */}
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-[#FAF7EF] p-8 md:p-12 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center text-2xl font-display italic text-[#FAF7EF]">
                  14+
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display text-[#1A1714]">Profesionales (14-17 años)</h2>
                  <p className="text-[#B5522F] font-semibold">Fase de Herramientas Profesionales</p>
                </div>
              </div>

              <p className="text-lg text-[#3B3630] mb-8 leading-relaxed">
                Los adolescentes piensan en su futuro. A está edad, la IA no solo es divertida sino que se convierte
                en una herramienta profesional real. Les enseñamos a usar las mismas herramientas que usan empresas
                y emprendedores, preparándolos para la universidad y el mercado laboral.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-[#1A1714] mb-4">Lo que Aprenden</h3>
                  <ul className="space-y-3">
                    {[
                      "Herramientas profesionales de IA (ChatGPT-4, Claude, Midjourney V6)",
                      "Desarrollo de apps con Vibe Coding avanzado",
                      "Automatización de tareas y workflows con IA",
                      "Creación de contenido profesional (video, audio, texto)",
                      "Pensamiento crítico sobre IA: sesgos, ética, impacto social",
                      "Construcción de marca personal digital",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-[#3B3630]">
                        <span className="text-[#B5522F] mr-3">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-display text-[#1A1714] mb-4">Proyectos que Crean</h3>
                  <ul className="space-y-3">
                    {[
                      "Una app o SaaS funcional con usuarios reales",
                      "Un portafolio profesional que destaca en universidades",
                      "Un proyecto de emprendimiento con IA",
                      "Contenido multimedia de calidad profesional",
                      "Un ensayo crítico sobre el impacto de la IA",
                    ].map((item) => (
                      <li key={item} className="flex items-start text-[#3B3630]">
                        <span className="text-[#B5522F] mr-3">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F1E8] p-4 rounded-sm text-center border border-[#1A1714]/12">
                <p className="text-[#B5522F] font-semibold">
                  Ideal para: Adolescentes que quieren prepararse para la universidad, emprender o dominar herramientas profesionales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 px-6 md:px-10 bg-[#F5F1E8]">
          <div className="max-w-[1100px] mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F] mb-4">Orientacion</p>
            <h2 className="text-4xl font-display text-[#1A1714] mb-8">No Sabes Cuál Elegir?</h2>
            <p className="text-xl text-[#3B3630] mb-8">
              No te preocupes. En InnovaKids, todos los grupos de edad comparten el mismo curso de 10 clases,
              pero el instructor adapta los proyectos y el nivel de profundidad según la edad de cada alumno.
              Los grupos se forman por edades similares para que todos avancen cómodos.
            </p>
            <div className="bg-[#FAF7EF] p-8 rounded-sm border border-[#1A1714]/12 text-left max-w-2xl mx-auto">
              <h3 className="text-xl font-display text-[#1A1714] mb-4 text-center">La Ventaja de Grupos de 5</h3>
              <p className="text-[#3B3630]">
                Con solo 5 alumnos por grupo, el instructor puede personalizar cada clase. Si tu hijo de 9 años
                está en un grupo con niños de 8-10, recibirá proyectos adaptados a su nivel exacto.
                No se queda atrás ni se aburre.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/cursos/inteligencia-artificial" className="text-[#B5522F] hover:text-[#9A4428] underline">
                Ver curso completo
              </Link>
              <span className="text-[#6B645B]">|</span>
              <Link href="/adolescentes" className="text-[#B5522F] hover:text-[#9A4428] underline">
                Curso para adolescentes
              </Link>
              <span className="text-[#6B645B]">|</span>
              <Link href="/programa" className="text-[#B5522F] hover:text-[#9A4428] underline">
                Programa detallado
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto text-center">
            <div className="bg-[#F5F1E8] p-12 rounded-sm border border-[#1A1714]/12">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F] mb-4">Siguiente paso</p>
              <h2 className="text-3xl font-display text-[#1A1714] mb-4">Encuentra el Grupo Ideal para Tu Hijo</h2>
              <p className="text-xl text-[#6B645B] mb-8">
                Agenda una clase gratis y nuestro equipo asignará a tu hijo al grupo perfecto según su edad e intereses.
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
