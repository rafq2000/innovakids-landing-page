import { ProgramPageContent } from "@/components/program-page-content"
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
        title: `Programa de IA para ${country.childTerm} en ${country.name} | Curriculum Completo`,
        description: `Conoce las 10 clases del programa InnovaKids en ${country.name}. Tu hijo creará arte con IA, aplicaciones y más. Precio en ${country.currency}.`,
        alternates: {
            canonical: `https://www.innovakids.cl/${countryCode}/programa`,
        }
    }
}

export default function CountryProgramPage({ params }: Props) {
    const countryCode = params.country as CountryCode
    const country = getCountryConfig(countryCode)

    if (!country) {
        notFound()
    }

    return <ProgramPageContent country={country} />
}
