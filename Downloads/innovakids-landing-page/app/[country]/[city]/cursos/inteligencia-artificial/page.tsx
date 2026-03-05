import { notFound } from "next/navigation"
import { getCountryConfig } from "@/lib/countries-config"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import CursoIANinos from "@/app/cursos/inteligencia-artificial/page"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { country: string; city: string } }): Promise<Metadata> {
    const config = getCountryConfig(params.country)
    if (!config) return {}

    // Format city nicely (e.g., santiago -> Santiago)
    const cityFormatted = params.city.charAt(0).toUpperCase() + params.city.slice(1).replace(/-/g, ' ')

    // Custom metadata targeting the specific city
    return {
        title: `Curso de Inteligencia Artificial para Niños en ${cityFormatted} | InnovaKids`,
        description: `🚀 Curso de IA para niños y adolescentes en ${cityFormatted}. Aprende ChatGPT, creación de videojuegos en grupos de 5. ¡Aplica a la clase de diagnóstico gratis en ${cityFormatted}!`,
    }
}

export default function CityCoursePage({ params }: { params: { country: string; city: string } }) {
    const config = getCountryConfig(params.country)

    // Verify if country exists
    if (!config) {
        notFound()
    }

    // Very basic check, you could validate params.city against config.otherCities inside countries-config.ts 
    // for strict matching. For now, it dynamically accepts [city] parameters to build massive local SEO footprint.

    return (
        // Instead of duplicating codebase, we just render the unified intelligence-artificial course
        // But metadata at the <head> level is fully localized.
        <CursoIANinos />
    )
}
