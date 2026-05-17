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
  assessmentIntro,
  assessmentModes,
  type AssessmentModeId,
} from "@/features/assessments/content";
import { ReflectionSummaryPreview } from "@/features/assessments/reflection-summary-preview";

type FlowStep = "intro" | "mode" | "questions" | "summary";
type AnswerMap = Record<string, string>;
const skippedAnswerValue = "__SKIPPED_FOR_NOW__";

export function AssessmentExperience() {
  const reduceMotion = useReducedMotion();
  const [flowStep, setFlowStep] = useState<FlowStep>("intro");
  const [selectedModeId, setSelectedModeId] = useState<AssessmentModeId | null>(
    null,
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});

  const selectedMode = useMemo(
    () => assessmentModes.find((mode) => mode.id === selectedModeId),
    [selectedModeId],
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
    <AssessmentFrame>
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
              <AssessmentIntro onContinue={() => setFlowStep("mode")} />
            ) : null}

            {flowStep === "mode" ? (
              <AssessmentModeStep
                selectedModeId={selectedModeId}
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
                />
                <div className="mt-6">
                  <AssessmentQuestionCard
                    question={currentQuestion}
                    value={displayAnswer}
                    onChange={handleAnswerChange}
                  />
                </div>
                <p className="mt-5 rounded-3xl border border-sky-200 bg-sky-50/80 p-4 text-sm leading-7 text-slate-700">
                  {assessmentIntro.safetyReminder}
                </p>
                <AssessmentControls
                  canGoBack
                  canContinue={Boolean(
                    currentAnswer.trim() && currentAnswer !== skippedAnswerValue,
                  )}
                  disabledReason={
                    canSkipCurrentQuestion
                      ? "Write a reflection or choose Skip for now."
                      : "Choose an answer to continue."
                  }
                  canSkip={canSkipCurrentQuestion}
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
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </section>
    </AssessmentFrame>
  );
}

type AssessmentIntroProps = {
  onContinue: () => void;
};

function AssessmentIntro({ onContinue }: AssessmentIntroProps) {
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
          Choose assessment mode
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <GradientCard className="rounded-[2.5rem] bg-white/85">
        <CardContent className="p-7 sm:p-10">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
            <ShieldCheck className="size-7" aria-hidden="true" />
          </div>
          <h2 className="mt-8 text-3xl font-semibold tracking-tight text-slate-950">
            What this prototype does
          </h2>
          <ul className="mt-6 grid gap-3 text-left text-sm leading-7 text-slate-700">
            <li className="rounded-2xl border border-slate-200 bg-white/75 p-4">
              Asks reflective, youth-friendly questions.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white/75 p-4">
              Keeps answers only in local page state.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white/75 p-4">
              Avoids profiles, scores, labels, and career recommendations.
            </li>
          </ul>
        </CardContent>
      </GradientCard>
    </div>
  );
}

type AssessmentModeStepProps = {
  selectedModeId: AssessmentModeId | null;
  onSelectMode: (modeId: AssessmentModeId) => void;
  onBack: () => void;
  onContinue: () => void;
};

function AssessmentModeStep({
  selectedModeId,
  onSelectMode,
  onBack,
  onContinue,
}: AssessmentModeStepProps) {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
          Age-aware modes
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Choose the reflection mode that fits your age and moment.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          The mode shapes the questions you see. It does not label you, rank you,
          or create a result.
        </p>
      </div>

      <div
        className="mt-10 grid gap-5 lg:grid-cols-3"
        role="list"
        aria-label="Age-aware assessment modes"
      >
        {assessmentModes.map((mode) => (
          <AssessmentModeCard
            key={mode.id}
            mode={mode}
            isSelected={selectedModeId === mode.id}
            onSelect={onSelectMode}
          />
        ))}
      </div>

      <AssessmentControls
        canGoBack
        canContinue={selectedModeId !== null}
        disabledReason="Choose an age-aware mode to begin."
        onBack={onBack}
        onNext={onContinue}
      />
    </div>
  );
}
