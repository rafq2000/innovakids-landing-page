import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en Cali — Clases Online | InnovaKids",
  description:
    "Tu hijo en Cali crea apps, videojuegos y arte con Inteligencia Artificial. Clases en vivo, máx 5 alumnos (8-17 años). 1ª clase gratis. Aprox. $1.245.000 COP.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/co/cali",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CaliPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--paper)] text-[#2F2F2C]">
        {/* Hero */}
        <section className="relative py-20 md:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C96342]/10 text-[#B5522F] text-sm font-medium mb-6">
              Cali, Colombia
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Curso de Inteligencia Artificial para Niños en{" "}
              <span className="text-[#B5522F]">Cali</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] max-w-2xl mx-auto mb-8">
              Niños y adolescentes caleños (8-17 años) aprenden a crear videojuegos, apps y proyectos
              reales con IA. Clases en vivo con máximo 5 alumnos. 100% online — tu hijo participa
              desde cualquier barrio o comuna de Cali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clase-gratis"
                className="inline-flex items-center justify-center gap-2 bg-[#B5522F] hover:bg-[#C96342] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Reservar clase gratis <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20mi%20hijo%20en%20Cali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#C96342]/20 hover:bg-[#2F2F2C]/5 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Por qué Cali */}
        <section className="py-16 px-4 bg-[#2F2F2C]/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              ¿Por qué los niños en Cali necesitan aprender IA?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#2F2F2C]/5 rounded-xl p-6 border border-[#C96342]/20">
                <Target className="w-8 h-8 text-[#B5522F] mb-3" />
                <h3 className="font-semibold text-lg mb-2">Valle del Cauca tech</h3>
                <p className="text-[#5A5751]">
                  El Valle del Cauca lidera la transformación digital del suroccidente colombiano.
                  La Cámara de Comercio de Cali impulsa programas tech y la ciudad se posiciona
                  como polo de desarrollo de software.
                </p>
              </div>
              <div className="bg-[#2F2F2C]/5 rounded-xl p-6 border border-[#C96342]/20">
                <Target className="w-8 h-8 text-[#B5522F] mb-3" />
                <h3 className="font-semibold text-lg mb-2">Universidades de primer nivel</h3>
                <p className="text-[#5A5751]">
                  La Universidad del Valle, la Icesi y la Javeriana Cali forman ingenieros y
                  profesionales tech de alto nivel. Tu hijo puede empezar su camino hacia estas
                  instituciones aprendiendo IA desde ahora.
                </p>
              </div>
              <div className="bg-[#2F2F2C]/5 rounded-xl p-6 border border-[#C96342]/20">
                <Target className="w-8 h-8 text-[#B5522F] mb-3" />
                <h3 className="font-semibold text-lg mb-2">Ecosistema emprendedor creciente</h3>
                <p className="text-[#5A5751]">
                  Cali vive un boom de emprendimiento tecnológico. Programas como Apps.co y el
                  Centro de Desarrollo Tecnológico abren oportunidades. Los niños que dominen
                  IA tendrán ventaja competitiva.
                </p>
              </div>
              <div className="bg-[#2F2F2C]/5 rounded-xl p-6 border border-[#C96342]/20">
                <Target className="w-8 h-8 text-[#B5522F] mb-3" />
                <h3 className="font-semibold text-lg mb-2">Online desde cualquier punto de Cali</h3>
                <p className="text-[#5A5751]">
                  Las clases son 100% online — tu hijo participa desde Ciudad Jardín, Granada,
                  El Limonar, Pance o cualquier barrio de Cali. Sin desplazamientos, sin MIO,
                  solo un computador y conexión a internet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué aprende */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              ¿Qué aprende tu hijo en el curso?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Crear videojuegos con inteligencia artificial",
                "Diseñar apps funcionales desde cero",
                "Generar arte y música con IA generativa",
                "Programar con Vibe Coding (el futuro de la programación)",
                "Pensamiento computacional y resolución de problemas",
                "Presentar proyectos como un emprendedor",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[#5A5751]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precio y CTA */}
        <section className="py-16 px-4 bg-[#2F2F2C]/[0.04]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Inversión para familias en Cali
            </h2>
            <div className="bg-[#2F2F2C]/5 rounded-2xl p-8 border border-[#C96342]/20 mb-8">
              <p className="text-4xl font-bold text-[#B5522F] mb-2">
                $297 USD
              </p>
              <p className="text-[#5A5751] mb-1">
                Aproximadamente $1.245.000 COP
              </p>
              <p className="text-sm text-[#5A5751] mb-6">
                Reserva con solo $27 USD (aprox. $113.000 COP). Paga el resto después de las 2 primeras clases.
              </p>
              <ul className="text-left space-y-2 mb-6 max-w-sm mx-auto">
                {[
                  "10 clases en vivo de 60 minutos",
                  "Grupos de máximo 5 alumnos",
                  "Profesor especializado en IA",
                  "Certificado de finalización",
                  "1ª clase completamente gratis",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#5A5751]">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/clase-gratis"
                className="inline-flex items-center justify-center gap-2 bg-[#B5522F] hover:bg-[#C96342] text-white font-semibold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto"
              >
                Probar clase gratis <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-[#5A5751] text-sm">
              Pago seguro con tarjeta de crédito, débito o PayPal.
            </p>
          </div>
        </section>

        {/* Navegación interna */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <Link
              href="/co"
              className="inline-flex items-center gap-2 text-[#B5522F] hover:underline"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Ver página de Colombia
            </Link>
            <span className="block text-[#5A5751]">|</span>
            <Link
              href="/co/blog/cursos-inteligencia-artificial-ninos-colombia-guia"
              className="inline-flex items-center gap-2 text-[#B5522F] hover:underline"
            >
              Guía completa de cursos de IA para niños en Colombia
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
