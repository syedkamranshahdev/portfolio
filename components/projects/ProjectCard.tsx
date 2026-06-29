import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <Reveal delay={Math.min(index * .08, .24)}>
    <Link href={'/projects/' + project.slug} className="group block overflow-hidden rounded-3xl border border-white/10 bg-panel transition duration-300 hover:-translate-y-1 hover:border-acid/40">
      <ProjectVisual variant={project.visual} compact />
      <div className="p-6 sm:p-8">
        <div className="mb-5 flex items-center justify-between gap-4"><Badge>{project.category}</Badge><ArrowUpRight className="text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-acid" size={20} /></div>
        <h3 className="text-2xl font-semibold tracking-[-.035em] text-ink sm:text-3xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">{project.tech.slice(0, 4).map((tech) => <span key={tech} className="rounded-full border border-white/[.08] px-3 py-1 text-[11px] text-muted">{tech}</span>)}</div>
      </div>
    </Link>
  </Reveal>;
}
