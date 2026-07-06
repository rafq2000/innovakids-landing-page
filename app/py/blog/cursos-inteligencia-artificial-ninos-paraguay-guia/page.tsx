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
  title: "Cursos de Inteligencia Artificial para Niños en Paraguay: Guía Completa 2026",
  description:
    "Guía completa: lo que todo padre paraguayo debe saber antes de inscribir a su hijo en un curso de IA. Precios en guaraníes y USD, horarios Paraguay (GMT-4), seguridad y mejores opciones.",
  keywords: [
    "curso ia niños paraguay",
    "clases tecnología asunción",
    "cursos inteligencia artificial paraguay",
    "curso de ia para niños asunción",
    "clases de inteligencia artificial para adolescentes paraguay",
    "cursos tecnología ciudad del este",
    "aprendizaje de inteligencia artificial para niños paraguay",
    "curso ia encarnación",
  ],
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en Paraguay: Guía Completa 2026",
    description: "Todo lo que necesitás saber para elegir la mejor educación tecnológica para tu hijo en Paraguay.",
    url: "https://www.innovakidslatam.com/py/blog/cursos-inteligencia-artificial-ninos-paraguay-guia",
    locale: "es_PY",
    type: "article",
    siteName: "Blog InnovaKids Paraguay",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Inteligencia Artificial para Niños en Paraguay: Guía Completa 2026",
    description: "Todo lo que necesitás saber para elegir la mejor educación tecnológica para tu hijo en Paraguay.",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/py/blog/cursos-inteligencia-artificial-ninos-paraguay-guia",
  },
}

export default function GuiaIANinosParaguay() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en Paraguay y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#D52B1E] via-[#FFFFFF] to-[#0038A8] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm text-white">
              <Clock className="h-4 w-4" />
              <span>Actualizado Junio 2026 · 12 min lectura</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Cursos de Inteligencia Artificial para Niños en Paraguay: Guía Completa 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
              Todo lo que necesitás saber para elegir el mejor curso de IA para tu hijo en Paraguay.
              Opciones en Asunción, Ciudad del Este, Encarnación, Luque y todo el país. Precios en guaraníes y USD.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Paraguay se posiciona como un hub digital emergente en Sudamérica. Con el crecimiento del sector
                tecnológico en Asunción y el dinamismo comercial de Ciudad del Este, la demanda de talento tech crece
                cada año.{" "}
                <strong>¿Cómo preparás a tu hijo para este nuevo mundo?</strong> Esta guía te explica todo.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Clave para Niños Paraguayos?</h2>

              <p>
                Paraguay vive una transformación digital acelerada. La Agenda Digital del país impulsa la adopción de
                tecnologías como la inteligencia artificial en todos los sectores. Para 2030, se estima que el 65% de
                los empleos requerirán habilidades digitales avanzadas. Los niños que empiecen hoy llegarán preparados.
              </p>

              <p>
                Además, Paraguay tiene una ventaja única: su cultura bilingüe español-guaraní desarrolla en los niños
                una flexibilidad cognitiva natural que facilita el aprendizaje de lenguajes tecnológicos y pensamiento
                computacional. Un niño que ya piensa en dos idiomas tiene el cerebro entrenado para pensar en código.
              </p>

              <div className="my-8 rounded-2xl bg-[#0038A8]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#0038A8]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  Según datos del MITIC (Ministerio de Tecnologías de la Información y Comunicación), menos del 3% de
                  los niños paraguayos tienen acceso a educación en inteligencia artificial. Asunción concentra la
                  mayoría de las opciones presenciales, pero los cursos online abren la puerta a todo el país, desde
                  Ciudad del Este hasta Encarnación y más allá.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">Paraguay: Hub Digital Emergente de Sudamérica</h2>

              <p>
                El ecosistema tech paraguayo está en pleno auge. Asunción alberga cada vez más startups y empresas de
                tecnología, mientras que Ciudad del Este —el tercer polo comercial más grande de Latinoamérica— genera
                oportunidades únicas en comercio digital y logística tech. El gobierno paraguayo ha invertido en
                infraestructura de fibra óptica y conectividad, preparando el terreno para una economía digital.
              </p>

              <p>
                Los niños paraguayos que aprendan inteligencia artificial hoy no solo tendrán ventaja en el mercado
                laboral local: estarán preparados para competir a nivel regional y global, con habilidades que trascienden
                fronteras.
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
                Las clases con 20 o 30 niños no funcionan para enseñar habilidades técnicas. Buscá cursos con máximo
                5 niños por grupo para garantizar atención personalizada real.
              </p>

              <h3 className="mt-8 text-2xl font-bold">4. Garantía de Satisfacción</h3>
              <p>
                Un curso serio ofrece garantía. Si no cumple tus expectativas, deberías poder recuperar tu inversión
                sin complicaciones.
              </p>
            </div>

            {/* CTA INTERMEDIO */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#0038A8] to-[#001d53] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Querés que tu hijo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. 1.ª clase gratis, sin compromiso.
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
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#0038A8]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en Paraguay</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#0038A8]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Niños por grupo</td>
                      <td className="p-4 font-bold text-[#0038A8]">Máximo 5</td>
                      <td className="p-4 text-muted-foreground">15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#0038A8]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#0038A8]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Modalidad</td>
                      <td className="p-4 font-bold text-[#0038A8]">Online en vivo</td>
                      <td className="p-4 text-muted-foreground">Presencial o grabado</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#0038A8]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Pago</td>
                      <td className="p-4 font-bold text-[#0038A8]">Guaraníes o USD</td>
                      <td className="p-4 text-muted-foreground">Solo guaraníes</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Cobertura</td>
                      <td className="p-4 font-bold text-[#0038A8]">Todo Paraguay</td>
                      <td className="p-4 text-muted-foreground">Solo Asunción</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#0038A8]">$297 USD (aprox. ₲ 2.200.000)</td>
                      <td className="p-4 text-muted-foreground">₲ 1.500.000 - ₲ 3.500.000</td>
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>
                    <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>
                    <strong>Vibe Art (Storytelling):</strong> Cómics e historias ilustradas con Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>
                    <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>
                    <strong>Vibe Coding:</strong> Videojuegos y apps funcionales con Cursor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>
                    <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>
                    <strong>Vibe Study:</strong> Técnicas de estudio potenciadas con IA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>
                    <strong>The Vibe Project:</strong> Proyecto final con portafolio digital
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">IA para Niños en las Principales Ciudades de Paraguay</h2>

              <h3 className="mt-8 text-2xl font-bold">Asunción</h3>
              <p>
                La capital paraguaya concentra universidades como la UNA, la UC y la UAA con programas de tecnología e
                ingeniería. El ecosistema de startups asunceno crece año a año, con hubs como el Parque Tecnológico
                Itaipú (PTI) impulsando la innovación. Los niños asuncenos que aprenden IA hoy llegarán con ventaja
                a estas carreras y oportunidades.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Ciudad del Este</h3>
              <p>
                El polo comercial más importante de la triple frontera es también un centro de oportunidades digitales.
                El comercio electrónico transfronterizo, la logística tech y el auge del e-commerce crean una demanda
                creciente de profesionales tecnológicos. Un niño de Ciudad del Este que aprende IA hoy tendrá ventaja
                competitiva en el mercado regional.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Encarnación, Luque y el Resto del País</h3>
              <p>
                Al ser 100% online, nuestras clases llegan a Encarnación, Luque, San Lorenzo, Fernando de la Mora,
                Caaguazú y cualquier ciudad de Paraguay. Solo necesitás internet y un computador. La geografía ya no
                es una barrera para la educación tech.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Educación Bilingüe: Una Ventaja Paraguaya</h2>

              <p>
                Paraguay es el único país de Sudamérica con bilingüismo oficial español-guaraní. Esta capacidad de
                pensar en dos idiomas desde la infancia desarrolla habilidades cognitivas que son directamente
                transferibles al aprendizaje tecnológico: flexibilidad mental, pensamiento abstracto y capacidad de
                alternar entre sistemas de comunicación. Tu hijo ya tiene una ventaja natural para aprender a
                comunicarse con la inteligencia artificial.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Paraguayas</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Lorena M.",
                  location: "Asunción, Paraguay",
                  text: "Mi hijo de 12 años creó su primera app en 4 semanas. Ahora quiere estudiar ingeniería en la UNA. El curso le cambió la perspectiva completamente.",
                },
                {
                  name: "Fernando G.",
                  location: "Ciudad del Este, Paraguay",
                  text: "Vivimos en Ciudad del Este y no hay opciones locales de IA para niños. InnovaKids nos conectó con educación de primer nivel sin salir de casa. Mi hija creó un videojuego increíble.",
                },
                {
                  name: "Gabriela S.",
                  location: "Encarnación, Paraguay",
                  text: "Buscaba algo diferente para las vacaciones de mi hijo. InnovaKids superó todas las expectativas. Creó música y arte con IA, y ahora no para de inventar proyectos nuevos.",
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>Todas las clases son supervisadas por un instructor adulto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>Las herramientas de IA se usan con filtros de contenido activados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>Los padres reciben un reporte semanal del progreso de su hijo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>Enseñamos uso ético y responsable de la IA desde la primera clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0038A8]" />
                  <span>Los padres pueden observar cualquier clase en vivo</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes — Paraguay</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son online o presenciales?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde Asunción, Ciudad del Este,
                Encarnación, Luque o cualquier ciudad de Paraguay. Solo necesita computador e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿A qué hora son las clases? (Horario Paraguay GMT-4)</h3>
              <p>
                Tenemos horarios adaptados al huso horario de Paraguay (GMT-4). Las clases son por las tardes después
                del colegio y sábados por la mañana. Al agendar tu clase gratis, coordinamos el horario ideal.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cómo se paga? ¿Aceptan guaraníes?</h3>
              <p>
                El precio es de $297 USD (aproximadamente ₲ 2.200.000). Podés pagar con tarjeta de crédito, débito
                o PayPal. Aceptamos pagos en guaraníes y en dólares. La reserva es de solo $27 USD
                (aprox. ₲ 200.000).
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

              <h3 className="mt-8 text-xl font-bold">¿Las clases son en español?</h3>
              <p>
                Sí, todas las clases son 100% en español. Nuestros instructores son hispanohablantes nativos y se
                adaptan al ritmo de cada alumno.
              </p>
            </div>

            {/* CTA FINAL */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#0038A8] to-[#001d53] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu hijo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agendá una clase gratuita y descubrí si InnovaKids es para tu familia. Sin compromiso.
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
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#0038A8]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">$297 USD (₲ 2.200.000) · 10 clases · Máx 5 niños · Garantía de 10 días</p>
            </div>

            {/* LINKS RELACIONADOS */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/py"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Paraguay <ArrowRight className="h-4 w-4" />
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
