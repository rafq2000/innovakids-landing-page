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
  title: "Cursos de Inteligencia Artificial para Niños en El Salvador: Guía Completa 2026",
  description:
    "Guía completa: lo que todo padre salvadoreño debe saber antes de inscribir a su hijo en un curso de IA. Precios en USD, El Salvador líder tech en Centroamérica, seguridad y mejores opciones.",
  keywords: [
    "curso ia niños el salvador",
    "clases tecnología san salvador",
    "cursos inteligencia artificial el salvador",
    "curso de ia para niños san salvador",
    "clases de inteligencia artificial para adolescentes el salvador",
    "cursos tecnología niños santa ana",
    "aprendizaje de inteligencia artificial para niños el salvador",
    "cursos de ia san miguel",
  ],
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en El Salvador: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en El Salvador.",
    url: "https://www.innovakidslatam.com/sv/blog/cursos-inteligencia-artificial-ninos-el-salvador-guia",
    locale: "es_SV",
    type: "article",
    siteName: "Blog InnovaKids El Salvador",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Inteligencia Artificial para Niños en El Salvador: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en El Salvador.",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/sv/blog/cursos-inteligencia-artificial-ninos-el-salvador-guia",
  },
}

export default function GuiaIANinosElSalvador() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en El Salvador y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#0047AB] to-[#002868] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Actualizado Junio 2026 · 12 min lectura</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Cursos de Inteligencia Artificial para Niños en El Salvador: Guía Completa 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo en El Salvador.
              Opciones en San Salvador, Santa Ana, San Miguel, Santa Tecla y todo el país. Pago directo en USD.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                El Salvador se ha posicionado como líder tecnológico en Centroamérica. La adopción de Bitcoin como moneda
                de curso legal, la creación de hubs de innovación y la apuesta gubernamental por la tecnología han
                transformado al país en un ecosistema innovador sin precedentes.{" "}
                <strong>¿Cómo preparas a tu hijo para aprovechar esta revolución?</strong> Esta guía te explica todo.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Clave para Niños Salvadoreños?</h2>

              <p>
                El Salvador lidera la transformación digital en Centroamérica. Con la adopción de Bitcoin, la inversión
                en infraestructura tecnológica y el crecimiento del ecosistema de startups, el país necesita talento tech
                como nunca antes. Para 2030, se estima que el 65% de los empleos requerirán habilidades digitales avanzadas.
                Los niños que empiecen hoy llegarán preparados.
              </p>

              <p>
                Además, El Salvador tiene una ventaja única: al ser una economía dolarizada, acceder a educación tech
                internacional es directo, sin conversiones ni comisiones cambiarias. Pagas en USD, recibes en USD.
              </p>

              <div className="my-8 rounded-2xl bg-[#0047AB]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#0047AB]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  El Salvador es el primer país del mundo en adoptar Bitcoin como moneda legal, demostrando su visión
                  tecnológica. Sin embargo, menos del 5% de los niños salvadoreños tienen acceso a educación en
                  inteligencia artificial. San Salvador concentra la mayoría de las opciones, pero los cursos online
                  abren la puerta a todo el país.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">El Salvador: Líder Tech de Centroamérica</h2>

              <p>
                El ecosistema innovador salvadoreño no es casualidad. La apuesta por la tecnología blockchain, la
                construcción de Bitcoin City y la inversión en conectividad digital posicionan a El Salvador como el
                hub tecnológico de la región. Los niños salvadoreños que aprenden IA hoy crecen en un país que entiende
                el futuro.
              </p>

              <p>
                Muchos padres salvadoreños buscan <strong>cursos de tecnología e inteligencia artificial</strong> para
                darle a sus hijos una ventaja competitiva real. Un curso intensivo de 5 semanas transforma las vacaciones
                o el tiempo libre en una experiencia de aprendizaje que cambia perspectivas.
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
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#0047AB] to-[#002868] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Quieres que tu hijo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. 1ª clase gratis, sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#0047AB] transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#0047AB]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en El Salvador</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#0047AB]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Niños por grupo</td>
                      <td className="p-4 font-bold text-[#0047AB]">Máximo 5</td>
                      <td className="p-4 text-muted-foreground">15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#0047AB]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#0047AB]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Modalidad</td>
                      <td className="p-4 font-bold text-[#0047AB]">Online en vivo</td>
                      <td className="p-4 text-muted-foreground">Presencial o grabado</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#0047AB]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Pago</td>
                      <td className="p-4 font-bold text-[#0047AB]">Directo en USD</td>
                      <td className="p-4 text-muted-foreground">Varía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Cobertura</td>
                      <td className="p-4 font-bold text-[#0047AB]">Todo El Salvador</td>
                      <td className="p-4 text-muted-foreground">Solo San Salvador</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#0047AB]">$267 USD</td>
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>
                    <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>
                    <strong>Vibe Art (Storytelling):</strong> Cómics e historias ilustradas con Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>
                    <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>
                    <strong>Vibe Coding:</strong> Videojuegos y apps funcionales con Cursor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>
                    <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>
                    <strong>Vibe Study:</strong> Técnicas de estudio potenciadas con IA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>
                    <strong>The Vibe Project:</strong> Proyecto final con portafolio digital
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">IA para Niños en las Principales Ciudades de El Salvador</h2>

              <h3 className="mt-8 text-2xl font-bold">San Salvador</h3>
              <p>
                La capital salvadoreña es el corazón del ecosistema tech del país. Con universidades como la UCA, la UES
                y la UTEC formando talento digital, y empresas de tecnología estableciendo operaciones, los niños
                capitalinos que aprenden IA hoy llegarán con ventaja a las carreras del futuro.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Santa Tecla</h3>
              <p>
                A pocos kilómetros de San Salvador, Santa Tecla se ha convertido en un polo de desarrollo moderno con
                espacios de coworking y cultura emprendedora. Las familias tecleñas buscan opciones educativas
                innovadoras, y las clases online de InnovaKids se adaptan perfectamente a su estilo de vida.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Santa Ana y San Miguel</h3>
              <p>
                Al ser 100% online, nuestras clases llegan a Santa Ana, San Miguel, Soyapango, Mejicanos y cualquier
                ciudad de El Salvador. Solo necesitas internet y un computador. La geografía ya no es una barrera para
                la educación tech en el país.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Salvadoreñas</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Carolina M.",
                  location: "San Salvador, El Salvador",
                  text: "Mi hijo de 12 años creó su primera app en 4 semanas. Ahora quiere estudiar ingeniería en sistemas. El curso le abrió un mundo nuevo.",
                },
                {
                  name: "Roberto G.",
                  location: "Santa Tecla, El Salvador",
                  text: "Buscaba algo diferente para mi hija. InnovaKids superó todas las expectativas. Creó un videojuego y música con IA. Pagar en dólares fue súper directo.",
                },
                {
                  name: "Daniela P.",
                  location: "Santa Ana, El Salvador",
                  text: "Vivimos en Santa Ana y no hay opciones locales de IA para niños. InnovaKids nos conectó con educación de primer nivel sin salir de casa.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#0047AB]">
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>Todas las clases son supervisadas por un instructor adulto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>Las herramientas de IA se usan con filtros de contenido activados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>Los padres reciben un reporte semanal del progreso de su hijo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>Enseñamos uso ético y responsable de la IA desde la primera clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0047AB]" />
                  <span>Los padres pueden observar cualquier clase en vivo</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes — El Salvador</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son online o presenciales?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde San Salvador, Santa Ana,
                San Miguel, Santa Tecla o cualquier ciudad de El Salvador. Solo necesita computador e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿A qué hora son las clases? (Horario El Salvador GMT-6)</h3>
              <p>
                Tenemos horarios adaptados al huso horario de El Salvador (GMT-6). Las clases son por las tardes después
                del colegio y sábados por la mañana. Al agendar tu clase gratis, coordinamos el horario ideal.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cómo se paga? ¿Aceptan dólares?</h3>
              <p>
                Sí, el precio es de $267 USD y como El Salvador usa el dólar, no hay conversión de moneda. Pagas
                directamente en USD con tarjeta de crédito, débito o PayPal. La reserva es de solo $27 USD.
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
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#0047AB] to-[#002868] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu hijo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agenda una clase gratuita y descubre si InnovaKids es para tu familia. Sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#0047AB] transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#0047AB]"
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
                  href="/sv"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA El Salvador <ArrowRight className="h-4 w-4" />
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
