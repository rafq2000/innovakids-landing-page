import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "La Reina",
    slug: "la-reina",
    descripcion: "Servicio de kinesiología en La Reina. Cobertura en La Reina Alta, Príncipe de Gales, Larraín y Plaza Egaña. Recuperación sin salir de casa.",
    poblacion: "La Reina combina tranquilidad y naturaleza, ideal para procesos de rehabilitación domiciliaria pausados y efectivos.",
    sectores: [
        "La Reina Alta",
        "Príncipe de Gales",
        "Avenida Ossa",
        "Plaza Egaña",
        "Larraín",
        "Parque Padre Hurtado",
        "Villa La Reina",
    ],
    caracteristicas: [
        "Atención en toda La Reina",
        "Kinesiología Respiratoria Infantil",
        "Rehabilitación Geriátrica Exclusiva",
        "Tecnología portátil",
        "Evaluación inicial gratis",
        "Boletas de honorarios médicas",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | KINEUM`,
    description: `Kinesiología a domicilio en ${comunaData.nombre}. Especialistas en rehabilitación en La Reina Alta, Príncipe de Gales y Plaza Egaña.`,
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        "kine la reina alta",
        "kinesiologo principe de gales",
        "rehabilitacion plaza egaña",
    ],
    openGraph: {
        title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | KINEUM`,
        description: `Recuperación kinesiológica en su hogar en La Reina. Agende su sesión.`,
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function LaReinaPage() {
    return <ComunaPage data={comunaData} />
}
