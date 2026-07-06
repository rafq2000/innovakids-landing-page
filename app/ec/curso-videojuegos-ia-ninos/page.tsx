import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Curso de Videojuegos con IA para Niños en Ecuador (8-17) | InnovaKids",
  description:
    "Tu hijo crea videojuegos reales con Inteligencia Artificial en Ecuador. Plataformas, aventuras y puzzles con Cursor, Replit y ChatGPT. Clases en vivo, máx 5 alumnos. 1ª clase gratis.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/ec/curso-videojuegos-ia-ninos",
  },
  robots: { index: true, follow: true },
}

export default function CursoVideojuegosIAEcuador() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--paper)] text-[#2F2F2C]">
        {/* Hero */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-br from-[#2F2F2C] to-[#1a1510] text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#B5522F] font-semibold mb-4 tracking-wide uppercase text-sm">
              Curso online en vivo para niños y adolescentes en Ecuador
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Curso de Creación de <span className="text-[#B5522F]">Videojuegos con IA</span> para Niños en Ecuador
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Tu hijo no solo juega videojuegos — los <strong className="text-white">CREA</strong>. Con Inteligencia Artificial, aprende a diseñar, programar y publicar sus propios juegos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/innovakidslatam/clase-gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C96342] hover:bg-[#B5522F] text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
              >
                Agendar clase gratis <ArrowRight className="inline ml-2 w-5 h-5" />
              </a>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20videojuegos%20con%20IA%20para%20mi%20hijo%20en%20Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C96342] text-[#B5522F] hover:bg-[#C96342]/10 font-bold py-4 px-8 rounded-xl text-lg transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Qué crearán */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            <Target className="inline mr-2 w-8 h-8 text-[#B5522F]" />
            ¿Qué videojuegos creará tu hijo?
          </h2>
          <p className="text-[#5A5751] text-center mb-10 max-w-2xl mx-auto">
            No son simulaciones ni tutoriales guiados. Tu hijo diseña, programa y publica juegos reales usando IA como copiloto.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Juegos de Plataformas", desc: "Como Mario Bros: niveles, enemigos, power-ups y física de movimiento. Todo generado con asistencia de IA." },
              { title: "Aventuras Interactivas", desc: "Historias con decisiones, diálogos ramificados y mundos que el jugador explora. La IA ayuda a crear la narrativa." },
              { title: "Puzzles y Lógica", desc: "Rompecabezas, juegos de memoria y desafíos matemáticos. Tu hijo diseña las reglas y la IA genera el código." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 text-[#B5522F]">{item.title}</h3>
                <p className="text-[#5A5751]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Herramientas */}
        <section className="py-16 px-4 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Herramientas profesionales que usará</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Cursor", desc: "Editor de código con IA integrada. Escribe lo que quiere y la IA genera el código del juego." },
                { name: "Replit", desc: "Plataforma online para programar y publicar juegos desde el navegador, sin instalar nada." },
                { name: "ChatGPT", desc: "Asistente de game design: crea personajes, niveles, mecánicas y soluciona bugs al instante." },
              ].map((tool) => (
                <div key={tool.name} className="text-center">
                  <h3 className="text-lg font-bold text-[#B5522F] mb-2">{tool.name}</h3>
                  <p className="text-[#5A5751] text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué crear videojuegos enseña */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">¿Por qué crear videojuegos es la mejor forma de aprender?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Lógica y pensamiento computacional: cada mecánica es un algoritmo",
              "Matemáticas aplicadas: coordenadas, ángulos, velocidad, probabilidad",
              "Diseño visual: colores, composición, interfaces de usuario",
              "Storytelling: crear mundos, personajes y narrativas que enganchen",
              "Resolución de problemas: debuggear un juego enseña a pensar",
              "Trabajo en equipo: playtesting y feedback entre compañeros",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-[#5A5751]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* De jugador a creador */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">De jugador a creador en 5 semanas</h2>
            <p className="text-white/80 text-lg mb-8">
              En solo 5 semanas, tu hijo pasa de jugar videojuegos a <strong className="text-white">crearlos</strong>. Clases en vivo con máximo 5 alumnos, profesores expertos y un proyecto final publicable.
            </p>
            <div className="bg-white/5 border border-[#C96342]/30 rounded-2xl p-8 mb-8">
              <p className="text-[#B5522F] text-sm font-semibold mb-2">Inversión</p>
              <p className="text-4xl font-bold mb-1">$297 USD</p>
              <p className="text-white/60">Pago directo en dólares</p>
              <p className="text-white/50 text-sm mt-2">Reserva con $27 USD. Solo pagas el resto después de las 2 primeras clases.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/innovakidslatam/clase-gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C96342] hover:bg-[#B5522F] text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors"
              >
                Agendar clase gratis
              </a>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20videojuegos%20con%20IA%20para%20mi%20hijo%20en%20Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C96342] text-[#B5522F] hover:bg-[#C96342]/10 font-bold py-4 px-8 rounded-xl text-lg transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Link al país */}
        <section className="py-12 px-4 text-center">
          <Link href="/ec" className="text-[#B5522F] hover:text-[#C96342] underline text-lg">
            <ArrowRight className="inline mr-1 w-4 h-4" />
            Ver todos los cursos de InnovaKids en Ecuador
          </Link>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
