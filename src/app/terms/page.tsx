import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for the Balance Self-Care website, including service descriptions, booking, and website content guidelines.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-5xl">
        Terms of Use
      </h1>
      <p className="mt-4 text-sm text-[var(--ink-muted)]">Last updated: October 2026</p>

      <div className="prose-balance mt-10 space-y-6 text-base leading-relaxed text-[var(--ink-muted)]">
        <p>
          By using balanceselfcare.ca, you agree to these terms. If you do not
          agree, please do not use the site.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Informational purpose
        </h2>
        <p>
          Website content is for general information about Balance Self-Care
          services. It is not a substitute for professional advice, diagnosis, or
          treatment, and does not create a therapist–client relationship.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Services and eligibility
        </h2>
        <p>
          Virtual psychotherapy is offered to clients 16 years and older in
          Ontario. Workshops, presentations, and consulting may be available more
          broadly across Canada and the United States, subject to agreement.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Booking
        </h2>
        <p>
          Appointments are booked through Jane App. Jane App terms and scheduling
          policies apply to booking, cancellation, and payment processes.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Intellectual property
        </h2>
        <p>
          Site content, branding, and materials are owned by Balance Self-Care
          unless otherwise noted. Please do not copy or redistribute materials
          without permission.
        </p>

        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--brand)]">
          Contact
        </h2>
        <p>
          Questions about these terms can be sent to{" "}
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
