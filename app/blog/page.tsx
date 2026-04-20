import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog · IA para Niños 8-17 · Guías 2026 | InnovaKids",
  description:
    "Blog de IA para niños 8-17 años: guías 2026, consejos para padres, comparativas y tendencias. Expertos de 527 familias en 9 países. Lee artículos hoy.",
  keywords: [
    "blog inteligencia artificial niños",
    "educación tecnológica infantil",
    "ia para niños",
    "cursos programación niños",
    "innovakids blog",
    "blog ia padres latam",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog",
  },
  openGraph: {
    title: "Blog · IA para Niños 8-17 · Guías 2026 | InnovaKids LATAM",
    description:
      "Guías, comparativas y consejos para padres sobre IA para niños 8-17 años. Expertos de la escuela #1 en LATAM. Lee artículos hoy.",
    url: "https://www.innovakidslatam.com/blog",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Blog InnovaKids - Artículos sobre IA para niños 8-17 años",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog · IA para Niños 8-17 · Guías 2026 | InnovaKids",
    description:
      "Guías, comparativas y consejos para padres sobre IA para niños 8-17 años. Escuela #1 en LATAM.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
  robots: { index: true, follow: true },
}

const blogPosts = [
  {
    slug: "metodologia-erica-pensamiento-computacional-ia-ninos",
    title: "Metodología ERICA: Pensamiento Computacional e IA para Niños",
    excerpt: "Descubre cómo ERICA integra pensamiento computacional, Taxonomía de Bloom, STEM y seguridad digital infantil en cursos de inteligencia artificial para niños y adolescentes.",
    image: "/kids-learning-ai-on-computer.jpg",
    date: "2026-03-11",
    category: "Pedagogía",
    readTime: "8 min",
  },
  {
    slug: "mejores-cursos-verano-programacion-ia-ninos-2026",
    title: "Programación vs IA: ¿Qué Curso de Verano Elegir para tu Hijo? (2026)",
    excerpt: "Comparativa honesta: cursos de verano de programación tradicional vs inteligencia artificial para niños y adolescentes. Precios, metodologías y resultados reales.",
    image: "/children-using-ai-educational-tools.jpg",
    date: "2026-03-11",
    category: "Comparativa",
    readTime: "6 min",
  },
  {
    slug: "cursos-online-tecnologia-ninos-adolescentes",
    title: "Cursos Online para Niños y Adolescentes de 8 a 17 años (2026)",
    excerpt: "¿Buscas cursos para niños de 10 a 12 años o adolescentes de 14 a 17? Descubre las mejores opciones en programación, videojuegos e IA. Inscripciones abiertas.",
    image: "/kids-learning-ai-on-computer.jpg",
    date: "2026-03-03",
    category: "Guías 2026",
    readTime: "7 min",
  },
  {
    slug: "codingal-vs-innovakids-comparativa",
    title: "Codingal vs InnovaKids (2026): ¿Cuál es el Mejor Curso de Programación Online?",
    excerpt: "Análisis honesto: Codingal vs InnovaKids. Descubre qué academia online de programación, robótica e Inteligencia Artificial es mejor para tu hijo o adolescente.",
    image: "/children-using-ai-educational-tools.jpg",
    date: "2026-03-03",
    category: "Comparativa",
    readTime: "6 min",
  },
  {
    slug: "ia-para-ninos-por-edad-8-10-11-13-14-17",
    title: "IA para Niños por Edad: Guía 8-10, 11-13 y 14-17 Años (2026)",
    excerpt: "Descubre qué puede aprender tu hijo según su edad. Proyectos reales, herramientas y metodologías adaptadas para cada etapa del desarrollo.",
    image: "/kids-learning-ai-on-computer.jpg",
    date: "2026-04-01",
    category: "Guías 2026",
    readTime: "9 min",
  },
  {
    slug: "vibe-coding-que-es-futuro-programacion-ninos",
    title: "Vibe Coding: Qué Es y Por Qué es el Futuro de la Programación para Niños",
    excerpt: "El Vibe Coding permite crear software describiendo lo que quieres en lenguaje natural. Descubre cómo los niños ya lo están usando para crear apps y videojuegos.",
    image: "/children-using-ai-educational-tools.jpg",
    date: "2026-04-01",
    category: "Innovación",
    readTime: "8 min",
  },
  {
    slug: "como-proteger-hijos-ia-uso-seguro-responsable",
    title: "Cómo Proteger a tus Hijos en la Era de la IA: Guía de Uso Seguro y Responsable",
    excerpt: "Guía práctica para padres sobre supervisión, privacidad y uso responsable de la inteligencia artificial por edad.",
    image: "/parent-and-child-using-chatgpt-safely.jpg",
    date: "2026-04-01",
    category: "Seguridad",
    readTime: "7 min",
  },
  {
    slug: "innovakids-vs-code-org-comparativa-2026",
    title: "InnovaKids vs Code.org (2026): ¿Cuál es Mejor para Tu Hijo?",
    excerpt: "Comparativa honesta entre Code.org (gratuito, autoguiado) e InnovaKids (clases en vivo, IA, grupos reducidos). Descubre cuál se adapta mejor a tu hijo.",
    image: "/children-using-ai-educational-tools.jpg",
    date: "2026-04-01",
    category: "Comparativa",
    readTime: "7 min",
  },
  {
    slug: "vacaciones-escolares-cursos-ia-ninos-2026",
    title: "Vacaciones Escolares 2026: Los Mejores Cursos de IA y Tecnología para Niños",
    excerpt: "Aprovecha las vacaciones para que tu hijo aprenda habilidades del futuro. Cursos intensivos de IA, programación y creación digital.",
    image: "/kids-learning-ai-on-computer.jpg",
    date: "2026-04-01",
    category: "Guías 2026",
    readTime: "6 min",
  },
  {
    slug: "curso-storytelling-digital-ninos",
    title: "Maestros del Storytelling Digital: Crea Cuentos Ilustrados con IA",
    excerpt:
      "Descubre cómo los niños pueden crear historias transmedia increíbles usando inteligencia artificial. Desde cuentos ilustrados hasta narrativas interactivas.",
    image: "/children-creating-digital-stories-with-ai-illustra.jpg",
    date: "2025-01-20",
    category: "Próximos Cursos",
    readTime: "5 min",
  },
  {
    slug: "curso-videojuegos-ia-ninos",
    title: "Arquitectos de Mundos: Crea Videojuegos con Machine Learning",
    excerpt:
      "Tu hijo puede crear sus propios videojuegos entrenando modelos de Machine Learning en Scratch. Aprende cómo funciona este revolucionario curso.",
    image: "/children-creating-video-games-with-machine-learnin.jpg",
    date: "2025-01-18",
    category: "Próximos Cursos",
    readTime: "6 min",
  },
  {
    slug: "curso-emprendimiento-ia-ninos",
    title: "Generación Exponencial: Tu Hijo Puede Crear Su Primera Marca Digital",
    excerpt:
      "Descubre cómo los niños pueden convertirse en mini emprendedores creando marcas digitales con herramientas de IA. El futuro del emprendimiento infantil.",
    image: "/children-entrepreneurs-creating-digital-brand-with.jpg",
    date: "2025-01-16",
    category: "Próximos Cursos",
    readTime: "5 min",
  },
  {
    slug: "curso-estudio-ia-tutor-personalizado",
    title: "El Cerebro Aumentado: Convierte la IA en el Tutor Personal de tu Hijo",
    excerpt:
      "Técnicas de estudio revolucionarias con IA. Aprende cómo tu hijo puede usar la inteligencia artificial como tutor personalizado para mejorar su rendimiento escolar.",
    image: "/child-studying-with-ai-tutor-personalized-learning.jpg",
    date: "2025-01-14",
    category: "Próximos Cursos",
    readTime: "7 min",
  },
  {
    slug: "como-ensenar-ia-ninos",
    title: "Cómo Enseñar Inteligencia Artificial a Niños de 8-17 Años",
    excerpt:
      "Descubre las mejores estrategias y herramientas para introducir a tus hijos en el fascinante mundo de la IA de manera divertida y educativa.",
    image: "/kids-learning-ai-on-computer.jpg",
    date: "2025-01-15",
    category: "Educación",
    readTime: "5 min",
  },
  {
    slug: "beneficios-ia-educacion-infantil",
    title: "5 Beneficios de la IA en la Educación Infantil",
    excerpt:
      "La inteligencia artificial está transformando la educación. Conoce cómo puede beneficiar el desarrollo cognitivo y creativo de tu hijo.",
    image: "/children-using-ai-educational-tools.jpg",
    date: "2025-01-10",
    category: "Tecnología",
    readTime: "4 min",
  },
  {
    slug: "chatgpt-para-ninos-guia-padres",
    title: "ChatGPT para Niños: Guía Completa para Padres",
    excerpt:
      "Todo lo que necesitas saber sobre el uso seguro y educativo de ChatGPT con tus hijos. Consejos prácticos y ejemplos reales.",
    image: "/parent-and-child-using-chatgpt-safely.jpg",
    date: "2025-01-05",
    category: "Guías",
    readTime: "7 min",
  },
  {
    slug: "proyectos-ia-ninos-principiantes",
    title: "10 Proyectos de IA para Niños Principiantes",
    excerpt:
      "Ideas de proyectos prácticos y divertidos que tus hijos pueden crear usando herramientas de IA, sin necesidad de programación avanzada.",
    image: "/kids-creating-ai-projects.jpg",
    date: "2024-12-28",
    category: "Proyectos",
    readTime: "6 min",
  },
  {
    slug: "futuro-trabajo-ia-preparar-hijos",
    title: "El Futuro del Trabajo con IA: Cómo Preparar a tus Hijos",
    excerpt:
      "Las profesiones del futuro requerirán conocimientos de IA. Descubre cómo puedes preparar a tus hijos desde ahora para tener éxito.",
    image: "/future-careers-with-ai-technology.jpg",
    date: "2024-12-20",
    category: "Futuro",
    readTime: "5 min",
  },
  {
    slug: "herramientas-ia-educativas-ninos",
    title: "Las Mejores Herramientas de IA Educativas para Niños en 2025",
    excerpt:
      "Una selección curada de las herramientas de inteligencia artificial más efectivas y seguras para el aprendizaje infantil.",
    image: "/educational-ai-tools-for-children.jpg",
    date: "2024-12-15",
    category: "Recursos",
    readTime: "8 min",
  },
]

const categoryStyles: Record<string, string> = {
  "Próximos Cursos": "bg-[#1A1714] text-[#FAF7EF]",
  "Pedagogía": "bg-[#C96342] text-[#FAF7EF]",
  "Comparativa": "bg-[#A8502F] text-[#FAF7EF]",
  "Guías 2026": "bg-[#C96342] text-[#FAF7EF]",
  "Innovación": "bg-[#1A1714] text-[#FAF7EF]",
  "Seguridad": "bg-[#A8502F] text-[#FAF7EF]",
  "Educación": "bg-[#C96342] text-[#FAF7EF]",
  "Tecnología": "bg-[#A8502F] text-[#FAF7EF]",
  "Guías": "bg-[#C96342] text-[#FAF7EF]",
  "Proyectos": "bg-[#1A1714] text-[#FAF7EF]",
  "Futuro": "bg-[#A8502F] text-[#FAF7EF]",
  "Recursos": "bg-[#1A1714] text-[#FAF7EF]",
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="min-h-screen bg-[#FAF7EF]">
      <Navigation />

      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial masthead */}
          <header className="max-w-5xl mx-auto mb-16 border-b border-[#1A1714]/12 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C96342]" aria-hidden />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">
                Diario InnovaKids · Edición {new Date().toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-[#1A1714] tracking-tight text-balance">
              Lecturas para padres que forman a la próxima generación
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#1A1714]/70 text-pretty font-light leading-relaxed">
              Guías, comparativas y ensayos sobre inteligencia artificial para niños y adolescentes de 8 a 17 años.
              Escritos por nuestro equipo académico y revisados por especialistas en pedagogía.
            </p>
          </header>

          {/* Featured article */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group max-w-6xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-[#EDE6D3]">
              <Image
                src={featured.image || "/placeholder.svg"}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute top-5 left-5">
                <span className={`px-3 py-1 text-[11px] tracking-[0.18em] uppercase font-semibold ${categoryStyles[featured.category] ?? "bg-[#1A1714] text-[#FAF7EF]"}`}>
                  {featured.category}
                </span>
              </div>
            </div>

            <article className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-[#1A1714]/55 mb-5">
                <span>Destacado</span>
                <span className="h-px w-6 bg-[#1A1714]/25" aria-hidden />
                <span>
                  {new Date(featured.date).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#1A1714] tracking-tight text-balance group-hover:text-[#A8502F] transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-[#1A1714]/70 text-lg leading-relaxed text-pretty">
                {featured.excerpt}
              </p>
              <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#C96342]">
                <span className="tracking-wide">Leer el artículo</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                <span className="text-[#1A1714]/45 font-normal ml-3">{featured.readTime} de lectura</span>
              </div>
            </article>
          </Link>

          {/* Section label */}
          <div className="max-w-6xl mx-auto mb-10 flex items-baseline justify-between border-b border-[#1A1714]/12 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">
                Archivo completo
              </span>
            </div>
            <span className="text-xs tracking-[0.18em] uppercase text-[#1A1714]/55 font-medium">
              {rest.length} artículos
            </span>
          </div>

          {/* Grid of articles */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE6D3] mb-5">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold ${categoryStyles[post.category] ?? "bg-[#1A1714] text-[#FAF7EF]"}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#1A1714]/55 mb-3">
                  <span>
                    {new Date(post.date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="h-px w-4 bg-[#1A1714]/25" aria-hidden />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif text-xl lg:text-2xl leading-[1.15] text-[#1A1714] tracking-tight text-balance group-hover:text-[#A8502F] transition-colors">
                  {post.title}
                </h3>

                <p className="mt-3 text-[#1A1714]/65 text-pretty leading-relaxed text-[15px] line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C96342]">
                  <span>Leer</span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
