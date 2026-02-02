import { Activity, Star, Shield, Phone, MapPin, MessageCircle, Home } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                                <Activity className="h-6 w-6 text-amber-500" />
                            </div>
                            <Link href="/">
                                <div>
                                    <h3 className="text-xl font-bold text-white font-serif tracking-widest">KINEUM</h3>
                                    <p className="text-xs text-slate-500 uppercase">Clinical Home Care</p>
                                </div>
                            </Link>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Redefiniendo el estándar de la rehabilitación domiciliaria en Santiago Oriente mediante la integración de expertos clínicos y tecnología.
                        </p>
                        <div className="flex space-x-3">
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:border-amber-900/50 transition-colors">
                                <Star className="h-4 w-4 text-amber-500" />
                            </div>
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:border-emerald-900/50 transition-colors">
                                <Shield className="h-4 w-4 text-emerald-500" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Especialidades</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/neurologica">Neurorrehabilitación</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/respiratoria">Kinesiología Respiratoria</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/traumatologica">Traumatología Avanzada</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/geriatrica">Geriatría Activa</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Cobertura</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-amber-400 transition-colors">
                                <Link href="/kinesiologo-a-domicilio-las-condes">Las Condes</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors">
                                <Link href="/kinesiologo-a-domicilio-vitacura">Vitacura</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors">
                                <Link href="/kinesiologo-a-domicilio-lo-barnechea">Lo Barnechea</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors">
                                <Link href="/kinesiologo-a-domicilio-providencia">Providencia</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors">
                                <Link href="/kinesiologo-a-domicilio-la-reina">La Reina</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors">
                                <Link href="/kinesiologo-a-domicilio-nunoa">Ñuñoa</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Contacto</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-amber-500 mt-0.5" />
                                <div>
                                    <a href="tel:+56999679593" className="block text-white font-medium hover:text-amber-400 transition-colors">
                                        +56 9 9967 9593
                                    </a>
                                    <span className="text-xs">Línea Exclusiva Pacientes</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                                <div>
                                    <span className="block text-white font-medium">Santiago, Chile</span>
                                    <span className="text-xs">Sector Oriente</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MessageCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                                <div>
                                    <a
                                        href="https://wa.me/56999679593"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-white font-medium hover:text-amber-400 transition-colors"
                                    >
                                        Chat WhatsApp
                                    </a>
                                    <span className="text-xs">Soporte Continuo</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-900 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} KINEUM. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-slate-600">
                        <span className="hover:text-slate-400 cursor-pointer">Privacidad</span>
                        <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
