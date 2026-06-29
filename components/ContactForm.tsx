"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { budgetRanges, contactSchema, type ContactInput, projectTypes } from "@/lib/validations";

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>({ type: "idle" });
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus({ type: "idle" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Your message could not be sent.");
      setStatus({ type: "success", message: "Thanks—your message is on its way. I’ll reply as soon as possible." });
      reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong. Please email me directly." });
    }
  };

  const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-white/[.035] px-4 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-acid/60 focus:ring-2 focus:ring-acid/10";
  return <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-white/10 bg-panel p-6 sm:p-8" noValidate>
    <div className="grid gap-6 sm:grid-cols-2">
      <label className="text-xs font-bold uppercase tracking-[.1em] text-muted">Name<input {...register("name")} className={fieldClass} placeholder="Your name" />{errors.name && <span className="mt-2 block text-xs normal-case tracking-normal text-red-400">{errors.name.message}</span>}</label>
      <label className="text-xs font-bold uppercase tracking-[.1em] text-muted">Email<input {...register("email")} type="email" className={fieldClass} placeholder="you@company.com" />{errors.email && <span className="mt-2 block text-xs normal-case tracking-normal text-red-400">{errors.email.message}</span>}</label>
      <label className="text-xs font-bold uppercase tracking-[.1em] text-muted">Project type<select {...register("projectType")} className={fieldClass} defaultValue=""><option value="" disabled>Choose one</option>{projectTypes.map((item) => <option key={item} value={item}>{item}</option>)}</select>{errors.projectType && <span className="mt-2 block text-xs normal-case tracking-normal text-red-400">{errors.projectType.message}</span>}</label>
      <label className="text-xs font-bold uppercase tracking-[.1em] text-muted">Budget range<select {...register("budget")} className={fieldClass} defaultValue=""><option value="" disabled>Choose one</option>{budgetRanges.map((item) => <option key={item} value={item}>{item}</option>)}</select>{errors.budget && <span className="mt-2 block text-xs normal-case tracking-normal text-red-400">{errors.budget.message}</span>}</label>
    </div>
    <label className="mt-6 block text-xs font-bold uppercase tracking-[.1em] text-muted">Project details<textarea {...register("message")} className={fieldClass + " min-h-40 py-4 resize-y"} placeholder="What are you building, what is currently difficult, and what would success look like?" />{errors.message && <span className="mt-2 block text-xs normal-case tracking-normal text-red-400">{errors.message.message}</span>}</label>
    <div className="hidden" aria-hidden="true"><label>Company<input {...register("company")} tabIndex={-1} autoComplete="off" /></label></div>
    {status.type !== "idle" && <div role="status" className={status.type === "success" ? "mt-6 flex gap-3 rounded-xl border border-acid/20 bg-acid/[.06] p-4 text-sm text-ink" : "mt-6 flex gap-3 rounded-xl border border-red-400/20 bg-red-400/[.06] p-4 text-sm text-red-200"}>{status.type === "success" ? <CheckCircle2 className="shrink-0 text-acid" size={19} /> : <AlertCircle className="shrink-0" size={19} />}<span>{status.message}</span></div>}
    <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-6 text-muted">Your details are used only to reply to this enquiry.</p><Button type="submit" disabled={isSubmitting}>{isSubmitting ? <><Loader2 className="animate-spin" size={17} /> Sending</> : <>Send enquiry <Send size={16} /></>}</Button></div>
  </form>;
}
