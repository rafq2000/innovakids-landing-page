import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProgramSection } from "@/components/program-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { WhatIsInnovakids as InstructorSection } from "@/components/what-is-innovakids" // Using WhatIs as Instructor/About
import { Button } from "@/components/ui/button"
import { ArrowRight, Laptop, Wifi, Sparkles } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Programa del Curso de IA para Niños | 10 Clases en Vivo | InnovaKids",
    description:
        "Conoce las 10 clases del programa InnovaKids. Tu hijo creará arte con IA, música, videojuegos, voz clonada y más. Grupos de 5 niños. Reserva con $27 USD.",
    alternates: {
        canonical: "https://www.innovakidslatam.com/programa",
    },
}

export default function ProgramPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-background">
                {/* Compact Hero */}
                <section className="pt-32 pb-16 bg-[#1A1A2E] text-center px-4">
                    <div className="container mx-auto max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-[#4ECDC4]/10 border border-[#4ECDC4]/20 rounded-full px-4 py-1 mb-6">
                            <span className="text-[#4ECDC4] text-sm font-bold">Módulo 1: Vibe Explorer · 10 clases · 5 semanas</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Esto es exactamente lo que tu hijo <br />
                            <span className="text-[#FF6B35]">va a crear en 5 semanas</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Cada clase termina con un proyecto real que puede mostrar con orgullo. Sin teoría aburrida, sin tareas, sin exámenes. Solo crear.
                        </p>
                        <div className="flex justify-center gap-4 text-sm text-gray-400">
                            <span>60 min por clase</span>
                            <span>•</span>
                            <span>2 clases por semana</span>
                            <span>•</span>
                            <span>Grupos de 5 niños</span>
                        </div>
                    </div>
                </section>

                {/* Program Detail */}
                <ProgramSection />

                {/* Requirements Section */}
                <section className="py-20 bg-[#F8F9FA]">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-[#2D3436] mb-12">¿Qué necesita tu hijo para empezar?</h2>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            <div className="flex flex-col items-center max-w-[200px]">
                                <Laptop className="w-12 h-12 text-[#4ECDC4] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Un computador</h3>
                                <p className="text-gray-500 text-sm">No necesita ser potente. Cualquier laptop o PC sirve.</p>
                            </div>
                            <div className="flex flex-col items-center max-w-[200px]">
                                <Wifi className="w-12 h-12 text-[#4ECDC4] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Internet estable</h3>
                                <p className="text-gray-500 text-sm">Suficiente para una videollamada de Zoom.</p>
                            </div>
                            <div className="flex flex-col items-center max-w-[200px]">
                                <Sparkles className="w-12 h-12 text-[#4ECDC4] mb-4" />
                                <h3 className="font-bold text-lg mb-2">Ganas de crear</h3>
                                <p className="text-gray-500 text-sm">Cero experiencia previa necesaria. Partimos de cero.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Instructor Section reused */}
                <InstructorSection />

                {/* Pricing */}
                <PricingSection />

                {/* FAQ - Specific for Program could be filtered here but reusing generic for now as it covers most */}
                <FAQSection />

                {/* CTA */}
                <section className="py-20 bg-[#1A1A2E] text-center px-4">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold text-white mb-4">¿Quieres que tu hijo sea el siguiente?</h2>
                        <p className="text-gray-300 mb-8">Reserva con $27. Prueba 2 clases. Si no te convence, no pagas nada más.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="#inversion">
                                <Button className="bg-[#FF6B35] hover:bg-[#ff8659] text-white px-8 py-6 rounded-full text-lg font-bold">
                                    Reservar cupo por $27 <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
