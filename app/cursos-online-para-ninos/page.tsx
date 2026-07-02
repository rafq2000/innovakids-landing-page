import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, Zap, Monitor, Users, ArrowRight, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
    // 58 chars · keyword-first · 2026 trigger · brand last
    title: "Cursos Online para Niños 2026 · #1 LATAM | InnovaKids",
    // 154 chars · proof + differentiator + CTA
    description:
        "Cursos online para niños 8-17 años en LATAM y España. IA, programación y videojuegos en vivo, grupos de 5, 527 graduados en 9 países. Clase gratis.",
    keywords: [
        "cursos online para niños",
        "clases virtuales para niños",
        "actividades extracurriculares online",
        "mejores cursos para niños 2026",
        "programación para niños",
        "cursos para niños españa",
        "cursos para niños mexico",
        "cursos para niños colombia",
        "cursos para niños chile",
        "cursos para niños argentina",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/cursos-online-para-ninos",
    },
    openGraph: {
        title: "Cursos Online para Niños 2026 · Escuela #1 en LATAM y España | InnovaKids",
        description:
            "Tu hijo pasa de consumidor a creador de tecnología. IA, programación y videojuegos en vivo, grupos de 5, 9 países. Clase gratis.",
        url: "https://www.innovakidslatam.com/cursos-online-para-ninos",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
            width: 1200,
            height: 630,
            alt: "Cursos Online para Niños 8-17 años en LATAM y España - InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cursos Online para Niños 2026 · #1 LATAM | InnovaKids",
        description:
            "IA, programación y videojuegos en vivo para niños 8-17 años. Grupos de 5, 527 graduados en 9 países. Clase gratis.",
        images: ["https://www.innovakidslatam.com/kids-creating-ai-projects.jpg"],
    },
}

export default function CursosOnlineNinosPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Curso de Inteligencia Artificial para Niños y Adolescentes",
        description: "Aprende a crear apps, videojuegos y arte con IA. Curso online en vivo para niños de 8 a 17 años.",
        provider: {
            "@type": "Organization",
            name: "InnovaKids",
            sameAs: "https://www.innovakidslatam.com"
        },
        offers: {
            "@type": "Offer",
            category: "Premium",
            price: "267",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
        },
        educationalLevel: "Beginner",
        audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            audienceType: "Children"
        },
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT15H"
        }
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Cursos Online para Niños: ¿Cuál es la Mejor Inversión en 2026?",
        image: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
        author: {
            "@type": "Organization",
            name: "InnovaKids Team"
        },
        publisher: {
            "@type": "Organization",
            name: "InnovaKids LATAM",
            logo: {
                "@type": "ImageObject",
                url: "https://www.innovakidslatam.com/logo-innovakids-new.png"
            }
        },
        datePublished: "2024-01-20",
        dateModified: new Date().toISOString()
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Navigation />
            <WhatsAppButton />

            <main className="min-h-screen bg-[#F2EDE0]">
                {/* HERO SECTION */}
                <section className="relative pt-32 pb-24 overflow-hidden bg-[#F5F1E8]">

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#FAF7EF] border border-[#E8E0D0] rounded-full px-6 py-2 mb-8">
                            <Globe className="w-4 h-4 text-[#B5522F]" />
                            <span className="text-[#5A5751] font-medium text-sm">Disponible en España y toda Latinoamérica</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-[#1A1714] leading-tight mb-8 font-display">
                            Cursos Online para Niños:
                            <br />
                            <span className="text-[#B5522F]">
                                ¿Cuál es la Mejor Inversión en 2026?
                            </span>
                        </h1>

                        <p className="text-xl text-[#5A5751] max-w-3xl mx-auto mb-10 leading-relaxed font-body">
                            En un mundo digital, las actividades extracurriculares están cambiando.
                            Analizamos las opciones más populares para niños de 8 a 17 años y te contamos
                            por qué <strong className="text-[#1A1714]">miles de padres en España y Latam</strong> están eligiendo la tecnología.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] text-lg font-bold px-8 py-7 rounded-sm shadow-md hover:shadow-lg transition-all">
                                <Link href="#comparativa">
                                    Ver Comparativa 2026
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section id="comparativa" className="py-20 bg-[#FAF7EF]">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1A1714] mb-16 font-display">
                            Top 4 Habilidades para el Futuro
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Option 1: English */}
                            <Card className="bg-[#FAF7EF] border border-[#E8E0D0] hover:border-[#C96342]/30 transition-all opacity-70 hover:opacity-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#1A1714]">
                                        <span className="text-3xl">🇬🇧</span> Inglés
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-[#5A5751]">
                                    <p className="mb-4">Esencial, pero ya no es un diferenciador. Es el "desde".</p>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-center gap-2">✅ Comunicación global</li>
                                        <li className="flex items-center gap-2">❌ Alta competencia</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Option 2: Sports */}
                            <Card className="bg-[#FAF7EF] border border-[#E8E0D0] hover:border-[#C96342]/30 transition-all opacity-70 hover:opacity-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#1A1714]">
                                        <span className="text-3xl">⚽</span> Deportes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-[#5A5751]">
                                    <p className="mb-4">Vital para la salud física y el trabajo en equipo.</p>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-center gap-2">✅ Salud y disciplina</li>
                                        <li className="flex items-center gap-2">❌ No es carrera digital</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Option 3: Music */}
                            <Card className="bg-[#FAF7EF] border border-[#E8E0D0] hover:border-[#C96342]/30 transition-all opacity-70 hover:opacity-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#1A1714]">
                                        <span className="text-3xl">🎹</span> Música/Arte
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-[#5A5751]">
                                    <p className="mb-4">Desarrolla la creatividad y la sensibilidad.</p>
                                    <ul className="text-sm space-y-2">
                                        <li className="flex items-center gap-2">✅ Creatividad</li>
                                        <li className="flex items-center gap-2">❌ Nicho específico</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Option 4: AI (Highlight) */}
                            <Card className="bg-[#FAF7EF] border-2 border-[#C96342] shadow-md transform scale-105 relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C96342] text-[#FAF7EF] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Recomendado 2026
                                </div>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-[#1A1714] text-xl">
                                        <span className="text-3xl">🤖</span> IA y Tech
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-[#5A5751]">
                                    <p className="mb-4 font-medium text-[#1A1714]">La nueva alfabetización. Quien no la use, quedará atrás.</p>
                                    <ul className="text-sm space-y-3">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#B5522F]" /> Salarios +50% altos</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#B5522F]" /> Crear, no solo consumir</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#B5522F]" /> Ventaja competitiva real</li>
                                    </ul>
                                    <Button asChild className="w-full mt-6 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] font-bold rounded-sm">
                                        <Link href="/">Descubrir Curso</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* WHY ONLINE SECTION */}
                <section className="py-24 bg-[#F2EDE0]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1A1714] mb-12 font-display">
                            ¿Por qué elegir Cursos Online para Niños?
                        </h2>
                        <p className="text-center text-[#5A5751] mb-16 max-w-3xl mx-auto font-body">
                            La educación virtual ha evolucionado. Ya no se trata de videos grabados aburridos.
                            Las nuevas plataformas conectan a niños de <strong>España, México, Colombia, Argentina</strong> y más,
                            creando un aula global enriquecedora.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Monitor, title: "Acceso Global", text: "Tu hijo aprende con los mejores instructores, sin importar si vives en Madrid, Buenos Aires o CDMX." },
                                { icon: Users, title: "Networking Temprano", text: "Conecta con otros niños brillantes de todo el mundo hispanohablante que comparten sus intereses." },
                                { icon: Zap, title: "Habilidades del Futuro", text: "Las herramientas digitales son nativas en el entorno online. Aprenden haciendo." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#FAF7EF] border border-[#E8E0D0] hover:shadow-md transition-all">
                                    <div className="bg-[#C96342]/10 p-4 rounded-full mb-4">
                                        <item.icon className="w-8 h-8 text-[#B5522F]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A1714] mb-3">{item.title}</h3>
                                    <p className="text-[#5A5751]">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOLUTION SECTION */}
                <section className="py-24 relative overflow-hidden bg-[#F5F1E8]">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="bg-[#FAF7EF] rounded-3xl p-8 md:p-12 border border-[#E8E0D0] shadow-lg lg:flex items-center gap-12">
                            <div className="lg:w-1/2 mb-8 lg:mb-0">
                                <div className="inline-block bg-[#C96342] text-[#FAF7EF] font-bold px-4 py-1 rounded-full text-sm mb-6">
                                    LA OPCIÓN #1 EN LATAM Y ESPAÑA
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-[#1A1714] mb-6 font-display">
                                    InnovaKids: Más que un curso, una ventaja de por vida
                                </h2>
                                <p className="text-lg text-[#5A5751] mb-8 font-body">
                                    Mientras otros juegan videojuegos, nuestros alumnos los crean usando Inteligencia Artificial.
                                    El programa más completo para niños de 8 a 17 años en español.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {["Clases en vivo (No videos grabados)", "Grupos pequeños (Máx 5 alumnos)", "Proyecto final real garantizado"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#1A1714]">
                                            <CheckCircle className="w-5 h-5 text-[#B5522F] flex-shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg" className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] font-bold text-lg rounded-sm">
                                        <Link href="/">Ver Programa Completo</Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="border-[#E8E0D0] text-[#1A1714] hover:bg-[#F5F1E8]">
                                        <Link href="/brochure-programa-ia">Descargar Brochure PDF</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                {/* Abstract representation of global connection */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#F5F1E8] p-4 rounded-xl border border-[#E8E0D0]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🇪🇸</span>
                                            <span className="text-[#1A1714] font-bold">España</span>
                                        </div>
                                        <p className="text-xs text-[#5A5751]">"Mi hijo espera toda la semana su clase de IA"</p>
                                        <div className="flex text-yellow-500 mt-2"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                    </div>
                                    <div className="bg-[#F5F1E8] p-4 rounded-xl border border-[#E8E0D0] translate-y-8">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🇲🇽</span>
                                            <span className="text-[#1A1714] font-bold">México</span>
                                        </div>
                                        <p className="text-xs text-[#5A5751]">"La mejor inversión extracurricular que hemos hecho"</p>
                                        <div className="flex text-yellow-500 mt-2"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                    </div>
                                    <div className="bg-[#F5F1E8] p-4 rounded-xl border border-[#E8E0D0]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🇨🇴</span>
                                            <span className="text-[#1A1714] font-bold">Colombia</span>
                                        </div>
                                        <p className="text-xs text-[#5A5751]">"Profesores excelentes y pacientes"</p>
                                        <div className="flex text-yellow-500 mt-2"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                    </div>
                                    <div className="bg-[#F5F1E8] p-4 rounded-xl border border-[#E8E0D0] translate-y-8">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🇨🇱</span>
                                            <span className="text-[#1A1714] font-bold">Chile</span>
                                        </div>
                                        <p className="text-xs text-[#5A5751]">"100% recomendado para el futuro"</p>
                                        <div className="flex text-yellow-500 mt-2"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SNIPPET SECTION */}
                <section className="py-24 bg-[#F2EDE0]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-2xl font-bold text-[#1A1714] mb-10 text-center font-display">Preguntas Frecuentes de Padres</h2>
                        <div className="space-y-6">
                            <div className="border-b border-[#E8E0D0] pb-6">
                                <h3 className="text-lg font-semibold text-[#1A1714] mb-2">¿Desde qué países se pueden conectar?</h3>
                                <p className="text-[#5A5751]">Desde cualquier parte del mundo. Tenemos alumnos activos en España, México, Colombia, Argentina, Chile, Perú, Estados Unidos y más. Los horarios se adaptan a tu zona horaria.</p>
                            </div>
                            <div className="border-b border-[#E8E0D0] pb-6">
                                <h3 className="text-lg font-semibold text-[#1A1714] mb-2">¿Necesitan saber programar antes?</h3>
                                <p className="text-[#5A5751]">No, nuestros cursos online para niños empiezan desde cero. La IA fácilita el aprendizaje técnico, permitiendo que creen proyectos avanzados sin frustración.</p>
                            </div>
                        </div>
                        {/* COUNTRY SELECTION SECTION - SEO HUB */}
                        <section id="países" className="py-20 bg-[#FAF7EF] border-t border-[#E8E0D0] rounded-2xl mt-12">
                            <div className="container mx-auto px-6 max-w-6xl">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-[#1A1714] mb-4 font-display">
                                        Encuentra el Curso de IA en tu País
                                    </h2>
                                    <p className="text-[#5A5751]">
                                        Horarios adaptados y moneda local en toda Latinoamérica y España
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {[
                                        { name: "Chile", code: "cl", flag: "🇨🇱", slug: "/cl/cursos-ia-ninos-chile" },
                                        { name: "México", code: "mx", flag: "🇲🇽", slug: "/mx/cursos-ia-ninos-mexico" },
                                        { name: "Colombia", code: "co", flag: "🇨🇴", slug: "/co/cursos-ia-ninos-colombia" },
                                        { name: "Argentina", code: "ar", flag: "🇦🇷", slug: "/ar/cursos-ia-chicos-argentina" },
                                        { name: "Perú", code: "pe", flag: "🇵🇪", slug: "/pe/cursos-ia-ninos-peru" },
                                        { name: "España", code: "es", flag: "🇪🇸", slug: "/es/cursos-ia-ninos-espana" },
                                        { name: "USA Latinos", code: "us", flag: "🇺🇸", slug: "/us/cursos-ia-ninos-latinos-usa" },
                                        { name: "Ecuador", code: "ec", flag: "🇪🇨", slug: "/ec/cursos-ia-ninos-ecuador" },
                                        { name: "Uruguay", code: "uy", flag: "🇺🇾", slug: "/uy/cursos-ia-ninos-uruguay" },
                                        { name: "Costa Rica", code: "cr", flag: "🇨🇷", slug: "/cr/cursos-ia-ninos-costa-rica" },
                                        { name: "Panamá", code: "pa", flag: "🇵🇦", slug: "/pa/cursos-ia-ninos-panama" },
                                        { name: "R. Dominicana", code: "do", flag: "🇩🇴", slug: "/do/cursos-ia-ninos-republica-dominicana" },
                                        { name: "Honduras", code: "hn", flag: "🇭🇳", slug: "/hn/cursos-ia-ninos-honduras" },
                                        { name: "El Salvador", code: "sv", flag: "🇸🇻", slug: "/sv/cursos-ia-ninos-el-salvador" },
                                        { name: "Guatemala", code: "gt", flag: "🇬🇹", slug: "/gt/cursos-ia-ninos-guatemala" },
                                        { name: "Paraguay", code: "py", flag: "🇵🇾", slug: "/py/cursos-ia-ninos-paraguay" },
                                        { name: "Bolivia", code: "bo", flag: "🇧🇴", slug: "/bo/cursos-ia-ninos-bolivia" },
                                        { name: "Venezuela", code: "ve", flag: "🇻🇪", slug: "/ve/cursos-ia-ninos-venezuela" },
                                        { name: "Nicaragua", code: "ni", flag: "🇳🇮", slug: "/ni/cursos-ia-ninos-nicaragua" },
                                        { name: "Puerto Rico", code: "pr", flag: "🇵🇷", slug: "/pr/cursos-ia-ninos-puerto-rico" },
                                    ].map((country) => (
                                        <Link
                                            key={country.code}
                                            href={country.slug}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF7EF] hover:bg-[#F5F1E8] border border-[#E8E0D0] hover:border-[#C96342]/50 transition-all group"
                                        >
                                            <span className="text-2xl">{country.flag}</span>
                                            <span className="text-[#5A5751] group-hover:text-[#1A1714] font-medium text-sm">{country.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="mt-10 text-center">
                            <Link href="/" className="text-[#B5522F] hover:text-[#9A4428] font-semibold inline-flex items-center gap-2">
                                Ver todas las preguntas frecuentes <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
