import { ResultsPageContent } from "@/components/results-page-content"
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
        title: `Proyectos de Alumnos InnovaKids ${country.name} | Galería de Resultados`,
        description: `Mira lo que los ${country.childTerm} de ${country.name} están creando con Inteligencia Artificial. Videojuegos, Arte, Música y más.`,
        alternates: {
            canonical: `https://www.innovakids.cl/${countryCode}/resultados`,
        }
    }
}

export default function CountryResultsPage({ params }: Props) {
    const countryCode = params.country as CountryCode
    const country = getCountryConfig(countryCode)

    if (!country) {
        notFound()
    }

    return <ResultsPageContent country={country} />
}
