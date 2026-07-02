import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, Target, Clock, Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: "Cursos de IA para Niños en Ecuador — Guía para Padres 2026",
  description:
    "Guía completa: lo que todo padre ecuatoriano debe saber antes de inscribir a su hijo en un curso de IA. Precios en USD, cursos vacacionales, seguridad y mejores opciones.",
  keywords: [
    "cursos de inteligencia artificial para niños ecuador",
    "curso vacacional de inteligencia artificial",
    "cursos de ia en guayaquil",
    "cursos de ia en ecuador",
    "cursos de inteligencia artificial guayaquil",
    "curso de ia para niños quito",
    "clases de inteligencia artificial para adolescentes ecuador",
    "aprendizaje de inteligencia artificial para niños",
  ],
  openGraph: {
    title: "Cursos de IA para Niños en Ecuador — Guía para Padres 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Ecuador.",
    url: "https://www.innovakidslatam.com/ec/blog/cursos-inteligencia-artificial-ninos-ecuador-guia",
    locale: "es_EC",
    type: "article",
    siteName: "Blog InnovaKids Ecuador",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de IA para Niños en Ecuador — Guía para Padres 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Ecuador.",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/ec/blog/cursos-inteligencia-artificial-ninos-ecuador-guia",
  },
}

export default function GuiaIANinosEcuador() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en Ecuador y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#FFD100] via-[#003DA5] to-[#CE1126] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Actualizado Junio 2026 · 12 min lectura</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Cursos de Inteligencia Artificial para Niños en Ecuador: Guía Completa 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo en Ecuador.
              Opciones en Quito, Guayaquil, Cuenca y todo el país. Precios en dólares, cursos vacacionales y más.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Ecuador vive una transformación digital acelerada. Empresas en Quito y Guayaquil ya usan inteligencia
                artificial en sus operaciones diarias, y la demanda de talento tech crece cada año.{" "}
                <strong>¿Cómo preparas a tu hijo para este nuevo mundo?</strong> Esta guía te explica todo.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Clave para Niños Ecuatorianos?</h2>

              <p>
                La Agenda Digital de Ecuador impulsa la adopción de tecnologías como la inteligencia artificial en todos
                los sectores. Para 2030, se estima que el 65% de los empleos requerirán habilidades digitales avanzadas.
                Los niños que empiecen hoy llegarán preparados.
              </p>

              <p>
                Además, Ecuador tiene una ventaja única: al usar el dólar como moneda, acceder a educación tech
                internacional es directo, sin conversiones ni comisiones cambiarias.
              </p>

              <div className="my-8 rounded-2xl bg-[#003DA5]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#003DA5]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  Según el Ministerio de Telecomunicaciones de Ecuador, menos del 5% de los niños ecuatorianos tienen
                  acceso a educación en inteligencia artificial. Quito y Guayaquil concentran la mayoría de las opciones,
                  pero los cursos online abren la puerta a todo el país.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">Cursos Vacacionales de IA: La Mejor Inversión para las Vacaciones</h2>

              <p>
                Muchos padres ecuatorianos buscan <strong>cursos vacacionales de inteligencia artificial</strong> para
                aprovechar las vacaciones escolares. Ya sea en el régimen Sierra (julio-agosto) o Costa (febrero-marzo),
                un curso intensivo de 5 semanas transforma las vacaciones en una experiencia de aprendizaje real.
              </p>

              <p>
                A diferencia de los campamentos tradicionales, un curso vacacional de IA le da a tu hijo habilidades
                concretas: crea su primera app, compone música, diseña arte digital y construye un videojuego. Todo en
                10 clases que se adaptan al horario de vacaciones.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Qué Debe Incluir un Buen Curso de IA para Niños?</h2>

              <h3 className="mt-8 text-2xl font-bold">1. Herramientas Profesionales, No Simuladores</h3>
              <p>
                Tu hijo debe aprender con las mismas herramientas que usan profesionales: ChatGPT, Midjourney, Cursor,
                Runway. Los simuladores no preparan para el mundo real.
              </p>

              <h3 className="mt-8 text-2xl font-bold">2. Proyectos Reales y Tangibles</h3>
              <p>
                La teoría sin práctica no sirve. Un buen curso permite que tu hijo cree proyectos reales: apps,
                videojuegos, música, arte digital. Cosas que pueda mostrar en el colegio y compartir con la familia.
              </p>

              <h3 className="mt-8 text-2xl font-bold">3. Grupos Reducidos</h3>
              <p>
                Las clases con 20 o 30 niños no funcionan para enseñar habilidades técnicas. Busca cursos con máximo
                5 niños por grupo para garantizar atención personalizada real.
              </p>

              <h3 className="mt-8 text-2xl font-bold">4. Garantía de Satisfacción</h3>
              <p>
                Un curso serio ofrece garantía. Si no cumple tus expectativas, deberías poder recuperar tu inversión
                sin complicaciones.
              </p>
            </div>

            {/* CTA INTERMEDIO */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#003DA5] to-[#001d53] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Quieres que tu hijo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. 1ª clase gratis, sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-6 py-3 font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#003DA5]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en Ecuador</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#003DA5]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Niños por grupo</td>
                      <td className="p-4 font-bold text-[#003DA5]">Máximo 5</td>
                      <td className="p-4 text-muted-foreground">15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#003DA5]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#003DA5]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Modalidad</td>
                      <td className="p-4 font-bold text-[#003DA5]">Online en vivo</td>
                      <td className="p-4 text-muted-foreground">Presencial o grabado</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#003DA5]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Pago</td>
                      <td className="p-4 font-bold text-[#003DA5]">Directo en USD</td>
                      <td className="p-4 text-muted-foreground">Varía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Cobertura</td>
                      <td className="p-4 font-bold text-[#003DA5]">Todo Ecuador</td>
                      <td className="p-4 text-muted-foreground">Solo Quito o Guayaquil</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#003DA5]">$267 USD</td>
                      <td className="p-4 text-muted-foreground">$150-$400 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-3xl font-bold">¿Qué Aprenderá Tu Hijo en InnovaKids?</h2>

              <p>
                Nuestro programa de 10 clases (5 semanas) está diseñado para que tu hijo pase de consumidor a creador
                de tecnología. Estos son los proyectos que realizará:
              </p>

              <ul className="my-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>
                    <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>
                    <strong>Vibe Art (Storytelling):</strong> Cómics e historias ilustradas con Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>
                    <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>
                    <strong>Vibe Coding:</strong> Videojuegos y apps funcionales con Cursor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>
                    <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>
                    <strong>Vibe Study:</strong> Técnicas de estudio potenciadas con IA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>
                    <strong>The Vibe Project:</strong> Proyecto final con portafolio digital
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">IA para Niños en las Principales Ciudades de Ecuador</h2>

              <h3 className="mt-8 text-2xl font-bold">Quito</h3>
              <p>
                La capital ecuatoriana concentra universidades como la EPN, USFQ y PUCE con programas de tecnología. Los
                niños quiteños que aprenden IA hoy llegarán con ventaja a estas carreras. Nuestras clases se adaptan al
                horario escolar del régimen Sierra.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Guayaquil</h3>
              <p>
                El motor económico de Ecuador tiene un ecosistema tech en crecimiento. Empresas como De Una, Kushki y
                startups del Puerto Hacker están creando oportunidades para talento tech. Las clases de InnovaKids
                funcionan perfectamente con el régimen Costa.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Cuenca y el Resto del País</h3>
              <p>
                Al ser 100% online, nuestras clases llegan a Cuenca, Ambato, Loja, Manta y cualquier ciudad de Ecuador.
                Solo necesitas internet y un computador. La geografía ya no es una barrera para la educación tech.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Ecuatorianas</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "María José R.",
                  location: "Quito, Ecuador",
                  text: "Mi hijo de 11 años creó su primera app en 4 semanas. Ahora quiere estudiar ingeniería. El curso le cambió la perspectiva completamente.",
                },
                {
                  name: "Carlos A.",
                  location: "Guayaquil, Ecuador",
                  text: "Buscaba un curso vacacional diferente. InnovaKids superó todas las expectativas. Mi hija creó un videojuego y música con IA.",
                },
                {
                  name: "Patricia V.",
                  location: "Cuenca, Ecuador",
                  text: "Vivimos en Cuenca y no hay opciones locales de IA para niños. InnovaKids nos conectó con educación de primer nivel sin salir de casa.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#CE1126]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.location}</div>
                </div>
              ))}
            </div>

            {/* SEGURIDAD */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Seguridad Digital y Supervisión Parental</h2>

              <p>
                Sabemos que la seguridad de tu hijo es lo primero. En InnovaKids implementamos estas medidas:
              </p>

              <ul className="my-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>Todas las clases son supervisadas por un instructor adulto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>Las herramientas de IA se usan con filtros de contenido activados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>Los padres reciben un reporte semanal del progreso de su hijo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>Enseñamos uso ético y responsable de la IA desde la primera clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#003DA5]" />
                  <span>Los padres pueden observar cualquier clase en vivo</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes — Ecuador</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son online o presenciales?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde Quito, Guayaquil, Cuenca,
                Ambato o cualquier ciudad de Ecuador. Solo necesita computador e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿A qué hora son las clases? (Horario Ecuador GMT-5)</h3>
              <p>
                Tenemos horarios adaptados al huso horario de Ecuador (GMT-5). Las clases son por las tardes después
                del colegio y sábados por la mañana. Al agendar tu clase gratis, coordinamos el horario ideal.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cómo se paga? ¿Aceptan dólares?</h3>
              <p>
                Sí, el precio es de $267 USD y como Ecuador usa el dólar, no hay conversión de moneda. Puedes pagar
                con tarjeta de crédito, débito o PayPal. La reserva es de solo $27 USD.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Sirve como curso vacacional?</h3>
              <p>
                Absolutamente. El programa dura 5 semanas (10 clases) y es perfecto para las vacaciones escolares,
                tanto del régimen Sierra como Costa. Tu hijo aprovecha las vacaciones aprendiendo habilidades reales.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Qué edad necesita mi hijo?</h3>
              <p>
                El programa está diseñado para niños y adolescentes de 8 a 17 años. En la evaluación gratuita
                determinamos si tu hijo está listo para comenzar.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Tienen garantía?</h3>
              <p>
                Sí. Ofrecemos garantía de 10 días completos. Si no estás satisfecho por cualquier razón, te devolvemos
                el 100% de tu inversión sin preguntas.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Necesita saber programar?</h3>
              <p>
                No. El curso empieza desde cero. La metodología Vibe Coding permite que tu hijo cree tecnología usando
                lenguaje natural, sin memorizar código complejo.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cuántos niños hay por grupo?</h3>
              <p>
                Máximo 5 niños por grupo. Esto garantiza atención personalizada real, no clases masivas donde tu hijo
                se pierde.
              </p>
            </div>

            {/* CTA FINAL */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#003DA5] to-[#001d53] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu hijo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agenda una clase gratuita y descubre si InnovaKids es para tu familia. Sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-8 py-4 text-lg font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#003DA5]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">$267 USD · 10 clases · Máx 5 niños · Garantía de 10 días</p>
            </div>

            {/* LINKS RELACIONADOS */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/ec"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Ecuador <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/blog/actividades-inteligencia-artificial-ninos-casa"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Actividades de IA en Casa <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/blog/inteligencia-artificial-para-ninos"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  IA para Niños: Guía General <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
              <Footer />
      </main>
    </>
  )
}
