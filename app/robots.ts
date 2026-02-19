import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/pago/", "/pagar/", "/admin/", "/auth/", "/downloads/", "/colombia/", "/colombia"],
    },
    sitemap: "https://www.innovakidslatam.com/sitemap.xml",
  }
}
