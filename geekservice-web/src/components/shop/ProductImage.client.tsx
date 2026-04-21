"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function ProductImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "h-full w-full bg-gradient-to-b from-[#f3f3f3] to-[#dedede]",
          className,
        )}
      />
    );
  }

  // Using <img> so we can gracefully fallback if file is missing.
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn("h-full w-full object-cover", className)}
      onError={() => setBroken(true)}
    />
  );
}

