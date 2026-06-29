export type ProjectVisualVariant = "assistant" | "capacity" | "carbon" | "portal";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  year: string;
  status: string;
  featured: boolean;
  visual: ProjectVisualVariant;
  tech: string[];
  features: string[];
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  lessons: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  demoVideo?: string;
  demoAvailable?: boolean;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-video-assistant",
    title: "AI Video Assistant",
    category: "Flagship AI Project",
    description:
      "Upload a video or paste a YouTube link, generate transcripts, extract structured insights, and chat with the content using retrieval-augmented generation.",
    overview:
      "A meeting and video intelligence workspace that compresses hours of content into searchable transcripts, concise summaries, decisions, action items, and grounded answers.",
    year: "2026",
    status: "Active build",
    featured: true,
    visual: "assistant",
    tech: ["Next.js", "Python", "Whisper", "Mistral AI", "ChromaDB", "RAG", "FastAPI"],
    features: [
      "Video and audio upload",
      "YouTube URL processing",
      "Audio extraction and chunking",
      "Local Whisper transcription",
      "Vector embeddings and semantic search",
      "Transcript-grounded chat",
      "Summaries, decisions, and action items",
      "Clean analysis dashboard",
    ],
    problem:
      "Meetings, interviews, and long-form videos contain valuable information, but reviewing them manually is slow. Generic summaries also lose traceability and make follow-up questions difficult.",
    solution:
      "The assistant creates a structured processing pipeline: media becomes audio, audio becomes a chunked transcript, transcript chunks become searchable embeddings, and an LLM produces grounded analysis and answers.",
    architecture: [
      "Next.js product interface",
      "FastAPI processing boundary",
      "FFmpeg audio extraction",
      "Whisper speech-to-text",
      "ChromaDB vector retrieval",
      "Mistral AI analysis and chat",
    ],
    challenges: [
      "Handling large media files without blocking the interface",
      "Maintaining context across transcript chunks",
      "Grounding answers strictly in retrieved transcript passages",
    ],
    lessons: [
      "Background processing needs visible, honest progress states",
      "Retrieval quality depends as much on chunking as the embedding model",
      "Structured outputs make AI analysis far more useful downstream",
    ],
    demoVideo: "https://res.cloudinary.com/did4wfpal/video/upload/v1782713614/0628_quxwzy.mp4",
    demoAvailable: true,
    screenshots: [],
  },
  {
    slug: "capacity-lab-os",
    title: "Capacity Lab OS",
    category: "Full-Stack SaaS",
    description:
      "A modern wellness SaaS platform with onboarding, member dashboards, connected-signal analytics, authentication, and client portal workflows.",
    overview:
      "Capacity Lab helps members understand how energy, sleep, regulation, recovery, and readiness move together through a calm, contextual product experience.",
    year: "2026",
    status: "Live product",
    featured: true,
    visual: "capacity",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Guided member onboarding",
      "Secure authentication",
      "Contextual daily check-ins",
      "Five-signal capacity map",
      "Member dashboards and analytics",
      "Private client portal workflows",
    ],
    problem:
      "Personal wellness signals are often isolated across apps and scores. That fragmentation makes it difficult to notice patterns or make considered decisions from personal context.",
    solution:
      "Capacity Lab connects the signals in one trusted workflow, pairing simple daily input with understandable analytics and careful, non-diagnostic language.",
    architecture: [
      "Next.js App Router interface",
      "Supabase authentication and row-level security",
      "PostgreSQL signal and check-in model",
      "Server-side data access",
      "Responsive member dashboard",
    ],
    challenges: [
      "Communicating wellness patterns without overclaiming",
      "Designing useful analytics from sparse early data",
      "Balancing a premium interface with low-friction daily use",
    ],
    lessons: [
      "Trust is a product feature, not a legal footnote",
      "Good onboarding should produce value before requesting commitment",
      "Context is more useful than an isolated score",
    ],
    liveUrl: "https://capacity-lab-os.vercel.app/",
    demoVideo: "https://res.cloudinary.com/did4wfpal/video/upload/v1782714890/0628_1_1_1_1_okfwp8.mp4",
    demoAvailable: true,
    screenshots: [],
  },
  {
    slug: "carbon-compliance-forecaster",
    title: "Carbon Compliance Forecaster",
    category: "Business Analytics / SaaS",
    description:
      "Forecasts building emissions, estimates LL97 penalties, generates compliance reports, and recommends reduction strategies.",
    overview:
      "A decision-support product concept for property teams navigating emissions targets, financial exposure, and long-term retrofit planning.",
    year: "2026",
    status: "Product case study",
    featured: false,
    visual: "carbon",
    tech: ["Next.js", "Supabase", "PostgreSQL", "PDF Export", "Analytics"],
    features: [
      "Emissions baseline modeling",
      "Multi-year forecast scenarios",
      "Penalty exposure estimates",
      "Reduction strategy comparison",
      "Compliance-ready PDF reports",
    ],
    problem:
      "Building owners need to understand both emissions performance and the financial consequence of inaction, but the source data and rules are difficult to translate into a practical plan.",
    solution:
      "The forecaster turns portfolio inputs into transparent scenarios, estimated penalties, prioritized interventions, and reports stakeholders can review together.",
    architecture: [
      "Next.js scenario workspace",
      "PostgreSQL building and forecast model",
      "Server-side calculation engine",
      "Analytics visualizations",
      "Generated compliance reports",
    ],
    challenges: [
      "Keeping calculations explainable and auditable",
      "Representing changing policy assumptions",
      "Making complex forecasts useful to non-technical stakeholders",
    ],
    lessons: [
      "Every forecast should expose its assumptions",
      "Decision support is more valuable than another dashboard",
      "Exports matter when software enters a real approval workflow",
    ],
  },
  {
    slug: "client-portal-platform",
    title: "Client Portal Platform",
    category: "Full-Stack Development",
    description:
      "A secure client portal with authentication, onboarding, dashboards, documents, messaging, and workflow management.",
    overview:
      "A reusable portal architecture for service businesses that need a clearer client experience and a more dependable operating workflow.",
    year: "2026",
    status: "Platform system",
    featured: false,
    visual: "portal",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Role-aware authentication",
      "Guided client onboarding",
      "Progress and activity dashboards",
      "Document exchange",
      "Secure messaging",
      "Workflow and task management",
    ],
    problem:
      "Client work often lives across email, spreadsheets, shared drives, and disconnected tools. Both the team and client lose visibility into status and next actions.",
    solution:
      "The portal creates one shared operating surface with clear ownership, structured onboarding, secure information exchange, and a visible project timeline.",
    architecture: [
      "Next.js multi-tenant interface",
      "Supabase authentication",
      "PostgreSQL tenant-aware data model",
      "Storage-backed document workflows",
      "Real-time activity updates",
    ],
    challenges: [
      "Designing safe multi-tenant permissions",
      "Keeping onboarding flexible across service types",
      "Reducing notification noise without losing accountability",
    ],
    lessons: [
      "Permission design must happen before interface polish",
      "The best portal mirrors the real service workflow",
      "Clients value clarity more than feature volume",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
