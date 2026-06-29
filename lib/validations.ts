import { z } from "zod";

export const projectTypes = [
  "AI product",
  "SaaS application",
  "Client portal",
  "Business automation",
  "Other",
] as const;

export const budgetRanges = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,500",
  "$7,500+",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose a project type" }) }),
  budget: z.enum(budgetRanges, { errorMap: () => ({ message: "Choose a budget range" }) }),
  message: z.string().trim().min(20, "Tell me a little more about the project").max(3000),
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
