"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonLink } from "@/components/ui/Button";
import { useCart } from "@/components/shop/CartProvider";

function fmt(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export function CheckoutClient() {
  const router = useRouter();
  const { cart, getProduct, subtotal, clear } = useCart();
  const [pending, setPending] = useState(false);

  const lines = useMemo(() => {
    return cart.lines
      .map((l) => ({ ...l, product: getProduct(l.productId) }))
      .filter((l) => Boolean(l.product));
  }, [cart.lines, getProduct]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  if (!lines.length) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-[#222]/70">
          Your cart is empty. Add items before checkout.
        </p>
        <ButtonLink href="/shop" variant="brand" className="rounded-none">
          Continue shopping
        </ButtonLink>
      </div>
    );
  }

  const placeOrder = async () => {
    setPending(true);
    try {
      // This is a lightweight “flow” (no payment gateway yet).
      // It validates required fields client-side and then clears cart.
      const required: (keyof typeof form)[] = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "address1",
        "city",
        "state",
        "zip",
      ];
      for (const k of required) {
        if (!form[k].trim()) throw new Error("Please complete all required fields.");
      }
      clear();
      router.push("/checkout/success");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
      <div className="space-y-6">
        <div className="border border-black/10 bg-white p-5">
          <p className="text-sm font-semibold text-[#222]">Contact</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">First name *</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
            </label>
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">Last name *</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Email *</span>
              <input
                type="email"
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Phone *</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
          </div>
        </div>

        <div className="border border-black/10 bg-white p-5">
          <p className="text-sm font-semibold text-[#222]">Shipping address</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Address line 1 *</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.address1}
                onChange={(e) => setForm({ ...form, address1: e.target.value })}
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Address line 2</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.address2}
                onChange={(e) => setForm({ ...form, address2: e.target.value })}
              />
            </label>
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">City *</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </label>
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">State *</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              />
            </label>
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">ZIP *</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                value={form.zip}
                onChange={(e) => setForm({ ...form, zip: e.target.value })}
              />
            </label>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ButtonLink href="/cart" variant="secondary" className="rounded-none">
            Back to cart
          </ButtonLink>
          <Button
            type="button"
            className="rounded-none bg-black text-white hover:bg-black/90"
            disabled={pending}
            onClick={placeOrder}
          >
            {pending ? "Placing order…" : "Place order"}
          </Button>
        </div>
      </div>

      <div className="h-fit border border-black/10 bg-white p-5">
        <p className="text-sm font-semibold text-[#222]">Order summary</p>
        <div className="mt-4 space-y-3">
          {lines.map((l) => {
            const p = l.product!;
            const price = typeof p.salePrice === "number" ? p.salePrice : p.price;
            return (
              <div key={p.id} className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="truncate text-sm text-[#222]">{p.title}</p>
                  <p className="text-xs text-[#222]/60">Qty {l.qty}</p>
                </div>
                <p className="text-sm font-semibold text-[#111]">
                  {fmt(price * l.qty)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 border-t border-black/10 pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#222]/70">Subtotal</span>
            <span className="font-semibold">{fmt(subtotal)}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-[#222]/60">
            <span>Shipping</span>
            <span>Calculated after order</span>
          </div>
        </div>
      </div>
    </div>
  );
}

