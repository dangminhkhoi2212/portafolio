import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL!

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl.endsWith("/") ? baseUrl : baseUrl + "/"}sitemap.xml`,
  }
}
