import { Button } from "@/components/ui/button"
import {
  Sparkles,
  ArrowRight,
  Users,
  Shield,
  Award,
  Video,
  GraduationCap,
  Zap,
  Clock,
} from "lucide-react"
import { HeroCountdown } from "@/components/hero-countdown"
import { HeroLiveCounter } from "@/components/hero-live-counter"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] noise-overlay py-24 sm:py-28 lg:py-32"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* ——————————————————————————————————————
              1. TRUST EYEBROW — Positioning
          —————————————————————————————————————— */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full holographic-card animate-fadeIn">
            <span className="text-xl" aria-hidden="true">🧠</span>
            <span className="text-xs sm:text-sm text-white font-bold tracking-wide relative z-10">
              La IA es el nuevo inglés · Hoy se aprende, mañana se exige
            </span>
          </div>

          {/* ——————————————————————————————————————
              2. MAIN HEADLINE (H1) — SEO-rich + Emotional Promise
              Keywords preservados: "Curso de Inteligencia Artificial para Niños y Adolescentes 8-17 años"
          —————————————————————————————————————— */}
          <h1
            className="mt-10 font-premium animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            {/* SEO anchor line — visible, keyword-loaded, crawler-friendly */}
            <span className="block text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] text-primary font-bold mb-6">
              Curso de Inteligencia Artificial para Niños y Adolescentes · 8–17 años
            </span>

            {/* Emotional promise — FEAR HOOK (soft) */}
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.02] tracking-tight">
              <span className="block text-white">Que tu hijo no</span>
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4dd0e1] via-[#8b5cf6] to-[#ec4899] pb-2"
                style={{ textShadow: "0 0 40px rgba(77, 208, 225, 0.25)" }}
              >
                se quede atrás
              </span>
              <span className="block text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">en la era de la IA</span>
            </span>
          </h1>

          {/* ——————————————————————————————————————
              4. PAIN → TRANSFORMATION BRIDGE
          —————————————————————————————————————— */}
          <p
            className="mt-10 text-xl sm:text-2xl md:text-3xl font-bold text-white/95 max-w-3xl leading-snug animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            La IA es el <span className="text-primary">inglés, internet y Excel de los 90s</span>.
            <br className="hidden sm:block" />
            <span className="text-white/70 font-semibold">
              Una habilidad básica que se aprende ahora para estudiar, crear y prosperar más adelante.
            </span>
          </p>

          {/* ——————————————————————————————————————
              5. VALUE SUBHEADLINE — What he will get
          —————————————————————————————————————— */}
          <p
            className="mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            En 5 semanas tu hijo deja de estar rezagado: usa IA para{" "}
            <span className="text-white font-semibold">estudiar mejor, sacar mejores notas y crear apps, juegos y proyectos reales</span>,{" "}
            en vivo con grupos de{" "}
            <span className="text-primary font-semibold">máximo 5 niños</span>.
          </p>

          {/* ——————————————————————————————————————
              6. KEY SPECS — Fact chips
          —————————————————————————————————————— */}
          <div
            className="mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Video, text: "10 clases en vivo" },
              { icon: Users, text: "Grupos de 5" },
              { icon: GraduationCap, text: "8–17 años" },
              { icon: Clock, text: "5 semanas" },
            ].map((spec, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/90 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-colors"
              >
                <spec.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                {spec.text}
              </span>
            ))}
          </div>

          {/* ——————————————————————————————————————
              7. AI TOOLS — "Se aprende con lo más avanzado"
          —————————————————————————————————————— */}
          <div
            className="mt-8 flex flex-col items-center gap-3 animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-500 font-medium">
              Enseñamos lo más avanzado en IA
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: "ChatGPT", emoji: "🤖" },
                { name: "Claude", emoji: "🧠" },
                { name: "Nano Banana", emoji: "🍌" },
                { name: "Suno AI", emoji: "🎵" },
                { name: "Canva AI", emoji: "🎨" },
              ].map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a1628]/80 border border-white/10 text-sm text-white/90 font-medium hover:border-primary/40 transition-colors"
                >
                  <span aria-hidden="true">{tool.emoji}</span>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          {/* ——————————————————————————————————————
              8. URGENCY RIBBON
          —————————————————————————————————————— */}
          <div
            className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <Zap className="w-4 h-4 text-green-400" aria-hidden="true" />
            <span className="text-sm font-bold text-green-400 tracking-wide">
              Cupos limitados · Empieza antes de que otros le tomen la delantera
            </span>
          </div>

          {/* ——————————————————————————————————————
              9. COUNTDOWN — Client Island
          —————————————————————————————————————— */}
          <div
            className="mt-8 w-full max-w-xl relative p-8 sm:p-10 rounded-3xl overflow-hidden holographic-card animate-fadeIn"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="relative z-10">
              <p className="text-gray-400 text-xs sm:text-sm mb-5 uppercase tracking-[0.25em] font-premium">
                El programa inicia en
              </p>

              <HeroCountdown />

              <p className="text-white font-semibold mt-6 text-base sm:text-lg font-premium">
                Próximo curso:{" "}
                <span className="text-primary">Semana del 27 de Abril del 2026</span>
              </p>
            </div>
          </div>

          {/* ——————————————————————————————————————
              10. CTA BUTTONS
          —————————————————————————————————————— */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center w-full animate-fadeIn"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              size="lg"
              className="magnetic-btn relative group bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:opacity-90 text-white px-10 sm:px-14 py-7 sm:py-8 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] overflow-hidden w-full sm:w-auto"
            >
              <a href="#sesion-estrategica">
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer" />
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                  AGENDAR CLASE GRATIS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-white/20 hover:border-primary/50 hover:bg-primary/5 text-white px-10 py-7 text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              <a href="#inversion">Ver Planes y Precios</a>
            </Button>
          </div>

          {/* Soft micro-copy under CTA */}
          <p
            className="mt-4 text-xs sm:text-sm text-gray-500 animate-fadeIn"
            style={{ animationDelay: "0.85s" }}
          >
            Sin compromiso · 30 min · 100% online
          </p>

          {/* ——————————————————————————————————————
              11. TRUST BADGES
          —————————————————————————————————————— */}
          <div
            className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm animate-fadeIn"
            style={{ animationDelay: "0.95s" }}
          >
            {[
              { icon: Users, text: "500+ graduados", highlight: true },
              { icon: Award, text: "4.9★ valoración", highlight: true },
              { icon: Shield, text: "Garantía 10 días" },
              { icon: Users, text: "Grupos de 5" },
            ].map((item, i) => (
              <span
                key={i}
                className={`flex items-center gap-2 ${
                  item.highlight ? "text-primary font-semibold" : "text-gray-400"
                } hover:text-primary transition-colors`}
              >
                <item.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                {item.text}
              </span>
            ))}
          </div>

          {/* ——————————————————————————————————————
              12. LIVE COUNTER
          —————————————————————————————————————— */}
          <div className="mt-10">
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
