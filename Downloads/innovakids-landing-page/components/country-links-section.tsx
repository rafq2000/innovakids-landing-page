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
        <section className="bg-[#EDE6D3] text-[#2F2F2C] border-t border-[#2F2F2C]/10 py-20 md:py-28">
            <div className="max-w-[1100px] mx-auto px-6 md:px-10 space-y-16">
                {allCities.length > 0 && (
                    <div>
                        <div className="flex items-center gap-5 mb-8">
                            <div className="h-px w-12 bg-[#C96342]" />
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                                Cursos de IA en {country.name}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {allCities.map((city) => (
                                <a
                                    key={city}
                                    href={`/${country.code}/${toSlug(city)}/cursos/inteligencia-artificial`}
                                    title={`Curso de IA para ${country.childTerm} en ${city}, ${country.name}`}
                                    className="inline-flex items-center px-4 py-2 border border-[#2F2F2C]/20 bg-transparent text-sm text-[#2F2F2C] hover:border-[#C96342] hover:text-[#C96342] hover:bg-[#F5F1E8] rounded-sm transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Cursos IA en {city}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    <div className="flex items-center gap-5 mb-8">
                        <div className="h-px w-12 bg-[#C96342]" />
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                            InnovaKids también está en
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {otherCountries.map((c) => (
                            <a
                                key={c.code}
                                href={`/${c.code}`}
                                title={`Curso de IA para ${c.childTerm} en ${c.name}`}
                                className="inline-flex items-center gap-2 px-4 py-2 border border-[#2F2F2C]/20 bg-transparent text-sm text-[#2F2F2C] hover:border-[#C96342] hover:text-[#C96342] hover:bg-[#F5F1E8] rounded-sm transition-colors"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                <span className="text-base leading-none">{c.flag}</span>
                                <span>{c.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
