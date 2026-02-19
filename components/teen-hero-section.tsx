import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Play, Users, Shield, Award, Code, GraduationCap } from "lucide-react"
import { HeroCountdown } from "@/components/hero-countdown"
import { HeroLiveCounter } from "@/components/hero-live-counter"

export function TeenHeroSection() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] noise-overlay"
        >
            {/* Aurora Animated Background - Hidden on mobile for performance */}
            <div className="absolute inset-0 aurora-bg hidden sm:block" />
            {/* Mobile Static Gradient Replacement */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a103c] via-[#030712] to-[#030712] sm:hidden" />

            {/* Mesh Gradient Orbs - Adjusted for Teen Vibe (Purple/Blue) */}
            <div
                className="absolute w-[800px] h-[800px] rounded-full opacity-30"
                style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
                    top: "-20%",
                    left: "10%",
                }}
            />
            <div
                className="absolute w-[600px] h-[600px] rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
                    bottom: "-10%",
                    right: "5%",
                }}
            />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                    maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="text-center space-y-8 sm:space-y-10 max-w-5xl mx-auto">

                    {/* #1 Badge - Holographic */}
                    <div
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full holographic-card mt-12 md:mt-20 animate-fadeIn"
                    >
                        <span className="text-2xl">🚀</span>
                        <span className="text-sm sm:text-base text-white font-bold relative z-10">
                            Programa de Aceleración Tecnológica 14-17 Años
                        </span>
                    </div>

                    {/* Main Headline */}
                    <div className="relative">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight font-premium px-2">
                            <span className="block text-white">Domina la IA antes de</span>
                            <span className="block text-white">entrar a la Universidad.</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]"
                                style={{ textShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
                            >
                                Crea tu Futuro.
                            </span>
                        </h1>

                        <p
                            className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 animate-fadeIn"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Aprende <span className="text-purple-400">Vibe Coding</span>, crea Apps Reales y construye un Portafolio de élite.
                        </p>

                        <div
                            className="absolute -inset-x-20 -inset-y-10 -z-10 opacity-50 blur-3xl"
                            style={{
                                background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
                            }}
                        />
                    </div>

                    {/* Subtitle */}
                    <p
                        className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto animate-fadeIn"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <span className="text-white font-semibold">10 sesiones intensivas</span> en vivo •
                        De <span className="text-purple-400 font-semibold">14 a 17 años</span>
                        <br className="hidden sm:block" />
                        No necesitas experiencia previa. Solo ganas de programar el futuro.
                        <br />
                        Certificado con valor curricular • <span className="text-green-400 font-bold">$267 USD</span>
                    </p>

                    {/* Countdown Timer */}
                    <div
                        className="relative p-8 rounded-3xl overflow-hidden holographic-card animate-fadeIn"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <div className="relative z-10">
                            <p className="text-gray-400 text-sm sm:text-base mb-4 uppercase tracking-[0.2em] font-premium">
                                El batch inicia en
                            </p>

                            <HeroCountdown />

                            <p className="text-white font-semibold mt-6 text-lg font-premium">
                                Cierre de inscripciones: <span className="text-purple-400">Semana del 9 de Marzo</span>
                            </p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn"
                        style={{ animationDelay: "0.8s" }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="magnetic-btn relative group bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 hover:opacity-90 text-white px-8 sm:px-12 py-6 sm:py-7 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] overflow-hidden"
                        >
                            <a href="#sesion-estrategica">
                                <span
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer"
                                />
                                <span className="relative flex items-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    APLICA A UNA BECA
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="group border-white/20 hover:border-purple-500/50 hover:bg-purple-500/10 text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
                        >
                            <a href="#inversion">
                                Ver Programa y Precios
                            </a>
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div
                        className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-400 animate-fadeIn"
                        style={{ animationDelay: "1s" }}
                    >
                        {[
                            { icon: GraduationCap, text: "Preparación Pre-U", highlight: true },
                            { icon: Code, text: "Python & React", highlight: true },
                            { icon: Shield, text: "Certificado LinkedIn" },
                            { icon: Users, text: "Networking Joven" },
                        ].map((item, i) => (
                            <span
                                key={i}
                                className={`flex items-center gap-2 ${item.highlight ? 'text-purple-400 font-semibold' : ''} hover:text-purple-400 transition-colors`}
                            >
                                <item.icon className="w-4 h-4 text-purple-400" />
                                {item.text}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <HeroLiveCounter />
                    </div>

                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                    background: "linear-gradient(to top, #030712, transparent)",
                }}
            />
        </section>
    )
}
