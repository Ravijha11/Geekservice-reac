"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products, type Product } from "@/content/products";

export type CartLine = { productId: string; qty: number };
export type Cart = { lines: CartLine[] };

type CartContextValue = {
  cart: Cart;
  count: number;
  subtotal: number;
  add: (productId: string, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  getProduct: (id: string) => Product | undefined;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "geekservice_cart_v1";

function safeParse(json: string | null): Cart | null {
  if (!json) return null;
  try {
    const v = JSON.parse(json) as Cart;
    if (!v || !Array.isArray(v.lines)) return null;
    return {
      lines: v.lines
        .filter(
          (l) =>
            l &&
            typeof l.productId === "string" &&
            Number.isFinite(l.qty) &&
            l.qty > 0,
        )
        .map((l) => ({ productId: l.productId, qty: Math.floor(l.qty) })),
    };
  } catch {
    return null;
  }
}

function getEffectivePrice(p: Product) {
  return typeof p.salePrice === "number" ? p.salePrice : p.price;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>(() => {
    try {
      const parsed = safeParse(window.localStorage.getItem(STORAGE_KEY));
      return parsed ?? { lines: [] };
    } catch {
      return { lines: [] };
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage write errors (e.g., privacy mode).
    }
  }, [cart]);

  const getProduct = useCallback(
    (id: string) => products.find((p) => p.id === id),
    [],
  );

  const add = useCallback((productId: string, qty = 1) => {
    setCart((c) => {
      const lines = [...c.lines];
      const idx = lines.findIndex((l) => l.productId === productId);
      if (idx >= 0) {
        lines[idx] = { ...lines[idx], qty: lines[idx].qty + qty };
      } else {
        lines.push({ productId, qty });
      }
      return { lines };
    });
  }, []);

  const remove = useCallback((productId: string) => {
    setCart((c) => ({ lines: c.lines.filter((l) => l.productId !== productId) }));
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    const safeQty = Math.max(0, Math.floor(qty));
    setCart((c) => {
      if (safeQty === 0) return { lines: c.lines.filter((l) => l.productId !== productId) };
      return {
        lines: c.lines.map((l) =>
          l.productId === productId ? { ...l, qty: safeQty } : l,
        ),
      };
    });
  }, []);

  const clear = useCallback(() => setCart({ lines: [] }), []);

  const count = useMemo(
    () => cart.lines.reduce((acc, l) => acc + l.qty, 0),
    [cart.lines],
  );

  const subtotal = useMemo(() => {
    return cart.lines.reduce((acc, l) => {
      const p = getProduct(l.productId);
      if (!p) return acc;
      return acc + getEffectivePrice(p) * l.qty;
    }, 0);
  }, [cart.lines, getProduct]);

  const value: CartContextValue = useMemo(
    () => ({
      cart,
      count,
      subtotal,
      add,
      remove,
      setQty,
      clear,
      getProduct,
    }),
    [add, cart, clear, count, getProduct, remove, setQty, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

