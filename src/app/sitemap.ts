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
        "/services/marketing",
        "/services/customer-support-operations",
        "/services/tech-staffing",
        "/services/design-creative",
    ];

    const blogRoutes = [
        "/blog/outstaffing-vs-outsourcing",
        "/blog/building-remote-team-culture",
        "/blog/hiring-remote-developers",
        "/blog/cost-benefits-remote-staffing",
    ];

    const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date("2026-04-06"),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
    }));
}
