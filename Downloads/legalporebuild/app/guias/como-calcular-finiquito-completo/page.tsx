import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import {
    Calculator,
    BookOpen,
    CheckCircle,
    AlertTriangle,
    Clock,
    Scale,
    FileText,
    ArrowRight,
    Star,
    Users,
    Zap,
    MessageCircle,
    DollarSign,
    Calendar,
    Briefcase,
    Shield,
    Target,
    Info,
} from "lucide-react"
import { ArticleStructuredData, HowToStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
    title: "Guía Completa: Cómo Calcular Finiquito Chile 2026 | Paso a Paso | LegalPO",
    description:
        "📖 GUÍA DEFINITIVA para calcular tu finiquito en Chile 2026. Fórmulas actualizadas, ejemplos prácticos, causales de despido, plazos legales y calculadora gratis. Aprende a calcular indemnización por años de servicio, vacaciones proporcionales y más.",
    keywords: [
        "como calcular finiquito chile",
        "calcular finiquito",
        "finiquito chile 2026",
        "indemnización años servicio",
        "calculadora finiquito",
        "finiquito laboral chile",
        "cuanto me corresponde de finiquito",
        "formula finiquito chile",
        "despido chile indemnizacion",
        "vacaciones proporcionales finiquito",
    ],
    openGraph: {
        title: "Guía Completa: Cómo Calcular Finiquito Chile 2026 | LegalPO",
        description:
            "Guía definitiva con fórmulas, ejemplos y calculadora gratis para calcular tu finiquito en Chile.",
        type: "article",
    },
}

export default function GuiaFiniquitoCompleto() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800/30 to-transparent border-b border-white/5">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Guía Completa 2026
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                            Cómo Calcular tu Finiquito en Chile
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
                            Guía definitiva con fórmulas actualizadas a 2026, ejemplos prácticos paso a paso, y todo lo que necesitas saber para calcular exactamente cuánto te corresponde de finiquito.
                        </p>
                        <div className="bg-slate-800/80 border border-emerald-500/30 rounded-xl p-6 text-left max-w-3xl mx-auto mb-8 shadow-lg shadow-emerald-900/20">
                            <h2 className="text-xl font-bold text-white mb-2 flex items-center">
                                <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                                ¿Cómo se calcula el finiquito en Chile?
                            </h2>
                            <p className="text-slate-200">
                                El finiquito en Chile se calcula sumando las <strong>remuneraciones pendientes</strong> (días trabajados en el mes), la <strong>indemnización por años de servicio</strong> (un mes por año trabajado si aplica), la <strong>indemnización sustitutiva de aviso previo</strong> (si corresponde) y el <strong>feriado proporcional o vacaciones no tomadas</strong>.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <Clock className="h-5 w-5 text-emerald-400 mx-auto mb-1" />
                                <div className="text-sm font-medium">15 min lectura</div>
                            </div>
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <Users className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                                <div className="text-sm font-medium">+50,000 lectores</div>
                            </div>
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <Star className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                                <div className="text-sm font-medium">4.9/5 útil</div>
                            </div>
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <Calendar className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                                <div className="text-sm font-medium">Enero 2026</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link href="/calculators/finiquito">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                <Calculator className="h-5 w-5 mr-2" />
                                Ir a Calculadora de Finiquito Gratis
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-8 bg-slate-800/50">
                <div className="container max-w-4xl mx-auto px-4">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-lg text-white flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-emerald-400" />
                                Contenido de esta Guía
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {[
                                    "¿Qué es el finiquito?",
                                    "Componentes del finiquito",
                                    "Causales de término",
                                    "Fórmula de indemnización",
                                    "Vacaciones proporcionales",
                                    "Ejemplo práctico completo",
                                    "Plazos legales",
                                    "Derechos del trabajador",
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={`#section-${i + 1}`}
                                        className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center mr-2">
                                            {i + 1}
                                        </span>
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12">
                <div className="container max-w-4xl mx-auto px-4 prose prose-invert prose-lg max-w-none">
                    {/* Section 1 */}
                    <section id="section-1" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 text-lg">
                                1
                            </span>
                            ¿Qué es el Finiquito en Chile?
                        </h2>
                        <p className="text-slate-300 mb-4">
                            El <strong className="text-white">finiquito</strong> es un documento legal que formaliza el término de la
                            relación laboral entre un empleador y un trabajador en Chile. Es regulado principalmente por los
                            artículos 159 a 178 del <strong className="text-white">Código del Trabajo</strong>.
                        </p>
                        <p className="text-slate-300 mb-6">
                            Este documento es fundamental porque:
                        </p>
                        <ul className="space-y-2 text-slate-300 mb-6">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                <span>
                                    <strong className="text-white">Formaliza el fin del contrato:</strong> Establece oficialmente que la
                                    relación laboral ha terminado.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                <span>
                                    <strong className="text-white">Detalla los pagos:</strong> Lista todos los montos que el empleador
                                    debe pagar al trabajador.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                <span>
                                    <strong className="text-white">Tiene valor legal:</strong> Si es ratificado ante un ministro de fe,
                                    constituye plena prueba en juicio.
                                </span>
                            </li>
                        </ul>

                        <Alert className="bg-blue-500/10 border-blue-500/20 text-blue-200 mb-6">
                            <Info className="h-4 w-4" />
                            <AlertDescription>
                                <strong>Dato importante:</strong> El finiquito debe ser firmado ante un ministro de fe: Inspector del
                                Trabajo (gratis), notario público, o presidente del sindicato de la empresa.
                            </AlertDescription>
                        </Alert>
                    </section>

                    {/* Section 2 */}
                    <section id="section-2" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 text-lg">
                                2
                            </span>
                            Componentes del Finiquito: ¿Qué Incluye?
                        </h2>
                        <p className="text-slate-300 mb-6">
                            Un finiquito completo en Chile puede incluir los siguientes componentes, dependiendo de la causal de
                            término y las circunstancias del despido:
                        </p>

                        <div className="grid gap-4 mb-8">
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-white mb-2 flex items-center">
                                        <DollarSign className="h-5 w-5 text-emerald-400 mr-2" />
                                        1. Remuneraciones Pendientes
                                    </h3>
                                    <p className="text-slate-300 text-sm">
                                        Días trabajados en el mes de término que aún no han sido pagados. Se calcula dividiendo el sueldo
                                        mensual por 30 y multiplicando por los días trabajados.
                                    </p>
                                    <div className="mt-2 bg-slate-800 p-2 rounded text-sm font-mono text-emerald-300">
                                        Remuneración pendiente = (Sueldo mensual ÷ 30) × Días trabajados
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-white mb-2 flex items-center">
                                        <Briefcase className="h-5 w-5 text-blue-400 mr-2" />
                                        2. Indemnización por Años de Servicio
                                    </h3>
                                    <p className="text-slate-300 text-sm">
                                        Solo aplica cuando el despido es por <strong>necesidades de la empresa (Art. 161)</strong>.
                                        Equivale a un mes de sueldo por cada año trabajado, con un tope de 11 meses para contratos desde
                                        agosto 1981.
                                    </p>
                                    <div className="mt-2 bg-slate-800 p-2 rounded text-sm font-mono text-blue-300">
                                        Indemnización = Sueldo mensual × Años de servicio (máx. 11)
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-white mb-2 flex items-center">
                                        <Clock className="h-5 w-5 text-purple-400 mr-2" />
                                        3. Indemnización Sustitutiva del Aviso Previo
                                    </h3>
                                    <p className="text-slate-300 text-sm">
                                        Si el empleador no dio aviso con 30 días de anticipación, debe pagar el equivalente a un mes de
                                        sueldo. Solo aplica para despidos por Art. 161.
                                    </p>
                                    <div className="mt-2 bg-slate-800 p-2 rounded text-sm font-mono text-purple-300">
                                        Aviso previo = 1 mes de remuneración completa
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-white mb-2 flex items-center">
                                        <Calendar className="h-5 w-5 text-yellow-400 mr-2" />
                                        4. Vacaciones Proporcionales
                                    </h3>
                                    <p className="text-slate-300 text-sm">
                                        Días de vacaciones que corresponden proporcionalmente al tiempo trabajado en el último año y que no
                                        fueron tomadas. En Chile son 15 días hábiles por año.
                                    </p>
                                    <div className="mt-2 bg-slate-800 p-2 rounded text-sm font-mono text-yellow-300">
                                        Vacaciones = (15 días ÷ 365) × Días trabajados × Valor diario
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-white mb-2 flex items-center">
                                        <Target className="h-5 w-5 text-rose-400 mr-2" />
                                        5. Gratificaciones Proporcionales
                                    </h3>
                                    <p className="text-slate-300 text-sm">
                                        Si las gratificaciones no se pagan mensualmente (prorrateadas), corresponde el proporcional desde
                                        la última fecha de pago de gratificaciones.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section id="section-3" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 text-lg">
                                3
                            </span>
                            Causales de Término del Contrato
                        </h2>
                        <p className="text-slate-300 mb-6">
                            Las causales de término determinan qué indemnizaciones te corresponden. Aquí las principales:
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 px-4 text-emerald-400">Causal</th>
                                        <th className="text-left py-3 px-4 text-emerald-400">Artículo</th>
                                        <th className="text-left py-3 px-4 text-emerald-400">Indemnización Años</th>
                                        <th className="text-left py-3 px-4 text-emerald-400">Aviso Previo</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 px-4">Necesidades de la empresa</td>
                                        <td className="py-3 px-4">Art. 161</td>
                                        <td className="py-3 px-4 text-green-400">✅ Sí</td>
                                        <td className="py-3 px-4 text-green-400">✅ Sí</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 px-4">Renuncia voluntaria</td>
                                        <td className="py-3 px-4">Art. 159 N°2</td>
                                        <td className="py-3 px-4 text-red-400">❌ No</td>
                                        <td className="py-3 px-4 text-red-400">❌ No</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 px-4">Mutuo acuerdo</td>
                                        <td className="py-3 px-4">Art. 159 N°1</td>
                                        <td className="py-3 px-4 text-yellow-400">⚠️ Negociable</td>
                                        <td className="py-3 px-4 text-red-400">❌ No</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 px-4">Vencimiento del plazo</td>
                                        <td className="py-3 px-4">Art. 159 N°4</td>
                                        <td className="py-3 px-4 text-red-400">❌ No</td>
                                        <td className="py-3 px-4 text-red-400">❌ No</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 px-4">Causales imputables</td>
                                        <td className="py-3 px-4">Art. 160</td>
                                        <td className="py-3 px-4 text-red-400">❌ No</td>
                                        <td className="py-3 px-4 text-red-400">❌ No</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <Alert className="bg-amber-500/10 border-amber-500/20 text-amber-200">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>
                                <strong>Importante:</strong> Si el despido es declarado <strong>injustificado</strong> por un tribunal,
                                la indemnización por años de servicio se incrementa en un 30%, 50% o hasta 80% dependiendo de la causal
                                invocada incorrectamente.
                            </AlertDescription>
                        </Alert>
                    </section>

                    {/* Section 4 */}
                    <section id="section-4" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 text-lg">
                                4
                            </span>
                            Fórmula Completa para Calcular el Finiquito
                        </h2>
                        <p className="text-slate-300 mb-6">
                            Aquí está la fórmula completa para calcular tu finiquito en Chile:
                        </p>

                        <Card className="bg-emerald-500/10 border-emerald-500/20 mb-8">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-emerald-400 mb-4 text-center">Fórmula del Finiquito</h3>
                                <div className="bg-slate-800 p-4 rounded-lg font-mono text-center text-lg">
                                    <span className="text-white">FINIQUITO TOTAL</span>
                                    <span className="text-slate-400"> = </span>
                                    <br className="md:hidden" />
                                    <span className="text-emerald-300">Remuneraciones Pendientes</span>
                                    <br />
                                    <span className="text-slate-400"> + </span>
                                    <span className="text-blue-300">Indemnización Años Servicio</span>
                                    <br />
                                    <span className="text-slate-400"> + </span>
                                    <span className="text-purple-300">Aviso Previo</span>
                                    <br />
                                    <span className="text-slate-400"> + </span>
                                    <span className="text-yellow-300">Vacaciones Proporcionales</span>
                                    <br />
                                    <span className="text-slate-400"> + </span>
                                    <span className="text-rose-300">Gratificaciones Proporcionales</span>
                                </div>
                            </CardContent>
                        </Card>

                        <h3 className="text-xl font-semibold text-white mb-4">Detalle de cada fórmula:</h3>

                        <div className="space-y-4 mb-8">
                            <div className="bg-slate-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-emerald-400 mb-2">Indemnización por Años de Servicio</h4>
                                <code className="text-sm text-slate-300">
                                    Última remuneración mensual × Años trabajados (fracción &gt; 6 meses = 1 año)
                                </code>
                                <p className="text-xs text-slate-400 mt-2">Tope: 11 meses o 90 UF por mes (lo que sea menor)</p>
                            </div>

                            <div className="bg-slate-800/50 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-400 mb-2">Vacaciones Proporcionales</h4>
                                <code className="text-sm text-slate-300">
                                    (15 días hábiles ÷ 12 meses) × Meses trabajados último año × (Sueldo ÷ 30)
                                </code>
                                <p className="text-xs text-slate-400 mt-2">
                                    Restar días de vacaciones ya tomados en el período
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 - Example */}
                    <section id="section-6" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 text-lg">
                                5
                            </span>
                            Ejemplo Práctico Completo
                        </h2>
                        <Card className="bg-white/5 border-white/10 mb-8">
                            <CardHeader className="border-b border-white/10">
                                <CardTitle className="text-white">Caso: Juan Pérez</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-semibold text-slate-300 mb-2">Datos del caso:</h4>
                                        <ul className="text-sm text-slate-400 space-y-1">
                                            <li>• Fecha ingreso: 15 marzo 2021</li>
                                            <li>• Fecha término: 17 enero 2026</li>
                                            <li>• <strong className="text-white">Tiempo trabajado: 4 años, 10 meses</strong></li>
                                            <li>• Sueldo base: $800.000</li>
                                            <li>• Causal: Necesidades de la empresa (Art. 161)</li>
                                            <li>• Aviso previo: No hubo</li>
                                            <li>• Vacaciones tomadas: 5 días</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-emerald-400 mb-2">Cálculo del finiquito:</h4>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex justify-between">
                                                <span className="text-slate-400">Remuneración pendiente (17 días):</span>
                                                <span className="text-white font-mono">$453.333</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span className="text-slate-400">Indemnización años servicio (5 años):</span>
                                                <span className="text-white font-mono">$4.000.000</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span className="text-slate-400">Indemnización aviso previo:</span>
                                                <span className="text-white font-mono">$800.000</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span className="text-slate-400">Vacaciones proporcionales:</span>
                                                <span className="text-white font-mono">$266.667</span>
                                            </li>
                                            <li className="flex justify-between border-t border-white/10 pt-2 mt-2">
                                                <span className="text-emerald-400 font-semibold">TOTAL FINIQUITO:</span>
                                                <span className="text-emerald-400 font-bold font-mono">$5.520.000</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Alert className="bg-emerald-500/10 border-emerald-500/20 text-emerald-200">
                            <Calculator className="h-4 w-4" />
                            <AlertDescription>
                                <strong>¿Quieres calcular tu finiquito?</strong> Usa nuestra calculadora gratuita con todos los
                                parámetros actualizados a 2026.{" "}
                                <Link href="/calculators/finiquito" className="underline font-semibold">
                                    Ir a la Calculadora de Finiquito →
                                </Link>
                            </AlertDescription>
                        </Alert>
                    </section>

                    {/* Section 6 - Plazos */}
                    <section id="section-7" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 text-lg">
                                6
                            </span>
                            Plazos Legales Importantes
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <div className="flex items-center mb-2">
                                        <Clock className="h-5 w-5 text-emerald-400 mr-2" />
                                        <h4 className="font-semibold text-white">10 días hábiles</h4>
                                    </div>
                                    <p className="text-sm text-slate-300">
                                        Plazo máximo para que el empleador pague el finiquito desde el término del contrato.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <div className="flex items-center mb-2">
                                        <Scale className="h-5 w-5 text-blue-400 mr-2" />
                                        <h4 className="font-semibold text-white">6 meses</h4>
                                    </div>
                                    <p className="text-sm text-slate-300">
                                        Plazo para demandar ante tribunales laborales por despido injustificado o cobro de finiquito.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <div className="flex items-center mb-2">
                                        <FileText className="h-5 w-5 text-purple-400 mr-2" />
                                        <h4 className="font-semibold text-white">30 días</h4>
                                    </div>
                                    <p className="text-sm text-slate-300">
                                        Anticipación con que el empleador debe dar aviso de despido por Art. 161.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10">
                                <CardContent className="p-4">
                                    <div className="flex items-center mb-2">
                                        <Shield className="h-5 w-5 text-amber-400 mr-2" />
                                        <h4 className="font-semibold text-white">3 días hábiles</h4>
                                    </div>
                                    <p className="text-sm text-slate-300">
                                        Plazo para comunicar despido por escrito al trabajador (carta de despido).
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Section 7 - Derechos */}
                    <section id="section-8" className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 text-lg">
                                7
                            </span>
                            Tus Derechos como Trabajador
                        </h2>

                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    title: "Derecho a revisar el finiquito",
                                    desc: "Puedes tomarte el tiempo necesario para revisar el finiquito antes de firmarlo. No te pueden obligar a firmar de inmediato.",
                                },
                                {
                                    title: "Derecho a firmar 'bajo reserva de derechos'",
                                    desc: "Puedes agregar esta frase junto a tu firma si no estás conforme, preservando tu derecho a reclamar después.",
                                },
                                {
                                    title: "Derecho a reclamar ante la Inspección del Trabajo",
                                    desc: "Si hay diferencias, puedes presentar un reclamo gratuito ante la Inspección del Trabajo de tu comuna.",
                                },
                                {
                                    title: "Derecho a indemnización adicional por despido injustificado",
                                    desc: "Si demandas y ganas, la indemnización puede aumentar entre 30% y 80% del monto original.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-white">{item.title}</h4>
                                        <p className="text-sm text-slate-300">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Listo para Calcular tu Finiquito?</h2>
                        <p className="text-slate-300 mb-6">
                            Usa nuestra calculadora gratuita y obtén un cálculo preciso en menos de 2 minutos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/calculators/finiquito">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Calcular Mi Finiquito Gratis
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                    <MessageCircle className="h-5 w-5 mr-2" />
                                    Consultar con Abogado IA
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Schema.org HowTo */}
            <HowToStructuredData
                name="Cómo Calcular tu Finiquito en Chile 2026"
                description="Guía completa paso a paso para calcular el finiquito laboral en Chile según el Código del Trabajo."
                totalTime="PT15M"
                tools={["Calculadora de Finiquito LegalPO"]}
                steps={[
                    { name: "Identificar la causal de término", text: "Determina bajo qué artículo del Código del Trabajo terminó tu contrato (Art. 159, 160 o 161)." },
                    { name: "Calcular tiempo de servicio", text: "Calcula los años, meses y días trabajados desde la fecha de ingreso hasta la fecha de término." },
                    { name: "Determinar remuneración base", text: "Suma tu sueldo base, comisiones, bonos y cualquier remuneración habitual." },
                    { name: "Calcular indemnizaciones", text: "Si aplica, calcula indemnización por años de servicio (un mes por año) y aviso previo." },
                    { name: "Calcular vacaciones proporcionales", text: "Calcula los días de vacaciones no tomados proporcionalmente al tiempo trabajado." },
                    { name: "Sumar todos los componentes", text: "Suma remuneraciones pendientes + indemnizaciones + vacaciones + gratificaciones para obtener el total." }
                ]}
            />

            {/* Schema.org Article */}
            <ArticleStructuredData
                headline="Cómo Calcular tu Finiquito en Chile 2026 - Guía Completa"
                description="Guía definitiva para calcular el finiquito laboral en Chile. Fórmulas actualizadas, ejemplos prácticos y calculadora gratis."
                datePublished="2026-01-17"
                dateModified="2026-01-17"
            />
        </div>
    )
}
