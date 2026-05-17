import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  LockKeyhole,
  Map,
  Presentation,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Sprout,
  Target,
  Users,
} from "lucide-react";

export const pitchHero = {
  eyebrow: "Commercial presentation",
  title: "TruePath AI helps students discover who they are becoming.",
  description:
    "A human-centered youth development platform for schools, families, and partners who want students to explore strengths, confidence, learning style, and future possibilities without labels or pressure.",
  audience:
    "Prepared for Weber State, K-12 schools, parents, counselors, and early sponsors.",
} as const;

export const pitchCtas = [
  {
    label: "View Demo Flow",
    href: "/onboarding",
    icon: ArrowRight,
    intent: "primary",
  },
  {
    label: "View Student Preview",
    href: "/student-dashboard",
    icon: Sparkles,
    intent: "secondary",
  },
  {
    label: "View School Preview",
    href: "/school-dashboard",
    icon: School,
    intent: "secondary",
  },
] as const;

export const pitchSections = [
  {
    id: "problem",
    eyebrow: "The problem",
    title: "Students are being asked to plan futures before they understand themselves.",
    icon: Target,
    body:
      "Many students feel pressure to choose careers, majors, or identities early. Traditional assessments can feel like labels, while schools and families often lack a warm, structured way to support self-discovery.",
    points: [
      "Students may confuse uncertainty with failure.",
      "Parents want guidance without pushing a fixed path.",
      "Schools need scalable support for wellbeing, advisory, and future readiness.",
    ],
  },
  {
    id: "vision",
    eyebrow: "The vision",
    title: "A world where every student has language for their potential.",
    icon: Compass,
    body:
      "TruePath AI exists to make exploration feel safe, intelligent, and human. The platform helps students notice strengths, emotions, learning preferences, curiosity, and possible directions while protecting their right to grow and change.",
    points: [
      "Exploration before prediction.",
      "Possibilities before labels.",
      "Student agency before automation.",
    ],
  },
  {
    id: "solution",
    eyebrow: "The solution",
    title: "A guided self-discovery journey for ages 10-18.",
    icon: Lightbulb,
    body:
      "TruePath AI combines emotionally safe onboarding, reflective assessment experiences, and future profile concepts that can support students, parents, counselors, and school programs.",
    points: [
      "Age-aware flows for 10-12, 13-15, and 16-18.",
      "Reflective questions that do not score or define students.",
      "Demo previews for student and school conversations.",
    ],
  },
  {
    id: "why-now",
    eyebrow: "Why now",
    title: "AI is entering education; students need safeguards and purpose.",
    icon: Brain,
    body:
      "Schools and families are looking for AI that supports human development, not shortcuts or surveillance. TruePath AI positions ethical guidance as the foundation before automated insight.",
    points: [
      "Youth mental health and future anxiety are urgent concerns.",
      "Career readiness is expanding beyond job matching.",
      "Responsible AI can help students reflect without replacing human support.",
    ],
  },
  {
    id: "who-it-helps",
    eyebrow: "Who it helps",
    title: "A platform for students, families, schools, and community partners.",
    icon: Users,
    body:
      "TruePath AI can serve individual students while giving adults better language for encouragement, guidance, and program design.",
    points: [
      "Students gain confidence and self-awareness.",
      "Parents gain supportive conversation starters.",
      "Schools gain privacy-conscious aggregate development signals.",
      "Sponsors can support equitable access to future-readiness tools.",
    ],
  },
  {
    id: "how-it-works",
    eyebrow: "How it works",
    title: "A simple demo journey from curiosity to conversation.",
    icon: Map,
    body:
      "The current MVP demonstrates a clear path: landing page, emotional onboarding, reflective assessment, summary preview, student preview, and school preview.",
    points: [
      "Landing introduces the mission and ethical position.",
      "Onboarding sets emotional safety and age-aware context.",
      "Assessments gather reflections locally in the browser.",
      "Demo previews show how future conversations could be structured.",
    ],
  },
  {
    id: "ethical-safeguards",
    eyebrow: "Ethical safeguards",
    title: "The product is designed to avoid labels, pressure, and deterministic outcomes.",
    icon: ShieldCheck,
    body:
      "TruePath AI treats student reflections as sensitive developmental information. The platform must preserve dignity, privacy, agency, and openness before introducing production AI or analytics.",
    points: [
      "No fixed identity labels.",
      "No career predictions or student ranking.",
      "Consent and privacy foundations before real data storage.",
      "Youth-safe AI guidelines before any AI integration.",
    ],
  },
  {
    id: "demo-flow",
    eyebrow: "Demo flow",
    title: "A presentation-ready MVP path is already visible.",
    icon: Presentation,
    body:
      "The demo can be walked through in a live meeting to show emotional tone, student experience, school value, and sponsor opportunity without claiming final production behavior.",
    points: [
      "View Demo Flow: start with onboarding.",
      "View Student Preview: see non-deterministic growth sections.",
      "View School Preview: see mock aggregate, privacy-first school value.",
    ],
  },
  {
    id: "pilot-proposal",
    eyebrow: "Pilot proposal",
    title: "A responsible pilot should validate usefulness, trust, and safety.",
    icon: Rocket,
    body:
      "A pilot with Weber State, partner schools, or youth programs could focus on advisory, career exploration, parent engagement, and counselor support while keeping data handling conservative.",
    points: [
      "Test student comprehension and emotional safety.",
      "Review language with educators, guardians, and youth advisors.",
      "Measure whether students feel more curious, supported, and confident.",
    ],
  },
  {
    id: "business-model",
    eyebrow: "Business model",
    title: "Multiple paths can support sustainable access.",
    icon: Building2,
    body:
      "TruePath AI can grow through school pilots, district licensing, university partnerships, family plans, sponsored access, and youth development programs.",
    points: [
      "School and district licensing for advisory and counseling programs.",
      "University or workforce-readiness partnerships.",
      "Sponsor-funded access for underserved students.",
      "Parent-facing premium guidance once safety is validated.",
    ],
  },
  {
    id: "sponsorship",
    eyebrow: "Sponsorship opportunity",
    title: "Sponsors can fund discovery, confidence, and future readiness.",
    icon: HeartHandshake,
    body:
      "Early sponsors can help bring ethical self-discovery tools to students who may not otherwise receive personalized guidance, while aligning with education, wellbeing, and workforce development outcomes.",
    points: [
      "Support pilot access for schools or youth programs.",
      "Co-create community future-readiness initiatives.",
      "Fund research, language safety, and accessibility improvements.",
    ],
  },
  {
    id: "next-steps",
    eyebrow: "Next steps",
    title: "Move from demo to responsible pilot planning.",
    icon: CheckCircle2,
    body:
      "The safest next step is not production automation. It is stakeholder review, pilot design, consent planning, and validation with students, families, counselors, and school leaders.",
    points: [
      "Review the demo flow with stakeholders.",
      "Define a pilot audience and success criteria.",
      "Finalize consent, privacy, and data retention requirements.",
      "Only then add real accounts, storage, AI analysis, or dashboards.",
    ],
  },
] as const;

export const pitchStats = [
  {
    label: "Age range",
    value: "10-18",
    helper: "Designed around youth development stages",
    icon: Sprout,
  },
  {
    label: "Core stance",
    value: "No labels",
    helper: "Exploration, not definition",
    icon: LockKeyhole,
  },
  {
    label: "Pilot focus",
    value: "Trust",
    helper: "Safety before automation",
    icon: GraduationCap,
  },
] as const;
