import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curso de IA para Niños (8-17) — Clases Online en Vivo | InnovaKids",
  description:
    "El mejor curso de inteligencia artificial para niños y adolescentes. Tu hijo crea apps, arte y videojuegos con IA en 5 semanas. Máx 5 alumnos por grupo. Prueba gratis.",
  openGraph: {
    title: "Curso de IA para Niños — Clases Online en Vivo | InnovaKids",
    description: "Tu hijo aprende a crear videojuegos y apps con Inteligencia Artificial. Grupos de 5 alumnos. 527 graduados. Prueba una clase gratis.",
  },
}

export default function CursoIANinos() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Curso de IA para Niños: La Educación del Futuro Empieza Aquí
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 text-center mb-12">
                El mejor <strong>curso de inteligencia artificial para niños</strong> de 8 a 14 años en Latinoamérica.
                Aprende ChatGPT, programación con IA y crea proyectos reales en grupos de solo 5 alumnos.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/30 text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-2">Grupos de 5</h3>
                  <p className="text-gray-300 text-sm">Atención 100% personalizada</p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30 text-center">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">10 Clases</h3>
                  <p className="text-gray-300 text-sm">Programa completo de IA</p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 p-6 rounded-xl border border-pink-500/30 text-center">
                  <div className="text-5xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-white mb-2">Acceso de por Vida</h3>
                  <p className="text-gray-300 text-sm">Materiales y actualizaciones</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                ¿Por Qué Este es el Mejor Curso de IA para Niños?
              </h2>

              <p className="text-gray-300">
                Nuestro <strong>curso de inteligencia artificial para niños</strong> se diferencia de otros programas
                por su enfoque práctico y personalizado. Mientras otros cursos tienen 20, 30 o más estudiantes por
                clase, nosotros mantenemos grupos ultra reducidos de solo 5 alumnos.
              </p>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-cyan-500/20 my-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Lo que Incluye el Curso</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>10 clases en vivo de 60 minutos (grupos de 5 máximo)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Acceso de por vida a grabaciones y materiales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Comunidad privada de estudiantes y padres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Certificado oficial de finalización</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Kit de prompts y recursos exclusivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Demo Day final para presentar proyectos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Garantía 100% de satisfacción o devolución total</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Programa del Curso de IA para Niños</h2>

              <div className="space-y-4 my-8">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-400 mb-2">Clase 1: Vibe IA (Configuración)</h4>
                  <p className="text-gray-300 text-sm">Tu nuevo superpoder: Configurando ChatGPT como copiloto</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-400 mb-2">Clase 2: Prompt Engineering</h4>
                  <p className="text-gray-300 text-sm">El arte de hablar con máquinas para que te obedezcan</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-400 mb-2">Clase 3: Vibe Voice</h4>
                  <p className="text-gray-300 text-sm">Clonación de voz y narración con IA + Traducción</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-400 mb-2">Clase 4: Vibe Music</h4>
                  <p className="text-gray-300 text-sm">Composición musical: crea tu primer hit con IA</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-400 mb-2">Clase 5: Generative Art I</h4>
                  <p className="text-gray-300 text-sm">De la imaginación a la imagen: Midjourney y DALL-E</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-400 mb-2">Clase 6: Generative Art II</h4>
                  <p className="text-gray-300 text-sm">Storytelling visual consistente para cómics y cuentos</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-400 mb-2">Clase 7: Vibe Coding</h4>
                  <p className="text-gray-300 text-sm">Programación de videojuegos (Roblox/Minecraft vibes) con IA</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-400 mb-2">Clase 8: Vibe Study</h4>
                  <p className="text-gray-300 text-sm">Convierte la IA en tu tutor personal para matemáticas y ciencias</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-400 mb-2">Clase 9: Cyber Ethics</h4>
                  <p className="text-gray-300 text-sm">Deepfakes y seguridad digital: navegando el futuro</p>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-bold text-cyan-400 mb-2">Clase 10: The Vibe Project</h4>
                  <p className="text-gray-300 text-sm">Presentación final de identidad digital y portafolio</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-xl border-2 border-purple-500/50 my-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">💎 Oferta Especial de Lanzamiento</h3>
                <p className="text-xl mb-6">
                  <span className="text-gray-400 line-through">$497 USD</span>{" "}
                  <span className="text-5xl font-bold text-cyan-400">$267 USD</span>
                </p>
                <p className="text-sm text-gray-300 mb-6">Precio Vibe Edition 2026 • Oferta por tiempo limitado</p>
                <p className="text-lg text-yellow-300 mb-8">
                  ⏰ Curso inicia la semana del 30 de Marzo del 2026 • Cupos limitados
                </p>
                <Link href="/#sesion-estrategica">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg px-8 py-6 h-auto"
                  >
                    Agendar Sesión Diagnóstico GRATIS
                  </Button>
                </Link>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Disponible en Toda Latinoamérica</h2>

              <p className="text-gray-300">
                Nuestro <strong>curso de IA para niños</strong> está disponible 100% online para estudiantes en:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                {[
                  "🇲🇽 México",
                  "🇨🇴 Colombia",
                  "🇦🇷 Argentina",
                  "🇨🇱 Chile",
                  "🇵🇪 Perú",
                  "🇪🇨 Ecuador",
                  "🇺🇾 Uruguay",
                  "🇨🇷 Costa Rica",
                  "🇵🇦 Panamá",
                ].map((country) => (
                  <div key={country} className="bg-gray-800/50 px-4 py-3 rounded-lg text-center border border-gray-700">
                    {country}
                  </div>
                ))}
              </div>

              <div className="bg-cyan-900/20 p-6 rounded-xl border border-cyan-500/30 my-8">
                <h3 className="text-xl font-bold text-white mb-4 text-center">🎁 Garantía Sin Riesgo</h3>
                <p className="text-gray-300 text-center">
                  Si después de la primera clase sientes que el curso no es lo que esperabas, te devolvemos el 100% de
                  tu inversión. Sin preguntas, sin complicaciones.
                </p>
              </div>

              <div className="text-center my-12">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg px-8 py-4"
                  >
                    Ver Toda la Información del Curso
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
