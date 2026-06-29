import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  return <footer className="border-t border-white/[.08] bg-black/20">
    <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
      <div>
        <Link href="/" className="text-sm font-black tracking-[.12em] text-ink">KAMRAN<span className="text-acid">.</span></Link>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted">Building AI-powered software, SaaS products, and workflow systems with a sharp eye for the human experience.</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-white/10 text-muted transition hover:border-acid hover:text-acid"><Github size={17} /></a>
        <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-white/10 text-muted transition hover:border-acid hover:text-acid"><Linkedin size={17} /></a>
        <a href={siteConfig.socials.email} aria-label="Email" className="grid size-10 place-items-center rounded-full border border-white/10 text-muted transition hover:border-acid hover:text-acid"><Mail size={17} /></a>
        <Link href="/contact" className="ml-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-ink hover:text-acid">Start a project <ArrowUpRight size={15} /></Link>
      </div>
    </div>
    <div className="border-t border-white/[.06] px-5 py-5 text-center text-xs text-muted sm:px-8">© {new Date().getFullYear()} Syed Kamran Shah. Designed and built with intention.</div>
  </footer>;
}
