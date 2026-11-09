export type TeamMember = {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  image: string;
  imageAlt: string;
  specialties: string[];
  qualifications: string[];
  janeUrl: string;
  psychologyTodayUrl?: string;
  summary: string;
  bio: string[];
  approach: string[];
  oldPaths: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "rachel-grant",
    name: "Rachel Iris Grant",
    shortName: "Rachel Grant",
    role: "Therapist & Founder",
    image: "/images/team/rachel.jpg",
    imageAlt: "Rachel Iris Grant, founder and therapist at Balance Self-Care",
    specialties: [
      "Anxiety",
      "Depression",
      "Life transitions",
      "Grief and loss",
      "Postpartum",
    ],
    qualifications: ["R.S.W.", "L.I.C.S.W."],
    janeUrl: "https://balanceself-care.janeapp.com/#/staff_member/1",
    psychologyTodayUrl:
      "https://www.psychologytoday.com/ca/therapists/rachel-iris-grant-etobicoke-on/991026",
    summary:
      "Founder of Balance Self-Care offering holistic, client-centered, and trauma-informed care grounded in intersectional experience.",
    bio: [
      "Welcome to Balance Self-Care! I'm so glad you've taken this courageous first step toward healing and growth.",
      "Whether you're navigating a life-changing event, working through past challenges, or focusing on building a more fulfilling future, I am here to support you every step of the way. I believe that seeking help is the beginning of reclaiming your mental health and vitality. For many, it's not just one thing that has shaped their journey, but a series of pivotal moments that have compounded over time.",
      "As a Black British-Canadian therapist with Jamaican heritage, I bring a unique understanding of the intersectionality of life. My diverse experiences, having worked with individuals in three different countries across various settings and age ranges from 6 to 75, deeply inform my approach.",
    ],
    approach: [
      "I center my practice around warmth, hope, and a strength-based perspective, tailoring my methods to each individual's needs. My approach is holistic, client-centered, and trauma-informed. I incorporate a range of therapeutic models, including attachment-based therapy, cognitive-behavioral therapy (CBT), mindful self-compassion, bereavement counselling, and solution-focused therapy.",
      "Additionally, as a Christian, I am open to incorporating faith-based practices into our work together, should that align with your goals. My intention is to create a space where you feel supported, respected, and empowered, whether your journey includes spiritual elements or not.",
      "In our work together, I aim to create a safe and supportive environment where we can explore your unique challenges, clarify your goals, and build a personalized treatment plan that aligns with your aspirations. I look forward to partnering with you on this journey toward balance and healing.",
    ],
    oldPaths: ["/about-rachel/", "/about-rachel"],
  },
  {
    slug: "cynthia-ekeanyawu",
    name: "Cynthia Ekeanyawu",
    shortName: "Cynthia Ekeanyawu",
    role: "RP (Qualifying)",
    image: "/images/team/cynthia.jpg",
    imageAlt: "Cynthia Ekeanyawu, Registered Psychotherapist (Qualifying) at Balance Self-Care",
    specialties: ["Neuro-affirming care", "Life transitions", "Anxiety", "Burnout"],
    qualifications: ["RP Qualifying"],
    janeUrl: "https://balanceself-care.janeapp.com/#/staff_member/4",
    psychologyTodayUrl:
      "https://www.psychologytoday.com/ca/therapists/cynthia-ekeanyawu-brampton-on/1753744",
    summary:
      "Compassionate, culturally aware, and neuro-affirming therapist helping clients reconnect with themselves through life transitions.",
    bio: [
      "Sometimes life changes us so quietly that one day we look around and realize we do not quite feel like ourselves anymore. At Balance Self-Care, my goal is to help you reconnect with yourself in a way that feels genuine, grounding, and sustainable. My name is Cynthia, and as a Registered Psychotherapist (Qualifying), I bring a compassionate, culturally aware, and neuro-affirming approach to therapy. With experience supporting individuals from diverse backgrounds and lived experiences, I understand the importance of creating a space where you feel seen, respected, and safe to show up fully as yourself.",
    ],
    approach: [
      "Whether you are navigating a life-changing event, working through past challenges, managing anxiety or burnout, or trying to build a more fulfilling future, therapy can be a space to slow down, breathe, and feel supported. I understand how heavy it can feel to carry expectations, navigate change, pour into others, and still try to hold yourself together at the same time.",
      "I strive to create a warm and supportive environment where your experiences, identity, faith, struggles, and unique ways of moving through the world are welcomed without judgment. Together, we will work toward deeper self-understanding, healthier boundaries, emotional balance, and a life that feels more aligned with who you are and who you want to become.",
      "You do not need to have everything figured out before reaching out. I am here to walk alongside you through the process.",
    ],
    oldPaths: ["/about-cynthia/", "/about-cynthia"],
  },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
