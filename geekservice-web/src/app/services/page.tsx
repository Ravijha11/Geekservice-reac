import Link from "next/link";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, SectionInner } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Services",
  description: "Explore our tech support and repair services.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="border-b border-border/60">
        <SectionInner>
          <SectionHeading
            eyebrow="Services"
            title="Tech help that’s actually helpful"
            description="Pick a service to get details, typical turnaround, and what to expect."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request service</ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              View pricing
            </ButtonLink>
          </div>
        </SectionInner>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services#${svc.slug}`}
                className="group rounded-3xl border border-border/60 bg-background p-6 transition-colors hover:bg-muted/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-xl">
                    {svc.icon}
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold tracking-tight">
                      {svc.title}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {svc.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 space-y-6">
            {services.map((svc) => (
              <div
                key={svc.slug}
                id={svc.slug}
                className="scroll-mt-24 rounded-3xl border border-border/60 bg-background p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-xl font-semibold tracking-tight">
                      {svc.title}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {svc.details}
                    </p>
                  </div>
                  <ButtonLink href={`/contact?service=${svc.slug}`} size="sm">
                    Request this service
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

