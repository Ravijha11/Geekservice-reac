"use client";

import { CartProvider } from "@/components/shop/CartProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

