"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Search, MessageCircle, Lightbulb, Hammer, Presentation, Brain, Palette, Code, Music, Mic, Rocket } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { CountryConfig } from "@/lib/countries-config"
import { COHORT, SOCIAL_PROOF } from "@/lib/site-config"

interface MetodologiaPageContentProps {
    country?: CountryConfig
}

export function MetodologiaPageContent({ country }: MetodologiaPageContentProps) {
    const ericaSteps = [
        {
            letter: "E",
            name: "Explorar",
            description: "El alumno interactúa con una herramienta de IA por primera vez. Descubre qué puede hacer, juega y se sorprende.",
            bloom: "Recordar · Comprender",
            icon: Search,
        },
        {
            letter: "R",
            name: "Reflexionar",
            description: "Discusión guiada: ¿cómo funciona? ¿Qué datos usa? ¿Es justo y ético? Pensamiento crítico desde el día 1.",
            bloom: "Analizar · Evaluar",
            icon: MessageCircle,
        },
        {
            letter: "I",
            name: "Imaginar",
            description: "El alumno diseña su propio proyecto: una historia, una app, un videojuego o una canción. Su idea, su visión.",
            bloom: "Crear",
            icon: Lightbulb,
        },
        {
            letter: "C",
            name: "Construir",
            description: "Desarrollo real con herramientas de IA y programación. Manos en el teclado, errores reales, soluciones propias.",
            bloom: "Aplicar · Crear",
            icon: Hammer,
        },
        {
            letter: "A",
            name: "Presentar (y compartir)",
            description: "Demo Day: expone su creación ante compañeros y familia, recibe feedback e itera. Aprende a comunicar.",
            bloom: "Evaluar · Crear",
            icon: Presentation,
        },
    ]

    const explorerHighlights = [
        { title: "Vibe IA: Tu nuevo superpoder", desc: "Fundamentos de la IA generativa.", icon: Brain },
        { title: "Prompt Engineering", desc: "Estructura de prompts efectivos.", icon: Code },
        { title: "Vibe Voice & Music", desc: "Clonación de voz y composición musical con IA.", icon: Music },
        { title: "Generative Art I & II", desc: "De la imaginación a la imagen. Storytelling visual.", icon: Palette },
        { title: "Vibe Coding", desc: "Programación de videojuegos con IA.", icon: Code },
        { title: "Cyber Ethics + Proyecto Final", desc: "Deepfakes, seguridad digital y presentación de identidad.", icon: Rocket },
    ]

    const tracks = [
        { name: "Estudio", desc: "Flashcards, apuntes automáticos, quizzes y dashboard de progreso.", color: "#2E7D6B" },
        { name: "Emprender", desc: "Landing, catálogo, bot de ventas y redes sociales con IA.", color: "#C96342" },
        { name: "Video", desc: "Guion, voz clonada, video generado y publicación automática.", color: "#4A3B8C" },
        { name: "Audio", desc: "Música original, podcast y distribución en Spotify.", color: "#B85A8C" },
        { name: "Transcribir", desc: "Chat con PDFs, resúmenes inteligentes y extracción de datos.", color: "#1F6FB0" },
        { name: "Programar", desc: "JavaScript, APIs, juego multiplayer y tu app publicada.", color: "#D17C2A" },
    ]

    return (
        <>
            <Navigation countryCode={country?.code} />
            <div className="min-h-screen bg-[#FAF7EF]">
                {/* Hero Section */}
                <section className="relative pt-40 pb-32">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="text-center space-y-12 max-w-[900px] mx-auto">
                            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#B5522F]">
                                Metodología ERICA · Aprender Creando
                            </p>

                            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#1A1714]">
                                Los niños no aprenden
                                <br />
                                <span className="text-[#B5522F]">sobre IA.</span>
                                <br />
                                La crean.
                            </h1>

                            <p className="text-xl lg:text-2xl leading-relaxed text-[#3B3630] max-w-[800px] mx-auto">
                                Cada clase es un proyecto real. Tu hijo construye, experimenta, falla, aprende y domina la IA{" "}
                                <span className="text-[#B5522F] font-semibold">haciendo</span>.
                                {" "}Probado por {SOCIAL_PROOF.graduates}+ familias en {SOCIAL_PROOF.countries} países.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                                <Button
                                    size="lg"
                                    asChild
                                    className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-12 py-8 text-xl font-semibold rounded-sm shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] hover:scale-[1.02] transition-all"
                                >
                                    <Link href="/#sesion-estrategica">
                                        <Sparkles className="mr-3 h-6 w-6" />
                                        Agendar diagnóstico gratis
                                    </Link>
                                </Button>

                                <p className="text-sm text-[#6B645B]">2 niveles &middot; 10 clases cada uno &middot; 6 tracks especializados</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-32 bg-[#F5F1E8]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1714] leading-tight">
                                    La teoría sin práctica es conocimiento muerto.
                                </h2>

                                <div className="space-y-6 text-lg text-[#3B3630] leading-relaxed">
                                    <p>Tu hijo no necesita memorizar conceptos de IA que olvidará en semanas.</p>

                                    <p>
                                        Necesita <span className="text-[#B5522F] font-semibold">crear con sus propias manos</span>, ver sus
                                        ideas cobrar vida, y experimentar el poder de la Inteligencia Artificial en acción.
                                    </p>

                                    <p className="text-xl text-[#1A1714] font-semibold pt-4">Cada clase = 1 proyecto terminado.</p>
                                </div>
                            </div>

                            <div className="relative">
                                <Image
                                    src="/child-coding-and-building-ai-project-happily-on-co.jpg"
                                    alt="Niño creando proyecto de IA"
                                    width={600}
                                    height={600}
                                    className="rounded-sm shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ERICA Method */}
                <section className="py-32 bg-[#FAF7EF]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="text-center space-y-6 mb-24">
                            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#B5522F]">
                                Nuestro método pedagógico
                            </p>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1714]">
                                Metodología ERICA
                            </h2>
                            <p className="text-xl text-[#3B3630] max-w-[700px] mx-auto">
                                5 pasos basados en la Taxonomía de Bloom que llevan a cada alumno
                                del descubrimiento a la creación real.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {ericaSteps.map((step, index) => {
                                const Icon = step.icon
                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-[#F5F1E8] border border-[#E8E2D6] rounded-sm p-10 hover:shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] transition-all duration-300"
                                    >
                                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-[#C96342] rounded-sm flex items-center justify-center">
                                                    <span className="text-3xl font-bold text-[#FAF7EF]">{step.letter}</span>
                                                </div>
                                            </div>

                                            <div className="flex-1 space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <Icon className="w-5 h-5 text-[#B5522F]" />
                                                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#1A1714]">{step.name}</h3>
                                                </div>
                                                <p className="text-lg text-[#3B3630] leading-relaxed">{step.description}</p>
                                                <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#6B645B]">
                                                    Bloom: {step.bloom}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Nivel 1: Vibe Explorer */}
                <section className="py-32 bg-[#F5F1E8]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="text-center space-y-6 mb-24">
                            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#B5522F]">
                                Nivel 1 · 10 clases · 8-17 años
                            </p>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1714]">Vibe Explorer</h2>
                            <p className="text-xl text-[#3B3630] max-w-[700px] mx-auto">
                                Fundamentos de IA generativa. Todos empiezan aquí: voz, música, arte, código y ética digital.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {explorerHighlights.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div
                                        key={index}
                                        className="bg-[#FAF7EF] border border-[#E8E2D6] rounded-sm p-8 hover:shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] transition-all duration-300"
                                    >
                                        <Icon className="w-8 h-8 text-[#B5522F] mb-4" />
                                        <h3 className="font-display text-lg font-bold text-[#1A1714] mb-2">{item.title}</h3>
                                        <p className="text-[#3B3630] leading-relaxed">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Nivel 2: Vibe Maker + Tracks */}
                <section className="py-32 bg-[#FAF7EF]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="text-center space-y-6 mb-24">
                            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#B5522F]">
                                Nivel 2 · 10 misiones · 11-17 años
                            </p>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1714]">Vibe Maker</h2>
                            <p className="text-xl text-[#3B3630] max-w-[700px] mx-auto">
                                5 misiones core + 1 track especializado a elección. Tu hijo construye apps, bots
                                y automatizaciones reales publicadas en internet.
                            </p>
                        </div>

                        <div className="mb-16">
                            <h3 className="font-display text-2xl font-bold text-[#1A1714] mb-8 text-center">Elige 1 de 6 tracks</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tracks.map((track, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#F5F1E8] border border-[#E8E2D6] rounded-sm p-8 hover:shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] transition-all duration-300"
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full mb-4"
                                            style={{ backgroundColor: track.color }}
                                        />
                                        <h4 className="font-display text-lg font-bold text-[#1A1714] mb-2">Track {track.name}</h4>
                                        <p className="text-[#3B3630] leading-relaxed">{track.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 bg-[#1A1714]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="text-center space-y-10 max-w-[800px] mx-auto">
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#FAF7EF] leading-tight">
                                ¿Tu hijo está listo para crear el futuro?
                            </h2>

                            <p className="text-xl text-[#FAF7EF]/70 max-w-[700px] mx-auto">
                                Las plazas se agotan rápido para el programa que inicia el {COHORT.startDate}. Agenda tu evaluación gratuita.
                            </p>

                            <Button
                                size="lg"
                                asChild
                                className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-16 py-8 text-xl font-semibold rounded-sm shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] hover:scale-[1.02] transition-all"
                            >
                                <Link href="/#sesion-estrategica">
                                    <Sparkles className="mr-3 h-6 w-6" />
                                    Agendar diagnóstico gratis
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
