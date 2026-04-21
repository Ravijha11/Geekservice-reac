import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BookingWidget } from "@/components/booking/BookingWidget.client";
import { Suspense } from "react";

export const metadata = {
  title: "Book",
  description: "Schedule your service appointment.",
};

export default function BookPage() {
  return (
    <Section className="bg-white">
      <Container className="py-10">
        <Suspense fallback={<div className="text-sm text-[#222]/70">Loading…</div>}>
          <BookingWidget />
        </Suspense>
      </Container>
    </Section>
  );
}

