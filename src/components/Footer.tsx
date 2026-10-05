import Link from "next/link";
import { siteConfig } from "@/content/site";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const supportLinks = [
  { href: "/book", label: "Book an appointment" },
  { href: "/services/psychotherapy", label: "Virtual Therapy in Ontario" },
  { href: "/services/workshops", label: "Workshops" },
  { href: "/services/presentations", label: "Presentations" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--brand)] text-[var(--brand-contrast)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Balance Self-Care
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
            Culturally responsive virtual therapists in Ontario, plus workshops
            and presentations supporting individuals, families, organizations,
            and communities.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-white/90 transition hover:text-white"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/90 transition hover:text-white"
            >
              Instagram {siteConfig.social.instagramHandle}
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/90 transition hover:text-white"
            >
              Facebook {siteConfig.social.facebookHandle}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            Company
          </h2>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/85 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            Support
          </h2>
          <ul className="mt-4 space-y-2">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/85 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Balance Self-Care. All rights reserved.</p>
          <p>Virtual psychotherapy across Ontario · Workshops and presentations across Canada & the U.S.</p>
        </div>
      </div>
    </footer>
  );
}
