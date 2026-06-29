import { Bot, LayoutDashboard, Workflow } from "lucide-react";

export const services = [
  {
    title: "AI Product Development",
    description:
      "Production-minded AI features that turn unstructured information into useful workflows, answers, and decisions.",
    icon: Bot,
    capabilities: ["RAG applications", "AI assistants", "Document and media intelligence", "LLM workflow integration"],
  },
  {
    title: "SaaS & Client Portals",
    description:
      "Secure full-stack products with polished onboarding, dashboards, permissions, analytics, and account workflows.",
    icon: LayoutDashboard,
    capabilities: ["Next.js applications", "Supabase authentication", "PostgreSQL data models", "Admin and member experiences"],
  },
  {
    title: "Business Automation",
    description:
      "Purpose-built software that replaces manual handoffs, scattered data, and repetitive operational work.",
    icon: Workflow,
    capabilities: ["Workflow mapping", "System integrations", "Reporting and exports", "Rapid MVP validation"],
  },
] as const;
