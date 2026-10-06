import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { homeFaqs } from "@/content/faq";
import { servicesOverview } from "@/content/services";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import {
  googleReviewSummary,
  testimonials,
} from "@/content/testimonials";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchemas } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Virtual Therapist in Ontario | Balance Self-Care",
  absoluteTitle: true,
  description:
    "Virtual therapists in Ontario offering online therapy by phone or secure video for clients 16+. Culturally responsive care. Free 15-minute consultation.",
  path: "/",
  image: "/images/home/hero.jpg",
});

const howItWorks = [
  {
    step: "Step 1",
    title: "Book a free 15-minute consultation",
    body: "Choose a time that works for you through our secure online scheduling. Ask questions, share what brings you in, and see whether we feel like the right fit.",
  },
  {
    step: "Step 2",
    title: "Meet your virtual therapist",
    body: "Sessions take place by phone or PHIPA-compliant video from wherever you feel comfortable. No commute, no waiting room.",
  },
  {
    step: "Step 3",
    title: "Begin your care plan",
    body: "Together you clarify your goals and build a personalized plan that reflects your culture, values, and pace.",
  },
];

const ontarioAreas = [
  "Toronto",
  "Ottawa",
  "Mississauga",
  "Brampton",
  "Hamilton",
  "London",
  "Markham",
  "Vaughan",
  "Kitchener-Waterloo",
  "Windsor",
  "Oshawa",
  "Barrie",
  "Kingston",
  "Thunder Bay",
  "Sudbury",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[...serviceSchemas(), faqSchema(homeFaqs)]} />

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
          <h1 className="reveal-delay mt-5 max-w-3xl font-[family-name:var(--font-display)] text-2xl leading-snug text-white/95 sm:text-3xl md:text-4xl">
            Virtual Therapist in Ontario for Culturally Responsive Online
            Therapy
          </h1>
          <p className="reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Self-care is a lifestyle, not just an action. Meet with a virtual
            therapist by phone or secure video from wherever you are. Clients
            16+, individuals, couples, and families welcome.
          </p>
          <div className="reveal-delay-2 mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.janeAppUrl} external variant="primary">
              Book a Free 15-Minute Consultation
            </Button>
            <Button href="/services/psychotherapy" variant="ghost">
              Explore Virtual Therapy
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
              Online therapy in Ontario that meets you where you are
            </h2>
            <div className="prose-balance mt-6 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
              <p>
                Balance Self-Care is a team of Ontario-based virtual therapists
                offering culturally responsive psychotherapy for{" "}
                <strong className="font-semibold text-[var(--ink)]">
                  clients 16+, wherever you are
                </strong>{" "}
                by phone and PHIPA-compliant video. Our approach takes your
                culture, identity, faith, and lived experience seriously as part
                of your care.
              </p>
              <p>
                Beyond one-to-one therapy, we deliver interactive workshops and
                presentations on self-care, burnout, and wellness for
                organizations and communities across{" "}
                <strong className="font-semibold text-[var(--ink)]">
                  Canada and the United States
                </strong>
                .
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
            How it works
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-5xl">
            Getting started with a virtual therapist in Ontario
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorks.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl bg-white/70 p-6 ring-1 ring-[var(--line)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {item.step}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-[var(--brand)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            What we do
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-5xl">
            Online therapy services in Ontario, plus workshops and presentations
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

      <section
        className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
        aria-labelledby="client-reviews-heading"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Client reviews
          </p>
          <h2
            id="client-reviews-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-5xl"
          >
            What people say about virtual therapy at Balance Self-Care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            Real{" "}
            <strong className="font-semibold text-[var(--ink)]">
              Google reviews
            </strong>{" "}
            from people who have worked with our Ontario-based virtual
            therapists — culturally responsive, client-centred care by phone or
            secure video.
          </p>
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--ink-muted)]">
            <span
              className="inline-flex items-center gap-1 text-[var(--accent)]"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  viewBox="0 0 20 20"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.77l-4.94 2.6.94-5.49-4-3.9 5.53-.8L10 1.5z" />
                </svg>
              ))}
            </span>
            <span>
              <strong className="font-semibold text-[var(--ink)]">
                {googleReviewSummary.ratingValue.toFixed(1)}
              </strong>{" "}
              average from{" "}
              <strong className="font-semibold text-[var(--ink)]">
                {googleReviewSummary.reviewCount}
              </strong>{" "}
              {googleReviewSummary.sourceLabel}
            </span>
          </p>
        </div>

        <div className="mt-12">
          <blockquote className="relative border-l-4 border-[var(--accent)] pl-6 md:pl-8">
            <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-[var(--brand)] md:text-3xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-5 text-sm text-[var(--ink-muted)]">
              <cite className="not-italic font-semibold text-[var(--ink)]">
                {testimonials[0].author}
              </cite>
              <span aria-hidden="true"> · </span>
              <span>{testimonials[0].source} review</span>
            </footer>
          </blockquote>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(1).map((item) => (
            <li key={item.id}>
              <blockquote className="h-full">
                <div
                  className="flex gap-0.5 text-[var(--accent)]"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <svg
                      key={index}
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5 fill-current"
                    >
                      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.77l-4.94 2.6.94-5.49-4-3.9 5.53-.8L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm">
                  <cite className="not-italic font-semibold text-[var(--brand)]">
                    {item.author}
                  </cite>
                  <span className="mt-0.5 block text-xs text-[var(--ink-muted)]">
                    {item.source} review
                  </span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
              Virtual therapy from Ontario, available wherever you are
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
              Because sessions happen by phone or secure video, you can see a
              virtual therapist whether you live in a major city or a remote
              community. We welcome clients from Ontario cities and communities
              such as the following, and beyond:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {ontarioAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-white/70 px-4 py-1.5 text-sm text-[var(--ink-muted)] ring-1 ring-[var(--line)]"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[var(--ink-muted)]">
              Ready to talk to someone?{" "}
              <Link
                href="/services/psychotherapy"
                className="font-semibold text-[var(--brand)] underline underline-offset-4"
              >
                Learn about virtual psychotherapy in Ontario
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
              Virtual therapy in Ontario: frequently asked questions
            </h2>
            <div className="mt-6 divide-y divide-[var(--line)] rounded-2xl bg-white/70 ring-1 ring-[var(--line)]">
              {homeFaqs.map((faq) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
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
