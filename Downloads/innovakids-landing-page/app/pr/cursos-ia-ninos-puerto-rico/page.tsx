import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Curso Inteligencia Artificial Niños Puerto Rico | Vibe Coding",
    description:
        "No es un curso de computación tradicional. Es Vibe Coding. Tu hijo crea software hablando en español con la IA. Sin matemáticas complejas. Garantía de 10 días.",
    keywords: [
        "curso inteligencia artificial niños puerto rico",
        "cursos de tecnologia para niños puerto rico",
        "aprender ia san juan",
        "innovakids cursos",
    ],
    openGraph: {
        title: "Curso Inteligencia Artificial Niños Puerto Rico | Vibe Coding",
        description: "Transforma a tu hijo en un creador digital. El curso de IA más avanzado de Puerto Rico para niños de 8-14 años.",
        url: "https://www.innovakidslatam.com/pr/cursos-ia-ninos-puerto-rico",
        locale: "es_PR",
        siteName: "InnovaKids Puerto Rico",
        type: "website",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/pr/cursos-ia-ninos-puerto-rico",
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
