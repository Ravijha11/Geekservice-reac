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
          At Geek Care LLC, accessible from{" "}
          <a href="https://geekcares.net" rel="noreferrer" target="_blank">
            https://geekcares.net
          </a>
          , one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by Geek Care LLC and how we use it.
        </p>

        <p>
          This Privacy Policy describes how we collect, use, and process data
          for our on-site appliance and tech repair services. We aim to be
          transparent about the data we need to ensure your technology operates
          seamlessly.
        </p>

        <p>
          <strong>Effective Date:</strong> April 16, 2026
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          To provide professional on-site repair services, we collect contact
          information such as your name, phone number, and physical address. We
          also gather technical details about your appliances, computers, and
          printers solely to diagnose hardware issues and prepare our
          technicians for your doorstep service appointment.
        </p>
        <p>We collect information to provide better services to our clients. This includes:</p>
        <ul>
          <li>
            <strong>Personal Identification Information</strong>: Name, email
            address, phone number, and shipping/billing address when you book a
            repair service or purchase accessories.
          </li>
          <li>
            <strong>Technical Data</strong>: We may collect details about your
            hardware (computer, printer, or appliances) for on-site repair
            services or maintenance services.
          </li>
          <li>
            <strong>Payment Information</strong>: All financial transactions are
            processed through secure, third-party gateways. We do not store
            your credit card details on our servers.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          Your data is primarily used to facilitate scheduling and delivery of
          repair services. This includes sending appointment reminders,
          providing follow-up repair reports, and contacting you regarding
          technician arrival times. We prioritize efficiency to get your
          operations back on track as quickly as possible.
        </p>
        <p>We use the information we collect in various ways, including:</p>
        <ul>
          <li>To provide, operate, and maintain our repair and e-commerce services.</li>
          <li>To process your orders for computer and printer accessories.</li>
          <li>To improve, personalize, and expand our website.</li>
          <li>To communicate with you regarding service appointments or order status.</li>
          <li>To send you emails related to your purchase or inquiries.</li>
          <li>To find and prevent fraud.</li>
        </ul>

        <h2>3. Service Access and Security</h2>
        <p>
          Booking an appointment implies consent for our technicians to access
          your specified location for physical repair work. We maintain strict
          protocols to ensure your physical safety and the security of your
          equipment during the repair process.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          We retain service records for a period necessary to honor warranties
          and provide customer support history. This repair history helps our
          team offer better long-lasting solutions during future visits. You
          may request to have your record deleted from our database at any time
          after a service is completed.
        </p>

        <h2>5. Google Ads and Advertising</h2>
        <p>As a participant in Google Ads programs, we adhere to the following:</p>
        <ul>
          <li>
            <strong>Cookies and Web Beacons</strong>: Like any other website, we
            use &apos;cookies&apos; to store information including visitors&apos;
            preferences and the pages on the website that the visitor accessed
            or visited.
          </li>
          <li>
            <strong>Google DoubleClick DART Cookie</strong>: Google, as a
            third-party vendor, uses cookies to serve ads on our site based upon
            their visit to geekcares.net and other sites on the internet.
          </li>
          <li>
            <strong>Personalized Advertising</strong>: We do not use sensitive
            information to target ads. You can opt-out of personalized
            advertising by visiting Google Ads Settings.
          </li>
        </ul>

        <h2>6. Third-Party Privacy Policies</h2>
        <p>
          Geek Care LLC&apos;s Privacy Policy does not apply to other advertisers
          or websites. We advise you to consult the respective Privacy Policies
          of these third-party ad servers (like Google or payment processors)
          for more detailed information.
        </p>

        <h2>7. Data Protection Rights (CCPA/GDPR)</h2>
        <p>Depending on your location, you have the right to:</p>
        <ul>
          <li>Request access to the personal data we hold about you.</li>
          <li>Request that we correct any information you believe is inaccurate.</li>
          <li>Request that we erase your personal data under certain conditions.</li>
          <li>Object to the processing of your personal data.</li>
        </ul>

        <h2>8. Children&apos;s Information</h2>
        <p>
          We do not knowingly collect any Personal Identifiable Information
          from children under the age of 13. If you think that your child
          provided this kind of information on our website, please contact us
          immediately, and we will remove such information from our records.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have additional questions or require more information about
          our Privacy Policy, do not hesitate to contact us at:
        </p>
        <p>
          <strong>Company Name:</strong> Geek Care LLC
          <br />
          <strong>Website:</strong>{" "}
          <a href="https://www.geekcares.net" rel="noreferrer" target="_blank">
            https://www.geekcares.net
          </a>
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:support@geekcares.net">support@geekcares.net</a>
          <br />
          <strong>Address:</strong> 451 Anchor Ln, Gun Barrel City, TX 75156,
          United States
          <br />
          <strong>Contact Number:</strong> 1 (844) 403-3343
        </p>
      </Container>
    </Section>
  );
}

