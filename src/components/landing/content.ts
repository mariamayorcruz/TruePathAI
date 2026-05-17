import {
  Brain,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MessageCircleHeart,
  Sparkles,
} from "lucide-react";

export const landingAudiences = [
  {
    id: "students",
    title: "For students",
    description:
      "A safe place to notice strengths, explore identity, and build confidence without pressure to have everything figured out.",
    icon: Sparkles,
    accent: "from-sky-500 to-cyan-400",
  },
  {
    id: "parents",
    title: "For parents",
    description:
      "Supportive language that helps families understand growth, curiosity, emotions, and future possibilities together.",
    icon: HeartHandshake,
    accent: "from-rose-400 to-orange-300",
  },
  {
    id: "schools",
    title: "For schools",
    description:
      "A scalable foundation for advisory, wellbeing, and future-readiness programs grounded in ethical student development.",
    icon: GraduationCap,
    accent: "from-violet-500 to-indigo-400",
  },
] as const;

export const platformPillars = [
  {
    title: "Explore strengths",
    description:
      "Reflection-led experiences help students identify patterns in energy, creativity, learning, and contribution.",
    icon: Lightbulb,
  },
  {
    title: "Grow emotional insight",
    description:
      "Prompts normalize uncertainty, support language for feelings, and encourage thoughtful communication.",
    icon: MessageCircleHeart,
  },
  {
    title: "Imagine possibilities",
    description:
      "Students can connect interests to many possible futures without being assigned a single track.",
    icon: Brain,
  },
] as const;

export const heroReflectionOptions = [
  "Creating ideas",
  "Helping people",
  "Solving puzzles",
] as const;

export const heroSafetySignals = [
  "No labels",
  "Many talents",
  "Student agency",
] as const;
