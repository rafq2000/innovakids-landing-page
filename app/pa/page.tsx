import { generateHreflangs } from "@/lib/seo-config";
import { CountryHomePage } from "@/components/country-home-page"
import { getCountryConfig } from "@/lib/countries-config"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const countryCode = "pa"

export async function generateMetadata(): Promise<Metadata> {
    const country = getCountryConfig(countryCode)
    if (!country) return {}

    return {
        title: country.metaTitle,
        description: country.metaDescription,
        keywords: [...(country.keywords || []), ...(country.longTailKeywords || [])],
        alternates: {
            canonical: `https://www.innovakidslatam.com/${country.code}`,
            languages: generateHreflangs("home"),
        },
        openGraph: {
            title: country.metaTitle,
            description: country.metaDescription,
            url: `https://www.innovakidslatam.com/${country.code}`,
            type: "website",
            locale: "es_419",
            siteName: "InnovaKids",
            images: [{
                url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
                width: 1200,
                height: 630,
                alt: `Curso de IA para Niños - InnovaKids ${country.name}`,
            }],
        },
        twitter: {
            card: "summary_large_image",
            title: country.metaTitle,
            description: country.metaDescription,
            images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
        },
    }
}

export default function CountryPage() {
    const country = getCountryConfig(countryCode)
    if (!country) return notFound()

    return <CountryHomePage country={country} />
}
