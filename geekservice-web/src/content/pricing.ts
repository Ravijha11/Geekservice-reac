export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "quick-fix",
    name: "Quick Fix",
    price: "$79+",
    description: "Best for straightforward issues and quick diagnostics.",
    features: [
      "Basic diagnostics",
      "Common software fixes",
      "Security check",
      "Clear next-step recommendation",
    ],
  },
  {
    id: "repair-optimize",
    name: "Repair + Optimize",
    price: "$149+",
    description: "Best when your device is slow, unstable, or acting strange.",
    features: [
      "Full diagnostics",
      "Performance tune-up",
      "OS and driver updates",
      "Malware cleanup (if needed)",
      "Stability verification",
    ],
  },
  {
    id: "business-support",
    name: "Business Support",
    price: "Custom",
    description: "Ongoing support for teams, devices, and networking.",
    features: [
      "Priority scheduling",
      "User/device support",
      "Wi‑Fi and router configuration",
      "Onboarding/offboarding basics",
      "Monthly or on-demand options",
    ],
  },
];

