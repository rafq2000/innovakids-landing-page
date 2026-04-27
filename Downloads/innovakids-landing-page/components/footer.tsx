import { Instagram } from "lucide-react"

const countries = [
  { flag: "🇨🇱", name: "Chile", slug: "/cl" },
  { flag: "🇲🇽", name: "México", slug: "/mx" },
  { flag: "🇨🇴", name: "Colombia", slug: "/co" },
  { flag: "🇦🇷", name: "Argentina", slug: "/ar" },
  { flag: "🇵🇪", name: "Perú", slug: "/pe" },
  { flag: "🇪🇸", name: "España", slug: "/es" },
  { flag: "🇺🇸", name: "USA", slug: "/us" },
  { flag: "🇪🇨", name: "Ecuador", slug: "/ec" },
  { flag: "🇺🇾", name: "Uruguay", slug: "/uy" },
  { flag: "🇨🇷", name: "Costa Rica", slug: "/cr" },
]

const exploreLinks = [
  { href: "/cursos-online-para-ninos", label: "Cursos online para niños" },
  { href: "/#metodologia", label: "Metodología" },
  { href: "/blog", label: "Blog educativo" },
  { href: "/precios", label: "Precios y planes" },
  { href: "/colegios", label: "Soluciones para colegios" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/resultados", label: "Resultados" },
]

export function Footer() {
  return (
    <footer className="bg-[#EDE6D3] text-[#2F2F2C] border-t border-[#2F2F2C]/15 pt-24 pb-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Big closing headline */}
        <div className="pb-20 border-b border-[#2F2F2C]/15">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
            Próxima cohorte · mayo 2026
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal max-w-[14ch] mb-10"
            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
          >
            Empieza <em className="italic text-[#C96342]">hoy</em>.
          </h2>
          <a
            href="/#sesion-estrategica"
            className="inline-flex items-center bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 text-base font-semibold rounded-sm transition-colors"
          >
            Agendar clase gratis
          </a>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 py-16">
          <div className="md:col-span-4">
            <p
              className="text-2xl tracking-tight mb-5"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
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
              className="inline-flex items-center gap-2 text-sm text-[#2F2F2C] hover:text-[#C96342] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
              Explora
            </p>
            <ul className="space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#2F2F2C] hover:text-[#C96342] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
              Contacto
            </p>
            <ul className="space-y-3 text-sm">
              <li className="text-[#5A5751]">
                Diagonal Oriente 1620,
                <br />
                Providencia, Chile
              </li>
              <li>
                <a href="tel:+56964754219" className="text-[#2F2F2C] hover:text-[#C96342] transition-colors">
                  +56 9 6475 4219
                </a>
              </li>
              <li>
                <a
                  href="mailto:innovakidslatam@gmail.com"
                  className="text-[#2F2F2C] hover:text-[#C96342] transition-colors"
                >
                  innovakidslatam@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
              Países
            </p>
            <ul className="space-y-2">
              {countries.map((c) => (
                <li key={c.slug}>
                  <a
                    href={c.slug}
                    className="inline-flex items-center gap-2 text-sm text-[#2F2F2C] hover:text-[#C96342] transition-colors"
                  >
                    <span aria-hidden="true">{c.flag}</span>
                    <span>{c.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="/gq" className="hidden">
                  Guinea Ecuatorial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2F2F2C]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5A5751]">
          <p>© 2026 InnovaKids. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/terminos" className="hover:text-[#C96342] transition-colors">
              Términos
            </a>
            <a href="/privacidad" className="hover:text-[#C96342] transition-colors">
              Privacidad
            </a>
            <a href="/confianza-y-seguridad" className="hover:text-[#C96342] transition-colors">
              Confianza y seguridad infantil
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
