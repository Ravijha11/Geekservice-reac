import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { products } from "@/content/products";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { ProductImage } from "@/components/shop/ProductImage.client";

function fmt(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const isSale = typeof p.salePrice === "number";
  const price = isSale ? p.salePrice! : p.price;

  return (
    <Section className="bg-white">
      <Container className="py-10">
        <p className="text-xs text-[#222]/70">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/shop" className="hover:underline">
            All Products
          </Link>{" "}
          &gt; {p.title}
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="aspect-[4/3] w-full bg-[#f3f3f3]">
            <ProductImage src={p.imageSrc} alt={p.title} className="h-full w-full" />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-[#222]">{p.title}</h1>
            <p className="text-sm text-[#222]/70">{p.category}</p>

            <div className="border-t border-black/10 pt-4">
              {isSale ? (
                <div className="space-y-1">
                  <p className="text-[11px] text-[#222]/70">Regular Price</p>
                  <p className="text-sm">
                    <span className="line-through text-[#222]/60">
                      {fmt(p.price)}
                    </span>{" "}
                    <span className="text-lg font-semibold text-[#111]">
                      {fmt(price)}
                    </span>
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-[11px] text-[#222]/70">Price</p>
                  <p className="text-lg font-semibold text-[#111]">{fmt(price)}</p>
                </div>
              )}
            </div>

            <AddToCartButton
              productId={p.id}
              className="h-11 w-full rounded-none bg-black text-white hover:bg-black/90"
            />

            <div className="border-t border-black/10 pt-4">
              <p className="text-sm font-semibold text-[#222]">Details</p>
              <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm text-[#222]/80 sm:grid-cols-2">
                {Object.entries(p.attributes)
                  .filter(([, v]) => Boolean(v))
                  .map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <dt className="capitalize text-[#222]/60">
                        {k.replace(/([A-Z])/g, " $1")}
                      </dt>
                      <dd className="text-[#222]">{String(v)}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

