import Image from "next/image";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Workshops",
  description:
    "Interactive Self-Care Wellness Workshops from Balance Self-Care — a hands-on approach to self-care, self-compassion, and overall wellness.",
  path: "/services/workshops",
  image: "/images/services/workshop.png",
});

export default function WorkshopsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Workshops", path: "/services/workshops" },
        ])}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Services
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-6xl">
            Self-Care Wellness Workshops
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--ink-muted)]">
            Looking for a more interactive way to approach self-care,
            self-compassion, and overall wellness? Balance Self-Care offers
            interactive workshops designed for groups, organizations, and
            communities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
            Workshops create space for reflection, skill-building, and collective
            care — ideal for workplaces, agencies, and community partners seeking
            culturally responsive wellness programming.
          </p>
          <div className="mt-8">
            <Button href="/contact">Inquire about a workshop</Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] md:mx-0 md:max-w-none">
          <Image
            src="/images/services/workshop.png"
            alt="Interactive self-care wellness workshop materials"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </>
  );
}
