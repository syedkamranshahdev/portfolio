import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, accent, description, className }: { eyebrow: string; title: string; accent?: string; description?: string; className?: string }) {
  return <div className={cn("max-w-4xl", className)}>
    <p className="mb-5 text-xs font-extrabold uppercase tracking-[.2em] text-acid">{eyebrow}</p>
    <h2 className="text-balance text-4xl font-semibold leading-[1.03] tracking-[-.055em] text-ink sm:text-5xl lg:text-7xl">
      {title} {accent && <span className="font-display font-normal italic text-muted">{accent}</span>}
    </h2>
    {description && <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>}
  </div>;
}
