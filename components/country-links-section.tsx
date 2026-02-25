import type { CountryConfig, CountryCode } from "@/lib/countries-config"
import { countriesConfig } from "@/lib/countries-config"

interface CountryLinksSectionProps {
    country: CountryConfig
}

// Priority countries to show first in the links section
const PRIORITY_COUNTRIES: CountryCode[] = ["cl", "mx", "co", "ar", "pe", "es", "us", "ec", "bo"]

export function CountryLinksSection({ country }: CountryLinksSectionProps) {
    const otherCountries = PRIORITY_COUNTRIES
        .filter((code) => code !== country.code)
        .map((code) => countriesConfig[code])
        .filter(Boolean)
        .slice(0, 8) // Show max 8 related countries

    return (
        <section className="py-12 bg-black/20 border-t border-white/5">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest font-medium">
                    InnovaKids también está en
                </p>
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    {otherCountries.map((c) => (
                        <a
                            key={c.code}
                            href={`/${c.code}`}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/40 transition-all"
                            title={`Curso de IA para ${c.childTerm} en ${c.name}`}
                        >
                            <span className="text-base">{c.flag}</span>
                            <span>{c.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
