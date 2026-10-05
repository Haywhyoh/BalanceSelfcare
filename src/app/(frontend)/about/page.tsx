import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers } from "@/content/team";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Balance Self-Care's vision, purpose, and culturally responsive, intersectional approach to psychotherapy, education, and consulting.",
  path: "/about",
  image: "/images/home/about.jpg",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/about.jpg"
            alt="Quiet moment of reflection representing healing and growth"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(8,32,29,0.72)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
            About us
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-white md:text-6xl">
            Lasting and transformative growth
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Balance Self-Care is a mental health and wellness practice rooted in
            equity, compassion, and culturally responsive care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-3">
          <article>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)] md:text-3xl">
              The Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              We envision a world where people feel seen, supported, and empowered
              to care for themselves and one another. Grounded in Afrocentric and
              culturally responsive approaches to mental health and wellness, we
              create spaces where individuals, organizations, and communities can
              heal, grow, and thrive. Through mental health care, education,
              supervision, consulting, and community, we are committed to creating
              meaningful and sustainable change.
            </p>
          </article>
          <article>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)] md:text-3xl">
              Our Purpose
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              At Balance Self-Care, we provide culturally responsive and
              intersectional psychotherapy, education, and consulting services to
              individuals, couples, organizations, and government agencies. Our
              work is rooted in equity, compassion, and collaboration, empowering
              clients and communities to build resilience, strengthen capacity, and
              achieve lasting, transformative growth.
            </p>
          </article>
          <article>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)] md:text-3xl">
              Our Approach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              Our clinicians recognize the ways culture, identity, lived
              experiences, systemic factors, and historical stigma shape mental
              health and the therapeutic process. Healing is deeply personal — and
              each journey is influenced by values, relationships, and unique
              experiences.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/55 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
            Our Expertise
          </h2>
          <div className="prose-balance mt-6 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            <p>
              At Balance Self-Care, our clinicians are highly trained in mental
              health and recognize the ways culture, identity, lived experiences,
              systemic factors, and historical stigma shape mental health and the
              therapeutic process. We understand that healing is deeply personal
              and that each individual&apos;s journey is influenced by their values,
              relationships, and unique experiences.
            </p>
            <p>
              Our approach is holistic, integrating evidence-based therapeutic
              practices with clients&apos; strengths, spirituality (when meaningful
              to the client), cognitive and behavioral strategies, and natural
              support systems. We believe that mental well-being extends beyond the
              individual, influencing families, relationships, workplaces, and
              communities.
            </p>
            <p>
              In addition to providing psychotherapy, we are committed to
              strengthening the mental health profession through clinical
              supervision, consultation, and professional development. We support
              students, qualifying therapists, and mental health professionals in
              developing ethical, culturally responsive, and evidence-informed
              clinical practice.
            </p>
            <p>
              Our commitment is to increase mental health awareness, reduce stigma,
              and empower individuals, professionals, organizations, and communities
              through compassionate care, education, supervision, and consultation.
              By fostering resilience, promoting wellness, and creating culturally
              responsive spaces, we strive to support meaningful, lasting change for
              the communities we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Meet the team
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)] md:text-4xl">
              Clinicians who walk alongside you
            </h2>
          </div>
          <Button href="/team" variant="secondary">
            View team page
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--ink-muted)]">
          Looking for a clinician?{" "}
          <Link href="/team" className="font-semibold text-[var(--brand)] underline-offset-4 hover:underline">
            Browse the full team
          </Link>{" "}
          or{" "}
          <Link href="/book" className="font-semibold text-[var(--brand)] underline-offset-4 hover:underline">
            book online
          </Link>
          .
        </p>
      </section>
    </>
  );
}
