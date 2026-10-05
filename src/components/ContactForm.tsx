"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Failed to send");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none ring-[var(--brand)]/20 transition focus:ring-4"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none ring-[var(--brand)]/20 transition focus:ring-4"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          className="w-full rounded-md border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none ring-[var(--brand)]/20 transition focus:ring-4"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none ring-[var(--brand)]/20 transition focus:ring-4"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-[var(--brand-contrast)] transition hover:bg-[var(--brand-soft)] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-[var(--brand)]" role="status">
          Thank you. Your inquiry has been received. We&apos;ll be in touch soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          Something went wrong. Please email us directly at admin@balanceselfcare.ca.
        </p>
      ) : null}
    </form>
  );
}
