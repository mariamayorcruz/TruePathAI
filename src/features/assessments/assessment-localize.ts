import {
  assessmentModes,
  type AssessmentMode,
  type AssessmentQuestion,
  type ChoiceOption,
  type PreferenceChoiceQuestion,
  type ReflectionPromptQuestion,
  type ScenarioChoiceQuestion,
  type VisualCardChoiceQuestion,
  type VisualCardOption,
} from "@/features/assessments/content";
import type { Dictionary } from "@/i18n/get-dictionary";

type DictAssessmentModeEntry = Dictionary["assessments"]["modes"][number];
type DictAssessmentQuestionEntry = DictAssessmentModeEntry["questions"][number];

/**
 * Joins canonical mode definitions (questions, interpretations, visuals) with localized
 * copy from route dictionaries — avoiding shallow spreads that wipe `interpretation` fields.
 */
export function mergeCanonicalAssessmentModesWithDictionary(
  dictionary: Dictionary,
): AssessmentMode[] {
  return assessmentModes.map((canonical, index) =>
    mergeModeWithDictionary(canonical, dictionary.assessments.modes[index]),
  );
}

function mergeModeWithDictionary(
  canonical: AssessmentMode,
  dictEntry: DictAssessmentModeEntry | undefined,
): AssessmentMode {
  if (!dictEntry || dictEntry.id !== canonical.id) {
    return canonical;
  }

  return {
    ...canonical,
    phase: dictEntry.phase,
    title: dictEntry.title,
    description: dictEntry.description,
    focusAreas: dictEntry.focusAreas,
    questions: canonical.questions.map((question, qIndex) =>
      mergeQuestionPair(question, dictEntry.questions[qIndex]),
    ),
  };
}

function mergeQuestionPair(
  canonical: AssessmentQuestion,
  dictQuestion: DictAssessmentQuestionEntry | undefined,
): AssessmentQuestion {
  if (
    !dictQuestion ||
    dictQuestion.type !== canonical.type ||
    dictQuestion.id !== canonical.id
  ) {
    return canonical;
  }

  switch (canonical.type) {
    case "scenario-choice": {
      const d = dictQuestion as ScenarioChoiceQuestion;

      return {
        ...canonical,
        dimension: d.dimension,
        prompt: d.prompt,
        helper: d.helper,
        scenario: d.scenario,
        options: mergeChoiceOptions(canonical.options, d.options),
      };
    }

    case "preference-choice": {
      const d = dictQuestion as PreferenceChoiceQuestion;

      return {
        ...canonical,
        dimension: d.dimension,
        prompt: d.prompt,
        helper: d.helper,
        options: mergeChoiceOptions(canonical.options, d.options),
      };
    }

    case "reflection-prompt": {
      const d = dictQuestion as ReflectionPromptQuestion;

      return {
        ...canonical,
        dimension: d.dimension,
        prompt: d.prompt,
        helper: d.helper,
        placeholder: d.placeholder,
      };
    }

    case "visual-card-choice": {
      const d = dictQuestion as VisualCardChoiceQuestion;

      return {
        ...canonical,
        dimension: d.dimension,
        prompt: d.prompt,
        helper: d.helper,
        options: mergeVisualOptions(canonical.options, d.options),
      };
    }

    default: {
      const exhaustive: never = canonical;

      return exhaustive;
    }
  }
}

function mergeChoiceOptions<T extends ChoiceOption>(
  canonical: readonly T[],
  dictionary: readonly ChoiceOption[],
): readonly T[] {
  return canonical.map((option, index) => {
    const dictOpt = dictionary[index];

    if (!dictOpt || dictOpt.id !== option.id) {
      return option;
    }

    return {
      ...option,
      label: dictOpt.label,
      description: dictOpt.description ?? option.description,
    } as T;
  });
}

function mergeVisualOptions(canonical: readonly VisualCardOption[], dictionary: readonly VisualCardOption[]) {
  return canonical.map((option, index) => {
    const dictOpt = dictionary[index];

    if (!dictOpt || dictOpt.id !== option.id) {
      return option;
    }

    return {
      ...option,
      label: dictOpt.label,
      description: dictOpt.description ?? option.description,
      accent: dictOpt.accent ?? option.accent,
    };
  });
}
