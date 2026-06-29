import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

export function ProjectHero({ project }: { project: Project }) {
  return <section className="border-b border-white/[.08] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28">
    <div className="mx-auto max-w-[1340px]">
      <Link href="/projects" className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-muted hover:text-acid"><ArrowLeft size={15} /> All projects</Link>
      <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3"><Badge>{project.category}</Badge><span className="text-xs uppercase tracking-[.12em] text-muted">{project.year} · {project.status}</span></div>
          <h1 className="mt-7 text-5xl font-semibold leading-[.95] tracking-[-.065em] text-ink sm:text-6xl lg:text-8xl">{project.title}</h1>
          <p className="mt-7 text-lg leading-8 text-muted">{project.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-5 text-sm font-bold text-black">Visit live product <ArrowUpRight size={17} /></a>}
            {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-bold"><Github size={17} /> Source code</a>}
            {!project.liveUrl && !project.repositoryUrl && <ButtonLink href="/contact" variant="secondary">Discuss this system <ArrowUpRight size={17} /></ButtonLink>}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10"><ProjectVisual variant={project.visual} /></div>
      </div>
    </div>
  </section>;
}
