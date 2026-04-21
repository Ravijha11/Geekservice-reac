"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useCart } from "@/components/shop/CartProvider";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/book", label: "Book appointment" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = useMemo(() => pathname ?? "/", [pathname]);
  const { count: cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Geek Care home"
        >
          <Image
            src="/image.png"
            alt="Geek Care"
            width={140}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? active === "/"
                : active?.startsWith(item.href);
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 ring-offset-background",
                  isActive ? "underline underline-offset-8" : "",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 text-xs font-semibold text-foreground/80 hover:text-foreground md:inline-flex"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/60"
            >
              {/* user icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <span>Log In</span>
          </Link>

          <ButtonLink
            href="/book"
            variant="brand"
            size="sm"
            className="px-5"
          >
            BOOK NOW
          </ButtonLink>

          <Link
            href="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 text-foreground hover:bg-muted/60"
            aria-label="Cart"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6l-2 0" />
              <path d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="M18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background">
              {cartCount}
            </span>
          </Link>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="inline-flex md:hidden"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </Button>
        </div>
      </Container>

      {open ? (
        <div
          className="md:hidden"
          role="dialog"
          aria-modal="true"
          id="mobile-nav"
        >
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-4 right-4 top-20 z-50 rounded-3xl border border-border/60 bg-background p-4 shadow-lg">
            <div className="grid gap-2">
              {nav.map((item) => (
                <Link
                  key={`${item.href}-${item.label}-mobile`}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
                    active === item.href
                      ? "bg-muted text-foreground"
                      : "text-foreground hover:bg-muted/60",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 grid gap-2">
              <ButtonLink
                href="/book"
                variant="brand"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                BOOK NOW
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

