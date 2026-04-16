"use client";

import { X, CheckCircle2 } from "lucide-react";
import { StaggerChildren, FadeInChild } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";

const problems = [
    { icon: X, text: "Wasted ad spend and untrackable ROI" },
    { icon: X, text: "Generic campaigns that drive low-intent traffic" },
    { icon: X, text: "Poor conversions and dropping search rankings" },
];

const solutions = [
    { icon: CheckCircle2, text: "Data-driven campaigns optimized for ROI" },
    { icon: CheckCircle2, text: "Intent-based targeting for high-quality leads" },
    { icon: CheckCircle2, text: "Continuous A/B testing and SEO domination" },
];

export function ProblemSolution() {
    return (
        <section className="py-16 md:py-24 bg-green-tint">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <StaggerChildren className="grid md:grid-cols-2 gap-8">
                    {/* The Old Way */}
                    <FadeInChild>
                        <Card className="h-full">
                            <h3 className="text-xl font-bold text-red-600 mb-6">The old way is broken</h3>
                            <div className="space-y-4">
                                {problems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <item.icon className="w-4 h-4 text-red-600" />
                                        </div>
                                        <span className="text-text-secondary">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </FadeInChild>

                    {/* The DigiTalk Way */}
                    <FadeInChild>
                        <Card className="h-full border-green-200">
                            <h3 className="text-xl font-bold text-primary-green mb-6">The DigiTalk way</h3>
                            <div className="space-y-4">
                                {solutions.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <item.icon className="w-4 h-4 text-primary-green" />
                                        </div>
                                        <span className="text-text-secondary">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </FadeInChild>
                </StaggerChildren>
            </div>
        </section>
    );
}
