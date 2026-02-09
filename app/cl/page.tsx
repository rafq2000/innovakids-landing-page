import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Users, Clock, Shield, Target, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en Chile | Aprende Creando",
  description:
    "Niños chilenos de 8-14 crean arte, música y apps con IA. Horario Santiago, pago con Webpay o Transferencia. 10 clases en vivo, máx 5 por grupo. Garantía total ⭐",
  keywords: [
    "curso ia niños chile",
    "clases programación ia santiago",
    "taller tecnologia niños providencia",
    "innovakids chile",
    "vibe coding chile",
  ],
  openGraph: {
    description:
      "Formación líder en inteligencia artificial para niños de 8 a 14 años en Chile. Clases online en vivo, grupos de 5 alumnos.",
    url: "https://www.innovakidslatam.com/cl",
    locale: "es_CL",
    siteName: "InnovaKids",
    type: "website",
  },
}

export default function ChileHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en Chile.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const ciudades = [
    {
      name: "Santiago",
      comunas: [
        "Las Condes",
        "Providencia",
        "Vitacura",
        "Ñuñoa",
        "La Reina",
        "Lo Barnechea",
        "Peñalolén",
        "Maipú",
        "Puente Alto",
      ],
    },
    { name: "Viña del Mar", comunas: ["Reñaca", "Recreo", "Miraflores", "Agua Santa"] },
    { name: "Concepción", comunas: ["San Pedro", "Talcahuano", "Hualpén", "Chiguayante"] },
    { name: "Valparaíso", comunas: ["Cerro Alegre", "Cerro Concepción", "Playa Ancha"] },
    { name: "Antofagasta", comunas: ["Centro", "Norte", "Sur"] },
    { name: "Temuco", comunas: ["Centro", "Padre Las Casas", "Labranza"] },
    { name: "La Serena", comunas: ["Centro", "Coquimbo", "La Florida"] },
    { name: "Puerto Montt", comunas: ["Centro", "Puerto Varas", "Pelluco"] },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#D52B1E] via-[#0039A6] to-[#FFFFFF] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇨🇱</span>
              <span className="font-medium">Chile</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Curso de IA y Vibe Coding en Chile
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Clases 100% online en vivo para niños de Santiago, Viña del Mar, Concepción y todas las ciudades de Chile.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#0039A6] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#0039A6]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* CIUDADES CHILE */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Disponible en Todas las Ciudades de Chile
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Clases 100% online en vivo - Tu hijo puede participar desde cualquier lugar
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ciudades.map((ciudad, i) => (
                <div key={i} className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#D52B1E]" />
                    <h3 className="text-xl font-bold">{ciudad.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ciudad.comunas.map((comuna, j) => (
                      <span key={j} className="rounded-full bg-muted px-3 py-1 text-sm">
                        {comuna}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/cl/clases-ia-ninos-santiago"
                className="inline-flex items-center gap-2 rounded-full bg-[#0039A6] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
              >
                Ver Clases en Santiago
              </Link>
            </div>
          </div>
        </section>

        {/* PROGRAMA COMPLETO - HORMOZI VALUE STACK */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#D52B1E]/10 text-[#D52B1E] px-4 py-2 rounded-full text-sm font-bold mb-4">
                PROGRAMA COMPLETO 2025
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Módulo Explorer: 10 Clases Maestras
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Cada módulo consta de 10 clases maestras de 60 minutos. Tu hijo pasará de consumidor a creador.
              </p>
            </div>

            {/* CLASES */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* CLASES 1-5 */}
              <div className="rounded-3xl bg-card border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#0039A6] flex items-center justify-center text-white font-bold">1-5</div>
                  <div>
                    <h3 className="text-xl font-bold">Fundamentos Creativos</h3>
                    <p className="text-sm text-muted-foreground">Generativa, Prompts y Creatividad</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { clase: "1", nombre: "Vibe IA", desc: "Tu nuevo superpoder (Configuración)" },
                    { clase: "2", nombre: "Prompt Engineering", desc: "El arte de hablar con máquinas" },
                    { clase: "3", nombre: "Vibe Voice", desc: "Clonación de voz y narración" },
                    { clase: "4", nombre: "Vibe Music", desc: "Composición musical con IA" },
                    { clase: "5", nombre: "Generative Art I", desc: "De la imaginación a la imagen" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="h-6 w-6 rounded-full bg-[#D52B1E]/20 text-[#D52B1E] text-xs flex items-center justify-center font-bold shrink-0">{item.clase}</span>
                      <div>
                        <span className="font-semibold">{item.nombre}</span>
                        <span className="text-muted-foreground"> - {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CLASES 6-10 */}
              <div className="rounded-3xl bg-card border border-[#D52B1E]/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#D52B1E] flex items-center justify-center text-white font-bold">6-10</div>
                  <div>
                    <h3 className="text-xl font-bold">Aplicación Práctica</h3>
                    <p className="text-sm text-muted-foreground">Proyectos reales y presentación</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { clase: "6", nombre: "Generative Art II", desc: "Storytelling visual consistente" },
                    { clase: "7", nombre: "Vibe Coding", desc: "Programación de Videojuegos con IA" },
                    { clase: "8", nombre: "Vibe Study", desc: "Hackea tu escuela (Técnicas de estudio)" },
                    { clase: "9", nombre: "Cyber Ethics", desc: "Deepfakes y seguridad digital" },
                    { clase: "10", nombre: "The Vibe Project", desc: "Presentación final de identidad" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="h-6 w-6 rounded-full bg-[#0039A6]/20 text-[#0039A6] text-xs flex items-center justify-center font-bold shrink-0">{item.clase}</span>
                      <div>
                        <span className="font-semibold">{item.nombre}</span>
                        <span className="text-muted-foreground"> - {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* VALUE STACKING - HORMOZI STYLE */}
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0039A6] to-[#001d53] rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold text-center mb-8">Lo Que Recibes (Valor Real)</h3>
              <ul className="space-y-4 mb-8">
                {[
                  { item: "10 Clases en Vivo (60 min c/u)", valor: "$400" },
                  { item: "Acceso a 20+ Herramientas IA Premium", valor: "$300" },
                  { item: "Portafolio Profesional de 10 Proyectos", valor: "$200" },
                  { item: "Certificado de Completación", valor: "$50" },
                  { item: "Comunidad Discord Exclusiva", valor: "$97" },
                  { item: "Soporte WhatsApp Ilimitado", valor: "$150" },
                  { item: "Grabaciones de Todas las Clases", valor: "$100" },
                  { item: "Grupos de Máximo 5 Niños", valor: "Invaluable" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-white/20 pb-3">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#4ADE80]" />
                      {item.item}
                    </span>
                    <span className="text-white/70 line-through">{item.valor}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center border-t border-white/20 pt-6">
                <p className="text-white/70 mb-2">Valor Total: <span className="line-through">$1,297 USD</span></p>
                <p className="text-4xl font-bold text-[#4ADE80] mb-2">Tu Inversión: $267 USD</p>
                <p className="text-sm text-white/60">Pago único • Garantía 10 días • Webpay o Transferencia</p>
              </div>
            </div>
          </div>
        </section>


        {/* BENEFICIOS */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">¿Por Qué Familias Chilenas Nos Eligen?</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D52B1E]/20">
                  <Users className="h-8 w-8 text-[#0039A6]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Máximo 5 Niños</h3>
                <p className="text-muted-foreground">Grupos pequeños para atención personalizada</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D52B1E]/20">
                  <Clock className="h-8 w-8 text-[#0039A6]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Horarios Chile</h3>
                <p className="text-muted-foreground">Zona horaria GMT-4 adaptada a tu familia</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D52B1E]/20">
                  <Shield className="h-8 w-8 text-[#0039A6]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">Devolución completa si no estás satisfecho</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D52B1E]/20">
                  <Target className="h-8 w-8 text-[#0039A6]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">$267 USD</h3>
                <p className="text-muted-foreground">12 clases completas con certificado</p>
              </div>
            </div>
          </div>
        </section>

        {/* PÁGINAS RELACIONADAS */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Explora Más Sobre Nuestro Programa en Chile</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cl/cursos-ia-ninos-chile"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Cursos IA Chile
              </Link>
              <Link
                href="/cl/clases-ia-ninos-santiago"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Clases en Santiago
              </Link>
              <Link
                href="/cl/blog/cursos-inteligencia-artificial-ninos-chile-guia"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Guía Completa IA para Niños
              </Link>
            </div>
          </div>
        </section>

        {/* OTROS PAÍSES */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">También Disponible en Otros Países</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mx/cursos-ia-ninos-mexico"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇲🇽 México
              </Link>
              <Link
                href="/co/cursos-ia-ninos-colombia"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇨🇴 Colombia
              </Link>
              <Link
                href="/ar/cursos-ia-chicos-argentina"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇦🇷 Argentina
              </Link>
              <Link
                href="/pe/cursos-ia-ninos-peru"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇵🇪 Perú
              </Link>
              <Link
                href="/es/cursos-ia-ninos-espana"
                className="rounded-full bg-card px-6 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                🇪🇸 España
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-[#0039A6] to-[#001d53] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Dale a Tu Hijo la Ventaja del Futuro</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Niños de todo Chile ya están creando con IA. Tu hijo puede ser el siguiente.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#D52B1E] px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105"
              >
                Agendar Evaluación Gratuita
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#0039A6]"
              >
                Consultar por WhatsApp
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Garantía 10 días
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Grupos máx 5 niños
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
