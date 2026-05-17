import type { AssessmentMode } from "@/features/assessments/content";
import {
  localizedEnvironmentLines,
  localizedReflectionQuestions,
  localizedSkillLines,
  localizedThemeLabels,
} from "@/features/assessments/interpretation-catalog";
import type {
  AssessmentLocale,
  ExplorationThemeKey,
  ResolvedAnswerMetaSnapshot,
  RuntimeExplorationPreview,
  RuntimeInterpretationAccumulator,
} from "@/features/assessments/types";

/** Mirrors skip sentinel defined in assessment experience — shared for deterministic interpretation skips. */
export const SKIPPED_ASSESSMENT_ANSWER_SENTINEL = "__SKIPPED_FOR_NOW__";

const MAX_THEME_BULLETS = 8;
const MAX_ENV_LINES = 8;
const MAX_SKILL_LINES = 8;

function computeAccumulator(
  mode: AssessmentMode,
  answersByQuestionId: Record<string, string>,
): RuntimeInterpretationAccumulator {
  const resolved: ResolvedAnswerMetaSnapshot[] = [];
  const themeFrequency = new Map<ExplorationThemeKey, number>();
  const tagFrequency = new Map<string, number>();
  let spreadSignalCount = 0;
  let skippedReflection = false;
  let answeredChoiceQuestions = 0;

  for (const question of mode.questions) {
    const rawAnswer = answersByQuestionId[question.id] ?? "";

    if (question.type === "reflection-prompt") {
      if (rawAnswer === SKIPPED_ASSESSMENT_ANSWER_SENTINEL) {
        skippedReflection = true;
      }
      continue;
    }

    if (!rawAnswer.trim()) {
      continue;
    }

    answeredChoiceQuestions += 1;
    const option = question.options.find((entry) => entry.id === rawAnswer);

    if (!option?.interpretation) {
      continue;
    }

    const { interpretation } = option;
    const explorationThemes = interpretation.explorationThemes
      ? [...interpretation.explorationThemes]
      : [];
    const observationTags = interpretation.observationTags
      ? [...interpretation.observationTags]
      : [];

    for (const theme of explorationThemes) {
      themeFrequency.set(theme, (themeFrequency.get(theme) ?? 0) + 1);
    }

    for (const tag of observationTags) {
      tagFrequency.set(tag, (tagFrequency.get(tag) ?? 0) + 1);
    }

    if (interpretation.spreadSignal) {
      spreadSignalCount += 1;
    }

    resolved.push({
      questionId: question.id,
      answerId: option.id,
      observationTags,
      explorationThemes,
      spreadSignal: interpretation.spreadSignal ?? false,
    });
  }

  return {
    resolved,
    themeFrequency,
    tagFrequency,
    spreadSignalCount,
    skippedReflection,
    answeredChoiceQuestions,
  };
}

function maxThemeRepeat(themeFrequency: Map<ExplorationThemeKey, number>): number {
  let maxVal = 0;

  for (const val of themeFrequency.values()) {
    if (val > maxVal) {
      maxVal = val;
    }
  }

  return maxVal;
}

function orderThemes(
  themeFrequency: Map<ExplorationThemeKey, number>,
): ExplorationThemeKey[] {
  const keys = [...themeFrequency.keys()];

  return keys.sort((a, b) => {
    const freqDiff = (themeFrequency.get(b) ?? 0) - (themeFrequency.get(a) ?? 0);

    if (freqDiff !== 0) {
      return freqDiff;
    }

    return a.localeCompare(b);
  });
}

function assembleLines(
  orderedThemes: ExplorationThemeKey[],
  picker: (theme: ExplorationThemeKey, locale: AssessmentLocale) => string[],
  locale: AssessmentLocale,
  cap: number,
): string[] {
  const out: string[] = [];
  const seen = new Set<string>();

  outer: for (const theme of orderedThemes) {
    for (const line of picker(theme, locale)) {
      const trimmed = line.trim();

      if (!trimmed || seen.has(trimmed)) {
        continue;
      }

      seen.add(trimmed);
      out.push(trimmed);

      if (out.length >= cap) {
        break outer;
      }
    }
  }

  return out;
}

function shouldShowDiversePathsNotice(acc: RuntimeInterpretationAccumulator): boolean {
  const uniqueThemes = acc.themeFrequency.size;
  const maxRepeat = maxThemeRepeat(acc.themeFrequency);

  const multiDirectionThemes =
    acc.answeredChoiceQuestions >= 2 &&
    uniqueThemes >= 2 &&
    maxRepeat <= 1;

  return (
    acc.skippedReflection ||
    acc.spreadSignalCount >= 2 ||
    multiDirectionThemes ||
    acc.answeredChoiceQuestions === 0
  );
}

/**
 * Compose the local-only exploration preview: no persistence, scoring, AI, or career claims.
 */
export function interpretAssessmentRuntime(
  mode: AssessmentMode,
  answersByQuestionId: Record<string, string>,
  locale: AssessmentLocale,
): RuntimeExplorationPreview {
  const accumulator = computeAccumulator(mode, answersByQuestionId);
  const showDiversePathsNotice = shouldShowDiversePathsNotice(accumulator);
  const orderedThemes = orderThemes(accumulator.themeFrequency);

  return {
    accumulator,
    showDiversePathsNotice,
    orderedThemes,
    environments: assembleLines(
      orderedThemes,
      localizedEnvironmentLines,
      locale,
      MAX_ENV_LINES,
    ),
    skillsToPractice: assembleLines(
      orderedThemes,
      localizedSkillLines,
      locale,
      MAX_SKILL_LINES,
    ),
    reflectionQuestions: localizedReflectionQuestions(mode.id, locale),
  };
}

export function localizedExplorationThemesList(
  orderedThemes: ExplorationThemeKey[],
  locale: AssessmentLocale,
  cap = MAX_THEME_BULLETS,
): string[] {
  const themes: string[] = [];
  const seen = new Set<string>();

  for (const theme of orderedThemes) {
    const label = localizedThemeLabels(theme, locale).trim();

    if (!label || seen.has(label)) {
      continue;
    }

    seen.add(label);
    themes.push(label);

    if (themes.length >= cap) {
      break;
    }
  }

  return themes;
}
