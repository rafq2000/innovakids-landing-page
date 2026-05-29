import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "InnovaKids LATAM - Cursos de IA para Niños",
        short_name: "InnovaKids",
        description: "Cursos online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años. Aprende a crear apps y videojuegos.",
        start_url: "/",
        display: "standalone",
        background_color: "#F2EDE0",
        theme_color: "#F2EDE0",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    }
}
