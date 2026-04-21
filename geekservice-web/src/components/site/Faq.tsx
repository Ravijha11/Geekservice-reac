import { faqs } from "@/content/faqs";

export function Faq() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {faqs.map((f) => (
        <div
          key={f.q}
          className="rounded-3xl border border-border/60 bg-background p-6"
        >
          <p className="text-sm font-semibold">{f.q}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</p>
        </div>
      ))}
    </div>
  );
}

