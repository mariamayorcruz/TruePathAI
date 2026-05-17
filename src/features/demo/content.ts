import {
  Compass,
  HeartHandshake,
  Lightbulb,
  LockKeyhole,
  Map,
  MessageCircleHeart,
  Route,
  School,
  ShieldCheck,
  Sparkles,
  Sprout,
  Telescope,
  TrendingUp,
  Users,
} from "lucide-react";

export const demoNotice =
  "Static demo preview. No real profile is generated, no AI analysis occurs, and no student data is stored.";

/** Spanish parity for demos shown on /es assessments summary. */
export const demoNoticeEs =
  "Solo para fines de demostración. Estas vistas son ejemplos estáticos ilustrativos. No se ha generado un perfil real, no existe análisis con IA ni puntaje oficial, ni se ha almacenado información personal estudiantil en el servidor desde esta sesión.";

export const studentDemo = {
  eyebrow: "Student demo preview",
  badge: "Demo Preview — not a final student profile.",
  title: "A gentle preview of how reflections could become a growth conversation.",
  description:
    "This static demo page shows how TruePath AI may present exploration themes in a future version. It is not based on assessment answers yet. Nothing here defines a student, predicts a career, or creates a final profile.",
  sections: [
    {
      title: "Strengths Exploration",
      icon: Sparkles,
      description:
        "Your reflections may point toward several strengths worth noticing and trying in different settings.",
      items: [
        "You may enjoy turning open questions into creative ideas.",
        "You might feel energized when helping a group make sense of a challenge.",
        "You may be building confidence through hands-on learning and thoughtful communication.",
      ],
    },
    {
      title: "Curiosity Areas",
      icon: Telescope,
      description:
        "Curiosity areas are invitations to explore, not fixed interests you must keep forever.",
      items: [
        "Creative problem-solving and design experiments",
        "Understanding how people learn, collaborate, or communicate",
        "Projects that combine imagination with practical next steps",
      ],
    },
    {
      title: "Growth Reflections",
      icon: Sprout,
      description:
        "Growth reflections focus on skills to practice gently over time.",
      items: [
        "Try naming what kind of support helps you learn something new.",
        "Notice when you prefer quiet thinking, teamwork, or a mix of both.",
        "Practice asking one more question before choosing a direction.",
      ],
    },
    {
      title: "Possible Pathways to Explore",
      icon: Route,
      description:
        "Pathways are examples for exploration only. They are not recommendations or predictions.",
      items: [
        "Creative technology, design, or media projects",
        "Community problem-solving, education, or peer support experiences",
        "Science, entrepreneurship, or hands-on innovation activities",
      ],
    },
    {
      title: "Next Steps",
      icon: Compass,
      description:
        "Small next steps can help students learn more about themselves without pressure.",
      items: [
        "Choose one project, club, class, or conversation to explore.",
        "Talk with a trusted adult about what felt interesting or surprising.",
        "Return later and see whether your reflections still feel true.",
      ],
    },
  ],
} as const;

export const schoolDemo = {
  eyebrow: "School demo preview",
  badge: "Demo Preview — not real student data.",
  title: "A privacy-first view of student development signals for a future pilot.",
  description:
    "This static demo page uses mock/demo data only. It is not connected to real students, assessment answers, AI analysis, or school records. It illustrates how schools might view aggregate exploration themes without exposing private individual reflections.",
  sections: [
    {
      title: "Student Growth Signals",
      icon: TrendingUp,
      description:
        "Mock aggregate signals can help schools notice where students may want more support or opportunities.",
      items: [
        "Demo signal: many students may be exploring creative problem-solving.",
        "Demo signal: students may value more language for emotions and learning preferences.",
        "Demo signal: future-readiness support may be strongest when connected to real projects.",
      ],
    },
    {
      title: "Exploration Trends",
      icon: Map,
      description:
        "Trend language should remain exploratory and aggregate, not predictive or student-ranking.",
      items: [
        "Mock trend: interest in hands-on learning experiences",
        "Mock trend: curiosity around helping, building, designing, and organizing",
        "Mock trend: need for flexible pathways rather than one-size-fits-all career tracks",
      ],
    },
    {
      title: "Counselor Support Opportunities",
      icon: MessageCircleHeart,
      description:
        "Counselors could use aggregate themes to plan supportive conversations, not to label students.",
      items: [
        "Offer reflection workshops around strengths and uncertainty.",
        "Create opt-in conversations about possible pathways and next steps.",
        "Use student-friendly language that validates multiple talents.",
      ],
    },
    {
      title: "Privacy-first Approach",
      icon: LockKeyhole,
      description:
        "School views should protect student trust and avoid exposing sensitive reflections.",
      items: [
        "Show aggregate themes before individual-level information.",
        "Avoid rankings, predictions, and fixed student profiles.",
        "Require clear consent boundaries before sharing any student-specific view.",
      ],
    },
    {
      title: "Pilot Program Readiness",
      icon: School,
      description:
        "A responsible pilot should validate usefulness, safety, comprehension, and family trust.",
      items: [
        "Define consent, privacy, and data-retention expectations before launch.",
        "Review language with educators, guardians, and youth advisors.",
        "Measure whether students feel more curious, understood, and supported.",
      ],
    },
  ],
  mockMetrics: [
    {
      label: "Demo students represented",
      value: "120",
      helper: "Illustrative cohort size only",
    },
    {
      label: "Exploration themes",
      value: "8",
      helper: "Mock aggregate categories",
    },
    {
      label: "Individual scoring",
      value: "0",
      helper: "No ranking or scoring in this demo",
    },
  ],
} as const;

export const demoNavigation = [
  {
    label: "Start demo flow",
    href: "/onboarding",
    icon: Lightbulb,
  },
  {
    label: "Student preview",
    href: "/student-dashboard",
    icon: Users,
  },
  {
    label: "School preview",
    href: "/school-dashboard",
    icon: ShieldCheck,
  },
  {
    label: "Back to landing",
    href: "/",
    icon: HeartHandshake,
  },
] as const;
