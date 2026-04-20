import { generateHreflangs } from "@/lib/seo-config";
import { CountryHomePage } from "@/components/country-home-page"
import { getCountryConfig, getAllCountryCodes, CountryCode } from "@/lib/countries-config"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface Props {
    params: {
        country: string
    }
}

export async function generateStaticParams() {
    const codes = getAllCountryCodes()
    return codes.map((code) => ({
        country: code,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const countryCode = params.country as CountryCode
    const country = getCountryConfig(countryCode)

    if (!country) {
        return {}
    }

    const url = `https://www.innovakidslatam.com/${country.code}`
    const ogImage = "https://www.innovakidslatam.com/hero-child-learning-ai.jpg"

    return {
        title: country.metaTitle,
        description: country.metaDescription,
        keywords: [...country.keywords, ...country.longTailKeywords],
        alternates: {
            canonical: url,
            languages: generateHreflangs("home"),
        },
        openGraph: {
            title: country.metaTitle,
            description: country.metaDescription,
            url,
            type: "website",
            locale: country.locale,
            siteName: "InnovaKids",
            images: [{
                url: ogImage,
                width: 1200,
                height: 630,
                alt: `Curso de IA para ${country.childTerm} en ${country.name} — InnovaKids`,
            }],
        },
        twitter: {
            card: "summary_large_image",
            title: country.metaTitle,
            description: country.metaDescription,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
    }
}

export default function CountryPage({ params }: Props) {
    const countryCode = params.country as CountryCode
    const country = getCountryConfig(countryCode)

    if (!country) {
        notFound()
    }

    return <CountryHomePage country={country} />
}
