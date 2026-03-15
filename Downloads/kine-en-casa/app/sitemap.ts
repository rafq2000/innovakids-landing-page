import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { exercises } from '@/lib/exercises-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kineum.cl'

    const comunas = [
        'las-condes', 'vitacura', 'providencia', 'nunoa', 'la-reina', 'lo-barnechea',
        'la-florida', 'penalolen', 'macul', 'san-joaquin', 'santiago-centro'
    ]

    const especialidades = [
        'kinesiologia-geriatrica', 'rehabilitacion-postquirurgica', 'kinesiologia-respiratoria',
        'rehabilitacion-neurologica', 'kinesiologia-traumatologica'
    ]

    const localRoutes: string[] = []

    // Add pure comuna pages
    comunas.forEach(comuna => {
        localRoutes.push(`/kinesiologo-a-domicilio-${comuna}`)
        // Add matrix pages
        especialidades.forEach(espec => {
            localRoutes.push(`/${espec}-${comuna}`)
        })
    })

    // Static base routes
    const baseRoutes = [
        '',
        '/nosotros',
        '/ejercicios',
        '/servicios/respiratoria',
        '/servicios/geriatrica',
        '/servicios/neurologica',
        '/servicios/traumatologica',
    ]

    const allRoutes = [...baseRoutes, ...localRoutes].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.9,
    }))

    // Blog posts
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Exercises (if you ever make individual pages for them, but for now the list is on /ejercicios)
    // Since exercises are currently all on one page, we don't need individual entries unless we made dynamic routes for them.
    // The user asked for "exercises" library, currently it's a single page /ejercicios. 
    // If we want to rank for specific exercises, it's better to have them as anchors or separate pages. 
    // Given the current structure, /ejercicios covers it.

    return [...allRoutes, ...posts]
}
