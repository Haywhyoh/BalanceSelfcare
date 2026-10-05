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
    slug: "sabah-pinto",
    name: "Sabah Pinto",
    shortName: "Sabah Pinto",
    role: "Therapist",
    image: "/images/team/sabah.png",
    imageAlt: "Sabah Pinto, therapist at Balance Self-Care",
    specialties: ["Relationship issues", "Family conflict", "School concerns"],
    qualifications: ["R.S.W.", "MSW"],
    janeUrl: "https://balanceself-care.janeapp.com/#/staff_member/2",
    summary:
      "South Asian, Muslim Licensed Social Worker supporting individuals, children, and families with culturally sensitive, holistic care.",
    bio: [
      "Hello, and welcome! I'm Sabah Pinto, a South Asian, Muslim woman and Licensed Social Worker (MSW) with a deep commitment to supporting individuals, children, and families through their most challenging moments. Since 2014, I have had the privilege of working in various settings, providing care and guidance to clients navigating life's complexities.",
      "My approach is holistic, centered on understanding your unique story, experiences, and cultural background. I firmly believe that everyone has the potential for growth and healing, and my role is to walk alongside you as you tap into your strengths and create meaningful change.",
      "I utilize a blend of Solution-Focused Brief Therapy (SFBT), Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT) skills, and Narrative Therapy techniques. This combination allows me to tailor our work to your specific needs, whether you are looking to shift unhelpful thought patterns, learn new coping strategies, or explore the narratives you carry that may be impacting your mental health.",
    ],
    approach: [
      "I understand the importance of building a safe, non-judgmental space where you feel heard, valued, and understood.",
      "As a South Asian woman with a Muslim background, I honor the significance of cultural sensitivity in therapy. Whether you're facing issues related to identity, cultural expectations, or mental health struggles, I am here to guide you with compassion, respect, and a commitment to your growth.",
      "I also have a passion for supporting children who may be navigating anxiety, stress, or other challenges. My approach with children is warm, engaging, and focused on equipping them with the tools they need to manage their emotions and thrive.",
      "I look forward to hearing your story and supporting you on your path toward peace, clarity, and fulfillment.",
    ],
    oldPaths: ["/about-sabah/", "/about-sabah"],
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
  {
    slug: "latoya-buchanan",
    name: "Latoya Buchanan",
    shortName: "Latoya Buchanan",
    role: "Therapist",
    image: "/images/team/latoya.jpg",
    imageAlt: "Latoya Buchanan, therapist at Balance Self-Care",
    specialties: [
      "Trauma",
      "Intimate partner violence",
      "Anxiety",
      "Depression",
      "Grief",
      "Life transitions",
    ],
    qualifications: ["MSW", "RSW"],
    janeUrl: "https://balanceself-care.janeapp.com/",
    summary:
      "Trauma-informed Registered Social Worker supporting individuals and youth, with a commitment to Black and racialized women and youth.",
    bio: [
      "How have you been feeling lately?",
      "You may be someone who is used to holding everything together—supporting others, managing responsibilities, and pushing through difficult moments even when things feel overwhelming. You may carry a lot internally while continuing to show up for the people around you. Over time, constantly holding everything together can feel exhausting, especially without a space where you can slow down, reflect, and receive support.",
      "You do not have to navigate it alone.",
      "My name is Latoya, and I am a Registered Social Worker (MSW, RSW) providing counselling to individuals and youth seeking a space where they can feel heard, respected, and understood. I believe therapy is a collaborative process where your experiences, strengths, and personal story are valued.",
      "I have experience supporting clients navigating trauma, intimate partner violence, anxiety, depression, grief, and life transitions. I am particularly committed to supporting Black and racialized women and youth, recognizing the ways culture, systemic barriers, relationships, and lived experiences can shape mental health and access to care.",
    ],
    approach: [
      "My approach to therapy is grounded in trauma-informed, anti-oppressive, and strengths-based practices. I strive to create a therapeutic environment where clients feel emotionally safe, empowered, and supported in exploring their thoughts, feelings, and experiences without judgment.",
      "I believe that healing looks different for everyone. Together, we can work at a pace that feels right for you while building awareness, developing coping strategies, strengthening your sense of self, and exploring meaningful steps toward growth and change.",
      "I draw from evidence-informed approaches, including Cognitive Behavioural Therapy (CBT), DBT-informed skills, and strength-based practices, while tailoring sessions to your unique needs, goals, and experiences.",
      "You deserve support that honours your story, your resilience, and the journey that has brought you here. If you're considering counselling, I invite you to begin with a conversation to explore whether we may be a good fit.",
    ],
    oldPaths: ["/latoya/", "/latoya"],
  },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
