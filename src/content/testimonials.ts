export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    service: string;
    industry: string;
    avatar?: string;
    featured?: boolean;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        quote: "Coming Soon",
        author: "John Doe",
        role: "Coming Soon",
        company: "Coming Soon",
        rating: 5,
        service: "tech-staffing",
        industry: "Professional Services"
    },
    {
        id: "2",
        quote: "Coming Soon",
        author: "John Doe",
        role: "Coming Soon",
        company: "Coming Soon",
        rating: 5,
        service: "tech-staffing",
        industry: "Professional Services"
    }
];

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
    return testimonials.filter(t => t.service === serviceSlug);
}

export function getFeaturedTestimonial(): Testimonial | undefined {
    return testimonials.find(t => t.featured);
}
