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

    return {
        title: country.metaTitle,
        description: country.metaDescription,
        alternates: {
            canonical: `https://www.innovakidslatam.com/${country.code}`,
        }
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
