"use client"

import { Check, X, ShieldAlert } from "lucide-react"
import { motion } from "framer-motion"

export function QualificationSection() {
    return (
        <section className="bg-[#030712] py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-6">
                        <ShieldAlert className="w-4 h-4" />
                        <span className="text-sm font-bold uppercase tracking-widest">Advertencia</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-premium italic">
                        ESTO NO ES <span className="text-primary italic">PARA TODOS</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        En InnovaKids no buscamos masividad, buscamos <span className="text-white font-bold">resultados reales</span>. Descalificamos agresivamente a quienes no están listos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* SI ES PARA TI */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10"
                    >
                        <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
                            <Check className="w-6 h-6" />
                            InnovaKids ES para ti si:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Tu hijo tiene entre 8 y 14 años y acceso a un computador.",
                                "Quieres que aprenda habilidades reales del futuro, no solo a jugar.",
                                "Estás dispuesto a invertir $267 USD en su futuro profesional.",
                                "Entiendes que el sistema educativo tradicional ya no es suficiente.",
                                "Valoras la atención personalizada sobre las clases masivas de 50 niños."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-300">
                                    <span className="text-green-400 font-bold shrink-0">✅</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* NO ES PARA TI */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10"
                    >
                        <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
                            <X className="w-6 h-6" />
                            InnovaKids NO es para ti si:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Buscas un \"niñero digital\" solo para entretenerlo un rato.",
                                "No puedes comprometerte a que asista a sus 2 clases por semana.",
                                "Prefieres opciones masivas y baratas donde el niño es solo un número.",
                                "Crees que la Inteligencia Artificial es \"una moda pasajera\".",
                                "Piensas que todavía es muy temprano para que aprenda tecnología real."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-300">
                                    <span className="text-red-500 font-bold shrink-0">❌</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
