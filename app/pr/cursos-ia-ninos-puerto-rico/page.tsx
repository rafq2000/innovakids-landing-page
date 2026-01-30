import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Curso de Vibe Coding para Niños Puerto Rico 2026 | InnovaKids",
    description: "El primer curso de Vibe Coding e IA para niños de 8-14 años en Puerto Rico. Clases online en vivo. Grupos reducidos. Aprende a crear Apps.",
    keywords: ["vibe coding puerto rico", "cursos de ia para niños puerto rico", "clases inteligencia artificial san juan", "curso ia niños bayamon", "innovakids puerto rico"],
    alternates: {
        canonical: "https://www.innovakidslatam.com/pr/cursos-ia-ninos-puerto-rico",
        languages: generateHreflangs("sales"),
    },
}

export default function CursosPuertoRicoPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl px-2">
                            Curso de Vibe Coding: Aprende a Crear con IA
                            <span className="block text-2xl md:text-4xl mt-4 text-white/90">Para Niños en Puerto Rico</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            10 clases en vivo donde tu hijo aprenderá a crear con inteligencia artificial.
                        </p>
                        <Link href="/#sesion-estrategica">
                            <Button className="bg-primary text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full">
                                Reservar Clase GRATIS
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
