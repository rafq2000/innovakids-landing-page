"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
    CheckCircle2,
    Video,
    Users,
    MessageCircle,
    Award,
    BookOpen,
    Headphones,
    FileVideo,
    Palette,
    Shield,
    Gift,
    Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"
import type { CountryConfig } from "@/lib/countries-config"

interface ValueStackSectionProps {
    country?: CountryConfig
}

const included = [
    {
        icon: Video,
        title: "10 Clases en Vivo",
        desc: "60 minutos cada una con instructor experto",
        valueUSD: 297,
    },
    {
        icon: Users,
        title: "Grupos de Máximo 5 Niños",
        desc: "Atención 100% personalizada para tu hijo",
        valueUSD: 97,
    },
    {
        icon: FileVideo,
        title: "Grabaciones de Todas las Clases",
        desc: "Acceso ilimitado para repasar cuando quiera",
        valueUSD: 47,
    },
    {
        icon: Palette,
        title: "Acceso a 15+ Herramientas de IA",
        desc: "ChatGPT, Midjourney, ElevenLabs, Runway y más",
        valueUSD: 97,
    },
    {
        icon: BookOpen,
        title: "Material Descargable",
        desc: "Guías, plantillas y recursos exclusivos",
        valueUSD: 47,
    },
    {
        icon: MessageCircle,
        title: "Comunidad Privada Discord",
        desc: "Conexión con otros alumnos y mentores",
        valueUSD: 27,
    },
    {
        icon: Headphones,
        title: "Soporte WhatsApp 24/7",
        desc: "Respuestas en menos de 2 horas",
        valueUSD: 47,
    },
    {
        icon: Award,
        title: "Certificado Digital",
        desc: "Reconocimiento oficial de InnovaKids",
        valueUSD: 27,
    },
    {
        icon: Zap,
        title: "Portfolio de Proyectos",
        desc: "5+ proyectos reales para mostrar",
        valueUSD: 67,
    },
    {
        icon: Gift,
        title: "BONUS: Clase de Seguridad Digital",
        desc: "Protección contra deepfakes y estafas",
        valueUSD: 25,
    },
]

export function ValueStackSection({ country }: ValueStackSectionProps) {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    // Helper to format currency
    const formatCurrency = (amount: number) => {
        if (!country) return `$${amount} USD`
        if (country.currency === 'USD' || country.currency === 'EUR') return `${country.currencySymbol}${amount} ${country.currency}`
        // For LATAM currencies, we approximate the "Value" visually
        // 1 USD approx conversion for display value (not exact exchange, just anchor)
        const exchangeRate = country.priceLocal / 267 // derived rate
        const localVal = Math.round(amount * exchangeRate / 100) * 100 // round to nearest 100
        return `${country.currencySymbol}${localVal.toLocaleString()}`
    }

    const totalValueUSD = included.reduce((acc, item) => acc + item.valueUSD, 0)
    const totalValueDisplay = formatCurrency(totalValueUSD)

    // The actual price to pay
    const actualPriceDisplay = country ? country.priceDisplay : "$267 USD"
    const savingsDisplay = country
        ? formatCurrency(totalValueUSD - (country.priceUSD)) // rough savings calc
        : `$${totalValueUSD - 267} USD`

    return (
        <section ref={sectionRef} className="relative bg-[#0a1628] py-24 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <Award className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-300 font-medium text-sm">Todo incluido en tu inscripción</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        No es solo un curso. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Es un ecosistema de aprendizaje.
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Hemos diseñado cada detalle para garantizar que tu hijo no solo aprenda, sino que se transforme en un creador digital seguro y capaz.
                    </p>
                </motion.div>

                {/* Value items grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {included.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group backdrop-blur-sm"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-8 h-8 text-purple-400 group-hover:text-pink-400 transition-colors" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between gap-4 mb-1">
                                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="text-slate-500 text-sm font-mono bg-black/20 px-2 py-1 rounded">
                                        Valor: {formatCurrency(item.valueUSD)}
                                    </span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Total value box */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative rounded-3xl bg-gradient-to-b from-[#1a2942] to-[#0f192b] border border-white/10 p-8 md:p-12 text-center overflow-hidden shadow-2xl">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-50" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8">
                            <div className="text-center md:text-right">
                                <p className="text-slate-400 mb-1 text-lg">Valor Real Total</p>
                                <p className="text-3xl md:text-4xl text-slate-500 line-through decoration-red-500 decoration-2 font-bold opacity-70">
                                    {totalValueDisplay}
                                </p>
                            </div>
                            <div className="w-px h-16 bg-white/10 hidden md:block" />
                            <div className="text-center md:text-left">
                                <p className="text-purple-400 mb-1 text-lg font-medium">Tu Inversión Hoy</p>
                                <p className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
                                    {actualPriceDisplay}
                                </p>
                            </div>
                        </div>

                        <div className="inline-block bg-green-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-10">
                            <p className="text-green-400 font-bold">
                                Ahorras más del 80% ({savingsDisplay})
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <Button
                                size="lg"
                                asChild
                                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-8 text-xl font-bold rounded-full shadow-xl hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1"
                            >
                                <Link href="#inversion">
                                    Reservar Cupo Ahora
                                    <Zap className="ml-2 w-6 h-6 fill-current" />
                                </Link>
                            </Button>

                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Shield className="w-4 h-4 text-purple-400" />
                                <span>Garantía de Satisfacción 10 Días o Devolvemos tu Dinero</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
