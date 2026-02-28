export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  platform: string;
  initials: string;
  avatarColor: string;
}

// TODO: Replace with real testimonials when available
export const testimonials: Testimonial[] = [
  {
    quote: "We were drowning in support tickets. Our inspir operator handled 400+ tickets in the first month and cut response time by 60%. We went from same-day chaos to next-hour resolution.",
    name: "Sarah M.",
    role: "Founder",
    company: "Bloom & Wild Style",
    platform: "Shopify",
    initials: "SM",
    avatarColor: "#7c3aed"
  },
  {
    quote: "I was spending 15 hours a week on order admin. Now I spend zero. The weekly reports tell me everything I need to know without me having to ask. Exactly what I needed.",
    name: "James T.",
    role: "Director",
    company: "Oakfield Goods",
    platform: "WooCommerce",
    initials: "JT",
    avatarColor: "#1e40af"
  },
  {
    quote: "We tried three freelancers before inspir. The difference is night and day — consistent, documented, accountable. When I ask what happened with an order, there's always an answer.",
    name: "Priya K.",
    role: "Founder",
    company: "Heritage Homewares",
    platform: "Magento",
    initials: "PK",
    avatarColor: "#fb7185"
  }
];
