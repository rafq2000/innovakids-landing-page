import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { CheckCircle, Target, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Adolescentes (13-17 años) en México | InnovaKids",
  description:
    "1ª clase gratis. Adolescentes mexicanos crean apps, videojuegos y portfolio digital con Inteligencia Artificial. Clases en vivo, máx 5 alumnos. Preparación universitaria y primer empleo tech.",
  keywords: [
    "curso ia adolescentes méxico",
    "inteligencia artificial para adolescentes cdmx",
    "curso ia jóvenes guadalajara",
    "programación para adolescentes méxico",
    "vibe coding adolescentes",
    "curso tecnología adolescentes monterrey",
    "portfolio digital adolescentes ia",
    "preparación universitaria ia méxico",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/mx/curso-ia-adolescentes",
  },
  openGraph: {
    title: "Curso de IA para Adolescentes (13-17) en México | InnovaKids",
    description:
      "Tu hijo adolescente crea apps reales, videojuegos y un portfolio profesional con IA en 5 semanas. Clases en vivo, grupos de 5. 1ª clase gratis.",
    url: "https://www.innovakidslatam.com/mx/curso-ia-adolescentes",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Adolescentes mexicanos creando proyectos con IA - InnovaKids",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function CursoIAAdolescentesMexico() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] text-white py-20 md:py-28 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block bg-[#C96342]/10 text-[#B5522F] text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Diseñado para jóvenes de 13 a 17 años en México
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Curso de Inteligencia Artificial para Adolescentes en México
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] max-w-3xl mx-auto mb-8">
              En CDMX, Guadalajara, Monterrey y todo México, los adolescentes que dominan IA
              tienen ventaja en la universidad y en su primer empleo. Tu hijo construye apps
              reales, no solo consume pantallas.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20México"
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
              ¿Por qué los adolescentes mexicanos necesitan aprender IA ahora?
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              El mercado laboral en México está cambiando. Las universidades como el Tec de Monterrey,
              la UNAM y la UAM ya piden competencias digitales desde el ingreso.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#C96342]/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#B5522F]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Preparación universitaria</h3>
                <p className="text-gray-600">
                  Un portfolio de proyectos con IA les da ventaja en admisiones del Tec, UNAM o universidades
                  en el extranjero. Es la nueva carta de presentación.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Primer empleo tech</h3>
                <p className="text-gray-600">
                  México es hub tecnológico de LATAM. Empresas como Rappi, Kavak y Bitso buscan talento joven
                  con experiencia real en IA. Tu hijo empieza a construir eso hoy.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Portfolio digital profesional</h3>
                <p className="text-gray-600">
                  Al terminar el curso, tu hijo tiene una colección de proyectos publicados: apps funcionales,
                  videojuegos y creaciones con IA que puede mostrar en LinkedIn o GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué aprenderán */}
        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Qué aprenden los adolescentes en InnovaKids?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Vibe Coding: crear apps completas usando IA como copiloto (sin memorizar sintaxis)",
                "Desarrollo de videojuegos con motores profesionales y asistencia de IA",
                "Generación de música, arte y contenido con herramientas de IA generativa",
                "Pensamiento computacional aplicado a problemas reales",
                "Construcción de un portfolio digital profesional",
                "Orientación vocacional tech: ingeniería, diseño, emprendimiento digital",
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
              No es lo mismo un curso para niños de 8 años que para un joven de 15
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Nuestro programa para adolescentes tiene mayor profundidad técnica, proyectos más complejos
              y un componente de orientación vocacional que no existe en cursos infantiles.
            </p>
            <div className="space-y-4">
              {[
                {
                  label: "Proyectos más complejos",
                  desc: "Apps funcionales con bases de datos, APIs reales y deploy en producción. No solo arrastrar bloques.",
                },
                {
                  label: "Profundidad técnica",
                  desc: "Entienden cómo funcionan los modelos de IA, prompt engineering avanzado y Vibe Coding con herramientas profesionales.",
                },
                {
                  label: "Orientación vocacional",
                  desc: "Descubren si quieren ser ingenieros, diseñadores, emprendedores o creadores de contenido tech.",
                },
                {
                  label: "Grupos exclusivos por edad",
                  desc: "Máximo 5 alumnos por grupo, todos entre 13 y 17 años. Nadie se aburre, nadie se queda atrás.",
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
              InnovaKids vs. otras opciones en México
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
                    ["Grupos reducidos (máx 5)", "Si", "15-30 alumnos"],
                    ["Clases en vivo con profesor", "Si", "Videos pregrabados"],
                    ["Enfoque en IA generativa 2026", "Si", "Scratch / robótica"],
                    ["Portfolio profesional al terminar", "Si", "Certificado genérico"],
                    ["Orientación vocacional tech", "Si", "No incluida"],
                    ["Vibe Coding (apps reales con IA)", "Si", "No disponible"],
                    ["1ª clase gratis sin compromiso", "Si", "Pago anticipado"],
                    ["Precio", "$267 USD (aprox. $5,400 MXN)", "$300-600 USD"],
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
              Tu hijo puede probar una clase gratis, sin compromiso
            </h2>
            <p className="text-[#5A5751] text-lg mb-8">
              Agenda una reunión informativa o escríbenos por WhatsApp. Respondemos en menos de 2 horas.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20México"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#C96342]/50 hover:border-[#C96342] text-[#B5522F] font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <Link href="/mx" className="text-[#5A5751] hover:text-white underline text-sm transition-colors">
              Volver a la página principal de InnovaKids México
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
