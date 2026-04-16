import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://digitalkpk.com";

    const staticRoutes = [
        "",
        "/about",
        "/services",
        "/testimonials",
        "/blog",
        "/contact",
        "/privacy",
        "/terms",
    ];

    const serviceRoutes = [
        "/services/performance-marketing",
        "/services/seo-services",
        "/services/social-media",
        "/services/content-pr",
        "/services/web-dev",
        "/services/media-reach",
    ];

    const blogRoutes = [
        "/blog/maximize-roi-performance-marketing",
        "/blog/seo-best-practices-2026",
        "/blog/youtube-ads-vs-meta-ads",
        "/blog/power-of-digital-pr",
    ];

    const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date("2026-04-06"),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
    }));
}
