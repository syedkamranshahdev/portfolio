import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
  return value.replace(/[&<>'"]/g, (character) => entities[character] || character);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body && typeof body === "object" && "company" in body && String((body as { company?: string }).company || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message || "Check the form fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  if (!apiKey || !contactEmail) {
    return NextResponse.json({ error: "Email delivery is not configured yet. Please use the direct email link." }, { status: 503 });
  }

  const { name, email, projectType, budget, message } = parsed.data;
  const resend = new Resend(apiKey);
  try {
    const html = "<div style=\"font-family:Arial,sans-serif;line-height:1.65;color:#111\">" +
      "<h2>New portfolio enquiry</h2>" +
      "<p><strong>Name:</strong> " + escapeHtml(name) + "</p>" +
      "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>" +
      "<p><strong>Project:</strong> " + escapeHtml(projectType) + "</p>" +
      "<p><strong>Budget:</strong> " + escapeHtml(budget) + "</p><hr><p>" +
      escapeHtml(message).replace(/\n/g, "<br>") + "</p></div>";
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: "Portfolio enquiry: " + projectType + " from " + name,
      html,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Email delivery failed. Please try again or email me directly." }, { status: 502 });
  }
}
