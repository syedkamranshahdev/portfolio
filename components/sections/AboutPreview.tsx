import { ArrowRight, Blocks, Search, Workflow } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  { icon: Search, title: "Understand first", text: "Start with the workflow, the user, and the evidence—not a fashionable stack." },
  { icon: Blocks, title: "Build the system", text: "Connect interface, data, permissions, and automation into one dependable product." },
  { icon: Workflow, title: "Improve the work", text: "Measure success by clearer decisions and fewer manual steps, not feature count." },
];

export function AboutPreview() {
  return <section className="border-b border-white/[.08] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-[1340px]">
      <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <div><SectionHeading eyebrow="How I work" title="Product thinking meets" accent="full-stack execution." description="I turn messy business processes into focused software—combining customer discovery, interface design, system architecture, and AI where it creates real leverage." /><ButtonLink href="/about" variant="secondary" className="mt-9">About my approach <ArrowRight size={17} /></ButtonLink></div>
        <div className="border-t border-white/10">{principles.map((item, index) => <Reveal key={item.title} delay={index * .08}><article className="grid gap-4 border-b border-white/10 py-8 sm:grid-cols-[64px_1fr]"><span className="grid size-12 place-items-center rounded-xl border border-acid/20 bg-acid/[.06] text-acid"><item.icon size={21} /></span><div><h3 className="text-xl font-semibold tracking-[-.03em]">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.text}</p></div></article></Reveal>)}</div>
      </div>
    </div>
  </section>;
}
