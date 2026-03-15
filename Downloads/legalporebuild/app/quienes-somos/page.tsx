import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Shield, Cpu, MessageSquare, Briefcase, Scale } from "lucide-react"
import Link from "next/link"
import { PageAds } from "@/components/page-ads"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Quiénes Somos - LegalPO | Soluciones Legales Gratis con IA",
  description:
    "LegalPO es una empresa LegalTech chilena dedicada a democratizar el acceso a la justicia. Brindamos soluciones y orientación legal 100% gratis a través de Inteligencia Artificial supervisada por expertos.",
  keywords: "quienes somos legalpo, empresa legaltech chile, inteligencia artificial legal, abogado gratis ia",
}

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-800/80 to-slate-900 border-b border-white/5 py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Cpu className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">Empresa LegalTech</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                El Futuro de la Justicia, <br />
                <span className="text-emerald-400">Gratis para Todos.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                <strong>LegalPO</strong> es una empresa tecnológica pionera en Chile que utiliza <strong>Inteligencia Artificial de última generación</strong> para ofrecer orientación legal, cálculo de finiquitos y resolución de dudas de manera 100% gratuita, inmediata y accesible 24/7.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
              <div className="relative bg-slate-800/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">+150k</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Consultas Resueltas</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">0 CLP</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Costo para el Usuario</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Disponibilidad IA</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Leyes Chilenas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12 max-w-5xl mx-auto px-4">
        <PageAds />

        <div className="grid md:grid-cols-2 gap-8 my-16">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <Target className="h-8 w-8 text-emerald-400" />
                Nuestra Misión
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              <p className="text-lg leading-relaxed">
                Derribar las barreras económicas y burocráticas del sistema legal chileno. Creemos firmemente que <strong>nadie debe perder sus derechos por no poder pagar una consulta</strong>. Entrenamos a nuestra IA con toda la jurisprudencia y normativa del país para entregar respuestas precisas y automatizar cálculos complejos gratis.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <Shield className="h-8 w-8 text-blue-400" />
                Respaldo y E-E-A-T
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              <p className="text-lg leading-relaxed">
                Nuestros modelos algorítmicos no operan solos. LegalPO cuenta con la supervisión de un comité de <strong>expertos legales, jueces y abogados habilitados</strong> que auditan permanentemente las respuestas de la IA para garantizar el más alto estándar de <em>Expertise, Autoridad y Confianza (E-E-A-T)</em>, protegiendo tus decisiones.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Por qué IA */}
        <section className="my-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué soluciones a través de Inteligencia Artificial?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">La tecnología nos permite resolver el histórico problema del acceso a la justicia con una eficiencia imposible para un estudio tradicional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 rounded-2xl border border-white/5">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Scale className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Imparcialidad y Precisión</h3>
              <p className="text-slate-400">Nuestra IA no juzga ni tiene sesgos emocionales. Calcula finiquitos, pensiones y analiza contratos basándose puramente en la ley y la matemática.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 rounded-2xl border border-white/5">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Respuesta Inmediata</h3>
              <p className="text-slate-400">Las dudas legales generan angustia y no pueden esperar semanas para una cita. Nuestro motor responde a las 3:00 AM un domingo sin cobrarte un peso.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 rounded-2xl border border-white/5">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Escalabilidad Social</h3>
              <p className="text-slate-400">Gracias al procesamiento centralizado, podemos asesorar a 10,000 trabajadores despedidos simultáneamente. La democratización real de la información pública.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-emerald-500/30 my-16">
          <CardContent className="p-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">¿Tienes una duda legal o necesitas un cálculo?</h3>
            <p className="text-emerald-100/80 mb-8 max-w-2xl mx-auto text-lg">
              Pon a prueba a nuestro motor de IA ahora mismo. Es 100% gratuito, confidencial y sin necesidad de crear cuentas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/herramientas">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
                  Explorar Herramientas IA
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 bg-transparent font-semibold"
                >
                  Hablar con Abogado Virtual
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <PageAds />
      </div>
    </div>
  )
}
