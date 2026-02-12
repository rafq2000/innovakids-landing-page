import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Clases de IA para Niños en San Juan | Online en Vivo",
    description:
        "¿Vives en San Juan? Tu hijo puede crear apps y videojuegos con IA desde casa (Condado, Miramar, Viejo San Juan). Horarios flexibles tardes y sábados. Garantía 10 días.total.",
    keywords: [
        "clases ia niños san juan",
        "curso programación niños condado",
        "vacacional tecnologia san juan",
        "innovakids san juan",
    ],
    openGraph: {
        title: "Clases de IA para Niños en San Juan | InnovaKids",
        description: "El curso #1 de Inteligencia Artificial para niños en San Juan. Grupos pequeños, atención personalizada.",
        url: "https://www.innovakidslatam.com/pr/clases-ia-ninos-san-juan",
        locale: "es_PR",
        siteName: "InnovaKids San Juan",
        type: "website",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/pr/clases-ia-ninos-san-juan",
    },
}
export default function ClasesSanJuanPage() {
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
                            <span className="text-[#0050f0]">para Niños en San Juan</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            El mejor curso de IA para niños de San Juan. Online en vivo, grupos de máximo 5 alumnos.
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
