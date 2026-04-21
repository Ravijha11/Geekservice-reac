"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/shop/CartProvider";

export function AddToCartButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const { add } = useCart();
  return (
    <Button
      type="button"
      size="sm"
      variant="brand"
      className={className}
      onClick={() => add(productId, 1)}
    >
      Add to cart
    </Button>
  );
}

