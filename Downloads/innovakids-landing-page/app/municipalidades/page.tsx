import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { B2BEditorialPage } from "@/components/b2b-editorial-page"

export const metadata: Metadata = {
    title: "IA para Municipalidades · Alfabetización digital | InnovaKids",
    description:
        "Programa de alfabetización en IA para niños de tu comuna, con reportes SEP y certificados verificables. Cobertura en 4 regiones de LATAM.",
    keywords: [
        "ia para municipalidades",
        "alfabetizacion digital comunas",
        "programa ia municipal",
        "becas ia niños comuna",
        "innovakids municipios",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/municipalidades",
    },
    openGraph: {
        title: "IA para Municipalidades · Alfabetización digital medible | InnovaKids",
        description:
            "Becas de IA para niños de la comuna, reportes de cobertura SEP y co-branding municipal. Solicita una propuesta edil.",
        url: "https://www.innovakidslatam.com/municipalidades",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Alfabetización en IA para municipalidades — InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "IA para Municipalidades · Alfabetización digital medible | InnovaKids",
        description:
            "Becas de IA para niños de la comuna con reportes SEP y co-branding.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    robots: { index: true, follow: true },
}

export default function MunicipalidadesPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF]">
                <B2BEditorialPage
                    pill="División · Municipalidades"
                    numeral="II"
                    headline={{
                        pre: "Alfabetización digital",
                        emphasis: "medible",
                        post: "para tu comuna.",
                    }}
                    lead="Escalamos el programa a grupos prioritarios de la comuna y entregamos indicadores de impacto cada trimestre. Tu equipo DAEM, DEM o corporación municipal recibe reportes listos para presentar."
                    stats={[
                        { n: "4", l: "regiones con cobertura activa" },
                        { n: "100%", l: "online · asíncrono + en vivo" },
                        { n: "SEP", l: "reportes compatibles" },
                    ]}
                    offer={{
                        title: "Qué incluye el convenio municipal",
                        items: [
                            {
                                k: "Becas",
                                t: "Acceso 100% para niños de la comuna",
                                d: "Cupos becados en cohortes regulares, con plataforma, clases en vivo y grabaciones. Sin letra chica y sin costo para las familias.",
                            },
                            {
                                k: "Cobertura",
                                t: "Reportes por territorio y colegio",
                                d: "Informes con desagregación por sector, colegio de origen y nivel. Compatibles con la reportería SEP del sostenedor.",
                            },
                            {
                                k: "Certificación",
                                t: "Diploma verificable por estudiante",
                                d: "Cada participante recibe un certificado con QR verificable en nuestro dominio, aceptado por colegios y universidades.",
                            },
                            {
                                k: "Imagen",
                                t: "Co-branding con la municipalidad",
                                d: "El logo municipal aparece en materiales, certificado y landing del convenio. Entregamos piezas gráficas listas para prensa local.",
                            },
                        ],
                    }}
                    process={[
                        { n: "01", t: "Mesa técnica", d: "Levantamos necesidades con DAEM / DEM y equipo social." },
                        { n: "02", t: "Propuesta edil", d: "Presentamos alcance, plazos y valor por estudiante." },
                        { n: "03", t: "Convenio anual", d: "Firmamos, lanzamos cohorte piloto y reportamos trimestralmente." },
                    ]}
                    closing={{
                        title: "Solicita una propuesta edil.",
                        sub: "Preparamos una propuesta personalizada para tu comuna en 5 días hábiles, con valores por tramo de becas y hoja de ruta anual.",
                        cta: "Hablar con el equipo municipal",
                        href: "https://wa.me/56964754219?text=Hola,%20represento%20una%20municipalidad%20y%20quiero%20una%20propuesta%20edil.",
                    }}
                />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
