import Link from "next/link";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { ontarioLocations } from "@/content/locations";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { pageUrl } from "@/lib/urls";

export const metadata = buildMetadata({
  title: "Virtual Therapist Across Ontario",
  description:
    "Find a virtual therapist for Toronto, Ottawa, Mississauga, Brampton, Hamilton, London, and cities across Ontario. Online counselling by phone or secure video.",
  keywords: [
    "virtual therapist Ontario",
    "online therapist Ontario",
    "online therapy Ontario cities",
    ...ontarioLocations.map((location) => `virtual therapist ${location.name}`),
  ],
  path: "/locations",
  image: "/images/services/psychotherapy.jpg",
});

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Online therapy across Ontario", path: "/locations" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Virtual therapy across Ontario",
            itemListElement: ontarioLocations.map((location, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: `Virtual therapist in ${location.name}`,
              url: pageUrl(`/locations/${location.slug}`),
            })),
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Ontario cities
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-6xl">
          Virtual therapists across Ontario
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
          Balance Self-Care offers culturally responsive online therapy by phone
          and PHIPA-compliant video. Choose your city for local details — the
          same Ontario-registered clinicians, wherever you are in the province.
        </p>
        <div className="mt-8">
          <Button href={siteConfig.janeAppUrl} external>
            Book a free 15-minute consultation
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ontarioLocations.map((location) => (
            <li key={location.slug}>
              <Link
                href={`/locations/${location.slug}`}
                className="flex h-full flex-col rounded-2xl bg-white/70 p-6 ring-1 ring-[var(--line)] transition hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  {location.region}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
                  {location.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {location.cardSummary}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--brand)]">
                  Online therapist in {location.name} →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
