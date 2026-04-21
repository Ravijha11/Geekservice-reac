import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, SectionInner } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "About",
  description: "Meet the team behind GeekService and how we work.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border/60">
        <SectionInner>
          <SectionHeading
            eyebrow="About"
            title="A calm approach to frustrating tech"
            description="We focus on clear communication, fast turnaround, and fixes that stick."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Get support</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View services
            </ButtonLink>
          </div>
        </SectionInner>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">
              What we do
            </h3>
            <p className="text-muted-foreground">
              We help individuals and small businesses with computer repair,
              device setup, networking, performance tune-ups, security, and
              ongoing support. Our goal is simple: get you back to work quickly
              and confidently.
            </p>
            <p className="text-muted-foreground">
              You’ll always get a plain-language explanation, a clear estimate,
              and a recommendation you can trust.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-muted/30 p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight">How we work</h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>1. Quick intake: tell us the symptoms and urgency.</li>
              <li>2. Diagnose: we identify the root cause, not just the error.</li>
              <li>3. Fix: we repair, optimize, or replace what’s needed.</li>
              <li>4. Verify: we test and document what changed.</li>
              <li>5. Follow-up: we ensure you’re stable after delivery.</li>
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
}

