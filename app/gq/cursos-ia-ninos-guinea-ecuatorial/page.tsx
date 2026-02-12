import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Curso Inteligencia Artificial Niños y Adolescentes Guinea Ecuatorial | Vibe Coding",
    description:
        "No es un curso de computación tradicional. Es Vibe Coding. Tu hijo crea software hablando en español con la IA. Sin matemáticas complejas. Garantía 10 días.de 10 días.",
    keywords: [
        "curso inteligencia artificial niños guinea ecuatorial",
        "cursos de tecnologia para niños guinea ecuatorial",
        "aprender ia malabo",
        "innovakids cursos",
    ],
    openGraph: {
        title: "Curso Inteligencia Artificial Niños y Adolescentes Guinea Ecuatorial | Vibe Coding",
        description: "Transforma a tu hijo en un creador digital. El curso de IA más avanzado de Guinea Ecuatorial para niños de 8-17 años.",
        url: "https://www.innovakidslatam.com/gq/cursos-ia-ninos-guinea-ecuatorial",
        locale: "es_GQ",
        siteName: "InnovaKids Guinea Ecuatorial",
        type: "website",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/gq/cursos-ia-ninos-guinea-ecuatorial",
    },
}

export default function CursosGuineaPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl px-2">
                            Curso de Vibe Coding: Aprende a Crear con IA
                            <span className="block text-2xl md:text-4xl mt-4 text-white/90">Para Niños en Guinea Ecuatorial</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            El único curso de inteligencia artificial 100% en español para niños ecuatoguineanos.
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
