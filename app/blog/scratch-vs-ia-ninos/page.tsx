import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Scratch vs IA: ¿Qué Debería Aprender Mi Hijo Primero en 2026? | InnovaKids",
  description:
    "Comparamos Scratch y la Inteligencia Artificial como herramientas educativas para niños. Descubre cuál es mejor para tu hijo según su edad e intereses.",
  keywords: [
    "scratch vs ia niños",
    "scratch o inteligencia artificial",
    "qué debería aprender mi hijo",
    "scratch vs chatgpt niños",
    "programación visual vs ia",
    "mejor herramienta educativa niños 2026",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/scratch-vs-ia-ninos",
  },
  openGraph: {
    title: "Scratch vs IA: ¿Qué Debería Aprender Mi Hijo Primero en 2026?",
    description:
      "Comparamos Scratch y la Inteligencia Artificial como herramientas educativas para niños. Descubre cuál es mejor según su edad.",
    url: "https://www.innovakidslatam.com/blog/scratch-vs-ia-ninos",
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
      name: "¿Es mejor Scratch o IA para niños?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la edad e intereses. Para niños de 5-8 años, Scratch es excelente como primer contacto con la lógica. Para niños de 8-17 años, la IA ofrece resultados más rápidos, creatividad más amplia y habilidades más relevantes para el futuro laboral.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mi hijo necesita aprender Scratch antes de IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. No es necesario aprender Scratch primero. Los niños de 8 años en adelante pueden comenzar directamente con herramientas de IA como ChatGPT y Vibe Coding. La IA permite crear proyectos reales desde el primer día sin necesidad de conocimientos previos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Scratch sigue siendo útil en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scratch sigue siendo útil para niños menores de 8 años como introducción al pensamiento lógico. Sin embargo, para niños mayores de 8 años, las herramientas de IA ofrecen una experiencia más relevante y motivadora.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad debería mi hijo empezar a aprender IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A partir de los 8 años los niños tienen la madurez cognitiva para aprender IA de forma efectiva. InnovaKids ofrece programas adaptados para niños de 8-10, preadolescentes de 11-13 y adolescentes de 14-17 años.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Vibe Coding y cómo se compara con Scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Vibe Coding es la nueva forma de programar hablando con la IA en lenguaje natural. Mientras Scratch usa bloques visuales para crear programas simples, el Vibe Coding permite crear apps, juegos y herramientas profesionales describiendo lo que quieres en español. Es más poderoso y prepara mejor para el futuro.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Scratch vs IA: ¿Qué Debería Aprender Mi Hijo Primero en 2026?",
  description:
    "Comparamos Scratch y la Inteligencia Artificial como herramientas educativas para niños.",
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
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/scratch-vs-ia-ninos",
}

export default function ScratchVsIANinosPage() {
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
              Comparativa Educativa
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D3436] leading-tight">
              Scratch vs IA: ¿Qué Debería <br className="hidden md:block" /> Aprender Mi Hijo?
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Marzo 2026</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Lectura: 12 min</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              La pregunta que todos los padres se hacen en 2026: ¿debería mi hijo aprender Scratch o Inteligencia
              Artificial? Analizamos ambas opciones a fondo para que tomes la mejor decisión.
            </p>
          </div>
        </header>

        {/* Article Body */}
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Si eres padre o madre en 2026 y quieres que tu hijo aprenda tecnología, probablemente te has
                encontrado con dos caminos muy diferentes: <strong>Scratch</strong>, la plataforma de programación
                visual del MIT que lleva más de una década siendo la opción predilecta en colegios, y la
                <strong> Inteligencia Artificial</strong>, que ha revolucionado todo desde que ChatGPT apareció
                en escena.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La respuesta corta: <strong>depende de la edad de tu hijo y de lo que quieras lograr</strong>.
                Pero hay matices importantes que muchos padres no conocen. En este artículo vamos a comparar
                ambas opciones en profundidad para que tomes una decisión informada.
              </p>
            </div>

            {/* What is Scratch */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">¿Qué es Scratch y Por Qué fue Revolucionario?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Scratch fue creado por el MIT Media Lab en 2007 y se convirtió en la herramienta estándar para
                enseñar programación a niños. Su propuesta es simple pero efectiva: en lugar de escribir código
                con texto, los niños arrastran bloques de colores que representan instrucciones.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Con Scratch, un niño puede crear animaciones, historias interactivas y juegos simples sin
                necesidad de escribir una sola línea de código. Los bloques encajan como piezas de LEGO y
                representan conceptos de programación como bucles, condicionales y variables.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Ventajas de Scratch</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Gratis y accesible</strong> — Funciona en cualquier navegador sin instalar nada</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Muy visual</strong> — Los bloques de colores hacen la programación tangible</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Ideal para menores de 8 años</strong> — La simplicidad es perfecta para niños pequeños</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Enseña lógica básica</strong> — Secuencias, bucles y condicionales de forma intuitiva</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Comunidad enorme</strong> — Millones de proyectos compartidos para aprender</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Limitaciones de Scratch</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Techo bajo</strong> — Los proyectos son siempre simples, no se pueden crear cosas profesionales</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>No es código real</strong> — La transición a lenguajes reales sigue siendo difícil</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Pierde interés rápido</strong> — Niños mayores de 10-11 años se aburren con las limitaciones</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Desconectado del mundo real</strong> — Lo que creas en Scratch no tiene aplicación práctica fuera de la plataforma</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>No prepara para el mercado laboral</strong> — Ninguna empresa usa Scratch</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* What is AI Education */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">¿Qué Significa Aprender IA en 2026?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Cuando hablamos de que un niño &quot;aprenda IA&quot;, no nos referimos a que estudie redes neuronales
                o algoritmos de machine learning. Nos referimos a que aprenda a <strong>usar, entender y crear
                con herramientas de Inteligencia Artificial</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esto incluye: saber dar instrucciones efectivas a ChatGPT (Prompt Engineering), generar arte
                con Midjourney o DALL-E, crear música con Suno AI, desarrollar aplicaciones con Vibe Coding
                (programar hablando con la IA), y entender las implicaciones éticas de la tecnología.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La diferencia fundamental es que la IA es una <strong>herramienta del mundo real</strong>.
                Lo que tu hijo aprende hoy con ChatGPT es exactamente lo que usará en la universidad
                y en su futuro trabajo. No es un entorno simulado como Scratch; es la tecnología real
                que está transformando todas las industrias.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Ventajas de Aprender IA</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Resultados inmediatos</strong> — En la primera hora ya crean algo impresionante</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Sin techo</strong> — Pueden crear apps, juegos, música, arte, videos y mucho más</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Habilidad del futuro</strong> — Es la competencia más demandada en el mercado laboral</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Multidisciplinario</strong> — Conecta con arte, música, ciencias, escritura y más</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Motivación sostenida</strong> — Los niños se enganchan porque crean cosas reales</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Pensamiento crítico</strong> — Aprenden a evaluar, verificar y cuestionar la tecnología</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Consideraciones de Aprender IA</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Requiere supervisión</strong> — Los niños necesitan guía sobre uso responsable</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Algunas herramientas son de pago</strong> — ChatGPT Plus, Midjourney tienen costo mensual</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Mejor con guía experta</strong> — Aprender solo puede llevar a malos hábitos o uso superficial</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Comparativa Directa: Scratch vs IA</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-[#F8F9FA] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#2D3436] text-white">
                      <th className="text-left p-4 font-semibold">Criterio</th>
                      <th className="p-4 font-semibold">Scratch</th>
                      <th className="p-4 font-semibold text-[#4ECDC4]">IA / Vibe Coding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { criteria: "Edad ideal", scratch: "5-10 años", ia: "8-17 años" },
                      { criteria: "Curva de aprendizaje", scratch: "Muy suave", ia: "Suave con guía" },
                      { criteria: "Tipo de proyectos", scratch: "Animaciones y juegos simples", ia: "Apps, juegos, música, arte, video" },
                      { criteria: "Relevancia laboral", scratch: "Baja (nadie usa Scratch profesionalmente)", ia: "Muy alta (IA es la habilidad #1)" },
                      { criteria: "Motivación a largo plazo", scratch: "Se pierde después de 10-11 años", ia: "Crece con la edad" },
                      { criteria: "Pensamiento crítico", scratch: "Básico (lógica secuencial)", ia: "Avanzado (ética, sesgos, verificación)" },
                      { criteria: "Creatividad", scratch: "Limitada al entorno", ia: "Ilimitada (cualquier medio)" },
                      { criteria: "Costo", scratch: "Gratis", ia: "Gratis a $20/mes por herramientas" },
                      { criteria: "Transición al mundo real", scratch: "Difícil (hay un salto grande)", ia: "Natural (ya es el mundo real)" },
                    ].map((row) => (
                      <tr key={row.criteria} className="border-b border-gray-200">
                        <td className="p-4 font-medium text-[#2D3436]">{row.criteria}</td>
                        <td className="p-4 text-center text-gray-600">{row.scratch}</td>
                        <td className="p-4 text-center text-[#2D3436] font-medium bg-[#4ECDC4]/5">{row.ia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Recommendation by Age */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Nuestra Recomendación Según la Edad</h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">5-7 años: Empieza con Scratch</h3>
                  <p className="text-gray-700">
                    A esta edad, Scratch es perfecto. Los bloques de colores son intuitivos para niños que
                    apenas están aprendiendo a leer y escribir. Les da una primera experiencia con la lógica
                    sin frustración. Pueden usarlo en el colegio o en casa sin supervisión constante.
                  </p>
                </div>

                <div className="bg-[#4ECDC4]/10 p-6 rounded-xl border border-[#4ECDC4]/20">
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">8-10 años: Es Hora de la IA</h3>
                  <p className="text-gray-700">
                    A partir de los 8 años, los niños ya tienen la madurez para usar herramientas de IA de
                    forma guiada. Si tu hijo ya probó Scratch y quiere más, la IA es el siguiente paso natural.
                    Si nunca usó Scratch, puede saltar directamente a la IA. No es prerrequisito.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">11-13 años: IA es Imprescindible</h3>
                  <p className="text-gray-700">
                    Si tu hijo de 11-13 años todavía está solo en Scratch, está perdiendo tiempo valioso.
                    A esta edad necesitan herramientas que los desafíen y los preparen para el futuro.
                    El Vibe Coding y las herramientas de IA generativa son exactamente eso.
                  </p>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                  <h3 className="text-xl font-bold text-pink-800 mb-3">14-17 años: Solo IA</h3>
                  <p className="text-gray-700">
                    Para adolescentes, Scratch ya no tiene sentido. Necesitan dominar las herramientas profesionales
                    de IA que van a usar en la universidad y en sus primeros trabajos. Cada mes que pasa sin
                    aprender IA es una oportunidad perdida.
                  </p>
                </div>
              </div>
            </section>

            {/* The Real Question */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">La Pregunta de Fondo: ¿Qué Habilidades Necesitará Tu Hijo?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Más allá de Scratch vs IA, la pregunta real es: ¿qué habilidades necesitará tu hijo en 5-10 años?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El World Economic Forum estima que el 65% de los niños que entran hoy a primaria trabajarán en
                empleos que aún no existen. Lo que sí sabemos es que la IA será parte fundamental de todos esos
                empleos. No importa si tu hijo quiere ser médico, abogado, artista o ingeniero: necesitará
                saber trabajar con IA.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Scratch enseña conceptos valiosos de pensamiento lógico, pero es como aprender a usar una
                máquina de escribir en 2026. La IA, en cambio, es como aprender a hablar el idioma del futuro.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                No se trata de que Scratch sea malo; durante muchos años fue la mejor opción disponible. Pero
                el mundo cambió. Las herramientas cambiaron. Y la educación necesita cambiar con ellas.
              </p>
            </section>

            {/* Vibe Coding Bridge */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Vibe Coding: Lo Mejor de Ambos Mundos</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Si lo que te gustaba de Scratch era que tu hijo pudiera crear sin saber código, el
                <strong> Vibe Coding</strong> es la evolución natural. Con el Vibe Coding, los niños crean
                aplicaciones y juegos <em>hablando</em> con la IA en español. No necesitan memorizar sintaxis
                ni arrastrar bloques limitados.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La diferencia es que lo que crean con Vibe Coding es <strong>real</strong>. No es un juego
                dentro de una plataforma cerrada: es una app que funciona en un navegador real, un juego
                que pueden compartir con amigos, una herramienta que resuelve un problema real.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En InnovaKids, nuestros estudiantes de 8-17 años usan Vibe Coding para crear proyectos
                que antes requerían meses de aprendizaje de programación. Lo hacen en horas, con resultados
                que los asombran a ellos y a sus padres.
              </p>
              <div className="mt-6">
                <Link href="/vibe-coding-ninos" className="text-[#4ECDC4] hover:underline font-semibold">
                  Conoce más sobre Vibe Coding para niños →
                </Link>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Conclusión: ¿Qué Debería Aprender Tu Hijo?</h2>
              <div className="bg-[#F8F9FA] p-8 rounded-xl border border-gray-200">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <strong>Si tu hijo tiene 5-7 años:</strong> Empieza con Scratch. Es divertido, gratuito y le dará
                    una base de pensamiento lógico.
                  </li>
                  <li>
                    <strong>Si tu hijo tiene 8-10 años:</strong> Es momento de dar el salto a la IA. Puede haber
                    empezado con Scratch o no, no importa. La IA lo motivará más y le dará habilidades reales.
                  </li>
                  <li>
                    <strong>Si tu hijo tiene 11-17 años:</strong> No pierdas más tiempo con Scratch. La IA y el
                    Vibe Coding son las habilidades que necesita para su futuro. Cada semana cuenta.
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">¿Es mejor Scratch o IA para niños?</h3>
                  <p className="text-gray-700">
                    Depende de la edad. Para niños de 5-8 años, Scratch es excelente como primer contacto.
                    Para niños de 8-17 años, la IA ofrece resultados más rápidos, creatividad más amplia
                    y habilidades más relevantes para el futuro.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">¿Mi hijo necesita aprender Scratch antes de IA?</h3>
                  <p className="text-gray-700">
                    No. No es necesario. Los niños de 8 años en adelante pueden comenzar directamente con IA.
                    El Vibe Coding permite crear proyectos reales desde el primer día sin conocimientos previos.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">¿Scratch sigue siendo útil en 2026?</h3>
                  <p className="text-gray-700">
                    Para niños menores de 8 años, sí. Para niños mayores, las herramientas de IA son más
                    relevantes y motivadoras.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">¿A qué edad debería mi hijo empezar a aprender IA?</h3>
                  <p className="text-gray-700">
                    A partir de los 8 años. InnovaKids tiene programas adaptados para{" "}
                    <Link href="/ia-ninos-por-edad" className="text-[#4ECDC4] hover:underline">
                      cada grupo de edad: 8-10, 11-13 y 14-17 años
                    </Link>.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">¿Qué es el Vibe Coding y cómo se compara con Scratch?</h3>
                  <p className="text-gray-700">
                    El Vibe Coding es programar hablando con la IA en lenguaje natural. Mientras Scratch usa
                    bloques para crear programas simples, el Vibe Coding permite crear apps y juegos profesionales
                    describiendo lo que quieres.{" "}
                    <Link href="/vibe-coding-ninos" className="text-[#4ECDC4] hover:underline">
                      Conoce más sobre Vibe Coding
                    </Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/cursos/inteligencia-artificial"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Curso de IA para Niños</p>
                  <p className="text-gray-500 text-sm">Conoce el programa completo de InnovaKids</p>
                </Link>
                <Link
                  href="/ia-ninos-por-edad"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Cursos de IA por Edad</p>
                  <p className="text-gray-500 text-sm">Encuentra el programa ideal según la edad</p>
                </Link>
                <Link
                  href="/vibe-coding-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Vibe Coding para Niños</p>
                  <p className="text-gray-500 text-sm">Aprende a crear con IA hablando</p>
                </Link>
                <Link
                  href="/blog/inteligencia-artificial-para-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">IA para Niños: Guía Completa</p>
                  <p className="text-gray-500 text-sm">Todo lo que necesitas saber sobre IA infantil</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">Tu Hijo Merece la Mejor Educación Tecnológica</h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una clase gratis de IA y descubre lo que tu hijo puede crear.
              Sin compromiso, sin costo, sin Scratch necesario.
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
