import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { TeamCard } from "@/components/TeamCard";
import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Team",
  description:
    "Meet the Balance Self-Care clinicians — Rachel Grant, Sabah Pinto, Cynthia Ekeanyawu, and Latoya Buchanan — offering culturally responsive psychotherapy.",
  path: "/team",
  image: "/images/team/rachel.jpg",
});

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Our clinicians
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-6xl">
          Meet the team
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
          Balance Self-Care is not just an activity — it&apos;s a lifestyle. Our
          clinicians bring culturally responsive, trauma-informed, and
          intersectional care to every session.
        </p>
        <div className="mt-8">
          <Button href={siteConfig.janeAppUrl} external>
            Book online
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
