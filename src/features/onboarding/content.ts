import {
  Compass,
  HeartHandshake,
  Lightbulb,
  Mountain,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type OnboardingPathwayId = "discovery" | "potential" | "direction";

export const onboardingSteps = [
  "Welcome",
  "Choose your phase",
  "Safety agreement",
  "Begin",
] as const;

export const onboardingIntro = {
  eyebrow: "Before exploration begins",
  title: "This is not a test that defines your future.",
  narrative:
    "TruePath AI is here to help you notice what is already growing inside you: strengths, interests, curiosity, emotions, creativity, and possible directions. You do not need to have one answer. You do not need to know who you will become. This space opens possibilities without turning them into labels.",
  truths: [
    {
      title: "It is okay not to know yet.",
      description:
        "Uncertainty is a normal part of growing, learning, and discovering yourself.",
      icon: Compass,
    },
    {
      title: "Multiple talents are normal.",
      description:
        "You can be creative, thoughtful, analytical, caring, curious, and still changing.",
      icon: Sparkles,
    },
    {
      title: "Your value is not a career.",
      description:
        "A future path can express parts of you, but it can never measure your worth.",
      icon: HeartHandshake,
    },
  ],
} as const;

export const agePathways = [
  {
    id: "discovery",
    ageRange: "10-12",
    phase: "Discovery Phase",
    title: "Start with curiosity",
    description:
      "A gentle path for noticing interests, feelings, strengths, and what makes learning feel alive.",
    icon: Lightbulb,
    tone: "from-cyan-400 to-sky-500",
  },
  {
    id: "potential",
    ageRange: "13-15",
    phase: "Potential Awareness Phase",
    title: "Notice patterns",
    description:
      "A reflective path for exploring how you learn, communicate, create, and respond to possibilities.",
    icon: Mountain,
    tone: "from-violet-400 to-indigo-500",
  },
  {
    id: "direction",
    ageRange: "16-18",
    phase: "Future Direction Phase",
    title: "Explore next directions",
    description:
      "A thoughtful path for connecting strengths and interests to future possibilities without locking anything in.",
    icon: Route,
    tone: "from-emerald-400 to-teal-500",
  },
] as const;

export const safetyAgreement = {
  eyebrow: "Safe exploration agreement",
  title: "A few things to remember before you begin.",
  points: [
    "This experience is for exploration, not definition.",
    "Your answers can change as you grow.",
    "No result should decide your future for you.",
    "You are allowed to have many interests and talents.",
    "If something does not feel true, you can question it.",
  ],
  confirmation:
    "I understand this experience is for exploration, not definition.",
  icon: ShieldCheck,
} as const;

export const beginExploration = {
  eyebrow: "Ready when you are",
  title: "Begin with openness, not pressure.",
  description:
    "The next experience is a guided reflection prototype. It explores possibilities without generating scores, labels, or final recommendations.",
} as const;
