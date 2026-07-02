import Link from "next/link"
import { Instagram } from "lucide-react"
import { COHORT, WHATSAPP } from "@/lib/site-config"

interface FooterProps {
  countryCode?: string
}

const countries = [
  { flag: "🇨🇱", name: "Chile", slug: "/cl" },
  { flag: "🇲🇽", name: "México", slug: "/mx" },
  { flag: "🇨🇴", name: "Colombia", slug: "/co" },
  { flag: "🇦🇷", name: "Argentina", slug: "/ar" },
  { flag: "🇵🇪", name: "Perú", slug: "/pe" },
  { flag: "🇪🇨", name: "Ecuador", slug: "/ec" },
  { flag: "🇪🇸", name: "España", slug: "/es" },
  { flag: "🇺🇸", name: "USA", slug: "/us" },
  { flag: "🇺🇾", name: "Uruguay", slug: "/uy" },
  { flag: "🇨🇷", name: "Costa Rica", slug: "/cr" },
  { flag: "🇵🇦", name: "Panamá", slug: "/pa" },
  { flag: "🇩🇴", name: "Rep. Dominicana", slug: "/do" },
  { flag: "🇭🇳", name: "Honduras", slug: "/hn" },
  { flag: "🇸🇻", name: "El Salvador", slug: "/sv" },
  { flag: "🇬🇹", name: "Guatemala", slug: "/gt" },
  { flag: "🇵🇾", name: "Paraguay", slug: "/py" },
  { flag: "🇧🇴", name: "Bolivia", slug: "/bo" },
  { flag: "🇻🇪", name: "Venezuela", slug: "/ve" },
  { flag: "🇳🇮", name: "Nicaragua", slug: "/ni" },
  { flag: "🇵🇷", name: "Puerto Rico", slug: "/pr" },
  { flag: "🇬🇶", name: "Guinea Ecuatorial", slug: "/gq" },
]

const exploreLinks = [
  { href: "/programa", label: "Programa" },
  { href: "/metodologia-aprender-creando", label: "Metodología" },
  { href: "/resultados", label: "Resultados" },
  { href: "/precios", label: "Precios" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/clase-gratis", label: "Clase gratis" },
  { href: "/confianza-y-seguridad", label: "Confianza y seguridad" },
  { href: "/blog", label: "Blog educativo" },
]

export function Footer({ countryCode }: FooterProps) {
  const phone = WHATSAPP.sales
  const phoneFormatted = `+${phone.slice(0, 2)} ${phone.slice(2, 3)} ${phone.slice(3, 7)} ${phone.slice(7)}`

  return (
    <footer className="bg-[#EDE6D3] text-[#2F2F2C] border-t border-[#2F2F2C]/15 pt-24 pb-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Big closing headline */}
        <div className="pb-20 border-b border-[#2F2F2C]/15">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-6">
            Próxima cohorte · {COHORT.nameShort}
          </p>
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal max-w-[14ch] mb-10"
          >
            Empieza <em className="italic text-[#B5522F]">hoy</em>.
          </h2>
          <Link
            href="/#sesion-estrategica"
            className="inline-flex items-center bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-8 py-4 text-base font-semibold rounded-sm transition-colors"
          >
            Agendar clase gratis
          </Link>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 py-16">
          <div className="md:col-span-4">
            <p
              className="font-display text-2xl tracking-tight mb-5"
            >
              InnovaKids
            </p>
            <p className="text-sm text-[#5A5751] leading-relaxed max-w-[40ch] mb-8">
              Academia online de IA para niños y adolescentes de 8 a 17 años.
              Presentes en toda Latinoamérica y España.
            </p>
            <a
              href="https://instagram.com/innovakidslatam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#2F2F2C] hover:text-[#B5522F] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-6">
              Explora
            </p>
            <ul className="space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#2F2F2C] hover:text-[#B5522F] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-6">
              Contacto
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${phone}?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20mi%20hijo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2F2F2C] hover:text-[#B5522F] transition-colors"
                >
                  WhatsApp: {phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href="mailto:innovakidslatam@gmail.com"
                  className="text-[#2F2F2C] hover:text-[#B5522F] transition-colors"
                >
                  innovakidslatam@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-6">
              Países
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {countries.map((c) => (
                <li key={c.slug}>
                  <a
                    href={c.slug}
                    className="inline-flex items-center gap-1.5 text-[13px] text-[#2F2F2C] hover:text-[#B5522F] transition-colors"
                  >
                    <span aria-hidden="true">{c.flag}</span>
                    <span>{c.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2F2F2C]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5A5751]">
          <p>© 2026 InnovaKids. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/terminos" className="hover:text-[#B5522F] transition-colors">
              Términos
            </Link>
            <Link href="/privacidad" className="hover:text-[#B5522F] transition-colors">
              Privacidad
            </Link>
            <Link href="/confianza-y-seguridad" className="hover:text-[#B5522F] transition-colors">
              Confianza y seguridad infantil
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
