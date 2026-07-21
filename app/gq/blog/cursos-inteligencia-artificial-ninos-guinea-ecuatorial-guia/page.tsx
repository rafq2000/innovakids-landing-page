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
  title: "Cursos de Inteligencia Artificial para Niños en Guinea Ecuatorial: Guía 2026",
  description:
    "Guía completa para padres ecuatoguineanos: cursos de IA para niños en Malabo, Bata y todo el país. Precios en FCFA, clases online en vivo, garantía 10 días. El único país hispanohablante de África conectado con la revolución tech global.",
  keywords: [
    "curso ia niños guinea ecuatorial",
    "educación tecnología malabo",
    "clases online guinea ecuatorial",
    "cursos de inteligencia artificial para niños guinea ecuatorial",
    "curso de ia para niños malabo",
    "clases de inteligencia artificial para adolescentes guinea ecuatorial",
    "educación tecnológica bata",
    "aprendizaje de inteligencia artificial para niños áfrica",
  ],
  openGraph: {
    title: "Cursos de Inteligencia Artificial para Niños en Guinea Ecuatorial: Guía 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Guinea Ecuatorial. Clases online en español, sin barreras geográficas.",
    url: "https://www.innovakidslatam.com/gq/blog/cursos-inteligencia-artificial-ninos-guinea-ecuatorial-guia",
    locale: "es_GQ",
    type: "article",
    siteName: "Blog InnovaKids Guinea Ecuatorial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Inteligencia Artificial para Niños en Guinea Ecuatorial: Guía 2026",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Guinea Ecuatorial.",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/gq/blog/cursos-inteligencia-artificial-ninos-guinea-ecuatorial-guia",
  },
}

export default function GuiaIANinosGuineaEcuatorial() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en Guinea Ecuatorial y me interesa más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#3E9A00] via-[#FFFFFF] to-[#E32118] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm text-white">
              <Clock className="h-4 w-4" />
              <span>Actualizado Junio 2026 · 12 min lectura</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Cursos de Inteligencia Artificial para Niños en Guinea Ecuatorial: Guía 2026
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-800">
              La guía definitiva para padres ecuatoguineanos. Descubre cómo tu hijo puede aprender IA desde Malabo,
              Bata o Ebebiyín con clases online en español. El único país hispanohablante de África, conectado con la revolución tech global.
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Guinea Ecuatorial es el único país hispanohablante de África, y eso le da una ventaja extraordinaria:
                acceso directo a toda la educación tech en español, el segundo idioma más hablado del mundo por número de hablantes nativos.{" "}
                <strong>¿Cómo aprovechas esta ventaja para preparar a tu hijo para el futuro?</strong> Esta guía te lo explica todo.
              </p>

              <h2 className="mt-12 text-3xl font-bold">¿Por Qué Aprender IA es Clave para Niños Ecuatoguineanos?</h2>

              <p>
                Guinea Ecuatorial vive un momento de transformación. Mientras el país diversifica su economía más allá del
                petróleo, las habilidades digitales se convierten en el pasaporte al futuro. Los niños que dominen la
                inteligencia artificial hoy serán los profesionales más demandados de la región mañana.
              </p>

              <p>
                La gran ventaja de Guinea Ecuatorial es el español. Mientras otros países africanos dependen de contenido en
                inglés o francés para acceder a educación tech, los niños ecuatoguineanos pueden aprender IA directamente en su
                idioma oficial, conectándose con el ecosistema hispanohablante global de más de 500 millones de personas.
              </p>

              <div className="my-8 rounded-2xl bg-[#3E9A00]/10 p-6">
                <h3 className="mb-4 text-xl font-bold text-[#3E9A00]">Dato Importante</h3>
                <p className="text-muted-foreground">
                  En toda África subsahariana, la demanda de profesionales en inteligencia artificial supera la oferta en
                  una proporción de 10 a 1. Un niño ecuatoguineano que hoy aprende IA no solo se prepara para el futuro
                  de su país, sino que se posiciona como un talento escaso y valioso para todo el continente y el mundo hispano.
                  Las clases online eliminan la barrera geográfica y conectan a los niños ecuatoguineanos con oportunidades globales.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold">Clases Online: Eliminando Barreras Geográficas desde África</h2>

              <p>
                Una de las mayores ventajas de InnovaKids para familias ecuatoguineanas es que las clases son 100% online en vivo.
                No importa si vives en Malabo, Bata o Ebebiyín: tu hijo accede a la misma educación de calidad que niños en
                Madrid, Ciudad de México o Buenos Aires.
              </p>

              <p>
                Las clases online eliminan las limitaciones de infraestructura local. Tu hijo solo necesita un computador e
                internet para conectarse con instructores especializados y compañeros de toda Latinoamérica y España. Es una
                ventana al mundo tech global, directamente desde Guinea Ecuatorial.
              </p>

              <h2 className="mt-12 text-3xl font-bold">La Ventaja del Español como Idioma Global Tech</h2>

              <p>
                Guinea Ecuatorial tiene algo que ningún otro país africano tiene: el español como idioma oficial principal. Esto
                significa que los niños ecuatoguineanos pueden acceder a todo el ecosistema de educación tecnológica en español,
                conectarse con startups y empresas tech en España, México, Colombia, Chile y toda Latinoamérica.
              </p>

              <p>
                El español es el segundo idioma más hablado del mundo por hablantes nativos y el tercero en internet.
                Un niño ecuatoguineano que domine IA en español tiene acceso a oportunidades en más de 20 países, además de
                poder expandirse al mercado anglófono y francófono con facilidad, gracias al multilingüismo natural del país.
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
                Las clases con 20 o 30 niños no funcionan para enseñar habilidades técnicas. Busca cursos con clases
                1 a 1 (individuales) para garantizar atención personalizada real.
              </p>

              <h3 className="mt-8 text-2xl font-bold">4. Garantía de Satisfacción</h3>
              <p>
                Un curso serio ofrece garantía. Si no cumple tus expectativas, deberías poder recuperar tu inversión
                sin complicaciones.
              </p>
            </div>

            {/* CTA INTERMEDIO */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#3E9A00] to-[#2a6b00] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Quieres que tu hijo aprenda IA de verdad?</h3>
              <p className="mb-6 text-white/80">
                En InnovaKids cumplimos todos estos requisitos. 1ª clase gratis, sin compromiso. Clases en español desde Guinea Ecuatorial.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E32118] px-6 py-3 font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#3E9A00]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* COMPARACIÓN */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mt-12 text-3xl font-bold">Comparación: InnovaKids vs Otras Opciones en Guinea Ecuatorial</h2>

              <div className="my-8 overflow-hidden rounded-2xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 font-bold">Característica</th>
                      <th className="p-4 font-bold text-[#3E9A00]">InnovaKids</th>
                      <th className="p-4 font-bold">Otros Cursos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4">Formato de clase</td>
                      <td className="p-4 font-bold text-[#3E9A00]">1 a 1 (individual)</td>
                      <td className="p-4 text-muted-foreground">Grupos de 15-30</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Herramientas</td>
                      <td className="p-4 font-bold text-[#3E9A00]">10+ profesionales</td>
                      <td className="p-4 text-muted-foreground">2-3 básicas</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Proyectos reales</td>
                      <td className="p-4 font-bold text-[#3E9A00]">6+ proyectos</td>
                      <td className="p-4 text-muted-foreground">1-2 proyectos</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Modalidad</td>
                      <td className="p-4 font-bold text-[#3E9A00]">Online en vivo</td>
                      <td className="p-4 text-muted-foreground">Presencial limitado</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Garantía</td>
                      <td className="p-4 font-bold text-[#3E9A00]">10 días devolución</td>
                      <td className="p-4 text-muted-foreground">Sin garantía</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Idioma</td>
                      <td className="p-4 font-bold text-[#3E9A00]">100% en español</td>
                      <td className="p-4 text-muted-foreground">Inglés o francés</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Cobertura</td>
                      <td className="p-4 font-bold text-[#3E9A00]">Toda Guinea Ecuatorial</td>
                      <td className="p-4 text-muted-foreground">Solo presencial en capitales</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4">Precio</td>
                      <td className="p-4 font-bold text-[#3E9A00]">$297 USD (~178.000 FCFA)</td>
                      <td className="p-4 text-muted-foreground">Variable</td>
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>
                    <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>
                    <strong>Vibe Art (Storytelling):</strong> Cómics e historias ilustradas con Midjourney
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>
                    <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>
                    <strong>Vibe Coding:</strong> Videojuegos y apps funcionales con Cursor
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>
                    <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>
                    <strong>Vibe Study:</strong> Técnicas de estudio potenciadas con IA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>
                    <strong>The Vibe Project:</strong> Proyecto final con portafolio digital
                  </span>
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold">IA para Niños en las Principales Ciudades de Guinea Ecuatorial</h2>

              <h3 className="mt-8 text-2xl font-bold">Malabo</h3>
              <p>
                La capital de Guinea Ecuatorial, ubicada en la isla de Bioko, es el centro político y económico del país con
                la mejor infraestructura de telecomunicaciones. Las familias en Malabo ahora pueden acceder a educación tech
                de primer nivel sin necesidad de enviar a sus hijos al extranjero. Con InnovaKids, un niño en Malabo aprende
                con las mismas herramientas que uno en Silicon Valley.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Bata</h3>
              <p>
                La ciudad más grande de la región continental y centro económico del país. Bata está creciendo rápidamente
                y las familias buscan opciones educativas innovadoras. Las clases online de InnovaKids llegan directamente
                a Bata, conectando a los niños con el ecosistema tech hispanohablante global.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Ebebiyín y el Resto del País</h3>
              <p>
                Al ser 100% online, nuestras clases llegan a Ebebiyín, Mongomo, Evinayong y cualquier ciudad de Guinea
                Ecuatorial. Solo necesitas internet y un computador. La geografía ya no es una barrera para la educación tech,
                ni siquiera entre África y América Latina.
              </p>

              <h2 className="mt-12 text-3xl font-bold">Testimonios de Familias Ecuatoguineanas</h2>
            </div>

            {/* TESTIMONIOS */}
            <div className="my-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Esperanza N.",
                  location: "Malabo, Guinea Ecuatorial",
                  text: "Nunca imaginé que mi hijo pudiera aprender inteligencia artificial desde Malabo. Creó su primer videojuego en 4 semanas y ahora sueña con ser programador. Las clases online funcionan perfecto.",
                },
                {
                  name: "Francisco O.",
                  location: "Bata, Guinea Ecuatorial",
                  text: "Buscábamos opciones de educación tech en español y descubrimos InnovaKids. Mi hija de 12 años ahora crea arte digital y música con IA. Es impresionante lo que aprenden.",
                },
                {
                  name: "Carmen M.",
                  location: "Ebebiyín, Guinea Ecuatorial",
                  text: "Vivimos en Ebebiyín y antes no teníamos acceso a este tipo de educación. Gracias a InnovaKids, mi hijo se conecta con niños de toda Latinoamérica y aprende habilidades del futuro.",
                },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mb-4 flex text-[#E32118]">
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
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>Todas las clases son supervisadas por un instructor adulto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>Las herramientas de IA se usan con filtros de contenido activados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>Los padres reciben un reporte semanal del progreso de su hijo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>Enseñamos uso ético y responsable de la IA desde la primera clase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#3E9A00]" />
                  <span>Los padres pueden observar cualquier clase en vivo</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="mt-12 text-3xl font-bold">Preguntas Frecuentes — Guinea Ecuatorial</h2>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son online o presenciales?</h3>
              <p>
                Todas las clases son 100% online en vivo. Tu hijo puede participar desde Malabo, Bata, Ebebiyín,
                Mongomo o cualquier ciudad de Guinea Ecuatorial. Solo necesita computador e internet.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿A qué hora son las clases? (Horario WAT, GMT+1)</h3>
              <p>
                Tenemos horarios adaptados al huso horario de Guinea Ecuatorial (WAT, GMT+1). Las clases son por las tardes
                después del colegio y fines de semana. Al agendar tu clase gratis, coordinamos el horario ideal para tu familia.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Cómo se paga desde Guinea Ecuatorial?</h3>
              <p>
                El precio es de $297 USD (aproximadamente 178.000 FCFA). Puedes pagar con tarjeta de crédito internacional,
                tarjeta de débito Visa/Mastercard o PayPal. La reserva es de solo $27 USD (aprox. 16.000 FCFA).
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Las clases son en español?</h3>
              <p>
                Sí, todas las clases son 100% en español. Como Guinea Ecuatorial es el único país hispanohablante de África,
                tus hijos se integran perfectamente con compañeros de España y Latinoamérica. No hay barrera de idioma.
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
                no clases masivas donde tu hijo se pierde.
              </p>

              <h3 className="mt-8 text-xl font-bold">¿Funciona bien la conexión a internet desde Guinea Ecuatorial?</h3>
              <p>
                Las clases funcionan con cualquier conexión estable de internet. Usamos Zoom optimizado que requiere
                poca banda ancha. Si puedes hacer una videollamada de WhatsApp, puedes tomar nuestras clases sin problema.
              </p>
            </div>

            {/* CTA FINAL */}
            <div className="my-12 rounded-3xl bg-gradient-to-br from-[#3E9A00] to-[#2a6b00] p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">¿Listo para darle a tu hijo la ventaja del futuro?</h3>
              <p className="mb-6 text-white/80">
                Agenda una clase gratuita y descubre si InnovaKids es para tu familia. Sin compromiso, desde cualquier ciudad de Guinea Ecuatorial.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E32118] px-8 py-4 text-lg font-bold transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Clase Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold transition-all hover:bg-white hover:text-[#3E9A00]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/60">$297 USD (~178.000 FCFA) · 10 clases · Clases 1 a 1 · Garantía de 10 días</p>
            </div>

            {/* LINKS RELACIONADOS */}
            <div className="mt-12">
              <h3 className="mb-6 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/gq"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Guinea Ecuatorial <ArrowRight className="h-4 w-4" />
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
