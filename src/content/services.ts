export const focusAreas = [
  "Burnout and self-care (life transitions)",
  "Anxiety (generalized, social, health, and relationship)",
  "Depression (coping skills, communication, and boundaries)",
  "Relationship issues (values, patterns)",
  "Attachment (exploring wounds, patterns, and styles)",
  "Family conflict & dysfunction (parentification, emotionally immature parents, and more)",
  "Self-compassion (childhood wounds, trauma)",
  "Postpartum depression and anxiety",
] as const;

export const presentationTopics = [
  "Self-care",
  "Burnout",
  "Self-compassion",
  "Boundary setting",
  "Anxiety and stress management",
] as const;

export const servicesOverview = [
  {
    slug: "psychotherapy",
    number: "01",
    title: "Virtual Psychotherapy",
    href: "/services/psychotherapy",
    image: "/images/home/therapy.jpg",
    imageAlt: "Virtual psychotherapy session supporting mental health and wellness",
    summary:
      "Phone and PHIPA-compliant video sessions for individuals, couples, and families 16+, wherever you are.",
  },
  {
    slug: "workshops",
    number: "02",
    title: "Interactive Workshops",
    href: "/services/workshops",
    image: "/images/home/workshop.jpg",
    imageAlt: "Interactive self-care and wellness workshop participants",
    summary:
      "Hands-on workshops on self-care, self-compassion, and overall wellness for groups and organizations.",
  },
  {
    slug: "presentations",
    number: "03",
    title: "Presentations & Trainings",
    href: "/services/presentations",
    image: "/images/home/presentation.jpg",
    imageAlt: "Mental health presentation and in-person training session",
    summary:
      "Media and in-person presentations on burnout, boundaries, anxiety, and stress across Canada and the U.S.",
  },
] as const;
