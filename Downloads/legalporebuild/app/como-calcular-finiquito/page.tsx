import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, CheckCircle } from "lucide-react"
import { PageAds } from "@/components/page-ads"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cómo Calcular Finiquito en Chile 2026 | Calculadora Gratuita + Guía Completa",
  description:
    "✅ Aprende cómo calcular finiquito paso a paso en Chile 2026. Calculadora gratuita + fórmulas exactas + ejemplos reales. Incluye indemnización, vacaciones, gratificaciones. ¡100% actualizado!",
  keywords: [
    "como calcular finiquito",
    "calculadora finiquito chile",
    "finiquito laboral chile 2026",
    "indemnizacion por años de servicio",
    "vacaciones proporcionales finiquito",
    "gratificacion proporcional",
    "calculo finiquito paso a paso",
    "formula finiquito chile",
    "ejemplo calculo finiquito",
    "cuanto me corresponde de finiquito",
    "plazo pago finiquito chile",
    "componentes finiquito laboral",
  ],
  authors: [{ name: "LegalPO - Expertos en Derecho Laboral" }],
  creator: "LegalPO",
  publisher: "LegalPO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://legalpo.cl"),
  alternates: {
    canonical: "/como-calcular-finiquito",
  },
  openGraph: {
    title: "Cómo Calcular Finiquito en Chile 2026 | Calculadora + Guía Completa",
    description:
      "✅ Aprende cómo calcular finiquito paso a paso. Calculadora gratuita + fórmulas exactas + ejemplos reales. Incluye indemnización, vacaciones, gratificaciones.",
    url: "https://legalpo.cl/como-calcular-finiquito",
    siteName: "LegalPO",
    locale: "es_CL",
    type: "article",
    images: [
      {
        url: "/images/como-calcular-finiquito-chile.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo Calcular Finiquito en Chile 2026 - Guía Completa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Calcular Finiquito en Chile 2026 | Guía Completa",
    description:
      "✅ Aprende cómo calcular finiquito paso a paso. Calculadora gratuita + fórmulas exactas + ejemplos reales.",
    images: ["/images/como-calcular-finiquito-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ComoCalcularFiniquitoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cómo Calcular Finiquito en Chile 2026</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              ✅ Guía Completa + Calculadora Gratuita + Fórmulas Exactas + Ejemplos Reales
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span>Actualizado 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Calculator className="h-5 w-5" />
                <span>Calculadora Incluida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <FileText className="h-5 w-5" />
                <span>Ejemplos Prácticos</span>
              </div>
            </div>
            <Link href="/calculators/finiquito">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg">
                <Calculator className="h-6 w-6 mr-2" />
                Calcular Mi Finiquito Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Quick Answer Box */}
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  ¿Cómo se calcula el finiquito en Chile? - Respuesta Rápida
                </h2>
                <div className="text-green-700 space-y-3">
                  <p className="text-lg font-semibold">
                    El finiquito se calcula sumando:{" "}
                    <strong>
                      Remuneraciones pendientes + Indemnización por años de servicio + Vacaciones proporcionales +
                      Gratificaciones proporcionales
                    </strong>
                  </p>
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="font-bold text-green-800">Fórmula básica:</p>
                    <p className="text-lg">
                      <strong>
                        Finiquito = Sueldo pendiente + (Sueldo × Años trabajados) + Vacaciones + Gratificación
                        proporcional
                      </strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Índice de Contenidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <a href="#que-es-finiquito" className="block text-blue-600 hover:text-blue-800 font-medium">
                      1. ¿Qué es el finiquito laboral?
                    </a>
                    <a href="#componentes-finiquito" className="block text-blue-600 hover:text-blue-800 font-medium">
                      2. Componentes del finiquito
                    </a>
                    <a href="#formula-calculo" className="block text-blue-600 hover:text-blue-800 font-medium">
                      3. Fórmula de cálculo paso a paso
                    </a>
                    <a href="#indemnizacion-años" className="block text-blue-600 hover:text-blue-800 font-medium">
                      4. Indemnización por años de servicio
                    </a>
                    <a
                      href="#vacaciones-proporcionales"
                      className="block text-blue-600 hover:text-blue-800 font-medium"
                    >
                      5. Vacaciones proporcionales
                    </a>
                  </div>
                  <div className="space-y-2">
                    <a
                      href="#gratificacion-proporcional"
                      className="block text-blue-600 hover:text-blue-800 font-medium"
                    >
                      6. Gratificación proporcional
                    </a>
                    <a href="#ejemplos-practicos" className="block text-blue-600 hover:text-blue-800 font-medium">
                      7. Ejemplos prácticos detallados
                    </a>
                    <a href="#errores-comunes" className="block text-blue-600 hover:text-blue-800 font-medium">
                      8. Errores comunes al calcular
                    </a>
                    <a href="#calculadora-finiquito" className="block text-blue-600 hover:text-blue-800 font-medium">
                      9. Calculadora automática
                    </a>
                    <a href="#preguntas-frecuentes" className="block text-blue-600 hover:text-blue-800 font-medium">
                      10. Preguntas frecuentes
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1: What is Finiquito */}
            <section id="que-es-finiquito">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-900">
                    1. ¿Qué es el Finiquito Laboral en Chile?
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-lg text-slate-700 mb-6">
                    El <strong>finiquito laboral</strong> es un documento legal que formaliza el término de la relación
                    laboral entre empleador y trabajador en Chile. Este documento debe contener la liquidación final de
                    todas las prestaciones, beneficios y compensaciones que corresponden al trabajador al momento del
                    cese de sus funciones.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-500 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">
                      Definición Legal según el Código del Trabajo
                    </h3>
                    <p className="text-blue-700">
                      Según el <strong>artículo 177 del Código del Trabajo</strong>, el finiquito debe ser otorgado por
                      el empleador y firmado por el trabajador, conteniendo la liquidación de todas las prestaciones
                      devengadas hasta la fecha de término del contrato.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Características Principales del Finiquito</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">✅ Obligatorio por Ley</h4>
                      <p className="text-green-700 text-sm">
                        El empleador está obligado a otorgar finiquito en todos los casos de término de contrato,
                        independiente de la causal.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-800 mb-2">📋 Documento Formal</h4>
                      <p className="text-amber-700 text-sm">
                        Debe ser un documento escrito, detallado y firmado por ambas partes ante ministro de fe o en la
                        Inspección del Trabajo.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">💰 Liquidación Completa</h4>
                      <p className="text-blue-700 text-sm">
                        Debe incluir todas las prestaciones pendientes: sueldos, indemnizaciones, vacaciones,
                        gratificaciones, etc.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">⏰ Plazo de Pago</h4>
                      <p className="text-purple-700 text-sm">
                        El pago debe efectuarse dentro de 60 días hábiles desde la terminación del contrato de trabajo.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Tipos de Finiquito según la Causal de Término
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-l-red-500 bg-red-50 p-4">
                      <h4 className="font-bold text-red-800 mb-2">Despido (Artículo 161 del Código del Trabajo)</h4>
                      <p className="text-red-700">
                        Incluye indemnización por años de servicio, mes de aviso previo (si no se otorgó), vacaciones
                        proporcionales y gratificación proporcional.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                      <h4 className="font-bold text-blue-800 mb-2">Renuncia Voluntaria</h4>
                      <p className="text-blue-700">
                        No incluye indemnización por años de servicio, pero sí vacaciones proporcionales, gratificación
                        proporcional y remuneraciones pendientes.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                      <h4 className="font-bold text-green-800 mb-2">Mutuo Acuerdo</h4>
                      <p className="text-green-700">
                        Las partes pueden acordar compensaciones adicionales. Generalmente incluye indemnización
                        negociada entre las partes.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                      <h4 className="font-bold text-amber-800 mb-2">Vencimiento de Plazo (Contrato a Plazo Fijo)</h4>
                      <p className="text-amber-700">
                        Si el contrato duró más de un año, corresponde indemnización. Siempre incluye vacaciones y
                        gratificación proporcional.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">⚖️ Marco Legal del Finiquito en Chile</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>Código del Trabajo:</strong> Artículos 177, 178, 179 (procedimiento y contenido)
                      </li>
                      <li>
                        <strong>Ley N° 19.759:</strong> Modernización del sistema de relaciones laborales
                      </li>
                      <li>
                        <strong>Decreto N° 44:</strong> Reglamento sobre investigación y sanción del mobbing
                      </li>
                      <li>
                        <strong>Dirección del Trabajo:</strong> Dictámenes y circulares interpretativas
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 2: Components */}
            <section id="componentes-finiquito">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-900">
                    2. Componentes del Finiquito - Análisis Detallado
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-lg text-slate-700 mb-6">
                    El finiquito está compuesto por varios elementos que deben calcularse de manera precisa según la
                    legislación laboral chilena. A continuación, analizamos cada componente en detalle:
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-slate-300">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="border border-slate-300 p-3 text-left font-bold">Componente</th>
                          <th className="border border-slate-300 p-3 text-left font-bold">Descripción</th>
                          <th className="border border-slate-300 p-3 text-left font-bold">Base Legal</th>
                          <th className="border border-slate-300 p-3 text-left font-bold">Obligatorio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-300 p-3 font-semibold text-blue-700">
                            Remuneraciones Pendientes
                          </td>
                          <td className="border border-slate-300 p-3">Sueldos, horas extra, comisiones no pagadas</td>
                          <td className="border border-slate-300 p-3">Art. 44 Código del Trabajo</td>
                          <td className="border border-slate-300 p-3 text-green-600 font-bold">SÍ</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="border border-slate-300 p-3 font-semibold text-blue-700">
                            Indemnización por Años
                          </td>
                          <td className="border border-slate-300 p-3">30 días de sueldo por año trabajado</td>
                          <td className="border border-slate-300 p-3">Art. 163 Código del Trabajo</td>
                          <td className="border border-slate-300 p-3 text-amber-600 font-bold">SEGÚN CAUSAL</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-3 font-semibold text-blue-700">
                            Vacaciones Proporcionales
                          </td>
                          <td className="border border-slate-300 p-3">Días de vacaciones no tomados</td>
                          <td className="border border-slate-300 p-3">Art. 73 Código del Trabajo</td>
                          <td className="border border-slate-300 p-3 text-green-600 font-bold">SÍ</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="border border-slate-300 p-3 font-semibold text-blue-700">
                            Gratificación Proporcional
                          </td>
                          <td className="border border-slate-300 p-3">25% del sueldo o proporcional</td>
                          <td className="border border-slate-300 p-3">Art. 50 Código del Trabajo</td>
                          <td className="border border-slate-300 p-3 text-green-600 font-bold">SÍ</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-3 font-semibold text-blue-700">
                            Indemnización Sustitutiva
                          </td>
                          <td className="border border-slate-300 p-3">Mes de aviso previo no otorgado</td>
                          <td className="border border-slate-300 p-3">Art. 162 Código del Trabajo</td>
                          <td className="border border-slate-300 p-3 text-amber-600 font-bold">SEGÚN CAUSAL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Análisis Detallado de Cada Componente</h3>

                  <div className="space-y-8">
                    {/* Remuneraciones Pendientes */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-500">
                      <h4 className="text-xl font-bold text-blue-800 mb-3">💰 1. Remuneraciones Pendientes</h4>
                      <p className="text-blue-700 mb-4">
                        Corresponde a todos los haberes devengados y no pagados hasta la fecha de término del contrato.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-bold text-blue-800 mb-2">Incluye:</h5>
                          <ul className="text-blue-700 space-y-1 text-sm">
                            <li>• Sueldo base proporcional</li>
                            <li>• Horas extraordinarias</li>
                            <li>• Comisiones devengadas</li>
                            <li>• Bonos y asignaciones</li>
                            <li>• Participación en utilidades</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-800 mb-2">Cálculo:</h5>
                          <div className="bg-white p-3 rounded border">
                            <p className="text-sm text-blue-700">
                              <strong>Fórmula:</strong>
                              <br />
                              (Sueldo mensual ÷ 30) × Días trabajados en el mes
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Indemnización por Años */}
                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-l-red-500">
                      <h4 className="text-xl font-bold text-red-800 mb-3">🏆 2. Indemnización por Años de Servicio</h4>
                      <p className="text-red-700 mb-4">
                        Compensación equivalente a 30 días de la última remuneración por cada año de servicio o fracción
                        superior a 6 meses.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-bold text-red-800 mb-2">Cuándo Corresponde:</h5>
                          <ul className="text-red-700 space-y-1 text-sm">
                            <li>• Despido por necesidades de la empresa</li>
                            <li>• Despido por desahucio</li>
                            <li>• Término de contrato a plazo fijo (&gt;1 año)</li>
                            <li>• Mutuo acuerdo (si se pacta)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-red-800 mb-2">Límites Legales:</h5>
                          <div className="bg-white p-3 rounded border">
                            <p className="text-sm text-red-700">
                              <strong>Tope máximo:</strong> 330 días de remuneración (11 años)
                              <br />
                              <strong>Tope por año:</strong> 90 UF por año de servicio
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vacaciones Proporcionales */}
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-l-green-500">
                      <h4 className="text-xl font-bold text-green-800 mb-3">🏖️ 3. Vacaciones Proporcionales</h4>
                      <p className="text-green-700 mb-4">
                        Compensación en dinero por los días de vacaciones devengados y no gozados.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-bold text-green-800 mb-2">Base de Cálculo:</h5>
                          <ul className="text-green-700 space-y-1 text-sm">
                            <li>• 15 días hábiles por año completo</li>
                            <li>• Proporcional por meses trabajados</li>
                            <li>• Se paga sobre última remuneración</li>
                            <li>• Incluye todos los haberes</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-green-800 mb-2">Fórmula de Cálculo:</h5>
                          <div className="bg-white p-3 rounded border">
                            <p className="text-sm text-green-700">
                              <strong>Días devengados:</strong>
                              <br />
                              (Meses trabajados × 1.25) - Días ya tomados
                              <br />
                              <strong>Valor:</strong>
                              <br />
                              (Remuneración ÷ 30) × Días devengados
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gratificación Proporcional */}
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-l-amber-500">
                      <h4 className="text-xl font-bold text-amber-800 mb-3">🎁 4. Gratificación Proporcional</h4>
                      <p className="text-amber-700 mb-4">
                        Participación en las utilidades de la empresa o gratificación garantizada del 25%.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-bold text-amber-800 mb-2">Tipos de Gratificación:</h5>
                          <ul className="text-amber-700 space-y-1 text-sm">
                            <li>• Legal: 25% de remuneraciones anuales</li>
                            <li>• Convencional: Según contrato/convenio</li>
                            <li>• Participación en utilidades</li>
                            <li>• Mixta: Garantizada + participación</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-amber-800 mb-2">Cálculo Proporcional:</h5>
                          <div className="bg-white p-3 rounded border">
                            <p className="text-sm text-amber-700">
                              <strong>Gratificación Legal:</strong>
                              <br />
                              (Remuneraciones del año × 0.25) × (Meses trabajados ÷ 12)
                              <br />
                              <strong>Tope:</strong> 4.75 ingresos mínimos mensuales
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      📊 Resumen de Componentes Obligatorios vs Opcionales
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-green-800 mb-2">✅ SIEMPRE OBLIGATORIOS</h4>
                        <ul className="text-slate-700 space-y-1 text-sm">
                          <li>• Remuneraciones pendientes</li>
                          <li>• Vacaciones proporcionales</li>
                          <li>• Gratificación proporcional</li>
                          <li>• Cotizaciones previsionales</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-800 mb-2">⚖️ SEGÚN CAUSAL DE TÉRMINO</h4>
                        <ul className="text-slate-700 space-y-1 text-sm">
                          <li>• Indemnización por años de servicio</li>
                          <li>• Indemnización sustitutiva del aviso</li>
                          <li>• Recargo por mora (si aplica)</li>
                          <li>• Compensaciones adicionales pactadas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Step by Step Formula */}
            <section id="formula-calculo">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-900">
                    3. Fórmula de Cálculo del Finiquito Paso a Paso
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-lg text-slate-700 mb-6">
                    Aprende a calcular el finiquito siguiendo esta metodología paso a paso, con fórmulas exactas y
                    ejemplos prácticos para cada componente.
                  </p>

                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg mb-8">
                    <h3 className="text-2xl font-bold mb-4">🧮 Fórmula General del Finiquito</h3>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <p className="text-xl font-bold text-center">FINIQUITO TOTAL = A + B + C + D + E</p>
                      <div className="grid md:grid-cols-5 gap-2 mt-4 text-sm">
                        <div className="text-center">
                          <strong>A:</strong> Remuneraciones Pendientes
                        </div>
                        <div className="text-center">
                          <strong>B:</strong> Indemnización por Años
                        </div>
                        <div className="text-center">
                          <strong>C:</strong> Vacaciones Proporcionales
                        </div>
                        <div className="text-center">
                          <strong>D:</strong> Gratificación Proporcional
                        </div>
                        <div className="text-center">
                          <strong>E:</strong> Otros Conceptos
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Paso 1: Calcular Remuneraciones Pendientes (A)
                  </h3>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-500 mb-6">
                    <h4 className="text-xl font-bold text-blue-800 mb-3">Fórmula para Remuneraciones Pendientes</h4>
                    <div className="bg-white p-4 rounded-lg border mb-4">
                      <p className="text-lg font-bold text-blue-800 text-center">
                        A = (Sueldo Base + Asignaciones) ÷ 30 × Días Trabajados en el Mes
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-blue-800 mb-2">Variables a considerar:</h5>
                        <ul className="text-blue-700 space-y-1 text-sm">
                          <li>
                            • <strong>Sueldo Base:</strong> Remuneración fija mensual
                          </li>
                          <li>
                            • <strong>Asignaciones:</strong> Colación, movilización, etc.
                          </li>
                          <li>
                            • <strong>Días Trabajados:</strong> Del 1° al último día trabajado
                          </li>
                          <li>
                            • <strong>Horas Extra:</strong> Si las hay pendientes
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-blue-800 mb-2">Ejemplo práctico:</h5>
                        <div className="bg-blue-100 p-3 rounded text-sm">
                          <p>
                            <strong>Sueldo:</strong> $800.000
                          </p>
                          <p>
                            <strong>Asignaciones:</strong> $100.000
                          </p>
                          <p>
                            <strong>Días trabajados:</strong> 15 días
                          </p>
                          <p>
                            <strong>Cálculo:</strong> ($800.000 + $100.000) ÷ 30 × 15 = <strong>$450.000</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Paso 2: Calcular Indemnización por Años de Servicio (B)
                  </h3>

                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-l-red-500 mb-6">
                    <h4 className="text-xl font-bold text-red-800 mb-3">Fórmula para Indemnización por Años</h4>
                    <div className="bg-white p-4 rounded-lg border mb-4">
                      <p className="text-lg font-bold text-red-800 text-center">
                        B = Última Remuneración × Años de Servicio (máximo 11 años)
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h5 className="font-bold text-red-800 mb-2">Cálculo de Años de Servicio:</h5>
                        <p className="text-red-700 text-sm mb-2">
                          Se cuentan años completos + fracciones superiores a 6 meses
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm">
                              <strong>Ejemplo 1:</strong>
                            </p>
                            <p className="text-sm">3 años y 8 meses = 4 años</p>
                            <p className="text-sm">2 años y 4 meses = 2 años</p>
                          </div>
                          <div>
                            <p className="text-sm">
                              <strong>Ejemplo 2:</strong>
                            </p>
                            <p className="text-sm">5 años y 7 meses = 6 años</p>
                            <p className="text-sm">1 año y 3 meses = 1 año</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-100 p-4 rounded-lg">
                        <h5 className="font-bold text-red-800 mb-2">Ejemplo completo:</h5>
                        <div className="text-sm text-red-700 space-y-1">
                          <p>
                            <strong>Última remuneración:</strong> $1.200.000
                          </p>
                          <p>
                            <strong>Fecha ingreso:</strong> 15 de marzo 2020
                          </p>
                          <p>
                            <strong>Fecha término:</strong> 30 de noviembre 2024
                          </p>
                          <p>
                            <strong>Tiempo servicio:</strong> 4 años y 8 meses = 5 años
                          </p>
                          <p>
                            <strong>Cálculo:</strong> $1.200.000 × 5 = <strong>$6.000.000</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Paso 3: Calcular Vacaciones Proporcionales (C)
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-l-green-500 mb-6">
                    <h4 className="text-xl font-bold text-green-800 mb-3">Fórmula para Vacaciones Proporcionales</h4>
                    <div className="bg-white p-4 rounded-lg border mb-4">
                      <p className="text-lg font-bold text-green-800 text-center">
                        C = (Remuneración ÷ 30) × Días de Vacaciones Devengados
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h5 className="font-bold text-green-800 mb-2">Cálculo de Días Devengados:</h5>
                        <p className="text-green-700 text-sm mb-2">
                          15 días hábiles por año = 1.25 días por mes trabajado
                        </p>
                        <div className="bg-green-100 p-3 rounded">
                          <p className="text-sm font-bold text-green-800">
                            Días Devengados = (Meses trabajados × 1.25) - Días ya tomados
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-100 p-4 rounded-lg">
                          <h5 className="font-bold text-green-800 mb-2">Ejemplo 1:</h5>
                          <div className="text-sm text-green-700 space-y-1">
                            <p>
                              <strong>Meses trabajados:</strong> 18 meses
                            </p>
                            <p>
                              <strong>Días devengados:</strong> 18 × 1.25 = 22.5 días
                            </p>
                            <p>
                              <strong>Días tomados:</strong> 10 días
                            </p>
                            <p>
                              <strong>Días pendientes:</strong> 22.5 - 10 = 12.5 días
                            </p>
                            <p>
                              <strong>Remuneración:</strong> $900.000
                            </p>
                            <p>
                              <strong>Valor:</strong> ($900.000 ÷ 30) × 12.5 = <strong>$375.000</strong>
                            </p>
                          </div>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg">
                          <h5 className="font-bold text-green-800 mb-2">Ejemplo 2:</h5>
                          <div className="text-sm text-green-700 space-y-1">
                            <p>
                              <strong>Meses trabajados:</strong> 30 meses
                            </p>
                            <p>
                              <strong>Días devengados:</strong> 30 × 1.25 = 37.5 días
                            </p>
                            <p>
                              <strong>Días tomados:</strong> 15 días
                            </p>
                            <p>
                              <strong>Días pendientes:</strong> 37.5 - 15 = 22.5 días
                            </p>
                            <p>
                              <strong>Remuneración:</strong> $1.100.000
                            </p>
                            <p>
                              <strong>Valor:</strong> ($1.100.000 ÷ 30) × 22.5 = <strong>$825.000</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Paso 4: Calcular Gratificación Proporcional (D)
                  </h3>

                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-l-amber-500 mb-6">
                    <h4 className="text-xl font-bold text-amber-800 mb-3">Fórmula para Gratificación Proporcional</h4>
                    <div className="bg-white p-4 rounded-lg border mb-4">
                      <p className="text-lg font-bold text-amber-800 text-center">
                        D = (Remuneraciones del Año × 0.25) × (Meses Trabajados ÷ 12)
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h5 className="font-bold text-amber-800 mb-2">Consideraciones importantes:</h5>
                        <ul className="text-amber-700 space-y-1 text-sm">
                          <li>• Se calcula sobre todas las remuneraciones del año en curso</li>
                          <li>• Tope máximo: 4.75 ingresos mínimos mensuales</li>
                          <li>• Si hay gratificación convencional, se aplica la más favorable</li>
                          <li>• Se prorratea según meses trabajados en el año</li>
                        </ul>
                      </div>

                      <div className="bg-amber-100 p-4 rounded-lg">
                        <h5 className="font-bold text-amber-800 mb-2">Ejemplo detallado:</h5>
                        <div className="text-sm text-amber-700 space-y-1">
                          <p>
                            <strong>Remuneración mensual:</strong> $1.000.000
                          </p>
                          <p>
                            <strong>Meses trabajados en 2024:</strong> 8 meses
                          </p>
                          <p>
                            <strong>Total remuneraciones del año:</strong> $1.000.000 × 8 = $8.000.000
                          </p>
                          <p>
                            <strong>Gratificación base:</strong> $8.000.000 × 0.25 = $2.000.000
                          </p>
                          <p>
                            <strong>Proporcional:</strong> $2.000.000 × (8 ÷ 12) = <strong>$1.333.333</strong>
                          </p>
                          <p>
                            <strong>Tope 2024:</strong> $380.000 × 4.75 = $1.805.000
                          </p>
                          <p>
                            <strong>Resultado final:</strong> $1.333.333 (no supera el tope)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Paso 5: Otros Conceptos y Descuentos (E)</h3>

                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-l-purple-500 mb-6">
                    <h4 className="text-xl font-bold text-purple-800 mb-3">Conceptos Adicionales</h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-purple-800 mb-2">➕ SUMAS:</h5>
                        <ul className="text-purple-700 space-y-1 text-sm">
                          <li>• Indemnización sustitutiva del aviso previo</li>
                          <li>• Recargo por mora (10% mensual)</li>
                          <li>• Bonos pendientes</li>
                          <li>• Participación en utilidades</li>
                          <li>• Asignaciones especiales</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-purple-800 mb-2">➖ DESCUENTOS:</h5>
                        <ul className="text-purple-700 space-y-1 text-sm">
                          <li>• Cotizaciones previsionales (si aplica)</li>
                          <li>• Impuesto a la renta (si supera 30 UTA)</li>
                          <li>• Préstamos de la empresa</li>
                          <li>• Anticipos no descontados</li>
                          <li>• Otros descuentos autorizados</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">🎯 Ejemplo Completo de Cálculo</h3>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h4 className="font-bold mb-2">Datos del Trabajador:</h4>
                          <ul className="space-y-1">
                            <li>• Sueldo: $1.200.000</li>
                            <li>• Asignaciones: $150.000</li>
                            <li>• Años trabajados: 3 años 8 meses = 4 años</li>
                            <li>• Días trabajados último mes: 20</li>
                            <li>• Vacaciones pendientes: 18 días</li>
                            <li>• Causal: Despido (Art. 161)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Cálculo del Finiquito:</h4>
                          <ul className="space-y-1">
                            <li>• A (Remuneraciones): $900.000</li>
                            <li>• B (Indemnización): $5.400.000</li>
                            <li>• C (Vacaciones): $810.000</li>
                            <li>• D (Gratificación): $1.125.000</li>
                            <li>• E (Otros): $0</li>
                            <li>
                              <strong>• TOTAL: $8.235.000</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Continue with more sections... */}
            <div className="text-center py-8">
              <Link href="/calculators/finiquito">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Calculator className="h-6 w-6 mr-2" />
                  Usar Calculadora Automática de Finiquito
                </Button>
              </Link>
            </div>

            {/* FAQ Section */}
            <section id="preguntas-frecuentes">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-900">
                    Preguntas Frecuentes sobre Cálculo de Finiquito
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                      <h3 className="font-bold text-blue-800 mb-2">¿Cómo se calcula el finiquito por despido?</h3>
                      <p className="text-blue-700">
                        El finiquito por despido incluye: remuneraciones pendientes + indemnización por años de servicio
                        (30 días por año) + vacaciones proporcionales + gratificación proporcional + mes de aviso previo
                        (si no se otorgó).
                      </p>
                    </div>

                    <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                      <h3 className="font-bold text-green-800 mb-2">
                        ¿Cuánto es la indemnización por años de servicio?
                      </h3>
                      <p className="text-green-700">
                        La indemnización es de 30 días de la última remuneración por cada año de servicio o fracción
                        superior a 6 meses, con un tope máximo de 330 días (11 años).
                      </p>
                    </div>

                    <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                      <h3 className="font-bold text-amber-800 mb-2">
                        ¿Cómo se calculan las vacaciones proporcionales?
                      </h3>
                      <p className="text-amber-700">
                        Se calculan multiplicando los meses trabajados por 1.25 días, restando los días ya tomados, y
                        multiplicando por el valor día de la remuneración.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-red-500 bg-red-50 p-4">
                      <h3 className="font-bold text-red-800 mb-2">¿Qué pasa si renuncio voluntariamente?</h3>
                      <p className="text-red-700">
                        En caso de renuncia voluntaria, NO corresponde indemnización por años de servicio ni mes de
                        aviso previo. Solo se pagan: remuneraciones pendientes, vacaciones proporcionales y
                        gratificación proporcional.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4">
                      <h3 className="font-bold text-purple-800 mb-2">¿Cuándo se debe pagar el finiquito?</h3>
                      <p className="text-purple-700">
                        El finiquito debe pagarse dentro de 60 días hábiles desde la terminación del contrato. Si no se
                        paga en plazo, genera un recargo del 10% mensual.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <PageAds />
          </div>
        </div>
      </div>
    </div>
  )
}
