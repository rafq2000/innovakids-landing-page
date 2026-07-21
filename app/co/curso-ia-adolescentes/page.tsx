import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { CheckCircle, Target, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Adolescentes (13-17 años) en Colombia | InnovaKids",
  description:
    "1ª clase gratis. Adolescentes colombianos crean apps, videojuegos y portfolio profesional con Inteligencia Artificial. Clases en vivo, 1 a 1. Ideal para prepararse para universidades y el mercado tech.",
  keywords: [
    "curso ia adolescentes colombia",
    "inteligencia artificial para adolescentes bogotá",
    "curso ia jóvenes medellín",
    "programación para adolescentes colombia",
    "vibe coding adolescentes colombia",
    "curso tecnología adolescentes cali",
    "portfolio digital adolescentes ia",
    "preparación universitaria ia colombia",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/co/curso-ia-adolescentes",
  },
  openGraph: {
    title: "Curso de IA para Adolescentes (13-17) en Colombia | InnovaKids",
    description:
      "Tu hijo adolescente crea apps, videojuegos y un portfolio profesional con IA en 5 semanas. Clases en vivo, 1 a 1. 1ª clase gratis.",
    url: "https://www.innovakidslatam.com/co/curso-ia-adolescentes",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Adolescentes colombianos creando proyectos con IA - InnovaKids",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function CursoIAAdolescentesColombia() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] text-white py-20 md:py-28 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block bg-[#C96342]/10 text-[#B5522F] text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Programa exclusivo para jóvenes de 13 a 17 años en Colombia
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Curso de Inteligencia Artificial para Adolescentes en Colombia
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] max-w-3xl mx-auto mb-8">
              Colombia se posiciona como hub de innovación en LATAM. Los adolescentes en Bogotá, Medellín,
              Cali y Barranquilla que aprenden IA hoy serán los líderes tech del mañana. Tu hijo
              pasa de consumir tecnología a crearla.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20Colombia"
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
              ¿Por qué los adolescentes colombianos necesitan aprender IA hoy?
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Medellín fue nombrada ciudad del año por su transformación tecnológica. Bogotá es capital
              de startups. El ecosistema tech colombiano crece, y necesita talento joven preparado.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#C96342]/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#B5522F]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Ventaja en la universidad</h3>
                <p className="text-gray-600">
                  Universidades como los Andes, la Javeriana y la Nacional valoran cada vez más
                  el pensamiento computacional. Un portfolio con proyectos de IA marca la diferencia en admisiones.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Ecosistema tech en auge</h3>
                <p className="text-gray-600">
                  Rappi nació en Colombia. El ecosistema startup colombiano genera miles de empleos
                  tech cada año. Los jóvenes con habilidades en IA tienen acceso a oportunidades
                  que antes no existían.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Emprendimiento digital temprano</h3>
                <p className="text-gray-600">
                  Los adolescentes colombianos tienen espíritu emprendedor. Con IA, pueden crear
                  sus propios proyectos digitales, desde apps hasta negocios online, antes de los 18.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué aprenderán */}
        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Qué aprenden los adolescentes en el curso?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Vibe Coding: construir aplicaciones completas usando IA como asistente inteligente",
                "Diseño y desarrollo de videojuegos con herramientas profesionales e IA",
                "Creación de contenido digital: música, arte visual y videos con IA generativa",
                "Resolución de problemas reales con pensamiento computacional",
                "Armado de un portfolio profesional publicado en la web",
                "Exploración vocacional: descubrir si su camino es ingeniería, diseño o emprendimiento tech",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="h-6 w-6 text-[#B5522F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferencia con cursos para niños */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              ¿Cuál es la diferencia con un curso para niños más pequeños?
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Un adolescente de 14 o 16 años necesita retos reales, no ejercicios infantiles.
              Nuestro programa para jóvenes va más allá.
            </p>
            <div className="space-y-4">
              {[
                {
                  label: "Proyectos de nivel profesional",
                  desc: "Crean apps con bases de datos, integran APIs y publican proyectos funcionales en internet. No solo arrastran bloques de colores.",
                },
                {
                  label: "IA generativa avanzada",
                  desc: "Aprenden prompt engineering, entienden cómo funcionan los modelos de lenguaje y usan herramientas profesionales de IA para crear.",
                },
                {
                  label: "Orientación para la vida real",
                  desc: "Exploramos carreras tech, cómo armar un portfolio para la universidad y qué habilidades buscan las empresas colombianas e internacionales.",
                },
                {
                  label: "Contenido para su edad",
                  desc: "Clases 1 a 1, exclusivas para chicos de 13 a 17 años. Ritmo, ejemplos y dinámica pensados para adolescentes.",
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
              InnovaKids vs. otras opciones en Colombia
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
                    ["Clases en vivo con profesor", "Sí", "Videos pregrabados"],
                    ["IA generativa y Vibe Coding", "Sí", "Scratch o robótica básica"],
                    ["Portfolio publicado al terminar", "Sí", "Solo certificado"],
                    ["Orientación vocacional tech", "Sí", "No incluida"],
                    ["Clase de prueba gratis", "Sí", "Pago anticipado completo"],
                    ["Precio", "$297 USD (aprox. $1.245.000 COP)", "$350-700 USD"],
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
              Agenda una clase gratis para tu hijo adolescente
            </h2>
            <p className="text-[#5A5751] text-lg mb-8">
              Sin compromiso. Prueba el método, conoce al profesor y decide si es lo que tu hijo necesita.
              Respondemos por WhatsApp en menos de 2 horas.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#C96342]/50 hover:border-[#C96342] text-[#B5522F] font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <Link href="/co" className="text-[#5A5751] hover:text-white underline text-sm transition-colors">
              Volver a la página principal de InnovaKids Colombia
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
