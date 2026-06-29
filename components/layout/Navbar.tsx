"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "@/components/layout/MobileNav";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.08] bg-canvas/80 backdrop-blur-xl">
    <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
      <Link href="/" className="text-sm font-black tracking-[.12em] text-ink">KAMRAN<span className="text-acid">.</span></Link>
      <nav className="hidden items-center gap-7 md:flex">
        {siteConfig.nav.slice(0, -1).map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return <Link key={item.href} href={item.href} className={cn("relative py-6 text-xs font-bold uppercase tracking-[.08em] text-muted transition hover:text-ink", active && "text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-acid")}>{item.label}</Link>;
        })}
      </nav>
      <div className="hidden md:block">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[.08em] transition hover:border-acid hover:bg-acid hover:text-black">Let&apos;s talk <ArrowUpRight size={15} /></Link>
      </div>
      <MobileNav />
    </div>
  </header>;
}
