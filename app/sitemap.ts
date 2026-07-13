import type { MetadataRoute } from "next"
import { getAllCountryCodes } from "@/lib/countries-config"
import fs from "fs"
import path from "path"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.innovakidslatam.com"

  // Fechas reales de última modificación por sección
  const dates = {
    home: new Date("2026-07-02"),        // Precios transparentes (sin anchors) + pixel + PDF guía
    main: new Date("2026-07-02"),        // Cupos por cohorte + precios transparentes
    courses: new Date("2026-06-27"),     // Solo Vibe Explorer
    blog: new Date("2026-06-27"),        // Titles optimizados para CTR
    countries: new Date("2026-07-02"),   // Value stack honesto en páginas país
  }

  // Main pages (priority 0.8)
  const mainPages = [
    "/que-es-innovakids",
    "/programa",
    "/contacto",
    "/resultados",
    "/metodologia-aprender-creando",
    "/de-usuario-a-creador",
    "/ia-nos-recomienda",
    "/clase-gratis",
    "/precios",
    "/testimonios",
    "/adolescentes",
    "/colegios",
    "/confianza-y-seguridad",
    "/como-ensenar-ia-a-mis-hijos",
    "/ia-ninos-por-edad",
    "/cursos/inteligencia-artificial",
    "/empresas",
    "/municipalidades",
  ]

  // Course specialization pages (priority 0.9)
  const coursePages = [
    "/curso-creacion-videojuegos-ninos",
    "/curso-creador-contenido-ia",
    "/curso-emprendimiento-ninos",
    "/curso-cine-ia-ninos",
    "/mejor-curso-ia-ninos-2026",
    "/vibe-coding-ninos",
  ]

  // Blog posts (priority 0.7)
  const blogPages = [
    "/blog",
    "/blog/scratch-vs-ia-ninos",
    "/blog/inteligencia-artificial-para-ninos",
    "/blog/metodologia-erica-pensamiento-computacional-ia-ninos",
    "/blog/mejores-cursos-verano-programacion-ia-ninos-2026",
    "/blog/cursos-online-tecnologia-ninos-adolescentes",
    "/blog/codingal-vs-innovakids-comparativa",
    "/blog/ia-para-ninos-por-edad-8-10-11-13-14-17",
    "/blog/vibe-coding-que-es-futuro-programacion-ninos",
    "/blog/como-proteger-hijos-ia-uso-seguro-responsable",
    "/blog/innovakids-vs-code-org-comparativa-2026",
    "/blog/vacaciones-escolares-cursos-ia-ninos-2026",
    "/blog/extraescolar-inteligencia-artificial-ninos",
    "/blog/curso-ia-ninos-10-11-12-anos",
    "/blog/chatgpt-tareas-escolares-ninos-guia-padres",
    "/blog/actividades-inteligencia-artificial-ninos-casa",
    "/blog/crear-videojuegos-con-ia-ninos-guia-completa",
  ]

  // Homepage (priority 1.0)
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: dates.home,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ]

  // Main pages
  mainPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: dates.main,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  })

  // Course pages
  coursePages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: dates.courses,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  })

  // Blog pages
  blogPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: dates.blog,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  })

  // Dynamic Country Pages
  const countries = getAllCountryCodes()

  // Specialized pages per country (only for countries that have them)
  const countrySpecialPages: Record<string, string[]> = {
    mx: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    co: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    pe: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    ar: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    cl: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    ec: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    es: ["curso-ia-adolescentes", "curso-ia-ninos-8-12"],
    us: ["curso-ia-adolescentes"],
    pa: ["curso-ia-adolescentes"],
  }

  // City pages per country
  const countryCityPages: Record<string, string[]> = {
    mx: ["cdmx", "monterrey", "guadalajara"],
    co: ["bogota", "medellin", "cali"],
    pe: ["lima", "arequipa"],
    ar: ["buenos-aires", "cordoba"],
    cl: ["santiago"],
    ec: ["quito", "guayaquil"],
    es: ["madrid", "barcelona"],
  }

  countries.forEach((code) => {
    // 1. Country Hub
    sitemapEntries.push({
      url: `${baseUrl}/${code}`,
      lastModified: dates.countries,
      changeFrequency: "weekly",
      priority: 0.6,
    })

    // 2. Standard Subpages — RETIRADAS del sitemap (2026-07-11): /xx/programa|resultados|metodologia
    // redirigen 308 a la versión global; 63 URLs de redirect no deben declararse en el sitemap.

    // 3. Country-Specific Blog Posts (Scan file system)
    try {
      const blogDir = path.join(process.cwd(), "app", code, "blog")
      if (fs.existsSync(blogDir)) {
        const blogPosts = fs
          .readdirSync(blogDir)
          .filter((file) => {
            const fullPath = path.join(blogDir, file)
            return fs.statSync(fullPath).isDirectory() && !file.startsWith(".")
          })

        blogPosts.forEach((slug) => {
          sitemapEntries.push({
            url: `${baseUrl}/${code}/blog/${slug}`,
            lastModified: dates.blog,
            changeFrequency: "monthly",
            priority: 0.7,
          })
        })
      }
    } catch (error) {
      console.error(`Error scanning blogs for ${code}:`, error)
    }

    // 4. Specialized pages (adolescentes, niños 8-12, vacacionales, videojuegos, vibe-coding)
    const specialPages = countrySpecialPages[code] || []
    specialPages.forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}/${code}/${slug}`,
        lastModified: dates.countries,
        changeFrequency: "weekly",
        priority: 0.7,
      })
    })

    // 5. City pages (direct city landing pages)
    const cityPages = countryCityPages[code] || []
    cityPages.forEach((citySlug) => {
      sitemapEntries.push({
        url: `${baseUrl}/${code}/${citySlug}`,
        lastModified: dates.countries,
        changeFrequency: "weekly",
        priority: 0.6,
      })
    })

    // 6. Legacy city-level SEO routes \u2014 RETIRADAS del sitemap (2026-07-11): la ruta
    // /xx/{ciudad}/cursos/inteligencia-artificial ya no existe (69 URLs devolv\u00edan 404).
  })

  return sitemapEntries
}
