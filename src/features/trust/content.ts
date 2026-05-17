export type TrustPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  effectiveNote: string;
  sections: {
    title: string;
    body: string;
    points: string[];
  }[];
};

export const privacyContent: TrustPageContent = {
  eyebrow: "Privacy and student trust",
  title: "TruePath AI is designed to protect student reflection before it collects real data.",
  description:
    "This public demo does not create accounts, store student responses, generate AI profiles, or write student information to a database. The future product will require clear consent, privacy controls, and school agreements before any production student data is collected.",
  effectiveNote:
    "Current status: public demo and pilot-readiness preview. This page is written in plain language and should be reviewed with qualified legal counsel before production launch.",
  sections: [
    {
      title: "What happens in the current demo",
      body:
        "The current TruePath AI experience is presentation-only. Assessment answers are held in local page state while the page is open and are not sent to a server.",
      points: [
        "No account is created.",
        "No student profile is generated.",
        "No AI analysis occurs.",
        "No score, label, or career recommendation is created.",
        "No database write is performed by the demo flow.",
      ],
    },
    {
      title: "Future privacy intentions",
      body:
        "If TruePath AI moves into a pilot or production version, the product should collect only the information needed to support safe exploration.",
      points: [
        "Use purpose-limited student data collection.",
        "Explain what is collected in student- and parent-friendly language.",
        "Avoid selling student data or using it for advertising profiles.",
        "Make deletion and review processes clear before launch.",
      ],
    },
    {
      title: "Student reflections",
      body:
        "Student reflections can be personal. TruePath AI should treat them as entrusted information, not as growth fuel.",
      points: [
        "Private reflections should not automatically become school analytics.",
        "Adults should receive supportive context, not deterministic labels.",
        "Sensitive student content requires careful access boundaries.",
      ],
    },
    {
      title: "Consent expectations",
      body:
        "Because TruePath AI is designed for students ages 10-18, future pilots must define parent/guardian consent, student assent, and school data responsibilities before collecting real information.",
      points: [
        "Under-13 experiences may require verifiable parent consent.",
        "School pilots may require FERPA-aware agreements.",
        "Students should understand that exploration is optional and revisable.",
      ],
    },
  ],
};

export const termsContent: TrustPageContent = {
  eyebrow: "Terms of use",
  title: "This demo is for exploration, presentation, and pilot planning only.",
  description:
    "TruePath AI is currently an MVP demo. It should not be used as a diagnostic tool, counseling replacement, career decision engine, or production student record system.",
  effectiveNote:
    "Current status: plain-language demo terms. Formal terms should be reviewed by qualified legal counsel before production use.",
  sections: [
    {
      title: "Use of the current demo",
      body:
        "The public demo is intended to show the product vision, emotional tone, ethical stance, and possible school/sponsor value.",
      points: [
        "Demo content is illustrative.",
        "Student and school preview pages are static examples.",
        "Assessment responses are not persisted.",
        "No AI output or automated profile is created.",
      ],
    },
    {
      title: "Not professional advice",
      body:
        "TruePath AI is not a mental health service, career counseling replacement, or educational decision authority.",
      points: [
        "Students should discuss important decisions with trusted adults.",
        "Schools should not use demo content to evaluate students.",
        "Parents should treat demo language as conversation support, not a conclusion.",
      ],
    },
    {
      title: "Non-deterministic philosophy",
      body:
        "TruePath AI is built to open possibilities. It should never define a student's future or reduce them to a type.",
      points: [
        "No result should be treated as permanent.",
        "No pathway should be treated as the only right answer.",
        "Students can change, disagree, and continue exploring.",
      ],
    },
    {
      title: "Future production expectations",
      body:
        "Before production launch, TruePath AI should add formal account terms, privacy controls, consent flows, data-retention policies, and support pathways.",
      points: [
        "Authentication is not active yet.",
        "Payments and subscriptions are not active yet.",
        "Production analytics are not active yet.",
      ],
    },
  ],
};

export const parentGuideContent: TrustPageContent = {
  eyebrow: "Parent and guardian guide",
  title: "How to understand TruePath AI with your student.",
  description:
    "TruePath AI is designed to help students explore strengths, curiosity, emotions, learning preferences, and possible futures without pressure to choose one identity or career.",
  effectiveNote:
    "Current status: parent-facing guide for the public demo. Future pilots should include school-specific consent and support information.",
  sections: [
    {
      title: "What this is",
      body:
        "TruePath AI is a self-discovery experience. It uses gentle onboarding and reflective prompts to help students notice what may be growing in them.",
      points: [
        "It is not a career test.",
        "It is not a psychological diagnosis.",
        "It is not a final student profile.",
        "It is not a replacement for trusted adult guidance.",
      ],
    },
    {
      title: "How to talk about results",
      body:
        "If your student completes the demo, treat the experience as a conversation starter.",
      points: [
        "Ask what felt true, interesting, or surprising.",
        "Avoid saying the demo proves who they are.",
        "Encourage multiple talents and changing interests.",
        "Remind them their worth is not tied to a career.",
      ],
    },
    {
      title: "Student safety",
      body:
        "Students should feel more open, not more boxed in. The safest use of TruePath AI is reflective and low-pressure.",
      points: [
        "Students should be allowed to skip sensitive prompts.",
        "Uncertainty should be normalized.",
        "Adults should avoid using exploration themes to restrict opportunity.",
      ],
    },
    {
      title: "Future consent expectations",
      body:
        "Before any real student data is stored in a future pilot or production version, parent/guardian consent and student assent expectations should be made clear.",
      points: [
        "Families should know what information is collected.",
        "Families should know who can see it.",
        "Families should know how to request review or deletion where applicable.",
      ],
    },
  ],
};
