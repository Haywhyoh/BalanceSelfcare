import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Balance Self-Care, covering how we handle inquiries, website analytics, and PHIPA-aligned clinical information practices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-[var(--ink-muted)]">Last updated: October 2026</p>

      <div className="prose-balance mt-10 space-y-6 text-base leading-relaxed text-[var(--ink-muted)]">
        <p>
          Balance Self-Care (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          respects your privacy. This policy explains how information is handled
          when you visit balanceselfcare.ca or contact us through the website.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Clinical information
        </h2>
        <p>
          Psychotherapy appointments and clinical records are managed through Jane
          App. Clinical personal health information is handled according to
          applicable Ontario privacy requirements, including PHIPA, and Jane
          App&apos;s own privacy practices. This website does not store therapy
          session notes or clinical charts.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Website inquiries
        </h2>
        <p>
          If you submit a contact form, we collect your name, email address,
          subject, and message so we can respond to workshop, presentation, or
          general inquiries. We use this information only to respond to your
          request and related follow-up.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Cookies and analytics
        </h2>
        <p>
          Our hosting provider or analytics tools may collect standard technical
          information such as IP address, browser type, and pages visited. We use
          this information to maintain and improve the website.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Third-party services
        </h2>
        <p>
          Booking is provided by Jane App. Links to Instagram, Facebook, and
          Psychology Today are governed by those platforms&apos; policies.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Contact
        </h2>
        <p>
          For privacy questions related to this website, email{" "}
          <a
            href="mailto:admin@balanceselfcare.ca"
            className="font-semibold text-[var(--brand)] underline-offset-4 hover:underline"
          >
            admin@balanceselfcare.ca
          </a>
          .
        </p>
      </div>
    </section>
  );
}
