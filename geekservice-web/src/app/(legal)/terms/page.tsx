import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Section>
      <Container className="prose prose-zinc max-w-3xl dark:prose-invert">
        <h1>Terms of Service</h1>
        <p>
          This is a placeholder terms page. Replace it with your actual terms,
          including payment, refunds, warranties, and limitations.
        </p>
        <h2>Service</h2>
        <p>
          We provide technology support services as described on this website.
        </p>
        <h2>Contact</h2>
        <p>
          Questions? Contact us through the Contact page.
        </p>
      </Container>
    </Section>
  );
}

