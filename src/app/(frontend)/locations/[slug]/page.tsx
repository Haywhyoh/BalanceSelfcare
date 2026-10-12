import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { focusAreas } from "@/content/services";
import {
  getLocation,
  nearbyLocations,
  ontarioLocations,
} from "@/content/locations";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  locationServiceSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ontarioLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  return buildMetadata({
    title: location.title,
    description: location.description,
    keywords: location.keywords,
    path: `/locations/${location.slug}`,
    image: "/images/services/psychotherapy.jpg",
  });
}

const howItWorks = [
  {
    step: "Step 1",
    title: "Book a free 15-minute consultation",
    body: "Ask questions, share what brings you in, and see whether a clinician feels like the right fit — from a private space in your city.",
  },
  {
    step: "Step 2",
    title: "Meet your virtual therapist",
    body: "Sessions take place by phone or PHIPA-compliant video. No commute, no waiting room, and no need for a local clinic.",
  },
  {
    step: "Step 3",
    title: "Begin your care plan",
    body: "Together you clarify goals and build a plan that reflects your culture, values, and pace.",
  },
];

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const nearby = nearbyLocations(location);

  return (
    <>
      <JsonLd
        data={[
          locationServiceSchema(location),
          faqSchema(location.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Online therapy across Ontario", path: "/locations" },
            {
              name: location.name,
              path: `/locations/${location.slug}`,
            },
          ]),
        ]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/psychotherapy.jpg"
            alt={`Private space for virtual therapy serving ${location.name}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(8,32,29,0.72)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
            {location.region} · Virtual care
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-white md:text-6xl">
            {location.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{location.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.janeAppUrl} external>
              Book a free 15-minute consultation
            </Button>
            <Button href="/services/psychotherapy" variant="ghost">
              How online therapy works
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Online therapist in {location.name}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
          Culturally responsive virtual therapy for people in {location.name}
        </h2>
        <div className="prose-balance mt-6 space-y-5 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          {location.localContext.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/55 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)]">
              Why see a virtual therapist from {location.name}?
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
              {location.whyVirtual}
            </p>
            <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
              {location.whoWeHelp}
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)]">
              Getting started
            </h2>
            <ol className="mt-6 space-y-4">
              {howItWorks.map((item) => (
                <li
                  key={item.step}
                  className="rounded-2xl bg-[var(--bg)] p-5 ring-1 ring-[var(--line)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {item.step}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl text-[var(--brand)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Focus areas
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
            What an online therapist in {location.name} can help with
          </h2>
        </div>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-2xl bg-white/70 px-5 py-4 text-[var(--ink-muted)] ring-1 ring-[var(--line)]"
            >
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-[var(--ink-muted)]">
          Read more about{" "}
          <Link
            href="/services/psychotherapy"
            className="font-semibold text-[var(--brand)] underline underline-offset-4"
          >
            virtual psychotherapy in Ontario
          </Link>{" "}
          or{" "}
          <Link
            href="/team"
            className="font-semibold text-[var(--brand)] underline underline-offset-4"
          >
            meet the clinicians
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-[var(--line)] bg-white/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)]">
            Ontario-registered clinicians
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Your {location.name} sessions are with the same Balance Self-Care
            team — Registered Social Workers and an RP (Qualifying) — not a
            marketplace of unregulated coaches.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <li key={member.slug}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-[var(--bg)] p-3 ring-1 ring-[var(--line)] transition hover:bg-white"
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--brand)] group-hover:underline">
                      {member.shortName}
                    </p>
                    <p className="text-sm text-[var(--ink-muted)]">
                      {member.role}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
              Virtual therapy in {location.name}: frequently asked questions
            </h2>
            <div className="mt-6 divide-y divide-[var(--line)] rounded-2xl bg-white/70 ring-1 ring-[var(--line)]">
              {location.faqs.map((faq) => (
                <details key={faq.question} className="group px-5 py-4">
                  <summary className="cursor-pointer list-none font-semibold text-[var(--brand)] marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
              Also serving nearby Ontario communities
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
              Because care is virtual, you can see an online therapist from{" "}
              {location.name} or from neighbouring cities across the province.
            </p>
            {nearby.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {nearby.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/locations/${item.slug}`}
                      className="inline-flex rounded-full bg-white/70 px-4 py-1.5 text-sm text-[var(--ink-muted)] ring-1 ring-[var(--line)] transition hover:bg-white hover:text-[var(--brand)]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-6 text-sm text-[var(--ink-muted)]">
              <Link
                href="/locations"
                className="font-semibold text-[var(--brand)] underline underline-offset-4"
              >
                See all Ontario cities we serve
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--brand)] px-8 py-14 text-[var(--brand-contrast)] md:px-14">
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl md:text-5xl">
            Ready to meet a virtual therapist in {location.name}?
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/75 md:text-lg">
            Book a complimentary 15-minute consultation, or schedule an ongoing
            phone or video session through Jane App.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.janeAppUrl} external>
              Book now
            </Button>
            <Button href="/contact" variant="ghost">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
