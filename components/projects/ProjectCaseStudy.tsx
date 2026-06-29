import { Check, CircleDot, Layers3, Lightbulb, Puzzle } from "lucide-react";
import Image from "next/image";

import { LazyVideo } from "@/components/ui/LazyVideo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/data/projects";

function DetailBlock({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <article className="grid gap-5 border-t border-white/10 py-10 md:grid-cols-[120px_1fr] md:py-14">
    <span className="font-display text-lg italic text-acid">{number}</span>
    <div><h2 className="text-2xl font-semibold tracking-[-.035em] text-ink sm:text-3xl">{title}</h2><div className="mt-5 text-base leading-8 text-muted">{children}</div></div>
  </article>;
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  return <>
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading eyebrow="Case study" title="From problem to" accent="working system." />
        <div className="mt-16">
          <DetailBlock number="01" title="The problem"><p>{project.problem}</p></DetailBlock>
          <DetailBlock number="02" title="The solution"><p>{project.solution}</p></DetailBlock>
          <DetailBlock number="03" title="Core features"><ul className="grid gap-3 sm:grid-cols-2">{project.features.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 shrink-0 text-acid" size={17} /> {item}</li>)}</ul></DetailBlock>
          <DetailBlock number="04" title="Architecture"><div className="grid gap-3 sm:grid-cols-2">{project.architecture.map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.025] p-4"><Layers3 className="text-acid" size={17} /><span className="text-sm text-ink">{index + 1}. {item}</span></div>)}</div></DetailBlock>
          <DetailBlock number="05" title="Challenges"><ul className="space-y-3">{project.challenges.map((item) => <li key={item} className="flex gap-3"><Puzzle className="mt-1 shrink-0 text-acid" size={17} /> {item}</li>)}</ul></DetailBlock>
          <DetailBlock number="06" title="Lessons learned"><ul className="space-y-3">{project.lessons.map((item) => <li key={item} className="flex gap-3"><Lightbulb className="mt-1 shrink-0 text-acid" size={17} /> {item}</li>)}</ul></DetailBlock>
        </div>
      </div>
    </section>
    <section className="border-y border-white/[.08] bg-panel px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-acid">Tech stack</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">Tools chosen for the job.</h2></div>
          <div className="flex flex-wrap content-start gap-3">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-canvas px-4 py-2 text-sm text-muted">{tech}</span>)}</div>
        </div>
      </div>
    </section>
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      {project.demoAvailable && project.demoVideo ? <LazyVideo src={project.demoVideo} title={project.title + " demo video"} className="mb-6 border border-white/10" /> : null}
      {project.screenshots?.length ? <div className="grid gap-6 sm:grid-cols-2">{project.screenshots.map((screenshot, index) => <div key={screenshot} className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10"><Image src={screenshot} alt={project.title + " screenshot " + (index + 1)} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" /></div>)}</div> : <div className="rounded-3xl border border-dashed border-white/15 bg-white/[.02] p-8 text-center sm:p-14"><CircleDot className="mx-auto text-acid" size={28} /><h2 className="mt-5 text-2xl font-semibold">Project screenshots</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">Screenshot support is ready. Add image files under <code className="text-acid">/public/projects/</code> and list their paths in the project data when available.</p></div>}
    </section>
  </>;
}
