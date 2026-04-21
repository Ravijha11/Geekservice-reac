import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.quote}
          className="rounded-3xl border border-border/60 bg-background p-6 sm:p-8"
        >
          <blockquote className="text-sm leading-6 text-muted-foreground">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-4 text-sm">
            <span className="font-semibold text-foreground">{t.name}</span>
            {t.role ? (
              <span className="text-muted-foreground"> · {t.role}</span>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

