import { Button } from "@/components/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "The Balance Self-Care blog is coming soon — reflections on self-care, burnout, boundaries, and culturally responsive mental health.",
  path: "/blog",
  noIndex: true,
});

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        Blog
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-5xl">
        Coming soon
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-[var(--ink-muted)]">
        We&apos;re preparing a space for reflections on self-care, burnout,
        boundaries, and culturally responsive mental health. Check back soon, or
        reach out in the meantime.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/services">Explore services</Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
    </section>
  );
}
