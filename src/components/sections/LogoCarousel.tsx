"use client";

import Image from "next/image";

const clientLogos = [
    "/assets/clients/beaconhouse.png",
    "/assets/clients/bol.png",
    "/assets/clients/changan.png",
    "/assets/clients/coca cola.png",
    "/assets/clients/damas.png",
    "/assets/clients/geo.png",
    "/assets/clients/gree.png",
    "/assets/clients/haroon sharif.png",
    "/assets/clients/honda.png",
    "/assets/clients/infinix.png",
    "/assets/clients/junaid.png",
    "/assets/clients/kitandkaboodle.png",
    "/assets/clients/knorr.png",
    "/assets/clients/lacas.png",
    "/assets/clients/lays.png",
    "/assets/clients/lifebuoy.png",
    "/assets/clients/oasis.png",
    "/assets/clients/pepsi.png",
    "/assets/clients/pso.png",
    "/assets/clients/sapphire.png",
    "/assets/clients/swarovski.png",
    "/assets/clients/tapal danedar.png",
    "/assets/clients/tippitoes.png",
    "/assets/clients/total parco.png",
];

interface LogoCarouselProps {
    className?: string;
    showTitle?: boolean;
    title?: string;
    logos?: string[];
    speed?: number;
}

export function LogoCarousel({
    className = "",
    showTitle = true,
    title = "Trusted by innovative companies",
    logos = clientLogos,
    speed = 40
}: LogoCarouselProps) {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className={`py-12 bg-white border-b border-slate-100 overflow-hidden group ${className}`}>
            {showTitle && (
                <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
                    <p className="text-center text-text-muted text-sm">
                        {title}
                    </p>
                </div>
            )}

            <div className="relative flex">
                <div
                    className="flex whitespace-nowrap gap-12 items-center animate-marquee"
                    style={{
                        animationDuration: `${speed}s`,
                    }}
                >
                    {duplicatedLogos.map((logo, i) => (
                        <div
                            key={i}
                            className="w-32 md:w-48 h-20 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                src={logo}
                                alt="Client Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
