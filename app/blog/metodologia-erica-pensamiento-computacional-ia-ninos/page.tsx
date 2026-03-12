import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { BookOpen, Brain, Lightbulb, Puzzle, Target, Zap, GraduationCap, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Metodología ERICA: Pensamiento Computacional e IA para Niños | InnovaKids",
  description:
    "Descubre cómo la metodología ERICA integra pensamiento computacional, Taxonomía de Bloom, STEM y seguridad digital infantil en cursos de IA para niños y adolescentes.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/metodologia-erica-pensamiento-computacional-ia-ninos",
  },
  openGraph: {
    title: "Metodología ERICA: Pensamiento Computacional e IA para Niños",
    description: "Cómo la metodología activa ERICA desarrolla el pensamiento algorítmico, la creatividad digital y la seguridad digital infantil.",
    type: "article",
    locale: "es_419",
  },
}

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Metodología ERICA: Pensamiento Computacional e IA para Niños",
  "author": {
    "@type": "Person",
    "name": "Rafael Quiroz",
    "jobTitle": "Director Académico, InnovaKids Latam",
    "url": "https://www.linkedin.com/in/rafaelquirozm/",
  },
  "publisher": {
    "@type": "Organization",
    "name": "InnovaKids",
    "url": "https://www.innovakidslatam.com",
  },
  "datePublished": "2026-03-11",
  "dateModified": "2026-03-11",
  "mainEntityOfPage": "https://www.innovakidslatam.com/blog/metodologia-erica-pensamiento-computacional-ia-ninos",
}

export default function MetodologiaERICAPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <Navigation />
      <BreadcrumbNav items={[
        { label: "Blog", href: "/blog" },
        { label: "Metodología ERICA", href: "/blog/metodologia-erica-pensamiento-computacional-ia-ninos" },
      ]} />

      {/* Hero del Artículo */}
      <div className="pt-16 pb-12 bg-gradient-to-br from-[#0a1628] to-[#1a2f4c] text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4DD0E1]/20 text-[#4DD0E1] text-sm font-semibold mb-6">
            Pedagogía & STEM
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            Metodología ERICA: Cómo Desarrollamos el <span className="text-[#4DD0E1]">Pensamiento Computacional</span> en Niños y Adolescentes
          </h1>
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <a href="https://www.linkedin.com/in/rafaelquirozm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4DD0E1] transition-colors">
              <GraduationCap className="w-4 h-4" />
              <span>Rafael Quiroz — Director Académico</span>
            </a>
            <span>•</span>
            <span>11 Mar 2026</span>
            <span>•</span>
            <span>8 min lectura</span>
          </div>
        </div>
      </div>

      {/* Contenido del Artículo */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose prose-lg prose-slate max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#0a1628] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#0a1628] [&_p]:text-slate-600 [&_p]:leading-relaxed [&_li]:text-slate-600">

          <p className="text-xl text-slate-700 font-medium leading-relaxed !mt-0">
            En InnovaKids, no enseñamos &ldquo;herramientas de IA&rdquo; como si fueran un menú de aplicaciones. Nuestra misión es desarrollar el <strong>pensamiento computacional</strong>, la <strong>creatividad digital</strong> y la <strong>seguridad digital infantil</strong> — habilidades cognitivas que trascienden cualquier software. Para lograrlo, diseñamos la <strong>Metodología ERICA</strong>.
          </p>

          <h2 className="flex items-center gap-3">
            <Brain className="w-7 h-7 text-[#4DD0E1] flex-shrink-0" />
            ¿Qué es el Pensamiento Computacional y por qué importa?
          </h2>
          <p>
            El <strong>pensamiento computacional</strong> (<em>computational thinking</em>) es un marco de resolución de problemas que descompone desafíos complejos en pasos lógicos y manejables. No es &ldquo;programar código&rdquo;: es la capacidad de <strong>pensar algorítmicamente</strong>, identificar patrones y diseñar soluciones eficientes. La investigadora Jeannette Wing (2006) lo definió como una competencia fundamental del siglo XXI, al mismo nivel que la lectura, escritura y las matemáticas.
          </p>
          <p>
            En InnovaKids, integramos los 4 pilares del pensamiento computacional en cada módulo:
          </p>
          <ul>
            <li><strong>Descomposición:</strong> Dividir un problema grande en partes más pequeñas (Ej: &ldquo;¿Cómo hago un videojuego?&rdquo; → personaje, escenario, reglas, puntos)</li>
            <li><strong>Reconocimiento de patrones:</strong> Encontrar similitudes entre problemas para reutilizar soluciones</li>
            <li><strong>Abstracción:</strong> Enfocarse en la información relevante e ignorar los detalles irrelevantes</li>
            <li><strong>Diseño algorítmico:</strong> Crear una secuencia de pasos ordenados para resolver el problema</li>
          </ul>

          <h2 className="flex items-center gap-3">
            <Lightbulb className="w-7 h-7 text-amber-500 flex-shrink-0" />
            Taxonomía de Bloom Aplicada a la Enseñanza de IA
          </h2>
          <p>
            La <strong>Taxonomía de Bloom</strong> establece una jerarquía de procesos cognitivos que guían la enseñanza: <em>Recordar → Comprender → Aplicar → Analizar → Evaluar → Crear</em>. La mayoría de cursos de &ldquo;tecnología para niños&rdquo; se quedan atrapados en los niveles inferiores (recordar comandos, comprender un tutorial). <strong>ERICA fue diseñada para llevar a cada alumno directamente al nivel superior: Crear.</strong>
          </p>
          <p>
            ¿Cómo? Nuestro ciclo pedagógico sigue esta escalera cognitiva:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
            {[
              { level: "1. Explorar", desc: "El alumno interactúa con una herramienta de IA por primera vez (ChatGPT, DALL-E). Nivel Bloom: Recordar/Comprender.", color: "bg-blue-50 border-blue-200" },
              { level: "2. Reflexionar", desc: "Discusión guiada: ¿Cómo funciona? ¿Qué datos usa? ¿Es justo/ético? Nivel Bloom: Analizar/Evaluar.", color: "bg-purple-50 border-purple-200" },
              { level: "3. Imaginar", desc: "El alumno diseña su proyecto propio: historia, app, videojuego. Nivel Bloom: Crear.", color: "bg-amber-50 border-amber-200" },
              { level: "4. Construir", desc: "Desarrollo real del proyecto con herramientas de IA y programación visual. Nivel Bloom: Aplicar/Crear.", color: "bg-green-50 border-green-200" },
              { level: "5. Presentar", desc: "Demo Day: el alumno expone su creación, recibe feedback y lo itera. Nivel Bloom: Evaluar/Crear.", color: "bg-rose-50 border-rose-200" },
            ].map((step, i) => (
              <div key={i} className={`p-5 rounded-2xl border ${step.color}`}>
                <h4 className="font-bold text-[#0a1628] mb-2">{step.level}</h4>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="flex items-center gap-3">
            <Puzzle className="w-7 h-7 text-indigo-500 flex-shrink-0" />
            STEM + IA: La Convergencia que los Colegios Necesitan
          </h2>
          <p>
            Las disciplinas <strong>STEM</strong> (Ciencia, Tecnología, Ingeniería y Matemáticas) evolucionan rápidamente hacia la integración de <strong>inteligencia artificial</strong> como eje transversal. Organismos como la UNESCO y la OCDE ya recomiendan incluir <strong>machine learning infantil</strong> y <strong>programación visual</strong> desde los 8 años.
          </p>
          <p>
            En InnovaKids, nuestros alumnos no solo &ldquo;usan&rdquo; IA: entienden cómo los modelos de <strong>machine learning</strong> reconocen patrones, cómo los <strong>modelos generativos</strong> crean contenido y cuáles son los <strong>sesgos algorítmicos</strong> que deben aprender a identificar. Esta comprensión profunda los convierte en ciudadanos digitales preparados, no en simples usuarios pasivos.
          </p>

          <h2 className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-green-500 flex-shrink-0" />
            Seguridad Digital Infantil y Control Parental
          </h2>
          <p>
            El <strong>desarrollo cognitivo temprano</strong> en entornos digitales debe ir acompañado de un enfoque robusto en <strong>seguridad digital infantil</strong>. En ERICA integramos módulos completos de:
          </p>
          <ul>
            <li><strong>Privacidad de datos:</strong> Enseñamos a los niños qué datos nunca compartir en internet y por qué</li>
            <li><strong>Pensamiento crítico digital:</strong> Identificación de deepfakes, desinformación y contenido generado por IA</li>
            <li><strong>Control parental activo:</strong> Facilitamos a los padres herramientas y guías para supervisar la experiencia educativa digital</li>
            <li><strong>Ética en IA:</strong> Reflexión sobre los sesgos, la justicia y la responsabilidad al usar herramientas de inteligencia artificial</li>
          </ul>

          <h2 className="flex items-center gap-3">
            <Target className="w-7 h-7 text-rose-500 flex-shrink-0" />
            Resultados: Del Pensamiento Algorítmico a la Creación Real
          </h2>
          <p>
            Después de 5 semanas de inmersión en nuestra metodología, el alumno no solo &ldquo;sabe usar ChatGPT&rdquo;. Ha desarrollado capacidades transferibles de <strong>pensamiento algorítmico</strong>, <strong>resolución creativa de problemas</strong> y <strong>colaboración digital</strong>. Las evidencias de aprendizaje incluyen:
          </p>
          <ul>
            <li>Un <strong>proyecto real funcionando</strong> (app, videojuego, libro ilustrado o startup)</li>
            <li>Una <strong>presentación pública</strong> donde practican oratoria y storytelling</li>
            <li>Un <strong>portafolio digital</strong> con la evolución de sus iteraciones</li>
            <li><strong>Certificación InnovaKids</strong> validando sus competencias en IA y pensamiento computacional</li>
          </ul>

          {/* CTA interno */}
          <div className="my-12 p-8 rounded-3xl bg-gradient-to-r from-[#0a1628] to-[#1a2f4c] text-white not-prose">
            <h3 className="text-2xl font-bold mb-3">¿Quieres que tu hijo desarrolle estas habilidades?</h3>
            <p className="text-slate-300 mb-6">
              Agenda una clase gratuita y conoce la Metodología ERICA en acción. Grupos de máximo 5 alumnos, 100% online y en vivo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#sesion-estrategica" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4DD0E1] text-[#0a1628] font-bold rounded-full hover:bg-[#4DD0E1]/90 transition-colors">
                <Zap className="w-5 h-5" />
                Clase Gratis
              </Link>
              <Link href="/colegios" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                <BookOpen className="w-5 h-5" />
                Para Colegios
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
