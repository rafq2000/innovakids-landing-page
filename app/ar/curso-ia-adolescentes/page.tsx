import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { CheckCircle, Target, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Adolescentes (13-17 años) en Argentina | InnovaKids",
  description:
    "1ª clase gratis. Adolescentes argentinos crean apps, videojuegos y portfolio profesional con Inteligencia Artificial. Clases en vivo, 1 a 1. Ideal para prepararse para la universidad y el primer laburo tech.",
  keywords: [
    "curso ia adolescentes argentina",
    "inteligencia artificial para adolescentes buenos aires",
    "curso ia jóvenes córdoba",
    "programación para adolescentes argentina",
    "vibe coding adolescentes argentina",
    "curso tecnología chicos rosario",
    "portfolio digital adolescentes ia",
    "preparación universitaria ia argentina",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/ar/curso-ia-adolescentes",
  },
  openGraph: {
    title: "Curso de IA para Adolescentes (13-17) en Argentina | InnovaKids",
    description:
      "Tu hijo adolescente crea apps reales, videojuegos y un portfolio profesional con IA en 5 semanas. Clases en vivo, 1 a 1. 1ª clase gratis.",
    url: "https://www.innovakidslatam.com/ar/curso-ia-adolescentes",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Adolescentes argentinos creando proyectos con IA - InnovaKids",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function CursoIAAdolescentesArgentina() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] text-white py-20 md:py-28 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block bg-[#C96342]/10 text-[#B5522F] text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Para chicos de 13 a 17 años en Argentina
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Curso de Inteligencia Artificial para Adolescentes en Argentina
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] max-w-3xl mx-auto mb-8">
              Los chicos argentinos tienen creatividad y talento de sobra. Lo que necesitan es
              la herramienta correcta. En Buenos Aires, Córdoba, Rosario o Mendoza, tus hijos
              aprenden a crear tecnología con IA, no solo a consumirla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/innovakidslatam/reunion-informativa-innovakids"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#C96342] hover:bg-[#9A4428] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Agendar clase gratis <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                WhatsApp directo
              </a>
            </div>
          </div>
        </section>

        {/* Por qué los adolescentes necesitan IA */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              ¿Por qué los chicos argentinos necesitan aprender IA ahora?
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Argentina exporta talento tech al mundo. Mercado Libre, Globant y Auth0 nacieron acá.
              Los chicos que aprenden IA hoy están un paso adelante para la universidad, para
              freelancear en dólares o para crear su propia startup.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#C96342]/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#B5522F]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Universidad con portfolio</h3>
                <p className="text-gray-600">
                  La UBA, el ITBA, la UTN y universidades privadas valoran cada vez más
                  la experiencia práctica. Un portfolio con proyectos de IA pesa más que una nota.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Trabajar en tech desde Argentina</h3>
                <p className="text-gray-600">
                  Miles de argentinos trabajan remoto para empresas internacionales cobrando en dólares.
                  Las habilidades en IA son las más buscadas y las mejor pagadas del mercado tech global.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Creatividad argentina + IA</h3>
                <p className="text-gray-600">
                  Los chicos argentinos son naturalmente creativos e ingeniosos. Con IA como herramienta,
                  esa creatividad se convierte en apps, videojuegos y proyectos que se publican de verdad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué aprenderán */}
        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Qué van a aprender tus hijos?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Vibe Coding: crear apps completas con IA como copiloto (nada de memorizar código aburrido)",
                "Desarrollo de videojuegos con herramientas profesionales y asistencia de IA generativa",
                "Crear música, arte digital y contenido con las mejores herramientas de IA del mercado",
                "Pensamiento computacional aplicado a resolver problemas reales, no solo ejercicios",
                "Armar un portfolio digital profesional que se publica en la web",
                "Explorar carreras tech: desarrollo, datos, diseño, emprendimiento, freelance internacional",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-[#B5522F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferencia con cursos para chicos más chicos */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              No es un curso para chicos de 8 años disfrazado de &quot;adolescentes&quot;
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Un pibe de 15 necesita desafíos de verdad. Nuestro programa para adolescentes
              tiene la profundidad y el ritmo que los jóvenes argentinos necesitan.
            </p>
            <div className="space-y-4">
              {[
                {
                  label: "Proyectos que funcionan de verdad",
                  desc: "Apps con bases de datos, integraciones con APIs reales y deploy en producción. No es arrastrar bloques de Scratch.",
                },
                {
                  label: "Herramientas profesionales",
                  desc: "Usan las mismas herramientas de IA que los programadores profesionales: prompt engineering avanzado, Vibe Coding y flujos de trabajo reales.",
                },
                {
                  label: "Orientación para lo que viene",
                  desc: "Carreras tech en Argentina y en el exterior, cómo armar un perfil para trabajar remoto, qué estudiar en la universidad. Todo integrado al curso.",
                },
                {
                  label: "Contenido para su edad",
                  desc: "Clases 1 a 1, siempre entre 13 y 17 años. Nada de mezclar chicos de 8 con adolescentes. El ritmo y la conversación son los correctos.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabla comparativa */}
        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
              InnovaKids vs. otras opciones en Argentina
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#2F2F2C] text-white">
                    <th className="p-4 text-left rounded-tl-xl">Característica</th>
                    <th className="p-4 text-center">InnovaKids</th>
                    <th className="p-4 text-center rounded-tr-xl">Otras academias</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    ["Clases 1 a 1 (individuales)", "Sí", "15-30 alumnos"],
                    ["Clases en vivo con profe", "Sí", "Videos grabados"],
                    ["IA generativa y Vibe Coding", "Sí", "Scratch o robótica"],
                    ["Portfolio profesional publicado", "Sí", "Certificado impreso"],
                    ["Orientación vocacional tech", "Sí", "No incluida"],
                    ["Clase de prueba gratis", "Sí", "Pago por adelantado"],
                    ["Precio", "$297 USD (aprox. $317.000 ARS)", "$300-600 USD"],
                  ].map(([feature, inno, other], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-medium text-gray-900">{feature}</td>
                      <td className="p-4 text-center text-[#B5522F] font-semibold">{inno}</td>
                      <td className="p-4 text-center text-[#5A5751]">{other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Tu hijo puede probar una clase gratis, sin vueltas
            </h2>
            <p className="text-[#5A5751] text-lg mb-8">
              Sin compromiso, sin tarjeta, sin letra chica. Agendá una reunión informativa
              o escribinos por WhatsApp. Respondemos en menos de 2 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://calendly.com/innovakidslatam/reunion-informativa-innovakids"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#C96342] hover:bg-[#9A4428] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Agendar reunión informativa <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#C96342]/50 hover:border-[#C96342] text-[#B5522F] font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <Link href="/ar" className="text-[#5A5751] hover:text-white underline text-sm transition-colors">
              Volver a la página principal de InnovaKids Argentina
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
