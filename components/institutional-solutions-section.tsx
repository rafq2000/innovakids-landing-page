import { Building2, Landmark, HeartHandshake, GraduationCap, CheckCircle2 } from "lucide-react"

export function InstitutionalSolutionsSection() {
    const segments = [
        {
            icon: <Landmark className="w-8 h-8 md:w-10 md:h-10 text-white mb-4" />,
            title: "Municipios y Gobiernos",
            benefit: "Digitaliza la educación de tu comunidad con programas de IA certificados y medibles.",
        },
        {
            icon: <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 text-white mb-4" />,
            title: "Fundaciones y ONGs",
            benefit: "Amplía el impacto de tus programas sociales con tecnología educativa de vanguardia.",
        },
        {
            icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white mb-4" />,
            title: "Empresas / RSE",
            benefit: "Vincula tu marca con el futuro mediante programas de IA para niños en tu comunidad.",
        },
        {
            icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white mb-4" />,
            title: "Colegios e Instituciones",
            benefit: "Integra la IA al currículo con un programa llave en mano, sin necesidad de docentes especializados.",
        },
    ]

    const includedItems = [
        "Currículo estructurado por niveles (8–17 años)",
        "Plataforma y herramientas 100% online",
        "Instructores especializados en IA educativa",
        "Reportes de avance para la institución",
        "Adaptación al contexto social y cultural del grupo",
    ]

    return (
        <section className="py-24 bg-[#0a0f1a] text-zinc-100 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk tracking-tight mb-6">
                        Llevamos la educación en IA a tu organización
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 font-poppins">
                        Diseñamos e implementamos programas de inteligencia artificial para niños y jóvenes adaptados al contexto y misión de tu institución — en formato virtual, presencial o híbrido.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {segments.map((segment, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors"
                        >
                            {segment.icon}
                            <h3 className="text-xl font-bold mb-3 text-white font-space-grotesk">{segment.title}</h3>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                {segment.benefit}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border border-indigo-500/20 rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-space-grotesk">
                                ¿Qué incluye el programa institucional?
                            </h3>
                            <ul className="space-y-4">
                                {includedItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-auto text-center md:text-left">
                            <a
                                href="https://wa.me/56964754219?text=Hola,%20me%20interesa%20solicitar%20una%20propuesta%20institucional%20para%20llevar%20InnovaKids%20a%20mi%20organización."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-white text-indigo-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors w-full md:w-auto shadow-lg shadow-white/10"
                            >
                                Solicitar propuesta institucional
                            </a>
                            <p className="text-zinc-500 text-sm mt-4 italic">
                                Sin compromiso · Respuesta en menos de 24 horas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
