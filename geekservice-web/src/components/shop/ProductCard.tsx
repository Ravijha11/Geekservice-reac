import Link from "next/link";
import { type Product } from "@/content/products";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { ProductImage } from "@/components/shop/ProductImage.client";
import { cn } from "@/lib/cn";

function fmt(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export function ProductCard({ product }: { product: Product }) {
  const isSale = typeof product.salePrice === "number";
  return (
    <div className="relative overflow-hidden bg-white shadow-sm">
      {product.badge ? (
        <span className="absolute left-3 top-3 z-10 inline-flex items-center bg-blue-700 px-2 py-0.5 text-[11px] font-semibold text-white">
          {product.badge}
        </span>
      ) : null}

      <Link href={`/shop/${product.slug}`} className="block">
        <div className="aspect-[4/3] w-full bg-[#f3f3f3]">
          <ProductImage
            src={product.imageSrc}
            alt={product.title}
            className="h-full w-full"
          />
        </div>
      </Link>

      <div className="space-y-2 p-4">
        <Link
          href={`/shop/${product.slug}`}
          className="line-clamp-2 text-sm font-medium text-[#222] hover:underline"
        >
          {product.title}
        </Link>

        <div className="text-sm text-[#222]">
          {isSale ? (
            <div className="space-y-1">
              <p className="text-[11px] text-[#222]/70">Regular Price</p>
              <p className="text-sm">
                <span className="line-through text-[#222]/60">
                  {fmt(product.price)}
                </span>{" "}
                <span className={cn("font-semibold text-[#111]")}>
                  {fmt(product.salePrice!)}
                </span>
              </p>
            </div>
          ) : (
            <div>
              <p className="text-[11px] text-[#222]/70">Price</p>
              <p className="font-semibold text-[#111]">{fmt(product.price)}</p>
            </div>
          )}
        </div>

        <div className="pt-2">
          <AddToCartButton productId={product.id} className="rounded-none px-4" />
        </div>
      </div>
    </div>
  );
}

