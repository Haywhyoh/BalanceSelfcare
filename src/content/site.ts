export const siteConfig = {
  name: "Balance Self-Care",
  shortName: "Balance Self-Care",
  tagline: "Self-care is a lifestyle, not just an action.",
  description:
    "Culturally responsive virtual psychotherapy, workshops, and presentations for individuals, couples, families, and organizations across Ontario, Canada, and the United States.",
  url: "https://balanceselfcare.ca",
  email: "admin@balanceselfcare.ca",
  janeAppUrl: "https://balanceself-care.janeapp.com/",
  janeLoginUrl: "https://balanceself-care.janeapp.com/login",
  social: {
    instagram: "https://www.instagram.com/balanceselfcare/",
    facebook: "https://www.facebook.com/profile.php?id=61564377360243",
    instagramHandle: "@balanceselfcare",
    facebookHandle: "@balanceselfcare",
  },
  serviceArea: {
    therapy: "Ontario",
    broader: "Canada and the United States",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/psychotherapy", label: "Psychotherapy" },
      { href: "/services/workshops", label: "Workshops" },
      { href: "/services/presentations", label: "Presentations" },
    ],
  },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;
