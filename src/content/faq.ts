export type FaqItem = { question: string; answer: string };

/**
 * Homepage FAQs. These double as visible page copy AND FAQPage structured data,
 * so the text here must always match what is shown on the page.
 *
 * Only state facts that are true for the practice. Fees, insurance specifics,
 * and cancellation policy should be added here once confirmed.
 */
export const homeFaqs: FaqItem[] = [
  {
    question: "Who can see a virtual therapist in Ontario at Balance Self-Care?",
    answer:
      "Our virtual therapists see individuals, couples, and families who are 16 years of age or older and located in Ontario at the time of the session. Sessions take place by phone or PHIPA-compliant video, so you can attend from home or anywhere private in the province.",
  },
  {
    question: "Is virtual therapy in Ontario as effective as in-person therapy?",
    answer:
      "Research on online delivery of talk therapy, including cognitive behavioural therapy for anxiety and depression, has found outcomes comparable to in-person sessions for many people. What matters most is a good fit with your therapist and a private, comfortable space to talk. A free 15-minute consultation is a low-pressure way to check the fit.",
  },
  {
    question: "What can a virtual therapist in Ontario help with?",
    answer:
      "Our clinicians support clients with anxiety, depression, burnout, life transitions, relationship and family conflict, attachment, grief and loss, postpartum depression and anxiety, and self-compassion work rooted in childhood wounds or trauma. See each clinician's profile for their specific focus areas.",
  },
  {
    question: "What does culturally responsive therapy mean?",
    answer:
      "It means your therapist takes your culture, identity, faith, family context, and lived experience seriously as part of your care, rather than treating them as an afterthought. Our team includes Black and South Asian clinicians with a commitment to supporting racialized clients, and we welcome faith and spirituality in sessions if that is important to you.",
  },
  {
    question: "Are your therapists registered in Ontario?",
    answer:
      "Our team includes Registered Social Workers (R.S.W.) as well as a psychotherapist practising as an RP (Qualifying) with the College of Registered Psychotherapists of Ontario. You can read each clinician's qualifications on their profile page.",
  },
  {
    question: "Is counselling with a Registered Social Worker taxable?",
    answer:
      "Counselling services from a Registered Social Worker are exempt from tax, and receipts are emailed after each session. Many extended health plans reimburse social work and psychotherapy services, so check your plan for details before booking.",
  },
  {
    question: "How do I book a virtual therapy session in Ontario?",
    answer:
      "Book online through our secure scheduling system. If you are unsure whether we are the right fit, start with a complimentary 15-minute consultation to ask questions and meet a clinician before committing to ongoing sessions.",
  },
];
