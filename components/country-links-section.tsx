import type { CountryConfig, CountryCode } from "@/lib/countries-config"
import { countriesConfig } from "@/lib/countries-config"

interface CountryLinksSectionProps {
    country: CountryConfig
}

// Priority countries to show first in the links section
const PRIORITY_COUNTRIES: CountryCode[] = ["cl", "mx", "co", "ar", "pe", "es", "us", "ec", "bo"]

// Countries that have city pages
const CITY_PAGES: Record<string, string[]> = {
    mx: ["cdmx", "monterrey", "guadalajara"],
    co: ["bogota", "medellin", "cali"],
    pe: ["lima", "arequipa"],
    ar: ["buenos-aires", "cordoba"],
    cl: ["santiago"],
    ec: ["quito", "guayaquil"],
    es: ["madrid", "barcelona"],
}

// Countries with specialized pages
const SPECIALIZED_PAGES: Record<string, string[]> = {
    mx: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    co: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    pe: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    ar: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    cl: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    ec: ["curso-ia-adolescentes", "curso-ia-ninos-8-12", "cursos-vacacionales-ia", "curso-videojuegos-ia-ninos", "vibe-coding-ninos"],
    es: ["curso-ia-adolescentes", "curso-ia-ninos-8-12"],
    us: ["curso-ia-adolescentes"],
    pa: ["curso-ia-adolescentes"],
}

// Blog slugs per country
const BLOG_SLUGS: Record<string, string> = {
    cl: "cursos-inteligencia-artificial-ninos-chile-guia",
    mx: "cursos-inteligencia-artificial-ninos-mexico-guia",
    co: "cursos-inteligencia-artificial-ninos-colombia-guia",
    ar: "cursos-inteligencia-artificial-chicos-argentina-guia",
    pe: "cursos-inteligencia-artificial-ninos-peru-guia",
    es: "cursos-inteligencia-artificial-ninos-espana-guia",
    us: "cursos-inteligencia-artificial-ninos-latinos-usa-guia",
    ec: "cursos-inteligencia-artificial-ninos-ecuador-guia",
    uy: "cursos-inteligencia-artificial-ninos-uruguay-guia",
    ve: "cursos-inteligencia-artificial-ninos-venezuela-guia",
    cr: "cursos-inteligencia-artificial-ninos-costa-rica-guia",
    do: "cursos-inteligencia-artificial-ninos-republica-dominicana-guia",
    pa: "cursos-inteligencia-artificial-ninos-panama-guia",
    hn: "cursos-inteligencia-artificial-ninos-honduras-guia",
    sv: "cursos-inteligencia-artificial-ninos-el-salvador-guia",
    gt: "cursos-inteligencia-artificial-ninos-guatemala-guia",
    py: "cursos-inteligencia-artificial-ninos-paraguay-guia",
    bo: "cursos-inteligencia-artificial-ninos-bolivia-guia",
    ni: "cursos-inteligencia-artificial-ninos-nicaragua-guia",
    pr: "cursos-inteligencia-artificial-ninos-puerto-rico-guia",
    gq: "cursos-inteligencia-artificial-ninos-guinea-ecuatorial-guia",
}

// Global guide posts (Spanish, shown on every country page for internal linking)
const GUIDE_POSTS: { slug: string; label: string }[] = [
    { slug: "actividades-inteligencia-artificial-ninos-casa", label: "Actividades de IA para Niños en Casa" },
    { slug: "crear-videojuegos-con-ia-ninos-guia-completa", label: "Crear Videojuegos con IA" },
    { slug: "curso-ia-ninos-10-11-12-anos", label: "IA para Niños de 10-12 años" },
    { slug: "ia-para-ninos-por-edad-8-10-11-13-14-17", label: "IA para Niños por Edad" },
    { slug: "chatgpt-tareas-escolares-ninos-guia-padres", label: "ChatGPT para Tareas Escolares" },
    { slug: "extraescolar-inteligencia-artificial-ninos", label: "Extraescolar de IA para Niños" },
    { slug: "scratch-vs-ia-ninos", label: "Scratch vs IA para Niños" },
]

const SLUG_LABELS: Record<string, string> = {
    "curso-ia-adolescentes": "IA para Adolescentes",
    "curso-ia-ninos-8-12": "IA Niños 8-12 años",
    "cursos-vacacionales-ia": "Cursos Vacacionales IA",
    "curso-videojuegos-ia-ninos": "Videojuegos con IA",
    "vibe-coding-ninos": "Vibe Coding",
}

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
        .slice(0, 8)

    const cityPages = CITY_PAGES[country.code] || []
    const specializedPages = SPECIALIZED_PAGES[country.code] || []
    const blogSlug = BLOG_SLUGS[country.code]
    const linkClass = "font-display inline-flex items-center px-4 py-2 border border-[#2F2F2C]/20 bg-transparent text-sm text-[#2F2F2C] hover:border-[#C96342] hover:text-[#B5522F] hover:bg-[#F5F1E8] rounded-sm transition-colors"

    return (
        <section className="bg-[#EDE6D3] text-[#2F2F2C] border-t border-[#2F2F2C]/10 py-20 md:py-28">
            <div className="max-w-[1100px] mx-auto px-6 md:px-10 space-y-16">
                {/* City pages */}
                {cityPages.length > 0 && (
                    <div>
                        <div className="flex items-center gap-5 mb-8">
                            <div className="h-px w-12 bg-[#C96342]" />
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                                Cursos de IA por ciudad en {country.name}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cityPages.map((slug) => (
                                <a
                                    key={slug}
                                    href={`/${country.code}/${slug}`}
                                    title={`Curso de IA para ${country.childTerm} en ${slug}, ${country.name}`}
                                    className={linkClass}
                                >
                                    Cursos IA en {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")}
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Specialized pages + blog */}
                {(specializedPages.length > 0 || blogSlug) && (
                    <div>
                        <div className="flex items-center gap-5 mb-8">
                            <div className="h-px w-12 bg-[#C96342]" />
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                                Más cursos en {country.name}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {specializedPages.map((slug) => (
                                <a
                                    key={slug}
                                    href={`/${country.code}/${slug}`}
                                    title={`${SLUG_LABELS[slug] || slug} en ${country.name}`}
                                    className={linkClass}
                                >
                                    {SLUG_LABELS[slug] || slug}
                                </a>
                            ))}
                            {blogSlug && (
                                <a
                                    href={`/${country.code}/blog/${blogSlug}`}
                                    title={`Guía de cursos de IA para ${country.childTerm} en ${country.name}`}
                                    className={linkClass}
                                >
                                    Guía para Padres {country.name}
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {/* Global guides / blog posts */}
                <div>
                    <div className="flex items-center gap-5 mb-8">
                        <div className="h-px w-12 bg-[#C96342]" />
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                            Guías y recursos de IA para padres
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {GUIDE_POSTS.map((post) => (
                            <a
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                title={`${post.label} · Guía InnovaKids`}
                                className={linkClass}
                            >
                                {post.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Other countries */}
                <div>
                    <div className="flex items-center gap-5 mb-8">
                        <div className="h-px w-12 bg-[#C96342]" />
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                            InnovaKids también está en
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {otherCountries.map((c) => (
                            <a
                                key={c.code}
                                href={`/${c.code}`}
                                title={`Curso de IA para ${c.childTerm} en ${c.name}`}
                                className={`${linkClass} gap-2`}
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
