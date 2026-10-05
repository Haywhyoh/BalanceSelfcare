import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { servicesOverview } from "@/content/services";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchemas } from "@/lib/schema";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description:
    "Welcome to Balance Self-Care — virtual psychotherapy, interactive workshops, and presentations supporting mental health and personal growth across Canada and the United States.",
  path: "/",
  image: "/images/home/hero.jpg",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchemas()} />

      <section className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/hero.jpg"
            alt="Calm botanical setting reflecting self-care and restoration"
            fill
            priority
            className="hero-media object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,32,29,0.82)] via-[rgba(8,32,29,0.55)] to-[rgba(8,32,29,0.25)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,32,29,0.55)] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-20">
          <p className="reveal font-[family-name:var(--font-display)] text-4xl leading-none text-white sm:text-5xl md:text-7xl">
            Balance Self-Care
          </p>
          <h1 className="reveal-delay mt-5 max-w-2xl font-[family-name:var(--font-display)] text-2xl leading-snug text-white/95 sm:text-3xl md:text-4xl">
            Self-care is a lifestyle, not just an action.
          </h1>
          <p className="reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Welcome to Balance Self-Care. We&apos;re so glad you&apos;re here.
            Virtual psychotherapy, interactive workshops, and in-person trainings
            designed to support your mental health and personal growth.
          </p>
          <div className="reveal-delay-2 mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.janeAppUrl} external variant="primary">
              Book Now
            </Button>
            <Button href="/contact" variant="ghost">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:aspect-[5/6]">
            <Image
              src="/images/home/welcome.jpg"
              alt="Supportive conversation reflecting culturally responsive care"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Welcome
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-5xl">
              Care that meets you where you are
            </h2>
            <div className="prose-balance mt-6 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
              <p>
                At Balance Self-Care, we offer virtual psychotherapy, interactive
                workshops, and in-person trainings designed to support your mental
                health and personal growth.
              </p>
              <p>
                Our services are available across{" "}
                <strong className="font-semibold text-[var(--ink)]">
                  Canada and the United States
                </strong>
                , making it easier than ever to access the care and connection you
                deserve. Psychotherapy sessions are available to clients{" "}
                <strong className="font-semibold text-[var(--ink)]">
                  16+ across Ontario
                </strong>{" "}
                by phone and PHIPA-compliant video.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                About our practice
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand)] py-20 text-[var(--brand-contrast)] md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <blockquote>
            <p className="font-[family-name:var(--font-display)] text-2xl leading-snug md:text-4xl">
              &ldquo;Caring for myself is not self-indulgence, it is
              self-preservation, and that is an act of political warfare.&rdquo;
            </p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
              — Audre Lorde
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            What we do
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-5xl">
            Therapy, workshops, and presentations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            Virtual individual, couple, and family psychotherapy — plus webinars,
            workshops, and presentations for communities and organizations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {servicesOverview.map((service, index) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group block"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {service.number}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--brand)] transition group-hover:text-[var(--brand-soft)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/50 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Our clinicians
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
                Meet the team
              </h2>
            </div>
            <Button href="/team" variant="secondary">
              View all clinicians
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
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
                  <p className="text-sm text-[var(--ink-muted)]">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--brand)] px-8 py-14 text-[var(--brand-contrast)] md:px-14">
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl md:text-5xl">
            Ready to begin?
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/75 md:text-lg">
            Book a session through Jane App, or reach out to schedule a
            presentation or workshop for your organization.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.janeAppUrl} external>
              Book Now
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
