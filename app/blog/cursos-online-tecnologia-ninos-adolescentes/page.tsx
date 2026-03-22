import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// SEO Optimizations for Maximum CTR
export const metadata: Metadata = {
    title: "Cursos Online para Niños y Adolescentes de 8 a 17 años (2026) 🚀",
    description: "⭐ ¿Buscas cursos para niños de 10 a 12 años o adolescentes de 14 a 17? Descubre las mejores opciones en programación, videojuegos e IA. ¡Inscripciones abiertas! Grupos reducidos.",
    openGraph: {
        title: "Cursos Online de Tecnología para Niños y Adolescentes",
        description: "Cursos especializados para chicos de 8 a 17 años. Aprende IA, programación web y creación de videojuegos de forma interactiva.",
        images: [{
            url: "/kids-learning-ai-on-computer.jpg",
            width: 1200,
            height: 630,
            alt: "Adolescentes y niños tomando un curso online de tecnología",
        }],
    },
}

export default function CursosAdolescentesPage() {
    return (
        <div className="min-h-screen bg-[#0a1628]">
            <Navigation />

            <article className="pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#4DD0E1] hover:text-[#3BBFD1] transition-colors mb-8 group"
                        >
                            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Volver al blog
                        </Link>

                        <header className="mb-12 text-center lg:text-left">
                            <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-emerald-500/30">
                                Guía Definitiva Educativa
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                                El Mejor <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DD0E1] to-[#3BBFD1]">Curso Online para Niños y Adolescentes</span> (8 a 17 años)
                            </h1>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-gray-400 mb-8 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="font-medium text-white">4.9/5 Reseñas de Padres Universitarios</span>
                                </div>
                                <span className="hidden sm:inline text-gray-600">•</span>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>7 min de lectura</span>
                                </div>
                            </div>

                            <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 border border-gray-800 shadow-[0_0_30px_rgba(77,208,225,0.15)]">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent z-10" />
                                <Image
                                    src="/kids-learning-ai-on-computer.jpg"
                                    alt="Cursos de ia para niños de 14 años Bogotá y el mundo"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                />
                            </div>
                        </header>

                        <div className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-[#4DD0E1]/20 prose-h2:pb-2 prose-h2:mt-12
              prose-h3:text-2xl prose-h3:text-[#4DD0E1]
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-[#4DD0E1] hover:prose-a:text-[#3BBFD1]
              prose-strong:text-white prose-li:text-gray-300">

                            <p className="text-xl text-gray-200">
                                Llega un momento en el que los juegos de computadora ya no son suficientes y las escuelas tradicionales se quedan muy atrás de la frontera tecnológica. Todos los días miles de padres buscan en internet <strong>cursos online para niños</strong> intentando preparar a sus hijos.
                            </p>

                            <p>
                                Ya sea que busques <strong>cursos para niños de 10 a 12 años</strong> intentando despertar su curiosidad temprana, o que necesites específicamente <strong>cursos para adolescentes de 14 a 17 años</strong> (que suelen frustrarse si el material es demasiado infantil), aquí desglosamos la metodología 2026 que realmente funciona.
                            </p>

                            <h2>El reto de enseñar tecnología según la edad</h2>

                            <p>
                                No puedes enseñar programación a un preadolescente de la misma forma que a un niño pequeño. Es el error número uno de muchas academias de "robótica clásica".
                            </p>

                            <h3>Cursos para niños de 8 a 12 años</h3>
                            <p>
                                A esta edad, sus mentes son esponjas hiper visuales. La frustración bloquea el aprendizaje. Por eso, el enfoque debe ser <strong>crear resultados rápidos y sorprendentes</strong>.
                                Mediante plataformas asistidas por IA como las que utilizamos en Innovakids, logramos que los chicos de 10 a 12 años creen mini juegos interactivos o escriban e ilustren sus propios cuentos de storytelling en apenas unas cuantas horas de práctica a la semana.
                            </p>

                            <h3>Cursos para adolescentes de 14 a 17 años</h3>
                            <p>
                                Buscar <em>cursos para adolescentes de 14 años</em>, ya sea en Bogotá, Ciudad de México, o Miami... significa que estás lidiando con jóvenes que exigen propósito. Si no sienten que están construyendo algo "pro", se aburrirán y abandonarán.
                            </p>

                            <p>
                                En esta franja de edad implementamos el programa <strong>Vibe Enterprise</strong> e <strong>Incubadora Tech</strong>. Se trata de clases 100% online y en vivo donde:
                            </p>
                            <ul className="mb-6">
                                <li>Configuran herramientas avanzadas (ChatGPT PRO, Midjourney, Generadores de Código).</li>
                                <li>Diseñan una <em>Landing Page</em> (Sitio Web) para un intento de "startup" real.</li>
                                <li>Exploran el mundo del desarrollo de videojuegos con inteligencia artificial real en vez de copiar código de un manual.</li>
                                <li>Utilizan la IA como Tutor Personal ("Neuro-AI Learning") para rendir mejor en su bachillerato.</li>
                            </ul>

                            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-l-4 border-[#4DD0E1] rounded-r-xl p-6 my-10 shadow-lg">
                                <h3 className="mt-0 text-xl text-white">¿Por qué Online y en Vivo?</h3>
                                <p className="text-gray-300 m-0">
                                    Hemos notado una gran demanda en búsquedas como <em>"cursos para adolescentes de 14 años bogotá"</em>. A veces la mejor academia no está en el barrio vecino. El modelo de Innovakids opera 100% digital, conectando a tu hijo desde cualquier país hispano (o desde USA), con clases en micropantallas de apenas <strong>5 Alumnos</strong> junto a expertos top.
                                </p>
                            </div>

                            <h2>Cursos Prácticos 2026: ¿Qué construyen exactamente?</h2>

                            <p>
                                En Innovakids descartamos la teoría estéril. Este es el currículum de lo que se llevan listo al mundo real:
                            </p>

                            <ol className="mb-8">
                                <li><strong>Proyectos Multiplataforma:</strong> Uso ético y pro-activo de inteligencias artificiales para programar y acelerar tareas del día a día.</li>
                                <li><strong>El Superpoder del Vibe Coding:</strong> Dirigir a la computadora para que cree el software complejo mientas ellos deciden la arquitectura. Ideal para que el grupo de adolescentes se empodere financieramente pronto.</li>
                                <li><strong>Portafolio Digital:</strong> No terminan el curso con "un diploma". Terminan con 3 Apps/juegos publicados accesibles mediante URLs. Algo de qué poder enorgullecerse frente a sus amigos y potenciar su perfil universitario a futuro.</li>
                            </ol>

                            <h2>Reserva Segura: Elimina el Riesgo como Padre</h2>

                            <p>
                                Apostar por la educación online siempre da dudas, más si tratas con adolescentes. Por eso el programa tiene la confianza tan alta que requiere solo <strong>$27 dólares ($25.000 Chile, $540 México, $113mil Colombia)</strong> para reservar el sitio.
                            </p>
                            <p>
                                Y algo crucial: cuentas con <strong>10 días de garantía Incondicional</strong>. Tu hijo/hija asiste a las dos primeras clases reales (Nada de videos pre-grabados, profesor en vivo en Zoom/Meet exclusivo). Si a tu chico no le apasiona, se reembolsa el pago el mismo día. Si le fascina, pagas el resto sin presiones.
                            </p>

                        </div>

                        {/* Premium Call To Action Box (Maximize CTR intent) */}
                        <div className="mt-16 sm:p-12 p-8 bg-[#0a1628] rounded-3xl border-2 border-transparent relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4DD0E1]/80 to-[#3BBFD1]/80 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#4DD0E1] to-transparent pointer-events-none" />
                            <div className="absolute inset-0 border-2 border-t-0 border-b-0 border-[#4DD0E1]/30 rounded-3xl pointer-events-none" />

                            <div className="relative z-10 text-center">
                                <span className="inline-block animate-bounce text-3xl mb-4">🚀</span>
                                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                                    No Dejes que se Queden Atrás
                                </h3>
                                <p className="text-gray-300 md:text-xl text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light text-balance">
                                    Inscribe a tu hijo o adolescente en el curso online de tecnología más premiado y práctico de 2026. <strong>Dile tú mismo "Aprende divirtiéndote"</strong>. Son solo 5 cupos por horario.
                                </p>

                                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                                    <Link
                                        href="/#precio"
                                        className="w-full sm:w-auto text-xl bg-[#4DD0E1] hover:bg-[#3BBFD1] text-[#0a1628] px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 shadow-[0_10px_40px_rgba(77,208,225,0.4)] flex items-center justify-center gap-3"
                                    >
                                        Reserva su Cupón Promocional Hoy
                                    </Link>
                                </div>
                                <div className="mt-6 text-sm text-gray-400">
                                    <span className="text-green-400 mr-2">✓</span>Garantía 10 días de evolución.
                                </div>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <section className="mt-16 border-t border-gray-700 pt-10">
                            <h2 className="text-2xl font-bold text-white mb-6">Artículos Relacionados</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/inteligencia-artificial-para-ninos" className="block p-4 rounded-lg border border-gray-700 hover:border-[#4DD0E1] hover:shadow-md transition-all">
                                    <h3 className="font-semibold text-white">Inteligencia Artificial para Niños: Guía Completa 2026</h3>
                                    <p className="text-sm text-gray-400 mt-1">Todo lo que necesitas saber sobre IA para niños: herramientas, actividades y cómo elegir curso.</p>
                                </Link>
                                <Link href="/ia-ninos-por-edad" className="block p-4 rounded-lg border border-gray-700 hover:border-[#4DD0E1] hover:shadow-md transition-all">
                                    <h3 className="font-semibold text-white">IA para Niños por Edad: Guía Personalizada</h3>
                                    <p className="text-sm text-gray-400 mt-1">Descubre qué herramientas y cursos de IA son ideales según la edad de tu hijo.</p>
                                </Link>
                            </div>
                        </section>

                        {/* CTA */}
                        <section className="mt-12 bg-gradient-to-r from-[#4DD0E1] to-[#3BBFD1] rounded-2xl p-8 text-center">
                            <h2 className="text-2xl font-bold mb-3 text-[#0a1628]">¿Listo para que tu hijo aprenda IA?</h2>
                            <p className="mb-6 text-[#0a1628]/80">Conoce nuestro programa de Inteligencia Artificial para niños y adolescentes.</p>
                            <Link href="/cursos/inteligencia-artificial" className="inline-block bg-[#0a1628] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1a2942] transition-colors">
                                Ver Curso de IA →
                            </Link>
                        </section>

                    </div>
                </div>
            </article>

            <Footer />
        </div>
    )
}
