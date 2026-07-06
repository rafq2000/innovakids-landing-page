import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vibe Coding para Niños en Ecuador — Programa con IA | InnovaKids",
  description:
    "Vibe Coding para niños en Ecuador: tu hijo crea apps, videojuegos y chatbots hablando con la IA. Clases en vivo, grupos de 5 (8-17 años). $297 USD. Clase gratis.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/ec/vibe-coding-ninos",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Vibe Coding para Niños en Ecuador — Programa con IA | InnovaKids",
    description:
      "Tu hijo crea apps y videojuegos hablando con la IA. Clases en vivo, máx 5 alumnos. 527 graduados en 9 países. Clase gratis.",
    url: "https://www.innovakidslatam.com/ec/vibe-coding-ninos",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_EC",
  },
}

export default function VibeCodingEcuadorPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--paper)] text-[#2F2F2C] pt-24">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#2F2F2C] to-[#1a1510]">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Vibe Coding para Niños en Ecuador:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C96342] to-[#E8A87C]">
                Programar con Inteligencia Artificial
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              La nueva forma de crear tecnología: tu hijo le dice a la IA lo que quiere construir y la IA genera el código.
              Sin memorizar sintaxis, sin frustración. <strong className="text-white">Resultados desde el día 1.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20">
                <p className="text-white font-semibold">8-17 años</p>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20">
                <p className="text-white font-semibold">100% Online en Vivo</p>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20">
                <p className="text-white font-semibold">Grupos de máx. 5</p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué es el Vibe Coding? */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2C] text-center mb-10">
              ¿Qué es el Vibe Coding?
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#E8E4DE] shadow-sm space-y-6">
              <p className="text-lg text-[#5A5751] leading-relaxed">
                El <strong className="text-[#2F2F2C]">Vibe Coding</strong> es la revolución de la programación: crear software usando
                lenguaje natural en lugar de escribir código línea por línea. Tu hijo le describe a la IA lo que quiere
                — <em className="text-[#B5522F]">&quot;Quiero un juego donde un astronauta esquiva asteroides&quot;</em> — y la IA
                genera el código completo y funcional.
              </p>
              <p className="text-lg text-[#5A5751] leading-relaxed">
                El término fue acuñado por Andrej Karpathy, ex-director de IA en Tesla, y representa el futuro de cómo
                los humanos interactuarán con la tecnología. No se trata de reemplazar la lógica, sino de
                <strong className="text-[#2F2F2C]"> elevar la creatividad</strong>: los niños se enfocan en qué construir, no en cómo escribir punto y coma.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué es el futuro */}
        <section className="py-16 px-4 bg-[#F5F1EB]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2C] text-center mb-10">
              Por Qué el Vibe Coding Es el Futuro de la Programación
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-[#E8E4DE] shadow-sm">
                <Target className="h-8 w-8 text-[#B5522F] mb-4" />
                <h3 className="text-xl font-bold text-[#2F2F2C] mb-3">La habilidad #1 que definirá el mercado laboral en 2030</h3>
                <p className="text-[#5A5751]">
                  Gartner predice que el 75% del software se creará con asistencia de IA para 2028. Los niños que
                  dominen Vibe Coding hoy tendrán una ventaja competitiva enorme en el mercado laboral ecuatoriano y global.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-[#E8E4DE] shadow-sm">
                <CheckCircle className="h-8 w-8 text-[#B5522F] mb-4" />
                <h3 className="text-xl font-bold text-[#2F2F2C] mb-3">Crear desde el día 1</h3>
                <p className="text-[#5A5751]">
                  Con programación tradicional, un niño tarda semanas en crear algo funcional. Con Vibe Coding,
                  en su primera hora ya tiene un juego o app funcionando. La motivación se dispara.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diferencia con programación tradicional */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2C] text-center mb-10">
              Vibe Coding vs Programación Tradicional
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDF5F0] p-8 rounded-2xl border border-[#C96342]/20">
                <h3 className="text-2xl font-bold text-[#B5522F] mb-6 text-center">Vibe Coding</h3>
                <ul className="space-y-3">
                  {["Resultados en minutos", "Usa español para programar", "Motivación desde la clase 1", "Enfoque en creatividad y diseño", "Prepara para el futuro con IA"].map((item) => (
                    <li key={item} className="flex items-center text-[#5A5751]">
                      <CheckCircle className="h-5 w-5 text-[#B5522F] mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F5F1EB] p-8 rounded-2xl border border-[#E8E4DE]">
                <h3 className="text-2xl font-bold text-[#5A5751] mb-6 text-center">Programación Tradicional</h3>
                <ul className="space-y-3">
                  {["Semanas para ver resultados", "Memorizar sintaxis compleja", "Frustración frecuente al inicio", "Enfoque en código, no en ideas", "Curva de aprendizaje empinada"].map((item) => (
                    <li key={item} className="flex items-center text-[#8A8580]">
                      <span className="mr-3">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Herramientas y qué crearán */}
        <section className="py-16 px-4 bg-[#F5F1EB]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2C] text-center mb-10">
              Herramientas que Usan y Qué Crearán
            </h2>
            <p className="text-lg text-[#5A5751] text-center max-w-3xl mx-auto mb-10">
              Nuestros alumnos trabajan con las mismas herramientas que usan los profesionales:
              <strong className="text-[#2F2F2C]"> Cursor, Replit, ChatGPT y Claude</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Apps Web Funcionales", desc: "Herramientas de estudio, calculadoras inteligentes y apps que resuelven problemas reales." },
                { title: "Chatbots con IA", desc: "Asistentes conversacionales que responden preguntas, cuentan historias o ayudan con tareas." },
                { title: "Videojuegos Completos", desc: "Juegos tipo plataforma, RPG y puzzles que funcionan en el navegador, creados describiendo la mecánica en español." },
                { title: "Herramientas de Estudio", desc: "Generadores de resúmenes, quiz interactivos y flashcards potenciados con IA." },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-sm">
                  <h3 className="text-lg font-bold text-[#2F2F2C] mb-2">{item.title}</h3>
                  <p className="text-[#5A5751]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] p-12 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Tu Hijo Puede Ser un Vibe Coder
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Programa completo de 5 semanas por <strong className="text-white">$297 USD</strong>.
                Familias en Quito, Guayaquil, Cuenca y todo Ecuador ya aprenden con nosotros.
              </p>
              <p className="text-gray-400 mb-8">
                Agenda una clase gratis. Sin experiencia previa necesaria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/clase-gratis" className="inline-flex items-center justify-center bg-[#C96342] hover:bg-[#B5522F] text-white font-bold text-lg px-10 py-4 rounded-lg transition-colors">
                  Agendar Clase Gratis <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20sobre%20Vibe%20Coding%20para%20niños%20en%20Ecuador" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold text-lg px-10 py-4 rounded-lg transition-colors">
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/ec" className="text-[#B5522F] hover:text-[#C96342] underline">
                InnovaKids Ecuador
              </Link>
              <span className="text-[#E8E4DE]">|</span>
              <Link href="/cursos/inteligencia-artificial" className="text-[#B5522F] hover:text-[#C96342] underline">
                Curso completo de IA
              </Link>
              <span className="text-[#E8E4DE]">|</span>
              <Link href="/vibe-coding-ninos" className="text-[#B5522F] hover:text-[#C96342] underline">
                Vibe Coding para Niños
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
