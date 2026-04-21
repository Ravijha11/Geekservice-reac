import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopSidebar, ShopSort } from "@/components/shop/ShopFilters.client";
import { Suspense } from "react";
import {
  filterAndSortProducts,
  getFacetOptions,
  parseShopSearchParams,
} from "@/lib/shop";

export const metadata = {
  title: "Shop",
  description: "Browse products and accessories.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const filters = parseShopSearchParams(searchParams);
  const items = filterAndSortProducts(filters);
  const facets = getFacetOptions();

  return (
    <Section className="bg-white">
      <Container className="py-10">
        <div className="space-y-5">
          <p className="text-xs text-[#222]/70">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; All Products
          </p>

          <div className="h-[150px] w-full bg-gradient-to-r from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0]" />

          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl font-semibold text-[#222]">All Products</h1>
              <p className="mt-1 text-sm text-[#222]/70">{items.length} products</p>
            </div>
            <Suspense fallback={<div className="text-sm text-[#222]/70">Loading…</div>}>
              <ShopSort />
            </Suspense>
          </div>

          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <Suspense fallback={<div className="text-sm text-[#222]/70">Loading…</div>}>
              <ShopSidebar facets={facets} />
            </Suspense>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

