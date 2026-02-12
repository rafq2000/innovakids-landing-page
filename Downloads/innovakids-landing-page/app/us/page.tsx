import { CountryHomePage } from "@/components/country-home-page"
import { getCountryConfig } from "@/lib/countries-config"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const countryCode = "us"

export async function generateMetadata(): Promise<Metadata> {
  const country = getCountryConfig(countryCode)
  if (!country) return {}

  return {
    title: country.metaTitle,
    description: country.metaDescription,
    alternates: {
      canonical: `https://www.innovakidslatam.com/${country.code}`,
    },
  }
}

export default function CountryPage() {
  const country = getCountryConfig(countryCode)
  if (!country) return notFound()

  return <CountryHomePage country={country} />
}
