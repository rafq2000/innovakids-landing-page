import type { CountryConfig, CountryCode } from "@/lib/countries-config"
import { countriesConfig } from "@/lib/countries-config"

interface CountryLinksSectionProps {
    country: CountryConfig
}

// Priority countries to show first in the links section
const PRIORITY_COUNTRIES: CountryCode[] = ["cl", "mx", "co", "ar", "pe", "es", "us", "ec", "bo"]

function toSlug(city: string): string {
    return city
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
}

export function CountryLinksSection({ country }: CountryLinksSectionProps) {
    const otherCountries = PRIORITY_COUNTRIES
        .filter((code) => code !== country.code)
        .map((code) => countriesConfig[code])
        .filter(Boolean)
        .slice(0, 8) // Show max 8 related countries

    const allCities = [country.mainCity, ...country.otherCities]

    return (
        <section className="py-12 bg-black/20 border-t border-white/5">
            <div className="container mx-auto px-4">
                {/* City-level links for this country */}
                {allCities.length > 0 && (
                    <div className="mb-10">
                        <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest font-medium">
                            Cursos de IA en {country.name}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                            {allCities.map((city) => (
                                <a
                                    key={city}
                                    href={`/${country.code}/${toSlug(city)}/cursos/inteligencia-artificial`}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/40 transition-all"
                                    title={`Curso de IA para ${country.childTerm} en ${city}, ${country.name}`}
                                >
                                    Cursos IA en {city}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Other countries */}
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
