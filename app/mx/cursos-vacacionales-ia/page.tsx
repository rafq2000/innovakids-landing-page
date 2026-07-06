import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Cursos Vacacionales de IA para Niños en México (8-17 años) | InnovaKids",
  description:
    "Aprovecha las vacaciones de verano (julio-agosto) para que tu hijo aprenda Inteligencia Artificial creando apps, videojuegos y arte. 5 semanas, 10 clases en vivo. Grupos de máx 5. 1ª clase gratis.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/mx/cursos-vacacionales-ia",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cursos Vacacionales de IA para Niños en México | InnovaKids",
    description:
      "Tu hijo crea apps, videojuegos y música con IA en estas vacaciones. 10 clases en vivo, grupos reducidos. 1ª clase gratis.",
    url: "https://www.innovakidslatam.com/mx/cursos-vacacionales-ia",
    siteName: "InnovaKids",
    locale: "es_MX",
    type: "website",
  },
}

export default function CursosVacacionalesMexicoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--paper)] text-[#2F2F2C]">
        {/* Hero */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center bg-gradient-to-br from-[#2F2F2C] to-[#1a1510] text-white rounded-b-3xl">
          <p className="text-[#C96342] font-semibold uppercase tracking-wider text-sm mb-4">
            Vacaciones de verano · julio - agosto
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Cursos Vacacionales de Inteligencia Artificial para Niños en México
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Mientras otros niños pasan las vacaciones frente a pantallas sin rumbo, el tuyo puede
            aprender a <strong className="text-white">crear tecnología real con IA</strong>. Familias
            en CDMX, Guadalajara, Monterrey y todo México ya confían en InnovaKids.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/innovakidslatam/clase-gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#B5522F] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Agendar clase gratis <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20sobre%20el%20curso%20vacacional%20de%20IA%20en%20M%C3%A9xico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </section>

        {/* Por qué un curso vacacional de IA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            ¿Por qué un curso vacacional de IA es mejor inversión que un campamento tradicional?
          </h2>
          <p className="text-[#5A5751] text-center max-w-3xl mx-auto mb-10">
            Las vacaciones de julio y agosto en México son largas: más de 6 semanas sin escuela.
            En vez de que tu hijo pase ese tiempo solo consumiendo contenido, puede aprender a crearlo.
            No es solo entretenimiento: es educación que transforma.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Aprende una habilidad real que usará toda su vida, no solo pasa el rato",
              "Clases en vivo con profesor experto, no videos pregrabados",
              "Grupos de máximo 5 alumnos: atención personalizada garantizada",
              "Desde casa, sin transporte ni logística complicada",
              "Crea un portfolio profesional que puede mostrar en su escuela",
              "527+ graduados en 9 países avalan nuestra metodología",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-[#B5522F] flex-shrink-0 mt-0.5" />
                <p className="text-[#5A5751]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formato perfecto */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white/5 rounded-2xl">
          <div className="text-center mb-10">
            <Target className="w-10 h-10 text-[#B5522F] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              5 semanas, 10 clases = el largo perfecto para vacaciones
            </h2>
            <p className="text-[#5A5751] max-w-2xl mx-auto">
              Nuestro programa Vibe Explorer está diseñado para encajar en el período vacacional.
              Tu hijo empieza y termina con un proyecto completo, sin que se extienda al ciclo escolar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "2 clases por semana", desc: "60 minutos cada una. Tiempo suficiente para aprender sin saturarse." },
              { title: "100% online y en vivo", desc: "Solo necesita una computadora con internet. Desde CDMX, Monterrey o cualquier ciudad." },
              { title: "Máximo 5 alumnos", desc: "El profesor conoce a cada niño por su nombre y adapta el ritmo." },
              { title: "Edad: 8 a 17 años", desc: "Grupos separados por edad para que cada niño avance a su ritmo." },
              { title: "Metodología ERICA", desc: "Explorar, Reflexionar, Idear, Crear y Aplicar. Aprenden haciendo." },
              { title: "Certificado final", desc: "Al completar las 10 clases recibe su certificado InnovaKids." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5">
                <h3 className="font-bold text-[#2F2F2C] mb-2">{item.title}</h3>
                <p className="text-[#5A5751] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Qué crea tu hijo */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            ¿Qué crea tu hijo en el curso vacacional?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Su propia app", desc: "Diseña y programa una aplicación funcional usando herramientas de IA." },
              { title: "Un videojuego", desc: "Crea un videojuego desde cero con Vibe Coding y herramientas de IA generativa." },
              { title: "Música con IA", desc: "Compone pistas originales usando inteligencia artificial." },
              { title: "Arte digital", desc: "Genera ilustraciones y diseños con modelos de IA de última generación." },
              { title: "Portfolio profesional", desc: "Todos sus proyectos quedan en un portfolio que puede compartir." },
              { title: "Habilidades para la vida", desc: "Pensamiento computacional, creatividad y resolución de problemas." },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-5 hover:border-[#C96342]/50 transition-colors">
                <h3 className="font-bold text-[#2F2F2C] mb-2">{item.title}</h3>
                <p className="text-[#5A5751] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Precio */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Inversión para estas vacaciones</h2>
          <p className="text-[#5A5751] mb-8">
            Precio accesible para familias mexicanas. Paga en pesos o en dólares.
          </p>
          <div className="bg-white/5 border border-[#C96342]/30 rounded-2xl p-8">
            <p className="text-4xl font-bold text-[#B5522F] mb-2">$297 USD</p>
            <p className="text-lg text-[#5A5751] mb-1">aprox. $6,000 MXN</p>
            <p className="text-[#5A5751] mb-1">10 clases en vivo · 5 semanas · máx 5 alumnos</p>
            <p className="text-sm text-[#5A5751] mb-6">Reserva con solo $27 USD (aprox. $540 MXN). Pagas el resto después de las 2 primeras clases.</p>
            <p className="text-lg font-semibold text-green-400 mb-6">1ª clase completamente gratis</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/innovakidslatam/clase-gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#B5522F] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Probar clase gratis <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20reservar%20el%20curso%20vacacional%20de%20IA%20para%20mi%20hijo%20en%20M%C3%A9xico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
          <p className="text-sm text-[#5A5751] mt-4">
            Métodos de pago: tarjeta de crédito, tarjeta de débito o PayPal.
          </p>
        </section>

        {/* Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mx"
              className="text-[#B5522F] hover:text-[#C96342] underline underline-offset-4 transition-colors"
            >
              Ver todo sobre InnovaKids en México
            </Link>
            <Link
              href="/mx/blog/cursos-inteligencia-artificial-ninos-mexico-guia"
              className="text-[#B5522F] hover:text-[#C96342] underline underline-offset-4 transition-colors"
            >
              Leer guía completa de cursos de IA en México
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
