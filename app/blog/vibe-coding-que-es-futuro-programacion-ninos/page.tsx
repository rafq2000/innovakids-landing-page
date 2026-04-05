import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vibe Coding: Que Es y Por Que es el Futuro de la Programacion para Ninos | InnovaKids",
  description:
    "Descubre que es el Vibe Coding, la nueva forma de programar hablando con la IA. Aprende por que es revolucionario para ninos y como InnovaKids lo ensena.",
  keywords: [
    "vibe coding ninos",
    "que es vibe coding",
    "programacion con ia ninos",
    "vibe coding que es",
    "programar hablando con ia",
    "futuro programacion ninos",
    "vibe coding para ninos",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/vibe-coding-que-es-futuro-programacion-ninos",
  },
  openGraph: {
    title: "Vibe Coding: Que Es y Por Que es el Futuro de la Programacion para Ninos",
    description:
      "Descubre que es el Vibe Coding, la nueva forma de programar hablando con la IA en lenguaje natural.",
    url: "https://www.innovakidslatam.com/blog/vibe-coding-que-es-futuro-programacion-ninos",
    siteName: "InnovaKids",
    type: "article",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Que es el Vibe Coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Vibe Coding es una nueva forma de programar donde describes lo que quieres crear en lenguaje natural (espanol o ingles) y la Inteligencia Artificial genera el codigo por ti. No necesitas memorizar sintaxis ni lenguajes de programacion. Es como tener una conversacion con un programador experto que construye lo que tu imaginas.",
      },
    },
    {
      "@type": "Question",
      name: "A que edad puede un nino aprender Vibe Coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los ninos pueden empezar a aprender Vibe Coding a partir de los 8 anos. A esa edad ya pueden comunicar sus ideas por escrito y entender el proceso iterativo de crear, probar y mejorar. Los preadolescentes de 11-13 anos y adolescentes de 14-17 pueden crear proyectos cada vez mas complejos.",
      },
    },
    {
      "@type": "Question",
      name: "El Vibe Coding reemplaza la programacion tradicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No la reemplaza completamente, pero la transforma. El Vibe Coding es la forma en que la mayoria de las personas crearan software en el futuro. Los programadores profesionales ya lo usan para acelerar su trabajo. Para ninos, es la puerta de entrada perfecta al mundo de la creacion digital sin la barrera de aprender sintaxis compleja.",
      },
    },
    {
      "@type": "Question",
      name: "Que puede crear un nino con Vibe Coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con Vibe Coding, un nino puede crear aplicaciones web funcionales, videojuegos, herramientas interactivas, sitios web personales, chatbots y mucho mas. La unica limitacion es su imaginacion, ya que la IA se encarga de traducir sus ideas en codigo funcional.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vibe Coding: Que Es y Por Que es el Futuro de la Programacion para Ninos",
  description:
    "Guia completa sobre Vibe Coding: la nueva forma de programar usando lenguaje natural e Inteligencia Artificial.",
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
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/vibe-coding-que-es-futuro-programacion-ninos",
}

export default function VibeCodingQueEsPage() {
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
              Tendencias Educativas
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D3436] leading-tight">
              Vibe Coding: Que Es y Por Que <br className="hidden md:block" /> es el Futuro de la Programacion
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Abril 2026</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Lectura: 13 min</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Imagina que tu hijo pudiera crear una aplicacion, un videojuego o una herramienta digital
              simplemente describiendo lo que quiere en espanol. Eso es el Vibe Coding, y esta
              cambiando las reglas de la programacion para siempre.
            </p>
          </div>
        </header>

        {/* Article Body */}
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Durante decadas, aprender a programar significaba sentarse frente a una pantalla negra y
                memorizar comandos en ingles que no tenian ningun sentido intuitivo. Los ninos que querian
                crear un videojuego primero tenian que pasar meses aprendiendo variables, funciones, bucles
                y la sintaxis exacta de un lenguaje como Python o JavaScript. La mayoria se frustraba
                antes de crear algo interesante.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En 2026, todo eso cambio. El <strong>Vibe Coding</strong> es una revolucion silenciosa que esta
                transformando la forma en que las personas crean software. Y para los ninos, es quizas
                la oportunidad educativa mas importante de la decada. En este articulo te explicamos
                exactamente que es, como funciona, por que es relevante para tu hijo y como{" "}
                <Link href="/cursos/inteligencia-artificial" className="text-[#4ECDC4] hover:underline">
                  InnovaKids lo ensena
                </Link>.
              </p>
            </div>

            {/* What is Vibe Coding */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Que es el Vibe Coding Exactamente</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El termino &quot;Vibe Coding&quot; fue acunado por Andrej Karpathy, cofundador de OpenAI y exdirector
                de IA en Tesla, en febrero de 2025. Lo definio como una nueva forma de programar donde
                te &quot;entregas al vibe&quot;, describes lo que quieres en lenguaje natural y la IA genera todo
                el codigo necesario.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En la practica, el Vibe Coding funciona asi: abres una herramienta de IA como Cursor,
                Replit Agent, Claude o ChatGPT con Code Interpreter, y le dices en espanol:
                &quot;Quiero una aplicacion que muestre el clima de mi ciudad con una interfaz bonita y colores
                azules&quot;. La IA genera todo el codigo, lo ejecuta y te muestra el resultado. Si quieres
                cambiar algo, simplemente se lo dices: &quot;Agrega un boton para cambiar de ciudad&quot; o
                &quot;Haz que los numeros sean mas grandes&quot;.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                No necesitas saber que es HTML, CSS, JavaScript o React. No necesitas entender que es
                una variable o una funcion. La IA se encarga de toda la complejidad tecnica mientras
                tu te concentras en <strong>que quieres crear</strong>, no en como programarlo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Es como la diferencia entre aprender a hablar un idioma y aprender a ser linguista.
                Con el Vibe Coding, puedes &quot;hablar&quot; con las computadoras desde el primer dia, sin
                necesidad de estudiar su &quot;gramatica&quot; durante anos.
              </p>
            </section>

            {/* Why Revolutionary for Kids */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Por Que el Vibe Coding es Revolucionario para Ninos</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La programacion tradicional tenia una barrera de entrada enorme para los ninos. No solo
                necesitaban aprender un lenguaje en ingles, sino que los errores de sintaxis (un punto
                y coma olvidado, un parentesis mal cerrado) causaban frustracion constante. Muchos ninos
                talentosos abandonaban antes de crear su primer proyecto real.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El Vibe Coding elimina todas esas barreras. Un nino de 8 anos que habla espanol puede
                crear una aplicacion funcional en su primera hora de clase. No porque sea un genio de la
                computacion, sino porque la herramienta se adapta a el, y no al reves.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Beneficios del Vibe Coding para Ninos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Resultados inmediatos</strong> — Crean algo funcional desde la primera sesion, lo que genera motivacion instantanea</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Sin barrera del idioma</strong> — Pueden dar instrucciones en espanol, no necesitan saber ingles tecnico</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Foco en creatividad</strong> — La energia se invierte en imaginar y disenar, no en memorizar sintaxis</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Iteracion rapida</strong> — Pueden probar, cambiar y mejorar en segundos, acelerando el ciclo de aprendizaje</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Proyectos reales</strong> — Lo que crean funciona en el mundo real, no son ejercicios simulados</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Pensamiento de diseno</strong> — Aprenden a definir problemas, proponer soluciones y evaluar resultados</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Vibe Coding vs Traditional */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Vibe Coding vs Programacion Tradicional: Comparativa</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-[#F8F9FA] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#2D3436] text-white">
                      <th className="text-left p-4 font-semibold">Criterio</th>
                      <th className="p-4 font-semibold">Programacion Tradicional</th>
                      <th className="p-4 font-semibold text-[#4ECDC4]">Vibe Coding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { criteria: "Tiempo hasta primer proyecto", trad: "Semanas o meses", vibe: "Minutos u horas" },
                      { criteria: "Idioma requerido", trad: "Ingles tecnico", vibe: "Espanol natural" },
                      { criteria: "Conocimientos previos", trad: "Sintaxis, logica, tipos de datos", vibe: "Saber describir lo que quieres" },
                      { criteria: "Nivel de frustracion", trad: "Alto (errores de sintaxis constantes)", vibe: "Bajo (la IA corrige errores)" },
                      { criteria: "Tipo de proyectos", trad: "Ejercicios academicos basicos", vibe: "Apps y juegos funcionales reales" },
                      { criteria: "Habilidades desarrolladas", trad: "Logica, sintaxis, depuracion", vibe: "Creatividad, comunicacion, diseno" },
                      { criteria: "Relevancia laboral en 2030", trad: "Parcial (se automatiza con IA)", vibe: "Total (asi se trabajara)" },
                      { criteria: "Motivacion del estudiante", trad: "Baja al inicio, crece lento", vibe: "Alta desde el primer dia" },
                    ].map((row) => (
                      <tr key={row.criteria} className="border-b border-gray-200">
                        <td className="p-4 font-medium text-[#2D3436]">{row.criteria}</td>
                        <td className="p-4 text-center text-gray-600">{row.trad}</td>
                        <td className="p-4 text-center text-[#2D3436] font-medium bg-[#4ECDC4]/5">{row.vibe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* How InnovaKids Teaches It */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Como InnovaKids Ensena Vibe Coding</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En InnovaKids, el Vibe Coding es uno de los pilares de nuestro{" "}
                <Link href="/cursos/inteligencia-artificial" className="text-[#4ECDC4] hover:underline">
                  programa de Inteligencia Artificial para ninos
                </Link>
                . No lo ensenamos como un concepto teorico: lo ensenamos creando. Desde la primera clase,
                los estudiantes estan construyendo algo real con Vibe Coding.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nuestra{" "}
                <Link href="/metodologia-aprender-creando" className="text-[#4ECDC4] hover:underline">
                  metodologia Aprender Creando
                </Link>{" "}
                se aplica perfectamente al Vibe Coding. El mentor propone un desafio creativo, los
                estudiantes diseno la solucion en su mente, la describen a la IA, y luego iteran hasta
                obtener el resultado deseado. En el proceso, desarrollan habilidades de comunicacion,
                pensamiento critico, creatividad y resolucion de problemas.
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Paso 1: Imaginar</h3>
                  <p className="text-gray-700">
                    El estudiante decide que quiere crear. Un videojuego de naves? Una app para organizar
                    sus tareas? Un sitio web para su mascota? La eleccion es suya, lo que maximiza la
                    motivacion intrinseca.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Paso 2: Describir</h3>
                  <p className="text-gray-700">
                    Aprende a comunicar su idea a la IA de forma clara y especifica. Aqui es donde
                    desarrolla habilidades de Prompt Engineering: saber pedir es saber pensar.
                    El mentor guia este proceso para que la descripcion sea efectiva.
                  </p>
                </div>
                <div className="bg-[#4ECDC4]/10 p-6 rounded-xl border border-[#4ECDC4]/20">
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">Paso 3: Crear e Iterar</h3>
                  <p className="text-gray-700">
                    La IA genera una primera version. El estudiante la prueba, identifica que quiere
                    cambiar y da nuevas instrucciones. Este ciclo de crear-probar-mejorar es el
                    nucleo del pensamiento computacional moderno.
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                  <h3 className="text-xl font-bold text-pink-800 mb-3">Paso 4: Compartir</h3>
                  <p className="text-gray-700">
                    El proyecto terminado se presenta al grupo. Los companeros dan retroalimentacion
                    constructiva. El estudiante aprende a recibir criticas y a mejorar su trabajo.
                    Es un mini laboratorio de colaboracion profesional.
                  </p>
                </div>
              </div>
            </section>

            {/* Real Projects */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Proyectos Reales Creados con Vibe Coding por Ninos</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Estos son ejemplos reales de lo que los estudiantes de InnovaKids han creado usando
                Vibe Coding. No son proyectos hipoteticos: son aplicaciones funcionales creadas por
                ninos de 8 a 17 anos.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">--</span>
                    <span><strong>Calculadora de Huella de Carbono</strong> (Valeria, 12 anos) — Una app web que calcula cuanto CO2 generas segun tus habitos diarios y te da consejos para reducirlo</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">--</span>
                    <span><strong>Juego de Trivia de Historia</strong> (Santiago, 10 anos) — Un quiz interactivo con preguntas sobre civilizaciones antiguas, puntuacion y efectos sonoros</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">--</span>
                    <span><strong>Gestor de Tareas Familiar</strong> (Camila, 15 anos) — Una aplicacion donde la familia organiza las tareas del hogar con asignaciones y recordatorios</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">--</span>
                    <span><strong>Juego de Plataformas</strong> (Mateo, 9 anos) — Un videojuego con un personaje que salta entre plataformas, recoge monedas y evita enemigos</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">--</span>
                    <span><strong>Asistente de Recetas</strong> (Isabella, 14 anos) — Una app que sugiere recetas segun los ingredientes disponibles en la nevera</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Cada uno de estos proyectos fue creado en 2-4 sesiones de clase con Vibe Coding. Antes del
                Vibe Coding, proyectos similares hubieran requerido meses de aprendizaje de programacion.
                Puedes ver mas sobre nuestros{" "}
                <Link href="/curso-creacion-videojuegos-ninos" className="text-[#4ECDC4] hover:underline">
                  cursos de creacion de videojuegos para ninos
                </Link>.
              </p>
            </section>

            {/* Is Vibe Coding Real Programming */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Pero... Es el Vibe Coding &quot;Programacion Real&quot;?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esta es la pregunta que muchos padres y educadores se hacen, y es valida. La respuesta
                es: <strong>si, absolutamente</strong>. El Vibe Coding produce codigo real que se ejecuta
                en navegadores y dispositivos reales. La diferencia es quien escribe el codigo: en la
                programacion tradicional lo escribe el humano; en el Vibe Coding lo escribe la IA
                siguiendo las instrucciones del humano.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Es la misma diferencia entre un arquitecto que dibuja los planos a mano y uno que usa
                software CAD. El resultado es el mismo: un edificio bien disenado. La herramienta cambio,
                pero la creatividad, la vision y las decisiones siguen siendo humanas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                De hecho, el Vibe Coding requiere habilidades mas sofisticadas que la programacion
                tradicional en muchos aspectos. Requiere saber comunicar ideas con claridad, tener
                vision de producto, entender que es posible y que no, y ser capaz de evaluar si
                el resultado cumple con lo esperado. Estas son habilidades de un ingeniero de
                software senior, no de un principiante.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Los profesionales de la tecnologia mas exitosos del mundo ya usan Vibe Coding para
                acelerar su trabajo. No lo ven como &quot;trampa&quot;: lo ven como la evolucion natural de
                su oficio. Preparar a los ninos para esta realidad es prepararlos para el futuro.
              </p>
            </section>

            {/* Skills Developed */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Habilidades que Desarrolla el Vibe Coding</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Mas alla de la habilidad tecnica de crear software, el Vibe Coding desarrolla un
                conjunto de competencias transversales que son valiosas en cualquier campo profesional
                y en la vida cotidiana.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Comunicacion Efectiva</h3>
                  <p className="text-gray-700 text-sm">
                    Para que la IA cree lo que imaginas, debes saber expresarlo con precision. Esto
                    mejora la capacidad de comunicacion escrita y verbal del nino en todos los ambitos.
                  </p>
                </div>
                <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Pensamiento de Diseno</h3>
                  <p className="text-gray-700 text-sm">
                    Los estudiantes aprenden a definir problemas, idear soluciones, prototipar y
                    mejorar. Este ciclo de Design Thinking es el mismo que usan empresas como Google y Apple.
                  </p>
                </div>
                <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Pensamiento Critico</h3>
                  <p className="text-gray-700 text-sm">
                    Deben evaluar si lo que la IA genero es correcto, util y seguro. Esto los
                    entrena para no aceptar resultados sin cuestionarlos.
                  </p>
                </div>
                <div className="bg-[#F8F9FA] p-5 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Resiliencia y Persistencia</h3>
                  <p className="text-gray-700 text-sm">
                    El primer resultado casi nunca es perfecto. Los estudiantes aprenden que iterar
                    y mejorar es parte natural del proceso creativo.
                  </p>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Como Empezar con Vibe Coding</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Si tu hijo quiere empezar a experimentar con Vibe Coding, hay dos caminos. El primero
                es explorar por su cuenta usando herramientas gratuitas como ChatGPT o Replit. Puede
                empezar pidiendo cosas simples como &quot;crea un juego de adivinanzas&quot; y ver que pasa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Sin embargo, aprender solo tiene limitaciones importantes. Sin un mentor que guie el
                proceso, los ninos tienden a hacer siempre lo mismo, no aprenden buenas practicas de
                prompting y se pierden las lecciones mas profundas sobre diseno, etica y pensamiento
                critico.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                El segundo camino, y el que recomendamos, es unirse a un programa estructurado como el de{" "}
                <Link href="/vibe-coding-ninos" className="text-[#4ECDC4] hover:underline">
                  Vibe Coding para ninos de InnovaKids
                </Link>
                . Nuestras clases en vivo con grupos reducidos permiten que cada estudiante reciba
                atencion personalizada mientras crea proyectos cada vez mas ambiciosos. Si quieres
                que tu hijo lo pruebe sin compromiso,{" "}
                <Link href="/clase-gratis" className="text-[#4ECDC4] hover:underline">
                  agenda una clase gratis aqui
                </Link>.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Que es el Vibe Coding?</h3>
                  <p className="text-gray-700">
                    Es una nueva forma de programar donde describes lo que quieres crear en lenguaje
                    natural y la IA genera el codigo. No necesitas memorizar sintaxis ni saber ingles tecnico.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">A que edad puede un nino aprender Vibe Coding?</h3>
                  <p className="text-gray-700">
                    A partir de los 8 anos. En{" "}
                    <Link href="/ia-ninos-por-edad" className="text-[#4ECDC4] hover:underline">
                      InnovaKids adaptamos el nivel segun la edad
                    </Link>: 8-10, 11-13 y 14-17 anos.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">El Vibe Coding reemplaza la programacion tradicional?</h3>
                  <p className="text-gray-700">
                    No la reemplaza, la transforma. Es la forma en que la mayoria creara software en el
                    futuro. Los programadores profesionales ya lo usan para acelerar su trabajo.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Que puede crear un nino con Vibe Coding?</h3>
                  <p className="text-gray-700">
                    Aplicaciones web, videojuegos, herramientas interactivas, sitios web, chatbots y mucho mas.
                    La unica limitacion es la imaginacion.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Articulos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/vibe-coding-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Vibe Coding para Ninos</p>
                  <p className="text-gray-500 text-sm">Programa completo de Vibe Coding en InnovaKids</p>
                </Link>
                <Link
                  href="/blog/scratch-vs-ia-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Scratch vs IA para Ninos</p>
                  <p className="text-gray-500 text-sm">Comparativa completa para padres</p>
                </Link>
                <Link
                  href="/curso-creacion-videojuegos-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Creacion de Videojuegos</p>
                  <p className="text-gray-500 text-sm">Curso de videojuegos con IA para ninos</p>
                </Link>
                <Link
                  href="/blog/ia-para-ninos-por-edad-8-10-11-13-14-17"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">IA por Edad: Guia Completa</p>
                  <p className="text-gray-500 text-sm">Que puede aprender tu hijo segun su edad</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">Tu Hijo Puede Crear con Vibe Coding Hoy</h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una clase gratis y descubre como tu hijo puede crear su primera
              aplicacion hablando con la IA. Sin conocimientos previos necesarios.
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
