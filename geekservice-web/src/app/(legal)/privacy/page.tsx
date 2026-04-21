import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="prose prose-zinc max-w-3xl dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>
          This is a placeholder privacy policy. Replace it with your actual
          policy and details about what data you collect, how you use it, and
          how users can contact you.
        </p>
        <h2>Information we collect</h2>
        <p>
          Typical information includes name, email, phone, and the message you
          submit through our contact forms.
        </p>
        <h2>Contact</h2>
        <p>
          If you have questions, contact us through the Contact page.
        </p>
      </Container>
    </Section>
  );
}

