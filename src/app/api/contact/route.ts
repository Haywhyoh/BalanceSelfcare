import { NextResponse } from "next/server";
import { siteConfig } from "@/content/site";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.toString().trim();
  const email = body.email?.toString().trim();
  const subject = body.subject?.toString().trim();
  const message = body.message?.toString().trim() ?? "";

  if (!name || !email || !subject) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Placeholder for email provider (Resend, Formspree, etc.).
  // For now we accept the inquiry and log it server-side.
  console.info("[contact]", {
    to: siteConfig.email,
    name,
    email,
    subject,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
