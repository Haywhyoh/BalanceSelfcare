import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        404
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-5xl">
        Page not found
      </h1>
      <p className="mt-5 text-lg text-[var(--ink-muted)]">
        The page you&apos;re looking for may have moved. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Home</Button>
        <Button href="/services" variant="secondary">
          Services
        </Button>
        <Button href="/team" variant="secondary">
          Team
        </Button>
      </div>
      <p className="mt-8 text-sm text-[var(--ink-muted)]">
        Looking for a clinician profile? Visit{" "}
        <Link href="/team" className="font-semibold text-[var(--brand)] underline-offset-4 hover:underline">
          /team
        </Link>
        .
      </p>
    </section>
  );
}
