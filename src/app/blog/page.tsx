import Link from "next/link";
import { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
    title: "Blog | Digital Marketing & SEO Insights | DigiTalk",
    description: "Discover insights on performance marketing, SEO best practices, and building high-growth digital brands.",
};

const posts = [
    {
        slug: "maximize-roi-performance-marketing",
        title: "How to Maximize ROI with Performance Marketing",
        description: "Discover data-driven strategies to reduce ad spend waste and significantly increase your conversion rates padding your bottom line.",
        category: "Performance Marketing",
        date: "April 10, 2026",
        readTime: "5 min read"
    },
    {
        slug: "seo-best-practices-2026",
        title: "SEO Best Practices for 2026: What Actually Works",
        description: "A look into Answer Engine Optimization (AEO), AI-driven SEO strategies, and why Core Web Vitals remain non-negotiable.",
        category: "SEO",
        date: "April 5, 2026",
        readTime: "7 min read"
    },
    {
        slug: "youtube-ads-vs-meta-ads",
        title: "YouTube Ads vs Meta Ads: Where to Invest Your Budget?",
        description: "Compare the visual hook strategy of YouTube against the punchy direct style of Meta to see what drives the highest intent conversions.",
        category: "Social Media",
        date: "March 28, 2026",
        readTime: "6 min read"
    },
    {
        slug: "power-of-digital-pr",
        title: "The Power of Digital PR and Authority Link Building",
        description: "How feature placements on top national and global publications can effortlessly boost your domain authority and organic traffic.",
        category: "Content & PR",
        date: "March 15, 2026",
        readTime: "8 min read"
    },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 md:pb-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center max-w-3xl mx-auto">
                        <Badge variant="green" className="mb-4">Blog</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            Digital Marketing Insights
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Expert perspectives on performance marketing, SEO strategies, and driving high-intent traffic to your business.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <FadeIn key={post.slug} delay={i * 0.1}>
                                <Link href={`/blog/${post.slug}`}>
                                    <Card hover className="h-full group">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Badge variant="green" className="text-xs">{post.category}</Badge>
                                        </div>
                                        <h2 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary-green transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-text-muted">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </Card>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
