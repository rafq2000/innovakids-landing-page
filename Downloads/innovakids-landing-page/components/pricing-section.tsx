"use client"

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Star, Zap, Crown } from "lucide-react"
import Link from "next/link"
import type { CountryConfig } from "@/lib/countries-config"

interface PricingSectionProps {
  country?: CountryConfig
}

export function PricingSection({ country }: PricingSectionProps) {
  // Helper to format currency
  const formatPrice = (amount: number) => {
    if (!country) return `$${amount}`
    if (country.currency === 'USD' || country.currency === 'EUR') return `${country.currencySymbol}${amount}`
    // For LATAM currencies, approximate conversion for display
    const exchangeRate = country.priceLocal / 267 // derived rate from base price
    const localVal = Math.round(amount * exchangeRate / 100) * 100
    return `${country.currencySymbol}${localVal.toLocaleString()}`
  }

  const currencyCode = country ? country.currency : "USD"

  // Base prices in USD
  const pricingTiers = [
    {
      name: "Starter",
      priceUSD: 147,
      description: "Prueba el programa. Descubre si tu hijo califica.",
      originalPriceUSD: 197,
      icon: Star,
      color: "from-green-400 to-emerald-400",
      features: [
        "4 Clases de Fundamentos IA",
        "Prueba el método sin compromiso",
        "Acceso a Discord Community",
        "😱 Solo válido hasta agotar cupos",
        `Crédito completo hacia Explorer (${formatPrice(147)})`,
      ],
      cta: `Empezar por ${formatPrice(147)}`,
      link: "/pagar?option=starter",
      popular: false,
      badge: "🔥 Entrada Perfecta",
    },
    {
      name: "Vibe Explorer",
      priceUSD: 267,
      description: "El punto de partida completo para todo creador digital.",
      icon: Sparkles,
      color: "from-yellow-400 to-orange-400",
      features: [
        "Módulo 1: Fundamentos IA (10 Clases)",
        "Certificado 'Explorer' Digital",
        "Acceso a 15+ herramientas IA",
        "Soporte 24/7 por Discord + WhatsApp",
        "Boletín semanal de novedades IA 😱",
      ],
      cta: "Comenzar Ahora",
      link: "/pagar?option=explorer",
      popular: true,
      badge: "⭐ Más Popular",
    },
    {
      name: "Start Pack",
      priceUSD: 534,
      description: "Explorer + 1 Especialidad a tu elección.",
      icon: Zap,
      color: "from-cyan-400 to-blue-400",
      features: [
        "Todo lo de Explorer",
        "1 Especialidad (Coding o Business)",
        "Total 20 Clases Maestras",
        "Ahorros por Pack incluido",
      ],
      cta: "Elegir Pack",
      link: "/pagar?option=start_pack",
      popular: false,
    },
    {
      name: "Academy University",
      priceUSD: 1068,
      description: "La experiencia completa. Transforma el futuro de tu hijo.",
      originalPriceUSD: 1497,
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      features: [
        "Acceso Total a los 4 Módulos (40 Clases)",
        "🚀 Incubadora de Startups incluida",
        "Certificación Master Completa",
        "Crédito: Abona tus $267 si ya eres Explorer",
        "😱 Ahorras +$400 USD (Mejor Oferta)",
      ],
      cta: "Inscripción VIP",
      link: "/pagar?option=university",
      popular: false,
      badge: "👑 Transformación Total",
    },
  ]

  return (
    <section id="inversion" className="bg-[#0a1628] py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-1">
            Planes de Acceso 2026
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Invierte en su <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Futuro</span>
          </h2>
          <p className="text-xl text-gray-400">
            Elige el nivel de profundidad que deseas. Desde explorador hasta líder tecnológico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-[#0f1f3a] border-white/10 flex flex-col ${tier.popular ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105 z-10' : 'hover:border-white/20 transition-colors'}`}
            >
              {tier.badge && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-1 uppercase tracking-wide border-0">
                    {tier.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="p-6 md:p-8 pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tier.color} p-2.5 mb-4 flex items-center justify-center`}>
                  <tier.icon className="text-white h-full w-full" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm h-10">{tier.description}</p>
              </CardHeader>

              <CardContent className="p-6 md:p-8 pt-0 flex-1">
                <div className="mb-6">
                  {tier.originalPriceUSD && (
                    <span className="text-gray-500 line-through text-sm font-medium mr-2">
                      {formatPrice(tier.originalPriceUSD)}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{formatPrice(tier.priceUSD)}</span>
                    <span className="text-gray-400">{currencyCode}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center shrink-0 bg-white/5`}>
                        <Check className={`h-3 w-3 text-white`} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 md:p-8 pt-0">
                <Button
                  asChild
                  size="lg"
                  className={`w-full font-bold h-12 text-base ${tier.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                >
                  <Link href={tier.link}>
                    {tier.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-white/5 rounded-2xl border border-white/10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-bold">Garantía Vibe 100%</span>
          </div>
          <p className="text-gray-400 text-sm">
            Prueba el Módulo 1 sin riesgo. Si en 10 días no estás impresionado, te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </section>
  )
}
