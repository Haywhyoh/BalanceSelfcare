import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { focusAreas, presentationTopics, servicesOverview } from "@/content/services";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchemas } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Balance Self-Care services: Ontario virtual psychotherapy, interactive wellness workshops, and media or in-person mental health presentations.",
  path: "/services",
  image: "/images/services/psychotherapy.jpg",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          ...serviceSchemas(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Our services
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-6xl">
          Care for individuals, groups, and organizations
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
          From PHIPA-compliant virtual therapy in Ontario to workshops and
          presentations across Canada and the United States.
        </p>
      </section>

      <section id="psychotherapy" className="border-y border-[var(--line)] bg-white/55">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/services/psychotherapy.jpg"
              alt="Quiet therapeutic space for virtual psychotherapy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              01
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
              Psychotherapy Sessions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              We provide phone and PHIPA-compliant video sessions to clients 16
              years and older, wherever you are. Book phone or video appointments
              through Jane App.
            </p>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
              Focus Areas
            </h3>
            <ul className="mt-4 space-y-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 rounded-2xl bg-[var(--bg-deep)] p-5 text-sm leading-relaxed text-[var(--ink-muted)]">
              <p>
                Feel free to book a <strong className="text-[var(--ink)]">15-minute complimentary consultation</strong> if
                you have questions about counselling and psychotherapy and want to
                see whether there is a therapeutic fit.
              </p>
              <p>
                Counselling services from a Registered Social Worker are{" "}
                <strong className="text-[var(--ink)]">exempt from tax</strong>.
                Receipts are emailed following each counselling session.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.janeAppUrl} external>
                Schedule an appointment
              </Button>
              <Button href="/services/psychotherapy" variant="secondary">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="presentations" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              02
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
              Media and In-Person Presentations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              Mental health is intersectional and interconnected with everything.
              We present on topics such as self-care, burnout, self-compassion,
              boundary setting, anxiety and stress management.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              Fees are determined by the type and customization of the
              presentation, travel distance (if applicable), and materials needed.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {presentationTopics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full bg-[var(--bg-deep)] px-3 py-1.5 text-sm text-[var(--brand)]"
                >
                  {topic}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact">Schedule a presentation</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "/images/services/presentation-1.png",
              "/images/services/presentation-2.png",
              "/images/services/presentation-3.png",
            ].map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl ${index === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={src}
                  alt={`Balance Self-Care presentation slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workshops" className="border-t border-[var(--line)] bg-[var(--brand)] text-[var(--brand-contrast)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="relative aspect-[3/4] max-h-[540px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/services/workshop.png"
              alt="Self-care wellness workshop materials and interactive session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
              03
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
              Workshops
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Looking for a more interactive way to approach self-care,
              self-compassion, and overall wellness? Balance Self-Care offers
              interactive Self-Care Wellness Workshops — and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="ghost">
                Inquire about workshops
              </Button>
              <Button href="/services/workshops" variant="ghost">
                Workshop details
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {servicesOverview.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="rounded-2xl bg-white/70 p-6 ring-1 ring-[var(--line)] transition hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {service.number}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-[var(--brand)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
