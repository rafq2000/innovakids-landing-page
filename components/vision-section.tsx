"use client"

import { Rocket, Globe, Users, Brain } from "lucide-react"
import { motion } from "framer-motion"

export function VisionSection() {
    return (
        <section className="py-20 md:py-32 relative bg-[#030712] overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-premium leading-tight">
                            NUESTRA MISIÓN ES <br />
                            <span className="text-primary italic">EL PUENTE</span> QUE EL COLEGIO COLEGIO NO PUEDE CONSTRUIR
                        </h2>
                        <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
                            <p>
                                El sistema educativo está roto. En Latinoamérica, nuestros niños están siendo entrenados para trabajos que, para cuando se gradúen, <span className="text-white font-bold">ya no existirán.</span>
                            </p>
                            <p>
                                Nuestra visión es desbloquear el potencial tecnológico de cada rincón de nuestra región, transformando a niños que consumen pantallas en <span className="text-white font-bold">arquitectos de la Inteligencia Artificial.</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                icon: Rocket,
                                title: "Latinoamérica",
                                desc: "Exportando creadores de tecnología al mundo."
                            },
                            {
                                icon: Brain,
                                title: "Mentalidad",
                                desc: "No enseñamos código, enseñamos a pensar con IA."
                            },
                            {
                                icon: Users,
                                title: "Comunidad",
                                desc: "La red más grande de niños genios digitales."
                            },
                            {
                                icon: Globe,
                                title: "Impacto",
                                desc: "Cerrando la brecha tecnológica hoy."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                            >
                                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 p-8 md:p-12 rounded-[32px] bg-gradient-to-r from-primary/10 to-purple-500/10 border border-white/10 text-center max-w-4xl mx-auto">
                    <p className="text-2xl md:text-3xl font-medium text-white italic">
                        "No estamos aquí para dar clases. Estamos aquí para asegurarnos de que el talento latinoamericano <span className="text-primary">gane la carrera</span> tecnológica."
                    </p>
                </div>
            </div>
        </section>
    )
}
