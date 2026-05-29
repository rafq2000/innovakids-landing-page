"use client"

import { ProjectsGallery } from "@/components/projects-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Users } from "lucide-react"
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
            <main className="min-h-screen bg-[#FAF7EF]">
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-[#FAF7EF] relative overflow-hidden">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10 text-center">
                        <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] mb-6">
                            Resultados Reales
                        </p>
                        <h1 className="font-display text-4xl md:text-6xl text-[#1A1714] mb-6 leading-[1.1]">
                            No nos creas a nosotros. <br />
                            <span className="text-[#C96342]">
                                Mira lo que crean nuestros alumnos.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#6B645B] max-w-2xl mx-auto mb-12">
                            En InnovaKids no prometemos &ldquo;futuro&rdquo;. Entregamos habilidades tangibles hoy.
                            Cada proyecto aqu&iacute; fue creado por un ni&ntilde;o de 8-17 a&ntilde;os.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto border-t border-[#1A1714]/12 pt-10">
                            <div>
                                <div className="font-display text-3xl md:text-4xl text-[#1A1714] mb-1">527</div>
                                <div className="text-sm text-[#6B645B]">Graduados</div>
                            </div>
                            <div>
                                <div className="font-display text-3xl md:text-4xl text-[#1A1714] mb-1">9</div>
                                <div className="text-sm text-[#6B645B]">Pa&iacute;ses</div>
                            </div>
                            <div>
                                <div className="font-display text-3xl md:text-4xl text-[#1A1714] mb-1">5,000+</div>
                                <div className="text-sm text-[#6B645B]">Proyectos Creados</div>
                            </div>
                            <div>
                                <div className="font-display text-3xl md:text-4xl text-[#1A1714] mb-1">4.9/5</div>
                                <div className="text-sm text-[#6B645B]">Calificaci&oacute;n</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Gallery */}
                <ProjectsGallery />

                {/* Testimonials */}
                <div className="bg-[#F5F1E8]">
                    <TestimonialsSection />
                </div>

                {/* Graduation / Certificate Section */}
                <section className="py-20 bg-[#FAF7EF]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="bg-[#F5F1E8] border border-[#1A1714]/12 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] mb-4 flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-[#C96342]" />
                                    Certificaci&oacute;n Internacional
                                </p>
                                <h2 className="font-display text-3xl md:text-4xl text-[#1A1714] mb-4">
                                    M&aacute;s que un curso, una credencial para su futuro
                                </h2>
                                <p className="text-[#3B3630] mb-6 text-lg">
                                    Al finalizar, tu hijo recibe su certificado oficial de InnovaKids, validando sus nuevas habilidades en Inteligencia Artificial Generativa.
                                </p>
                                <Link href="/#inversion">
                                    <Button className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] rounded-sm px-8 py-6 font-bold text-lg">
                                        Quiero que mi hijo se grad&uacute;e
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex-1 relative">
                                {/* Placeholder for certificate image */}
                                <div className="aspect-video bg-[#FAF7EF] rounded-sm border border-[#1A1714]/12 flex items-center justify-center relative overflow-hidden">
                                    <div className="text-center z-10">
                                        <Trophy className="w-16 h-16 text-[#C96342] mx-auto mb-4" />
                                        <p className="font-display text-2xl text-[#1A1714]">Certificado InnovaKids</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#1A1714] text-center">
                    <div className="max-w-[1100px] mx-auto max-w-3xl px-6 md:px-10">
                        <Users className="w-14 h-14 text-[#C96342] mx-auto mb-6" />
                        <h2 className="font-display text-4xl text-[#FAF7EF] mb-6">
                            &Uacute;nete a la nueva generaci&oacute;n de creadores
                        </h2>
                        <p className="text-xl text-[#FAF7EF]/60 mb-10">
                            No dejes que tu hijo sea solo un consumidor de tecnolog&iacute;a. Dale las herramientas para crearla.
                        </p>
                        <Link href="/#inversion">
                            <Button className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-12 py-8 rounded-sm text-xl font-bold transition-all">
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
