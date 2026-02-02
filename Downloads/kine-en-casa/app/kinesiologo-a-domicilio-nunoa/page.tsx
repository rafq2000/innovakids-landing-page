import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Ñuñoa",
    slug: "nunoa",
    descripcion: "Kinesiología a domicilio en Ñuñoa. Atendemos Plaza Ñuñoa, Irarrázaval, Simón Bolívar y alrededores. Rehabilitación profesional cerca de ti.",
    poblacion: "Ñuñoa es una comuna residencial que valora la salud y el bienestar. Llevamos la clínica a tu departamento o casa.",
    sectores: [
        "Plaza Ñuñoa",
        "Avenida Irarrázaval",
        "Simón Bolívar",
        "Parque Bustamante",
        "Villa Frei",
        "Barrio Italia",
        "Campus Oriente",
    ],
    caracteristicas: [
        "Kinesiólogos cercanos a tu sector",
        "Especialistas en KTR (Respiratorio)",
        "Precios competitivos",
        "Atención fines de semana",
        "Rehabilitación neurológica",
        "Reembolso en Isapres",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | KINEUM`,
    description: `Kinesiología a domicilio en ${comunaData.nombre}. Rehabilitación kinesiológica en Plaza Ñuñoa, Irarrázaval y Simón Bolívar. Reserva tu hora hoy.`,
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        "kine plaza ñuñoa",
        "rehabilitación irarrázaval",
        "kinesiologo barrio italia",
    ],
    openGraph: {
        title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | KINEUM`,
        description: `Expertos en kinesiología a su hogar en Ñuñoa. Agenda online.`,
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function NunoaPage() {
    return <ComunaPage data={comunaData} />
}
