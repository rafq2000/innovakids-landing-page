"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Lightbulb, Rocket, Brain, Code, Palette } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { CountryConfig } from "@/lib/countries-config"
import { COHORT } from "@/lib/site-config"

interface MetodologiaPageContentProps {
    country?: CountryConfig
}

export function MetodologiaPageContent({ country }: MetodologiaPageContentProps) {
    const projects = [
        {
            week: "Semana 1",
            title: "Mi Asistente Personal",
            description: "Tu hijo programa su primer chatbot inteligente que puede responder preguntas y ayudar con tareas.",
            icon: Brain,
            skills: ["Prompting", "ChatGPT API", "Logica de conversacion"],
        },
        {
            week: "Semana 2",
            title: "Generador de Historias Visuales",
            description: "Crea una app que genera historias ilustradas automaticamente con texto e imagenes de IA.",
            icon: Palette,
            skills: ["DALL-E API", "Storytelling", "Diseno de interfaces"],
        },
        {
            week: "Semana 3",
            title: "Analizador de Emociones",
            description: "Construye una herramienta que detecta emociones en textos y sugiere respuestas empaticas.",
            icon: Lightbulb,
            skills: ["Análisis de sentimientos", "Etica en IA", "UX Design"],
        },
        {
            week: "Semana 4",
            title: "Mi Primer Videojuego con IA",
            description: "Disena un juego donde los personajes tienen inteligencia artificial y toman decisiones propias.",
            icon: Code,
            skills: ["Game design", "NPCs inteligentes", "Vibe Coding"],
        },
        {
            week: "Semana 5",
            title: "Startup de IA - Proyecto Final",
            description: "Tu hijo presenta su propia idea de startup basada en IA ante compañeros y familias.",
            icon: Rocket,
            skills: ["Pitch", "Presentacion", "Emprendimiento"],
        },
    ]

    return (
        <>
            <Navigation countryCode={country?.code} />
            <div className="min-h-screen bg-[#FAF7EF]">
                {/* Hero Section */}
                <section className="relative pt-40 pb-32">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="text-center space-y-12 max-w-[900px] mx-auto">
                            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342]">
                                Metodología Aprender Creando
                            </p>

                            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#1A1714]">
                                Los niños no aprenden
                                <br />
                                <span className="text-[#C96342]">sobre IA.</span>
                                <br />
                                La crean.
                            </h1>

                            <p className="text-xl lg:text-2xl leading-relaxed text-[#3B3630] max-w-[800px] mx-auto">
                                Cada clase es un proyecto real. Tu hijo construye, experimenta, falla, aprende y domina la IA{" "}
                                <span className="text-[#C96342] font-semibold">haciendo</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                                <Button
                                    size="lg"
                                    asChild
                                    className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-12 py-8 text-xl font-semibold rounded-sm shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] hover:scale-[1.02] transition-all"
                                >
                                    <Link href="/#sesion-estrategica">
                                        <Sparkles className="mr-3 h-6 w-6" />
                                        Solicitar Evaluacion Gratuita
                                    </Link>
                                </Button>

                                <p className="text-sm text-[#6B645B]">5 semanas &middot; 10 proyectos reales</p>
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
                                    La teoria sin práctica es conocimiento muerto.
                                </h2>

                                <div className="space-y-6 text-lg text-[#3B3630] leading-relaxed">
                                    <p>Tu hijo no necesita memorizar conceptos de IA que olvidara en semanas.</p>

                                    <p>
                                        Necesita <span className="text-[#C96342] font-semibold">crear con sus propias manos</span>, ver sus
                                        ideas cobrar vida, y experimentar el poder de la Inteligencia Artificial en accion.
                                    </p>

                                    <p className="text-xl text-[#1A1714] font-semibold pt-4">Cada clase = 1 proyecto terminado.</p>
                                </div>
                            </div>

                            <div className="relative">
                                <Image
                                    src="/child-coding-and-building-ai-project-happily-on-co.jpg"
                                    alt="Nino creando proyecto de IA"
                                    width={600}
                                    height={600}
                                    className="rounded-sm shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Timeline */}
                <section className="py-32 bg-[#FAF7EF]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="text-center space-y-6 mb-24">
                            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342]">
                                Programa completo
                            </p>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1714]">5 semanas. 10 proyectos.</h2>
                            <p className="text-xl text-[#3B3630] max-w-[700px] mx-auto">
                                Tu hijo termina el curso con un portafolio de proyectos reales de IA.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {projects.map((project, index) => {
                                const Icon = project.icon
                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-[#F5F1E8] border border-[#E8E2D6] rounded-sm p-10 hover:shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] transition-all duration-300"
                                    >
                                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-[#FAF7EF] rounded-sm flex items-center justify-center border border-[#E8E2D6]">
                                                    <Icon className="w-10 h-10 text-[#C96342]" />
                                                </div>
                                            </div>

                                            <div className="flex-1 space-y-4">
                                                <div>
                                                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] mb-2">
                                                        {project.week}
                                                    </p>
                                                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#1A1714] mb-3">{project.title}</h3>
                                                    <p className="text-lg text-[#3B3630] leading-relaxed">{project.description}</p>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {project.skills.map((skill, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 bg-[#FAF7EF] text-[#C96342] rounded-sm text-sm font-medium border border-[#E8E2D6]"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
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
                                Las plazas se agotan rapido para el programa que inicia el {COHORT.startDate}. Agenda tu evaluación gratuita.
                            </p>

                            <Button
                                size="lg"
                                asChild
                                className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-16 py-8 text-xl font-semibold rounded-sm shadow-[0_2px_8px_-4px_rgba(26,23,20,0.1)] hover:scale-[1.02] transition-all"
                            >
                                <Link href="/#sesion-estrategica">
                                    <Sparkles className="mr-3 h-6 w-6" />
                                    Solicitar Evaluacion Ahora
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
