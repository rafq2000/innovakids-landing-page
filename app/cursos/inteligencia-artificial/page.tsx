import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { generateHreflangs } from "@/lib/seo-config"
import { Check, Shield, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Niños y Adolescentes 8-17 años | InnovaKids",
  description:
    "El mejor curso de Inteligencia Artificial para niños y adolescentes (8-17). Tu hijo crea proyectos reales con IA en 5 semanas. Grupos de 5 alumnos. Inicio semana del 18 de mayo.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/cursos/inteligencia-artificial",
    languages: generateHreflangs("global", "/cursos/inteligencia-artificial"),
  },
  openGraph: {
    title: "Curso de IA para Niños y Adolescentes · InnovaKids",
    description:
      "Tu hijo crea música, arte, historias y proyectos reales con IA en 5 semanas. 10 clases en vivo, grupos de 5. Inicio semana del 18 de mayo.",
    url: "https://www.innovakidslatam.com/cursos/inteligencia-artificial",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Curso de Inteligencia Artificial para Niños y Adolescentes 8-17 años",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de IA para Niños 8-17 años | InnovaKids",
    description: "Tu hijo crea con IA en 5 semanas. Grupos de 5. Inicio semana del 18 de mayo.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
  robots: { index: true, follow: true },
}

const CLASES = [
  { n: "01", titulo: "Vibe IA", desc: "Tu nuevo superpoder: configurando ChatGPT como copiloto personal", color: "border-primary" },
  { n: "02", titulo: "Prompt Engineering", desc: "El arte de hablar con IA para que te entienda exactamente", color: "border-primary" },
  { n: "03", titulo: "Vibe Voice", desc: "Clonación de voz y narración con ElevenLabs · traducción multiidioma", color: "border-primary/60" },
  { n: "04", titulo: "Vibe Music", desc: "Composición musical con Suno: letra, melodía y voces en 30 minutos", color: "border-primary/60" },
  { n: "05", titulo: "Generative Art I", desc: "De la imaginación a la imagen con Polar Bear y Google AI Studio", color: "border-primary/60" },
  { n: "06", titulo: "Generative Art II", desc: "Storytelling visual consistente: cómics, cuentos y narrativas IA", color: "border-primary/40" },
  { n: "07", titulo: "Vibe Coding", desc: "Creación de apps y proyectos interactivos con Manus sin código", color: "border-primary/40" },
  { n: "08", titulo: "Vibe Study", desc: "NotebookLM como tutor personal: convierte cualquier materia en un juego", color: "border-primary/40" },
  { n: "09", titulo: "Cyber Ethics", desc: "Deepfakes, privacidad y cómo navegar la IA con criterio propio", color: "border-primary/30" },
  { n: "10", titulo: "The Vibe Project · Gala", desc: "Presentación del proyecto final ante la familia — Gala de Graduación", color: "border-primary" },
]

const INCLUDES = [
  "10 clases en vivo de 90 min (5 semanas)",
  "Grupos de máximo 5 alumnos",
  "Grabaciones de todas las clases",
  "Kit de Bienvenida completo (8 documentos)",
  "200 prompts para tareas escolares",
  "Comunidad Discord exclusiva cohorte",
  "Certificado Digital Vibe Explorer",
  "Gala de Graduación con presentación del proyecto",
  "Soporte por WhatsApp en días de clase",
  "Garantía de satisfacción de 10 días — 100% devuelto",
]

export default function CursoIANinos() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-16 md:py-24 px-4 border-b">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4">
              Programa Vibe Explorer · Nivel 01
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Curso de IA para Niños y Adolescentes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Tu hijo pasa de usar tecnología a <strong className="text-foreground">crearla</strong>. En 5 semanas construye
              música, arte, historias y un proyecto real con las herramientas de IA más relevantes de 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="font-bold h-13 px-8" asChild>
                <Link href="/#inversion">
                  Reservar cupo — $27 USD hoy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/clase-gratis">Prueba una clase gratis</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b">
          <div className="container mx-auto max-w-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0">
              {[
                { num: "5", label: "Semanas" },
                { num: "10", label: "Clases en vivo" },
                { num: "5", label: "Alumnos por grupo" },
                { num: "8–17", label: "Años de edad" },
              ].map(({ num, label }) => (
                <div key={label} className="py-6 px-4 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{num}</div>
                  <div className="text-xs text-muted-foreground font-mono tracking-wide uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programa */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-sm font-mono tracking-widest uppercase text-primary mb-2">Contenido</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Las 10 clases del programa</h2>
            <p className="text-muted-foreground mb-10">
              Inicio: semana del 18 de mayo · Sábados y miércoles · Término: 17 de junio de 2026
            </p>
            <div className="space-y-3">
              {CLASES.map(({ n, titulo, desc, color }) => (
                <div key={n} className={`flex gap-4 items-start border-l-2 ${color} pl-4 py-3`}>
                  <span className="font-mono text-xs text-muted-foreground pt-1 flex-shrink-0 w-6">{n}</span>
                  <div>
                    <h3 className="font-semibold text-base">{titulo}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incluye */}
        <section className="py-16 px-4 bg-muted/30 border-y">
          <div className="container mx-auto max-w-3xl">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-sm font-mono tracking-widest uppercase text-primary mb-2">Incluido</p>
                <h2 className="text-3xl font-bold mb-6">Todo lo que recibe tu hijo</h2>
                <ul className="space-y-3">
                  {INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-2 border-primary rounded-2xl p-8 text-center">
                <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-3">Precio</p>
                <div className="text-6xl font-bold mb-1">$267</div>
                <div className="text-muted-foreground font-mono text-sm mb-4">USD · pago único</div>
                <p className="text-sm text-muted-foreground mb-6">
                  o 3 cuotas de $89 USD<br />
                  Reserva hoy con solo <strong className="text-primary">$27 USD</strong>
                </p>
                <Button className="w-full font-bold h-12" asChild>
                  <Link href="/#inversion">
                    Reservar cupo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Los $27 se descuentan del total · 100% reembolsables
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Garantía */}
        <section className="py-12 px-4 border-b">
          <div className="container mx-auto max-w-2xl text-center">
            <Shield className="w-9 h-9 text-primary mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">Garantía de 10 días</h2>
            <p className="text-muted-foreground">
              Si durante los primeros 10 días del curso la familia siente que no era lo esperado,
              devolvemos el <strong className="text-foreground">100% del valor pagado</strong> sin ninguna pregunta.
            </p>
          </div>
        </section>

        {/* Herramientas */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-sm font-mono tracking-widest uppercase text-primary mb-2">Herramientas</p>
            <h2 className="text-3xl font-bold mb-6">Lo que tu hijo usará en el curso</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Suno", "ElevenLabs", "Google AI Studio", "Manus", "NotebookLM", "chat.z.ai", "Polar Bear", "ChatGPT"].map((tool) => (
                <div key={tool} className="border rounded-lg px-4 py-3 text-center text-sm font-medium">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-muted/30 border-t">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">¿Listo para reservar el cupo?</h2>
            <p className="text-muted-foreground mb-6">
              Inicio semana del 18 de mayo · Cupos limitados a 5 alumnos por grupo
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="font-bold" asChild>
                <Link href="/#inversion">
                  Reservar cupo — $27 USD hoy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/56964754219" target="_blank" rel="noopener noreferrer">
                  Preguntar por WhatsApp
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground">
              <Link href="/precios" className="hover:text-foreground underline underline-offset-2">Ver precios detallados</Link>
              <Link href="/resultados" className="hover:text-foreground underline underline-offset-2">Ver resultados de alumnos</Link>
              <Link href="/clase-gratis" className="hover:text-foreground underline underline-offset-2">Clase de prueba gratis</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
