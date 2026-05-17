import {
  Brush,
  Compass,
  Heart,
  Lightbulb,
  MessageCircle,
  Mountain,
  Puzzle,
  Route,
  School,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

import type {
  AnswerInterpretationMeta,
  AssessmentModeId,
} from "@/features/assessments/types";

export type { AssessmentModeId } from "@/features/assessments/types";

export type AssessmentQuestionType =
  | "scenario-choice"
  | "preference-choice"
  | "reflection-prompt"
  | "visual-card-choice";

type BaseQuestion = {
  id: string;
  type: AssessmentQuestionType;
  dimension: string;
  prompt: string;
  helper: string;
};

export type ChoiceOption = {
  id: string;
  label: string;
  description?: string;
  interpretation?: AnswerInterpretationMeta;
};

export type VisualCardOption = ChoiceOption & {
  accent: string;
};

export type ScenarioChoiceQuestion = BaseQuestion & {
  type: "scenario-choice";
  scenario: string;
  options: readonly ChoiceOption[];
};

export type PreferenceChoiceQuestion = BaseQuestion & {
  type: "preference-choice";
  options: readonly ChoiceOption[];
};

export type ReflectionPromptQuestion = BaseQuestion & {
  type: "reflection-prompt";
  placeholder: string;
};

export type VisualCardChoiceQuestion = BaseQuestion & {
  type: "visual-card-choice";
  options: readonly VisualCardOption[];
};

export type AssessmentQuestion =
  | ScenarioChoiceQuestion
  | PreferenceChoiceQuestion
  | ReflectionPromptQuestion
  | VisualCardChoiceQuestion;

export type AssessmentMode = {
  id: AssessmentModeId;
  ageRange: string;
  phase: string;
  title: string;
  description: string;
  focusAreas: readonly string[];
  icon: typeof Sparkles;
  tone: string;
  questions: readonly AssessmentQuestion[];
};

export const assessmentIntro = {
  eyebrow: "Guided reflection foundation",
  title: "A thoughtful start before any profile exists.",
  description:
    "This experience opens possibilities. It does not define your future. Your answers stay only on this screen for now and help shape a future guided profile experience.",
  safetyReminder:
    "This experience opens possibilities. It does not define your future.",
} as const;

export const assessmentModes: AssessmentMode[] = [
  {
    id: "discovery",
    ageRange: "10-12",
    phase: "Discovery Mode",
    title: "Curiosity and creativity",
    description:
      "A gentle set of prompts about curiosity, creativity, learning, emotions, and exploration.",
    focusAreas: ["Curiosity", "Creativity", "Learning", "Emotions", "Exploration"],
    icon: Sprout,
    tone: "from-cyan-400 to-sky-500",
    questions: [
      {
        id: "discovery-scenario",
        type: "scenario-choice",
        dimension: "Curiosity",
        prompt: "Imagine your class starts a new project. What would you most want to do first?",
        helper: "There is no best answer. Choose what feels most like you today.",
        scenario:
          "Your group gets a big box of materials and an open question to explore.",
        options: [
          {
            id: "ask",
            label: "Ask questions",
            description: "I would want to understand what we could discover.",
            interpretation: {
              observationTags: ["inquiry_drive", "verbal_hypothesis_testing"],
              relatedDimensions: ["Curiosity"],
              explorationThemes: ["asking-and-wondering"],
            },
          },
          {
            id: "make",
            label: "Start making",
            description: "I would want to try ideas with my hands.",
            interpretation: {
              observationTags: ["embodied_iteration"],
              relatedDimensions: ["Curiosity", "Learning"],
              explorationThemes: ["making-and-testing"],
            },
          },
          {
            id: "organize",
            label: "Sort the pieces",
            description: "I would want to see what we have and make a plan.",
            interpretation: {
              observationTags: ["ordering_comfort"],
              relatedDimensions: ["Curiosity", "Learning"],
              explorationThemes: ["organizing-and-planning"],
              spreadSignal: true,
            },
          },
        ],
      },
      {
        id: "discovery-preference",
        type: "preference-choice",
        dimension: "Learning",
        prompt: "When something is new, what usually helps you learn?",
        helper: "Your learning style can change depending on the moment.",
        options: [
          {
            id: "show",
            label: "Seeing an example",
            interpretation: {
              observationTags: ["model_sensitive"],
              relatedDimensions: ["Learning"],
              explorationThemes: ["learning-through-examples"],
            },
          },
          {
            id: "try",
            label: "Trying it myself",
            interpretation: {
              observationTags: ["kinetic_practice"],
              relatedDimensions: ["Learning"],
              explorationThemes: ["learning-by-doing"],
              spreadSignal: true,
            },
          },
          {
            id: "talk",
            label: "Talking it through",
            interpretation: {
              observationTags: ["dialogic_processing"],
              relatedDimensions: ["Learning"],
              explorationThemes: ["talking-it-through"],
              spreadSignal: true,
            },
          },
          {
            id: "quiet",
            label: "Thinking quietly first",
            interpretation: {
              observationTags: ["internal_generation"],
              relatedDimensions: ["Learning"],
              explorationThemes: ["thinking-quietly-first"],
              spreadSignal: true,
            },
          },
        ],
      },
      {
        id: "discovery-reflection",
        type: "reflection-prompt",
        dimension: "Emotions",
        prompt: "What is something that has made you feel proud, curious, or excited lately?",
        helper: "A small moment counts. You can write a sentence or a few words.",
        placeholder: "I noticed that I felt...",
      },
      {
        id: "discovery-visual",
        type: "visual-card-choice",
        dimension: "Exploration",
        prompt: "Which kind of exploration feels most interesting right now?",
        helper: "Pick a card that feels inviting, not permanent.",
        options: [
          {
            id: "build",
            label: "Build",
            description: "Make, draw, test, or create something new.",
            accent: "from-orange-300 to-rose-400",
            interpretation: {
              observationTags: ["tactile_generativity"],
              relatedDimensions: ["Exploration"],
              explorationThemes: ["building-and-creating"],
            },
          },
          {
            id: "wonder",
            label: "Wonder",
            description: "Ask questions and find out how things work.",
            accent: "from-sky-300 to-cyan-500",
            interpretation: {
              observationTags: ["conceptual_exploration"],
              relatedDimensions: ["Exploration"],
              explorationThemes: ["asking-and-wondering"],
            },
          },
          {
            id: "connect",
            label: "Connect",
            description: "Share ideas and understand people.",
            accent: "from-violet-300 to-indigo-500",
            interpretation: {
              observationTags: ["relational_curiosity"],
              relatedDimensions: ["Exploration"],
              explorationThemes: ["connecting-with-people"],
              spreadSignal: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: "potential",
    ageRange: "13-15",
    phase: "Potential Awareness Mode",
    title: "Strengths and environments",
    description:
      "A reflective set of prompts about strengths, social energy, problem-solving, interests, and environments.",
    focusAreas: [
      "Strengths",
      "Social energy",
      "Problem-solving",
      "Interests",
      "Environments",
    ],
    icon: Mountain,
    tone: "from-violet-400 to-indigo-500",
    questions: [
      {
        id: "potential-scenario",
        type: "scenario-choice",
        dimension: "Problem-solving",
        prompt: "A team project feels stuck. What might you naturally try?",
        helper: "This is about noticing patterns, not choosing a role forever.",
        scenario:
          "Your group has ideas, but nobody is sure what to do next.",
        options: [
          {
            id: "clarify",
            label: "Clarify the goal",
            description: "I might help everyone understand what we are solving.",
            interpretation: {
              observationTags: ["problem_framing_clarity"],
              relatedDimensions: ["Problem-solving"],
              explorationThemes: ["clarifying-problems-together"],
            },
          },
          {
            id: "encourage",
            label: "Encourage the team",
            description: "I might help people feel comfortable sharing.",
            interpretation: {
              observationTags: ["psychological_belonging_cues"],
              relatedDimensions: ["Problem-solving"],
              explorationThemes: ["supporting-the-group"],
            },
          },
          {
            id: "experiment",
            label: "Try a quick experiment",
            description: "I might test one idea and learn from it.",
            interpretation: {
              observationTags: ["hands_on_hypothesis_testing"],
              relatedDimensions: ["Problem-solving"],
              explorationThemes: ["experimenting-quickly"],
              spreadSignal: true,
            },
          },
        ],
      },
      {
        id: "potential-preference",
        type: "preference-choice",
        dimension: "Social energy",
        prompt: "Which environment often helps you do your best thinking?",
        helper: "Many people need different environments for different tasks.",
        options: [
          {
            id: "solo",
            label: "Quiet individual time",
            interpretation: {
              observationTags: ["restorative_solitude_need"],
              relatedDimensions: ["Social energy"],
              explorationThemes: ["solo-focus-environment"],
              spreadSignal: true,
            },
          },
          {
            id: "pair",
            label: "A thoughtful partner",
            interpretation: {
              observationTags: ["pairwise_depth"],
              relatedDimensions: ["Social energy"],
              explorationThemes: ["partner-depth-environment"],
            },
          },
          {
            id: "group",
            label: "A lively group",
            interpretation: {
              observationTags: ["collective_stimulation_positive"],
              relatedDimensions: ["Social energy"],
              explorationThemes: ["group-energy-environment"],
            },
          },
          {
            id: "mixed",
            label: "A mix of alone and together",
            interpretation: {
              observationTags: ["contextual_modal_switching"],
              relatedDimensions: ["Social energy"],
              explorationThemes: ["balanced-solo-and-together-environment"],
              spreadSignal: true,
            },
          },
        ],
      },
      {
        id: "potential-reflection",
        type: "reflection-prompt",
        dimension: "Interests",
        prompt: "What is one topic, activity, or problem you keep coming back to?",
        helper: "It can be academic, creative, social, practical, or personal.",
        placeholder: "I keep returning to...",
      },
      {
        id: "potential-visual",
        type: "visual-card-choice",
        dimension: "Strengths",
        prompt: "Which strength area feels most alive for you lately?",
        helper: "This is a clue to explore, not a category you must stay in.",
        options: [
          {
            id: "ideas",
            label: "Ideas",
            description: "Imagining, questioning, brainstorming, or designing.",
            accent: "from-cyan-300 to-blue-500",
            interpretation: {
              observationTags: ["ideational_generation"],
              relatedDimensions: ["Strengths"],
              explorationThemes: ["ideas-and-imagination"],
            },
          },
          {
            id: "people",
            label: "People",
            description: "Listening, leading, helping, or communicating.",
            accent: "from-rose-300 to-orange-400",
            interpretation: {
              observationTags: ["interpersonal_engagement_drive"],
              relatedDimensions: ["Strengths"],
              explorationThemes: ["people-and-communication-strength"],
            },
          },
          {
            id: "systems",
            label: "Systems",
            description: "Organizing, solving, analyzing, or improving.",
            accent: "from-emerald-300 to-teal-500",
            interpretation: {
              observationTags: ["analytical_structuring_pulse"],
              relatedDimensions: ["Strengths"],
              explorationThemes: ["systems-and-analysis-strength"],
              spreadSignal: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: "direction",
    ageRange: "16-18",
    phase: "Future Direction Mode",
    title: "Pathways and future planning",
    description:
      "A thoughtful set of prompts about pathways, career exploration, leadership, skills, and future planning.",
    focusAreas: [
      "Pathways",
      "Career exploration",
      "Leadership",
      "Skills",
      "Future planning",
    ],
    icon: Route,
    tone: "from-emerald-400 to-teal-500",
    questions: [
      {
        id: "direction-scenario",
        type: "scenario-choice",
        dimension: "Pathways",
        prompt: "You find three future options that all seem interesting. What might help you explore them?",
        helper: "Exploring multiple possibilities is healthy and normal.",
        scenario:
          "You are comparing possibilities, but none of them needs to become a final answer today.",
        options: [
          {
            id: "research",
            label: "Research real examples",
            description: "I might learn what people actually do in those paths.",
            interpretation: {
              observationTags: ["evidence_orientation"],
              relatedDimensions: ["Pathways"],
              explorationThemes: ["research-to-learn-paths"],
              spreadSignal: true,
            },
          },
          {
            id: "experience",
            label: "Try a small experience",
            description: "I might test a project, class, volunteer role, or shadowing option.",
            interpretation: {
              observationTags: ["embodied_path_sampling"],
              relatedDimensions: ["Pathways"],
              explorationThemes: ["hands-on-micro-experience"],
              spreadSignal: true,
            },
          },
          {
            id: "discuss",
            label: "Talk it through",
            description: "I might ask trusted people what they notice and know.",
            interpretation: {
              observationTags: ["mentor_processing_openness"],
              relatedDimensions: ["Pathways"],
              explorationThemes: ["dialogue-with-trusted-voices"],
              spreadSignal: true,
            },
          },
        ],
      },
      {
        id: "direction-preference",
        type: "preference-choice",
        dimension: "Skills",
        prompt: "Which kind of skill growth feels most useful to explore next?",
        helper: "This is about next steps, not deciding your whole future.",
        options: [
          {
            id: "communication",
            label: "Communication",
            interpretation: {
              observationTags: ["rhetorical_growth_pulse"],
              relatedDimensions: ["Skills"],
              explorationThemes: ["growth-in-communication-skills"],
            },
          },
          {
            id: "creative",
            label: "Creative problem-solving",
            interpretation: {
              observationTags: ["divergent_synthesis_pulse"],
              relatedDimensions: ["Skills"],
              explorationThemes: ["growth-in-creative-problem-solving"],
            },
          },
          {
            id: "technical",
            label: "Technical or analytical skills",
            interpretation: {
              observationTags: ["quant_patterns_curiosity"],
              relatedDimensions: ["Skills"],
              explorationThemes: ["growth-in-analytical-technical-skills"],
            },
          },
          {
            id: "leadership",
            label: "Leadership and collaboration",
            interpretation: {
              observationTags: ["shared_lead_practice_pulse"],
              relatedDimensions: ["Skills"],
              explorationThemes: ["growth-in-leadership-and-collaboration"],
            },
          },
        ],
      },
      {
        id: "direction-reflection",
        type: "reflection-prompt",
        dimension: "Future planning",
        prompt: "What is one future possibility you are curious about, even if you are unsure?",
        helper: "Curiosity is enough. You do not need a final plan.",
        placeholder: "I am curious about...",
      },
      {
        id: "direction-visual",
        type: "visual-card-choice",
        dimension: "Leadership",
        prompt: "Which way of contributing feels most natural lately?",
        helper: "Leadership can look quiet, creative, practical, or relational.",
        options: [
          {
            id: "guide",
            label: "Guide",
            description: "Help people move toward a shared goal.",
            accent: "from-violet-300 to-indigo-500",
            interpretation: {
              observationTags: ["steward_direction_soft"],
              relatedDimensions: ["Leadership"],
              explorationThemes: ["contributing-as-a-guide"],
            },
          },
          {
            id: "craft",
            label: "Craft",
            description: "Build quality work through focus and skill.",
            accent: "from-cyan-300 to-blue-500",
            interpretation: {
              observationTags: ["deliberative_mastery_pulse"],
              relatedDimensions: ["Leadership"],
              explorationThemes: ["contributing-through-craft"],
              spreadSignal: true,
            },
          },
          {
            id: "bridge",
            label: "Bridge",
            description: "Connect people, ideas, and opportunities.",
            accent: "from-emerald-300 to-teal-500",
            interpretation: {
              observationTags: ["boundary_crossing_generosity"],
              relatedDimensions: ["Leadership"],
              explorationThemes: ["bridging-ideas-and-people"],
              spreadSignal: true,
            },
          },
        ],
      },
    ],
  },
];

export const questionTypeLabels: Record<AssessmentQuestionType, string> = {
  "scenario-choice": "Scenario choice",
  "preference-choice": "Preference choice",
  "reflection-prompt": "Reflection prompt",
  "visual-card-choice": "Visual card choice",
};

export const assessmentIconMap = {
  Brush,
  Compass,
  Heart,
  Lightbulb,
  MessageCircle,
  Puzzle,
  School,
  Sparkles,
  Users,
} as const;
