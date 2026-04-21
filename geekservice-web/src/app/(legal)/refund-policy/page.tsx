import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata = {
  title: "Refund Policy",
  description: "Refund policy for Geek Care LLC.",
};

export default function RefundPolicyPage() {
  return (
    <Section className="border-b border-border/60">
      <Container className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="Legal"
          title="Refund Policy"
          description="This policy explains when refunds may be available."
        />
        <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert">
          <p>
            If you believe you were charged in error or you are unhappy with a
            service outcome, please contact us as soon as possible so we can
            review the situation.
          </p>
          <ul>
            <li>
              Refund eligibility may depend on the type of service performed and
              the time since service completion.
            </li>
            <li>
              Certain fees (such as diagnostic or on-site visit fees) may be
              non-refundable once work has started or a technician has been
              dispatched.
            </li>
            <li>
              Approved refunds are issued back to the original payment method
              whenever possible.
            </li>
          </ul>
          <p>
            For refund requests, email <strong>billing</strong> at{" "}
            <a href="mailto:hello@example.com">hello@example.com</a> with your
            name, contact number, service date, and a brief description of the
            issue.
          </p>
        </div>
      </Container>
    </Section>
  );
}

