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
  title: "Cursos de Inteligencia Artificial para Niños en Guatemala: Guía Completa 2026",
  description:
    "Guía completa: lo que todo padre guatemalteco debe saber antes de inscribir a su hijo en un curso de IA. Precios en quetzales y USD, horarios GMT-6, seguridad y mejores opciones para patojos.",
  keywords: [
    "curso ia niños guatemala",
    "clases tecnología guatemala",
    "cursos inteligencia artificial guatemala",
    "curso de ia para niños ciudad de guatemala",
    "clases de inteligencia artificial para adolescentes guatemala",
    "cursos de ia en quetzaltenango",
    "aprendizaje de inteligencia artificial para niños guatemala",
    "cursos tecnología patojos guatemala",
  ],
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en Guatemala: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Guatemala.",
    url: "https://www.innovakidslatam.com/gt/blog/cursos-inteligencia-artificial-ninos-guatemala-guia",
    locale: "es_GT",
    type: "article",
    siteName: "Blog InnovaKids Guatemala",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Inteligencia Artificial para Niños en Guatemala: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Guatemala.",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/gt/blog/cursos-inteligencia-artificial-ninos-guatemala-guia",
  },
}

export default function GuiaIANinosGuatemala() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en Guatemala y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#4997D0] to-[#1A5276] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Actualizado Junio 2026 · 12 min lectura</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Cursos de Inteligencia Artificial para Niños en Guatemala: Guía Completa 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Todo lo que necesitás saber para elegir el mejor curso de IA para tu hijo en Guatemala.
              Opciones en Ciudad de Guatemala, Quetzaltenango, Antigua y todo el país. Precios en quetzales y dólares.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Guatemala es la economía más grande de Centroamérica y vive una transformación digital sin precedentes.
                Empresas en la capital y Quetzaltenango ya integran inteligencia artificial en sus operaciones, y la
                demanda de talento tech crece cada año.{" "}
                <strong>¿Cómo preparás a tus patojos para este nuevo mundo?</strong> Esta guía te explica todo.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Clave para los Patojos Guatemaltecos?</h2>

              <p>
                Guatemala lidera la economía centroamericana con un PIB que supera los $95.000 millones USD.
                El sector tecnológico crece aceleradamente: empresas como Cementos Progreso, Grupo Castillo Hermanos
                y startups del ecosistema Campus Tec ya utilizan inteligencia artificial. Para 2030, se estima que
                el 65% de los empleos requerirán habilidades digitales avanzadas. Los patojos que empiecen hoy
                llegarán preparados.
              </p>

              <p>
                Además, Guatemala tiene un bono demográfico único: más del 60% de su población tiene menos de 30 años.
                Los niños y adolescentes que dominen la IA hoy serán los líderes tecnológicos de la región mañana.
              </p>

              <div className="my-8 rounded-2xl bg-[#4997D0]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#4997D0]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  Según la Cámara de Industria de Guatemala, menos del 3% de los niños guatemaltecos tienen acceso
                  a educación en inteligencia artificial. Ciudad de Guatemala concentra la mayoría de las opciones
                  presenciales, pero los cursos online democratizan el acceso a todo el país, desde Petén hasta Escuintla.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">Vacaciones Escolares y Cursos de IA: La Mejor Inversión</h2>

              <p>
                Muchos padres guatemaltecos buscan <strong>cursos de inteligencia artificial</strong> para aprovechar
                las vacaciones escolares (noviembre-enero). Un curso intensivo de 5 semanas transforma las vacaciones
                en una experiencia de aprendizaje real que tus patojos van a recordar toda la vida.
              </p>

              <p>
                A diferencia de los campamentos tradicionales, un curso de IA le da a tu hijo habilidades concretas:
                crea su primera app, compone música, diseña arte digital y construye un videojuego. Todo en 10 clases
                que se adaptan al horario de vacaciones.
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

              <h3 className="mt-8 text-2xl font-bold">3. Clases 1 a 1</h3>
              <p>
                Las clases con 20 o 30 patojos no funcionan para enseñar habilidades técnicas. Buscá cursos con clases
                1 a 1 (individuales) para garantizar atención personalizada real.
              </p>

              <h3 className="mt-8 text-2xl font-bold">4. Garantía de Satisfacción</h3>
              <p>
                Un curso serio ofrece garantía. Si no cumple tus expectativas, deberías poder recuperar tu inversión
                sin complicaciones.
              </p>
            </div>

            {/* CTA INTERMEDIO */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#4997D0] to-[#1A5276] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Querés que tu patojo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. 1ª clase gratis, sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F0C832] px-6 py-3 font-bold text-[#1A5276] transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#1A5276]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en Guatemala</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#4997D0]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Formato de clase</td>
                      <td className="p-4 font-bold text-[#4997D0]">1 a 1 (individual)</td>
                      <td className="p-4 text-muted-foreground">Grupos de 15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#4997D0]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#4997D0]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Modalidad</td>
                      <td className="p-4 font-bold text-[#4997D0]">Online en vivo</td>
                      <td className="p-4 text-muted-foreground">Presencial o grabado</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#4997D0]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Pago</td>
                      <td className="p-4 font-bold text-[#4997D0]">GTQ o USD</td>
                      <td className="p-4 text-muted-foreground">Solo quetzales</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Cobertura</td>
                      <td className="p-4 font-bold text-[#4997D0]">Todo Guatemala</td>
                      <td className="p-4 text-muted-foreground">Solo Ciudad de Guatemala</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#4997D0]">$297 USD (aprox Q 2,200)</td>
                      <td className="p-4 text-muted-foreground">Q 1,500-Q 4,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-3xl font-bold">¿Qué Aprenderá Tu Hijo en InnovaKids?</h2>

              <p>
                Nuestro programa de 10 clases (5 semanas) está diseñado para que tu patojo pase de consumidor a creador
                de tecnología. Estos son los proyectos que realizará:
              </p>

              <ul className="my-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>
                    <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>
                    <strong>Vibe Art (Storytelling):</strong> Cómics e historias ilustradas con Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>
                    <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>
                    <strong>Vibe Coding:</strong> Videojuegos y apps funcionales con Cursor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>
                    <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>
                    <strong>Vibe Study:</strong> Técnicas de estudio potenciadas con IA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>
                    <strong>The Vibe Project:</strong> Proyecto final con portafolio digital
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">IA para Niños en las Principales Ciudades de Guatemala</h2>

              <h3 className="mt-8 text-2xl font-bold">Ciudad de Guatemala</h3>
              <p>
                La capital guatemalteca concentra universidades como la Universidad del Valle, la URL y la USAC con
                programas de tecnología e ingeniería. Los patojos capitalinos que aprenden IA hoy llegarán con ventaja
                a estas carreras. Además, el ecosistema tech de zona 4 y Campus Tec ya demanda talento digital joven.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Quetzaltenango (Xela)</h3>
              <p>
                La segunda ciudad más importante de Guatemala tiene un crecimiento educativo notable. Universidades
                como la Universidad de San Carlos (extensión Xela) y la Universidad Mesoamericana forman talento
                tech. Las clases online de InnovaKids permiten que los patojos de Xela accedan a educación de primer
                nivel sin viajar a la capital.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Antigua Guatemala</h3>
              <p>
                La joya colonial de Guatemala atrae cada vez más nómadas digitales y empresas tech. Los niños de
                Antigua pueden aprender IA con la misma calidad que en cualquier ciudad del mundo, todo desde la
                comodidad de su hogar.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Escuintla y el Resto del País</h3>
              <p>
                Al ser 100% online, nuestras clases llegan a Escuintla, Cobán, Huehuetenango, Petén y cualquier
                departamento de Guatemala. Solo necesitás internet y un computador. La geografía ya no es una barrera
                para la educación tech de tus patojos.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Guatemaltecas</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Andrea M.",
                  location: "Ciudad de Guatemala, Guatemala",
                  text: "Mi patojo de 10 años creó su primera app en 4 semanas. Ahora quiere estudiar ingeniería en la UVG. El curso le cambió la perspectiva completamente.",
                },
                {
                  name: "Roberto C.",
                  location: "Quetzaltenango, Guatemala",
                  text: "Desde Xela no hay opciones de IA para patojos. InnovaKids nos conectó con educación de primer nivel. Mi hija creó un videojuego y música con IA.",
                },
                {
                  name: "Lucía G.",
                  location: "Antigua Guatemala",
                  text: "Buscaba algo diferente para las vacaciones. InnovaKids superó todas las expectativas. Mi hijo de 13 años ahora enseña a sus primos a usar IA.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#F0C832]">
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>Todas las clases son supervisadas por un instructor adulto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>Las herramientas de IA se usan con filtros de contenido activados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>Los padres reciben un reporte semanal del progreso de su hijo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>Enseñamos uso ético y responsable de la IA desde la primera clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#4997D0]" />
                  <span>Los padres pueden observar cualquier clase en vivo</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes — Guatemala</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son online o presenciales?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde Ciudad de Guatemala,
                Quetzaltenango, Antigua, Escuintla o cualquier departamento de Guatemala. Solo necesita computador
                e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿A qué hora son las clases? (Horario Guatemala GMT-6)</h3>
              <p>
                Tenemos horarios adaptados al huso horario de Guatemala (GMT-6). Las clases son por las tardes después
                del colegio y sábados por la mañana. Al agendar tu clase gratis, coordinamos el horario ideal para
                tu patojo.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cómo se paga? ¿Aceptan quetzales?</h3>
              <p>
                El precio es de $297 USD (aproximadamente Q 2,200). Podés pagar con tarjeta de crédito, débito o
                PayPal en quetzales o dólares. La reserva es de solo $27 USD (aprox Q 200).
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Sirve para las vacaciones escolares?</h3>
              <p>
                Absolutamente. El programa dura 5 semanas (10 clases) y es perfecto para las vacaciones de fin de año
                (noviembre-enero) o cualquier época. Tu patojo aprovecha las vacaciones aprendiendo habilidades reales.
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

              <h3 className="mt-8 text-xl font-bold">¿Las clases son grupales?</h3>
              <p>
                No, todas las clases son 1 a 1 (un profesor, un alumno). Esto garantiza atención personalizada real,
                no clases masivas donde tu patojo se pierde.
              </p>
            </div>

            {/* CTA FINAL */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#4997D0] to-[#1A5276] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu patojo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agendá una clase gratuita y descubrí si InnovaKids es para tu familia. Sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F0C832] px-8 py-4 text-lg font-bold text-[#1A5276] transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#1A5276]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">$297 USD (aprox Q 2,200) · 10 clases · Clases 1 a 1 · Garantía de 10 días</p>
            </div>

            {/* LINKS RELACIONADOS */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/gt"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Guatemala <ArrowRight className="h-4 w-4" />
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
