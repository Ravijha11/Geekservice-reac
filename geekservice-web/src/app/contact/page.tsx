import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, SectionInner } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact",
  description: "Request support or ask a question.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-border/60">
        <SectionInner>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what’s going on"
            description="Share a few details and we’ll get back to you with next steps."
          />
        </SectionInner>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-muted/20 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Fast, Expert Repairs — Delivered Directly to Your Door.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We put your repair needs first with professional, on-site solutions.
              Whether you are facing issues with a computer, printer, or household
              appliance, our local team is ready to help. Simply reach out to
              schedule a visit, and an expert technician will arrive at your
              doorstep to get things running smoothly.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Local Experts:</span>{" "}
                Real technicians visiting your home or office.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Prompt Service:
                </span>{" "}
                Quick response times to minimize your downtime.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Pay After Service:
                </span>{" "}
                Your peace of mind is guaranteed—you only pay once the repair is
                complete.
              </li>
            </ul>

            <p className="mt-6 text-sm font-semibold text-foreground">
              Call Us For Appointment
            </p>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li>
                Call our booking desk today to schedule your on-site repair.
                Provide your address and the issue you’re facing, and our team
                will get in touch quickly to confirm your visit.
              </li>
              <li>
                <span className="font-medium text-foreground">Local Experts:</span>{" "}
                Thousands of certified technicians across the country.
              </li>
              <li>
                <span className="font-medium text-foreground">One-Visit Fix:</span>{" "}
                Most repairs are completed in a single trip to your home.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Same-Day Service:
                </span>{" "}
                We prioritize getting your devices back to peak performance
                immediately.
              </li>
            </ul>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Direct contact</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-background p-6 sm:p-10">
            <p className="text-4xl font-semibold tracking-tight">Inquire Today</p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Service Inquiry
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

