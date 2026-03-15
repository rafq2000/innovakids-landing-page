import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
    Briefcase, Calculator, Clock, CheckCircle2, DollarSign,
    AlertTriangle, Gavel, FileX, Scale, ArrowRight, ShieldAlert,
    HelpCircle, ChevronRight
} from "lucide-react"
import { FAQStructuredData, LegalServiceStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
    title: "Abogado Laboral Chile 2026 | Despido, Ley Karin y Finiquitos | LegalPO",
    description: "🛡️ ABOGADO LABORAL EXPERTO. Asesoría en Despido Injustificado, Ley Karin (Acoso), Autodespido y Accidentes. Calcula tu finiquito GRATIS aquí.",
    keywords: [
        "abogado laboral chile",
        "ley karin acoso laboral",
        "despido injustificado indemnizacion",
        "autodespido requisitos",
        "calcular finiquito 2026",
        "tutela derechos fundamentales",
        "demanda laboral plazos",
        "abogado laboral santiago",
        "licencia medica rechazada",
        "asesoria sindical",
    ],
    openGraph: {
        title: "Abogado Laboral Chile | Defensa del Trabajador",
        description: "Defendemos tus derechos laborales. Expertos en Ley Karin, Despidos y Finiquitos.",
        type: "website",
        url: "https://www.legalpo.cl/abogado-laboral",
    },
}

const faqs = [
    { question: "¿Cuánto tiempo tengo para demandar?", answer: "El plazo es fatal: Tienes 60 días hábiles (lunes a sábado) desde que te separaron de tus funciones. No dejes pasar el tiempo. Para el cobro de prestaciones adeudadas (vacaciones, sueldos) el plazo es de 2 años, pero la acción de despido caduca rápido." },
    { question: "¿Qué es la Ley Karin y cómo me protege?", answer: "La nueva Ley Karin (vigente 2024/2025) moderniza la protección contra el Acoso Laboral, Sexual y la Violencia en el trabajo. Obliga a las empresas a tener protocolos claros de investigación. Si eres víctima, tienes derecho a denunciar y ser protegido de represalias." },
    { question: "¿Me pueden despedir estando con licencia?", answer: "Por regla general, NO te pueden despedir por la causal 'Necesidades de la Empresa' estando con licencia médica. Si lo hacen, el despido es nulo o injustificado. Sin embargo, sí podrían despedirte por otras causales (como vencimiento del plazo) previo dictamen judicial en ciertos casos." },
    { question: "¿Qué gano con una demanda por despido injustificado?", answer: "Puedes ganar: 1) El pago de tu indemnización por años de servicio aumentada en un 30% a 80% (recargo legal). 2) Devolución del Seguro de Cesantía si te lo descontaron ilegalmente. 3) Pago de cotizaciones adeudadas." },
    { question: "¿Qué es el Autodespido?", answer: "Es cuando TÚ pones término al contrato porque tu empleador incumplió gravemente (ej: no pagó cotizaciones, acoso, no pago de sueldo). Si se hace bien, te deben pagar todas tus indemnizaciones como si te hubieran echado + un recargo del 50% u 80%. OJO: No renuncies, autodespídete con abogado." },
]

export default function AbogadoLaboralPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-slate-900 z-0" />
                <div className="container relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/50 text-blue-200 mb-6 text-sm font-medium">
                        <ShieldAlert className="h-4 w-4" /> Especialistas en Ley Karin y Despidos
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Abogado Laboral <span className="text-blue-400">Defensa Trabajador</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        ¿Te despidieron injustamente? ¿Sufres acoso en el trabajo?
                        No firmes nada sin asesoría. Defiende tu dinero y tu dignidad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/calculators/finiquito">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8 w-full sm:w-auto shadow-blue-900/20 shadow-xl">
                                <Calculator className="h-6 w-6 mr-3" />
                                Calcular Finiquito
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg py-6 px-8 w-full sm:w-auto">
                                <Gavel className="h-6 w-6 mr-3" />
                                Consulta con Abogado IA
                            </Button>
                        </Link>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <FileX className="h-8 w-8 text-red-400 mx-auto mb-2" />
                            <div className="font-bold text-lg">Despido</div>
                            <div className="text-sm text-slate-400">+Recargo Legal</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <ShieldAlert className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                            <div className="font-bold text-lg">Ley Karin</div>
                            <div className="text-sm text-slate-400">Acoso Laboral</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <ArrowRight className="h-8 w-8 text-green-400 mx-auto mb-2" />
                            <div className="font-bold text-lg">Autodespido</div>
                            <div className="text-sm text-slate-400">Si no pagan cotiz.</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <AlertTriangle className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                            <div className="font-bold text-lg">Accidentes</div>
                            <div className="text-sm text-slate-400">Indemnización</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container max-w-4xl mx-auto px-4 space-y-20">

                    {/* Ley Karin Detail - Hot Topic */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-amber-500 p-1"></div>
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-amber-100 rounded-full">
                                    <ShieldAlert className="h-8 w-8 text-amber-700" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Nueva Ley Karin (Acoso Laboral)</h2>
                                    <p className="text-slate-600">Tolerancia Cero a la violencia y el acoso en el trabajo.</p>
                                </div>
                            </div>
                            <div className="prose prose-slate max-w-none">
                                <p>
                                    Desde 2024/2025, Chile cuenta con una normativa robusta para prevenir y sancionar el acoso. Ya no es necesario que el acoso sea "reiterado" para denunciar; <strong>un solo acto de agresión o acoso grave es suficiente.</strong>
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">Conductas Sancionadas</h4>
                                        <ul className="space-y-2 text-sm text-slate-700">
                                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-amber-600 mt-1" /> Acoso Sexual (insinuaciones, contacto físico).</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-amber-600 mt-1" /> Acoso Laboral (gritos, burlas, aislamiento).</li>
                                            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-amber-600 mt-1" /> Violencia en el trabajo (agresiones físicas).</li>
                                        </ul>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                                        <h4 className="font-bold text-amber-900 mb-2">¿Qué debe hacer la empresa?</h4>
                                        <p className="text-sm text-amber-800 mb-2">
                                            Está obligada a investigar en un plazo estricto o derivar a la Inspección del Trabajo.
                                        </p>
                                        <p className="text-sm font-bold text-amber-900">
                                            Si te despiden por denunciar, es un despido gravemente nulo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Despido Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Despido Injustificado: Pelea por lo tuyo</h2>
                            <p className="text-slate-600 mb-6 font-medium">
                                El 90% de los despidos por "Necesidades de la Empresa" están mal fundamentados.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex-col flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                                        <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="font-bold text-slate-900">Reserva de Derechos</h4>
                                        <p className="text-sm text-slate-600">Al firmar el finiquito, debes escribir de puño y letra: "Me reservo el derecho a demandar por despido injustificado y descuento de seguro de cesantía". Si no lo escribes, pierdes todo.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-col flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                                        <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="font-bold text-slate-900">Demandar en Plazo</h4>
                                        <p className="text-sm text-slate-600">Tienes 60 días hábiles. Contacta un abogado de inmediato.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-col flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">3</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Recibe tu Recargo</h4>
                                        <p className="text-sm text-slate-600">El pago aumenta un 30% (necesidades de la empresa) o hasta un 80% (falta de probidad no probada).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Card className="bg-blue-900 text-white border-none shadow-xl">
                                <CardHeader>
                                    <CardTitle>¿No pago de cotizaciones?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">
                                        Si al momento del despido tus cotizaciones previsionales (AFP) no están íntegramente pagadas, aplica la <strong>Ley Bustos</strong>.
                                    </p>
                                    <div className="bg-white/10 p-3 rounded-lg border border-white/20">
                                        <p className="font-bold text-yellow-300">El despido es NULO.</p>
                                        <p className="text-sm text-blue-100">Deben seguir pagándote el sueldo mes a mes hasta que convaliden el pago.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                    <ArrowRight className="h-5 w-5 text-purple-600" /> Autodespido
                                </h4>
                                <p className="text-sm text-slate-600 mb-4">
                                    ¿Tu jefe no te paga el sueldo? ¿Acoso insoportable?
                                    <strong> No renuncies.</strong> La renuncia te hace perder tus años de servicio.
                                    El Autodespido (Despido Indirecto) es la vía legal para irte y que TE PAGUEN todo.
                                </p>
                                <Link href="/" className="text-blue-600 font-bold text-sm hover:underline flex items-center">
                                    Consulta si puedes autodespedirte <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes Laborales</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="bg-white shadow-sm border rounded-lg mb-2 px-4">
                                    <AccordionTrigger className="text-left font-medium text-slate-800 hover:text-blue-600 py-4 text-base">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 pb-4 text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* CTA Bottom */}
                    <div className="text-center bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-10 text-white shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4">¿Te deben dinero? Lo recuperamos.</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            No regales tu esfuerzo. Nuestra IA analiza tu caso gratis en segundos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
                                    <Gavel className="h-5 w-5 mr-2" />
                                    Consultar con Abogado IA
                                </Button>
                            </Link>
                            <Link href="/calculators/finiquito">
                                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-bold">
                                    <Calculator className="h-5 w-5 mr-2" />
                                    Calcular Finiquito
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <LegalServiceStructuredData
                name="LegalPO - Abogados Laborales Expertos"
                description="Defensa de trabajadores en Chile. Ley Karin, Despido Injustificado y Autodespido."
                url="https://www.legalpo.cl/abogado-laboral"
                image="https://www.legalpo.cl/og-laboral.jpg"
                priceRange="Consulta Gratis"
                telephone="+56912345678"
                addressRegion="Región Metropolitana"
                serviceType={["Derecho Laboral", "Despido Injustificado", "Ley Karin"]}
            />
            <FAQStructuredData faqs={faqs} />
        </div>
    )
}
