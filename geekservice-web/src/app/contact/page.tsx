import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, SectionInner } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact",
  description: "Reach out to Geek Care LLC for assistance.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-border/60">
        <SectionInner>
          <SectionHeading
            eyebrow="Contact"
            title="Reach Out to Geek Care LLC - Contact Us for Assistance"
            description="We’re here to help with your service and support needs."
          />
        </SectionInner>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-muted/20 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Contact Information
            </p>

            <p className="mt-4 text-lg font-semibold tracking-tight text-foreground">
              Geek Care LLC
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              451 Anchor Ln, Gun Barrel City, TX 75156, United States
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Customer Support</p>
              <p>{siteConfig.contact.phone}</p>
              <p>
                E-mail:{" "}
                <a className="font-medium text-foreground" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Customer Service Team</p>
              <p>Customer Support : {siteConfig.contact.phone}</p>
            </div>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Let’s talk
              </p>
              <p>
                <a className="font-medium text-foreground" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="font-medium text-foreground">{siteConfig.contact.phone}</p>
            </div>

            <div className="mt-8 space-y-1 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Hours</p>
              <p>Mon - Fri 9:00 am – 5:00 pm</p>
              <p>Saturday 9:00 am – 2:00 pm</p>
              <p>Sunday 9:00 am – 2:00 pm</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-background p-6 sm:p-10">
            <p className="text-4xl font-semibold tracking-tight">Contact Us</p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Service Inquiry</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

