import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DigiTalk | Full-Service Digital Marketing Agency",
  description: "Scale your brand with DigiTalk's data-driven digital marketing solutions. Specialized in SEO, Performance Marketing, and Social Media Strategy.",
  keywords: ["digital marketing", "SEO", "PPC", "Social Media Marketing", "Content Strategy", "Performance Marketing", "Paid Ads"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://digitalkpk.com",
  },
  openGraph: {
    title: "DigiTalk | Full-Service Digital Marketing Agency",
    description: "Scale your brand with DigiTalk's data-driven digital marketing solutions. Specialized in SEO, Performance Marketing, and Social Media Strategy.",
    url: "https://digitalkpk.com",
    siteName: "DigiTalk",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiTalk | Full-Service Digital Marketing Agency",
    description: "Scale your brand with DigiTalk's data-driven digital marketing solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DigiTalk",
    url: "https://digitalkpk.com",
    description: "Scale your brand with DigiTalk's data-driven digital marketing solutions. Specialized in SEO, Performance Marketing, and Social Media Strategy.",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      email: "sales@digitalkpk.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
    ],
    sameAs: [
      "https://linkedin.com/company/digitalkpk",
      "https://twitter.com/digitalkpk",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
