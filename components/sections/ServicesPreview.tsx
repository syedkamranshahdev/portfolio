import { ArrowRight, Check } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesPreview() {
  return <section className="border-b border-white/[.08] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-[1340px]">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="Services" title="From opportunity to" accent="working product." description="Focused full-stack support for founders and teams building AI-enabled software and cleaner operations." /><ButtonLink href="/services" variant="secondary">Explore services <ArrowRight size={17} /></ButtonLink></div>
      <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-3">{services.map((service, index) => <Reveal key={service.title} delay={index * .08} className="h-full"><article className="h-full border-b border-r border-white/10 p-7 transition hover:bg-white/[.025] sm:p-9"><span className="grid size-12 place-items-center rounded-xl bg-acid text-black"><service.icon size={22} /></span><h3 className="mt-10 text-2xl font-semibold tracking-[-.04em]">{service.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{service.description}</p><ul className="mt-8 space-y-3 border-t border-white/10 pt-6">{service.capabilities.map((item) => <li key={item} className="flex items-center gap-2 text-xs text-muted"><Check size={14} className="text-acid" /> {item}</li>)}</ul></article></Reveal>)}</div>
    </div>
  </section>;
}
