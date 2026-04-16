"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, FadeInChild } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your business metrics, target audience, and growth objectives to build a customized digital marketing roadmap."
    },
    {
        number: "02",
        title: "Campaign Development",
        description: "Our team crafts engaging ad creatives, highly targeted funnels, and optimized landing pages designed to drive maximum conversions."
    },
    {
        number: "03",
        title: "Launch & Optimize",
        description: "Your campaigns are deployed with continuous real-time tracking, A/B testing, and data-driven adjustments to ensure long-term ROI."
    }
];

export function HowItWorks() {
    return (
        <section className="py-16 md:py-24 bg-surface-dark">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <FadeIn className="text-center mb-12">
                    <Badge variant="default" className="mb-4 text-white bg-slate-700">The Process</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        From First Call to Campaign Launch in 3 Simple Steps
                    </h2>
                </FadeIn>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-primary-green/30" />

                    <StaggerChildren className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step) => (
                            <FadeInChild key={step.number}>
                                <div className="relative text-center lg:text-left">
                                    <div className="text-6xl lg:text-8xl font-bold text-primary-green/20 mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </FadeInChild>
                        ))}
                    </StaggerChildren>
                </div>

                <FadeIn className="text-center mt-12">
                    <Link href="/contact">
                        <Button size="lg" className="group">
                            Ready to start? Book your discovery call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
