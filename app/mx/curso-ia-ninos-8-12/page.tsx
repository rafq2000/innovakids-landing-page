import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Curso de IA para Niños de 8 a 12 Años en México | InnovaKids",
  description:
    "Tu hijo de 8 a 12 años crea arte, música, mini-juegos y su primer chatbot con Inteligencia Artificial. Clases en vivo, 1 a 1. No necesita saber programar. 1ª clase gratis.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/mx/curso-ia-ninos-8-12",
  },
  robots: { index: true, follow: true },
}

export default function CursoIANinos812MX() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--paper)] text-[#2F2F2C]">
        {/* Hero */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] text-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#C96342]/10 text-[#B5522F] text-sm font-medium border border-[#C96342]/20">
              Niños de 8 a 12 años — Aprox. $6,000 MXN ($297 USD)
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Curso de Inteligencia Artificial para Niños de 8 a 12 Años en México
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] mb-8 max-w-3xl mx-auto">
              La edad perfecta para empezar. Tu hijo descubre la IA creando proyectos reales —arte, música, juegos y su primer chatbot— en un entorno seguro, en vivo y 100% en español.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/innovakidslatam/clase-gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#9A4428] text-[#2F2F2C] font-bold py-3 px-8 rounded-xl transition-colors"
              >
                Agendar clase gratis <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20niños%20de%208-12%20en%20México"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-3 px-8 rounded-xl transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Por qué 8-12 es la mejor edad */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <Target className="inline-block w-7 h-7 text-[#B5522F] mr-2" />
              ¿Por qué 8 a 12 años es la MEJOR edad para empezar con IA?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Neuroplasticidad máxima", desc: "Entre los 8 y 12 años el cerebro forma conexiones neuronales a una velocidad que no se repite. Aprender lógica e IA ahora deja huella permanente." },
                { title: "Curiosidad natural", desc: "Preguntan todo, quieren experimentar y no tienen miedo a equivocarse. Esa mentalidad es exactamente la que necesita un creador de tecnología." },
                { title: "Sin miedo al error", desc: "A diferencia de los adolescentes, los niños de esta edad prueban sin vergüenza. Ese «atreverse» es el superpoder que acelera el aprendizaje." },
              ].map((item) => (
                <div key={item.title} className="bg-white/80 border border-[#C96342]/15 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-[#B5522F] mb-2">{item.title}</h3>
                  <p className="text-[#5A5751] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metodología adaptada */}
        <section className="py-16 px-4 bg-[#F5F1E8]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Metodología adaptada a su edad</h2>
            <div className="space-y-4">
              {[
                "Vibe Coding simplificado: le habla a la IA en español y ella genera el código. Cero frustración.",
                "Proyectos visuales y creativos: cada clase termina con algo que puede mostrar a su familia.",
                "Feedback inmediato: ve el resultado en tiempo real, lo que mantiene su atención y motivación.",
                "Clases 1 a 1: atención personalizada del instructor en cada sesión.",
                "Clases de 60 minutos en vivo: la duración justa para mantener el foco sin agotarse.",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3 bg-white/80 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <p className="text-[#5A5751]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué crearán */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">¿Qué va a crear tu hijo?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Arte con IA", desc: "Genera ilustraciones, personajes y mundos usando prompts creativos." },
                { title: "Música con IA", desc: "Compone melodías originales combinando estilos y ritmos con herramientas de IA." },
                { title: "Mini-juegos", desc: "Diseña y programa sus propios videojuegos interactivos sin escribir código complejo." },
                { title: "Su primer chatbot", desc: "Construye un asistente virtual que responde preguntas sobre el tema que elija." },
              ].map((item) => (
                <div key={item.title} className="bg-white/80 border border-[#C96342]/15 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#5A5751] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seguridad */}
        <section className="py-16 px-4 bg-[#F5F1E8]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Supervisión y seguridad garantizadas</h2>
            <div className="space-y-4">
              {[
                "Filtros de contenido activos: las herramientas de IA están configuradas para uso infantil seguro.",
                "Instructor adulto en cada sesión: un profesional supervisa y guía a tu hijo en todo momento.",
                "Clases individuales, 1 a 1: control total del entorno de aprendizaje.",
                "No necesita saber programar ni leer en inglés: todo es en español y con interfaz visual.",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#B5522F] mt-0.5 shrink-0" />
                  <p className="text-[#5A5751]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precio y CTA */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Inscríbelo hoy</h2>
            <p className="text-[#5A5751] mb-2">
              Programa completo: <span className="text-[#2F2F2C] font-bold">$297 USD (aprox. $6,000 MXN)</span>
            </p>
            <p className="text-[#5A5751] mb-8 text-sm">Reserva con $27 USD (aprox. $540 MXN). Solo pagas el resto después de las 2 primeras clases.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://calendly.com/innovakidslatam/clase-gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#9A4428] text-[#2F2F2C] font-bold py-3 px-8 rounded-xl transition-colors"
              >
                Agendar clase gratis <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20inscribir%20a%20mi%20hijo%20de%208-12%20en%20el%20curso%20de%20IA%20(México)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-3 px-8 rounded-xl transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <p className="text-[#5A5751] text-sm">
              Familias en CDMX, Guadalajara, Monterrey, Puebla y todo México ya aprenden con InnovaKids.
            </p>
            <Link href="/mx" className="inline-block mt-6 text-[#B5522F] hover:text-[#9A4428] text-sm underline underline-offset-4">
              Ver todos los cursos en México
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
