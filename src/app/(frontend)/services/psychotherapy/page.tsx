import Image from "next/image";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { focusAreas } from "@/content/services";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Psychotherapy",
  description:
    "Phone and PHIPA-compliant video psychotherapy for clients 16+ across Ontario. Focus areas include anxiety, burnout, attachment, postpartum, and more.",
  path: "/services/psychotherapy",
  image: "/images/services/psychotherapy.jpg",
});

export default function PsychotherapyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Psychotherapy", path: "/services/psychotherapy" },
        ])}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/psychotherapy.jpg"
            alt="Supportive virtual psychotherapy environment"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(8,32,29,0.72)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-white md:text-6xl">
            Virtual psychotherapy
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Phone and PHIPA-compliant video sessions for individuals, couples, and
            families 16 years and older across Ontario.
          </p>
          <div className="mt-8">
            <Button href={siteConfig.janeAppUrl} external>
              Book phone or video appointment
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)]">
          Focus Areas
        </h2>
        <ul className="mt-8 space-y-3">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-2xl bg-white/70 px-5 py-4 text-[var(--ink-muted)] ring-1 ring-[var(--line)]"
            >
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-6 rounded-[2rem] bg-[var(--bg-deep)] p-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
            Complimentary consultations
          </h2>
          <p className="leading-relaxed text-[var(--ink-muted)]">
            Feel free to book a 15-minute consultation if you have questions about
            counselling and psychotherapy and want to see whether there is a
            therapeutic fit.
          </p>
          <p className="leading-relaxed text-[var(--ink-muted)]">
            Counselling services from a Registered Social Worker are exempt from
            tax. Receipts are emailed following each counselling session.
          </p>
          <Button href={siteConfig.janeAppUrl} external>
            Schedule an appointment
          </Button>
        </div>
      </section>
    </>
  );
}
