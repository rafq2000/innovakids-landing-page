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
  title: "Cursos de Inteligencia Artificial para Niños en Puerto Rico: Guía Completa 2026",
  description:
    "Guía completa: lo que todo padre boricua debe saber antes de inscribir a su hijo en un curso de IA. Precios en USD, ventaja bilingüe, acceso al mercado tech de EE.UU. y mejores opciones.",
  keywords: [
    "curso ia niños puerto rico",
    "clases tecnología san juan",
    "educación tech boricua",
    "cursos de inteligencia artificial para niños puerto rico",
    "curso de ia para niños san juan",
    "clases de inteligencia artificial para adolescentes puerto rico",
    "aprendizaje de inteligencia artificial para niños boricuas",
    "cursos de verano tecnología puerto rico",
  ],
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en Puerto Rico: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Puerto Rico.",
    url: "https://www.innovakidslatam.com/pr/blog/cursos-inteligencia-artificial-ninos-puerto-rico-guia",
    locale: "es_PR",
    type: "article",
    siteName: "Blog InnovaKids Puerto Rico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Inteligencia Artificial para Niños en Puerto Rico: Guía Completa 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Puerto Rico.",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/pr/blog/cursos-inteligencia-artificial-ninos-puerto-rico-guia",
  },
}

export default function GuiaIANinosPuertoRico() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en Puerto Rico y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#CC0000] to-[#00205B] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Actualizado Junio 2026 · 12 min lectura</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Cursos de Inteligencia Artificial para Niños en Puerto Rico: Guía Completa 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo en la isla.
              Opciones desde San Juan, Bayamón, Carolina, Ponce y todo Puerto Rico. Precios en dólares, ventaja bilingüe y más.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Puerto Rico se está posicionando como el hub tecnológico del Caribe. Con la Ley 60 (Act 60) atrayendo
                empresas tech a la isla y una generación bilingüe con acceso directo al mercado de EE.UU., los niños
                puertorriqueños tienen una oportunidad única.{" "}
                <strong>¿Cómo preparas a tu hijo para aprovecharla?</strong> Esta guía te explica todo.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Clave para Niños Puertorriqueños?</h2>

              <p>
                La isla vive una transformación sin precedentes. Empresas como Abarca Health, Engine-4, Piloto 151 y decenas
                de startups tech están creando un ecosistema de innovación que necesita talento local. Para 2030, se estima
                que el 70% de los empleos en Puerto Rico requerirán habilidades digitales avanzadas. Los niños que empiecen
                hoy llegarán preparados.
              </p>

              <p>
                Además, los niños boricuas tienen una ventaja que pocos países de Latinoamérica comparten:{" "}
                <strong>son bilingües</strong>. Dominan español e inglés, lo que les permite acceder directamente al mercado
                tech más grande del mundo: Estados Unidos. Un niño puertorriqueño que aprende IA hoy puede trabajar mañana
                para empresas en Silicon Valley, Austin o Miami sin necesidad de visa.
              </p>

              <div className="my-8 rounded-2xl bg-[#00205B]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#00205B]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  Gracias a la Ley 60 (Act 60), Puerto Rico se ha convertido en destino de empresas de tecnología e
                  inversión. Compañías de blockchain, fintech y software se han establecido en la isla, creando un
                  ecosistema tech en crecimiento acelerado. Esto significa que tus hijos no necesitarán irse del país
                  para encontrar empleos tech de primer nivel.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">La Ventaja Bilingüe: El Superpoder Boricua</h2>

              <p>
                En el mundo de la inteligencia artificial, el inglés domina: documentación, herramientas, comunidades y
                empleos. Un niño de Bogotá o Lima necesita primero aprender inglés antes de acceder a este ecosistema.{" "}
                <strong>Tu hijo ya lo habla.</strong>
              </p>

              <p>
                Esta ventaja bilingüe, combinada con el dominio de herramientas de IA, convierte a los niños puertorriqueños
                en candidatos ideales para el mercado tech global. Pueden crear prompts en ambos idiomas, consumir tutoriales
                en inglés, y comunicarse con equipos internacionales desde el primer día.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Puerto Rico como Hub Tech del Caribe</h2>

              <p>
                La isla no solo atrae empresas con incentivos fiscales. El ecosistema tech puertorriqueño crece con fuerza:
              </p>

              <ul className="my-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span><strong>Engine-4:</strong> Aceleradora de startups en Bayamón que impulsa la innovación local</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span><strong>Piloto 151:</strong> Hub de coworking y emprendimiento tech en San Juan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span><strong>UPR y UPRM:</strong> Programas de ciencias de computación reconocidos a nivel federal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span><strong>Ley 60:</strong> Atrae empresas tech con incentivos fiscales únicos en territorio estadounidense</span>
                </li>
              </ul>

              <p>
                Tu hijo puede ser parte de esta revolución. Un niño que aprende IA a los 10 años estará listo para
                emprender o trabajar en tech a los 18, justo cuando este ecosistema madure.
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
                Las clases con 20 o 30 niños no funcionan para enseñar habilidades técnicas. Busca cursos con
                clases 1 a 1, individuales, para garantizar atención personalizada real.
              </p>

              <h3 className="mt-8 text-2xl font-bold">4. Garantía de Satisfacción</h3>
              <p>
                Un curso serio ofrece garantía. Si no cumple tus expectativas, deberías poder recuperar tu inversión
                sin complicaciones.
              </p>
            </div>

            {/* CTA INTERMEDIO */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#00205B] to-[#001338] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Quieres que tu hijo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. 1ª clase gratis, sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#CC0000] px-6 py-3 font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#00205B]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en Puerto Rico</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#00205B]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Formato de clase</td>
                      <td className="p-4 font-bold text-[#00205B]">1 a 1 (individual)</td>
                      <td className="p-4 text-muted-foreground">Grupos de 15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#00205B]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#00205B]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Modalidad</td>
                      <td className="p-4 font-bold text-[#00205B]">Online en vivo</td>
                      <td className="p-4 text-muted-foreground">Presencial o grabado</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#00205B]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Pago</td>
                      <td className="p-4 font-bold text-[#00205B]">Directo en USD</td>
                      <td className="p-4 text-muted-foreground">Varía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Cobertura</td>
                      <td className="p-4 font-bold text-[#00205B]">Toda la isla</td>
                      <td className="p-4 text-muted-foreground">Solo área metro</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#00205B]">$297 USD</td>
                      <td className="p-4 text-muted-foreground">$200-$500 USD</td>
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>
                    <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>
                    <strong>Vibe Art (Storytelling):</strong> Cómics e historias ilustradas con Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>
                    <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>
                    <strong>Vibe Coding:</strong> Videojuegos y apps funcionales con Cursor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>
                    <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>
                    <strong>Vibe Study:</strong> Técnicas de estudio potenciadas con IA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>
                    <strong>The Vibe Project:</strong> Proyecto final con portafolio digital
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">IA para Niños en las Principales Ciudades de Puerto Rico</h2>

              <h3 className="mt-8 text-2xl font-bold">San Juan</h3>
              <p>
                La capital boricua es el centro del ecosistema tech de la isla. Con hubs como Piloto 151, startups en
                Santurce y la cercanía a universidades como la UPR Río Piedras, los niños de San Juan que aprenden IA hoy
                tienen acceso directo a oportunidades que antes solo existían en el mainland. Nuestras clases se adaptan
                al calendario escolar puertorriqueño.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Bayamón</h3>
              <p>
                Bayamón alberga Engine-4, una de las aceleradoras de startups más importantes del Caribe. Con la
                Universidad Interamericana y un ecosistema emprendedor en crecimiento, los niños bayamoneses que dominan
                IA tendrán una ventaja competitiva enorme cuando lleguen al mercado laboral.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Carolina y Ponce</h3>
              <p>
                Al ser 100% online, nuestras clases llegan a Carolina, Ponce, Mayagüez, Caguas y cualquier municipio de
                Puerto Rico. Solo necesitas internet y un computador. Ya no importa si vives en el área metro o en la
                montaña: la educación tech de primer nivel llega a toda la isla.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Cultura Caribeña Tech: Lo Mejor de Dos Mundos</h2>

              <p>
                Los niños puertorriqueños crecen en una cultura única que combina la calidez caribeña con la
                conexión directa a Estados Unidos. Esto les da una perspectiva multicultural que es extremadamente
                valiosa en el mundo tech global.
              </p>

              <p>
                En InnovaKids aprovechamos esta dualidad cultural. Nuestras clases son en español, pero los niños
                aprenden a usar herramientas en ambos idiomas, crear contenido bilingüe y pensar globalmente. Un niño boricua
                que domina IA puede crear una app en español para Latinoamérica y en inglés para el mercado
                estadounidense, todo desde la comodidad de su hogar en la isla.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Boricuas</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Sofía M.",
                  location: "San Juan, Puerto Rico",
                  text: "Mi hijo de 12 años creó su primera app bilingüe en 4 semanas. Ahora quiere estudiar Computer Science en la UPR. InnovaKids le abrió los ojos a lo que puede lograr.",
                },
                {
                  name: "Roberto D.",
                  location: "Bayamón, Puerto Rico",
                  text: "Buscaba algo diferente para el verano. Mi hija creó un videojuego y música con IA. Es el mejor curso tech que hemos encontrado en la isla.",
                },
                {
                  name: "Carmen L.",
                  location: "Ponce, Puerto Rico",
                  text: "Vivimos en Ponce y no hay opciones locales de IA para niños. InnovaKids nos conectó con educación de primer nivel sin tener que viajar al área metro.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#CC0000]">
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>Todas las clases son supervisadas por un instructor adulto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>Las herramientas de IA se usan con filtros de contenido activados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>Los padres reciben un reporte semanal del progreso de su hijo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>Enseñamos uso ético y responsable de la IA desde la primera clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#00205B]" />
                  <span>Los padres pueden observar cualquier clase en vivo</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes — Puerto Rico</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son online o presenciales?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde San Juan, Bayamón, Carolina,
                Ponce o cualquier municipio de Puerto Rico. Solo necesita computador e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿A qué hora son las clases? (Horario AST, GMT-4)</h3>
              <p>
                Tenemos horarios adaptados al huso horario de Puerto Rico (AST, GMT-4). Las clases son por las tardes
                después del colegio y sábados por la mañana. Al agendar tu clase gratis, coordinamos el horario ideal
                para tu familia.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cómo se paga? ¿Aceptan dólares?</h3>
              <p>
                Sí, el precio es de $297 USD y como Puerto Rico usa el dólar estadounidense, no hay conversión de
                moneda. Puedes pagar con tarjeta de crédito, débito o PayPal. La reserva es de solo $27 USD.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son en español o inglés?</h3>
              <p>
                Las clases son en español, pero tu hijo aprenderá a usar herramientas en ambos idiomas. Esto potencia
                la ventaja bilingüe natural de los niños puertorriqueños y los prepara para el mercado tech global.
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

              <h3 className="mt-8 text-xl font-bold">¿Cuántos niños hay por clase?</h3>
              <p>
                Las clases son 1 a 1: tu hijo es el único alumno con el profesor. Esto garantiza atención
                personalizada real, no clases masivas donde se pierde entre otros niños.
              </p>
            </div>

            {/* CTA FINAL */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#00205B] to-[#001338] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu hijo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agenda una clase gratuita y descubre si InnovaKids es para tu familia. Sin compromiso.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#CC0000] px-8 py-4 text-lg font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#00205B]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">$297 USD · 10 clases · Clases 1 a 1 · Garantía de 10 días</p>
            </div>

            {/* LINKS RELACIONADOS */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pr"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Puerto Rico <ArrowRight className="h-4 w-4" />
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
