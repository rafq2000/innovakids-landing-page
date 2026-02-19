/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components'],
  },
  async redirects() {
    return [
      // Old "el-primer-paso-hacia-el-futuro" URLs
      {
        source: '/el-primer-paso-hacia-el-futuro/reunión-clase-gratuita',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/el-primer-paso-hacia-el-futuro',
        destination: '/',
        permanent: true,
      },
      {
        source: '/información-próximo-curso-online-últimos-cupos/clase-gratuita-y-reunión-informativa',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      // Old booking URLs redirect to new one
      {
        source: '/información-próximo-curso-online-últimos-cupos',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/reserva-mi-clase-gratis',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/el-primer-paso-hacia-el-futuro/reunión-informativa',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/información-próximo-curso-online-últimos-cupos-hora-de-chile-la-reserva/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/información-próximo-curso-online-últimos-cupos-hora-de-chile-la-reserva',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/información-próximo-curso-online-últimos-cupos/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/agenda-ahora-clase-gratis-últimos-cupos/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/agenda-ahora-clase-gratis-últimos-cupos',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      {
        source: '/agenda-ahora-reunión-gratis-últimos-cupos/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      // Old information URLs
      {
        source: '/información',
        destination: '/informacion',
        permanent: true,
      },
      {
        source: '/información/qué-aprenderán-los-niños',
        destination: '/informacion',
        permanent: true,
      },
      {
        source: '/información/herramientas-que-utilizarán',
        destination: '/informacion',
        permanent: true,
      },
      {
        source: '/información/formato',
        destination: '/informacion',
        permanent: true,
      },
      {
        source: '/blog/curso-estudio-ia-tutor-personalizado',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/chatgpt-para-ninos-guia-padres',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/beneficios-ia-educacion-infantil',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/proyectos-ia-ninos-principiantes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/reserva-mi-clase-y-reunión-explicativa-gratis/clase-gratuita-y-reunión-informativa-hora-chile',
        destination: '/reserva-mi-clase-y-reunion-explicativa-gratis/clase-gratuita-y-reunion-informativa-hora-chile',
        permanent: true,
      },
      // Malformed URLs
      {
        source: '/&',
        destination: '/',
        permanent: true,
      },
      // SEO FIX: Redirect duplicate country pages to canonical short URLs
      {
        source: '/mexico',
        destination: '/mx',
        permanent: true,
      },
      {
        source: '/colombia',
        destination: '/co',
        permanent: true,
      },
      {
        source: '/colombia/cursos-ia-ninos-colombia',
        destination: '/co/cursos-ia-ninos-colombia',
        permanent: true,
      },
      {
        source: '/colombia/clases-ia-ninos-bogota',
        destination: '/co/clases-ia-ninos-bogota',
        permanent: true,
      },
      {
        source: '/colombia/blog/:slug*',
        destination: '/co/blog/:slug*',
        permanent: true,
      },
      {
        source: '/argentina',
        destination: '/ar',
        permanent: true,
      },
      {
        source: '/chile',
        destination: '/cl',
        permanent: true,
      },
      {
        source: '/peru',
        destination: '/pe',
        permanent: true,
      },
      {
        source: '/espana',
        destination: '/es',
        permanent: true,
      },
      // SEO AUDIT FEB 2026: Consolidation Redirects (Kill List)
      // México
      { source: '/mx/cursos-ia-ninos-mexico', destination: '/mx', permanent: true },
      { source: '/mx/clases-ia-ninos-cdmx', destination: '/mx', permanent: true },
      // Colombia
      { source: '/co/cursos-ia-ninos-colombia', destination: '/co', permanent: true },
      { source: '/co/clases-ia-ninos-bogota', destination: '/co', permanent: true },
      // Argentina
      { source: '/ar/cursos-ia-chicos-argentina', destination: '/ar', permanent: true },
      { source: '/ar/clases-ia-chicos-buenos-aires', destination: '/ar', permanent: true },
      // Perú
      { source: '/pe/cursos-ia-ninos-peru', destination: '/pe', permanent: true },
      { source: '/pe/clases-ia-ninos-lima', destination: '/pe', permanent: true },
      // Chile
      { source: '/cl/cursos-ia-ninos-chile', destination: '/cl', permanent: true },
      { source: '/cl/clases-ia-ninos-santiago', destination: '/cl', permanent: true },
      // España
      { source: '/es/cursos-ia-ninos-espana', destination: '/es', permanent: true },
      { source: '/es/clases-ia-ninos-madrid', destination: '/es', permanent: true },
      // USA
      { source: '/us/cursos-ia-ninos-latinos-usa', destination: '/us', permanent: true },
      { source: '/us/clases-ia-ninos-miami', destination: '/us', permanent: true },
      // Uruguay
      { source: '/uy/cursos-ia-ninos-uruguay', destination: '/uy', permanent: true },
      { source: '/uy/clases-ia-ninos-montevideo', destination: '/uy', permanent: true },
      // Panamá
      { source: '/pa/cursos-ia-ninos-panama', destination: '/pa', permanent: true },
      { source: '/pa/clases-ia-ninos-panama-city', destination: '/pa', permanent: true },
      // Costa Rica
      { source: '/cr/cursos-ia-ninos-costa-rica', destination: '/cr', permanent: true },
      { source: '/cr/clases-ia-ninos-san-jose', destination: '/cr', permanent: true },
      // República Dominicana
      { source: '/do/cursos-ia-ninos-republica-dominicana', destination: '/do', permanent: true },
      { source: '/do/clases-ia-ninos-santo-domingo', destination: '/do', permanent: true },
      // Honduras
      { source: '/hn/cursos-ia-ninos-honduras', destination: '/hn', permanent: true },
      { source: '/hn/clases-ia-ninos-tegucigalpa', destination: '/hn', permanent: true },
      // El Salvador
      { source: '/sv/cursos-ia-ninos-el-salvador', destination: '/sv', permanent: true },
      { source: '/sv/clases-ia-ninos-san-salvador', destination: '/sv', permanent: true },
      // Guatemala
      { source: '/gt/cursos-ia-ninos-guatemala', destination: '/gt', permanent: true },
      { source: '/gt/clases-ia-ninos-ciudad-guatemala', destination: '/gt', permanent: true },
      // Paraguay
      { source: '/py/cursos-ia-ninos-paraguay', destination: '/py', permanent: true },
      { source: '/py/clases-ia-ninos-asuncion', destination: '/py', permanent: true },
      // Ecuador
      { source: '/ec/cursos-ia-ninos-ecuador', destination: '/ec', permanent: true },
      { source: '/ec/clases-ia-ninos-quito', destination: '/ec', permanent: true },
      // Bolivia
      { source: '/bo/cursos-ia-ninos-bolivia', destination: '/bo', permanent: true },
      { source: '/bo/clases-ia-ninos-la-paz', destination: '/bo', permanent: true },
      // Venezuela
      { source: '/ve/cursos-ia-ninos-venezuela', destination: '/ve', permanent: true },
      { source: '/ve/clases-ia-ninos-caracas', destination: '/ve', permanent: true },
      // Nicaragua
      { source: '/ni/cursos-ia-ninos-nicaragua', destination: '/ni', permanent: true },
      { source: '/ni/clases-ia-ninos-managua', destination: '/ni', permanent: true },
      // Puerto Rico
      { source: '/pr/cursos-ia-ninos-puerto-rico', destination: '/pr', permanent: true },
      { source: '/pr/clases-ia-ninos-san-juan', destination: '/pr', permanent: true },
      // Guinea Ecuatorial
      { source: '/gq/cursos-ia-ninos-guinea-ecuatorial', destination: '/gq', permanent: true },
      { source: '/gq/clases-ia-ninos-malabo', destination: '/gq', permanent: true },
      // Legacy Pages Cleanup (Round 2)
      { source: '/informacion', destination: '/clases-ia-ninos', permanent: true },
      { source: '/grupos-pequenos-5-alumnos', destination: '/clases-ia-ninos', permanent: true },
      { source: '/oferta-180', destination: '/clases-ia-ninos', permanent: true },
      { source: '/oferta-180a-aprender-c', destination: '/clases-ia-ninos', permanent: true }, // potential variation
    ]
  },
}

export default nextConfig
