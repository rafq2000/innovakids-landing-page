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
  title: "Cursos de Inteligencia Artificial para Niños en Nicaragua: Guía Completa 2026",
  description:
    "Guía completa: lo que todo padre nicaragüense debe saber antes de inscribir a su hijo en un curso de IA. Precios en córdobas y USD, horarios GMT-6, seguridad y mejores opciones.",
  keywords: [
    "curso ia niños nicaragua",
    "clases tecnología managua",
    "cursos inteligencia artificial nicaragua",
    "curso de ia para niños managua",
    "clases de inteligencia artificial para adolescentes nicaragua",
    "cursos de tecnología para niños león nicaragua",
    "aprendizaje de inteligencia artificial para niños",
    "cursos online tecnología nicaragua",
  ],
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en Nicaragua: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Nicaragua.",
    url: "https://www.innovakidslatam.com/ni/blog/cursos-inteligencia-artificial-ninos-nicaragua-guia",
    locale: "es_NI",
    type: "article",
    siteName: "Blog InnovaKids Nicaragua",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Inteligencia Artificial para Niños en Nicaragua: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Nicaragua.",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/ni/blog/cursos-inteligencia-artificial-ninos-nicaragua-guia",
  },
}

export default function GuiaIANinosNicaragua() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en Nicaragua y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#0067C6] to-[#003B73] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Actualizado Junio 2026 · 12 min lectura</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Cursos de Inteligencia Artificial para Niños en Nicaragua: Guía Completa 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo en Nicaragua.
              Opciones en Managua, León, Masaya y todo el país. Precios en córdobas y USD, horarios adaptados y más.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Nicaragua está dando pasos firmes hacia la transformación digital. Empresas en Managua ya incorporan
                inteligencia artificial en sus operaciones, y el mercado global demanda cada vez más talento tech
                de Centroamérica.{" "}
                <strong>¿Cómo preparas a tu hijo para aprovechar estas oportunidades?</strong> Esta guía te explica todo.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Clave para Niños Nicaragüenses?</h2>

              <p>
                La industria tecnológica en Centroamérica crece a ritmo acelerado. Para 2030, se estima que el 65% de
                los empleos requerirán habilidades digitales avanzadas. Los jóvenes nicaragüenses que dominen
                inteligencia artificial tendrán acceso al mercado global de trabajo remoto, con salarios en dólares
                desde cualquier ciudad del país.
              </p>

              <p>
                León, reconocida como la ciudad universitaria de Nicaragua, ya impulsa iniciativas de tecnología y
                emprendimiento juvenil. Los niños que empiecen hoy con IA llegarán preparados a las carreras del
                futuro, ya sea en la UNAN, la UNI o universidades internacionales.
              </p>

              <div className="my-8 rounded-2xl bg-[#0067C6]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#0067C6]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  Menos del 3% de los niños nicaragüenses tienen acceso a educación en inteligencia artificial. Managua
                  concentra la mayoría de las opciones presenciales, pero los cursos online abren la puerta a todo el
                  país: desde Matagalpa hasta Bluefields, la geografía ya no es una barrera.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">Oportunidades Tech para Jóvenes Nicaragüenses en el Mercado Global</h2>

              <p>
                El mercado global de trabajo remoto es una oportunidad enorme para Nicaragua. Empresas de Estados
                Unidos, Europa y el resto de Latinoamérica buscan talento tech sin importar la ubicación geográfica.
                Un joven nicaragüense con habilidades en IA puede trabajar para empresas internacionales desde Managua,
                León o cualquier ciudad con conexión a internet, ganando en dólares.
              </p>

              <p>
                Además, el ecosistema emprendedor nicaragüense está creciendo. León, como ciudad universitaria, ya
                forma profesionales en tecnología a través de la UNAN-León y programas de innovación. Un niño que
                domina IA desde temprano llega con años de ventaja a estas carreras. La inversión en educación tech
                hoy se traduce en oportunidades reales mañana.
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
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#0067C6] to-[#003B73] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Quieres que tu hijo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. 1ª clase gratis, sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#0067C6] transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#0067C6]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en Nicaragua</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#0067C6]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Niños por grupo</td>
                      <td className="p-4 font-bold text-[#0067C6]">Máximo 5</td>
                      <td className="p-4 text-muted-foreground">15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#0067C6]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#0067C6]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Modalidad</td>
                      <td className="p-4 font-bold text-[#0067C6]">Online en vivo</td>
                      <td className="p-4 text-muted-foreground">Presencial o grabado</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#0067C6]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Pago</td>
                      <td className="p-4 font-bold text-[#0067C6]">Córdobas o USD</td>
                      <td className="p-4 text-muted-foreground">Varía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Cobertura</td>
                      <td className="p-4 font-bold text-[#0067C6]">Todo Nicaragua</td>
                      <td className="p-4 text-muted-foreground">Solo Managua</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#0067C6]">$267 USD (aprox. C$ 9,800)</td>
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>
                    <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>
                    <strong>Vibe Art (Storytelling):</strong> Cómics e historias ilustradas con Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>
                    <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>
                    <strong>Vibe Coding:</strong> Videojuegos y apps funcionales con Cursor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>
                    <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>
                    <strong>Vibe Study:</strong> Técnicas de estudio potenciadas con IA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>
                    <strong>The Vibe Project:</strong> Proyecto final con portafolio digital
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">IA para Niños en las Principales Ciudades de Nicaragua</h2>

              <h3 className="mt-8 text-2xl font-bold">Managua</h3>
              <p>
                La capital nicaragüense concentra la mayor actividad económica y tecnológica del país. Empresas de
                servicios digitales, call centers bilingües y startups emergentes crean un ecosistema que demanda
                talento tech. Los niños de Managua que aprenden IA hoy tendrán ventaja competitiva real en este
                mercado en crecimiento.
              </p>

              <h3 className="mt-8 text-2xl font-bold">León</h3>
              <p>
                Reconocida como la ciudad universitaria de Nicaragua, León es cuna de innovación y pensamiento
                académico. La UNAN-León y otras instituciones impulsan programas de ciencia y tecnología. Un niño
                leonés que domine IA desde temprano llegará con años de ventaja a las carreras de ingeniería y
                tecnología.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Masaya, Matagalpa y el Resto del País</h3>
              <p>
                Al ser 100% online, nuestras clases llegan a Masaya, Matagalpa, Granada, Estelí, Chinandega y
                cualquier ciudad de Nicaragua. Solo necesitas internet y un computador. La geografía ya no es una
                barrera para la educación tech de calidad mundial.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Nicaragüenses</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Claudia M.",
                  location: "Managua, Nicaragua",
                  text: "Mi hijo de 12 años creó su primera app en 4 semanas. Ahora quiere estudiar ingeniería en sistemas. El curso le abrió la mente a posibilidades que no conocía.",
                },
                {
                  name: "Roberto L.",
                  location: "León, Nicaragua",
                  text: "Buscaba algo diferente para las vacaciones de mi hija. InnovaKids superó todas las expectativas. Creó un videojuego y música con IA. Está motivadísima.",
                },
                {
                  name: "Ana Gabriela S.",
                  location: "Matagalpa, Nicaragua",
                  text: "Vivimos en Matagalpa y no hay opciones locales de IA para niños. InnovaKids nos conectó con educación de primer nivel sin salir de casa. Increíble.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#0067C6]">
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>Todas las clases son supervisadas por un instructor adulto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>Las herramientas de IA se usan con filtros de contenido activados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>Los padres reciben un reporte semanal del progreso de su hijo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>Enseñamos uso ético y responsable de la IA desde la primera clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#0067C6]" />
                  <span>Los padres pueden observar cualquier clase en vivo</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes — Nicaragua</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son online o presenciales?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde Managua, León, Masaya,
                Matagalpa o cualquier ciudad de Nicaragua. Solo necesita computador e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿A qué hora son las clases? (Horario Nicaragua GMT-6)</h3>
              <p>
                Tenemos horarios adaptados al huso horario de Nicaragua (GMT-6). Las clases son por las tardes después
                del colegio y sábados por la mañana. Al agendar tu clase gratis, coordinamos el horario ideal para
                tu familia.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cómo se paga? ¿Puedo pagar en córdobas?</h3>
              <p>
                El precio es de $267 USD (aproximadamente C$ 9,800 NIO). Puedes pagar con tarjeta de crédito, débito
                o PayPal en dólares o córdobas. La reserva es de solo $27 USD (aprox. C$ 980). Sin cargos ocultos ni
                comisiones adicionales.
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

              <h3 className="mt-8 text-xl font-bold">¿Sirve para las vacaciones escolares?</h3>
              <p>
                Absolutamente. El programa dura 5 semanas (10 clases) y es perfecto para las vacaciones escolares
                de diciembre-enero o las intermedias. Tu hijo aprovecha las vacaciones aprendiendo habilidades reales
                con impacto a largo plazo.
              </p>
            </div>

            {/* CTA FINAL */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#0067C6] to-[#003B73] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu hijo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agenda una clase gratuita y descubre si InnovaKids es para tu familia. Sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#0067C6] transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#0067C6]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">$267 USD (aprox. C$ 9,800) · 10 clases · Máx 5 niños · Garantía de 10 días</p>
            </div>

            {/* LINKS RELACIONADOS */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/ni"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Nicaragua <ArrowRight className="h-4 w-4" />
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
