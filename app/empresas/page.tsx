import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { B2BEditorialPage } from "@/components/b2b-editorial-page"

export const metadata: Metadata = {
    title: "IA para Empresas · RSE y beneficio corporativo | InnovaKids",
    description:
        "Programa de IA para los hijos de tus colaboradores: beneficio corporativo medible, dashboard de impacto e informe ESG anual. Casos con Fundación Esperanza, Entel y más.",
    keywords: [
        "ia para empresas",
        "beneficio corporativo ia",
        "rse educacion ia",
        "becas corporativas ia niños",
        "reporte esg educacion",
        "innovakids empresas",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/empresas",
    },
    openGraph: {
        title: "IA para Empresas · RSE con impacto medible | InnovaKids",
        description:
            "Becas de IA para hijos de colaboradores, dashboard por empresa e informe anual de impacto ESG. Agenda con el equipo B2B.",
        url: "https://www.innovakidslatam.com/empresas",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Programa IA corporativo RSE — InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "IA para Empresas · RSE con impacto medible | InnovaKids",
        description:
            "Beneficio corporativo de IA para los hijos de tus colaboradores. Informe ESG anual.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    robots: { index: true, follow: true },
}

export default function EmpresasPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF]">
                <B2BEditorialPage
                    pill="División · Empresas"
                    numeral="III"
                    headline={{
                        pre: "RSE con impacto real",
                        emphasis: "en las familias",
                        post: "de tus colaboradores.",
                    }}
                    lead="Convertimos tu presupuesto de beneficios, acción social o sostenibilidad en una ventaja visible y medible: los hijos de tu gente aprenden IA y tú recibes métricas listas para reportería ESG."
                    stats={[
                        { n: "+6", l: "empresas en convenio activo" },
                        { n: "ESG", l: "reportería anual incluida" },
                        { n: "100%", l: "online · para todo el país" },
                    ]}
                    offer={{
                        title: "Qué recibe tu empresa",
                        items: [
                            {
                                k: "Becas",
                                t: "Para hijos de colaboradores",
                                d: "Cupos becados negociados en tramos corporativos. Tu equipo de personas los distribuye por mérito, sorteo o política interna.",
                            },
                            {
                                k: "Dashboard",
                                t: "Panel privado por empresa",
                                d: "Seguimiento de uso, asistencia y proyectos completados por cohorte. Visibilidad en tiempo real para el área de beneficios o RSE.",
                            },
                            {
                                k: "Evento",
                                t: "Kickoff co-branded con tu marca",
                                d: "Sesión de lanzamiento para colaboradores y sus hijos, con logo de la empresa en la plataforma y materiales del programa.",
                            },
                            {
                                k: "Reporte",
                                t: "Informe anual para ESG",
                                d: "Documento con métricas de cobertura, impacto educativo y testimonios — formato listo para integrar a tu reporte de sostenibilidad.",
                            },
                        ],
                    }}
                    process={[
                        { n: "01", t: "Reunión B2B", d: "Mapeamos presupuesto, objetivos y segmento de colaboradores." },
                        { n: "02", t: "Propuesta corporativa", d: "Tramos de becas, branding y métricas personalizadas." },
                        { n: "03", t: "Lanzamiento", d: "Kickoff, inscripciones y reportería mensual automática." },
                    ]}
                    closing={{
                        title: "Habla con el equipo B2B.",
                        sub: "Te enviamos la propuesta corporativa con valores por tramo de becas y ejemplo de reporte ESG en 3 días hábiles.",
                        cta: "Contactar equipo B2B",
                        href: "https://wa.me/56964754219?text=Hola,%20represento%20una%20empresa%20y%20quiero%20una%20propuesta%20B2B.",
                    }}
                />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
