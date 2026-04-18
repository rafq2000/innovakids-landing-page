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
                            MIENTRAS TÚ LEES ESTO, <br />
                            OTROS NIÑOS <span className="text-red-400 italic">YA VAN ADELANTE</span> DEL TUYO
                        </h2>
                        <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
                            <p>
                                La IA no es "algo del futuro". Es el <span className="text-white font-bold">inglés, internet y Excel de los 90s</span>: una habilidad básica que YA se exige en el colegio, la universidad y la vida diaria.
                            </p>
                            <p>
                                Los padres que en 1995 no enseñaron inglés o internet a sus hijos los condenaron a competir en desventaja toda la vida. <span className="text-white font-bold">Hoy pasa lo mismo con la IA</span>, solo que 10 veces más rápido.
                            </p>
                            <p>
                                El colegio no les está enseñando. Si tu hijo no aprende IA ahora, <span className="text-red-400 font-bold">arranca el próximo año escolar, la universidad y su vida laboral atrasado.</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                icon: Rocket,
                                title: "Colegio",
                                desc: "Usa IA para entender materias, resumir, estudiar y subir sus notas."
                            },
                            {
                                icon: Brain,
                                title: "Universidad",
                                desc: "Llega con 10 años de ventaja sobre quienes empiecen recién a los 20."
                            },
                            {
                                icon: Users,
                                title: "Trabajo",
                                desc: "El 85% de los empleos del 2035 exigen IA. Sin ella, queda fuera."
                            },
                            {
                                icon: Globe,
                                title: "Vida diaria",
                                desc: "La IA ya es el inglés/internet del siglo XXI. Habilidad básica, no opcional."
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
                        "No estamos aquí para dar clases bonitas. Estamos aquí para asegurarnos de que tu hijo <span className="text-primary">NO se quede atrás</span> mientras el mundo avanza sin él."
                    </p>
                </div>
            </div>
        </section>
    )
}
