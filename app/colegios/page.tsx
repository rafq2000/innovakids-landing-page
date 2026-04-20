import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { B2BEditorialPage } from "@/components/b2b-editorial-page"

export const metadata: Metadata = {
    title: "IA para Colegios · Programa llave en mano | InnovaKids",
    description:
        "Integra IA a tu currículo sin contratar especialistas. Instructores propios, material listo, reportes para dirección y apoderados. +12 colegios activos en LATAM.",
    keywords: [
        "ia para colegios",
        "curso ia colegios",
        "programa ia colegios",
        "ia en el aula",
        "inteligencia artificial colegios chile",
        "innovakids colegios",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/colegios",
    },
    openGraph: {
        title: "IA para Colegios · Programa llave en mano | InnovaKids",
        description:
            "Integra IA como asignatura sin contratar especialistas. Plataforma, instructores y reportes incluidos. Agenda una demo con dirección.",
        url: "https://www.innovakidslatam.com/colegios",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Programa de IA para colegios — InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "IA para Colegios · Programa llave en mano | InnovaKids",
        description:
            "Integra IA sin contratar especialistas. Instructores, plataforma y reportes incluidos.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    robots: { index: true, follow: true },
}

export default function ColegiosPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF]">
                <B2BEditorialPage
                    pill="División · Colegios"
                    numeral="I"
                    headline={{
                        pre: "IA como asignatura,",
                        emphasis: "sin contratar",
                        post: "especialistas.",
                    }}
                    lead="Un programa llave en mano que se integra a tu currículo. Nosotros ponemos los instructores, la plataforma, los proyectos y los reportes. Ustedes ponen el aula."
                    stats={[
                        { n: "+12", l: "colegios activos" },
                        { n: "8-17", l: "rango etario cubierto" },
                        { n: "4", l: "sesiones de formación docente" },
                    ]}
                    offer={{
                        title: "Qué entregamos al colegio",
                        items: [
                            {
                                k: "Currículo",
                                t: "Programa modular por niveles",
                                d: "Ocho ciclos secuenciales calibrados para básica media y enseñanza media, con trayectoria desde prompts hasta agentes IA.",
                            },
                            {
                                k: "Plataforma",
                                t: "Proyectos, rúbricas y evaluación",
                                d: "LMS propio con proyectos entregables, rúbricas por nivel y panel docente para seguimiento individual del estudiante.",
                            },
                            {
                                k: "Reportes",
                                t: "Visibilidad para dirección y apoderados",
                                d: "Informes mensuales de avance, asistencia y proyectos finalizados. Los apoderados reciben un resumen trimestral por correo.",
                            },
                            {
                                k: "Docentes",
                                t: "Formación en 4 sesiones (opcional)",
                                d: "Capacitamos a profesores del colegio para que puedan co-facilitar o reemplazar a nuestros instructores en el mediano plazo.",
                            },
                        ],
                    }}
                    process={[
                        { n: "01", t: "Reunión con dirección", d: "Entendemos cursos, horarios y objetivos pedagógicos." },
                        { n: "02", t: "Propuesta y piloto", d: "Diseñamos el programa y corremos un piloto con un curso." },
                        { n: "03", t: "Rollout", d: "Escalamos a todos los niveles con instructores + plataforma." },
                    ]}
                    closing={{
                        title: "Agenda una demo con dirección.",
                        sub: "Te mostramos la plataforma, los proyectos reales de alumnos actuales y la propuesta económica por sede.",
                        cta: "Solicitar demo B2B",
                        href: "https://wa.me/56964754219?text=Hola,%20represento%20un%20colegio%20y%20quiero%20agendar%20una%20demo.",
                    }}
                />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
