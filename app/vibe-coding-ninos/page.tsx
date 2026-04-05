import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vibe Coding para Niños — Aprende a Crear con IA Hablando | InnovaKids",
  description:
    "Descubre el Vibe Coding: la revolución donde los niños crean apps, juegos y música simplemente hablando con la IA. Curso online para niños de 8-17 años.",
  keywords: [
    "vibe coding niños",
    "vibe coding para niños",
    "programar con ia hablando",
    "crear apps con ia niños",
    "vibe coding curso",
    "programación ia niños",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/vibe-coding-ninos",
  },
  openGraph: {
    title: "Vibe Coding para Niños — Aprende a Crear con IA Hablando | InnovaKids",
    description:
      "Descubre el Vibe Coding: la revolución donde los niños crean apps, juegos y música simplemente hablando con la IA.",
    url: "https://www.innovakidslatam.com/vibe-coding-ninos",
    siteName: "InnovaKids",
    type: "website",
  },
}

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Vibe Coding para Niños — InnovaKids",
  description:
    "Curso online donde niños de 8-17 años aprenden Vibe Coding: la nueva forma de programar hablando con Inteligencia Artificial.",
  provider: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  educationalLevel: "Beginner",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    suggestedMinAge: 8,
    suggestedMaxAge: 17,
  },
  inLanguage: "es",
  offers: {
    "@type": "Offer",
    price: "297",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.innovakidslatam.com/precios",
  },
}

export default function VibeCodingNinosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Vibe Coding para Niños:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Crea con IA Sin Escribir Código
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              La revolución educativa donde los niños crean apps, videojuegos y música simplemente <strong className="text-white">hablando con la IA</strong>.
              No necesitan saber programar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/30">
                <p className="text-cyan-400 font-semibold">8-17 años</p>
              </div>
              <div className="bg-purple-500/10 px-6 py-3 rounded-full border border-purple-500/30">
                <p className="text-purple-400 font-semibold">100% Online</p>
              </div>
              <div className="bg-pink-500/10 px-6 py-3 rounded-full border border-pink-500/30">
                <p className="text-pink-400 font-semibold">Sin Código</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Vibe Coding */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              ¿Qué es el Vibe Coding?
            </h2>
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                El <strong className="text-white">Vibe Coding</strong> es la nueva forma de crear tecnología usando
                lenguaje natural. En lugar de escribir líneas de código complicadas, los niños le dicen a la IA
                qué quieren crear y la IA lo construye por ellos.
              </p>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Imagina que tu hijo dice: <em className="text-cyan-400">&quot;Quiero un juego donde un dinosaurio salta
                obstáculos y gana puntos&quot;</em>. Con Vibe Coding, la IA entiende esa instrucción y genera
                el código automáticamente. Tu hijo aprende a pensar lógicamente, a diseñar soluciones
                y a comunicarse con la tecnología, sin frustrarse con sintaxis complicada.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                El término fue popularizado por Andrej Karpathy, ex-director de IA en Tesla, y representa
                el futuro de cómo los humanos interactuarán con la tecnología. Los niños que dominen
                el Vibe Coding hoy serán los creadores del mañana.
              </p>
            </div>
          </div>
        </section>

        {/* Why Vibe Coding is the Future */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Por Qué el Vibe Coding Es el Futuro
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-white mb-4">Pensamiento Lógico sin Barreras</h3>
                <p className="text-gray-300">
                  Los niños desarrollan pensamiento computacional sin la frustración de memorizar sintaxis.
                  Se enfocan en resolver problemas, no en escribir punto y coma.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Resultados desde el Día 1</h3>
                <p className="text-gray-300">
                  Con programación tradicional, un niño tarda semanas en crear algo funcional.
                  Con Vibe Coding, en su primera hora ya tienen un juego o app funcionando.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-4">La Habilidad del Futuro</h3>
                <p className="text-gray-300">
                  Gartner predice que para 2028, el 75% del software se creará con asistencia de IA.
                  Los &quot;vibe coders&quot; serán los profesionales más demandados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How InnovaKids Teaches It */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Cómo Enseñamos Vibe Coding en InnovaKids
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Aprenden a Comunicarse con la IA</h3>
                  <p className="text-gray-300 text-lg">
                    Empiezan dominando el arte del <strong>Prompt Engineering</strong>: cómo dar instrucciones claras
                    y específicas a la IA para obtener exactamente lo que quieren. Esta habilidad les servirá
                    en cualquier herramienta de IA presente y futura.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Crean Proyectos Reales con IA</h3>
                  <p className="text-gray-300 text-lg">
                    Usando herramientas como ChatGPT, Claude y Replit, los niños crean videojuegos funcionales,
                    aplicaciones web y herramientas útiles solo describiendo lo que quieren. Ven resultados
                    instantáneos que los motivan a seguir aprendiendo.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-xl font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Entienden lo que Hay Detrás</h3>
                  <p className="text-gray-300 text-lg">
                    No solo usan la IA como magia. Aprenden los conceptos fundamentales de programación
                    y lógica que están detrás del código generado. Así pueden depurar, mejorar y personalizar
                    sus creaciones.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xl font-bold text-white">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Presentan su Portafolio</h3>
                  <p className="text-gray-300 text-lg">
                    Al final del curso, cada estudiante tiene un portafolio digital con todos sus proyectos:
                    juegos, apps, música generada con IA, arte digital y más. Es su carta de presentación
                    para el futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Kids Create */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Lo Que Crean Nuestros Alumnos con Vibe Coding
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Videojuegos Funcionales",
                  desc: "Juegos tipo plataforma, RPG y puzzles que funcionan en el navegador. Creados describiendo la mecánica en español.",
                  color: "border-cyan-500/30",
                },
                {
                  title: "Aplicaciones Web",
                  desc: "Calculadoras, to-do lists, apps de quiz y herramientas útiles. Todo sin escribir una línea de código manual.",
                  color: "border-purple-500/30",
                },
                {
                  title: "Música Original con IA",
                  desc: "Canciones completas con letra, melodía e instrumentación. Los niños describen el estilo y la IA compone.",
                  color: "border-pink-500/30",
                },
                {
                  title: "Arte y Cómics Digitales",
                  desc: "Ilustraciones profesionales, cómics con personajes consistentes y narrativas visuales completas.",
                  color: "border-cyan-500/30",
                },
              ].map((item) => (
                <div key={item.title} className={`bg-white/5 p-8 rounded-2xl border ${item.color}`}>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vibe Coding vs Traditional */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Vibe Coding vs Programación Tradicional
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cyan-900/20 p-8 rounded-2xl border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Vibe Coding</h3>
                <ul className="space-y-4">
                  {[
                    "Resultados en minutos",
                    "Usa lenguaje natural (español)",
                    "Motivación desde el día 1",
                    "Enfoque en creatividad y diseño",
                    "Prepara para el futuro con IA",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-3 text-lg">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-gray-400 mb-6 text-center">Programación Tradicional</h3>
                <ul className="space-y-4">
                  {[
                    "Semanas para ver resultados",
                    "Requiere memorizar sintaxis",
                    "Frustración frecuente al inicio",
                    "Enfoque en código, no en ideas",
                    "Curva de aprendizaje empinada",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-gray-400">
                      <span className="text-gray-500 mr-3 text-lg">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/cursos/inteligencia-artificial" className="text-cyan-400 hover:text-cyan-300 underline">
                Curso completo de IA
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/curso-creacion-videojuegos-ninos" className="text-cyan-400 hover:text-cyan-300 underline">
                Curso de videojuegos con IA
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-12 rounded-3xl border-2 border-cyan-500/50">
              <h2 className="text-3xl font-bold text-white mb-4">Tu Hijo Puede Ser un Vibe Coder</h2>
              <p className="text-xl text-gray-300 mb-8">
                Agenda una clase gratis y descubre cómo tu hijo puede crear tecnología hablando con la IA.
                Sin experiencia previa necesaria.
              </p>
              <Link href="/clase-gratis">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg px-10 py-6 h-auto"
                >
                  Agendar Clase Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
