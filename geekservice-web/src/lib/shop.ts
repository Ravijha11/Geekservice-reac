import { products, type Product } from "@/content/products";

export type SortKey = "recommended" | "price_asc" | "price_desc";

export type ShopFilters = {
  category?: string;
  q?: string;
  sort?: SortKey;
  productType?: string[];
  priceMin?: number;
  priceMax?: number;
  capacity?: string[];
  color?: string[];
  connectivity?: string[];
  length?: string[];
  material?: string[];
  packSize?: string[];
  ports?: string[];
  size?: string[];
  type?: string[];
};

function num(v: string | undefined) {
  if (!v) return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}

function list(v: string | undefined) {
  if (!v) return undefined;
  const items = v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return items.length ? items : undefined;
}

export function parseShopSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
): ShopFilters {
  const get = (k: string) => {
    const v = searchParams[k];
    return Array.isArray(v) ? v[0] : v;
  };

  return {
    category: get("category") || undefined,
    q: get("q") || undefined,
    sort: (get("sort") as SortKey | undefined) ?? "recommended",
    priceMin: num(get("priceMin")),
    priceMax: num(get("priceMax")),
    productType: list(get("productType")),
    capacity: list(get("capacity")),
    color: list(get("color")),
    connectivity: list(get("connectivity")),
    length: list(get("length")),
    material: list(get("material")),
    packSize: list(get("packSize")),
    ports: list(get("ports")),
    size: list(get("size")),
    type: list(get("type")),
  };
}

function matchesList(value: string | undefined, allowed: string[] | undefined) {
  if (!allowed?.length) return true;
  if (!value) return false;
  return allowed.includes(value);
}

export function getEffectivePrice(p: Product) {
  return typeof p.salePrice === "number" ? p.salePrice : p.price;
}

export function filterAndSortProducts(filters: ShopFilters) {
  let items = [...products];

  if (filters.category && filters.category !== "All Products") {
    items = items.filter((p) => p.category === filters.category);
  }

  if (filters.q) {
    const q = filters.q.toLowerCase();
    items = items.filter((p) => p.title.toLowerCase().includes(q));
  }

  items = items.filter((p) => {
    const price = getEffectivePrice(p);
    if (typeof filters.priceMin === "number" && price < filters.priceMin)
      return false;
    if (typeof filters.priceMax === "number" && price > filters.priceMax)
      return false;

    return (
      matchesList(p.attributes.productType, filters.productType) &&
      matchesList(p.attributes.capacity, filters.capacity) &&
      matchesList(p.attributes.color, filters.color) &&
      matchesList(p.attributes.connectivity, filters.connectivity) &&
      matchesList(p.attributes.length, filters.length) &&
      matchesList(p.attributes.material, filters.material) &&
      matchesList(p.attributes.packSize, filters.packSize) &&
      matchesList(p.attributes.ports, filters.ports) &&
      matchesList(p.attributes.size, filters.size) &&
      matchesList(p.attributes.type, filters.type)
    );
  });

  const sort = filters.sort ?? "recommended";
  if (sort === "price_asc") {
    items.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
  } else if (sort === "price_desc") {
    items.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
  }

  return items;
}

export function getFacetOptions() {
  const facets = {
    productType: new Set<string>(),
    capacity: new Set<string>(),
    color: new Set<string>(),
    connectivity: new Set<string>(),
    length: new Set<string>(),
    material: new Set<string>(),
    packSize: new Set<string>(),
    ports: new Set<string>(),
    size: new Set<string>(),
    type: new Set<string>(),
  };

  for (const p of products) {
    for (const key of Object.keys(facets) as (keyof typeof facets)[]) {
      const v = p.attributes[key];
      if (v) facets[key].add(v);
    }
  }

  return Object.fromEntries(
    Object.entries(facets).map(([k, s]) => [k, [...s].sort()]),
  ) as Record<keyof typeof facets, string[]>;
}

