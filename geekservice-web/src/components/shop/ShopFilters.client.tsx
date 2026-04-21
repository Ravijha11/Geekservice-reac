"use client";

import { useMemo, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categoryOptions } from "@/content/products";
import { cn } from "@/lib/cn";

function toCsv(values: string[]) {
  return values.join(",");
}

function fromCsv(v: string | null) {
  if (!v) return [];
  return v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function ToggleList({
  label,
  param,
  options,
}: {
  label: string;
  param: string;
  options: string[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, start] = useTransition();

  const selected = useMemo(
    () => fromCsv(searchParams.get(param)),
    [param, searchParams],
  );

  const setSelected = (next: string[]) => {
    const sp = new URLSearchParams(searchParams.toString());
    if (!next.length) sp.delete(param);
    else sp.set(param, toCsv(next));
    start(() => router.replace(`${pathname}?${sp.toString()}`));
  };

  return (
    <details className="border-t border-black/10 py-3" open>
      <summary className="cursor-pointer select-none text-sm font-semibold text-[#222]">
        {label}
        {pending ? (
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            Updating…
          </span>
        ) : null}
      </summary>
      <div className="mt-3 space-y-2">
        {options.length ? (
          options.map((o) => {
            const on = selected.includes(o);
            return (
              <label key={o} className="flex items-center gap-2 text-sm text-[#222]">
                <input
                  type="checkbox"
                  checked={on}
                  onChange={(e) => {
                    if (e.target.checked) setSelected([...selected, o]);
                    else setSelected(selected.filter((x) => x !== o));
                  }}
                />
                <span>{o}</span>
              </label>
            );
          })
        ) : (
          <p className="text-xs text-muted-foreground">No options</p>
        )}
      </div>
    </details>
  );
}

function PriceRange() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, start] = useTransition();

  const priceMin = searchParams.get("priceMin") ?? "";
  const priceMax = searchParams.get("priceMax") ?? "";

  const set = (nextMin: string, nextMax: string) => {
    const sp = new URLSearchParams(searchParams.toString());
    if (nextMin.trim()) sp.set("priceMin", nextMin.trim());
    else sp.delete("priceMin");
    if (nextMax.trim()) sp.set("priceMax", nextMax.trim());
    else sp.delete("priceMax");
    start(() => router.replace(`${pathname}?${sp.toString()}`));
  };

  return (
    <details className="border-t border-black/10 py-3" open>
      <summary className="cursor-pointer select-none text-sm font-semibold text-[#222]">
        Price
        {pending ? (
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            Updating…
          </span>
        ) : null}
      </summary>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <label className="text-xs text-[#222]/70">
          Min
          <input
            inputMode="decimal"
            className="mt-2 h-9 w-full border border-black/15 bg-white px-2 text-sm text-[#222]"
            value={priceMin}
            onChange={(e) => set(e.target.value, priceMax)}
            placeholder="0"
          />
        </label>
        <label className="text-xs text-[#222]/70">
          Max
          <input
            inputMode="decimal"
            className="mt-2 h-9 w-full border border-black/15 bg-white px-2 text-sm text-[#222]"
            value={priceMax}
            onChange={(e) => set(priceMin, e.target.value)}
            placeholder="999"
          />
        </label>
      </div>
    </details>
  );
}

export function ShopSidebar({
  facets,
}: {
  facets: Record<string, string[]>;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, start] = useTransition();

  const category = searchParams.get("category") ?? "All Products";

  const setCategory = (next: string) => {
    const sp = new URLSearchParams(searchParams.toString());
    if (!next || next === "All Products") sp.delete("category");
    else sp.set("category", next);
    start(() => router.replace(`${pathname}?${sp.toString()}`));
  };

  const clearAll = () => {
    start(() => router.replace(pathname));
  };

  return (
    <aside className="w-full lg:w-[260px]">
      <div className="sticky top-24">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[#222]">Browse by</p>
          <button
            type="button"
            onClick={clearAll}
            className={cn(
              "text-xs underline-offset-4 hover:underline",
              pending ? "text-muted-foreground" : "text-[#222]/70",
            )}
          >
            Clear
          </button>
        </div>

        <div className="mt-3 space-y-2 border-b border-black/10 pb-4">
          {categoryOptions.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cn(
                "block w-full text-left text-sm underline-offset-4 hover:underline",
                c === category ? "font-semibold text-blue-700" : "text-[#222]",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#222]">Filter by</p>
          {pending ? (
            <p className="text-xs text-muted-foreground">Updating…</p>
          ) : null}
        </div>

        <ToggleList
          label="Product type"
          param="productType"
          options={facets.productType ?? []}
        />
        <PriceRange />
        <ToggleList label="Capacity" param="capacity" options={facets.capacity ?? []} />
        <ToggleList label="Color" param="color" options={facets.color ?? []} />
        <ToggleList label="Connectivity" param="connectivity" options={facets.connectivity ?? []} />
        <ToggleList label="Length" param="length" options={facets.length ?? []} />
        <ToggleList label="Material" param="material" options={facets.material ?? []} />
        <ToggleList label="Pack Size" param="packSize" options={facets.packSize ?? []} />
        <ToggleList label="Ports" param="ports" options={facets.ports ?? []} />
        <ToggleList label="Size" param="size" options={facets.size ?? []} />
        <ToggleList label="Type" param="type" options={facets.type ?? []} />
      </div>
    </aside>
  );
}

export function ShopSort() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, start] = useTransition();

  const sort = searchParams.get("sort") ?? "recommended";

  return (
    <label className="inline-flex items-center gap-2 text-sm text-[#222]">
      <span className="text-sm text-[#222]/70">Sort by:</span>
      <select
        className="h-9 rounded border border-black/15 bg-white px-2 text-sm"
        value={sort}
        onChange={(e) => {
          const sp = new URLSearchParams(searchParams.toString());
          sp.set("sort", e.target.value);
          start(() => router.replace(`${pathname}?${sp.toString()}`));
        }}
        disabled={pending}
      >
        <option value="recommended">Recommended</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
    </label>
  );
}

