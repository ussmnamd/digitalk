import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, MapPin, Users, Target, Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About Us | DigiTalk",
    description: "Learn about DigiTalk's mission to empower businesses. Discover our story, values, and global presence.",
};

const values = [
    {
        icon: Target,
        title: "Quality First",
        description: "We never compromise on talent quality. Every candidate is rigorously vetted to ensure they meet our high standards."
    },
    {
        icon: Users,
        title: "Partnership",
        description: "We see ourselves as an extension of your team, not just a vendor. Your success is our success."
    },
    {
        icon: Heart,
        title: "Transparency",
        description: "Clear communication, honest pricing, and straightforward processes. No hidden fees or surprises."
    }
];

const team = [
    { name: "Kamran Tayyab", role: "Founder", location: "Global" },
];

const locations = [
    { name: "United Kingdom", flag: "🇬🇧", description: "Global HQ" },
    { name: "Pakistan", flag: "🇵🇰", description: "Operations Hub" },
];

export default function AboutPage() {
    return (
        <>
            {/* Premium Hero */}
            <section className="relative pt-32 pb-24 md:pb-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-green/20 to-transparent blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-green-light/20 rounded-full blur-3xl animate-float pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="max-w-3xl">
                        <Badge variant="green" className="mb-6 px-4 py-1.5 text-sm uppercase tracking-widest bg-primary-green/10 text-primary-green border-primary-green/20">
                            About Us
                        </Badge>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
                            Redefining Digital <br className="hidden md:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green-light to-primary-green">
                                Excellence
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Welcome to DigiTalk, where the power of digital marketing meets
                            limitless possibilities! Since our establishment in 2015, we have been
                            on a mission to transform the way businesses connect, engage,
                            and succeed in the ever-evolving digital landscape.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Mission & Vision - Split Layout with Glassmorphism */}
            <section className="py-20 md:py-32 bg-background-light relative">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Mission */}
                        <FadeIn className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-green to-primary-green-light rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
                            <div className="relative bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-green-tint flex items-center justify-center mb-8">
                                    <Target className="w-8 h-8 text-primary-green" />
                                </div>
                                <h2 className="text-3xl font-bold text-text-primary mb-6">Our Mission</h2>
                                <p className="text-lg text-text-secondary leading-relaxed flex-1">
                                    At Digitalk, our mission is to empower businesses and brands to thrive in the digital era. We are committed to delivering exceptional digital marketing solutions that drive growth, create meaningful connections, and exceed our clients' expectations. Through our strategic expertise, innovative approach, and unwavering dedication, we strive to be the catalyst for our clients' digital success.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Vision */}
                        <FadeIn delay={0.2} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-l from-primary-green to-primary-green-light rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
                            <div className="relative bg-surface-dark rounded-3xl p-10 md:p-14 shadow-2xl shadow-slate-900/50 border border-slate-800 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                                    <div className="w-8 h-8 text-white">✨</div>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                                <p className="text-lg text-slate-300 leading-relaxed flex-1">
                                    Our vision is to be the leading digital marketing agency globally, renowned for our unmatched creativity, strategic insights, and measurable results. We aim to revolutionize the digital landscape by pushing boundaries, embracing emerging technologies, and continuously evolving our methodologies. With a relentless pursuit of excellence, we aspire to be the trusted partner for businesses seeking to dominate their industries and leave a lasting impact in the digital realm.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Stats & Quote Section */}
                    <FadeIn delay={0.4} className="mt-24">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-lg shadow-slate-200/20 border border-slate-100">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <div className="text-5xl font-extrabold text-text-primary">50+</div>
                                            <div className="text-sm font-medium text-text-muted uppercase tracking-wider">Partner Companies</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-5xl font-extrabold text-text-primary">400+</div>
                                            <div className="text-sm font-medium text-text-muted uppercase tracking-wider">Happy Clients</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-5xl font-extrabold text-text-primary">2015</div>
                                            <div className="text-sm font-medium text-text-muted uppercase tracking-wider">Established</div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-green-light">Global</div>
                                            <div className="text-sm font-medium text-text-muted uppercase tracking-wider">Reach</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative pl-8 md:pl-12 border-l-2 border-green-tint">
                                    {/* Decorative Quote Mark */}
                                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-4 text-7xl text-primary-green/20 font-serif">"</div>
                                    <p className="text-2xl md:text-3xl font-medium text-text-primary leading-tight italic mb-8">
                                        As an agency working with clients and companies, directly and indirectly. We have managed to accumulate a handsome amount of client profile and achieve positive, fruitful and excellent milestones.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-green shadow-lg relative shrink-0">
                                            <Image
                                                src="/assets/team/founder.jpg"
                                                alt="Kamran Tayyab"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-text-primary text-lg leading-tight">Kamran Tayyab</div>
                                            <div className="text-primary-green font-medium">Founder, DigiTalk</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-primary-green uppercase mb-4">Our Values</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary">
                            What Drives Us
                        </h3>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <FadeIn key={value.title} delay={i * 0.1}>
                                <div className="group h-full p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:border-primary-green/20 transition-all duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-green-tint transition-all duration-500">
                                        <value.icon className="w-8 h-8 text-primary-green" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-text-primary mb-4">{value.title}</h4>
                                    <p className="text-text-secondary text-lg leading-relaxed">{value.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-green via-slate-900 to-slate-900" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
                    <FadeIn className="mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-primary-green uppercase mb-4">Global Presence</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white">
                            Serving Clients Worldwide
                        </h3>
                    </FadeIn>
                    <div className="flex flex-wrap justify-center gap-12">
                        {locations.map((location, i) => (
                            <FadeIn key={location.name} delay={i * 0.1}>
                                <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-colors w-64">
                                    <div className="text-6xl mb-6 shadow-sm inline-block">{location.flag}</div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{location.name}</h4>
                                    <p className="text-slate-400 font-medium">{location.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-b from-white to-green-tint/30">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center text-text-primary">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
                            Ready to transform your digital presence?
                        </h2>
                        <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                            Let's discuss how we can help you build your dream brand and achieve your goals.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="px-10 h-14 text-lg rounded-full shadow-xl shadow-primary-green/20 hover:scale-105 transition-all">
                                Let's Talk
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
