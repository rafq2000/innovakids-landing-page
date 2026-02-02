import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Clases de IA para Niños en Malabo | Online en Vivo",
    description:
        "¿Vives en Malabo? Tu hijo puede crear apps y videojuegos con IA desde casa (Malabo II, Ela Nguema). Horarios flexibles tardes y sábados. Garantía total.",
    keywords: [
        "clases ia niños malabo",
        "curso programación niños malabo ii",
        "vacacional tecnologia malabo",
        "innovakids malabo",
    ],
    openGraph: {
        title: "Clases de IA para Niños en Malabo | InnovaKids",
        description: "El curso #1 de Inteligencia Artificial para niños en Malabo. Grupos pequeños, atención personalizada.",
        url: "https://www.innovakidslatam.com/gq/clases-ia-ninos-malabo",
        locale: "es_GQ",
        siteName: "InnovaKids Malabo",
        type: "website",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/gq/clases-ia-ninos-malabo",
    },
}

export default function ClasesMalaboPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Clases de Vibe Coding e IA
                            <br />
                            <span className="text-[#3E7C17]">para Niños en Malabo</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            El mejor curso de IA para niños de Malabo. Online en vivo, 100% en español.
                        </p>
                        <Link href="/#sesion-estrategica">
                            <Button className="bg-primary text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full">
                                Agendar Ahora
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
