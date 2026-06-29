import { Activity, Bot, Building2, Leaf, ShieldCheck, Sparkles } from "lucide-react";

import type { ProjectVisualVariant } from "@/data/projects";
import { cn } from "@/lib/utils";

const variantContent = {
  assistant: { icon: Bot, label: "Transcript intelligence", metric: "RAG", metricLabel: "Grounded answers" },
  capacity: { icon: Activity, label: "Connected capacity", metric: "5", metricLabel: "Live signals" },
  carbon: { icon: Leaf, label: "Compliance forecast", metric: "↓", metricLabel: "Penalty exposure" },
  portal: { icon: ShieldCheck, label: "Secure workspace", metric: "1", metricLabel: "Shared portal" },
};

export function ProjectVisual({ variant, compact = false }: { variant: ProjectVisualVariant; compact?: boolean }) {
  const content = variantContent[variant];
  const Icon = content.icon;
  return <div className={cn("relative isolate overflow-hidden bg-[#111612]", compact ? "min-h-64" : "min-h-[420px]")}>
    <div className="absolute inset-0 bg-grid bg-[size:38px_38px] opacity-25" />
    <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/10 blur-3xl" />
    <div className="absolute inset-[12%] z-10 rounded-2xl border border-white/15 bg-black/60 p-4 shadow-2xl backdrop-blur sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-acid text-black"><Icon size={18} /></span><span className="text-xs font-bold uppercase tracking-[.12em] text-muted">{content.label}</span></div>
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-acid"><i className="size-1.5 rounded-full bg-acid shadow-[0_0_12px_#c8ff52]" /> Live</span>
      </div>
      <div className="grid h-[calc(100%-56px)] grid-cols-[1.2fr_.8fr] gap-3 pt-4">
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[.03] p-4">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[.12em] text-muted"><span>Product signal</span><Sparkles size={13} className="text-acid" /></div>
          <div className="flex h-24 items-end gap-2">{[42,68,54,84,62,92,74].map((height, index) => <i key={index} style={{ height: height + "%" }} className={cn("flex-1 rounded-sm bg-white/10", index === 5 && "bg-acid")} />)}</div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[.03] p-4"><span className="text-3xl font-semibold text-acid">{content.metric}</span><p className="mt-2 text-[10px] uppercase tracking-[.12em] text-muted">{content.metricLabel}</p></div>
          <div className="rounded-xl border border-white/10 bg-white/[.03] p-4"><div className="mb-3 flex items-center gap-2 text-[10px] text-muted"><Building2 size={13} /> Workflow</div><div className="space-y-2"><i className="block h-1.5 w-full rounded bg-white/10" /><i className="block h-1.5 w-4/5 rounded bg-acid/40" /><i className="block h-1.5 w-3/5 rounded bg-white/10" /></div></div>
        </div>
      </div>
    </div>
  </div>;
}
