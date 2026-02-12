"use client"

import { ProjectsGallery } from "@/components/projects-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Users, Star } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { CountryConfig } from "@/lib/countries-config"

interface ResultsPageContentProps {
    country?: CountryConfig
}

export function ResultsPageContent({ country }: ResultsPageContentProps) {
    return (
        <>
            <Navigation countryCode={country?.code} />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-[#030712] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4ECDC4]/5 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1 mb-6">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-yellow-500 text-sm font-bold">Resultados Reales</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            No nos creas a nosotros. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] to-blue-500">
                                Mira lo que crean nuestros alumnos.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                            En InnovaKids no prometemos "futuro". Entregamos habilidades tangibles hoy.
                            Cada proyecto aquí fue creado por un niño de 8-14 años.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">527</div>
                                <div className="text-sm text-gray-500">Graduados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">9</div>
                                <div className="text-sm text-gray-500">Países</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">5,000+</div>
                                <div className="text-sm text-gray-500">Proyectos Creados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                                <div className="text-sm text-gray-500">Calificación</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Gallery */}
                <ProjectsGallery />

                {/* Testimonials */}
                <div className="bg-[#0f172a]">
                    <TestimonialsSection />
                </div>

                {/* Graduation / Certificate Section */}
                <section className="py-20 bg-[#030712]">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1 mb-6">
                                    <Trophy className="w-4 h-4 text-purple-400" />
                                    <span className="text-purple-400 text-sm font-bold">Certificación Internacional</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Más que un curso, una credencial para su futuro
                                </h2>
                                <p className="text-gray-400 mb-6 text-lg">
                                    Al finalizar, tu hijo recibe su certificado oficial de InnovaKids, validando sus nuevas habilidades en Inteligencia Artificial Generativa.
                                </p>
                                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 font-bold text-lg">
                                    Quiero que mi hijo se gradúe
                                </Button>
                            </div>
                            <div className="flex-1 relative">
                                {/* Placeholder for certificate image */}
                                <div className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-50" />
                                    <div className="text-center z-10">
                                        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                                        <p className="text-white font-serif text-2xl">Certificado InnovaKids</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#030712] text-center border-t border-white/5">
                    <div className="container mx-auto max-w-3xl px-4">
                        <Users className="w-16 h-16 text-[#4ECDC4] mx-auto mb-6" />
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Únete a la nueva generación de creadores
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            No dejes que tu hijo sea solo un consumidor de tecnología. Dale las herramientas para crearla.
                        </p>
                        <Link href="/#inversion">
                            <Button className="bg-[#4ECDC4] hover:bg-[#45b7af] text-black px-12 py-8 rounded-full text-xl font-bold shadow-[0_0_30px_rgba(78,205,196,0.3)] hover:shadow-[0_0_50px_rgba(78,205,196,0.5)] transition-all">
                                Ver Fechas y Precios <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
