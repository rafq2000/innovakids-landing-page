import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Download,
  Calendar,
  MessageCircle,
  BookOpen,
  Shield,
  Sparkles,
  Clock,
  Users,
  PartyPopper,
  ArrowRight,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Mi Inscripcion · InnovaKids",
  description:
    "Descarga tu Kit de Bienvenida, selecciona horarios y revisa los proximos pasos de tu inscripcion en InnovaKids.",
  robots: { index: false, follow: false },
}

const KIT_DOCS = [
  {
    num: "01",
    title: "Carta de Bienvenida",
    desc: "Mensaje directo a la familia con los tres pasos para está semana y el resumen de la inscripcion.",
    icon: PartyPopper,
    file: "01-carta-bienvenida.pdf",
    label: "Para la familia",
    highlight: false,
  },
  {
    num: "02",
    title: "Guia de Padres",
    desc: "Todo lo que necesitas saber para acompanar a tu hijo durante las 5 semanas.",
    icon: BookOpen,
    file: "02-guia-padres.pdf",
    label: "Lectura obligatoria",
    highlight: true,
  },
  {
    num: "03",
    title: "Calendario Junio 2026",
    desc: "Las 10 fechas del curso con temas y objetivos. Sabados y miercoles, 8 junio - 8 julio.",
    icon: Calendar,
    file: "03-calendario-mayo-2026.pdf",
    label: "Imprimir y pegar",
    highlight: false,
  },
  {
    num: "04",
    title: "Reglamento del Curso",
    desc: "Normas de convivencia, politica de asistencia, uso etico de IA y garantia de 10 dias.",
    icon: Shield,
    file: "04-reglamento.pdf",
    label: "Leer antes del 8 junio",
    highlight: false,
  },
  {
    num: "05",
    title: "Manual de IA Segura en Casa",
    desc: "Guia para padres: herramientas seguras, como supervisar sin sobreproteger.",
    icon: Shield,
    file: "05-manual-ia-segura-en-casa.pdf",
    label: "Para toda la familia",
    highlight: false,
  },
  {
    num: "06",
    title: "200 Prompts para Tareas",
    desc: "200 instrucciones listas para usar con ChatGPT, Gemini y otras IAs. Organizadas por asignatura.",
    icon: Sparkles,
    file: "06-200-prompts-tareas.pdf",
    label: "Recurso permanente",
    highlight: true,
  },
  {
    num: "07",
    title: "Capsula del Tiempo",
    desc: "Tu hijo la completa antes de empezar y la abre en la Gala de Graduacion.",
    icon: Clock,
    file: "07-capsula-del-tiempo.pdf",
    label: "Completar antes del 8 junio",
    highlight: false,
  },
  {
    num: "B2",
    title: "Kit del Padre Moderno",
    desc: "Guia exclusiva: por que la IA es el nuevo ingles, como acompanar sin frenar, guiones de conversacion.",
    icon: Users,
    file: "kit-padre-moderno.pdf",
    label: "Bono exclusivo",
    highlight: true,
  },
]

const STEPS = [
  {
    num: "01",
    title: "Selecciona tus horarios",
    desc: "Minimo 3 dias con 2 horarios cada uno. Es obligatorio para asignarte grupo.",
    href: "/mis-horarios",
    cta: "Elegir horarios",
    icon: Calendar,
    priority: true,
  },
  {
    num: "02",
    title: "Descarga tu Kit de Bienvenida",
    desc: "8 documentos esenciales: carta, guia, calendario, reglamento, prompts y mas.",
    href: "#kit",
    cta: "Ver documentos",
    icon: Download,
    priority: false,
  },
  {
    num: "03",
    title: "Escribenos por WhatsApp",
    desc: "Al +56 9 2245 0492 para confirmar tu inscripcion o resolver cualquier duda.",
    href: "https://wa.me/56922450492?text=Hola%2C%20acabo%20de%20inscribirme%20en%20InnovaKids",
    cta: "Abrir WhatsApp",
    icon: MessageCircle,
    priority: false,
  },
]

export default function MiInscripcionPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C96342]" aria-hidden />
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                Tu inscripcion
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              Todo lo que necesitas en <em className="italic text-[#C96342]">un solo lugar</em>.
            </h1>
            <p className="mt-6 text-lg text-[#1A1714]/70 leading-relaxed max-w-[56ch]">
              Aqui tienes los mismos recursos que te enviamos por correo. Descarga tus documentos,
              selecciona horarios y contactanos directamente.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 bg-[#F2EDE0] border border-[#1A1714]/10 px-4 py-2.5 text-sm text-[#1A1714]/60">
              <Mail className="w-4 h-4" />
              No te llego el correo? Aqui tienes todo lo que necesitas.
            </div>
          </div>
        </section>

        {/* Proximos pasos */}
        <section className="pb-16">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#C96342]" aria-hidden />
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                Proximos pasos
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {STEPS.map((step) => {
                const Icon = step.icon
                const isExternal = step.href.startsWith("http")
                return (
                  <a
                    key={step.num}
                    href={step.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`group border p-6 transition-all hover:shadow-md ${
                      step.priority
                        ? "border-[#C96342] bg-[#FFF3ED]"
                        : "border-[#1A1714]/12 bg-[#F2EDE0]/40 hover:border-[#C96342]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] tracking-[0.24em] uppercase text-[#C96342] font-semibold">
                        {step.num}
                      </span>
                      <Icon className="w-5 h-5 text-[#C96342]" />
                    </div>
                    <h3
                      className="text-xl text-[#1A1714] mb-2 group-hover:text-[#C96342] transition-colors"
                      style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#1A1714]/60 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#C96342]">
                      {step.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Kit de Bienvenida */}
        <section id="kit" className="pb-16">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="border-t border-[#1A1714]/12 pt-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                  Kit de Bienvenida
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl leading-[1.05] tracking-tight text-[#1A1714] mb-3"
                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
              >
                8 documentos para empezar con confianza.
              </h2>
              <p className="text-[15px] text-[#1A1714]/60 leading-relaxed max-w-[52ch] mb-10">
                Leelos antes del 29 de junio. Cada uno tiene un proposito especifico para
                que tu hijo/a y tu familia lleguen preparados.
              </p>

              <div className="grid gap-4">
                {KIT_DOCS.map((doc) => {
                  const Icon = doc.icon
                  return (
                    <div
                      key={doc.file}
                      className={`border p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-shadow hover:shadow-sm ${
                        doc.highlight
                          ? "border-[#C96342]/30 bg-[#FFF3ED]/50"
                          : "border-[#1A1714]/10 bg-white/50"
                      }`}
                    >
                      <div className="flex-shrink-0 flex items-center gap-3 sm:gap-0 sm:flex-col sm:w-14 sm:text-center">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            doc.highlight ? "bg-[#C96342]/10" : "bg-[#F2EDE0]"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              doc.highlight ? "text-[#C96342]" : "text-[#1A1714]/50"
                            }`}
                          />
                        </div>
                        <span className="font-mono text-[10px] text-[#1A1714]/40 font-bold tracking-widest uppercase">
                          {doc.num}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-semibold text-base">{doc.title}</h3>
                          <span
                            className={`text-[10px] px-2 py-0.5 font-medium ${
                              doc.highlight
                                ? "bg-[#C96342]/10 text-[#C96342]"
                                : "bg-[#F2EDE0] text-[#1A1714]/50"
                            }`}
                          >
                            {doc.label}
                          </span>
                        </div>
                        <p className="text-sm text-[#1A1714]/60 leading-relaxed">{doc.desc}</p>
                      </div>

                      <div className="flex-shrink-0">
                        <Button
                          size="sm"
                          variant={doc.highlight ? "default" : "outline"}
                          className={`w-full sm:w-auto gap-2 ${
                            doc.highlight
                              ? "bg-[#C96342] hover:bg-[#9A4428] text-white"
                              : "border-[#1A1714]/20 hover:border-[#C96342] text-[#1A1714]"
                          }`}
                          asChild
                        >
                          <a href={`/downloads/${doc.file}`} download>
                            <Download className="w-4 h-4" />
                            Descargar
                          </a>
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Garantia + Contacto */}
        <section className="pb-20">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Garantia */}
              <div className="border border-green-300/50 bg-green-50/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-700" />
                  <h3
                    className="text-lg font-semibold text-green-900"
                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                  >
                    Garantia de 10 dias
                  </h3>
                </div>
                <p className="text-sm text-green-800/70 leading-relaxed">
                  Si no te convence el programa, te devolvemos el 100% de tu pago.
                  Sin preguntas, sin complicaciones.
                </p>
              </div>

              {/* Contacto */}
              <div className="border border-[#1A1714]/12 bg-[#F2EDE0]/40 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-[#C96342]" />
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                  >
                    Tienes alguna duda?
                  </h3>
                </div>
                <p className="text-sm text-[#1A1714]/60 leading-relaxed mb-4">
                  Escribenos por WhatsApp al <strong className="text-[#1A1714]">+56 9 2245 0492</strong> o
                  a <strong className="text-[#1A1714]">hola@innovakidslatam.com</strong>.
                  Respondemos en menos de 2 horas en dias habiles.
                </p>
                <Button size="sm" variant="outline" className="border-[#1A1714]/20 hover:border-[#C96342]" asChild>
                  <a
                    href="https://wa.me/56922450492?text=Hola%2C%20tengo%20una%20duda%20sobre%20mi%20inscripcion"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Escribir por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
