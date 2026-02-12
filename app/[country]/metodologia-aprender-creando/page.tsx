import { MetodologiaPageContent } from "@/components/metodologia-page-content"
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

    if (!country) return {}

    return {
        title: `Metodología Aprender Creando | Curso IA ${country.name}`,
        description: `Descubre cómo los ${country.childTerm} en ${country.name} aprenden IA creando proyectos reales. Metodología práctica InnovaKids.`,
        alternates: {
            canonical: `https://www.innovakids.cl/${countryCode}/metodologia-aprender-creando`,
        }
    }
}

export default function CountryMethodologyPage({ params }: Props) {
    const countryCode = params.country as CountryCode
    const country = getCountryConfig(countryCode)

    if (!country) {
        notFound()
    }

    return <MetodologiaPageContent country={country} />
}
