import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
    title: "Inteligencia Artificial para Niños: Guía Completa 2026 | InnovaKids",
    description:
        "Todo lo que necesitas saber sobre IA para niños. Qué es, por qué importa, mejores herramientas, actividades para hacer en casa y cómo elegir un curso.",
    alternates: {
        canonical: "https://www.innovakidslatam.com/blog/inteligencia-artificial-para-ninos",
    },
}

export default function BlogPostPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white text-[#2D3436]">
                {/* Article Header */}
                <header className="pt-32 pb-12 px-4 bg-[#F8F9FA] text-center">
                    <div className="container mx-auto max-w-4xl">
                        <Badge className="mb-6 bg-[#4ECDC4]/10 text-[#4ECDC4] border-[#4ECDC4]/20 px-4 py-1 text-sm">
                            Guía para padres
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D3436] leading-tight">
                            Inteligencia Artificial para Niños: <br /> Guía Completa para Padres 2026
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-gray-500 text-sm mb-8">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Marzo 2026</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Lectura: 15 min</span>
                            <span>•</span>
                            <span>Por Equipo InnovaKids</span>
                        </div>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-12 max-w-6xl flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Desktop */}
                    <aside className="hidden lg:block w-1/4 h-fit sticky top-32">
                        <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-gray-100">
                            <h3 className="font-bold mb-4 text-lg">Tabla de Contenidos</h3>
                            <nav className="space-y-3 text-sm text-gray-600">
                                <Link href="#que-es-ia" className="block hover:text-[#FF6B35]">1. ¿Qué es la IA?</Link>
                                <Link href="#por-que-aprender" className="block hover:text-[#FF6B35]">2. ¿Por qué aprender ahora?</Link>
                                <Link href="#edad-ideal" className="block hover:text-[#FF6B35]">3. Edad ideal</Link>
                                <Link href="#herramientas" className="block hover:text-[#FF6B35]">4. Top 10 Herramientas</Link>
                                <Link href="#actividades" className="block hover:text-[#FF6B35]">5. Actividades en casa</Link>
                                <Link href="#elegir-curso" className="block hover:text-[#FF6B35]">6. Cómo elegir curso</Link>
                                <Link href="#faq" className="block hover:text-[#FF6B35]">7. Preguntas Frecuentes</Link>
                            </nav>
                        </div>

                        <div className="mt-8 p-6 bg-[#1A1A2E] rounded-2xl text-white text-center">
                            <h3 className="font-bold mb-2">¿Quieres que tu hijo aprenda IA?</h3>
                            <p className="text-gray-300 text-sm mb-4">Inscribe a tu hijo en InnovaKids. Clases en vivo.</p>
                            <Link href="/#inversion">
                                <Button className="w-full bg-[#FF6B35] hover:bg-[#ff8659]">Reservar Cupo</Button>
                            </Link>
                        </div>
                    </aside>

                    {/* Content */}
                    <article className="lg:w-3/4 prose prose-lg max-w-none text-gray-700">
                        {/* Intro */}
                        <p className="lead text-xl">
                            La inteligencia artificial ya no es ciencia ficción. Tu hijo la usa todos los días sin saberlo: cuando YouTube le recomienda un video,
                            cuando el corrector del celular le sugiere palabras, cuando juega contra la máquina en un videojuego.
                        </p>
                        <p>
                            La diferencia es que hoy, por primera vez, un niño de 8 años puede <strong>CREAR con IA</strong>, no solo consumirla.
                            Puede generar arte, componer música, programar videojuegos y clonar su propia voz — todo con herramientas que hasta hace 2 años solo existían en laboratorios de investigación.
                        </p>
                        <div className="p-6 bg-blue-50 rounded-xl my-8 border-l-4 border-blue-500">
                            <p className="m-0 font-medium text-blue-900">
                                Esta guía te explica todo lo que necesitas saber como padre: qué es la IA a un nivel comprensible,
                                por qué importa (mucho), herramientas gratuitas para empezar, y cómo asegurar que tu hijo no se quede atrás.
                            </p>
                        </div>

                        <h2 id="que-es-ia" className="scroll-mt-32 text-3xl font-bold text-[#2D3436] mt-12 mb-6">1. ¿Qué es la inteligencia artificial explicada para niños?</h2>
                        <p>
                            Imagina que le enseñas a un perro a sentarse. Le muestras el gesto muchas veces, le das premio cuando lo hace bien, y eventualmente el perro "aprende".
                            La IA funciona parecido, pero en vez de un perro es un programa de computador, y en vez de galletas son datos.
                        </p>

                        <h3 className="text-xl font-bold text-[#2D3436] mt-8 mb-4">La analogía del Pincel Mágico</h3>
                        <p>
                            En InnovaKids usamos esta analogía: <strong>"La IA es como un pincel muy poderoso. El pincel no pinta cuadros solo — necesita a un artista que lo use. Tu hijo es el artista. La IA es el pincel."</strong>
                        </p>

                        <h2 id="por-que-aprender" className="scroll-mt-32 text-3xl font-bold text-[#2D3436] mt-12 mb-6">2. ¿Por qué deberían aprender IA en 2026?</h2>
                        <p>Según el Foro Económico Mundial, para 2030 se crearán 97 millones de nuevos empleos relacionados con IA.</p>
                        <p>Cuando hablamos de "aprender IA", muchos padres piensan en programación compleja. Pero la IA de 2026 no requiere nada de eso para usarla. Lo que realmente aprende un niño es:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" /> <span><strong>Pensamiento Crítico:</strong> Evaluar si lo que generó la IA es bueno o necesita mejoras.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" /> <span><strong>Comunicación Clara:</strong> Saber pedirle cosas a la máquina (Prompt Engineering).</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" /> <span><strong>Creatividad Aumentada:</strong> Crear cosas que antes le tomarían semanas, en minutos.</span></li>
                        </ul>

                        <h2 id="edad-ideal" className="scroll-mt-32 text-3xl font-bold text-[#2D3436] mt-12 mb-6">3. ¿A qué edad puede un niño aprender IA?</h2>

                        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-lg mb-2 text-[#4ECDC4]">8-10 años: La edad de la curiosidad</h4>
                                <p className="text-sm text-gray-600">Esponjas creativas. Quieren ver RESULTADOS rápidos. Ideal para crear arte, música e historias.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-lg mb-2 text-[#FF6B35]">11-14 años: La edad de los proyectos</h4>
                                <p className="text-sm text-gray-600">Pueden sostener proyectos complejos. Ideal para programar videojuegos con asistencia de IA.</p>
                            </div>
                        </div>

                        <div className="my-8 p-6 bg-[#F8F9FA] rounded-xl text-center">
                            <p className="font-medium mb-4">¿Tu hijo tiene entre 8 y 14 años? Nuestros cursos están diseñados específicamente para estas etapas.</p>
                            <Link href="/programa" className="text-[#FF6B35] font-bold hover:underline">
                                Ver Programa de Estudios InnovaKids →
                            </Link>
                        </div>

                        <h2 id="herramientas" className="scroll-mt-32 text-3xl font-bold text-[#2D3436] mt-12 mb-6">4. Las 10 Mejores Herramientas de IA para Niños</h2>
                        <p>Estas son las herramientas que usamos en nuestras clases:</p>
                        <ol>
                            <li><strong>ChatGPT (OpenAI):</strong> El estándar de oro. Ideal para lluvia de ideas y escribir historias.</li>
                            <li><strong>Midjourney:</strong> La mejor calidad de imagen. Para niños artistas.</li>
                            <li><strong>Leonardo.ai:</strong> Alternativa gratuita y muy potente para generación de imágenes.</li>
                            <li><strong>Suno.ai:</strong> Crea canciones completas (letra, voz, música) en segundos. ¡A los niños les encanta!</li>
                            <li><strong>ElevenLabs:</strong> Clonación de voz. Pueden hacer que su computador hable con su propia voz.</li>
                            <li><strong>Scratch + IA:</strong> Extensiones de IA para la plataforma de programación más popular.</li>
                            <li><strong>Canva Magic Studio:</strong> Diseño gráfico asistido por IA.</li>
                            <li><strong>Luma Dream Machine:</strong> Para crear videos cortos y animaciones 3D.</li>
                            <li><strong>NotebookLM:</strong> Para estudiantes más grandes, convierte apuntes en podcasts.</li>
                            <li><strong>V0 (Vercel):</strong> Para crear interfaces de sitios web describiéndolas (avanzado).</li>
                        </ol>

                        <h2 id="actividades" className="scroll-mt-32 text-3xl font-bold text-[#2D3436] mt-12 mb-6">5. Actividades de IA para hacer en casa</h2>
                        <p>Prueba esta actividad hoy mismo:</p>
                        <h3 className="text-xl font-bold mt-4">Actividad: "El Cuento Infinito"</h3>
                        <p><strong>Herramienta:</strong> ChatGPT (Gratis)</p>
                        <p><strong>Pasos:</strong></p>
                        <ol>
                            <li>Tu hijo elige un tema (ej: Dinosaurios en el espacio).</li>
                            <li>Le pide a la IA: "Escribe el inicio de una historia sobre dinosaurios espaciales, pero detente en la parte más emocionante".</li>
                            <li>Tu hijo lee y escribe qué pasa después.</li>
                            <li>Le pide a la IA: "Continúa la historia basándote en lo que escribí".</li>
                        </ol>

                        <h2 id="elegir-curso" className="scroll-mt-32 text-3xl font-bold text-[#2D3436] mt-12 mb-6">6. Cómo elegir un buen curso de IA</h2>
                        <p>No todos los cursos son iguales. Busca esto:</p>
                        <ul>
                            <li><strong>Clases en VIVO:</strong> Los videos grabados aburren a los niños. Necesitan interacción.</li>
                            <li><strong>Grupos Pequeños:</strong> Máximo 5-8 alumnos. Si son 30, tu hijo es invisible.</li>
                            <li><strong>Proyectos, no teoría:</strong> Deben terminar la clase con algo creado (una imagen, un juego).</li>
                            <li><strong>Seguridad:</strong> Instructores capacitados que enseñen uso ético.</li>
                        </ul>

                        <h2 id="faq" className="scroll-mt-32 text-3xl font-bold text-[#2D3436] mt-12 mb-6">7. Preguntas Frecuentes</h2>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-lg">¿Es segura la IA para niños?</h4>
                                <p>Sí, bajo supervisión. Plataformas como ChatGPT tienen filtros, pero la supervisión parental y la educación sobre seguridad digital son clave. Eso es lo primero que enseñamos.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">¿Mi hijo necesita saber programar?</h4>
                                <p>No. La IA permite crear software usando lenguaje natural (español). Es el mejor momento para entrar a la tecnología sin barreras técnicas.</p>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="mt-16 p-8 bg-[#1A1A2E] rounded-3xl text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar el futuro de tu hijo?</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                                Inscríbelo en el programa Vibe Explorer. 10 clases en vivo, profesores expertos, garantía de satisfacción.
                            </p>
                            <Link href="/#inversion">
                                <Button size="lg" className="bg-[#FF6B35] hover:bg-[#ff8659] text-white px-8 py-6 rounded-full text-lg shadow-xl shadow-orange-500/20">
                                    Ver Fechas y Precios <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Inteligencia Artificial para Niños: Guía Completa 2026",
                        "image": "https://www.innovakidslatam.com/hero-child-bg.png",
                        "author": {
                            "@type": "Organization",
                            "name": "InnovaKids"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "InnovaKids",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.innovakidslatam.com/logo.png"
                            }
                        },
                        "datePublished": "2026-02-01",
                        "dateModified": "2026-02-12"
                    })
                }}
            />
        </>
    )
}
