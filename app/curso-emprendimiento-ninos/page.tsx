import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Lightbulb, Rocket, TrendingUp, DollarSign, Briefcase } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Curso de Emprendimiento y Startups con IA para Niños | InnovaKids",
    description: "Tu hijo aprende educación financiera, creación de startups y negocios digitales con Inteligencia Artificial. Curso online para niños y adolescentes (8-17 años). ¡El futuro empresario empieza hoy!",
    keywords: [
        "curso emprendimiento niños",
        "educacion financiera niños ia",
        "startups para adolescentes",
        "emprendimiento juvenil online",
        "negocios digitales para jovenes",
        "curso criar emprendedores",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/curso-emprendimiento-ninos",
    },
    openGraph: {
        title: "Curso de Emprendimiento con IA para Niños | InnovaKids",
        description: "Educación financiera, startups y negocios digitales con IA. Para niños y adolescentes 8-17 años. Grupos de 5.",
        url: "https://www.innovakidslatam.com/curso-emprendimiento-ninos",
    },
}

const faqs = [
    {
        q: "¿Qué aprenderá mi hijo sobre emprendimiento con IA?",
        a: "Aprenderá a identificar problemas reales, crear soluciones tecnológicas usando IA, validar ideas de negocio, crear un MVP (Producto Mínimo Viable) y presentar su startup. Todo con herramientas de IA que aceleran cada etapa.",
    },
    {
        q: "¿A qué edad pueden empezar a emprender?",
        a: "Desde los 8 años. Adaptamos los conceptos a cada edad: los más pequeños aprenden a crear soluciones creativas, y los adolescentes trabajan con modelos de negocio reales y presentaciones a inversores simulados.",
    },
    {
        q: "¿Les enseñan sobre dinero y finanzas?",
        a: "Sí. Incluimos módulos de educación financiera básica: ahorro, inversión, presupuestos y cómo generar ingresos con proyectos digitales. Todo contextualizado para su edad.",
    },
    {
        q: "¿Qué tipo de startups crean los niños?",
        a: "Desde apps que resuelven problemas de su comunidad, hasta tiendas online, juegos monetizables y servicios digitales. Los proyectos finales son presentados en un Demo Day.",
    },
    {
        q: "¿Tiene aplicación real en el futuro profesional?",
        a: "El emprendimiento con IA es una de las habilidades más demandadas. Estudios de Harvard y Stanford muestran que la mentalidad emprendedora desarrollada temprano es el mayor predictor de éxito profesional.",
    },
]

export default function EntrepreneurshipPage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Curso de Emprendimiento y Startups con IA para Niños y Adolescentes",
        description: "Educación financiera, creación de startups y negocios digitales usando Inteligencia Artificial. Para niños y adolescentes de 8 a 17 años.",
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
        url: "https://www.innovakidslatam.com/curso-emprendimiento-ninos",
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
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/20 rounded-full blur-[120px]" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-bold mb-6">
                            <Lightbulb className="w-4 h-4" />
                            Para Niños y Adolescentes (8-17 Años)
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Curso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Emprendimiento y Startups con IA</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Tu hijo no solo aprende a usar la IA — aprende a crear negocios con ella. Educación financiera, startup building y mentalidad emprendedora.
                        </p>
                        <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-yellow-500/20">
                            <Link href="#comenzar">Empezar Ahora</Link>
                        </Button>
                    </div>
                </div>

                {/* Problem/Solution */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">El 65% de los niños de hoy trabajarán en empleos que aún no existen</h2>
                            <p className="text-slate-300 text-lg mb-6">
                                La educación tradicional no prepara para crear oportunidades. <strong>El emprendimiento con IA sí.</strong>
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Educación financiera desde temprana edad",
                                    "Mentalidad de crecimiento y resolución de problemas",
                                    "Creación de productos digitales reales",
                                    "Presentación ante inversores (Demo Day)",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-yellow-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">La Especialización Emprendedora</h3>
                            <p className="text-slate-400 mb-4">
                                Usamos IA para que niños y adolescentes construyan startups reales en semanas, no años.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">💰</div>
                                    <div className="font-bold text-sm">Educación Financiera</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-bold text-sm">MVP con IA</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">📊</div>
                                    <div className="font-bold text-sm">Modelo de Negocio</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🎤</div>
                                    <div className="font-bold text-sm">Demo Day</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Path */}
                <div id="comenzar" className="container mx-auto px-4 py-16 bg-white/5 border-y border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">¿Cómo convertirse en Emprendedor Digital con IA?</h2>
                        <p className="text-slate-300">Primero las bases de la IA, luego la especialización en negocios y startups.</p>
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
                                <p className="text-purple-100 mb-4">Las bases de la IA que todo emprendedor necesita.</p>
                                <ul className="space-y-2 text-white text-sm mb-6">
                                    <li>✅ Crear apps y webs con Vibe Coding</li>
                                    <li>✅ Automatización Inteligente</li>
                                    <li>✅ Producción de Contenido con IA</li>
                                </ul>
                                <Button asChild className="w-full bg-white text-purple-600 hover:bg-purple-50 font-bold">
                                    <Link href="/brochure-programa-ia">Empezar Aquí (Nivel 1)</Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10 opacity-75 hover:opacity-100 transition-opacity">
                            <div className="absolute top-4 right-4 bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">PASO 2 (FUTURO)</div>
                            <CardHeader>
                                <CardTitle className="text-2xl text-yellow-400 flex items-center gap-3">
                                    <TrendingUp className="w-8 h-8" />
                                    Vibe Founders (Especialidad)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-400 mb-4">Construcción de startups y negocios digitales reales.</p>
                                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                                    <li>🔒 Validación de Ideas con IA</li>
                                    <li>🔒 Creación de MVP</li>
                                    <li>🔒 Pitch a Inversores</li>
                                </ul>
                                <Button disabled className="w-full bg-white/10 text-slate-400 border border-white/10 cursor-not-allowed">
                                    Requiere Nivel 1
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ */}
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes sobre el Curso de Emprendimiento con IA</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-yellow-400 mb-3">{faq.q}</h3>
                                <p className="text-slate-300">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Internal Links */}
                <div className="container mx-auto px-4 py-16 border-t border-white/10">
                    <h2 className="text-2xl font-bold text-center mb-8">Explora Otros Cursos de InnovaKids</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/curso-ia-ninos" className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-colors text-center group">
                            <div className="text-3xl mb-3">🧠</div>
                            <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">Curso Base de IA</h3>
                            <p className="text-slate-400 text-sm mt-2">Vibe Explorer — Nivel 1</p>
                        </Link>
                        <Link href="/curso-creacion-videojuegos-ninos" className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30 hover:border-green-500/60 transition-colors text-center group">
                            <div className="text-3xl mb-3">🎮</div>
                            <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">Creación de Videojuegos</h3>
                            <p className="text-slate-400 text-sm mt-2">Mundos 3D y Game Design</p>
                        </Link>
                        <Link href="/curso-creador-contenido-ia" className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-6 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-colors text-center group">
                            <div className="text-3xl mb-3">🎬</div>
                            <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">Creador de Contenido</h3>
                            <p className="text-slate-400 text-sm mt-2">Cine y YouTube con IA</p>
                        </Link>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-slate-500 text-sm mb-4">Disponible en toda Latinoamérica y España:</p>
                        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                            {[
                                { code: "cl", name: "Chile" }, { code: "mx", name: "México" }, { code: "co", name: "Colombia" },
                                { code: "ar", name: "Argentina" }, { code: "pe", name: "Perú" }, { code: "es", name: "España" },
                                { code: "ec", name: "Ecuador" }, { code: "bo", name: "Bolivia" }, { code: "cr", name: "Costa Rica" },
                                { code: "do", name: "Rep. Dominicana" }, { code: "us", name: "EE.UU." }, { code: "ve", name: "Venezuela" },
                            ].map((c) => (
                                <Link key={c.code} href={`/${c.code}`} className="text-xs text-slate-500 hover:text-yellow-400 transition-colors px-2 py-1 border border-white/5 rounded hover:border-yellow-500/30">
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center py-8">
                    <p className="text-slate-500 text-sm">
                        ¿Tienes dudas? <Link href="https://wa.me/56964754219" className="text-yellow-400 underline">Habla con nosotros por WhatsApp</Link>
                    </p>
                </div>
            </div>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
