import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { GraduationCap, CheckCircle, XCircle, Trophy, Zap, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mejores Cursos de Verano de Programación e IA para Niños (2026) | InnovaKids",
  description:
    "🏆 Comparativa honesta: ¿Curso de verano de programación o de Inteligencia Artificial para niños? Analizamos precios, metodologías y resultados reales. Descubre cuál conviene más.",
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/mejores-cursos-verano-programacion-ia-ninos-2026",
  },
  openGraph: {
    title: "Mejores Cursos de Verano de Programación e IA para Niños (2026)",
    description: "Comparativa honesta: programación tradicional vs inteligencia artificial para niños. ¿Cuál prepara mejor a tu hijo para el futuro?",
    type: "article",
  },
}

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mejores Cursos de Verano de Programación e IA para Niños (2026)",
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
  "mainEntityOfPage": "https://www.innovakidslatam.com/blog/mejores-cursos-verano-programacion-ia-ninos-2026",
}

const comparisons = [
  {
    criteria: "Habilidad principal desarrollada",
    traditional: "Sintaxis de código (Scratch, Python básico)",
    innovakids: "Pensamiento computacional + Creatividad aplicada con IA",
    winner: "innovakids",
  },
  {
    criteria: "Proyecto final del alumno",
    traditional: "Ejercicios guiados o un minijuego en Scratch",
    innovakids: "App funcional, videojuego, libro ilustrado o startup propia",
    winner: "innovakids",
  },
  {
    criteria: "Tamaño del grupo",
    traditional: "15 a 30 alumnos por clase",
    innovakids: "Máximo 5 alumnos por sesión",
    winner: "innovakids",
  },
  {
    criteria: "Modalidad",
    traditional: "Presencial (requiere transporte y horarios fijos)",
    innovakids: "100% online en vivo con horarios flexibles",
    winner: "innovakids",
  },
  {
    criteria: "Rango de edad",
    traditional: "Generalmente 7 a 12 años",
    innovakids: "8 a 17 años (niños y adolescentes)",
    winner: "innovakids",
  },
  {
    criteria: "Duración",
    traditional: "1 a 2 semanas intensivas",
    innovakids: "5 semanas (ritmo adecuado para retención a largo plazo)",
    winner: "innovakids",
  },
  {
    criteria: "Garantía de satisfacción",
    traditional: "Generalmente no ofrecen",
    innovakids: "10 días de garantía con devolución completa",
    winner: "innovakids",
  },
  {
    criteria: "Herramientas de IA avanzadas",
    traditional: "No incluyen (o solo mencionan superficialmente)",
    innovakids: "ChatGPT, DALL-E, Midjourney, Suno, Python con IA",
    winner: "innovakids",
  },
]

export default function ComparativaVeranoPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <Navigation />
      <BreadcrumbNav items={[
        { label: "Blog", href: "/blog" },
        { label: "Cursos de Verano: Programación vs IA", href: "/blog/mejores-cursos-verano-programacion-ia-ninos-2026" },
      ]} />

      {/* Hero */}
      <div className="pt-16 pb-12 bg-gradient-to-br from-[#0a1628] to-[#1a2f4c] text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-6">
            Comparativa 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            Mejores Cursos de Verano para Niños: <span className="text-[#4DD0E1]">¿Programación Tradicional o Inteligencia Artificial?</span>
          </h1>
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <a href="https://www.linkedin.com/in/rafaelquirozm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4DD0E1] transition-colors">
              <GraduationCap className="w-4 h-4" />
              <span>Rafael Quiroz — Director Académico</span>
            </a>
            <span>•</span>
            <span>11 Mar 2026</span>
            <span>•</span>
            <span>6 min lectura</span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose prose-lg prose-slate max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#0a1628] [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_li]:text-slate-600">

          <p className="text-xl text-slate-700 font-medium leading-relaxed !mt-0">
            Cada año, miles de padres en Latinoamérica y España buscan <strong>cursos de verano de programación para niños</strong> o <strong>talleres tecnológicos para adolescentes</strong>. Pero en 2026, la pregunta ya no es &ldquo;¿mi hijo debe aprender a programar?&rdquo;, sino <strong>&ldquo;¿debería aprender programación tradicional o inteligencia artificial?&rdquo;</strong>. En esta guía comparativa, analizamos ambas opciones con datos reales.
          </p>

          <h2>🏫 Cursos de Verano de Programación Tradicional: ¿Siguen vigentes?</h2>
          <p>
            Los cursos clásicos de programación para niños (Scratch, Code.org, Python básico) fueron pioneros en acercar la tecnología a los menores. Enseñan <strong>lógica secuencial</strong>, <strong>bucles</strong> y <strong>condicionales</strong> mediante programación por bloques. Son útiles para una primera aproximación al código, pero tienen limitaciones claras en el contexto de 2026:
          </p>
          <ul>
            <li><strong>Grupos grandes</strong> (15-30 alumnos) con atención limitada por estudiante</li>
            <li><strong>Proyectos repetitivos:</strong> todos los alumnos hacen el mismo ejercicio guiado</li>
            <li><strong>Sin exposición a IA:</strong> no incluyen herramientas como ChatGPT, modelos generativos ni prompt engineering</li>
            <li><strong>Modalidad presencial:</strong> dependen de transporte, horarios rígidos e infraestructura física</li>
          </ul>

          <h2>🤖 Cursos de Inteligencia Artificial para Niños: La Nueva Frontera</h2>
          <p>
            Un curso de <strong>inteligencia artificial para niños</strong> no reemplaza la programación: la <strong>potencia exponencialmente</strong>. Los alumnos no solo aprenden a escribir código, sino a <strong>colaborar con modelos de IA</strong> para crear proyectos reales en una fracción del tiempo. Esto se llama <strong>Vibe Coding</strong>: la habilidad de comunicarse eficientemente con sistemas inteligentes para construir software, arte, música y narrativas.
          </p>
          <p>
            En InnovaKids, nuestros alumnos de 8 a 17 años crean en 5 semanas lo que antes tomaba meses en un campamento tradicional: <strong>apps funcionales, videojuegos originales, libros ilustrados con IA y hasta prototipos de startups</strong>.
          </p>

          <h2>📊 Tabla Comparativa: Programación Tradicional vs InnovaKids IA</h2>
        </div>

        {/* Tabla de Comparación Visual */}
        <div className="my-8 overflow-x-auto not-prose">
          <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-[#0a1628] text-white">
                <th className="p-4 text-left font-semibold text-sm">Criterio</th>
                <th className="p-4 text-left font-semibold text-sm">Programación Tradicional</th>
                <th className="p-4 text-left font-semibold text-sm bg-[#4DD0E1]/20">InnovaKids (IA)</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-4 text-sm font-semibold text-[#0a1628] border-b border-slate-100">{row.criteria}</td>
                  <td className="p-4 text-sm text-slate-600 border-b border-slate-100">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {row.traditional}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-700 border-b border-slate-100 bg-[#4DD0E1]/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <strong>{row.innovakids}</strong>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-lg prose-slate max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#0a1628] [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-slate-600 [&_p]:leading-relaxed">

          <h2>🎯 Veredicto: ¿Cuál elegir en 2026?</h2>
          <p>
            Si tu hijo tiene entre 8 y 12 años y <strong>nunca ha tocado tecnología</strong>, un curso de programación tradicional con Scratch puede ser una buena primera experiencia. Pero si buscas una <strong>formación con visión de futuro</strong> que desarrolle el pensamiento computacional, la creatividad y las habilidades profesionales que el mercado laboral demandará en 5 años, un <strong>curso de inteligencia artificial como InnovaKids es la inversión más inteligente</strong>.
          </p>
          <p>
            Para adolescentes de 14 a 17 años, la decisión es aún más clara: los cursos de programación tradicional quedan cortos frente a la revolución del <strong>Vibe Coding y el prompt engineering</strong>. Un adolescente que domina IA tiene ventaja competitiva inmediata para becas, admisiones universitarias y emprendimientos.
          </p>

          {/* CTA */}
          <div className="my-12 p-8 rounded-3xl bg-gradient-to-r from-[#0a1628] to-[#1a2f4c] text-white not-prose">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold">¿Listo para dar el siguiente paso?</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Agenda una clase gratuita y descubre por qué más de 500 familias en 9 países ya eligieron InnovaKids. Grupos de máximo 5 alumnos, 100% online y con garantía de 10 días.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#sesion-estrategica" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4DD0E1] text-[#0a1628] font-bold rounded-full hover:bg-[#4DD0E1]/90 transition-colors">
                <Zap className="w-5 h-5" />
                Clase Gratis
              </Link>
              <Link href="/blog/metodologia-erica-pensamiento-computacional-ia-ninos" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                <ArrowRight className="w-5 h-5" />
                Conoce la Metodología ERICA
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
