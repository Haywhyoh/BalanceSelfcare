import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { focusAreas, presentationTopics } from "@/content/services";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    logo: `${siteConfig.url}/images/brand/icon.png`,
    image: `${siteConfig.url}/images/home/welcome.jpg`,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Ontario" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["English"],
    },
  };
}

export function personSchema(slug: string) {
  const member = teamMembers.find((item) => item.slug === slug);
  if (!member) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.summary,
    image: `${siteConfig.url}${member.image}`,
    url: `${siteConfig.url}/team/${member.slug}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    knowsAbout: member.specialties,
    sameAs: [
      member.janeUrl,
      ...(member.psychologyTodayUrl ? [member.psychologyTodayUrl] : []),
    ],
  };
}

export function serviceSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Virtual Psychotherapy",
      serviceType: "Psychotherapy",
      provider: { "@type": "Organization", name: siteConfig.name },
      areaServed: { "@type": "AdministrativeArea", name: "Ontario" },
      audience: {
        "@type": "Audience",
        audienceType: "Individuals, couples, and families 16+",
      },
      description:
        "Phone and PHIPA-compliant video psychotherapy sessions for clients 16 years and older across Ontario.",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: siteConfig.janeAppUrl,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Focus Areas",
        itemListElement: focusAreas.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Self-Care Wellness Workshops",
      serviceType: "Workshop",
      provider: { "@type": "Organization", name: siteConfig.name },
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United States" },
      ],
      description:
        "Interactive workshops on self-care, self-compassion, and overall wellness for groups and organizations.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Mental Health Presentations",
      serviceType: "Presentation",
      provider: { "@type": "Organization", name: siteConfig.name },
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United States" },
      ],
      description:
        "Media and in-person presentations on self-care, burnout, boundaries, anxiety, and stress management.",
      about: presentationTopics.map((topic) => ({
        "@type": "Thing",
        name: topic,
      })),
    },
  ];
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
