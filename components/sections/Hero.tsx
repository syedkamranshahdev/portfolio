import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function Hero() {
  return <section className="relative isolate min-h-screen overflow-hidden border-b border-white/[.08] px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pt-36">
    <div className="absolute inset-y-0 right-0 -z-10 w-3/5 bg-grid bg-[size:54px_54px] opacity-25 [mask-image:linear-gradient(to_left,black,transparent)]" />
    <div className="absolute right-[8%] top-[18%] -z-10 size-[34rem] rounded-full bg-acid/[.07] blur-3xl" />
    <div className="mx-auto grid max-w-[1340px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
      <div>
        <Reveal><div className="inline-flex items-center gap-2 rounded-full border border-acid/20 bg-acid/[.06] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-acid"><i className="size-1.5 rounded-full bg-acid shadow-[0_0_12px_#c8ff52]" /> {siteConfig.availability}</div></Reveal>
        <Reveal delay={.05}><h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[.94] tracking-[-.072em] text-ink sm:text-6xl lg:text-[6.5rem]">Building AI-powered software that <span className="font-display font-normal italic text-acid">automates business workflows.</span></h1></Reveal>
        <Reveal delay={.1}><p className="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">I&apos;m Syed Kamran Shah, an AI full-stack developer building SaaS products, client portals, RAG applications, and automation systems with Next.js, Supabase, Python, and modern AI tools.</p></Reveal>
        <Reveal delay={.15} className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/projects">Explore my work <ArrowRight size={17} /></ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Start a conversation</ButtonLink>
          <a href={siteConfig.resume} download className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-sm font-bold text-muted transition hover:text-acid"><Download size={17} /> Resume</a>
        </Reveal>
        <Reveal delay={.2} className="mt-12 flex items-center gap-5 border-t border-white/10 pt-6">
          <div><span className="block text-[10px] font-bold uppercase tracking-[.16em] text-muted">Core stack</span><strong className="mt-1 block text-sm text-ink">Next.js · Supabase · Python · AI</strong></div>
          <div className="ml-auto flex gap-2"><a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-white/10 text-muted hover:border-acid hover:text-acid"><Github size={17} /></a><a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-white/10 text-muted hover:border-acid hover:text-acid"><Linkedin size={17} /></a></div>
        </Reveal>
      </div>
      <Reveal delay={.12} className="relative mx-auto w-full max-w-[520px]">
        <div className="absolute -inset-8 rounded-full border border-white/[.06]" />
        <div className="absolute -inset-16 rounded-full border border-dashed border-acid/10" />
        <div className="relative aspect-[.82] overflow-hidden rounded-[15rem_15rem_2rem_2rem] border border-white/15 bg-panel shadow-2xl">
          <Image src={siteConfig.portrait} alt="Portrait of Syed Kamran Shah" fill priority sizes="(max-width: 1024px) 90vw, 520px" className="object-cover object-[50%_18%] saturate-[.88] contrast-[1.04]" />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 border border-white/15 bg-black/65 p-4 backdrop-blur-xl"><span className="grid size-11 place-items-center bg-acid text-black"><Sparkles size={19} /></span><div><small className="block text-[9px] font-bold uppercase tracking-[.16em] text-muted">Current focus</small><strong className="text-sm">AI products that do useful work</strong></div></div>
        </div>
      </Reveal>
    </div>
  </section>;
}
