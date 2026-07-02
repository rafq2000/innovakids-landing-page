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
  title: "Cursos de Inteligencia Artificial para Niños en Bolivia: Guía Completa 2026",
  description:
    "Guía completa: lo que todo padre boliviano debe saber antes de inscribir a su hijo en un curso de IA. Precios en bolivianos y USD, horarios GMT-4, seguridad y mejores opciones en La Paz, Santa Cruz, Cochabamba y El Alto.",
  keywords: [
    "curso ia niños bolivia",
    "clases tecnología la paz",
    "cursos inteligencia artificial bolivia",
    "cursos online santa cruz",
    "curso de ia para niños cochabamba",
    "clases de inteligencia artificial para adolescentes bolivia",
    "aprendizaje de inteligencia artificial para niños bolivia",
    "cursos tecnología el alto",
  ],
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en Bolivia: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Bolivia.",
    url: "https://www.innovakidslatam.com/bo/blog/cursos-inteligencia-artificial-ninos-bolivia-guia",
    locale: "es_BO",
    type: "article",
    siteName: "Blog InnovaKids Bolivia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Inteligencia Artificial para Niños en Bolivia: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Bolivia.",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/bo/blog/cursos-inteligencia-artificial-ninos-bolivia-guia",
  },
}

export default function GuiaIANinosBolivia() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en Bolivia y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#007934] via-[#FCE300] to-[#D52B1E] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Actualizado Junio 2026 · 12 min lectura</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Cursos de Inteligencia Artificial para Niños en Bolivia: Guía Completa 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 drop-shadow">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo en Bolivia.
              Opciones en La Paz, Santa Cruz, Cochabamba, El Alto y todo el país. Precios en bolivianos y USD.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Bolivia está viviendo un momento clave en su transformación digital. Santa Cruz se consolida como
                motor económico con un ecosistema de startups en crecimiento, La Paz impulsa la digitalización desde
                el sector público y Cochabamba emerge como polo tecnológico universitario.{" "}
                <strong>¿Cómo preparas a tu hijo para este nuevo mundo?</strong> Esta guía te explica todo.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Clave para Niños Bolivianos?</h2>

              <p>
                La Agenda Digital de Bolivia y el Plan de Desarrollo Económico y Social impulsan la adopción de
                tecnologías como la inteligencia artificial en todos los sectores. Para 2030, se estima que el 65%
                de los empleos requerirán habilidades digitales avanzadas. Los niños bolivianos que empiecen hoy
                llegarán preparados.
              </p>

              <p>
                Además, Bolivia tiene una oportunidad única: el ecosistema tech cruceño crece a doble dígito cada año,
                y empresas como Jala, Mojix y otras startups bolivianas demuestran que el talento local puede competir
                a nivel global. Tu hijo puede ser parte de esa nueva generación de creadores tecnológicos.
              </p>

              <div className="my-8 rounded-2xl bg-[#007934]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#007934]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  Bolivia tiene una de las poblaciones más jóvenes de Sudamérica, pero menos del 3% de los niños
                  bolivianos tienen acceso a educación en inteligencia artificial. La Paz y Santa Cruz concentran
                  las pocas opciones presenciales, pero los cursos online abren la puerta a todo el país, incluyendo
                  El Alto, Cochabamba, Sucre y Tarija.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">Santa Cruz: Motor Económico y Hub Tecnológico de Bolivia</h2>

              <p>
                Santa Cruz de la Sierra lidera la economía boliviana y concentra el mayor número de startups del país.
                Empresas tecnológicas locales están contratando talento joven, y la demanda de profesionales con
                conocimientos en IA crece cada trimestre. Los niños cruceños que aprenden IA hoy tendrán una ventaja
                competitiva enorme cuando ingresen al mercado laboral.
              </p>

              <p>
                Nuestras clases online en vivo permiten que tu hijo en Santa Cruz acceda a educación tech de primer
                nivel sin depender de la oferta local limitada. Solo necesita computador e internet.
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
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#007934] to-[#004d22] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Quieres que tu hijo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. 1ª clase gratis, sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D52B1E] px-6 py-3 font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#007934]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en Bolivia</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#007934]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Niños por grupo</td>
                      <td className="p-4 font-bold text-[#007934]">Máximo 5</td>
                      <td className="p-4 text-muted-foreground">15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#007934]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#007934]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Modalidad</td>
                      <td className="p-4 font-bold text-[#007934]">Online en vivo</td>
                      <td className="p-4 text-muted-foreground">Presencial o grabado</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#007934]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Pago</td>
                      <td className="p-4 font-bold text-[#007934]">BOB o USD</td>
                      <td className="p-4 text-muted-foreground">Solo bolivianos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Cobertura</td>
                      <td className="p-4 font-bold text-[#007934]">Todo Bolivia</td>
                      <td className="p-4 text-muted-foreground">Solo La Paz o Santa Cruz</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#007934]">$267 USD (aprox Bs 1.850)</td>
                      <td className="p-4 text-muted-foreground">Bs 1.000-Bs 3.000</td>
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>
                    <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>
                    <strong>Vibe Art (Storytelling):</strong> Cómics e historias ilustradas con Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>
                    <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>
                    <strong>Vibe Coding:</strong> Videojuegos y apps funcionales con Cursor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>
                    <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>
                    <strong>Vibe Study:</strong> Técnicas de estudio potenciadas con IA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>
                    <strong>The Vibe Project:</strong> Proyecto final con portafolio digital
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">IA para Niños en las Principales Ciudades de Bolivia</h2>

              <h3 className="mt-8 text-2xl font-bold">La Paz</h3>
              <p>
                La sede de gobierno de Bolivia es también el centro administrativo y académico del país. Universidades
                como la UMSA y la UCB forman profesionales en tecnología, y la demanda de talento digital crece en el
                sector público y privado. Los niños paceños que aprenden IA hoy llegarán con ventaja a estas carreras
                y al mercado laboral.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Santa Cruz de la Sierra</h3>
              <p>
                El motor económico de Bolivia concentra el mayor ecosistema de startups del país. Empresas como Jala,
                Mojix y el creciente hub de innovación cruceño están generando oportunidades reales para talento tech.
                Las clases online de InnovaKids complementan perfectamente la energía emprendedora de Santa Cruz.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Cochabamba</h3>
              <p>
                Cochabamba se ha posicionado como polo universitario y tecnológico con la UMSS y centros de investigación
                en innovación. La ciudad combina calidad de vida con un ecosistema tech emergente que necesita talento
                joven formado en IA.
              </p>

              <h3 className="mt-8 text-2xl font-bold">El Alto y el Resto del País</h3>
              <p>
                Al ser 100% online, nuestras clases llegan a El Alto, Sucre, Tarija, Oruro, Potosí y cualquier ciudad
                de Bolivia. Solo necesitas internet y un computador. La geografía y la altitud ya no son barreras
                para la educación tech de primer nivel.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Bolivianas</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Carla M.",
                  location: "La Paz, Bolivia",
                  text: "Mi hijo de 12 años creó su primera app en 4 semanas. Ahora quiere estudiar ingeniería de sistemas en la UMSA. El curso le abrió un mundo nuevo.",
                },
                {
                  name: "Roberto S.",
                  location: "Santa Cruz, Bolivia",
                  text: "Buscaba algo diferente para las vacaciones de invierno. InnovaKids superó todas las expectativas. Mi hija creó un videojuego y música con IA. Increíble.",
                },
                {
                  name: "Gabriela T.",
                  location: "Cochabamba, Bolivia",
                  text: "No hay opciones locales de IA para niños en Cochabamba. InnovaKids nos conectó con educación de primer nivel sin salir de casa. Los horarios se adaptan perfecto.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#D52B1E]">
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>Todas las clases son supervisadas por un instructor adulto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>Las herramientas de IA se usan con filtros de contenido activados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>Los padres reciben un reporte semanal del progreso de su hijo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>Enseñamos uso ético y responsable de la IA desde la primera clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#007934]" />
                  <span>Los padres pueden observar cualquier clase en vivo</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes — Bolivia</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son online o presenciales?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde La Paz, Santa Cruz,
                Cochabamba, El Alto o cualquier ciudad de Bolivia. Solo necesita computador e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿A qué hora son las clases? (Horario Bolivia GMT-4)</h3>
              <p>
                Tenemos horarios adaptados al huso horario de Bolivia (GMT-4). Las clases son por las tardes después
                del colegio y sábados por la mañana. Al agendar tu clase gratis, coordinamos el horario ideal para
                tu familia.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cómo se paga? ¿Aceptan bolivianos?</h3>
              <p>
                El precio es de $267 USD (aproximadamente Bs 1.850). Puedes pagar con tarjeta de crédito, débito
                o PayPal en bolivianos o en dólares. La reserva es de solo $27 USD (aprox Bs 185) para asegurar
                el cupo de tu hijo.
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

              <h3 className="mt-8 text-xl font-bold">¿Sirve para las vacaciones de invierno?</h3>
              <p>
                Absolutamente. El programa dura 5 semanas (10 clases) y es perfecto para las vacaciones de invierno
                (junio-julio) o cualquier momento del año. Tu hijo aprovecha el tiempo libre aprendiendo habilidades
                reales que lo diferencian.
              </p>
            </div>

            {/* CTA FINAL */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#007934] to-[#004d22] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu hijo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agenda una clase gratuita y descubre si InnovaKids es para tu familia. Sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D52B1E] px-8 py-4 text-lg font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#007934]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">$267 USD (Bs 1.850) · 10 clases · Máx 5 niños · Garantía de 10 días</p>
            </div>

            {/* LINKS RELACIONADOS */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/bo"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Bolivia <ArrowRight className="h-4 w-4" />
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
