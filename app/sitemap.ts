import type { MetadataRoute } from "next"
import { getAllCountryCodes } from "@/lib/countries-config"
import fs from "fs"
import path from "path"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.innovakidslatam.com"
  const currentDate = new Date()

  // Static Global Pages
  const staticPages = [
    "", // Home
    "/cursos-online-para-ninos",
    "/que-es-innovakids",
    "/blog",
    "/descargar-guia-ia-ninos",
    "/testimonios",
    "/curso-ia-ninos",
    "/clases-ia-ninos",
    "/como-ensenar-ia-a-mis-hijos",
    "/brochure-programa-ia",
    "/adolescentes",
    "/contacto",
    "/resultados",
    "/metodologia-aprender-creando",
    "/de-usuario-a-creador",
    "/ia-nos-recomienda",
    "/kit-gratuito-descarga",
    // Course specializations — high priority for indexing
    "/curso-creacion-videojuegos-ninos",
    "/curso-creador-contenido-ia",
    "/curso-emprendimiento-ninos",
  ]

  const coursePages = ["/curso-creacion-videojuegos-ninos", "/curso-creador-contenido-ia", "/curso-emprendimiento-ninos", "/curso-ia-ninos"]

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : coursePages.includes(route) ? 0.9 : 0.8,
  }))

  // Dynamic Country Pages
  const countries = getAllCountryCodes()

  countries.forEach((code) => {
    // 1. Country Hub
    sitemapEntries.push({
      url: `${baseUrl}/${code}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    })

    // 2. Standard Subpages (handled by app/[country]/...)
    // These exist for all countries via the dynamic route
    const subpages = ["programa", "resultados", "metodologia-aprender-creando"]
    subpages.forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}/${code}/${slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
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
  })

  return sitemapEntries
}

