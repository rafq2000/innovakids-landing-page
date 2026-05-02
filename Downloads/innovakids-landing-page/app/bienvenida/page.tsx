import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Download,
  PartyPopper,
  FileText,
  Calendar,
  BookOpen,
  Shield,
  Sparkles,
  Clock,
  Users,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kit de Bienvenida · Cohorte Mayo 2026 | InnovaKids",
  description:
    "Descarga tu Kit de Bienvenida completo: carta, guía de padres, calendario, reglamento, manual de IA segura, 200 prompts y más. Todo para empezar con confianza el 16 de mayo.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/bienvenida",
  },
  openGraph: {
    title: "Kit de Bienvenida · Cohorte Mayo 2026 | InnovaKids",
    description:
      "Descarga tu Kit de Bienvenida completo para el Programa Vibe Explorer. 8 documentos para empezar el 16 de mayo con todo lo que necesitas.",
    url: "https://www.innovakidslatam.com/bienvenida",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
  },
  robots: { index: false, follow: false },
}

const KIT_DOCS = [
  {
    num: "01",
    title: "Carta de Bienvenida",
    desc: "El primer documento del kit. Mensaje directo a la familia con los tres pasos para esta semana y el resumen de la inscripción.",
    icon: PartyPopper,
    file: "01-carta-bienvenida.pdf",
    label: "Para la familia",
    highlight: false,
  },
  {
    num: "02",
    title: "Guía de Padres",
    desc: "Todo lo que necesitas saber para acompañar a tu hijo durante las 5 semanas: qué hacer, qué evitar, cómo ayudar sin frenar.",
    icon: BookOpen,
    file: "02-guia-padres.pdf",
    label: "Lectura obligatoria",
    highlight: true,
  },
  {
    num: "03",
    title: "Calendario Mayo 2026",
    desc: "Las 10 fechas del curso con temas, objetivos y lo que tu hijo aprende en cada clase. Sábados y miércoles, 16 mayo – 17 junio.",
    icon: Calendar,
    file: "03-calendario-mayo-2026.pdf",
    label: "Imprimir y pegar",
    highlight: false,
  },
  {
    num: "04",
    title: "Reglamento del Curso",
    desc: "Normas de convivencia, política de asistencia, uso ético de IA, garantía de 10 días y todo lo que necesitan saber antes de empezar.",
    icon: Shield,
    file: "04-reglamento.pdf",
    label: "Leer antes del 16 mayo",
    highlight: false,
  },
  {
    num: "05",
    title: "Manual de IA Segura en Casa",
    desc: "Guía completa para que los padres entiendan qué herramientas de IA son seguras, cómo supervisar sin sobreproteger y qué conversaciones tener.",
    icon: Shield,
    file: "05-manual-ia-segura-en-casa.pdf",
    label: "Para toda la familia",
    highlight: false,
  },
  {
    num: "06",
    title: "200 Prompts para Tareas",
    desc: "200 instrucciones listas para usar con ChatGPT, Gemini y otras IAs. Organizadas por asignatura y nivel. Úsalas desde hoy.",
    icon: Sparkles,
    file: "06-200-prompts-tareas.pdf",
    label: "Recurso permanente",
    highlight: true,
  },
  {
    num: "07",
    title: "Cápsula del Tiempo",
    desc: "Un documento especial que tu hijo completa antes de empezar el curso y abre en la Gala de Graduación. Un regalo para su yo futuro.",
    icon: Clock,
    file: "07-capsula-del-tiempo.pdf",
    label: "Completar antes del 16 mayo",
    highlight: false,
  },
  {
    num: "B2",
    title: "Kit del Padre Moderno",
    desc: "Guía exclusiva para padres: por qué la IA es el nuevo inglés, cómo acompañar sin frenar, guiones de conversación reales y las herramientas del curso explicadas.",
    icon: Users,
    file: "kit-padre-moderno.pdf",
    label: "Bono exclusivo",
    highlight: true,
  },
]

export default function BienvenidaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">

            {/* Hero */}
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <PartyPopper className="w-4 h-4" />
                Cohorte Mayo 2026 · Inicio: Sábado 16 de mayo
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
                ¡Bienvenidos al Programa<br className="hidden md:block" />
                <span className="text-primary"> Vibe Explorer!</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Aquí tienes tu Kit de Bienvenida completo. Descarga cada documento, léelos antes del <strong className="text-foreground">16 de mayo</strong> y llega listo para la primera clase.
              </p>
            </div>

            {/* Descargar todo */}
            <div className="bg-primary rounded-xl p-6 md:p-8 shadow-xl mb-10 md:mb-14 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                Descargar todos los documentos
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-base mb-5">
                8 documentos · Kit completo de bienvenida para la Cohorte Mayo 2026
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {KIT_DOCS.map((doc) => (
                  <a
                    key={doc.file}
                    href={`/downloads/${doc.file}`}
                    download
                    className="hidden"
                    aria-hidden
                  />
                ))}
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-bold text-base h-12 px-8"
                  asChild
                >
                  <a href="/downloads/01-carta-bienvenida.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Empezar por la Carta de Bienvenida
                  </a>
                </Button>
              </div>
            </div>

            {/* Grid de documentos */}
            <div className="mb-10 md:mb-14">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Tu Kit — 8 documentos
              </h2>
              <div className="grid gap-4 md:gap-5">
                {KIT_DOCS.map((doc) => {
                  const Icon = doc.icon
                  return (
                    <div
                      key={doc.file}
                      className={`bg-card border rounded-xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm transition-shadow hover:shadow-md ${
                        doc.highlight ? "border-primary/40 bg-primary/5" : ""
                      }`}
                    >
                      {/* Número + icono */}
                      <div className="flex-shrink-0 flex items-center gap-3 sm:gap-0 sm:flex-col sm:w-16 sm:text-center">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${doc.highlight ? "bg-primary/15" : "bg-muted"}`}>
                          <Icon className={`w-5 h-5 ${doc.highlight ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground font-bold tracking-widest uppercase">
                          Doc.{doc.num}
                        </span>
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-semibold text-base md:text-lg">{doc.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            doc.highlight
                              ? "bg-primary/15 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {doc.label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{doc.desc}</p>
                      </div>

                      {/* Botón descarga */}
                      <div className="flex-shrink-0">
                        <Button
                          size="sm"
                          variant={doc.highlight ? "default" : "outline"}
                          className="w-full sm:w-auto gap-2"
                          asChild
                        >
                          <a href={`/downloads/${doc.file}`} download>
                            <Download className="w-4 h-4" />
                            Descargar PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tres cosas antes del 16 mayo */}
            <div className="bg-card border rounded-xl p-6 md:p-8 mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-bold mb-5">
                3 cosas que hacer antes del <span className="text-primary">16 de mayo</span>
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold text-primary/30 font-serif italic">01</div>
                  <h4 className="font-semibold">Preparar el espacio</h4>
                  <p className="text-sm text-muted-foreground">Rincón tranquilo, auriculares y conexión estable. Revisa los requisitos técnicos en el Doc. 04 (Reglamento).</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold text-primary/30 font-serif italic">02</div>
                  <h4 className="font-semibold">Completar la Cápsula del Tiempo</h4>
                  <p className="text-sm text-muted-foreground">Tu hijo la llenará antes de empezar y la abrirá en la Gala de Graduación. Descarga el Doc. 07 y complétalo junto a él.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold text-primary/30 font-serif italic">03</div>
                  <h4 className="font-semibold">Guardar nuestros contactos</h4>
                  <p className="text-sm text-muted-foreground">WhatsApp +56 9 6475 4219 · Discord discord.gg/innovakids · Email hola@innovakidslatam.com</p>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="border border-primary/20 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-primary/5">
              <MessageCircle className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold mb-1">¿Tienes alguna duda?</p>
                <p className="text-sm text-muted-foreground">
                  Escríbenos por WhatsApp al <strong className="text-foreground">+56 9 6475 4219</strong> o a <strong className="text-foreground">hola@innovakidslatam.com</strong>. Respondemos en menos de 2 horas en días hábiles.
                </p>
              </div>
              <Button size="sm" variant="outline" asChild className="flex-shrink-0">
                <a href="https://wa.me/56964754219" target="_blank" rel="noopener noreferrer">
                  Escribir por WhatsApp
                </a>
              </Button>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
