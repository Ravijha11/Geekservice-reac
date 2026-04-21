import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-16 sm:py-20", className)} {...props} />;
}

export function SectionInner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <Container className={cn("space-y-10", className)} {...props} />;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  className,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl space-y-3", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

