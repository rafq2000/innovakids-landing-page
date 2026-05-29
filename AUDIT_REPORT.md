# AUDITORIA INTEGRAL - InnovaKids Landing Page
## Compilado por 14 agentes especializados - 27 mayo 2026

---

## HALLAZGOS CRITICOS (P0) - Impacto directo en credibilidad y conversion

### 1. Nombre de marca inconsistente
- "InnovaKids" (K mayuscula) en UI visible
- "Innovakids" (k minuscula) en metadata, schema, PayPal, layout.tsx
- **Archivos**: layout.tsx, b2b-editorial-page.tsx, student-dashboard.tsx, auth pages

### 2. Rango de edad contradictorio: "8-14" vs "8-17"
- results-page-content.tsx:38 dice "8-14"
- upcoming-courses.tsx:104 dice "8-14"
- what-is-innovakids.tsx:13 dice "8-14"
- terminos/page.tsx:28 dice "8-14"
- El resto del sitio dice "8-17"

### 3. Grupos de edad inconsistentes
- faq-data.ts:14 dice "8-11, 12-14 y 15-17"
- ia-ninos-por-edad/page.tsx dice "8-10, 11-13 y 14-17"

### 4. Countdowns con fechas vencidas
- countdown-timer.tsx: fecha 2026-05-18 (ya paso)
- urgency-banner.tsx: fecha 2026-05-14 (ya paso)
- Muestran 00:00:00:00 - destruye credibilidad

### 5. Datos fabricados (dark patterns)
- hero-live-counter.tsx: Math.random() genera "familias viendo ahora" falso
- social-proof-toast.tsx: nombres y tiempos hardcodeados ficticios
- spot-counter.tsx: siempre muestra 5 cupos (useState(5))
- pricing-section.tsx dice "7 cupos" vs hero "4 cupos" vs spot-counter "5 cupos"

### 6. Sesion gratuita tiene 4 nombres y 2 duraciones
- "Clase gratis" (hero), "Sesion diagnostica" (clase-gratis), "Reunion informativa" (Calendly URL), "Sesion estrategica" (formulario ID)
- Duracion: 20 min (clase-gratis) vs 30 min (calendly-section) vs 45-60 min (reserva page)

### 7. Precio contradictorio
- mejor-curso-ia-ninos-2026:222 dice "$147 USD"
- Homepage, precios, schema dicen "$267 USD"

### 8. Schemas JSON-LD duplicados en layout global
- layout.tsx inyecta Course, Product, BreadcrumbList, ItemList, VideoObject en TODAS las paginas
- page.tsx agrega otro Course y BreadcrumbList con datos distintos
- Product schema en paginas de blog = semanticamente incorrecto
- VideoObject con URL invalida

### 9. Dos sistemas de diseno coexistiendo
- **Editorial (actual)**: #FAF7EF, #C96342, Fraunces, esquinas rectas
- **Legacy dark-tech**: #030712, #4ECDC4, gradientes, rounded-3xl
- 7 de 15 paginas principales usan el tema legacy
- 11+ componentes legacy con paleta incompatible

### 10. Pagina /pagar con diseno completamente diferente
- Usa Shadcn generico, badges verde neon, fondo oscuro
- Ruptura de confianza en el momento mas critico del funnel

### 11. Dos formularios compitiendo en Hero
- HeroLeadForm captura nombre+WhatsApp con datos incompletos
- Luego scrollea a CalendlySection que pide los mismos datos + mas
- El usuario llena dos formularios para lo mismo

### 12. Duplicacion routing paises
- 21 archivos estaticos (app/co/, app/mx/, etc.)
- + template dinamico [country] que genera las mismas 21 paginas

---

## HALLAZGOS ALTOS (P1) - Mejorar esta semana

### 13. Errores de texto
- "pago en una sola exhibicion" (terminos:65) -> "pago unico"
- "mentoria" sin tilde (faq-data.ts:33)
- "Solo" con tilde innecesaria (value-proposition:249,922)
- "hora LATAM" impreciso (clase-gratis:243) -> "hora Chile (GMT-4)"
- "fit" sin traduccion (hero-section:234)
- Meses en mayuscula: "Junio" -> "junio" (como-ensenar-ia:316)
- "national" en vez de "nacional" (country-seo-content:15)
- Cohorte pasada "27-abr-2026" (program-page-content:127)
- "+500 familias" vs "527" (como-ensenar-ia:74,275)
- Numeracion duplicada en comentarios (page.tsx:185)
- "basica media" confuso (colegios:72) -> "educacion basica"

### 14. Font Charter hardcodeada en 30+ componentes
- Se usa style={{ fontFamily: "'Charter', 'Georgia', serif" }} inline
- Charter no esta cargada; deberia ser font-display (Fraunces)

### 15. 5+ componentes zombie (dead code)
- sticky-booking-cta.tsx, sticky-footer-cta.tsx, exit-popup.tsx
- announcement-banner.tsx, urgency-banner.tsx, client-only-components.tsx
- Todos usan el tema dark-tech obsoleto

### 16. Hreflangs incorrectos en blogs
- Blogs usan generateHreflangs("home") apuntando a paginas de pais

### 17. Keyword stuffing en country-seo-content
- Parrafos monoliticos de 4-6 lineas
- Keywords repetidos obsesivamente
- "national" typo

### 18. 15+ paginas huerfanas sin links internos
- /que-es-innovakids, /de-usuario-a-creador, /ia-nos-recomienda, etc.

### 19. /adolescentes es clon del homepage
- Reusa HeroSection identico con testimonio de nino de 9 anos
- Solo la seccion teenPillars es unica

### 20. /testimonios sin footer ni CTA de cierre

### 21. Two globals.css incompatibles
- app/globals.css (editorial)
- styles/globals.css (shadcn template)

### 22. Hover states del CTA principal inconsistentes
- Hero: #9A4428, Nav: #A8502F, Footer: #A8502F, Exit: #A84F33

### 23. themeColor inconsistente
- layout.tsx: #F5F1E8 (no es token)
- manifest.ts: #030712 (negro!)

### 24. Social proof toast usa IBM Plex Mono (no cargada)

### 25. Links rotos a paginas de ciudad en blogs de pais
- /co/clases-ia-ninos-bogota NO EXISTE (la ruta es /co/bogota/cursos/inteligencia-artificial)

### 26. noscript img con src="" vacio (layout.tsx:141-145)

---

## RECOMENDACIONES ESTRUCTURALES

### Paginas a eliminar/fusionar:
- /de-usuario-a-creador -> redirect a /metodologia (contenido duplicado)
- /cursos-online-para-ninos -> redirect a /cursos/inteligencia-artificial
- /clases-ia-ninos -> redirect a /cursos/inteligencia-artificial
- /adolescentes -> reconstruir con contenido unico o redirect a /ia-ninos-por-edad#14-17

### Componentes a eliminar:
- sticky-booking-cta.tsx, sticky-footer-cta.tsx, exit-popup.tsx
- announcement-banner.tsx, urgency-banner.tsx, client-only-components.tsx
- cta-section.tsx (legacy, no usado en homepage)
- spot-counter.tsx (siempre muestra 5)
- hero-live-counter.tsx (datos fabricados)

### Datos a centralizar en site-config.ts:
- Numero de graduados (527)
- Rating (4.9)
- Reviews (127)
- Paises (9)
- Garantia (10 dias)
- Numero WhatsApp ventas vs soporte
- Duracion de sesion diagnostica
- Rangos de edad de grupos
