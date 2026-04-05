import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Play, Users, Shield, Award } from "lucide-react"
import { HeroCountdown } from "@/components/hero-countdown"
import { HeroLiveCounter } from "@/components/hero-live-counter"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] noise-overlay"
    >
      {/* Aurora Animated Background - Hidden on mobile for performance */}
      <div className="absolute inset-0 aurora-bg hidden sm:block" />
      {/* Mobile Static Gradient Replacement */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f3a] via-[#030712] to-[#030712] sm:hidden" />

      {/* Mesh Gradient Orbs - Static for performance */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(77, 208, 225, 0.4) 0%, transparent 70%)",
          top: "-20%",
          left: "10%",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          bottom: "-10%",
          right: "5%",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          top: "40%",
          right: "30%",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(77, 208, 225, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 208, 225, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center space-y-8 sm:space-y-10 max-w-5xl mx-auto">

          {/* #1 Badge - Holographic - Static entrance */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full holographic-card mt-12 md:mt-20 animate-fadeIn"
          >
            <span className="text-2xl">🏆</span>
            <span className="text-sm sm:text-base text-white font-bold relative z-10">
              #1 en Latinoamérica y España
            </span>
          </div>

          {/* Main Headline - Static for Instant LCP */}
          <div className="relative">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight font-premium px-2">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4dd0e1] to-[#8b5cf6] mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ textShadow: "0 0 30px rgba(77, 208, 225, 0.3)" }}
              >
                InnovaKids — Tu Hijo Aprende a Crear con Inteligencia Artificial
              </span>
              <span className="block text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Tu hijo pierde horas en pantallas.
                <br />
                <span className="text-white/80">Cámbiale el futuro hoy.</span>
              </span>
            </h1>

            <p
              className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              En 5 semanas pasará de consumidor pasivo a <span className="text-primary">Creador de Tecnología.</span>
            </p>

            <div
              className="absolute -inset-x-20 -inset-y-10 -z-10 opacity-50 blur-3xl"
              style={{
                background: "radial-gradient(ellipse at center, rgba(77, 208, 225, 0.2) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-white font-semibold">10 clases en vivo</span> • Grupos de solo <span className="text-primary font-semibold">5 niños</span>
            <br className="hidden sm:block" />
            Crea <span className="text-white">apps, juegos y startups reales</span> con ChatGPT, Midjourney y más.
            <br />
            Para niños de <span className="text-primary font-semibold">8-17 años</span> • <span className="text-green-400 font-bold">$297 USD</span>
          </p>

          {/* Countdown Timer - Client Island */}
          <div
            className="relative p-8 rounded-3xl overflow-hidden holographic-card animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative z-10">
              <p className="text-gray-400 text-sm sm:text-base mb-4 uppercase tracking-[0.2em] font-premium">
                El programa inicia en
              </p>

              <HeroCountdown />

              <p className="text-white font-semibold mt-6 text-lg font-premium">
                Próximo curso: <span className="text-primary">Semana del 27 de Abril del 2026</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons - Using native anchors for Navigation */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              size="lg"
              className="magnetic-btn relative group bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:opacity-90 text-white px-8 sm:px-12 py-6 sm:py-7 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] overflow-hidden"
            >
              <a href="#sesion-estrategica">
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer"
                />
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  AGENDAR CLASE GRATIS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-white/20 hover:border-primary/50 hover:bg-primary/5 text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <a href="#inversion">
                Ver Planes y Precios
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div
            className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-gray-400 animate-fadeIn"
            style={{ animationDelay: "1s" }}
          >
            {[
              { icon: Users, text: "500+ graduados", highlight: true },
              { icon: Award, text: "4.9★ valoración", highlight: true },
              { icon: Shield, text: "Garantía 10 días" },
              { icon: Users, text: "Grupos de 5" },
            ].map((item, i) => (
              <span
                key={i}
                className={`flex items-center gap-2 ${item.highlight ? 'text-primary font-semibold' : ''} hover:text-primary transition-colors`}
              >
                <item.icon className="w-4 h-4 text-primary" />
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

export default HeroSection
