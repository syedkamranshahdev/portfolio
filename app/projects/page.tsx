import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "AI, SaaS, analytics, and client portal projects by Syed Kamran Shah." };

export default function ProjectsPage() {
  return <><section className="border-b border-white/[.08] px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24"><div className="mx-auto max-w-[1340px]"><SectionHeading eyebrow="Selected work" title="Products, systems, and" accent="case studies." description="A growing body of work across AI media intelligence, wellness SaaS, carbon compliance analytics, and secure client operations." /></div></section><section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1340px] gap-6 lg:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section><ContactCTA /></>;
}
