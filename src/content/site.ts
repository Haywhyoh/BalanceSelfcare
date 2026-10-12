export const siteConfig = {
  name: "Balance Self-Care",
  shortName: "Balance Self-Care",
  tagline: "Self-care is a lifestyle, not just an action.",
  description:
    "Trauma-informed, culturally competent group counselling for Black people and the diaspora in Toronto, Ottawa, Mississauga, Brampton, Hamilton, and London.",
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
    broader: "Canada",
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
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
