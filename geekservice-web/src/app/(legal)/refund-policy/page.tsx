import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and cancellation policy for Geek Care LLC, including returns for accessories and warranty coverage for services.",
};

export default function RefundPolicyPage() {
  return (
    <Section className="border-b border-border/60">
      <Container className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="Legal"
          title="Refund and Cancellation Policy"
          description="Conditions for refunds, returns, and cancellations at Geek Care LLC."
        />
        <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert">
          <p>
            At Geek Care LLC, we strive to ensure customer satisfaction. This
            policy outlines the conditions under which refunds are provided for
            our services and products purchased via{" "}
            <a href="https://geekcares.net" rel="noreferrer" target="_blank">
              geekcares.net
            </a>
            .
          </p>

          <p>
            We stand behind our work with a dedicated Service Guarantee. If a
            repair performed by our technicians fails due to labor or a replaced
            part within the specified warranty period, we will prioritize a
            follow-up visit to resolve the issue at no additional cost.
          </p>

          <h2>1. Physical Products (Accessories)</h2>
          <p>We offer a 30-day return policy for computer and printer accessories.</p>
          <ul>
            <li>
              <strong>Eligibility</strong>: To be eligible for a return, your
              item must be unused, in the same condition that you received it,
              and in its original packaging.
            </li>
            <li>
              <strong>Restocking Fee</strong>: A restocking fee of up to 15% may
              apply to items that are returned opened or without original
              packaging.
            </li>
            <li>
              <strong>Non-Returnable Items</strong>: Opened accessories, opened
              ink cartridges, and used toner are not eligible for refunds due to
              the nature of the product.
            </li>
            <li>
              <strong>Shipping Costs</strong>: Customers are responsible for
              paying their own shipping costs for returning items. Shipping
              costs are non-refundable.
            </li>
          </ul>

          <h2>2. Repair &amp; Technical Services</h2>
          <ul>
            <li>
              <strong>Service Fees</strong>: Diagnostic fees or “service call”
              fees are non-refundable once the technician has arrived at your
              location for the on-site visit.
            </li>
            <li>
              <strong>Repair Warranty</strong>: We provide a 30-day warranty on
              all repairs. If the same issue recurs within 30 days of service,
              we will fix it at no additional labor cost.
            </li>
            <li>
              <strong>Refunds on Repairs</strong>: If a repair is unsuccessful
              or a part installed by us is found to be defective within the
              warranty period, we will offer a replacement or a full refund for
              that specific part/service.
            </li>
          </ul>

          <h2>3. Refund Process</h2>
          <p>
            Once we receive and inspect your returned item, we will send you an
            email to notify you of the approval or rejection of your refund.
          </p>
          <p>
            If approved, your refund will be processed, and a credit will
            automatically be applied to your original method of payment within
            7–10 business days.
          </p>

          <h2>4. Cancellations</h2>
          <ul>
            <li>
              <strong>Service Appointments</strong>: Please cancel or reschedule
              at least 24 hours in advance. Failure to do so may result in a
              cancellation fee.
            </li>
            <li>
              <strong>Product Orders</strong>: You can cancel an accessory order
              as long as it has not yet been shipped. Once shipped, the standard
              Return Policy applies.
            </li>
          </ul>

          <h2>5. Contact Us</h2>
          <p>For any questions regarding refunds, please contact us at:</p>
          <p>
            <strong>Geek Care LLC</strong>
            <br />
            Address: 451 Anchor Ln, Gun Barrel City, TX 75156, United States
            <br />
            Email: <a href="mailto:support@geekcares.net">support@geekcares.net</a>
            <br />
            Phone: 1 (844) 403-3343
          </p>
        </div>
      </Container>
    </Section>
  );
}

