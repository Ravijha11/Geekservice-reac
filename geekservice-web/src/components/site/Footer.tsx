import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-[#d9d9d9] text-[#1b1b1b]">
      {/* orange strip */}
      <div className="border-b border-black/20 bg-[#f28c28]">
        <Container className="py-1.5">
          <p className="truncate text-center text-xs font-extrabold uppercase tracking-wide text-black">
            GEEK SERVICE APPOINTMENT • FAST DOORSTEP SERVICE • 24/7 CUSTOMER SERVICE
            • CERTIFIED TECHNICIANS • SAME DAY SERVICE • BOOK YOUR APPOINTMENT
          </p>
        </Container>
      </div>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          {/* left */}
          <div className="space-y-2">
            <p className="text-2xl font-extrabold tracking-widest">GEEK CARE</p>
          </div>

          {/* center links bar */}
          <div className="flex justify-start lg:justify-center">
            <nav
              aria-label="Footer links"
              className="inline-flex flex-wrap items-center justify-center gap-0.5 rounded bg-white px-2 py-1 text-sm shadow-sm"
            >
              {[
                { href: "/", label: "Home" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms and Conditions" },
                { href: "/refund-policy", label: "Refund Policy" },
              ].map((l, idx, arr) => (
                <span key={l.href} className="inline-flex items-center">
                  <Link
                    href={l.href}
                    className="px-3 py-1 text-sm text-[#2a2a2a] underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </Link>
                  {idx < arr.length - 1 ? (
                    <span className="select-none text-[#2a2a2a]/40">|</span>
                  ) : null}
                </span>
              ))}
            </nav>
          </div>

          {/* right */}
          <div className="space-y-1 text-sm lg:text-right">
            <p className="font-semibold">Geek Care LLC</p>
            <p>{siteConfig.contact.addressLine1}</p>
            <p>{siteConfig.contact.addressLine2}</p>
            <p className="pt-1">
              Contact{" "}
              <a
                className="font-semibold underline-offset-4 hover:underline"
                href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
              >
                {siteConfig.contact.phone}
              </a>
            </p>
          </div>
        </div>

        <p className="mt-8 text-[11px] leading-5 text-[#333]">
          Geek Care LLC (geekcares.net) is an independent provider of professional
          on-site repair services. We explicitly acknowledge that all registered
          trademarks, brand names, and logos mentioned on this website belong to
          their respective owners and are used strictly for informational purposes
          to indicate service compatibility. Use of these names does not imply any
          direct affiliation with or endorsement by the brand owners. All products
          sold through Geek Care LLC are sourced through official channels and are
          covered by the original manufacturer&apos;s warranty and support. We are
          committed to consumer protection and strictly adhere to the FTC&apos;s
          Mail, Internet, or Telephone Order Merchandise Rule, focusing on high
          quality on-site maintenance and genuine product sales.
        </p>

        <div className="mt-8 text-center text-sm text-[#2a2a2a]">
          <p className="mb-2 font-semibold">Money Back Guarantee</p>
          © {year} Geek Care LLC. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

