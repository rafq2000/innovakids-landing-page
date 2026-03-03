import { generateHreflangs } from "@/lib/seo-config";
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Clock, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños en México (Guía 2026)",
  description:
    "Guía Completa: Lo que todo padre mexicano debe saber antes de inscribir a su hijo en un curso de IA. Precios en pesos, herramientas, seguridad y mejores opciones.",
  keywords: [
    "guia cursos ia niños mexico",
    "mejores cursos programacion niños mexico",
    "comparativa escuelas ia mexico",
    "consejos padres tecnologia mexico",
  ],
  openGraph: {
    title: "Cursos de IA para Niños en México (Guía 2026)",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en México.",
    url: "https://www.innovakidslatam.com/mx/blog/cursos-inteligencia-artificial-ninos-mexico-guia",
    locale: "es_MX",
    type: "article",
    siteName: "Blog InnovaKids México",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/mx/blog/cursos-inteligencia-artificial-ninos-mexico-guia",
      languages: generateHreflangs("home")
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cursos de Inteligencia Artificial para Niños México: Guía Completa 2026",
  description:
    "Guía completa con comparativas, precios, herramientas y todo lo que necesitas saber sobre cursos de IA para niños en México.",
  author: {
    "@type": "Organization",
    name: "InnovaKids",
  },
  publisher: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  datePublished: "2026-01-01",
  dateModified: "2026-01-08",
}

export default function GuiaCompletaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HEADER ARTÍCULO */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-background to-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="bg-[#4DD0E1]/20 text-[#4DD0E1] px-3 py-1 rounded-full">Guía</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> Marzo 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 15 min lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Vibe Coding en México: La Guía Completa para Padres 2026
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Todo lo que necesitas saber antes de inscribir a tu hijo en un curso de IA. Comparativas, precios,
              herramientas y consejos de expertos.
            </p>

            {/* Table of Contents */}
            <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
              <h2 className="text-lg font-bold text-white mb-4">📋 Contenido de esta guía:</h2>
              <ol className="space-y-2 text-gray-300">
                <li>
                  <a href="#que-es-ia" className="hover:text-[#4DD0E1]">
                    1. ¿Qué es la IA para niños?
                  </a>
                </li>
                <li>
                  <a href="#por-que-aprender" className="hover:text-[#4DD0E1]">
                    2. ¿Por qué tu hijo debe aprender IA en 2026?
                  </a>
                </li>
                <li>
                  <a href="#herramientas" className="hover:text-[#4DD0E1]">
                    3. Mejores herramientas de IA que aprenderán
                  </a>
                </li>
                <li>
                  <a href="#edad" className="hover:text-[#4DD0E1]">
                    4. ¿A qué edad pueden empezar?
                  </a>
                </li>
                <li>
                  <a href="#comparativa" className="hover:text-[#4DD0E1]">
                    5. Comparativa: 5 mejores programas en México
                  </a>
                </li>
                <li>
                  <a href="#primer-proyecto" className="hover:text-[#4DD0E1]">
                    6. Qué proyecto crearán en el primer mes
                  </a>
                </li>
                <li>
                  <a href="#inversion" className="hover:text-[#4DD0E1]">
                    7. Inversión y retorno educativo
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#4DD0E1]">
                    8. Preguntas frecuentes
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CONTENIDO DEL ARTÍCULO */}
        <article className="py-16 bg-[#0a1628]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg prose-invert max-w-none">
              {/* SECCIÓN 1 */}
              <section id="que-es-ia" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">1. ¿Qué es el Vibe Coding?</h2>
                <p className="text-gray-300 mb-4">
                  El <strong className="text-white">Vibe Coding</strong> no es solo escribir líneas de código. Es programar usando el lenguaje natural y la Inteligencia Artificial.
                  Antes, para crear un videojuego, un niño necesitaba memorizar sintaxis compleja. Hoy, un niño en México puede decirle a la IA:
                  "Crea un juego donde un gato salte obstáculos", y la IA genera el código base.
                </p>
                <p className="text-gray-300 mb-4">
                  No se trata solo de <strong className="text-white">consumir</strong> tecnología, sino de darle el poder de <strong className="text-white">crear</strong> cualquier cosa que imagine en cuestión de minutos.
                </p>
              </section>

              {/* SECCIÓN 2 */}
              <section id="por-que-aprender" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">2. ¿Por Qué Tu Hijo Debe Aprender IA en 2026?</h2>
                <p className="text-gray-300 mb-4">
                  El Foro Económico Mundial estima que el{" "}
                  <strong className="text-white">85% de los trabajos de 2030</strong>
                  aún no existen. La mayoría de estos nuevos empleos requerirán habilidades relacionadas con la IA.
                </p>
                <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 my-6">
                  <h3 className="text-xl font-bold text-[#4DD0E1] mb-4">5 razones para empezar ahora:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      ✅ <strong className="text-white">Ventaja competitiva:</strong> Los niños que dominen IA tendrán
                      más oportunidades laborales
                    </li>
                    <li>
                      ✅ <strong className="text-white">Pensamiento crítico:</strong> Aprenden a cuestionar y verificar
                      información
                    </li>
                    <li>
                      ✅ <strong className="text-white">Creatividad amplificada:</strong> La IA potencia su imaginación,
                      no la reemplaza
                    </li>
                    <li>
                      ✅ <strong className="text-white">Resolución de problemas:</strong> Desarrollan habilidades para
                      resolver desafíos complejos
                    </li>
                    <li>
                      ✅ <strong className="text-white">Uso responsable:</strong> Entienden los límites éticos de la
                      tecnología
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECCIÓN 3 */}
              <section id="herramientas" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">3. Mejores Herramientas de IA que Aprenderán</h2>

                <div className="space-y-6">
                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">🤖 ChatGPT para Niños</h3>
                    <p className="text-gray-300">
                      La herramienta más popular del mundo. Los niños aprenden a hacer preguntas efectivas, crear
                      historias, resolver problemas matemáticos y hasta programar con ayuda de la IA.
                    </p>
                  </div>

                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">🎨 Midjourney y DALL-E</h3>
                    <p className="text-gray-300">
                      Generación de imágenes con IA. Los niños pueden crear ilustraciones profesionales, diseñar
                      personajes para sus historias o generar arte para proyectos escolares.
                    </p>
                  </div>

                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">🎵 Suno AI para Música</h3>
                    <p className="text-gray-300">
                      Composición musical con inteligencia artificial. Pueden crear canciones originales con letra,
                      melodía y hasta voces generadas por IA.
                    </p>
                  </div>

                  <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">📱 Cursor y Replit</h3>
                    <p className="text-gray-300">
                      Programación asistida por IA. Los niños pueden crear aplicaciones funcionales sin necesidad de
                      conocimientos previos de código.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECCIÓN 4 */}
              <section id="edad" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">4. ¿A Qué Edad Pueden Empezar?</h2>
                <p className="text-gray-300 mb-4">
                  La edad ideal para comenzar con cursos de IA es entre los{" "}
                  <strong className="text-white">8 y 14 años</strong>. En este rango, los niños ya tienen las
                  habilidades de lectura y escritura necesarias, pero aún están en una etapa de alta plasticidad
                  cerebral y curiosidad natural.
                </p>
                <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 my-6">
                  <h3 className="text-xl font-bold text-[#4DD0E1] mb-4">Por grupos de edad:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <strong className="text-white">8-10 años:</strong> Enfoque en creatividad, arte con IA, historias
                      y juegos simples
                    </li>
                    <li>
                      <strong className="text-white">11-14 años:</strong> Pueden abordar proyectos más complejos como
                      apps, automatizaciones y startups
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECCIÓN 5 - COMPARATIVA */}
              <section id="comparativa" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  5. Comparativa: Mejores Cursos de IA para Niños en México
                </h2>
                <p className="text-gray-300 mb-6">
                  Analizamos los principales programas disponibles para familias mexicanas en 2026:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0f2744] border-b border-white/10">
                        <th className="text-left py-4 px-4 text-white">Programa</th>
                        <th className="text-center py-4 px-4 text-white">Precio</th>
                        <th className="text-center py-4 px-4 text-white">Clases</th>
                        <th className="text-center py-4 px-4 text-white">Grupo</th>
                        <th className="text-center py-4 px-4 text-white">Garantía</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-white/5 bg-[#4DD0E1]/10">
                        <td className="py-4 px-4 text-[#4DD0E1] font-bold">InnovaKids ⭐</td>
                        <td className="py-4 px-4 text-center text-white">$267 USD</td>
                        <td className="py-4 px-4 text-center text-white">10</td>
                        <td className="py-4 px-4 text-center text-white">5 niños</td>
                        <td className="py-4 px-4 text-center text-green-400">10 días</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-gray-300">Codingal</td>
                        <td className="py-4 px-4 text-center text-gray-400">$300+ USD</td>
                        <td className="py-4 px-4 text-center text-gray-400">Variado</td>
                        <td className="py-4 px-4 text-center text-gray-400">1:1</td>
                        <td className="py-4 px-4 text-center text-gray-400">No</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-gray-300">Platzi Kids</td>
                        <td className="py-4 px-4 text-center text-gray-400">$267 USD/año</td>
                        <td className="py-4 px-4 text-center text-gray-400">Grabadas</td>
                        <td className="py-4 px-4 text-center text-gray-400">N/A</td>
                        <td className="py-4 px-4 text-center text-gray-400">14 días</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-gray-300">Código Kids MX</td>
                        <td className="py-4 px-4 text-center text-gray-400">$150 USD</td>
                        <td className="py-4 px-4 text-center text-gray-400">8</td>
                        <td className="py-4 px-4 text-center text-gray-400">15 niños</td>
                        <td className="py-4 px-4 text-center text-gray-400">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#4DD0E1]/10 border border-[#4DD0E1]/30 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-bold text-white mb-3">¿Por qué InnovaKids destaca?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✅ Grupos más pequeños (5 vs 15-30 de la competencia)</li>
                    <li>✅ 10 proyectos reales que pueden mostrar a familia y amigos</li>
                    <li>✅ Garantía de 10 días con devolución completa</li>
                    <li>✅ Soporte WhatsApp 24/7 en español</li>
                  </ul>
                </div>
              </section>

              {/* CTA INTERMEDIO */}
              <div className="bg-gradient-to-r from-[#0f2744] to-[#1a3a5c] rounded-2xl p-8 border border-[#4DD0E1]/30 text-center my-12">
                <h3 className="text-2xl font-bold text-white mb-4">¿Quieres ver si InnovaKids es para tu hijo?</h3>
                <p className="text-gray-300 mb-6">Agenda una evaluación gratuita de 30 minutos. Sin compromiso.</p>
                <Link href="/#sesion-estrategica">
                  <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-8 py-6 text-lg font-bold rounded-full">
                    Agendar Evaluación Gratis
                  </Button>
                </Link>
              </div>

              {/* SECCIÓN 6 */}
              <section id="primer-proyecto" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">6. Qué Proyecto Crearán en el Primer Mes</h2>
                <p className="text-gray-300 mb-4">
                  En InnovaKids, los niños no esperan semanas para crear algo real. Desde la primera clase ya están
                  construyendo proyectos tangibles.
                </p>
                <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 my-6">
                  <h3 className="text-xl font-bold text-[#4DD0E1] mb-4">Primeras 4 clases:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <strong className="text-white">Clase 1-2:</strong> Vibe IA & Art (Chatbots y Comics)
                    </li>
                    <li>
                      <strong className="text-white">Clase 3-4:</strong> Vibe Music & Voice (Canciones y Voz)
                    </li>
                    <li>
                      <strong className="text-white">Clase 5-6:</strong> Vibe Cinema & Gen Art (Cine con IA)
                    </li>
                    <li>
                      <strong className="text-white">Clase 7-8:</strong> Vibe Coding & Study (Programación y Estudio)
                    </li>
                    <li>
                      <strong className="text-white">Clase 9-10:</strong> Cyber Ethics & The Vibe Project
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECCIÓN 7 */}
              <section id="inversion" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">7. Inversión y Retorno Educativo</h2>
                <p className="text-gray-300 mb-4">
                  Un curso de IA para niños en México tiene un rango de precios entre $150 y $500 USD. La diferencia
                  está en la calidad, el tamaño del grupo y el soporte.
                </p>
                <div className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10 my-6">
                  <h3 className="text-xl font-bold text-[#4DD0E1] mb-4">
                    ¿Qué obtiene tu hijo por $267 USD en InnovaKids?
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>✅ 10 clases en vivo de 60 minutos cada una</li>
                    <li>✅ Grupos de máximo 5 niños (atención personalizada real)</li>
                    <li>✅ 10 proyectos completos para su portfolio</li>
                    <li>✅ Acceso de por vida a grabaciones</li>
                    <li>✅ Certificado oficial internacional</li>
                    <li>✅ Garantía de 10 días (devolución completa)</li>
                  </ul>
                </div>
              </section>

              {/* SECCIÓN 8 - FAQ */}
              <section id="faq" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">8. Preguntas Frecuentes</h2>

                <div className="space-y-4">
                  {[
                    {
                      q: "¿Mi hijo necesita saber programar?",
                      a: "No. El curso está diseñado para principiantes absolutos. Solo necesita saber leer, escribir y tener curiosidad.",
                    },
                    {
                      q: "¿Las clases son en vivo o grabadas?",
                      a: "Son 100% en vivo con un instructor. Además, todas quedan grabadas por si necesitas verlas después.",
                    },
                    {
                      q: "¿Qué equipo necesita?",
                      a: "Una computadora o laptop con conexión a internet. No se necesita software especial.",
                    },
                    {
                      q: "¿Puedo pagar en pesos mexicanos?",
                      a: "Sí, aceptamos OXXO, Mercado Pago, tarjeta y PayPal. El precio en MXN es aproximadamente $3,600.",
                    },
                    {
                      q: "¿Qué pasa si mi hijo falta a una clase?",
                      a: "Todas las clases quedan grabadas y puede ver la grabación. También puede coordinar recuperación con el instructor.",
                    },
                    {
                      q: "¿Cómo funciona la garantía?",
                      a: "Si después de las primeras clases no quedas satisfecho, te devolvemos el 100% sin preguntas. Tienes 10 días.",
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-[#0f2744]/50 rounded-xl p-6 border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                      <p className="text-gray-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>

        {/* CTA FINAL */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listo para dar el primer paso?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Agenda una evaluación gratuita y descubre si InnovaKids es ideal para tu hijo.
            </p>

            <Link href="/#sesion-estrategica">
              <Button className="bg-white hover:bg-gray-100 text-[#0a1628] px-16 py-8 text-2xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all">
                🎯 Agendar Evaluación Gratuita
              </Button>
            </Link>

            <p className="text-gray-500 text-sm mt-6">Sin compromiso • Solo 30 minutos • Cupos limitados</p>
          </div>
        </section>

        {/* Links SEO */}
        <section className="py-8 bg-[#0a1628] border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/mx" className="text-[#4DD0E1] hover:underline">
                InnovaKids México
              </Link>
              <Link href="/mx/cursos-ia-ninos-mexico" className="text-[#4DD0E1] hover:underline">
                Cursos IA Niños México
              </Link>
              <Link href="/mx/clases-ia-ninos-cdmx" className="text-[#4DD0E1] hover:underline">
                Clases IA CDMX
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
