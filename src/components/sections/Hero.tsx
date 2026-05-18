"use client";

import Link from "next/link";
import { ArrowRight, Star, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-mesh grid-pattern" />

            {/* Animated orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-green-light/10 rounded-full blur-3xl animate-float-delayed" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex mb-4"
                    >
                        <span className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white bg-gradient-to-r from-primary-green/20 via-primary-green-light/20 to-primary-green/20 backdrop-blur-md border border-primary-green/30 shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-green/0 via-primary-green/10 to-primary-green/0 blur-xl opacity-70" aria-hidden="true" />
                            <Sparkles className="w-3.5 h-3.5 text-primary-green-light relative z-10" />
                            <span className="relative z-10 bg-gradient-to-r from-white via-primary-green-light to-white bg-clip-text text-transparent">
                                Digital Marketing Agency
                            </span>
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
                        Empowering Businesses to Thrive in the Digital Era
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Innovate - Influence - Inspire. We deliver exceptional digital marketing solutions that drive growth and create meaningful connections.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/contact">
                            <Button size="lg" className="group">
                                Start Your Journey
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-white/10 hover:border-white">
                                Explore Our Services
                            </Button>
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center justify-center gap-2 pt-6 text-sm">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-slate-400">Trusted by leading companies globally since 2015</span>
                    </div>
                </motion.div>

                {/* Dashboard Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 relative"
                >
                    <div className="bg-surface-dark/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-4 md:p-8 max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {[
                                { label: "Projects Delivered", value: "1200+" },
                                { label: "Active Clients", value: "150+" },
                                { label: "Founded", value: "2015" },
                                { label: "Managed Spend", value: "$5M+" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-4xl font-bold text-primary-green mb-1">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-slate-400"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
