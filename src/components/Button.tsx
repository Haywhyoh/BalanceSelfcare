import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--brand)] text-[var(--brand-contrast)] hover:bg-[var(--brand-soft)] shadow-[0_10px_30px_rgba(12,63,58,0.18)]",
  secondary:
    "bg-transparent text-[var(--brand)] border border-[var(--brand)]/30 hover:border-[var(--brand)] hover:bg-[var(--brand)]/5",
  ghost:
    "bg-white/15 text-white border border-white/35 hover:bg-white/25 backdrop-blur-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
