import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { CheckCircle, Target, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Adolescentes (13-17 años) en Perú | InnovaKids",
  description:
    "1ª clase gratis. Adolescentes peruanos crean apps, videojuegos y portfolio digital con Inteligencia Artificial. Clases en vivo, 1 a 1. Educación tech de clase mundial desde Lima, Arequipa o cualquier ciudad.",
  keywords: [
    "curso ia adolescentes perú",
    "inteligencia artificial para adolescentes lima",
    "curso ia jóvenes arequipa",
    "programación para adolescentes perú",
    "vibe coding adolescentes perú",
    "curso tecnología adolescentes trujillo",
    "portfolio digital adolescentes ia",
    "preparación universitaria ia perú",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/pe/curso-ia-adolescentes",
  },
  openGraph: {
    title: "Curso de IA para Adolescentes (13-17) en Perú | InnovaKids",
    description:
      "Tu hijo adolescente crea apps, videojuegos y un portfolio profesional con IA en 5 semanas. Clases en vivo, 1 a 1. 1ª clase gratis.",
    url: "https://www.innovakidslatam.com/pe/curso-ia-adolescentes",
    type: "website",
    locale: "es_PE",
    images: [
      {
        url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Adolescentes peruanos creando proyectos con IA - InnovaKids",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function CursoIAAdolescentesPeru() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] text-white py-20 md:py-28 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block bg-[#C96342]/10 text-[#B5522F] text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Formación tech para jóvenes de 13 a 17 años en Perú
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Curso de Inteligencia Artificial para Adolescentes en Perú
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] max-w-3xl mx-auto mb-8">
              Desde Lima, Arequipa, Trujillo o Cusco, tu hijo accede a educación tecnológica
              de clase mundial. Los adolescentes que dominan IA hoy tendrán las mejores oportunidades
              en la universidad y en el mercado laboral peruano e internacional.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20Perú"
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
              ¿Por qué los adolescentes peruanos necesitan aprender IA ahora?
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Perú vive una transformación digital acelerada. Universidades como la PUCP, la UPC
              y la Universidad de Lima integran IA en sus planes de estudio. Los jóvenes preparados
              tienen ventaja desde el primer día.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#C96342]/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#B5522F]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Ingreso universitario con ventaja</h3>
                <p className="text-gray-600">
                  Un portfolio de proyectos con IA demuestra capacidades que van más allá de las notas.
                  Universidades peruanas y becas internacionales valoran la experiencia práctica.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Oportunidades laborales globales</h3>
                <p className="text-gray-600">
                  El trabajo remoto en tech permite que un joven peruano trabaje para empresas de
                  Silicon Valley, Europa o cualquier parte del mundo. La IA es la habilidad más demandada.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Crear, no solo consumir</h3>
                <p className="text-gray-600">
                  En vez de pasar horas en redes sociales, tu hijo aprende a crear tecnología.
                  Desarrolla apps, videojuegos y soluciones que resuelven problemas reales de su comunidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué aprenderán */}
        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Qué aprenderá tu hijo adolescente?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Vibe Coding: crear aplicaciones funcionales usando IA como copiloto de programación",
                "Desarrollo de videojuegos completos con motores profesionales asistidos por IA",
                "Generación de arte, música y contenido con herramientas de IA de última generación",
                "Pensamiento computacional para resolver desafíos del mundo real",
                "Portfolio digital profesional publicado y accesible para universidades o empleadores",
                "Orientación vocacional tech: ingeniería de software, ciencia de datos, diseño UX o emprendimiento",
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
              Un curso pensado para jóvenes, no adaptado de uno infantil
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Los adolescentes necesitan desafíos reales. No simplificamos el contenido:
              lo hacemos relevante para su etapa de vida.
            </p>
            <div className="space-y-4">
              {[
                {
                  label: "Complejidad técnica real",
                  desc: "Trabajan con APIs, bases de datos y deploy en producción. Construyen apps que funcionan de verdad, no solo prototipos de papel.",
                },
                {
                  label: "Herramientas que usan los profesionales",
                  desc: "Prompt engineering avanzado, Vibe Coding con asistentes de IA reales y flujos de trabajo que replican entornos laborales tech.",
                },
                {
                  label: "Conexión con el futuro profesional",
                  desc: "Cada proyecto incluye reflexión sobre carreras tech, opciones universitarias en Perú y el mundo, y habilidades que demanda el mercado.",
                },
                {
                  label: "Contenido apropiado para su edad",
                  desc: "Clases 1 a 1, con ejemplos y conversación pensados para adolescentes de 13 a 17 años.",
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
              InnovaKids vs. otras opciones en Perú
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
                    ["Clases 1 a 1, individuales", "Sí", "10-25 alumnos"],
                    ["Clases en vivo con profesor", "Sí", "Videos pregrabados"],
                    ["IA generativa y Vibe Coding 2026", "Sí", "Scratch o HTML básico"],
                    ["Portfolio profesional al terminar", "Sí", "Diploma genérico"],
                    ["Orientación vocacional incluida", "Sí", "No"],
                    ["Clase de prueba gratis", "Sí", "Cobro desde el día 1"],
                    ["Precio", "$297 USD (aprox. S/ 1.000)", "$200-500 USD"],
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
              Prueba una clase gratis y decide con confianza
            </h2>
            <p className="text-[#5A5751] text-lg mb-8">
              Sin compromiso ni pago anticipado. Tu hijo prueba el método, tú conoces al profesor.
              Escríbenos por WhatsApp y te respondemos en menos de 2 horas.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20Perú"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#C96342]/50 hover:border-[#C96342] text-[#B5522F] font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <Link href="/pe" className="text-[#5A5751] hover:text-white underline text-sm transition-colors">
              Volver a la página principal de InnovaKids Perú
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
