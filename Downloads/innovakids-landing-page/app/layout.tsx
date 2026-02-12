import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { TrackingPixels } from "@/components/tracking-pixels"
import { generateHreflangs } from "@/lib/seo-config"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
}

export const metadata: Metadata = {
  title: "InnovaKids | Cursos de IA para Niños y Adolescentes Online",
  description:
    "527 alumnos graduados en 9 países ya crean aplicaciones y música con IA. La escuela online #1 de inteligencia artificial para niños y adolescentes (8-17 años). Garantía 10 días.total.",
  keywords: [
    "curso inteligencia artificial niños",
    "curso inteligencia artificial adolescentes",
    "clases online ia niños adolescentes",
    "escuela de inteligencia artificial para niños",
    "aprender chatgpt para niños",
    "curso de programación y ia para adolescentes",
    "innovakids",
    "innovakidslatam",
    "cursos de tecnologia para niños y adolescentes"
  ],
  authors: [{ name: "Innovakids Team" }],
  creator: "Innovakids",
  publisher: "Innovakids",
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
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Curso de Inteligencia Artificial para Niños y Adolescentes | InnovaKids",
    description:
      "527 alumnos graduados. Tu hijo crea su primera app en 5 semanas. Clases en vivo, máx 5 por grupo. Garantía 10 días.100% de devolución.",
    url: "https://www.innovakidslatam.com",
    siteName: "Innovakids",
    images: [
      {
        url: "/hero-child-learning-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Niños creando apps y juegos con Inteligencia Artificial en Innovakids",
      },
    ],
    locale: "es_419",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de Inteligencia Artificial para Niños y Adolescentes | InnovaKids",
    description:
      "Formación líder en inteligencia artificial para niños y adolescentes de 8 a 17 años. Clases online en vivo, grupos de 5 alumnos. WhatsApp: +56 9 6475 4219",
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
        {/* Scripts moved to components/tracking-pixels.tsx for performance */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src=""
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Innovakids",
              alternateName: ["Innova Kids", "InnovaKids LATAM", "Cursos IA Niños"],
              description:
                "Academia de Vibe Coding para niños y adolescentes. 527 graduados en 9 países. Enseñamos a niños y adolescentes de 8-17 años a crear software, arte y música usando Inteligencia Artificial.",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Cursos de IA para Niños y Adolescentes | Clases de Inteligencia Artificial Online - Innovakids",
              description:
                "Curso práctico de 5 semanas donde tu hijo crea Videojuegos, Apps y Arte con IA. Sin experiencia previa. Incluye certificación internacional y portafolio de proyectos.",
              provider: {
                "@type": "Organization",
                name: "Innovakids",
                sameAs: "https://www.innovakidslatam.com",
                url: "https://www.innovakidslatam.com",
              },
              educationalLevel: "Beginner",
              audience: {
                "@type": "EducationalAudience",
                educationalRole: "student",
                audienceType: "Children and Adolescents aged 8-17",
                geographicArea: {
                  "@type": "Place",
                  name: "Latin America",
                },
              },
              coursePrerequisites: "Ninguno - Curso para principiantes totales",
              numberOfLessons: 10,
              timeRequired: "P5W",
              inLanguage: "es",
              availableLanguage: "Spanish",
              courseMode: "online",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: "PT90M",
                instructor: {
                  "@type": "Person",
                  name: "Innovakids Team",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127", // Consistent with title
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Curso de IA para Niños y Adolescentes - Innovakids",
              description:
                "Programa Vibe Explorer (10 Clases en Vivo). Aprende a programar con IA. Incluye software, grabaciones de por vida y garantía de satisfacción de 10 días.",
              image: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
              brand: {
                "@type": "Brand",
                name: "Innovakids",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://www.innovakidslatam.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Cursos de IA para Niños y Adolescentes",
                  item: "https://www.innovakidslatam.com/#programa",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Clases de Inteligencia Artificial",
                  item: "https://www.innovakidslatam.com/#clases",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Cómo Funcionan los Cursos de IA para Niños y Adolescentes - Innovakids",
              description:
                "Descubre cómo nuestros cursos de inteligencia artificial para niños y adolescentes transforman a estudiantes en creadores de tecnología.",
              thumbnailUrl: "https://www.innovakidslatam.com/video-thumbnail.jpg",
              uploadDate: "2025-01-01T00:00:00Z",
              duration: "PT2M30S",
              contentUrl: "https://www.innovakidslatam.com/video-cursos-ia-ninos",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <TrackingPixels />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
