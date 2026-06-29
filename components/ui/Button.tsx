import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

export function buttonStyles(variant: Variant = "primary") {
  return cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" && "bg-acid text-black hover:-translate-y-0.5 hover:shadow-glow",
    variant === "secondary" && "border border-white/15 bg-white/[.04] text-ink hover:border-acid/60 hover:text-acid",
    variant === "ghost" && "text-muted hover:bg-white/[.04] hover:text-ink",
  );
}

export function Button({ className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={cn(buttonStyles(variant), className)} {...props} />;
}

export function ButtonLink({ href, children, className, variant = "primary", download }: { href: string; children: ReactNode; className?: string; variant?: Variant; download?: boolean }) {
  return <Link href={href} className={cn(buttonStyles(variant), className)} download={download}>{children}</Link>;
}
