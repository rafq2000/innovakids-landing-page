import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { CheckCircle, Target, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Adolescentes (13-17 años) en Chile | InnovaKids",
  description:
    "1ª clase gratis. Adolescentes chilenos crean apps, videojuegos y portfolio profesional con Inteligencia Artificial. Clases en vivo, 1 a 1. Preparación para la PSU/PAES, universidad y primer empleo tech.",
  keywords: [
    "curso ia adolescentes chile",
    "inteligencia artificial para adolescentes santiago",
    "curso ia jóvenes viña del mar",
    "programación para adolescentes chile",
    "vibe coding adolescentes chile",
    "curso tecnología adolescentes concepción",
    "portfolio digital adolescentes ia",
    "preparación universitaria ia chile",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/cl/curso-ia-adolescentes",
  },
  openGraph: {
    title: "Curso de IA para Adolescentes (13-17) en Chile | InnovaKids",
    description:
      "Tu hijo adolescente crea apps reales, videojuegos y un portfolio profesional con IA en 5 semanas. Clases en vivo, 1 a 1. 1ª clase gratis.",
    url: "https://www.innovakidslatam.com/cl/curso-ia-adolescentes",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Adolescentes chilenos creando proyectos con IA - InnovaKids",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function CursoIAAdolescentesChile() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[#2F2F2C] to-[#1a1510] text-white py-20 md:py-28 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block bg-[#C96342]/10 text-[#B5522F] text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Programa diseñado para jóvenes de 13 a 17 años en Chile
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Curso de Inteligencia Artificial para Adolescentes en Chile
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] max-w-3xl mx-auto mb-8">
              En Santiago, Viña del Mar, Concepción o La Serena, los adolescentes chilenos
              que aprenden IA hoy llegan a la universidad y al mundo laboral con una ventaja
              que no se consigue en el colegio. Tu hijo crea tecnología real, no solo la consume.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20Chile"
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
              ¿Por qué los adolescentes chilenos necesitan aprender IA ahora?
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Chile lidera la transformación digital en LATAM. Las universidades como la UC, la Chile,
              la UDD y la UAI ya incorporan IA en sus mallas. Las empresas tech en Santiago buscan
              talento que no existe. Tu hijo puede ser parte de esa generación.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#C96342]/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#B5522F]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Admisión universitaria con portfolio</h3>
                <p className="text-gray-600">
                  La PAES mide conocimiento, pero las mejores universidades buscan más. Un portfolio
                  con proyectos de IA demuestra capacidades que ningún puntaje puede reflejar.
                  Ideal para postulaciones y becas.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Primer empleo tech en Chile</h3>
                <p className="text-gray-600">
                  NotCo, Cornershop, Buk y cientos de startups chilenas buscan talento joven con
                  experiencia real en IA. Un adolescente con portfolio y habilidades de Vibe Coding
                  tiene la puerta abierta.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Habilidades que el colegio no enseña</h3>
                <p className="text-gray-600">
                  El currículum escolar chileno aún no incluye IA. Los adolescentes que aprenden
                  por su cuenta o con programas especializados como InnovaKids llegan con años de ventaja
                  frente a sus compañeros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué aprenderán */}
        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              ¿Qué aprende tu hijo adolescente en InnovaKids?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Vibe Coding: crear apps funcionales con IA como copiloto, sin memorizar sintaxis",
                "Desarrollo de videojuegos completos con motores profesionales y asistencia de IA",
                "Creación de música, arte y contenido digital con herramientas de IA generativa",
                "Pensamiento computacional para abordar problemas complejos de forma estructurada",
                "Construcción de un portfolio digital profesional publicado en la web",
                "Orientación vocacional: ingeniería informática, ciencia de datos, diseño UX, emprendimiento tech",
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
              Un programa distinto al de niños de 8 años
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Tu hijo de 14 o 16 años necesita proyectos de verdad, no juegos infantiles.
              Nuestro track para adolescentes tiene la profundidad técnica y la relevancia
              vocacional que los jóvenes chilenos necesitan.
            </p>
            <div className="space-y-4">
              {[
                {
                  label: "Proyectos con complejidad real",
                  desc: "Apps con bases de datos, APIs, autenticación y deploy en servidores reales. Nada de arrastrar bloques de colores ni ejercicios simplificados.",
                },
                {
                  label: "Profundidad técnica profesional",
                  desc: "Prompt engineering avanzado, entendimiento de cómo funcionan los modelos de IA, y Vibe Coding con herramientas que usan los desarrolladores en empresas chilenas.",
                },
                {
                  label: "Conexión con el mercado laboral chileno",
                  desc: "Cada módulo conecta con oportunidades reales: startups, empresas tech, trabajo remoto internacional y carreras universitarias en demanda.",
                },
                {
                  label: "Contenido exclusivo para adolescentes",
                  desc: "Clases 1 a 1 entre 13 y 17 años. El ritmo, los ejemplos y la dinámica son para jóvenes, no para niños pequeños.",
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
              InnovaKids vs. otras opciones en Chile
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
                    ["IA generativa y Vibe Coding 2026", "Sí", "Scratch o robótica"],
                    ["Portfolio profesional publicado", "Sí", "Diploma genérico"],
                    ["Orientación vocacional tech", "Sí", "No incluida"],
                    ["Clase de prueba gratis", "Sí", "Cobro desde el inicio"],
                    ["Precio", "$297 USD (aprox. $278.000 CLP)", "$300-600 USD"],
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
              Prueba una clase gratis, sin compromiso
            </h2>
            <p className="text-[#5A5751] text-lg mb-8">
              Tu hijo prueba el método y tú conoces al profesor. Sin pago anticipado, sin letra chica.
              Agenda una reunión o escríbenos por WhatsApp. Respondemos en menos de 2 horas.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20para%20adolescentes%20en%20Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#C96342]/50 hover:border-[#C96342] text-[#B5522F] font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <Link href="/cl" className="text-[#5A5751] hover:text-white underline text-sm transition-colors">
              Volver a la página principal de InnovaKids Chile
            </Link>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
