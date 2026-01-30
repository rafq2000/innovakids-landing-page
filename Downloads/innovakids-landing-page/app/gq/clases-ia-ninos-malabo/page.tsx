import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Clases de Vibe Coding en Malabo 2026 | InnovaKids",
    description: "Clases de programación con IA (Vibe Coding) para niños en Malabo. Malabo II, Caracolas, Paraíso. Grupos de 5 alumnos. Primera clase GRATIS.",
    keywords: [
        "clases vibe coding malabo",
        "clases ia niños malabo",
        "curso inteligencia artificial niños malabo ii",
        "ia para niños caracolas",
        "clases programacion niños paraiso",
    ],
    alternates: { canonical: "https://www.innovakidslatam.com/gq/clases-ia-ninos-malabo" },
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
