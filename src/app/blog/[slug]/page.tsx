import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";

export async function generateStaticParams() {
    const slugs = [
        "maximize-roi-performance-marketing",
        "seo-best-practices-2026",
        "youtube-ads-vs-meta-ads",
        "power-of-digital-pr"
    ];
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    const titles: Record<string, string> = {
        "maximize-roi-performance-marketing": "How to Maximize ROI with Performance Marketing",
        "seo-best-practices-2026": "SEO Best Practices for 2026: What Actually Works",
        "youtube-ads-vs-meta-ads": "YouTube Ads vs Meta Ads: Where to Invest Your Budget?",
        "power-of-digital-pr": "The Power of Digital PR and Authority Link Building",
    };

    return {
        title: `${titles[slug] || "Blog Post"} | DigiTalk`,
        description: "Read our latest insights on digital marketing and SEO strategy.",
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-background-light">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <FadeIn>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary-green mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                        <Badge variant="green" className="mb-4">Digital Marketing</Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                            {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-text-muted">
                            <span>January 15, 2026</span>
                            <span>•</span>
                            <span>5 min read</span>
                            <span>•</span>
                            <span>By DigiTalk Team</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <FadeIn>
                        <article className="prose prose-lg max-w-none">
                            <p className="text-xl text-text-secondary mb-8">
                                This is a placeholder for the blog post content. In a full implementation, this would contain the complete article with proper formatting, headings, and insights.
                            </p>
                            <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
                                Key Takeaways
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-8">
                                <li>Mastering ROI optimization and reducing ad waste</li>
                                <li>Adapting to AI-driven SEO strategies and Core Web Vitals</li>
                                <li>Comparing Meta Ads with YouTube's intent-driven structure</li>
                                <li>Leveraging global publications for massive domain authority</li>
                            </ul>
                            <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">
                                Getting Started
                            </h2>
                            <p className="text-text-secondary mb-6">
                                Ready to explore how data-driven digital marketing can transform your business? Our team is here to help you scale your reach and maximize conversions.
                            </p>
                            <div className="bg-green-tint p-6 rounded-xl mt-12">
                                <h3 className="font-semibold text-text-primary mb-2">Ready to Scale Your Brand?</h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Let&apos;s discuss how we can build a high-performance marketing engine for you.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-primary-green font-medium hover:underline"
                                >
                                    Book a Consultation →
                                </Link>
                            </div>
                        </article>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
