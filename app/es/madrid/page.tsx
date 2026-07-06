import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Extraescolar de IA para Niños en Madrid | InnovaKids",
  description:
    "Tu hijo aprende Inteligencia Artificial desde Madrid. Clases online en vivo, máx 5 alumnos (8-17 años). Horarios de extraescolar 16:00-21:00. 1ª clase gratis.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/es/madrid",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Extraescolar de IA para Niños en Madrid | InnovaKids",
    description:
      "Tu hijo aprende Inteligencia Artificial desde Madrid. Clases online en vivo, máx 5 alumnos (8-17 años). Horarios de extraescolar 16:00-21:00. 1ª clase gratis.",
    url: "https://www.innovakidslatam.com/es/madrid",
    type: "website",
    siteName: "InnovaKids",
    images: [
      {
        url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Curso de IA para Niños en Madrid - InnovaKids",
      },
    ],
  },
}

export default function MadridPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--paper)] text-[#2F2F2C]">
        {/* Hero */}
        <section className="pt-28 pb-16 px-4 text-center max-w-4xl mx-auto">
          <span className="inline-block bg-gradient-to-r from-[#C96342]/10 to-[#C96342]/10 border border-[#C96342]/20 text-[#B5522F] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Extraescolar de IA en Madrid
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Extraescolar de Inteligencia Artificial para Niños en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5522F] to-[#B5522F]">
              Madrid
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#5A5751] mb-4 max-w-2xl mx-auto">
            Las clases son online — tu hijo participa desde cualquier barrio de
            Madrid. Chamberí, Salamanca, Moncloa, Vallecas o Getafe: solo
            necesita un ordenador y conexión a internet.
          </p>
          <p className="text-[#5A5751] mb-8">
            Horarios de extraescolar: <strong className="text-[#2F2F2C]">16:00 a 21:00 h</strong> (hora de Madrid). Grupos reducidos de máximo 5 alumnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/innovakids"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C96342] to-[#B5522F] hover:from-[#B5522F] hover:to-[#C96342] text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
            >
              Reservar clase gratis <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20mi%20hijo%20en%20Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 font-semibold px-8 py-3.5 rounded-xl transition-all"
            >
              WhatsApp directo
            </a>
          </div>
        </section>

        {/* Por qué Madrid */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            ¿Por qué una extraescolar de IA en Madrid?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Hub tecnológico de España",
                desc: "Madrid concentra el mayor ecosistema tech del país. Empresas como Google, Amazon y Microsoft tienen sus sedes aquí. Tu hijo se prepara para ese entorno.",
              },
              {
                title: "Universidades de referencia",
                desc: "La UPM y la Complutense lideran la investigación en IA en España. Nuestro currículum está alineado con las habilidades que estas universidades valoran.",
              },
              {
                title: "Colegios privados y concertados",
                desc: "Miles de familias madrileñas buscan extraescolares que vayan más allá del inglés y el deporte. La IA es la extraescolar del futuro.",
              },
              {
                title: "Horarios pensados para ti",
                desc: "Clases de 16:00 a 21:00 h (hora de Madrid), compatibles con la jornada escolar. Tu hijo aprende sin salir de casa.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#2F2F2C]/5 border border-[#C96342]/20 rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#B5522F] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-[#5A5751] text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qué aprende */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            ¿Qué aprende tu hijo en 5 semanas?
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "Crear apps funcionales usando inteligencia artificial",
              "Diseñar videojuegos con herramientas de IA generativa",
              "Programar con vibe coding (programación asistida por IA)",
              "Generar arte digital, música y contenido con IA",
              "Pensamiento computacional y resolución de problemas",
              "Presentar su proyecto final ante compañeros y familias",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                <p className="text-[#5A5751]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Precio */}
        <section className="py-16 px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Precio e inscripción
          </h2>
          <p className="text-[#5A5751] mb-6">
            Programa completo de 5 semanas (10 clases en vivo de 60 min).
          </p>
          <div className="bg-[#2F2F2C]/5 border border-[#C96342]/20 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-4xl font-bold text-[#B5522F] mb-2">273€</p>
            <p className="text-[#5A5751] text-sm mb-4">
              Reserva con 25€ — pagas el resto tras las 2 primeras clases.
            </p>
            <p className="text-[#5A5751] text-sm mb-6">
              Pago seguro con Bizum, tarjeta de crédito o débito.
            </p>
            <a
              href="https://calendly.com/innovakids"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C96342] to-[#B5522F] hover:from-[#B5522F] hover:to-[#C96342] text-white font-semibold px-8 py-3.5 rounded-xl transition-all w-full"
            >
              Agendar clase gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-[#5A5751] mb-8">
            Agenda una clase gratuita y descubre cómo tu hijo puede crear
            proyectos reales con IA desde Madrid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20mi%20hijo%20en%20Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-[#5A5751]">
            <Link href="/es" className="hover:text-[#B5522F] transition-colors">
              InnovaKids España
            </Link>
            <Link
              href="/es/blog/cursos-inteligencia-artificial-ninos-espana-guia"
              className="hover:text-[#B5522F] transition-colors"
            >
              Blog: Cursos de IA para niños en España
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
