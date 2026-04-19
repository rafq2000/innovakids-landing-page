import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  // 58 chars · keyword-first · safety + brand
  title: "Cómo Proteger a tus Hijos de la IA · Guía Segura | InnovaKids",
  // 152 chars · proof + differentiator + CTA
  description:
    "Guía para padres sobre uso seguro de IA en niños 8-17 años: supervisa, protege la privacidad y enseña uso responsable. Probada por 527 familias. Lee ya.",
  keywords: [
    "ia segura para niños",
    "proteger hijos inteligencia artificial",
    "uso responsable ia niños",
    "seguridad ia niños",
    "privacidad ia niños",
    "supervisar ia hijos",
    "como enseñar ia a mis hijos",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/como-proteger-hijos-ia-uso-seguro-responsable",
  },
  openGraph: {
    title: "Cómo Proteger a tus Hijos en la Era de la IA · Guía Segura | InnovaKids",
    description:
      "Guía completa para padres: cómo supervisar, proteger la privacidad y enseñar uso responsable de la IA a niños y adolescentes.",
    url: "https://www.innovakidslatam.com/blog/como-proteger-hijos-ia-uso-seguro-responsable",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Cómo proteger a tus hijos en la era de la IA - Guía de uso seguro InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Proteger a tus Hijos de la IA · Guía Segura | InnovaKids",
    description:
      "Guía para padres sobre uso seguro y responsable de la IA en niños 8-17 años. Probada por 527 familias.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Es seguro que mi hijo use ChatGPT u otras herramientas de IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, siempre que se establezcan reglas claras y supervision adecuada. ChatGPT tiene restricciones de contenido, pero ningun filtro es perfecto. Lo mas importante es que tu hijo entienda que informacion no debe compartir (datos personales, fotos, direccion) y que aprenda a evaluar criticamente las respuestas de la IA.",
      },
    },
    {
      "@type": "Question",
      name: "Deberia prohibirle a mi hijo usar Inteligencia Artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Prohibir la IA es como haber prohibido Internet en los anos 2000: solo retrasa el aprendizaje de tu hijo sin protegerlo realmente. La IA esta en todas partes y tu hijo la encontrara de todas formas. Es mucho mejor ensenarlo a usarla de forma segura y responsable que pretender que no existe.",
      },
    },
    {
      "@type": "Question",
      name: "Que datos personales no debe compartir mi hijo con la IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tu hijo no debe compartir con herramientas de IA: su nombre completo, direccion, telefono, nombre del colegio, fotos personales, contrasenas, informacion financiera de la familia ni datos de otros ninos. Ensenale la regla: si no se lo dirias a un desconocido en la calle, no se lo digas a la IA.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Proteger a tus Hijos en la Era de la IA: Guia de Uso Seguro y Responsable",
  description:
    "Guia practica para padres sobre como supervisar y ensenar uso responsable de la Inteligencia Artificial a ninos y adolescentes.",
  author: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  publisher: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/como-proteger-hijos-ia-uso-seguro-responsable",
}

export default function ComoProtegerHijosIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white text-[#2D3436]">
        {/* Article Header */}
        <header className="pt-32 pb-12 px-4 bg-[#F8F9FA] text-center">
          <div className="container mx-auto max-w-4xl">
            <Badge className="mb-6 bg-[#4ECDC4]/10 text-[#4ECDC4] border-[#4ECDC4]/20 px-4 py-1 text-sm">
              Guia para Padres
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D3436] leading-tight">
              Como Proteger a tus Hijos <br className="hidden md:block" /> en la Era de la IA
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Abril 2026</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Lectura: 15 min</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              La Inteligencia Artificial ya es parte de la vida de tus hijos. La pregunta no es si la
              usaran, sino como la usaran. Esta guia te da las herramientas para que lo hagan de
              forma segura, responsable y productiva.
            </p>
          </div>
        </header>

        {/* Article Body */}
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Si eres padre o madre en 2026, probablemente has sentido una mezcla de fascinacion y
                preocupacion frente a la Inteligencia Artificial. Por un lado, sabes que es una herramienta
                poderosa que puede ayudar a tu hijo a aprender y crear. Por otro lado, te preguntas:
                ¿es seguro? ¿Que pasa con su privacidad? ¿No deberia esperar a que sea mas grande?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Estas preocupaciones son completamente validas. Pero la evidencia muestra que la mejor
                proteccion no es prohibir la tecnologia, sino <strong>educar para usarla bien</strong>.
                Los ninos que aprenden a usar la IA de forma guiada y responsable estan mejor preparados
                que aquellos que la descubren solos, sin contexto ni supervision.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En esta guia, compartimos todo lo que hemos aprendido en{" "}
                <Link href="/cursos/inteligencia-artificial" className="text-[#4ECDC4] hover:underline">
                  InnovaKids
                </Link>{" "}
                trabajando con cientos de familias latinoamericanas. Desde reglas basicas de privacidad
                hasta estrategias para fomentar el pensamiento critico, aqui encontraras un plan
                practico para que tu hijo navegue la era de la IA con confianza y seguridad.
              </p>
            </div>

            {/* Why Not to Ban AI */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Por Que Prohibir la IA No es la Solucion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Es tentador pensar que si le prohibimos la IA a nuestros hijos, los estamos protegiendo.
                Pero la historia nos ensena que esa estrategia nunca funciona con la tecnologia. Los padres
                que prohibieron Internet en los anos 2000 no protegieron a sus hijos; solo los dejaron
                sin las herramientas para navegar el mundo digital de forma segura.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La IA ya esta integrada en herramientas cotidianas que tu hijo usa: el autocompletado
                de su telefono, las recomendaciones de YouTube, los filtros de Instagram, los asistentes
                de voz. Prohibir ChatGPT no elimina la IA de su vida; solo le quita la oportunidad
                de entenderla.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Ademas, hay una desventaja competitiva real. Mientras tu hijo no aprende a usar IA,
                sus companeros si lo hacen. Cuando llegue a la universidad o al mercado laboral,
                estara en desventaja frente a quienes crecieron familiarizados con estas herramientas.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Riesgos de Prohibir la IA</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Efecto rebote</strong> — Lo prohibido genera curiosidad. Tu hijo la usara a escondidas sin tu guia</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Brecha de habilidades</strong> — Mientras otros ninos aprenden, el tuyo se queda atras</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Falta de criterio</strong> — Sin educacion sobre IA, no sabra distinguir informacion real de falsa</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Oportunidad perdida</strong> — La IA puede potenciar su aprendizaje, creatividad y desarrollo personal</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Privacy Rules */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Reglas de Privacidad: Que Nunca Debe Compartir Tu Hijo</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La primera linea de defensa es clara y simple: ensenale a tu hijo que informacion es
                privada y nunca debe compartirse con herramientas de IA. Esto es independiente de la
                herramienta que use y aplica tanto para ChatGPT como para cualquier otro servicio.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Informacion que NUNCA debe compartir</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">X</span>
                    <span><strong>Nombre completo real</strong> — Puede usar un seudonimo o su primer nombre solamente</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">X</span>
                    <span><strong>Direccion de casa o del colegio</strong> — Ninguna IA necesita saber donde vive</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">X</span>
                    <span><strong>Numero de telefono o email personal</strong> — Datos de contacto son estrictamente privados</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">X</span>
                    <span><strong>Fotos personales o de la familia</strong> — Nunca subir imagenes con rostros a herramientas de IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">X</span>
                    <span><strong>Contrasenas o datos financieros</strong> — Ningun servicio de IA necesita esta informacion</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">X</span>
                    <span><strong>Datos de otros ninos</strong> — No debe compartir informacion de companeros o amigos</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Una regla practica que ensenamos en InnovaKids es: <strong>&quot;Si no se lo dirias a un
                desconocido en la calle, no se lo digas a la IA&quot;</strong>. Esta regla es facil de
                recordar para ninos de cualquier edad y cubre la gran mayoria de situaciones.
              </p>
            </section>

            {/* Age-Appropriate Supervision */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Supervision Segun la Edad</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El nivel de supervision que necesita tu hijo varia segun su edad y madurez. No es lo mismo
                un nino de 8 anos que un adolescente de 16. Aqui te damos pautas concretas para cada
                grupo de edad.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">8-10 anos: Supervision Directa</h3>
                  <p className="text-gray-700 mb-3">
                    A esta edad, tu hijo deberia usar herramientas de IA siempre con un adulto presente
                    o en un entorno controlado como las{" "}
                    <Link href="/cursos/inteligencia-artificial" className="text-[#4ECDC4] hover:underline">
                      clases de InnovaKids
                    </Link>. No porque la IA sea peligrosa en si misma, sino porque los ninos
                    de esta edad aun no tienen el criterio para evaluar las respuestas de forma independiente.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>-- Usa la IA junto a tu hijo, como una actividad compartida</li>
                    <li>-- Revisa las conversaciones con la IA de vez en cuando</li>
                    <li>-- Establece tiempos de uso claros (30-45 minutos por sesion)</li>
                    <li>-- Celebra lo que crea para reforzar el uso positivo</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">11-13 anos: Supervision Guiada</h3>
                  <p className="text-gray-700 mb-3">
                    Los preadolescentes pueden usar la IA con mas independencia, pero aun necesitan
                    supervision regular. A esta edad, el enfoque cambia de controlar a conversar.
                    Preguntale que esta haciendo con la IA, que aprendio, que le sorprendio.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>-- Revisa periodicamente (no constantemente) su uso de IA</li>
                    <li>-- Ensenale a verificar informacion: si la IA dice algo, que lo confirme en otra fuente</li>
                    <li>-- Habla sobre las limitaciones de la IA: no siempre tiene razon</li>
                    <li>-- Establece reglas claras sobre que tipo de contenido puede pedir</li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                  <h3 className="text-xl font-bold text-pink-800 mb-3">14-17 anos: Autonomia Responsable</h3>
                  <p className="text-gray-700 mb-3">
                    Los adolescentes necesitan espacio para explorar por su cuenta. Tu rol ya no es
                    supervisar cada interaccion, sino asegurarte de que tengan las bases para tomar
                    buenas decisiones. Es el momento de hablar de temas mas profundos como sesgos
                    algoritmicos, deepfakes y propiedad intelectual.
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>-- Ten conversaciones periodicas sobre lo que descubren con la IA</li>
                    <li>-- Discutan juntos noticias sobre IA y su impacto social</li>
                    <li>-- Animalo a cuestionar y verificar siempre la informacion generada</li>
                    <li>-- Confia en su criterio pero mantente disponible para dudas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Teaching Critical Thinking */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Ensenando Pensamiento Critico frente a la IA</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La habilidad mas importante que puedes ensenerle a tu hijo sobre la IA no es como
                usarla, sino <strong>como no confiar ciegamente en ella</strong>. La IA se equivoca, inventa
                datos, tiene sesgos y puede generar contenido danino si no se le dan las instrucciones
                correctas. Un nino que entiende esto esta verdaderamente protegido.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">5 Preguntas que tu Hijo Debe Hacerse Siempre</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">1.</span>
                    <span><strong>&quot;Es esto verdad?&quot;</strong> — La IA puede generar informacion falsa con total confianza. Siempre verificar datos importantes en fuentes confiables.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">2.</span>
                    <span><strong>&quot;Quien podria verse afectado?&quot;</strong> — Antes de compartir algo generado por IA, pensar si podria danar a alguien.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">3.</span>
                    <span><strong>&quot;Estoy compartiendo algo privado?&quot;</strong> — Revisar que la informacion que le dan a la IA no sea personal o sensible.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">4.</span>
                    <span><strong>&quot;Es esto justo?&quot;</strong> — La IA puede reflejar sesgos. Si algo suena injusto o estereotipado, cuestionarlo.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">5.</span>
                    <span><strong>&quot;Estoy aprendiendo o solo copiando?&quot;</strong> — Usar la IA como herramienta de aprendizaje, no como atajo para evitar pensar.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Age-Appropriate Tools */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Herramientas de IA Seguras por Edad</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                No todas las herramientas de IA son iguales en terminos de seguridad. Algunas tienen
                filtros de contenido mas estrictos, otras estan disenadas especificamente para ninos.
                Aqui te orientamos sobre cuales son apropiadas para cada edad.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-[#F8F9FA] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#2D3436] text-white">
                      <th className="text-left p-4 font-semibold">Herramienta</th>
                      <th className="p-4 font-semibold">Edad Minima</th>
                      <th className="p-4 font-semibold">Nivel de Seguridad</th>
                      <th className="p-4 font-semibold">Uso Recomendado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "ChatGPT (con cuenta de padres)", age: "8+", safety: "Alto (con filtros)", use: "Aprendizaje, creatividad" },
                      { tool: "DALL-E / Canva IA", age: "8+", safety: "Alto", use: "Arte y diseno digital" },
                      { tool: "Suno AI", age: "10+", safety: "Medio-Alto", use: "Creacion musical" },
                      { tool: "Replit / Cursor", age: "11+", safety: "Medio", use: "Vibe Coding" },
                      { tool: "Claude", age: "13+", safety: "Alto", use: "Investigacion, escritura" },
                      { tool: "Midjourney", age: "13+", safety: "Medio", use: "Arte avanzado" },
                    ].map((row) => (
                      <tr key={row.tool} className="border-b border-gray-200">
                        <td className="p-4 font-medium text-[#2D3436]">{row.tool}</td>
                        <td className="p-4 text-center text-gray-600">{row.age}</td>
                        <td className="p-4 text-center text-gray-600">{row.safety}</td>
                        <td className="p-4 text-center text-gray-600">{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                En{" "}
                <Link href="/confianza-y-seguridad" className="text-[#4ECDC4] hover:underline">
                  InnovaKids nos tomamos la seguridad muy en serio
                </Link>
                . Todos los estudiantes usan herramientas previamente evaluadas por nuestro equipo,
                con configuraciones de seguridad optimizadas para cada grupo de edad. Los mentores
                supervisan el uso en tiempo real durante cada clase.
              </p>
            </section>

            {/* Setting Up Rules at Home */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Como Establecer Reglas de IA en Casa</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Las reglas funcionan mejor cuando son pocas, claras y acordadas en familia. Aqui te
                proponemos un marco simple que puedes adaptar a la edad y madurez de tu hijo.
              </p>

              <div className="bg-[#4ECDC4]/10 p-6 rounded-xl border border-[#4ECDC4]/20 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Pacto Familiar de IA (Ejemplo)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>1. Transparencia:</strong> Si uso IA para una tarea del colegio, lo declaro. Usar IA para aprender esta bien; usarla para copiar no.</li>
                  <li><strong>2. Privacidad:</strong> Nunca comparto datos personales (mios o de otros) con herramientas de IA.</li>
                  <li><strong>3. Verificacion:</strong> Si la IA me dice un dato importante, lo verifico en otra fuente antes de creerlo.</li>
                  <li><strong>4. Respeto:</strong> No uso la IA para crear contenido que dane, burle o perjudique a nadie.</li>
                  <li><strong>5. Equilibrio:</strong> La IA es una herramienta, no un reemplazo del pensamiento propio. Siempre pienso primero.</li>
                  <li><strong>6. Comunicacion:</strong> Si algo me incomoda o confunde sobre la IA, lo hablo con mis padres.</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Este tipo de acuerdos funcionan mucho mejor que las prohibiciones porque involucran al
                nino en la toma de decisiones. Se siente respetado y es mas probable que cumpla las
                reglas porque las entiende y las acepto voluntariamente.
              </p>
            </section>

            {/* AI and School */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">IA y Tareas del Colegio: Donde Esta el Limite</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Una de las preocupaciones mas grandes de los padres es que sus hijos usen la IA para
                hacer trampa en el colegio. Es una preocupacion valida, pero la solucion no es prohibir
                sino <strong>ensenar la diferencia entre usar y abusar</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Usar la IA para <strong>entender</strong> un tema es bueno: &quot;Explicame las fracciones como
                si tuviera 10 anos&quot;. Usar la IA para <strong>aprender a escribir mejor</strong> es bueno:
                &quot;Revisa mi ensayo y dime que puedo mejorar&quot;. Usar la IA para <strong>hacer la tarea
                por el</strong> es malo: &quot;Escribe mi ensayo sobre la Independencia&quot;.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La clave esta en que el pensamiento y el esfuerzo sigan siendo del nino. La IA puede
                ser un tutor, un asistente, un corrector, pero nunca debe reemplazar el proceso de
                pensar, crear y aprender. En{" "}
                <Link href="/como-ensenar-ia-a-mis-hijos" className="text-[#4ECDC4] hover:underline">
                  nuestra guia sobre como ensenar IA a tus hijos
                </Link>{" "}
                profundizamos en este tema.
              </p>
            </section>

            {/* The Power of Education */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">La Mejor Proteccion es la Educacion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Despues de trabajar con cientos de familias, hemos llegado a una conclusion clara:
                los ninos que mas seguros estan frente a la IA son los que <strong>mas saben sobre ella</strong>.
                No los que menos la usan, sino los que la entienden, la cuestionan y saben cuando
                confiar y cuando no.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un nino que ha aprendido en un entorno guiado que la IA puede inventar datos, que
                tiene sesgos, que no siempre es justa y que su privacidad es importante, esta mucho
                mejor preparado que uno que descubre todo esto solo, sin contexto ni guia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En InnovaKids, la seguridad y la etica digital no son un modulo aparte: son parte
                integral de cada clase. Cada vez que un estudiante interactua con una herramienta de IA,
                aprende no solo a crear sino tambien a evaluar, cuestionar y protegerse. Puedes conocer
                mas sobre nuestro enfoque en la pagina de{" "}
                <Link href="/confianza-y-seguridad" className="text-[#4ECDC4] hover:underline">
                  confianza y seguridad
                </Link>.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Es seguro que mi hijo use ChatGPT?</h3>
                  <p className="text-gray-700">
                    Si, con reglas claras y supervision adecuada a su edad. Lo mas importante es que
                    sepa que informacion no debe compartir y que aprenda a evaluar criticamente las respuestas.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Deberia prohibirle a mi hijo usar IA?</h3>
                  <p className="text-gray-700">
                    No. Es mejor ensenarlo a usarla de forma segura y responsable. La IA esta en todas
                    partes y tu hijo la encontrara de todas formas. Educarlo es protegerlo.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Que datos no debe compartir mi hijo con la IA?</h3>
                  <p className="text-gray-700">
                    Nombre completo, direccion, telefono, fotos personales, contrasenas, datos financieros
                    e informacion de otros ninos. La regla: si no se lo dirias a un desconocido, no se
                    lo digas a la IA.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Articulos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/confianza-y-seguridad"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Confianza y Seguridad en InnovaKids</p>
                  <p className="text-gray-500 text-sm">Como protegemos a los estudiantes en cada clase</p>
                </Link>
                <Link
                  href="/como-ensenar-ia-a-mis-hijos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Como Ensenar IA a tus Hijos</p>
                  <p className="text-gray-500 text-sm">Guia practica para familias</p>
                </Link>
                <Link
                  href="/blog/ia-para-ninos-por-edad-8-10-11-13-14-17"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">IA por Edad: Guia Completa</p>
                  <p className="text-gray-500 text-sm">Que puede aprender tu hijo segun su edad</p>
                </Link>
                <Link
                  href="/blog"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Blog de InnovaKids</p>
                  <p className="text-gray-500 text-sm">Mas articulos sobre educacion y tecnologia</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">Dale a Tu Hijo la Educacion en IA que Necesita</h2>
            <p className="text-xl text-gray-600 mb-8">
              En InnovaKids ensenamos a usar la IA de forma segura, responsable y creativa.
              Agenda una clase gratis y compruebalo.
            </p>
            <Link href="/clase-gratis">
              <Button
                size="lg"
                className="bg-[#4ECDC4] hover:bg-[#45b8b0] text-white font-bold text-lg px-10 py-6 h-auto rounded-full"
              >
                Agendar Clase Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
