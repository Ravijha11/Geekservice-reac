"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/shop/CartProvider";
import { useRouter } from "next/navigation";

export function AddToCartButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const { add } = useCart();
  const router = useRouter();
  return (
    <Button
      type="button"
      size="sm"
      variant="brand"
      className={className}
      onClick={() => {
        add(productId, 1);
        router.push("/cart");
      }}
    >
      Add to cart
    </Button>
  );
}

