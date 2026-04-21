import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CartClient } from "@/components/shop/cart/CartClient";

export const metadata = {
  title: "Cart",
  description: "Your cart.",
};

export default function CartPage() {
  return (
    <Section className="bg-white">
      <Container className="py-10">
        <p className="text-xs text-[#222]/70">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt; Cart
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-[#222]">Cart</h1>
        <div className="mt-8">
          <CartClient />
        </div>
      </Container>
    </Section>
  );
}

