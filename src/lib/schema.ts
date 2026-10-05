import { siteConfig } from "@/content/site";
import { teamMembers } from "@/content/team";
import { focusAreas, presentationTopics } from "@/content/services";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    logo: `${siteConfig.url}/images/brand/icon.png`,
    image: `${siteConfig.url}/images/home/welcome.jpg`,
    knowsAbout: [
      "Virtual therapy in Ontario",
      "Online psychotherapy",
      "Culturally responsive therapy",
      ...focusAreas,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Virtual Therapy Services in Ontario",
      itemListElement: [
        "Virtual Psychotherapy in Ontario",
        "Online Individual Therapy",
        "Online Couples Therapy",
        "Online Family Therapy",
        "Self-Care Workshops",
        "Mental Health Presentations",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "en-CA",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
      name: "Virtual Psychotherapy in Ontario",
      serviceType: "Psychotherapy",
      provider: { "@id": `${siteConfig.url}/#organization` },
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

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  authorName: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/blog/${post.slug}`,
    image: post.image ? `${siteConfig.url}${post.image}` : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/brand/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
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
