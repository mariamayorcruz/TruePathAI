"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { GradientCard } from "@/components/shared/gradient-card";
import { AssessmentControls } from "@/features/assessments/assessment-controls";
import { AssessmentFrame } from "@/features/assessments/assessment-frame";
import { AssessmentModeCard } from "@/features/assessments/assessment-mode-card";
import { AssessmentProgress } from "@/features/assessments/assessment-progress";
import { AssessmentQuestionCard } from "@/features/assessments/assessment-question-card";
import {
  assessmentModes,
  type AssessmentModeId,
} from "@/features/assessments/content";
import { ReflectionSummaryPreview } from "@/features/assessments/reflection-summary-preview";
import { type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type FlowStep = "intro" | "mode" | "questions" | "summary";
type AnswerMap = Record<string, string>;
const skippedAnswerValue = "__SKIPPED_FOR_NOW__";

type AssessmentExperienceProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function AssessmentExperience({
  dictionary,
  locale,
}: AssessmentExperienceProps) {
  const reduceMotion = useReducedMotion();
  const [flowStep, setFlowStep] = useState<FlowStep>("intro");
  const [selectedModeId, setSelectedModeId] = useState<AssessmentModeId | null>(
    null,
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});

  const selectedMode = useMemo(
    () => {
      const index = dictionary.assessments.modes.findIndex(
        (mode) => mode.id === selectedModeId,
      );

      return index >= 0
        ? {
            ...assessmentModes[index],
            ...dictionary.assessments.modes[index],
          }
        : undefined;
    },
    [dictionary.assessments.modes, selectedModeId],
  );

  const currentQuestion = selectedMode?.questions[currentQuestionIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] ?? "" : "";
  const displayAnswer =
    currentAnswer === skippedAnswerValue ? "" : currentAnswer;
  const canSkipCurrentQuestion = currentQuestion?.type === "reflection-prompt";
  const answeredCount = selectedMode
    ? selectedMode.questions.filter((question) => {
        const answer = answers[question.id];

        return Boolean(answer?.trim() && answer !== skippedAnswerValue);
      }).length
    : 0;

  function handleAnswerChange(value: string) {
    if (!currentQuestion) {
      return;
    }

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: value,
    }));
  }

  function startQuestions() {
    if (!selectedMode) {
      return;
    }

    setCurrentQuestionIndex(0);
    setFlowStep("questions");
  }

  function goToNextQuestion() {
    if (
      !selectedMode ||
      !currentQuestion ||
      !currentAnswer.trim() ||
      currentAnswer === skippedAnswerValue
    ) {
      return;
    }

    advanceQuestion(selectedMode.questions.length);
  }

  function skipCurrentQuestion() {
    if (!selectedMode || !currentQuestion || !canSkipCurrentQuestion) {
      return;
    }

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: skippedAnswerValue,
    }));
    advanceQuestion(selectedMode.questions.length);
  }

  function advanceQuestion(totalQuestions: number) {
    if (currentQuestionIndex === totalQuestions - 1) {
      setFlowStep("summary");
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
  }

  function goBack() {
    if (flowStep === "questions" && currentQuestionIndex > 0) {
      setCurrentQuestionIndex((index) => index - 1);
      return;
    }

    if (flowStep === "questions") {
      setFlowStep("mode");
      return;
    }

    if (flowStep === "mode") {
      setFlowStep("intro");
    }
  }

  return (
    <AssessmentFrame dictionary={dictionary} locale={locale}>
      <section className="w-full" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${flowStep}-${currentQuestionIndex}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -18 }}
            transition={reduceMotion ? undefined : { duration: 0.28 }}
            className="mx-auto w-full max-w-6xl"
          >
            {flowStep === "intro" ? (
              <AssessmentIntro
                dictionary={dictionary}
                onContinue={() => setFlowStep("mode")}
              />
            ) : null}

            {flowStep === "mode" ? (
              <AssessmentModeStep
                selectedModeId={selectedModeId}
                dictionary={dictionary}
                onSelectMode={setSelectedModeId}
                onBack={goBack}
                onContinue={startQuestions}
              />
            ) : null}

            {flowStep === "questions" && selectedMode && currentQuestion ? (
              <div className="mx-auto max-w-4xl">
                <AssessmentProgress
                  currentQuestionIndex={currentQuestionIndex}
                  totalQuestions={selectedMode.questions.length}
                  labels={dictionary.assessments.progress}
                />
                <div className="mt-6">
                  <AssessmentQuestionCard
                    question={currentQuestion}
                    value={displayAnswer}
                    dictionary={dictionary}
                    onChange={handleAnswerChange}
                  />
                </div>
                <p className="mt-5 rounded-3xl border border-sky-200 bg-sky-50/80 p-4 text-sm leading-7 text-slate-700">
                  {dictionary.assessments.intro.safetyReminder}
                </p>
                <AssessmentControls
                  canGoBack
                  canContinue={Boolean(
                    currentAnswer.trim() && currentAnswer !== skippedAnswerValue,
                  )}
                  disabledReason={
                    canSkipCurrentQuestion
                      ? dictionary.assessments.controls.reflectionReason
                      : dictionary.assessments.controls.answerReason
                  }
                  canSkip={canSkipCurrentQuestion}
                  labels={dictionary.assessments.controls}
                  isLastQuestion={
                    currentQuestionIndex === selectedMode.questions.length - 1
                  }
                  onBack={goBack}
                  onNext={goToNextQuestion}
                  onSkip={skipCurrentQuestion}
                />
              </div>
            ) : null}

            {flowStep === "summary" && selectedMode ? (
              <ReflectionSummaryPreview
                mode={selectedMode}
                answeredCount={answeredCount}
                totalQuestions={selectedMode.questions.length}
                dictionary={dictionary}
                locale={locale}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </section>
    </AssessmentFrame>
  );
}

type AssessmentIntroProps = {
  dictionary: Dictionary;
  onContinue: () => void;
};

function AssessmentIntro({ dictionary, onContinue }: AssessmentIntroProps) {
  const assessmentIntro = dictionary.assessments.intro;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
          {assessmentIntro.eyebrow}
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl">
          {assessmentIntro.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          {assessmentIntro.description}
        </p>
        <p className="mt-6 rounded-3xl border border-sky-200 bg-sky-50/80 p-5 text-base font-semibold leading-7 text-slate-800">
          {assessmentIntro.safetyReminder}
        </p>
        <Button
          type="button"
          size="lg"
          className="mt-8 h-14 rounded-full bg-slate-950 px-7 text-base text-white shadow-xl shadow-slate-950/20 hover:bg-slate-800"
          onClick={onContinue}
        >
          {assessmentIntro.cta}
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <GradientCard className="rounded-[2.5rem] bg-white/85">
        <CardContent className="p-7 sm:p-10">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
            <ShieldCheck className="size-7" aria-hidden="true" />
          </div>
          <h2 className="mt-8 text-3xl font-semibold tracking-tight text-slate-950">
            {assessmentIntro.prototypeTitle}
          </h2>
          <ul className="mt-6 grid gap-3 text-left text-sm leading-7 text-slate-700">
            {assessmentIntro.prototypePoints.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-slate-200 bg-white/75 p-4"
              >
                {point}
              </li>
            ))}
          </ul>
        </CardContent>
      </GradientCard>
    </div>
  );
}

type AssessmentModeStepProps = {
  selectedModeId: AssessmentModeId | null;
  dictionary: Dictionary;
  onSelectMode: (modeId: AssessmentModeId) => void;
  onBack: () => void;
  onContinue: () => void;
};

function AssessmentModeStep({
  selectedModeId,
  dictionary,
  onSelectMode,
  onBack,
  onContinue,
}: AssessmentModeStepProps) {
  const modeStep = dictionary.assessments.modeStep;
  const localizedModes = assessmentModes.map((mode, index) => ({
    ...mode,
    ...dictionary.assessments.modes[index],
  }));

  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
          {modeStep.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          {modeStep.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          {modeStep.description}
        </p>
      </div>

      <div
        className="mt-10 grid gap-5 lg:grid-cols-3"
        role="list"
        aria-label="Age-aware assessment modes"
      >
        {localizedModes.map((mode) => (
          <AssessmentModeCard
            key={mode.id}
            mode={mode}
            isSelected={selectedModeId === mode.id}
            labels={modeStep}
            onSelect={onSelectMode}
          />
        ))}
      </div>

      <AssessmentControls
        canGoBack
        canContinue={selectedModeId !== null}
        disabledReason={modeStep.disabledReason}
        labels={dictionary.assessments.controls}
        onBack={onBack}
        onNext={onContinue}
      />
    </div>
  );
}
