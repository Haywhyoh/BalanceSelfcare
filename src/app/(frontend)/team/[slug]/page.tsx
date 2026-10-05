import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { getTeamMember, teamMembers } from "@/content/team";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};

  return buildMetadata({
    title: member.shortName,
    description: member.summary,
    path: `/team/${member.slug}`,
    image: member.image,
  });
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const schema = personSchema(member.slug);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
          { name: member.shortName, path: `/team/${member.slug}` },
        ])}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--bg-deep)]">
          <Image
            src={member.image}
            alt={member.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {member.role}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-5xl">
            {member.name}
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-wider text-[var(--ink-muted)]">
            {member.qualifications.join(" · ")}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {member.specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full bg-[var(--bg-deep)] px-3 py-1.5 text-sm text-[var(--brand)]"
              >
                {specialty}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={member.janeUrl} external>
              Book online
            </Button>
            {member.psychologyTodayUrl ? (
              <Button href={member.psychologyTodayUrl} external variant="secondary">
                Psychology Today
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="prose-balance text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          {member.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <h2 className="mt-14 font-[family-name:var(--font-display)] text-3xl text-[var(--brand)]">
          My Approach
        </h2>
        <div className="prose-balance mt-6 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          {member.approach.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-[var(--brand)] p-8 text-[var(--brand-contrast)]">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Ready to connect with {member.shortName.split(" ")[0]}?
          </h2>
          <p className="mt-3 text-white/75">
            Book a session through Jane App, or reach out if you have questions
            about fit.
          </p>
          <div className="mt-6">
            <Button href={member.janeUrl} external>
              Book online
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
