"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)]/70 bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/brand/icon.png"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-[family-name:var(--font-display)] text-lg leading-tight text-[var(--brand)] transition-colors group-hover:text-[var(--brand-soft)] md:text-xl">
            Balance Self-Care
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(pathname, link.href)
                      ? "text-[var(--brand)]"
                      : "text-[var(--ink-muted)] hover:text-[var(--brand)]"
                  }`}
                >
                  {link.label}
                </Link>
                <div className="invisible absolute left-0 top-full min-w-48 rounded-lg border border-[var(--line)] bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-[var(--ink-muted)] hover:bg-[var(--bg-deep)] hover:text-[var(--brand)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(pathname, link.href)
                    ? "text-[var(--brand)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--brand)]"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href={siteConfig.janeAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-[var(--brand-contrast)] transition-colors hover:bg-[var(--brand-soft)]"
          >
            Book
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] text-[var(--brand)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-[var(--ink)]"
                    onClick={() => setServicesOpen((value) => !value)}
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span>
                  </button>
                  {servicesOpen ? (
                    <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-[var(--line)] pl-3">
                      <Link
                        href={link.href}
                        className="rounded-md px-3 py-2 text-sm text-[var(--ink-muted)]"
                      >
                        All services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-md px-3 py-2 text-sm text-[var(--ink-muted)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-base font-medium text-[var(--ink)]"
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={siteConfig.janeAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-[var(--brand-contrast)]"
            >
              Book Now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
