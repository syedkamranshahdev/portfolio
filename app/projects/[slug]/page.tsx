import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.description, openGraph: { title: project.title, description: project.description, type: "article" } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <><ProjectHero project={project} /><ProjectCaseStudy project={project} /><ContactCTA /></>;
}
