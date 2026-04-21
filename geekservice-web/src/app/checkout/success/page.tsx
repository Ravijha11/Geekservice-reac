import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Order placed",
  description: "Order confirmation.",
};

export default function CheckoutSuccessPage() {
  return (
    <Section className="bg-white">
      <Container className="py-16">
        <p className="text-xs text-[#222]/70">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt; Order placed
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-[#222]">
          Thanks — your order is placed.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[#222]/70">
          This checkout flow is implemented end-to-end in the UI (browse → filter →
          product → cart → checkout → confirmation). If you want real payment
          processing, we can connect Stripe next.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/shop" variant="brand" className="rounded-none">
            Continue shopping
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" className="rounded-none">
            Contact support
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

