import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Curso Inteligencia Artificial Niños Venezuela | Vibe Coding",
    description:
        "No es un curso de computación tradicional. Es Vibe Coding. Tu hijo crea software hablando en español con la IA. Sin matemáticas complejas. Garantía de 10 días.",
    keywords: [
        "curso inteligencia artificial niños venezuela",
        "cursos de tecnologia para niños venezuela",
        "aprender ia caracas",
        "innovakids cursos",
    ],
    openGraph: {
        title: "Curso Inteligencia Artificial Niños Venezuela | Vibe Coding",
        description: "Transforma a tu hijo en un creador digital. El curso de IA más avanzado de Venezuela para niños de 8-14 años.",
        url: "https://www.innovakidslatam.com/ve/cursos-ia-ninos-venezuela",
        locale: "es_VE",
        siteName: "InnovaKids Venezuela",
        type: "website",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/ve/cursos-ia-ninos-venezuela",
    },
}

export default function CursosVenezuelaPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-background">
                <section className="relative pt-32 pb-24 bg-gradient-to-b from-background to-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 mb-8">
                            <span className="text-3xl">🇻🇪</span>
                            <span className="text-white font-medium">Curso #1 en Venezuela</span>
                        </div>

                        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl px-2">
                            Curso de Vibe Coding: Aprende a Crear con IA
                            <span className="block text-2xl md:text-4xl mt-4 text-white/90">Para Niños en Venezuela</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Tu hijo aprenderá a usar ChatGPT, crear videojuegos, arte digital y más. 10 clases en vivo con grupos de máximo 5 niños.
                        </p>

                        <Link href="/#sesion-estrategica">
                            <Button className="bg-primary hover:bg-primary/90 text-[#0a1628] px-12 py-8 text-xl font-bold rounded-full">
                                Reservar Clase de Prueba GRATIS
                            </Button>
                        </Link>
                    </div>
                </section>

                <section className="py-20 bg-[#0a1628]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-white text-center mb-12 font-premium">
                            ¿Qué Aprenderá tu Hijo?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { emoji: "🤖", title: "Vibe IA", desc: "Crea tu propio Chatbot Inteligente" },
                                { emoji: "🎨", title: "Vibe Art", desc: "Genera arte digital y cómics increíbles" },
                                { emoji: "🎵", title: "Vibe Music", desc: "Compón música original con IA" },
                                { emoji: "💻", title: "Vibe Coding", desc: "Programa videojuegos y apps con IA" },
                                { emoji: "🧠", title: "Vibe Study", desc: "Hackea tu escuela y tareas" },
                                { emoji: "🎬", title: "Vibe Cinema", desc: "Produce videos de cine con IA" },
                                { emoji: "🛡️", title: "Cyber Ethics", desc: "Seguridad digital y deepfakes" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <span className="text-3xl mb-3 block">{item.emoji}</span>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-white mb-8 font-premium">Empieza Hoy Mismo</h2>
                        <p className="text-gray-400 mb-8">Agenda una evaluación gratuita de 30 minutos donde conoceremos a tu hijo y responderemos todas tus preguntas.</p>
                        <Link href="/#sesion-estrategica">
                            <Button className="bg-primary hover:bg-primary/90 text-[#0a1628] px-10 py-6 text-lg font-bold rounded-full">
                                Agendar Evaluación Gratis →
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
