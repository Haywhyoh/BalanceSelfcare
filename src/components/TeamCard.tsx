import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/content/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white/70 shadow-[0_12px_40px_rgba(20,36,34,0.06)] ring-1 ring-[var(--line)]/80 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(20,36,34,0.1)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-deep)]">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--brand)]">
            {member.shortName}
          </h3>
          <p className="text-sm text-[var(--ink-muted)]">{member.role}</p>
        </div>
        <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
          {member.specialties.slice(0, 3).join(" · ")}
        </p>
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
          {member.qualifications.join(" · ")}
        </p>
        <Link
          href={`/team/${member.slug}`}
          className="inline-flex text-sm font-semibold text-[var(--brand)] underline-offset-4 hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
