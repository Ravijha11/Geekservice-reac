import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CheckoutClient } from "@/components/shop/checkout/CheckoutClient";

export const metadata = {
  title: "Checkout",
  description: "Checkout.",
};

export default function CheckoutPage() {
  return (
    <Section className="bg-white">
      <Container className="py-10">
        <p className="text-xs text-[#222]/70">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/cart" className="hover:underline">
            Cart
          </Link>{" "}
          &gt; Checkout
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-[#222]">Checkout</h1>
        <div className="mt-8">
          <CheckoutClient />
        </div>
      </Container>
    </Section>
  );
}

