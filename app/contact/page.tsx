import type { Metadata } from "next";
import { Clock3, Github, Linkedin, Mail } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Discuss an AI product, SaaS application, client portal, or automation project with Syed Kamran Shah." };

export default function ContactPage() {
  return <section className="min-h-[calc(100vh-72px)] px-5 pb-24 pt-32 sm:px-8 lg:px-12 lg:pb-32"><div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[.78fr_1.22fr]"><div><SectionHeading eyebrow="Contact" title="Tell me what should work" accent="better." description="Share the workflow, product idea, or business problem. I’ll reply with honest questions and a practical next step." /><div className="mt-10 space-y-4 border-t border-white/10 pt-7"><a href={siteConfig.socials.email} className="flex items-center gap-3 text-sm text-muted hover:text-acid"><Mail size={17} /> {siteConfig.email}</a><a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-acid"><Linkedin size={17} /> LinkedIn</a><a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-acid"><Github size={17} /> GitHub</a><p className="flex items-center gap-3 text-sm text-muted"><Clock3 size={17} /> Typical reply: within 1–2 business days</p></div></div><ContactForm /></div></section>;
}
