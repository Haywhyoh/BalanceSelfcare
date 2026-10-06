/**
 * Google reviews for Balance Self-Care.
 * Visible copy and Review schema must stay in sync — do not invent or alter
 * client wording beyond light cleanup (brand casing, ellipsis on truncated text).
 *
 * Truncated Google snippets use only the complete sentences available from the
 * client's paste so we never fabricate missing review text.
 */

export type Testimonial = {
  id: string;
  author: string;
  rating: 5;
  quote: string;
  source: "Google";
  /** Approximate relative date from Google at time of collection */
  relativeDate?: string;
};

/** Reviews with enough text to display as testimonials */
export const testimonials: Testimonial[] = [
  {
    id: "rd-finn",
    author: "RD Finn",
    rating: 5,
    quote:
      "I've had a great experience with Balance Self Care. They are compassionate, professional, and genuinely supportive. They create a welcoming environment and truly care about their clients' well-being. Highly recommend!",
    source: "Google",
    relativeDate: "22 weeks ago",
  },
  {
    id: "catrina-hughes-matchett",
    author: "Catrina Hughes Matchett",
    rating: 5,
    quote:
      "Rachel at Balance Self-Care is a fantastic therapist who brings a high level of expertise to their practice. They are a wonderful listener and offer a grounded perspective. The process at Balance Self-Care is professional and streamlined from start to finish. A great choice for anyone seeking modern, accessible therapy.",
    source: "Google",
    relativeDate: "22 weeks ago",
  },
  {
    id: "cici-pj",
    author: "CiCI PJ",
    rating: 5,
    quote:
      "Best advice I've received in life. Sometimes you believe things about yourself and feel discouraged because of the problems in this world but the young lady here provided clear guidance and evidence based advice that helped me in my own depressive struggles.",
    source: "Google",
    relativeDate: "22 weeks ago",
  },
  {
    id: "antonio-richey",
    author: "Antonio Richey",
    rating: 5,
    quote:
      "Really appreciate what Balance Self-Care is doing. I like that they look at the whole person — emotional, mental, physical, and social — instead of just focusing on one area. Whether it's individual, couples, or family counseling, they create a space where people can actually do the work and grow. Definitely recommend them.",
    source: "Google",
    relativeDate: "9 weeks ago",
  },
  {
    id: "miatta-leigh",
    author: "Miatta Leigh",
    rating: 5,
    quote: "I felt understood, and heard.",
    source: "Google",
    relativeDate: "9 weeks ago",
  },
];

/**
 * All Google 5-star ratings provided by the client (including reviews with no
 * written comment). Used for visible aggregate stats + AggregateRating schema.
 */
export const googleReviewSummary = {
  ratingValue: 5,
  bestRating: 5,
  worstRating: 1,
  reviewCount: 9,
  sourceLabel: "Google reviews",
} as const;
