import type { MetadataRoute } from "next"
import { getAllCountryCodes, getCountryConfig } from "@/lib/countries-config"
import fs from "fs"
import path from "path"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.innovakidslatam.com"
  const currentDate = new Date()

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
    "/brochure-programa-ia",
    "/como-ensenar-ia-a-mis-hijos",
    "/descargar-guia-ia-ninos",
    "/kit-gratuito-descarga",
    "/cursos-online-para-ninos",
    "/clases-ia-ninos",
    "/ia-ninos-por-edad",
    "/cursos/inteligencia-artificial",
  ]

  // Course specialization pages (priority 0.9)
  const coursePages = [
    "/curso-creacion-videojuegos-ninos",
    "/curso-creador-contenido-ia",
    "/curso-emprendimiento-ninos",
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
  ]

  // Homepage (priority 1.0)
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ]

  // Main pages
  mainPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  })

  // Course pages
  coursePages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  })

  // Blog pages
  blogPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  })

  // Dynamic Country Pages
  const countries = getAllCountryCodes()

  countries.forEach((code) => {
    // 1. Country Hub
    sitemapEntries.push({
      url: `${baseUrl}/${code}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    })

    // 2. Standard Subpages (handled by app/[country]/...)
    // These exist for all countries via the dynamic route
    const subpages = ["programa", "resultados", "metodologia-aprender-creando"]
    subpages.forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}/${code}/${slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.5,
      })
    })

    // 3. Country-Specific Blog Posts (Scan file system)
    // We look for: app/[code]/blog/[slug]
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
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
          })
        })
      }
    } catch (error) {
      console.error(`Error scanning blogs for ${code}:`, error)
    }

    // 4. City-level SEO routes for course specialization (Long-tail)
    const config = getCountryConfig(code)
    if (config && config.otherCities && config.otherCities.length > 0) {
      config.otherCities.forEach((city: string) => {
        // Formateo simple para URLs (minúscula y reemplazo de espacios por guiones)
        const citySlug = city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")
        sitemapEntries.push({
          url: `${baseUrl}/${code}/${citySlug}/cursos/inteligencia-artificial`,
          lastModified: currentDate,
          changeFrequency: "weekly",
          priority: 0.5,
        })
      })
    }
  })

  return sitemapEntries
}

