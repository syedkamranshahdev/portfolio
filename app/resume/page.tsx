import type { Metadata } from "next";
import { ArrowRight, Check, Download, GraduationCap, Layers3 } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Resume", description: "Resume and capabilities of Syed Kamran Shah, AI full-stack developer." };

const stack = ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Python", "RAG", "Git & GitHub", "AI-assisted development"];
const focus = [
  { title: "Independent product builder", subtitle: "SaaS & AI software", text: "Building product systems that connect modern interfaces, dependable data models, and focused automation." },
  { title: "Capacity Lab OS", subtitle: "Full-stack SaaS", text: "Designed and shipped a contextual wellness product with onboarding, member workflows, authentication, and analytics." },
  { title: "AI product development", subtitle: "Current focus", text: "Developing media intelligence, transcript analysis, RAG, and workflow automation capabilities." },
];

export default function ResumePage() {
  return <><section className="border-b border-white/[.08] px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24"><div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="Resume" title="Product-minded engineering," accent="end to end." description="Software Engineering graduate focused on AI-enabled SaaS, client portals, and business workflow products." /><a href={siteConfig.resume} download className="inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-5 text-sm font-bold text-black"><Download size={17} /> Download PDF</a></div></section>
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1.2fr_.8fr]"><div><h2 className="text-xs font-extrabold uppercase tracking-[.18em] text-acid">Selected experience</h2><div className="mt-7 border-t border-white/10">{focus.map((item, index) => <article key={item.title} className="grid gap-4 border-b border-white/10 py-8 sm:grid-cols-[64px_1fr]"><span className="font-display text-sm italic text-muted">0{index + 1}</span><div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-acid">{item.subtitle}</p><p className="mt-4 text-sm leading-7 text-muted">{item.text}</p></div></article>)}</div></div><aside className="space-y-5"><div className="rounded-3xl border border-white/10 bg-panel p-7"><GraduationCap className="text-acid" size={24} /><p className="mt-8 text-xs font-bold uppercase tracking-[.16em] text-muted">Education</p><h3 className="mt-3 text-2xl font-semibold">Software Engineering Graduate</h3><p className="mt-3 text-sm leading-7 text-muted">Foundation in software architecture, data, web systems, and structured problem solving.</p></div><div className="rounded-3xl border border-white/10 bg-panel p-7"><Layers3 className="text-acid" size={24} /><p className="mt-8 text-xs font-bold uppercase tracking-[.16em] text-muted">Core stack</p><div className="mt-5 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted">{item}</span>)}</div></div></aside></div><div className="mx-auto mt-16 flex max-w-[1200px] justify-end"><ButtonLink href="/contact">Discuss a role or project <ArrowRight size={17} /></ButtonLink></div></section></>;
}
