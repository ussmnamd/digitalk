import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Book a Free Strategy Session | DigiTalk",
    description: "Get in touch with DigiTalk. Book a free consultation to discuss your digital marketing needs.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
