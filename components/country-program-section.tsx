import { CheckCircle } from "lucide-react"

interface CountryProgramSectionProps {
    countryName: string
    primaryColor: string
    secondaryColor: string
}

export function CountryProgramSection({
    countryName,
    primaryColor = "#0039A6",
    secondaryColor = "#D52B1E",
}: CountryProgramSectionProps) {
    return (
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                        style={{ backgroundColor: `${secondaryColor}15`, color: secondaryColor }}
                    >
                        PROGRAMA COMPLETO 2025
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        InnovaKids: Módulo Explorer - 10 Clases
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                        El programa más completo de IA para niños en {countryName}. Tu hijo pasará de consumidor a creador. Cada clase dura 60 minutos.
                    </p>
                </div>

                {/* CLASES */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* CLASES 1-5 */}
                    <div className="rounded-3xl bg-card border border-border p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold"
                                style={{ backgroundColor: primaryColor }}
                            >
                                1-5
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Fundamentos Creativos</h3>
                                <p className="text-sm text-muted-foreground">Generativa, Prompts y Creatividad</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                { clase: "1", nombre: "Vibe IA", desc: "Tu nuevo superpoder (Configuración)" },
                                { clase: "2", nombre: "Prompt Engineering", desc: "El arte de hablar con máquinas" },
                                { clase: "3", nombre: "Vibe Voice", desc: "Clonación de voz y narración" },
                                { clase: "4", nombre: "Vibe Music", desc: "Composición musical con IA" },
                                { clase: "5", nombre: "Generative Art I", desc: "De la imaginación a la imagen" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span
                                        className="h-6 w-6 rounded-full text-xs flex items-center justify-center font-bold shrink-0"
                                        style={{ backgroundColor: `${secondaryColor}20`, color: secondaryColor }}
                                    >
                                        {item.clase}
                                    </span>
                                    <div>
                                        <span className="font-semibold">{item.nombre}</span>
                                        <span className="text-muted-foreground"> - {item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CLASES 6-10 */}
                    <div
                        className="rounded-3xl bg-card p-8"
                        style={{ borderWidth: 1, borderStyle: "solid", borderColor: `${secondaryColor}30` }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold"
                                style={{ backgroundColor: secondaryColor }}
                            >
                                6-10
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Aplicación Práctica</h3>
                                <p className="text-sm text-muted-foreground">Proyectos reales y presentación</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                { clase: "6", nombre: "Generative Art II", desc: "Storytelling visual consistente" },
                                { clase: "7", nombre: "Vibe Coding", desc: "Programación de Videojuegos con IA" },
                                { clase: "8", nombre: "Vibe Study", desc: "Hackea tu escuela (Técnicas de estudio)" },
                                { clase: "9", nombre: "Cyber Ethics", desc: "Deepfakes y seguridad digital" },
                                { clase: "10", nombre: "The Vibe Project", desc: "Presentación final de identidad" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span
                                        className="h-6 w-6 rounded-full text-xs flex items-center justify-center font-bold shrink-0"
                                        style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                                    >
                                        {item.clase}
                                    </span>
                                    <div>
                                        <span className="font-semibold">{item.nombre}</span>
                                        <span className="text-muted-foreground"> - {item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* VALUE STACKING - HORMOZI STYLE */}
                <div
                    className="max-w-3xl mx-auto rounded-3xl p-8 md:p-12 text-white"
                    style={{ background: `linear-gradient(to bottom right, ${primaryColor}, ${primaryColor}cc)` }}
                >
                    <h3 className="text-2xl font-bold text-center mb-8">Lo Que Recibes (Valor Real)</h3>
                    <ul className="space-y-4 mb-8">
                        {[
                            { item: "10 Clases en Vivo (60 min c/u)", valor: "$400" },
                            { item: "Acceso a 20+ Herramientas IA Premium", valor: "$300" },
                            { item: "Portafolio Profesional de 10 Proyectos", valor: "$200" },
                            { item: "Certificado de Completación", valor: "$50" },
                            { item: "Comunidad Discord Exclusiva", valor: "$97" },
                            { item: "Soporte WhatsApp Ilimitado", valor: "$150" },
                            { item: "Grabaciones de Todas las Clases", valor: "$100" },
                            { item: "Grupos de Máximo 5 Niños", valor: "Invaluable" },
                        ].map((item, i) => (
                            <li key={i} className="flex items-center justify-between border-b border-white/20 pb-3">
                                <span className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-[#4ADE80]" />
                                    {item.item}
                                </span>
                                <span className="text-white/70 line-through">{item.valor}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center border-t border-white/20 pt-6">
                        <p className="text-white/70 mb-2">
                            Valor Total: <span className="line-through">$1,297 USD</span>
                        </p>
                        <p className="text-4xl font-bold text-[#4ADE80] mb-2">Tu Inversión: $267 USD</p>
                        <p className="text-sm text-white/60">Pago único • Garantía 10 días • Todos los métodos de pago</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

