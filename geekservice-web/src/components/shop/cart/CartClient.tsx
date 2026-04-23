"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ButtonLink, Button } from "@/components/ui/Button";
import { useCart } from "@/components/shop/CartProvider";
import { ProductImage } from "@/components/shop/ProductImage.client";

function fmt(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export function CartClient() {
  const { cart, getProduct, remove, setQty, subtotal, clear } = useCart();

  const lines = useMemo(() => {
    return cart.lines
      .map((l) => ({ ...l, product: getProduct(l.productId) }))
      .filter((l) => Boolean(l.product));
  }, [cart.lines, getProduct]);

  if (!lines.length) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-[#222]/70">Your cart is empty.</p>
        <ButtonLink href="/shop" variant="brand" className="rounded-none">
          Continue shopping
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[#222]">Items</p>
          <Button type="button" variant="ghost" size="sm" onClick={clear}>
            Clear cart
          </Button>
        </div>

        <div className="space-y-3">
          {lines.map((l) => {
            const p = l.product!;
            const price = typeof p.salePrice === "number" ? p.salePrice : p.price;
            return (
              <div
                key={p.id}
                className="flex gap-4 border border-black/10 bg-white p-4"
              >
                <div className="h-20 w-28 flex-none bg-[#f3f3f3]">
                  <ProductImage
                    src={p.imageSrc}
                    alt={p.title}
                    className="h-full w-full"
                  />
                </div>
                <div className="flex-1">
                  <Link href={`/shop/${p.slug}`} className="text-sm font-medium hover:underline">
                    {p.title}
                  </Link>
                  <p className="mt-1 text-xs text-[#222]/60">{p.category}</p>
                  <p className="mt-2 text-sm font-semibold">{fmt(price)}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <label className="text-xs text-[#222]/70">
                    Qty{" "}
                    <input
                      type="number"
                      min={1}
                      value={l.qty}
                      onChange={(e) => setQty(p.id, Number(e.target.value))}
                      className="ml-2 h-9 w-16 border border-black/15 px-2 text-sm"
                    />
                  </label>
                  <button
                    type="button"
                    className="text-xs text-[#222]/70 underline-offset-4 hover:underline"
                    onClick={() => remove(p.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-fit border border-black/10 bg-white p-5">
        <p className="text-sm font-semibold text-[#222]">Summary</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-[#222]/70">Subtotal</span>
          <span className="font-semibold">{fmt(subtotal)}</span>
        </div>
        <p className="mt-2 text-xs text-[#222]/60">
          Taxes and any applicable fees are calculated at checkout.
        </p>

        <ButtonLink
          href="/checkout"
          variant="brand"
          className="mt-5 w-full rounded-none bg-black text-white hover:bg-black/90"
        >
          Checkout
        </ButtonLink>
      </div>
    </div>
  );
}

