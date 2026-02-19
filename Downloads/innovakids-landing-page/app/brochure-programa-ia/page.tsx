import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield } from "lucide-react"

export const metadata = {
  title: "Programa de IA para Niños | Temario Completo y Precio | InnovaKids",
  description:
    "Descubre el temario completo del curso de Inteligencia Artificial para niños. Aprende a crear videojuegos, apps y más. ¡Reserva tu cupo hoy!",
}

export default function BrochurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 -left-48 animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
            <Image
              src="/logo-innovakids.png"
              alt="Innovakids"
              width={240}
              height={80}
              className="relative mx-auto drop-shadow-2xl h-16 w-auto"
            />
          </div>

          <div className="space-y-4">
            <Badge className="bg-cyan-400 text-slate-900 hover:bg-cyan-300 text-sm px-6 py-2 font-bold shadow-lg shadow-cyan-500/50">
              PROGRAMA EXCLUSIVO - ADMISIÓN LIMITADA
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Programa Acelerador
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                de Inteligencia Artificial
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Formando a los Líderes Tecnológicos del Mañana</p>
          </div>
        </header>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { number: "94%", label: "Mejora académica comprobada" },
            { number: "100%", label: "Proyectos reales creados" },
            { number: "5", label: "Alumnos máximo por grupo elite" },
          ].map((stat, idx) => (
            <Card
              key={idx}
              className="bg-white/5 border-cyan-500/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="pt-6 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Logistics */}
          <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
                <span className="text-3xl">📅</span>
                Logística del Curso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: "🚀", label: "Inicio", value: "Semana del 9 de Marzo" },
                { icon: "💻", label: "Plataforma", value: "Clases en vivo vía Zoom" },
                { icon: "⏱️", label: "Duración", value: "5 semanas (5 clases)" },
                { icon: "📆", label: "Frecuencia", value: "1 clase por semana (60 min c/u)" },
                { icon: "👦", label: "Edad", value: "8 a 14 años" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="font-bold text-white">{item.label}:</span> {item.value}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
                <span className="text-3xl">🎁</span>
                ¿Qué incluye tu inversión?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: "🎓", text: "Programa Acelerador completo" },
                { icon: "👥", text: "Acceso de por vida a Comunidad Privada" },
                { icon: "📚", text: "Biblioteca de grabaciones de por vida" },
                { icon: "🧠", text: "Kit de Prompts Infalibles para la escuela" },
                { icon: "🏆", text: 'Certificado Digital "Creador de IA"' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Curriculum */}
        {/* Curriculum Level 1 */}
        <Card className="bg-white/5 border-purple-500/20 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-purple-400 flex items-center gap-3">
              <span className="text-4xl">🚀</span>
              Nivel 1: Vibe Explorer (10 Clases)
            </CardTitle>
            <p className="text-slate-300 text-lg mt-4">El programa base obligatorio para dominar la IA. Para Niños y Adolescentes (8-17 años).</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: "1", title: "Vibe IA: Tu nuevo superpoder", desc: "Configurando ChatGPT como tu copiloto creativo." },
                { num: "2", title: "Prompt Engineering", desc: "El arte de hablar con máquinas para que te obedezcan." },
                { num: "3", title: "Vibe Voice", desc: "Clonando voces y creando narradores sintéticos." },
                { num: "4", title: "Vibe Music", desc: "Componiendo hits musicales (letra+ritmo) con IA." },
                { num: "5", title: "Generative Art I", desc: "De la imaginación a la pantalla (Midjourney/DALL-E)." },
                { num: "6", title: "Generative Art II", desc: "Creando universos visuales coherentes." },
                { num: "7", title: "Vibe Coding", desc: "Pensamiento computacional construyendo sistemas interactivos." },
                { num: "8", title: "Vibe Study", desc: "Memoria, comprensión y estudio eficiente con IA." },
                { num: "9", title: "Cyber Ethics", desc: "Seguridad digital y uso responsable de la IA." },
                { num: "10", title: "The Vibe Project", desc: "Proyecto final integrando tu Identidad Digital." },
              ].map((clase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg p-5 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl font-bold text-purple-400">#{clase.num}</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">{clase.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{clase.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Level 2 Teaser - Specializations */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Nivel 2: Especializaciones <span className="text-cyan-400">(Próximamente)</span>
          </h2>
          <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
            Una vez completado el Nivel 1, tu hijo podrá desbloquear estas especializaciones avanzadas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/20 hover:border-pink-500/50 transition-all">
              <CardHeader>
                <div className="text-4xl mb-4">🎬</div>
                <CardTitle className="text-xl text-pink-400">Vibe Creators</CardTitle>
                <p className="text-slate-300 text-sm">Cine y Creación de Contenido</p>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• Tu Primera Película IA</li>
                  <li>• Shorts Súper Virales</li>
                  <li>• Edición de Director</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500/50 transition-all">
              <CardHeader>
                <div className="text-4xl mb-4">🎮</div>
                <CardTitle className="text-xl text-green-400">Vibe Gamers</CardTitle>
                <p className="text-slate-300 text-sm">Programación de Videojuegos</p>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• Crea tu Héroe y Villano</li>
                  <li>• Construye tu Juego</li>
                  <li>• Publica tu Juego</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20 hover:border-yellow-500/50 transition-all">
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle className="text-xl text-yellow-400">Vibe Enterprise</CardTitle>
                <p className="text-slate-300 text-sm">Emprendimiento y Startups</p>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• Descubre tu Idea</li>
                  <li>• Tu Tienda Digital</li>
                  <li>• Lanza tu Negocio</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Table */}
        <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-cyan-400 flex items-center gap-3">
              <span className="text-4xl">💰</span>
              Inversión en el Futuro de tu Hijo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col justify-between p-8 bg-gradient-to-b from-purple-900/40 to-slate-900/40 border border-purple-500/30 rounded-2xl backdrop-blur-xl relative overflow-hidden hover:border-purple-500/50 transition-all shadow-2xl shadow-purple-900/20">
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                  ADMISIÓN 2026
                </div>

                <div className="text-center mb-8">
                  <p className="text-purple-300 font-bold tracking-wider text-sm uppercase mb-2">
                    Nivel 1 (Obligatorio)
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-2">Vibe Explorer</h3>
                  <p className="text-slate-400 text-sm">El fundamento para todo futuro creador.</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-6xl font-black text-white">$267</span>
                    <div className="text-left">
                      <span className="block text-xl text-purple-400 font-bold">USD</span>
                      <span className="block text-slate-500 text-xs">Pago Único</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mt-2">
                    Precio por Módulo Completo (10 Semanas)
                  </p>
                </div>

                <ul className="text-slate-300 text-sm space-y-4 mb-10 text-left max-w-xs mx-auto">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>10 Clases en Vivo (Fundamentos)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>Certificado Digital "Vibe Explorer"</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>Acceso a 15+ Herramientas IA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>Desbloquea Nivel 2 (Especializaciones)</span>
                  </li>
                </ul>

                <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-8 text-xl rounded-xl shadow-lg shadow-purple-900/50">
                  <Link href="/pagar?option=explorer">Inscribir Nivel 1 ($267)</Link>
                </Button>

                <p className="mt-4 text-center text-xs text-slate-500">
                  *Garantía de Satisfacción de 10 días incluida.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" /> Garantía de Satisfacción de 10 días
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Highlight Box */}
        <div className="mb-16 p-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-l-4 border-cyan-400 rounded-r-2xl backdrop-blur-xl">
          <p className="text-xl text-white font-semibold flex items-center gap-4">
            <span className="text-4xl">⚡</span>
            <span>No es un curso más. Es una mentoría personalizada para líderes del mañana.</span>
          </p>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-cyan-400 to-blue-500 border-0 shadow-2xl shadow-cyan-500/50">
          <CardContent className="text-center py-12 space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">¿Tu Hijo Está Listo?</h2>
            <p className="text-slate-900 text-lg max-w-2xl mx-auto">
              Solo aceptamos 5 alumnos por grupo para garantizar resultados. El primer paso es una breve entrevista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform rounded-full"
              >
                <Link href="/#sesion-estrategica">Agendar Entrevista de Admisión</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-slate-900 border-slate-900 text-lg px-8 py-6 backdrop-blur-sm"
              >
                <Link href="https://wa.me/56964754219?text=Hola%2C%20quiero%20más%20información%20sobre%20el%20Programa%20Acelerador%20de%20IA">
                  Consultar por WhatsApp
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-400 text-sm space-y-2">
          <p>© 2026 Innovakids Latam. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-2">
            <span>📧</span> contacto@innovakidslatam.com
            <span className="mx-2">|</span>
            <span>📱</span> +56 9 6475 4219
          </p>
        </footer>
      </div>
    </div>
  )
}
