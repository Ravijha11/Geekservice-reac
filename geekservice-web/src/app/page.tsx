import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="comp-mngfrgwh"
        tabIndex={-1}
        className="relative overflow-hidden border-b border-border/60 bg-background"
      >
        {/* background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute -bottom-64 right-[-120px] h-[560px] w-[560px] rounded-full bg-indigo-600/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />
        </div>

        <Container className="relative py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 shadow-sm backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" />
                GEEK CARE LLC
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Book Your Geek Service
                <span className="block bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 bg-clip-text text-transparent">
                  Appointment Today
                </span>
              </h1>

              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Get your home and office back on track with our professional on-site
                repair services. Whether it’s a computer glitch, a printer jam, or
                a faulty household appliance, our local technicians come directly
                to you to provide fast, reliable solutions.
              </p>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  Call Now For Booking Appointment
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="tel:+18889716668"
                    className="inline-flex h-14 w-full max-w-md items-center justify-center rounded-2xl bg-blue-700 px-6 text-base font-semibold tracking-wide text-white shadow-[0_12px_30px_-16px_rgba(37,99,235,0.8)] transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/40 focus-visible:ring-offset-2 ring-offset-background sm:w-auto"
                    aria-label="Call: +1 (888) 971-6668"
                  >
                    Call: +1 (888) 971-6668
                  </a>
                  <ButtonLink
                    href="/book"
                    variant="secondary"
                    size="lg"
                    className="h-14 w-full rounded-2xl sm:w-auto"
                  >
                    Book online
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-3 pt-2 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur">
                  <p className="font-semibold text-foreground">Same-day</p>
                  <p className="text-xs">Available for many issues</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur">
                  <p className="font-semibold text-foreground">On-site</p>
                  <p className="text-xs">Home & small business</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur">
                  <p className="font-semibold text-foreground">Secure</p>
                  <p className="text-xs">Privacy-first handling</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-transparent blur-2xl" />
              <div className="relative border border-border/60 bg-background/60 shadow-xl backdrop-blur">
                {/* clipped-corner tech frame */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 border border-blue-500/25"
                  style={{
                    clipPath:
                      "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                    boxShadow:
                      "inset 0 0 0 1px rgba(99, 102, 241, 0.25), inset 0 0 0 2px rgba(59, 130, 246, 0.12)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(59,130,246,0.22),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),transparent_40%,rgba(0,0,0,0.06))]" />

                <div className="relative h-[340px] w-full p-5 sm:h-[440px] sm:p-6 lg:h-[540px]">
                  <Image
                    src="/image.png"
                    alt="Two Geek Service technicians"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>

                {/* corner details */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-blue-600/70"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-blue-600/40"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 bottom-0 h-8 w-8 border-b-2 border-l-2 border-blue-600/40"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-blue-600/70"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <p>Fast diagnostics • Clear estimates</p>
                <p className="hidden sm:block">Windows • Mac • Wi‑Fi</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section id="book-appointment" tabIndex={-1}>
        <Container className="space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Geek Service Appointment
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Printer Service",
                duration: "1 hr",
                image: "/our services/printerrepair.png",
                serviceType: "printer",
              },
              {
                title: "Computer Repair",
                duration: "1 hr",
                image: "/our services/Computerrepair.png",
                serviceType: "computer",
              },
              {
                title: "Appliance Repair",
                duration: "1 hr 30 min",
                image: "/our services/Applicancerepair.png",
                serviceType: "appliance",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="overflow-hidden border border-border/60 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full bg-muted/20">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-[#222]">
                    {card.title}
                  </p>
                  <div className="my-3 h-px w-full bg-border/70" />
                  <div className="space-y-1 text-[11px] text-muted-foreground">
                    <p>{card.duration}</p>
                    <p>Doorstep Service</p>
                  </div>
                  <div className="mt-4">
                    <ButtonLink
                      href={`/book?serviceType=${card.serviceType}`}
                      variant="brand"
                      size="sm"
                      className="h-8 rounded-none bg-blue-700 px-4 text-[11px] font-semibold text-white hover:bg-blue-600"
                    >
                      Book Now
                    </ButtonLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 pt-4 md:grid-cols-3 md:gap-0">
            {[
              {
                n: "01",
                title: "Doorstep Convenience",
                desc: "We bring expert repair services directly to your home or office, eliminating the risk and hassle of transporting sensitive tech equipment.",
              },
              {
                n: "02",
                title: "Efficiency First",
                desc: "Your time is critical. Our streamlined scheduling system ensures that professional help is dispatched rapidly to get your operations back on track.",
              },
              {
                n: "03",
                title: "Precision Care",
                desc: "We combine deep technical expertise with specialized diagnostic tools to provide long-lasting solutions for computers, printers, and appliances.",
              },
            ].map((b, idx) => (
              <div
                key={b.n}
                className={[
                  "space-y-3 px-0 md:px-10",
                  idx === 1 ? "md:border-x md:border-border/70" : "",
                ].join(" ")}
              >
                <p className="text-7xl font-extrabold leading-none tracking-tight text-blue-700">
                  {b.n}
                </p>
                <p className="text-base font-semibold">{b.title}</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border/60 bg-muted/10">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Reviews"
            title="Trusted by busy people"
            description="Short, clear communication and dependable results."
          />
          <Testimonials />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="If you don’t see your question here, just send us a message."
          />
          <Faq />
        </Container>
      </Section>

      <Section id="comp-mngfrgxw" tabIndex={-1} className="border-t border-border/60">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div className="rounded-none bg-muted/15 p-6 sm:p-10">
            <p className="text-sm font-semibold text-foreground">
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

            <p className="mt-6 text-sm text-muted-foreground">
              Schedule your on-site repair today
            </p>

            <p className="mt-8 text-lg font-semibold text-foreground">
              Fast repairs, By Geek Care LLC
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Our experts make fixing your technology and household appliances easy.
              Skip the hassle of transport—schedule your professional home service
              today and let our technicians come to you. At Geekcares.net, we ensure
              a fast, simple, and reliable repair experience right at your doorstep.
            </p>

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

          <div className="rounded-none border border-border/60 bg-background p-6 sm:p-10">
            <p className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Inquire Today
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
