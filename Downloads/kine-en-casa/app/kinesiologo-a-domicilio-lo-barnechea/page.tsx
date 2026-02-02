import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Lo Barnechea",
    slug: "lo-barnechea",
    descripcion: "Llegamos a todo Lo Barnechea: La Dehesa, Los Trapenses, El Arrayán y Portal La Dehesa. Kinesiología a domicilio sin recargos por distancia.",
    poblacion: "Cubrimos las zonas más extensas de Lo Barnechea, garantizando puntualidad y equipo completo en su domicilio.",
    sectores: [
        "La Dehesa",
        "Los Trapenses",
        "El Arrayán",
        "Portal La Dehesa",
        "Cerro 18",
        "El Huinganal",
        "Santa Blanca",
    ],
    caracteristicas: [
        "Cobertura total en La Dehesa",
        "Kinesiólogos con movilización propia",
        "Trato preferente adulto mayor",
        "Kinesiología Traumatológica y Deportiva",
        "Agenda rápida",
        "Boletas para reembolso",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | La Dehesa | KINEUM`,
    description: `Kinesiología en La Dehesa y todo ${comunaData.nombre}. Kinesiólogos a domicilio en Los Trapenses y El Arrayán. Rehabilitación traumatológica y respiratoria.`,
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        "kinesiologo la dehesa",
        "kinesiologia a domicilio los trapenses",
        "rehabilitacion el huinganal",
        "fisioterapia lo barnechea",
    ],
    openGraph: {
        title: `Kinesiólogo a Domicilio en La Dehesa y ${comunaData.nombre} | KINEUM`,
        description: `Servicio kinesiológico premium en Lo Barnechea. La Dehesa, Los Trapenses.`,
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function LoBarnecheaPage() {
    return <ComunaPage data={comunaData} />
}
