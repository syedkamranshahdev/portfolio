import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-full border border-acid/20 bg-acid/[.07] px-3 py-1 text-[11px] font-bold uppercase tracking-[.14em] text-acid", className)}>{children}</span>;
}
