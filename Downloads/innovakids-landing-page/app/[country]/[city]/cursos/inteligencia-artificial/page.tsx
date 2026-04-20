import { notFound } from "next/navigation"
import { getCountryConfig, type CountryCode } from "@/lib/countries-config"
import CursoIANinos from "@/app/cursos/inteligencia-artificial/page"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { country: string; city: string } }): Promise<Metadata> {
    const config = getCountryConfig(params.country as CountryCode)
    if (!config) return {}

    // Format city nicely (e.g., santiago -> Santiago)
    const cityFormatted = params.city
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")

    const canonical = `https://www.innovakidslatam.com/${params.country}/${params.city}/cursos/inteligencia-artificial`
    const image = "https://www.innovakidslatam.com/hero-child-learning-ai.jpg"

    const title = `Curso de IA para ${config.childTerm} en ${cityFormatted}, ${config.name} | InnovaKids`
    const description = `Curso online de inteligencia artificial para ${config.childTerm} ${config.demonym} en ${cityFormatted}. Grupos de máx. 5 alumnos, clases en vivo, garantía 10 días. Reserva con ${config.reservationPriceDisplay}.`

    return {
        title,
        description,
        keywords: [
            `curso ia ${cityFormatted.toLowerCase()}`,
            `curso inteligencia artificial ${cityFormatted.toLowerCase()}`,
            `clases ia ${config.childTerm} ${cityFormatted.toLowerCase()}`,
            `ia para ${config.childTerm} ${config.name.toLowerCase()}`,
            ...config.keywords,
        ],
        alternates: { canonical },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: "InnovaKids",
            type: "website",
            locale: config.locale,
            images: [{ url: image, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        robots: { index: true, follow: true },
    }
}

export default function CityCoursePage({ params }: { params: { country: string; city: string } }) {
    const config = getCountryConfig(params.country as CountryCode)

    // Verify if country exists
    if (!config) {
        notFound()
    }

    return <CursoIANinos />
}
