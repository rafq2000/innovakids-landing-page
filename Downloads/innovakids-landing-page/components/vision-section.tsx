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
                            LA IA YA NO ES EL FUTURO. <br />
                            ES <span className="text-primary italic">LA NUEVA BASE</span> PARA ESTUDIAR Y APRENDER.
                        </h2>
                        <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
                            <p>
                                La IA es el <span className="text-white font-bold">inglés, internet y Excel de los 90s</span>: una habilidad básica que ya empieza a marcar diferencias en el colegio, la universidad y el día a día.
                            </p>
                            <p>
                                Igual que aprender inglés o usar internet a tiempo abrió puertas en los 90, <span className="text-white font-bold">aprender IA hoy abre puertas mañana</span>. Y quienes empiezan antes, avanzan más rápido.
                            </p>
                            <p>
                                El colegio aún no la enseña. Por eso estamos aquí: para que tu hijo tenga esa base a tiempo y <span className="text-white font-bold">llegue preparado al próximo año escolar, a la universidad y a la vida laboral.</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                icon: Rocket,
                                title: "Colegio",
                                desc: "Usa IA para entender materias, resumir y estudiar mejor."
                            },
                            {
                                icon: Brain,
                                title: "Universidad",
                                desc: "Llega con años de ventaja y claridad sobre su carrera."
                            },
                            {
                                icon: Users,
                                title: "Trabajo",
                                desc: "85% de los empleos 2035 usarán IA. Llega preparado."
                            },
                            {
                                icon: Globe,
                                title: "Vida diaria",
                                desc: "La IA ya es parte del día a día. Mejor aprenderla a tiempo."
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
                        "Nuestra misión es simple: darle a tu hijo la base en IA <span className="text-primary">para que no se quede atrás</span> cuando el mundo ya la esté dando por obvia."
                    </p>
                </div>
            </div>
        </section>
    )
}
