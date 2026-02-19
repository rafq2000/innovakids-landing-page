import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Film, Rocket, Sparkles, Video, Camera } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Curso de Creador de Contenido y Cine con IA para Niños | InnovaKids",
    description: "Aprende a crear contenido para YouTube, TikTok y cine usando Inteligencia Artificial. Curso online para niños y adolescentes (8-17 años). Edición de video, efectos especiales y storytelling con IA.",
    keywords: [
        "curso creador contenido niños",
        "curso youtube niños ia",
        "cine con inteligencia artificial niños",
        "curso tiktok adolescentes",
        "edicion video ia niños",
        "curso creacion contenido digital",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/curso-creador-contenido-ia",
    },
    openGraph: {
        title: "Curso de Contenido y Cine con IA para Niños | InnovaKids",
        description: "Tu hijo aprende a producir contenido de nivel profesional con Inteligencia Artificial. YouTube, cine y redes sociales. Grupos de 5.",
        url: "https://www.innovakidslatam.com/curso-creador-contenido-ia",
    },
}

const faqs = [
    {
        q: "¿Qué herramientas de IA usarán para crear contenido?",
        a: "Usamos herramientas de IA para edición de video, generación de efectos visuales, creación de guiones, diseño de thumbnails y producción musical. Todo adaptado a la edad y nivel del estudiante.",
    },
    {
        q: "¿Mi hijo necesita una cámara profesional?",
        a: "No. Con un celular o la cámara de su computador es suficiente para empezar. La IA nos ayuda a mejorar la calidad de producción sin equipo costoso.",
    },
    {
        q: "¿Es seguro para niños crear contenido en redes sociales?",
        a: "Enseñamos creación de contenido responsable y seguridad digital. Los proyectos se comparten en un entorno controlado y enseñamos a los padres cómo supervisar las publicaciones.",
    },
    {
        q: "¿Qué tipo de contenido aprenderán a crear?",
        a: "Cortometrajes, vlogs educativos, animaciones, podcasts y contenido para redes sociales. Todo con IA como asistente creativo para producir contenido de calidad profesional.",
    },
    {
        q: "¿Tiene salida profesional este conocimiento?",
        a: "Absolutamente. La creación de contenido digital es una de las carreras con mayor crecimiento mundial. Aprender a usar IA para producción multimedia da una ventaja competitiva enorme.",
    },
]

export default function CreatorPage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Curso de Creador de Contenido y Cine con IA para Niños y Adolescentes",
        description: "Producción de contenido digital, YouTube, cine y edición profesional usando Inteligencia Artificial. Para niños y adolescentes de 8 a 17 años.",
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
        url: "https://www.innovakidslatam.com/curso-creador-contenido-ia",
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
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-500/20 rounded-full blur-[120px]" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-bold mb-6">
                            <Film className="w-4 h-4" />
                            Para Niños y Adolescentes (8-17 Años)
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Curso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Creador de Contenido y Cine con IA</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Tu hijo aprende a producir videos, cortometrajes y contenido de nivel profesional usando Inteligencia Artificial como copiloto creativo.
                        </p>
                        <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-pink-500/20">
                            <Link href="#comenzar">Empezar Ahora</Link>
                        </Button>
                    </div>
                </div>

                {/* Problem/Solution */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">¿Tu hijo vive viendo YouTube o TikTok?</h2>
                            <p className="text-slate-300 text-lg mb-6">
                                Esa fascinación es <strong>creatividad esperando explotar</strong>. Los mejores creadores del futuro serán quienes dominen la IA como herramienta de producción.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Producción de contenido de calidad profesional",
                                    "Storytelling y narrativa audiovisual",
                                    "Edición de video con IA",
                                    "Efectos especiales y animación",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-pink-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/5 border border-pink-500/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-pink-400 mb-4">La Especialización Creativa</h3>
                            <p className="text-slate-400 mb-4">
                                Usamos IA generativa para que niños y adolescentes produzcan contenido que antes requería equipos profesionales.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🎬</div>
                                    <div className="font-bold text-sm">Cortometrajes</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">📱</div>
                                    <div className="font-bold text-sm">Contenido Social</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🎵</div>
                                    <div className="font-bold text-sm">Música con IA</div>
                                </div>
                                <div className="bg-black/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">✨</div>
                                    <div className="font-bold text-sm">Efectos Visuales</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Path */}
                <div id="comenzar" className="container mx-auto px-4 py-16 bg-white/5 border-y border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">¿Cómo convertirse en Creador de Contenido con IA?</h2>
                        <p className="text-slate-300">Nuestro programa tiene dos niveles diseñados para llevar a tu hijo de consumidor a creador profesional.</p>
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
                                <p className="text-purple-100 mb-4">Las bases de la IA que todo creador necesita dominar.</p>
                                <ul className="space-y-2 text-white text-sm mb-6">
                                    <li>✅ Generación de Imágenes y Arte IA</li>
                                    <li>✅ Prompt Engineering Creativo</li>
                                    <li>✅ Herramientas de Producción con IA</li>
                                </ul>
                                <Button asChild className="w-full bg-white text-purple-600 hover:bg-purple-50 font-bold">
                                    <Link href="/brochure-programa-ia">Empezar Aquí (Nivel 1)</Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10 opacity-75 hover:opacity-100 transition-opacity">
                            <div className="absolute top-4 right-4 bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">PASO 2 (FUTURO)</div>
                            <CardHeader>
                                <CardTitle className="text-2xl text-pink-400 flex items-center gap-3">
                                    <Camera className="w-8 h-8" />
                                    Vibe Creators (Especialidad)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-400 mb-4">Producción avanzada de contenido y cine con IA.</p>
                                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                                    <li>🔒 Edición Profesional de Video con IA</li>
                                    <li>🔒 Producción de Cortometrajes</li>
                                    <li>🔒 Monetización de Contenido</li>
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
                    <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes sobre el Curso de Contenido y Cine con IA</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-pink-400 mb-3">{faq.q}</h3>
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
                        <Link href="/curso-emprendimiento-ninos" className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500/60 transition-colors text-center group">
                            <div className="text-3xl mb-3">💡</div>
                            <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">Emprendimiento</h3>
                            <p className="text-slate-400 text-sm mt-2">Startups y Negocios con IA</p>
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
                                <Link key={c.code} href={`/${c.code}`} className="text-xs text-slate-500 hover:text-pink-400 transition-colors px-2 py-1 border border-white/5 rounded hover:border-pink-500/30">
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center py-8">
                    <p className="text-slate-500 text-sm">
                        ¿Tienes dudas? <Link href="https://wa.me/56964754219" className="text-pink-400 underline">Habla con nosotros por WhatsApp</Link>
                    </p>
                </div>
            </div>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
