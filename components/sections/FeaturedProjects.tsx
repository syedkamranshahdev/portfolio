import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return <section className="border-b border-white/[.08] bg-panel/50 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-[1340px]">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="Featured work" title="Software built around" accent="real workflows." description="Flagship products spanning media intelligence, contextual analytics, secure portals, and business operations." /><ButtonLink href="/projects" variant="secondary">View all projects <ArrowRight size={17} /></ButtonLink></div>
      <div className="mt-14 grid gap-6 lg:grid-cols-2">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    </div>
  </section>;
}
