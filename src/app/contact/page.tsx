import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Balance Self-Care to book, reschedule, or cancel an appointment via Jane App, or inquire about workshops and presentations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Contact
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl text-[var(--brand)] md:text-6xl">
          Contact Balance Self-Care
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
          To book an appointment, reschedule, or cancel an existing appointment,
          please sign in to your Jane App profile. For workshops, presentations,
          or general inquiries, send us a message below.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-2 md:px-8 md:pb-28">
        <div className="rounded-[2rem] bg-[var(--brand)] p-8 text-[var(--brand-contrast)] md:p-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Book an appointment
          </h2>
          <p className="mt-4 leading-relaxed text-white/75">
            Appointments are managed securely through Jane App. Sign in to your
            profile to book, reschedule, or cancel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.janeAppUrl} external>
              Open Jane App
            </Button>
            <Button href={siteConfig.janeLoginUrl} external variant="ghost">
              Sign in
            </Button>
          </div>
          <div className="mt-10 space-y-3 border-t border-white/15 pt-8 text-sm text-white/80">
            <p>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {siteConfig.social.instagramHandle}
              </a>
            </p>
            <p>
              Facebook:{" "}
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {siteConfig.social.facebookHandle}
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/70 p-8 ring-1 ring-[var(--line)] md:p-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--brand)]">
            Send an inquiry
          </h2>
          <p className="mt-3 text-sm text-[var(--ink-muted)]">
            Ideal for presentation and workshop requests, consulting, or questions
            that aren&apos;t appointment-related.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
