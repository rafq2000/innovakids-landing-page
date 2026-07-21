import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { Button } from "@/components/ui/button"
import { COHORT } from "@/lib/site-config"
import { ArrowRight, Users, Shield, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  // 58 chars · keyword-first · 2026 trigger · brand last
  title: "Cómo Enseñar IA a Mis Hijos 8-17 años · 2026 | InnovaKids",
  // 153 chars · proof + differentiator + CTA
  description:
    "Cómo enseñar IA a tus hijos 8-17 años: guía paso a paso probada por 527 familias en 9 países. Método activo, clases 1 a 1 en vivo. Clase gratis.",
  keywords: [
    "cómo enseñar ia a mis hijos",
    "cómo aprender ia",
    "enseñar inteligencia artificial a niños",
    "cómo trabajar ia con niños",
    "educación ia infantil",
    "guía padres ia niños",
    "enseñar ia paso a paso",
    "herramientas ia niños gratis",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/como-ensenar-ia-a-mis-hijos",
  },
  openGraph: {
    title: "Cómo Enseñar IA a Mis Hijos: Guía Completa 2026 | InnovaKids",
    description:
      "Tu hijo pasa de consumidor a creador. Guía probada por 527 familias en 9 países, con clases 1 a 1 en vivo. Clase gratis.",
    url: "https://www.innovakidslatam.com/como-ensenar-ia-a-mis-hijos",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Cómo enseñar inteligencia artificial a niños 8-17 años - Guía InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Enseñar IA a Mis Hijos 8-17 años · 2026 | InnovaKids",
    description:
      "Guía probada por 527 familias en 9 países. Método activo, clases 1 a 1 en vivo. Clase gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function ComoEnsenarIAPage() {
  return (
    <div className="min-h-screen bg-[#FAF7EF]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center space-y-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F]">Guia para padres</p>
            <h1 className="text-6xl md:text-8xl font-display text-[#1A1714] leading-tight">
              Cómo Enseñar IA
              <br />
              <span className="italic text-[#B5522F]">
                a Tus Hijos
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-[#6B645B] max-w-3xl mx-auto leading-relaxed">
              La guía definitiva para padres que quieren preparar a sus hijos para el futuro
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="bg-[#F5F1E8] border border-[#1A1714]/12 px-8 py-4 rounded-sm">
                <p className="text-[#B5522F] font-bold">+527 Familias</p>
              </div>
              <div className="bg-[#F5F1E8] border border-[#1A1714]/12 px-8 py-4 rounded-sm">
                <p className="text-[#B5522F] font-bold">Método Probado</p>
              </div>
              <div className="bg-[#F5F1E8] border border-[#1A1714]/12 px-8 py-4 rounded-sm">
                <p className="text-[#B5522F] font-bold">100% Práctico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 px-6 md:px-10 bg-[#F5F1E8]">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F] text-center mb-4">Urgencia</p>
          <h2 className="text-5xl md:text-6xl font-display text-[#1A1714] text-center mb-12">Por qué ahora y no después</h2>
          <ul className="space-y-6 text-xl text-[#3B3630] max-w-2xl mx-auto">
            <li className="flex items-start gap-4">
              <span className="text-[#B5522F] text-2xl mt-0.5 font-display">1.</span>
              <span>La IA ya no es futuro: las universidades y empresas la exigen hoy. Quien empieza antes, llega con ventaja.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#B5522F] text-2xl mt-0.5 font-display">2.</span>
              <span>Entre los 8 y 17 años tienen la curiosidad y la capacidad logica ideales para aprender creando, no memorizando.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#B5522F] text-2xl mt-0.5 font-display">3.</span>
              <span>Cada semana que pasa sin aprender IA es una semana mas consumiendo pantallas en vez de crear con ellas.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F] text-center mb-4">Metodo</p>
          <h2 className="text-5xl md:text-6xl font-display text-[#1A1714] text-center mb-16">Cómo Enseñar IA Paso a Paso</h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center text-2xl font-display text-[#FAF7EF]">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-display text-[#1A1714] mb-4">Empieza con lo Divertido</h3>
                <p className="text-xl text-[#3B3630] mb-6">
                  No empieces con teoría aburrida. Deja que tu hijo juegue con ChatGPT, cree historias, genere imágenes.
                  Que se enamore primero, aprenda después.
                </p>
                <div className="bg-[#F5F1E8] p-6 rounded-sm border border-[#1A1714]/12">
                  <p className="text-[#B5522F] font-semibold mb-2">Herramientas recomendadas:</p>
                  <ul className="text-[#3B3630] space-y-2">
                    <li>- ChatGPT (para conversaciones y creatividad)</li>
                    <li>- DALL-E (para generar imágenes)</li>
                    <li>- Runway (para crear videos)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center text-2xl font-display text-[#FAF7EF]">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-display text-[#1A1714] mb-4">Proyectos Reales, No Tareas</h3>
                <p className="text-xl text-[#3B3630] mb-6">
                  Los niños aprenden haciendo cosas que les importan. Que creen un chatbot de su personaje favorito, un
                  videojuego con IA, o una app que resuelva un problema real.
                </p>
                <div className="bg-[#F5F1E8] p-6 rounded-sm border border-[#1A1714]/12">
                  <p className="text-[#B5522F] font-semibold mb-2">Ideas de proyectos:</p>
                  <ul className="text-[#3B3630] space-y-2">
                    <li>- Chatbot personalizado de su héroe favorito</li>
                    <li>- Generador de historias con sus personajes</li>
                    <li>- Analizador de emociones en textos</li>
                    <li>- Videojuego simple con NPCs inteligentes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center text-2xl font-display text-[#FAF7EF]">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-display text-[#1A1714] mb-4">Enséñales a Pensar Críticamente</h3>
                <p className="text-xl text-[#3B3630] mb-6">
                  La IA no es mágica. Enséñales que puede equivocarse, que tiene sesgos, que deben verificar
                  información. El pensamiento crítico es más importante que memorizar comandos.
                </p>
                <div className="bg-[#F5F1E8] p-6 rounded-sm border border-[#1A1714]/12">
                  <p className="text-[#B5522F] font-semibold mb-2">Habilidades clave:</p>
                  <ul className="text-[#3B3630] space-y-2">
                    <li>- Verificar información (detectar fake news)</li>
                    <li>- Entender errores y prejuicios de la IA</li>
                    <li>- Uso ético de la tecnología</li>
                    <li>- Privacidad y seguridad digital</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center text-2xl font-display text-[#FAF7EF]">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-display text-[#1A1714] mb-4">Las Clases 1 a 1 Son Clave</h3>
                <p className="text-xl text-[#3B3630] mb-6">
                  Tu hijo necesita atención personalizada. En grupos de 30+ nunca recibirá feedback real. Las clases
                  1 a 1 garantizan que avance a su propio ritmo, sin compartir el tiempo del instructor con nadie más.
                </p>
                <div className="bg-[#F5F1E8] p-6 rounded-sm border border-[#1A1714]/12">
                  <p className="text-[#B5522F] font-semibold mb-2">Por qué clases 1 a 1:</p>
                  <ul className="text-[#3B3630] space-y-2">
                    <li>- Atención personalizada del instructor</li>
                    <li>- Feedback inmediato en cada proyecto</li>
                    <li>- Ritmo adaptado a cada estudiante</li>
                    <li>- Espacio para hacer preguntas sin presión</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-32 px-6 md:px-10 bg-[#F5F1E8]">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F] text-center mb-4">Evita estos fallos</p>
          <h2 className="text-5xl md:text-6xl font-display text-[#1A1714] text-center mb-16">Errores que Debes Evitar</h2>

          <div className="space-y-6">
            <div className="bg-[#FAF7EF] p-8 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <h3 className="text-2xl font-display text-[#B5522F] mb-4">Empezar con Teoría Compleja</h3>
              <p className="text-[#3B3630] text-lg">
                No intentes explicar redes neuronales o algoritmos complejos. Eso mata la motivación. Empieza con crear
                algo cool y la teoría vendrá después naturalmente.
              </p>
            </div>

            <div className="bg-[#FAF7EF] p-8 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <h3 className="text-2xl font-display text-[#B5522F] mb-4">Clases Masivas Online</h3>
              <p className="text-[#3B3630] text-lg">
                Los cursos de 50+ estudiantes son para adultos disciplinados, no para niños. Tu hijo necesita atención
                personal o se frustrará y abandonará.
              </p>
            </div>

            <div className="bg-[#FAF7EF] p-8 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <h3 className="text-2xl font-display text-[#B5522F] mb-4">Solo Ver Videos de YouTube</h3>
              <p className="text-[#3B3630] text-lg">
                Ver videos pasivamente no enseña. Tu hijo necesita HACER proyectos reales con feedback de expertos para
                aprender de verdad.
              </p>
            </div>

            <div className="bg-[#FAF7EF] p-8 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <h3 className="text-2xl font-display text-[#B5522F] mb-4">Esperar al Colegio</h3>
              <p className="text-[#3B3630] text-lg">
                La educación tradicional va 5 años atrás de la tecnología. Si esperas a que el colegio enseñe IA, tu
                hijo perderá años valiosos de ventaja competitiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovakids Solution */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F] mb-4">Nuestra solución</p>
            <h2 className="text-5xl md:text-6xl font-display text-[#1A1714] mb-6">Cómo InnovaKids Te Ayuda</h2>
            <p className="text-2xl text-[#6B645B]">
              Hemos perfeccionado la forma de enseñar IA a niños con +527 familias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7EF] p-8 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <div className="w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#FAF7EF]" />
              </div>
              <h3 className="text-2xl font-display text-[#1A1714] mb-4">Clases 1 a 1</h3>
              <p className="text-[#6B645B] text-lg">
                Tu hijo recibe atención personalizada en cada clase. El instructor conoce su nombre, sus proyectos y sus
                desafíos específicos.
              </p>
            </div>

            <div className="bg-[#FAF7EF] p-8 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <div className="w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-[#FAF7EF]" />
              </div>
              <h3 className="text-2xl font-display text-[#1A1714] mb-4">Proyectos Reales</h3>
              <p className="text-[#6B645B] text-lg">
                No hacemos ejercicios aburridos. Tu hijo crea apps, videos, juegos y su propia startup con IA desde el
                primer día.
              </p>
            </div>

            <div className="bg-[#FAF7EF] p-8 rounded-sm border border-[#1A1714]/12 shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]">
              <div className="w-16 h-16 rounded-sm bg-[#C96342] flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#FAF7EF]" />
              </div>
              <h3 className="text-2xl font-display text-[#1A1714] mb-4">Garantía Total</h3>
              <p className="text-[#6B645B] text-lg">
                Si después de la primera clase no estás satisfecho, te devolvemos el 100%. Sin preguntas, sin
                complicaciones.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-[#F5F1E8] p-12 rounded-sm border border-[#1A1714]/12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B5522F] mb-4">Cupos limitados</p>
            <h3 className="text-3xl font-display text-[#1A1714] mb-4">Solo 2 de 20 Cupos Disponibles</h3>
            <p className="text-xl text-[#6B645B] mb-8">Proximo ciclo inicia el {COHORT.startDate} · Las plazas se agotan rapido</p>
            <Link href="/#sesion-estrategica">
              <Button
                size="lg"
                className="bg-[#C96342] text-[#FAF7EF] hover:bg-[#9A4428] text-xl px-12 py-8 rounded-sm shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] transition-all duration-300"
              >
                Agendar Evaluación Gratuita
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <p className="text-sm text-[#6B645B] mt-6">Proceso de selección personalizado · Sin compromiso</p>
          </div>
        </div>
      </section>

      {/* FAQ Section — uses shared component from lib/faq-data */}
      <FAQSection />

      <Footer />
    </div>
  )
}
