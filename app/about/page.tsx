import type { Metadata } from "next";
import { ArrowRight, Code2, Compass, Database, Sparkles } from "lucide-react";
import Image from "next/image";

import { ContactCTA } from "@/components/sections/ContactCTA";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "About", description: "Learn how Syed Kamran Shah approaches AI products, SaaS systems, and workflow automation." };

const values = [
  { icon: Compass, title: "Problem before platform", text: "A useful product begins with a specific person, workflow, and constraint—not a technology pitch." },
  { icon: Code2, title: "Full-stack ownership", text: "I care about the complete system: interface, data model, permissions, automation, and deployment." },
  { icon: Database, title: "Clarity over complexity", text: "Architecture should make the product easier to change, operate, and understand as it grows." },
  { icon: Sparkles, title: "AI with a job to do", text: "AI belongs where it reduces cognitive load or creates a capability the workflow genuinely needs." },
];

export default function AboutPage() {
  return <>
    <section className="border-b border-white/[.08] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28"><div className="mx-auto grid max-w-[1340px] items-center gap-14 lg:grid-cols-[1fr_.72fr]"><div><SectionHeading eyebrow="About" title="I build software around" accent="how work really happens." description="I’m a Software Engineering graduate and AI full-stack developer focused on SaaS products, client portals, RAG applications, and business automation." /><p className="mt-7 max-w-2xl text-base leading-8 text-muted">The work I enjoy most sits between product thinking and technical execution: discovering what is actually painful, turning that into a focused system, and refining the experience until it feels obvious to use.</p><div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="/projects">See my work <ArrowRight size={17} /></ButtonLink><ButtonLink href="/contact" variant="secondary">Start a conversation</ButtonLink></div></div><Reveal className="relative mx-auto aspect-[.88] w-full max-w-md overflow-hidden rounded-[12rem_12rem_2rem_2rem] border border-white/15"><Image src={siteConfig.portrait} alt="Syed Kamran Shah" fill sizes="(max-width: 1024px) 90vw, 440px" className="object-cover object-[50%_18%]" /><div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent" /></Reveal></div></section>
    <section className="border-b border-white/[.08] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1340px]"><SectionHeading eyebrow="Principles" title="A practical approach to" accent="better products." /><div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2">{values.map((value, index) => <Reveal key={value.title} delay={index * .06}><article className="h-full border-b border-r border-white/10 p-7 sm:p-10"><value.icon className="text-acid" size={24} /><h2 className="mt-8 text-2xl font-semibold tracking-[-.035em]">{value.title}</h2><p className="mt-4 text-sm leading-7 text-muted">{value.text}</p></article></Reveal>)}</div></div></section>
    <section className="border-b border-white/[.08] bg-panel/45 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1340px] gap-14 lg:grid-cols-[.7fr_1.3fr]"><SectionHeading eyebrow="Current direction" title="Learning through" accent="building." /><div className="grid gap-4 sm:grid-cols-2">{["SaaS validation", "Product development", "Business automation", "Customer discovery", "AI-assisted development", "RAG systems"].map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-canvas p-6"><span className="font-display text-sm italic text-acid">0{index + 1}</span><h3 className="mt-5 text-lg font-semibold">{item}</h3></div>)}</div></div></section>
    <ContactCTA />
  </>;
}
