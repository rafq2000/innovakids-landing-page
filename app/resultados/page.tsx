import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProjectsGallery } from "@/components/projects-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Resultados y Testimonios | Proyectos Reales de Alumnos | InnovaKids",
    description:
        "Mira lo que crean niños de 8-14 años con IA en InnovaKids. Videojuegos, arte, música y apps. Testimonios reales de padres en 9 países.",
    alternates: {
        canonical: "https://www.innovakidslatam.com/resultados",
    },
}

export default function ResultsPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-background">
                {/* Compact Hero */}
                <section className="pt-32 pb-16 bg-[#1A1A2E] text-center px-4">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Lo que crean los niños. <br />
                            <span className="text-gray-400">Lo que dicen los padres.</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            Resultados reales de familias en 9 países. No promesas — proyectos terminados.
                        </p>
                        <div className="flex justify-center gap-4 text-sm text-gray-400">
                            <span>527+ graduados</span>
                            <span>•</span>
                            <span>9 países</span>
                            <span>•</span>
                            <span>4.9★ valoración</span>
                        </div>
                    </div>
                </section>

                {/* Project Gallery - The most important section */}
                <ProjectsGallery />

                {/* Testimonials */}
                <TestimonialsSection />

                {/* Stats */}
                <StatsSection />

                {/* Map Section placeholder - can be image */}
                <section className="py-20 bg-[#F8F9FA] text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-[#2D3436] mb-8">Familias en 9 países confían en InnovaKids</h2>
                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-gray-500 mb-6">Estudiantes activos en:</p>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg font-medium text-[#2D3436]">
                                <span className="flex items-center gap-2">🇨🇱 Chile</span>
                                <span className="flex items-center gap-2">🇲🇽 México</span>
                                <span className="flex items-center gap-2">🇨🇴 Colombia</span>
                                <span className="flex items-center gap-2">🇦🇷 Argentina</span>
                                <span className="flex items-center gap-2">🇵🇪 Perú</span>
                                <span className="flex items-center gap-2">🇪🇸 España</span>
                                <span className="flex items-center gap-2">🇪🇨 Ecuador</span>
                                <span className="flex items-center gap-2">🇺🇾 Uruguay</span>
                                <span className="flex items-center gap-2">🇨🇷 Costa Rica</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-[#1A1A2E] text-center px-4">
                    <div className="container mx-auto max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Quieres que tu hijo sea el siguiente?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Reserva con $27. Prueba 2 clases. Si no te convence, no pagas nada más.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="#inversion">
                                <Button className="bg-[#FF6B35] hover:bg-[#ff8659] text-white px-8 py-6 rounded-full text-lg font-bold w-full sm:w-auto">
                                    Reservar cupo por $27 <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="https://wa.me/56964754219">
                                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg font-bold w-full sm:w-auto">
                                    Hablar por WhatsApp
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
