"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return <div className="md:hidden">
    <button onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="grid size-11 place-items-center rounded-full border border-white/15 text-ink">
      {open ? <X size={20} /> : <Menu size={20} />}
    </button>
    {open && <div className="fixed inset-x-0 top-[72px] z-50 border-b border-white/10 bg-canvas/95 px-5 py-5 shadow-2xl backdrop-blur-xl">
      <nav className="grid">
        {siteConfig.nav.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return <Link key={item.href} href={item.href} className={cn("border-b border-white/[.07] py-4 text-lg font-semibold text-muted", active && "text-acid")}>{item.label}</Link>;
        })}
      </nav>
      <Link href="/contact" className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-acid font-bold text-black">Let&apos;s talk</Link>
    </div>}
  </div>;
}
