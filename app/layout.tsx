import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { TrackingPixels } from "@/components/tracking-pixels"
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker"
import { generateHreflangs } from "@/lib/seo-config"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "optional",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F2EDE0",
}

export const metadata: Metadata = {
  title: {
    // Sin sufijo: 79 páginas ya traen "| InnovaKids" en su propio title y el template lo duplicaba ("| InnovaKids | InnovaKids" en Google)
    template: "%s",
    default: "Curso de Inteligencia Artificial para Niños y Adolescentes (8-17) · Clase Gratis",
  },
  description:
    "Tu hijo crea apps, videojuegos y proyectos reales con IA en 5 semanas. Clases en vivo, máx. 5 alumnos por grupo. ★4.9 de 527 familias. Primera clase gratis → reserva hoy.",
  keywords: [
    "mi hijo se queda atrás en la era de la ia",
    "cómo evitar que mi hijo se quede atrás con la ia",
    "niños rezagados inteligencia artificial",
    "brecha digital niños ia",
    "ia el nuevo inglés",
    "ia habilidad básica siglo xxi",
    "mi hijo no sabe usar ia",
    "ia para estudiar colegio",
    "curso inteligencia artificial niños",
    "curso inteligencia artificial adolescentes",
    "cursos de ia para niños",
    "clases online ia niños adolescentes",
    "escuela de inteligencia artificial para niños",
    "aprender chatgpt para niños",
    "curso de programación y ia para adolescentes",
    "academia ia niños",
    "innovakids",
    "innovakidslatam",
    "cursos de tecnología para niños y adolescentes"
  ],
  authors: [{ name: "InnovaKids Team" }],
  creator: "InnovaKids",
  publisher: "InnovaKids",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.innovakidslatam.com"),
  alternates: {
    canonical: "/",
    languages: generateHreflangs("home"),
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Curso de IA para Niños y Adolescentes (8-17) · Clase Gratis | InnovaKids",
    description:
      "Tu hijo crea apps, videojuegos y proyectos reales con IA en 5 semanas. Máx. 5 alumnos. ★4.9 de 527 familias. Reserva su clase gratis hoy.",
    url: "https://www.innovakidslatam.com",
    siteName: "InnovaKids",
    images: [
      {
        url: "/hero-child-learning-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Curso de Inteligencia Artificial para Niños y Adolescentes 8-17 años - InnovaKids",
      },
    ],
    locale: "es_419",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de IA para Niños y Adolescentes (8-17) | InnovaKids",
    description:
      "Tu hijo crea apps y videojuegos con IA en 5 semanas. Grupos de 5. ★4.9 de 527 familias. Clase gratis.",
    images: ["/hero-child-learning-ai.jpg"],
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
  verification: {
    google: "5DUPn39I0nG06dUypWPbuuaNnTp5tTH7GqaLxwCjv2A",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Removed reCAPTCHA script loading to fix deployment error

  return (
    <html lang="es-419">
      <head>
        {/* Preload hero image — LCP element */}
        <link rel="preload" href="/innovakids-hero.webp" as="image" type="image/webp" fetchPriority="high" />
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://www.innovakidslatam.com/#organization",
              name: "InnovaKids",
              alternateName: ["Innova Kids", "InnovaKids LATAM"],
              description:
                "Academia #1 en LATAM para que niños y adolescentes (8-17 años) aprendan IA a tiempo y no se queden atrás. La IA es el nuevo inglés/internet/Excel: una habilidad base para el colegio, la universidad y el trabajo. 527 graduados en 9 países.",
              url: "https://www.innovakidslatam.com",
              logo: "https://www.innovakidslatam.com/logo-innovakids.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Diagonal Oriente 1620",
                addressLocality: "Providencia",
                addressRegion: "RM",
                addressCountry: "CL",
              },
              areaServed: [
                { "@type": "Country", name: "Chile" },
                { "@type": "Country", name: "México" },
                { "@type": "Country", name: "Colombia" },
                { "@type": "Country", name: "Argentina" },
                { "@type": "Country", name: "Perú" },
                { "@type": "Country", name: "Ecuador" },
                { "@type": "Country", name: "Uruguay" },
                { "@type": "Country", name: "Costa Rica" },
                { "@type": "Country", name: "Panamá" },
                { "@type": "Country", name: "República Dominicana" },
                { "@type": "Country", name: "Honduras" },
                { "@type": "Country", name: "El Salvador" },
                { "@type": "Country", name: "Guatemala" },
                { "@type": "Country", name: "Paraguay" },
                { "@type": "Country", name: "Bolivia" },
                { "@type": "Country", name: "Venezuela" },
                { "@type": "Country", name: "Nicaragua" },
                { "@type": "Country", name: "Puerto Rico" },
                { "@type": "Country", name: "Guinea Ecuatorial" },
                { "@type": "Country", name: "España" },
                { "@type": "Country", name: "Estados Unidos" },
                { "@type": "Place", name: "Latinoamérica" },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+56-9-6475-4219",
                contactType: "customer service",
                email: "innovakidslatam@gmail.com",
                availableLanguage: ["Spanish"],
                areaServed: "LATAM",
              },
              sameAs: ["https://www.instagram.com/innovakidslatam"],
            }),
          }}
        />
        {/* Course, Product, BreadcrumbList, ItemList, VideoObject schemas removed from global layout.
           They belong only on specific pages (e.g., app/page.tsx) to avoid semantic errors
           on blog/contact/etc pages. See SEO audit 2026-05-27. */}
      </head>
      <body className={`${fraunces.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100000] focus:bg-[#C96342] focus:text-[#FAF7EF] focus:px-4 focus:py-2 focus:rounded-sm">Saltar al contenido</a>
        <TrackingPixels />
        <ScrollDepthTracker />
        <main id="main-content">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
