import type { Metadata } from "next";
import { ArrowRight, Check, MessageSquare, Rocket, Search } from "lucide-react";

import { ContactCTA } from "@/components/sections/ContactCTA";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services", description: "AI product development, SaaS and client portals, and business automation services." };

const process = [
  { icon: MessageSquare, title: "Discover", text: "Clarify the user, workflow, constraints, and evidence behind the opportunity." },
  { icon: Search, title: "Shape", text: "Define the smallest valuable product, system boundaries, and measurable outcome." },
  { icon: Rocket, title: "Build & learn", text: "Ship focused increments, test the workflow, and improve from real feedback." },
];

export default function ServicesPage() {
  return <><section className="border-b border-white/[.08] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28"><div className="mx-auto flex max-w-[1340px] flex-col items-start justify-between gap-9 lg:flex-row lg:items-end"><SectionHeading eyebrow="Services" title="Software that removes friction and" accent="creates leverage." description="I partner on focused AI products, SaaS applications, client experiences, and operational systems from product framing through implementation." /><ButtonLink href="/contact">Discuss a project <ArrowRight size={17} /></ButtonLink></div></section>
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1340px] space-y-6">{services.map((service, index) => <Reveal key={service.title} delay={index * .07}><article className="grid gap-8 rounded-3xl border border-white/10 bg-panel p-7 sm:p-10 lg:grid-cols-[80px_1fr_1fr]"><span className="grid size-14 place-items-center rounded-2xl bg-acid text-black"><service.icon size={25} /></span><div><span className="font-display text-sm italic text-acid">0{index + 1}</span><h2 className="mt-3 text-3xl font-semibold tracking-[-.045em]">{service.title}</h2><p className="mt-4 text-sm leading-7 text-muted">{service.description}</p></div><ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">{service.capabilities.map((item) => <li key={item} className="flex items-center gap-3 rounded-xl border border-white/[.08] bg-canvas px-4 py-3 text-sm text-muted"><Check className="shrink-0 text-acid" size={15} /> {item}</li>)}</ul></article></Reveal>)}</div></section>
    <section className="border-y border-white/[.08] bg-panel/45 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1340px]"><SectionHeading eyebrow="Process" title="Move from ambiguity to" accent="evidence." /><div className="mt-14 grid gap-5 md:grid-cols-3">{process.map((step, index) => <article key={step.title} className="rounded-3xl border border-white/10 bg-canvas p-7"><div className="flex items-center justify-between"><step.icon className="text-acid" size={22} /><span className="font-display text-sm italic text-muted">0{index + 1}</span></div><h2 className="mt-12 text-2xl font-semibold">{step.title}</h2><p className="mt-4 text-sm leading-7 text-muted">{step.text}</p></article>)}</div></div></section><ContactCTA /></>;
}
