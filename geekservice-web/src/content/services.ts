export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  icon: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "pc-laptop-repair",
    title: "PC & laptop repair",
    summary: "Crashes, slowdowns, overheating, boot issues, and hardware swaps.",
    details:
      "We diagnose the root cause, replace failing parts when needed, and verify stability with real-world testing. Includes tune-up recommendations so the issue doesn’t come back.",
    icon: "🛠️",
    featured: true,
  },
  {
    slug: "virus-security-cleanup",
    title: "Virus & security cleanup",
    summary: "Remove malware, lock down accounts, and harden your device.",
    details:
      "We clean infections, review startup items/extensions, and help secure your passwords and recovery options. You’ll leave with practical security steps—not fear.",
    icon: "🛡️",
    featured: true,
  },
  {
    slug: "wifi-networking",
    title: "Wi‑Fi & networking",
    summary: "Dead zones, slow speeds, router setup, and mesh networks.",
    details:
      "We optimize placement and channels, configure secure Wi‑Fi, and ensure your devices connect reliably. Great for home offices and small teams.",
    icon: "📶",
    featured: true,
  },
  {
    slug: "new-device-setup",
    title: "New device setup",
    summary: "Setup, data transfer, accounts, updates, and app installs.",
    details:
      "We set up your new PC/Mac, move your files, configure backups, and make sure essentials (email, printer, browser, security) are ready on day one.",
    icon: "✨",
  },
  {
    slug: "performance-tune-up",
    title: "Performance tune‑up",
    summary: "Speed up a slow computer and fix common stability issues.",
    details:
      "We remove bloat, update drivers/OS, review storage health, and suggest upgrades only when they meaningfully improve performance.",
    icon: "⚡",
  },
  {
    slug: "small-business-support",
    title: "Small business support",
    summary: "Ongoing help for devices, users, and office networking.",
    details:
      "On-call troubleshooting, onboarding/offboarding basics, Wi‑Fi and shared device setup, and proactive recommendations to reduce downtime.",
    icon: "🏢",
  },
];

export const featuredServices = services.filter((s) => s.featured);

