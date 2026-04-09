import { Megaphone, Search, Share2, FileText, Code2, Globe } from "lucide-react";
import React from "react";

export interface ContentBlock {
    title: string;
    description?: string;
    items?: {
        title: string;
        description: string;
    }[];
}

export interface Service {
    slug: string;
    title: string;
    icon: string;
    tagline: string;
    description: string;
    features: string[];
    industry?: string[];
    contentBlocks?: ContentBlock[];
}

export const services: Service[] = [
    {
        slug: "performance-marketing",
        title: "Performance Marketing",
        icon: "Megaphone",
        tagline: "Drive high-intent traffic with targeted ads.",
        description: "Maximize your online visibility and drive conversions through data-driven campaigns on the world's most popular advertising platforms.",
        features: [
            "Google Ads Management",
            "Meta Ads (Facebook & Instagram)",
            "Intent-Based Strategy",
            "A/B Testing & Optimization",
            "Real-Time ROI Reporting",
            "Landing Page Optimization"
        ],
        contentBlocks: [
            {
                title: 'Google Ads - The "Performance & Speed" Tone',
                items: [
                    { title: "Step 1: The Deep Dive", description: "We analyze your rivals and find the \"low-hanging fruit\" keywords they've missed." },
                    { title: "Step 2: Intent-Based Strategy", description: "We build a structure that targets buyers, not browsers, minimizing wasted spend." },
                    { title: "Step 3: Magnetic Ads", description: "Action-driven copy and high-quality visuals designed to stop the scroll and drive clicks." },
                    { title: "Step 4: Landing Page Logic", description: "We optimize your site for speed and \"one-tap\" conversions (WhatsApp, Call, or Form)." },
                    { title: "Step 5: Smart Deployment", description: "We use AI-driven bidding and full conversion tracking to ensure every dollar works harder." },
                    { title: "Step 6: Constant Refinement", description: "Continuous A/B testing and budget shifts to maximize your top-performing ad sets." },
                    { title: "Step 7: Real-Time Reporting", description: "No-nonsense updates on the metrics that actually matter: Leads and ROI." }
                ]
            },
            {
                title: 'Meta Ads - The "Punchy & Direct" Style',
                items: [
                    { title: "Step 1: Goal Alignment", description: "We define what success looks like for you—then we build a map to get there." },
                    { title: "Step 2: Profile Polishing", description: "We optimize your Facebook assets to ensure they are high-converting \"digital storefronts.\"" },
                    { title: "Step 3: Custom Roadmap", description: "A tailored marketing plan designed specifically for your audience's unique behavior." },
                    { title: "Step 4: Lead Mastery", description: "We manage your inquiries professionally so you never miss a conversion opportunity." },
                    { title: "Step 5: Launch & Monitor", description: "Data-driven campaign setup with constant oversight to keep performance high." },
                    { title: "Step 6: Zero-Waste Spending", description: "We stop the \"budget bleed\" by cutting low-performing ads and scaling the winners." },
                    { title: "Step 7: Clear Insights", description: "Honest, detailed reporting that shows exactly how your investment is growing." }
                ]
            }
        ]
    },
    {
        slug: "seo-services",
        title: "SEO Services",
        icon: "Search",
        tagline: "Rank higher and dominate search results.",
        description: "Comprehensive SEO strategies that align technical foundation, content relevance, and domain authority to capture organic traffic.",
        features: [
            "Technical SEO & Core Web Vitals",
            "On-page Optimization & Keyword Research",
            "Off-page SEO & Link Building",
            "Local SEO & GBP Optimization",
            "AEO (Answer Engine Optimization)",
            "AI-Driven SEO Strategies"
        ],
        contentBlocks: [
            {
                title: "01. Technical SEO (The Foundation)",
                items: [
                    { title: "Site Speed & Core Web Vitals", description: "Optimizing for sub-2-second load times." },
                    { title: "Mobile-First Optimization", description: "Ensuring the experience is flawless on smartphones." },
                    { title: "SSL & Security", description: "Implementing HTTPS and securing data." },
                    { title: "Indexing & Crawlability", description: "Fixing broken links (404s), managing sitemaps, and robots.txt files." },
                    { title: "Schema Markup", description: "Adding \"hidden\" code that helps Google understand your specific services, reviews, and location." }
                ]
            },
            {
                title: "02. On-Page SEO (The Content)",
                items: [
                    { title: "Keyword Research & Intent Mapping", description: "Finding what your customers are actually typing (e.g., \"Remote staff for UK startups\" vs. \"Hire cheap developers\")." },
                    { title: "Title Tags & Meta Descriptions", description: "Writing the \"headlines\" that appear in Google search results." },
                    { title: "Header Hierarchy", description: "Organizing content using H1, H2, and H3 tags for readability." },
                    { title: "Internal Linking", description: "Connecting your pages so users (and Google) stay on your site longer." },
                    { title: "Image Alt-Text", description: "Describing images so they show up in Image Search." }
                ]
            },
            {
                title: "03. Off-Page SEO & Authority (The Reputation)",
                items: [
                    { title: "Link Building", description: "Getting high-quality websites to link back to yours (Digital PR)." },
                    { title: "Brand Mentions", description: "Increasing how often your business is mentioned across the web." },
                    { title: "Guest Posting", description: "Writing expert articles for industry blogs to establish authority." }
                ]
            },
            {
                title: "04. Local SEO (For Service Areas)",
                items: [
                    { title: "Google Business Profile", description: "Setting up and optimizing your \"Map\" listing." },
                    { title: "Local Citations", description: "Ensuring your Name, Address, and Phone (NAP) are consistent across all directories." },
                    { title: "Review Management", description: "Strategies for gathering and responding to customer reviews." }
                ]
            },
            {
                title: "05. AEO (Answer Engine Optimization)",
                items: [
                    { title: "Conversational Content", description: "Writing in a way that answers direct questions (e.g., \"How much does it cost to hire an OG2 banker in Pakistan?\")." },
                    { title: "Topic Clusters", description: "Building deep \"pillars\" of knowledge to prove you are an expert in your niche." }
                ]
            }
        ]
    },
    {
        slug: "social-media",
        title: "Social Media Management",
        icon: "Share2",
        tagline: "Build a community and engage your audience.",
        description: "Expert management of your social profiles to establish a strong brand presence, engage with followers, and drive organic growth.",
        features: [
            "Instagram, Facebook, LinkedIn",
            "Content Strategy & Planning",
            "Post & Reel Creation",
            "Video Editing & Production",
            "Community Engagement",
            "Analytics & Growth Tracking"
        ]
    },
    {
        slug: "content-pr",
        title: "Content & PR",
        icon: "FileText",
        tagline: "Craft compelling stories that resonate.",
        description: "Establish authority and amplify your brand narrative through high-quality content writing and strategic public relations.",
        features: [
            "Content Writing & Copywriting",
            "Celebrity PR & Influencer Marketing",
            "Pre-written & Native Articles",
            "Press Release Distribution",
            "Thought Leadership",
            "Brand Reputation Management"
        ]
    },
    {
        slug: "web-dev",
        title: "Website Development",
        icon: "Code2",
        tagline: "Stunning, high-performance digital storefronts.",
        description: "Custom website development focusing on speed, aesthetics, and high conversion rates tailored for your business needs.",
        features: [
            "Custom Web Design & Development",
            "E-commerce Solutions",
            "Landing Page Creation",
            "Performance Optimization",
            "Mobile-First Responsive Design",
            "CMS Integration"
        ]
    },
    {
        slug: "media-reach",
        title: "Media Reach / PR Network",
        icon: "Globe",
        tagline: "Get featured on top national and global publications.",
        description: "Leverage our extensive media network to get your brand featured on top-tier news outlets and publications.",
        features: [
            "Featured on Dawn & Tribune",
            "Express & Hum Network",
            "ARY & The Nation",
            "The News & Pakistan Today",
            "Daily Times & Pak Analysis",
            "Post Pakistan Placements"
        ]
    }
];

// Static icon lookup to avoid creating components during render
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    Megaphone,
    Search,
    Share2,
    FileText,
    Code2,
    Globe
};

export function getServiceIcon(iconName: string): React.ComponentType<{ className?: string }> {
    return iconComponents[iconName] || Globe;
}

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
}
