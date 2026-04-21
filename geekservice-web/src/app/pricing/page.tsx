import { pricingPlans } from "@/content/pricing";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, SectionInner } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Pricing",
  description: "Simple packages for fast, predictable tech help.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="border-b border-border/60">
        <SectionInner>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent packages"
            description="Choose what fits your needs. If you’re not sure, we’ll recommend the best option after a quick chat."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Talk to us</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Browse services
            </ButtonLink>
          </div>
        </SectionInner>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-3xl border border-border/60 bg-background p-6 sm:p-8"
              >
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">
                    {plan.name}
                  </p>
                  <p className="text-3xl font-semibold tracking-tight">
                    {plan.price}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-0.5">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href={`/contact?plan=${plan.id}`} className="w-full">
                    Choose {plan.name}
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

