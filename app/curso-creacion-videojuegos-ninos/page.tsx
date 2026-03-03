import { generateHreflangs } from "@/lib/seo-config";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Sparkles, Gamepad2, Rocket, Brain } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Curso de Creación de Videojuegos con IA para Niños y Adolescentes | InnovaKids",
    description: "Aprende a crear videojuegos con Inteligencia Artificial. Curso online para niños y adolescentes (8-17 años). Roblox, Unity y más. Grupos de 5 alumnos. ¡Empieza hoy!",
    keywords: [
        "curso crear videojuegos niños",
        "curso videojuegos con ia niños",
        "crear juegos con inteligencia artificial",
        "curso roblox niños",
        "programacion videojuegos adolescentes",
        "curso game design niños online",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/curso-creacion-videojuegos-ninos",
      languages: generateHreflangs("home")
    },
    openGraph: {
        title: "Curso de Videojuegos con IA para Niños | InnovaKids",
        description: "Tu hijo pasa de JUGAR a CREAR. Aprende a diseñar mundos, personajes y lógicas de juego usando Inteligencia Artificial. Grupos de 5 alumnos.",
        url: "https://www.innovakidslatam.com/curso-creacion-videojuegos-ninos",
    },
}

const faqs = [
    {
        q: "¿Qué aprenderá mi hijo en el curso de videojuegos con IA?",
        a: "Tu hijo aprenderá a diseñar personajes, crear mundos 3D, programar la lógica del juego y publicar su creación. Todo usando herramientas de Inteligencia Artificial como copiloto para acelerar el proceso creativo.",
    },
    {
        q: "¿Necesita saber programar para tomar el curso?",
        a: "No. El curso usa la metodología Vibe Coding de InnovaKids donde la IA asiste en la programación. Tu hijo aprende los conceptos lógicos mientras la IA le ayuda con el código técnico.",
    },
    {
        q: "¿Qué edad es ideal para este curso de videojuegos?",
        a: "El curso está diseñado para niños y adolescentes entre 8 y 17 años. Hay grupos separados por edad para asegurar que el contenido sea apropiado y desafiante para cada nivel.",
    },
    {
        q: "¿Es diferente a otros cursos de videojuegos para niños?",
        a: "Sí. Mientras otros cursos usan herramientas básicas como Scratch, en InnovaKids usamos IA generativa como copiloto real de desarrollo, lo que permite crear juegos de mayor calidad y complejidad.",
    },
    {
        q: "¿En qué países está disponible este curso?",
        a: "El curso es 100% online en vivo y está disponible en Chile, Argentina, Perú, Colombia, México, España, Ecuador, Bolivia, Costa Rica, Panamá, República Dominicana, y todos los países hispanohablantes.",
    },
]

export default function GameDesignPage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Curso de Creación de Videojuegos con IA para Niños y Adolescentes",
        description: "Aprende a crear videojuegos con Inteligencia Artificial. Diseño de personajes, mundos 3D, lógica de programación y publicación real. Para niños y adolescentes de 8 a 17 años.",
        provider: {
            "@type": "Organization",
            name: "InnovaKids",
            url: "https://www.innovakidslatam.com",
        },
        educationalLevel: "Beginner",
        audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            audienceType: "Children and Adolescents aged 8-17",
        },
        courseMode: "online",
        inLanguage: "es",
        url: "https://www.innovakidslatam.com/curso-creacion-videojuegos-ninos",
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
            },
        })),
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navigation />
            <div className="min-h-screen bg-[#0a1628] text-white">
                {/* Hero */}
                <div className="relative overflow-hidden pt-20 pb-16">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/20 rounded-full blur-[120px]" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-bold mb-6">
                            <Gamepad2 className="w-4 h-4" />
                            Para Niños y Adolescentes (8-17 Años)
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Curso de Creación de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Videojuegos con IA</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Deja que tu hijo pase de JUGAR a CREAR. Aprende a diseñar mundos, personajes y lógicas de juego usando Inteligencia Artificial.
                        </p>
                        <Button asChild size="lg" className="bg-green-500 hover:bg-green-400 text-slate-900 font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-green-500/20">
                            <Link href="#comenzar">Empezar Ahora</Link>
                        </Button>
                    </div>
                </div>

                {/* The Problem/Solution */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">¿Tu hijo pasa horas en Roblox o Minecraft?</h2>
                            <p className="text-slate-300 text-lg mb-6">
                                Eso no es tiempo perdido, es <strong>talento oculto</strong>. La industria de los videojuegos es más grande que el cine y la música juntos.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Desarrolla pensamiento lógico y matemático",
                                    "Aprende narrativa y storytelling",
                                    "Entiende cómo funciona la tecnología por dentro",
                                    "Crea su propio portafolio digital"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-green-400 mb-4">La Especialización Gamer</h3>
                            <p className="text-slate-400 mb-4">
                                En InnovaKids, usamos la IA como copiloto para que niños y adolescentes creen juegos de nivel profesional sin frustración.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">👾</div>
                                    <div className="font-bold text-sm">Diseño de Personajes</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🗺️</div>
                                    <div className="font-bold text-sm">Mundos 3D</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">💻</div>
                                    <div className="font-bold text-sm">Lógica de Programación</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-sm">Publicación Real</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Path */}
                <div id="comenzar" className="container mx-auto px-4 py-16 bg-white/5 border-y border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">¿Cómo convertirse en Creador de Videojuegos?</h2>
                        <p className="text-slate-300">
                            Para dominar la creación de juegos con IA, primero necesitamos las bases. Nuestro programa está estructurado para garantizar el éxito.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="bg-gradient-to-br from-purple-600 to-blue-600 border-0 relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-white text-purple-600 text-xs font-bold px-2 py-1 rounded">PASO 1 (OBLIGATORIO)</div>
                            <CardHeader>
                                <CardTitle className="text-2xl text-white flex items-center gap-3">
                                    <Rocket className="w-8 h-8" />
                                    Vibe Explorer (Nivel 1)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-purple-100 mb-4">
                                    Antes de especializarse, tu hijo debe dominar las herramientas base de la IA.
                                </p>
                                <ul className="space-y-2 text-white text-sm mb-6">
                                    <li>✅ Vibe Coding (Introducción a lógica)</li>
                                    <li>✅ Generación de Assets de Juego (Arte IA)</li>
                                    <li>✅ Prompt Engineering para código</li>
                                </ul>
                                <Button asChild className="w-full bg-white text-purple-600 hover:bg-purple-50 font-bold">
                                    <Link href="/brochure-programa-ia">Empezar Aquí (Nivel 1)</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/5 border-white/10 opacity-75 hover:opacity-100 transition-opacity">
                            <div className="absolute top-4 right-4 bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">PASO 2 (FUTURO)</div>
                            <CardHeader>
                                <CardTitle className="text-2xl text-green-400 flex items-center gap-3">
                                    <Gamepad2 className="w-8 h-8" />
                                    Vibe Gamers (Especialidad)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-400 mb-4">
                                    Una vez graduado de Vibe Explorer, desbloquea la especialización avanzada.
                                </p>
                                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                                    <li>🔒 Motores de Juego Avanzados</li>
                                    <li>🔒 Multiplayer Networking</li>
                                    <li>🔒 Monetización de Juegos</li>
                                </ul>
                                <Button disabled className="w-full bg-white/10 text-slate-400 border border-white/10 cursor-not-allowed">
                                    Requiere Nivel 1
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes sobre el Curso de Videojuegos con IA</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-green-400 mb-3">{faq.q}</h3>
                                <p className="text-slate-300">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Internal Links - Other Courses */}
                <div className="container mx-auto px-4 py-16 border-t border-white/10">
                    <h2 className="text-2xl font-bold text-center mb-8">Explora Otros Cursos de InnovaKids</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/curso-ia-ninos" className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-colors text-center group">
                            <div className="text-3xl mb-3">🧠</div>
                            <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">Curso Base de IA</h3>
                            <p className="text-slate-400 text-sm mt-2">Vibe Explorer — Nivel 1</p>
                        </Link>
                        <Link href="/curso-creador-contenido-ia" className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-colors text-center group">
                            <div className="text-3xl mb-3">🎬</div>
                            <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">Creador de Contenido</h3>
                            <p className="text-slate-400 text-sm mt-2">Cine y YouTube con IA</p>
                        </Link>
                        <Link href="/curso-emprendimiento-ninos" className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500/60 transition-colors text-center group">
                            <div className="text-3xl mb-3">💡</div>
                            <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">Emprendimiento</h3>
                            <p className="text-slate-400 text-sm mt-2">Startups y Negocios con IA</p>
                        </Link>
                    </div>

                    {/* Country Links for SEO */}
                    <div className="mt-12 text-center">
                        <p className="text-slate-500 text-sm mb-4">Disponible en toda Latinoamérica y España:</p>
                        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                            {[
                                { code: "cl", name: "Chile" }, { code: "mx", name: "México" }, { code: "co", name: "Colombia" },
                                { code: "ar", name: "Argentina" }, { code: "pe", name: "Perú" }, { code: "es", name: "España" },
                                { code: "ec", name: "Ecuador" }, { code: "bo", name: "Bolivia" }, { code: "cr", name: "Costa Rica" },
                                { code: "do", name: "Rep. Dominicana" }, { code: "us", name: "EE.UU." }, { code: "ve", name: "Venezuela" },
                            ].map((c) => (
                                <Link key={c.code} href={`/${c.code}`} className="text-xs text-slate-500 hover:text-green-400 transition-colors px-2 py-1 border border-white/5 rounded hover:border-green-500/30">
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center py-8">
                    <p className="text-slate-500 text-sm">
                        ¿Tienes dudas? <Link href="https://wa.me/56964754219" className="text-green-400 underline">Habla con nosotros por WhatsApp</Link>
                    </p>
                </div>
            </div>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
