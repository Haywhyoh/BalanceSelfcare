import Image from "next/image";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { presentationTopics } from "@/content/services";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Presentations",
  description:
    "Media and in-person mental health presentations on self-care, burnout, boundaries, anxiety, and stress management across Canada and the United States.",
  path: "/services/presentations",
  image: "/images/services/presentation-1.png",
});

export default function PresentationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Presentations", path: "/services/presentations" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Services
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-6xl">
          Media and in-person presentations
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
          Mental health is intersectional and interconnected with everything. We
          present on topics that help organizations and communities build
          healthier cultures of care.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "/images/services/presentation-1.png",
            "/images/services/presentation-2.png",
            "/images/services/presentation-3.png",
          ].map((src, index) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Balance Self-Care presentation visual ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)] md:text-3xl">
              Topics we present on
            </h2>
            <ul className="mt-6 space-y-3">
              {presentationTopics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-2xl bg-white/70 px-5 py-4 text-[var(--ink-muted)] ring-1 ring-[var(--line)]"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-[var(--bg-deep)] p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
              Fees & customization
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
              Fees are determined by the type and customization of the
              presentation, travel distance (if applicable), and materials needed.
              Presentations are available across Canada and the United States.
            </p>
            <div className="mt-8">
              <Button href="/contact">Schedule a presentation</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
