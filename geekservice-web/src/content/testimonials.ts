export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Home office",
    quote:
      "They explained everything clearly and fixed my laptop the same day. It feels brand new again.",
  },
  {
    name: "Jason L.",
    role: "Small business owner",
    quote:
      "Fast, professional, and honest. They improved our Wi‑Fi coverage and reduced support tickets immediately.",
  },
  {
    name: "Priya K.",
    role: "Student",
    quote:
      "No pressure upsells—just the fix I needed and a few tips to prevent it from happening again.",
  },
];

