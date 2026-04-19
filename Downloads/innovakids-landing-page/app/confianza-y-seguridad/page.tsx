import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, CheckCircle, Video, Server } from "lucide-react"

export const metadata: Metadata = {
  // 57 chars · keyword-first · brand last
  title: "Confianza y Seguridad Infantil · IA Segura | InnovaKids",
  // 152 chars · proof + differentiator + CTA
  description:
    "Aulas 100% monitoreadas, docentes certificados y entornos virtuales seguros para niños 8-17 años. Política de protección al menor. Reserva tu clase gratis.",
  keywords: [
    "confianza seguridad innovakids",
    "proteccion menor ia",
    "curso ia niños seguro",
    "seguridad infantil clases online",
    "aulas monitoreadas niños",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/confianza-y-seguridad",
  },
  openGraph: {
    title: "Confianza y Seguridad Infantil · InnovaKids LATAM",
    description:
      "Compromiso absoluto con la seguridad infantil: aulas monitoreadas, docentes certificados y entornos virtuales seguros. Conoce nuestras políticas.",
    url: "https://www.innovakidslatam.com/confianza-y-seguridad",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Confianza y seguridad infantil en cursos online de IA - InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Confianza y Seguridad Infantil · IA Segura | InnovaKids",
    description:
      "Aulas monitoreadas, docentes certificados y entornos virtuales seguros para niños 8-17 años.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navigation />
      
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#0a1628] to-[#1a2f4c] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 relative">
            <div className="absolute inset-0 bg-[#4DD0E1] blur-xl opacity-50 rounded-full"></div>
            <Shield className="w-12 h-12 text-[#4DD0E1] relative z-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Compromiso Absoluto con la <span className="text-[#4DD0E1] drop-shadow-lg">Seguridad Infantil</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nuestra prioridad número uno es garantizar un entorno digital 100% seguro, auditado e inspirador para todos nuestros alumnos.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 hover:border-[#4DD0E1]/30 transition-all group">
            <div className="w-14 h-14 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <Video className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1628] mb-4">Aulas Monitoreadas en Vivo</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Todas nuestras sesiones vía Meet/Zoom son monitoreadas por nuestro equipo académico. Implementamos políticas de "Cero Tolerancia" al bullying y al comportamiento inadecuado. 
            </p>
            <ul className="space-y-3">
              {["Chats filtrados por moderadores", "Bloqueo de pantalla compartida no autorizada", "Reporte inmediato de incidencias a padres"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 hover:border-[#4DD0E1]/30 transition-all group">
            <div className="w-14 h-14 bg-[#FFF1F2] rounded-2xl flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1628] mb-4">Docentes Investigados (Background Checks)</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Cada facilitador de InnovaKids pasa por un riguroso proceso de selección que incluye validación de antecedentes penales, pruebas psicológicas y entrevistas focalizadas en docencia infantil.
            </p>
            <ul className="space-y-3">
              {["Validación de antecedentes locales e internacionales", "Certificación en metodologías infantiles", "Monitoreo de calidad (NPS Estudiantil)"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 hover:border-[#4DD0E1]/30 transition-all group">
            <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1628] mb-4">Protección de Datos Personales (COPPA Compliant)</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Cumplimos con las regulaciones internacionales más estrictas sobre la recopilación de datos de menores. No vendemos, no prestamos y no cedemos información de nuestros alumnos a terceros.
            </p>
            <ul className="space-y-3">
              {["Correos y números encriptados", "Consentimiento explícito parental", "Sin publicidad dentro de las plataformas de estudio"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 hover:border-[#4DD0E1]/30 transition-all group">
            <div className="w-14 h-14 bg-[#FEF3C7] rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform">
              <Server className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1628] mb-4">Entornos IA Cerrados (Walled Gardens)</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Las herramientas de inteligencia artificial que utilizamos están configuradas en modalidad educativa. Los Prompts (instrucciones) están limitados para evitar que la IA genere contenido inapropiado o violento.
            </p>
            <ul className="space-y-3">
              {["Filtros de contenido NSFW estrictos", "Suscripciones administradas por el cuerpo docente", "Revisión de proyectos antes de exposición pública"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
