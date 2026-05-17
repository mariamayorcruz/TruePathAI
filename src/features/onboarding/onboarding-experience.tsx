"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import { CardContent } from "@/components/ui/card";
import { GradientCard } from "@/components/shared/gradient-card";
import {
  agePathways,
  type OnboardingPathwayId,
} from "@/features/onboarding/content";
import { OnboardingControls } from "@/features/onboarding/onboarding-controls";
import { OnboardingFrame } from "@/features/onboarding/onboarding-frame";
import { PathwayCard } from "@/features/onboarding/pathway-card";
import { toLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const lastStepIndex = 3;
const truthIcons = [Compass, Sparkles, HeartHandshake] as const;

type OnboardingExperienceProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function OnboardingExperience({
  dictionary,
  locale,
}: OnboardingExperienceProps) {
  const reduceMotion = useReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPathway, setSelectedPathway] =
    useState<OnboardingPathwayId | null>(null);
  const [hasConfirmedSafety, setHasConfirmedSafety] = useState(false);

  const selectedPathwayContent = useMemo(
    () => dictionary.onboarding.pathways.find((pathway) => pathway.id === selectedPathway),
    [dictionary.onboarding.pathways, selectedPathway],
  );

  const canContinue =
    currentStep === 1
      ? selectedPathway !== null
      : currentStep === 2
        ? hasConfirmedSafety
        : true;

  function goNext() {
    if (!canContinue) {
      return;
    }

    setCurrentStep((step) => Math.min(step + 1, lastStepIndex));
  }

  function goBack() {
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  return (
    <OnboardingFrame currentStep={currentStep} dictionary={dictionary} locale={locale}>
      <section className="w-full" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentStep}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -18 }}
            transition={reduceMotion ? undefined : { duration: 0.28 }}
            className="mx-auto w-full max-w-6xl"
          >
            {currentStep === 0 ? <IntroStep dictionary={dictionary} /> : null}
            {currentStep === 1 ? (
              <PathwayStep
                dictionary={dictionary}
                selectedPathway={selectedPathway}
                onSelectPathway={setSelectedPathway}
              />
            ) : null}
            {currentStep === 2 ? (
              <SafetyStep
                dictionary={dictionary}
                hasConfirmedSafety={hasConfirmedSafety}
                onConfirmationChange={setHasConfirmedSafety}
              />
            ) : null}
            {currentStep === 3 ? (
              <BeginStep dictionary={dictionary} selectedPathway={selectedPathwayContent} />
            ) : null}

            <OnboardingControls
              canGoBack={currentStep > 0}
              canContinue={canContinue}
              disabledReason={
                currentStep === 1
                  ? dictionary.onboarding.pathwayStep.disabledReason
                  : currentStep === 2
                    ? dictionary.onboarding.safety.disabledReason
                    : undefined
              }
              isFinal={currentStep === lastStepIndex}
              labels={dictionary.onboarding.controls}
              assessmentsHref={toLocalizedPath("/assessments", locale)}
              onBack={goBack}
              onNext={goNext}
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </OnboardingFrame>
  );
}

function IntroStep({ dictionary }: { dictionary: Dictionary }) {
  const onboardingIntro = dictionary.onboarding.intro;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
          {onboardingIntro.eyebrow}
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl">
          {onboardingIntro.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          {onboardingIntro.narrative}
        </p>
      </div>

      <div className="grid gap-4">
        {onboardingIntro.truths.map((truth, index) => {
          const Icon = truthIcons[index];

          return (
            <GradientCard key={truth.title}>
              <CardContent className="flex gap-5 p-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-800">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                    {truth.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {truth.description}
                  </p>
                </div>
              </CardContent>
            </GradientCard>
          );
        })}
      </div>
    </div>
  );
}

type PathwayStepProps = {
  selectedPathway: OnboardingPathwayId | null;
  onSelectPathway: (pathwayId: OnboardingPathwayId) => void;
};

function PathwayStep({
  dictionary,
  selectedPathway,
  onSelectPathway,
}: PathwayStepProps & { dictionary: Dictionary }) {
  const pathwayStep = dictionary.onboarding.pathwayStep;
  const localizedPathways = agePathways.map((pathway, index) => ({
    ...pathway,
    ...dictionary.onboarding.pathways[index],
  }));

  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
          {pathwayStep.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          {pathwayStep.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          {pathwayStep.description}
        </p>
      </div>

      <div
        className="mt-10 grid gap-5 lg:grid-cols-3"
        role="list"
        aria-label="Age-aware onboarding pathways"
      >
        {localizedPathways.map((pathway) => (
          <PathwayCard
            key={pathway.id}
            pathway={pathway}
            isSelected={selectedPathway === pathway.id}
            labels={pathwayStep}
            onSelect={onSelectPathway}
          />
        ))}
      </div>
    </div>
  );
}

type SafetyStepProps = {
  hasConfirmedSafety: boolean;
  onConfirmationChange: (value: boolean) => void;
};

function SafetyStep({
  dictionary,
  hasConfirmedSafety,
  onConfirmationChange,
}: SafetyStepProps & { dictionary: Dictionary }) {
  const safetyAgreement = dictionary.onboarding.safety;
  const Icon = ShieldCheck;

  return (
    <div className="mx-auto max-w-4xl">
      <GradientCard className="rounded-[2.5rem]">
        <CardContent className="p-7 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-3xl bg-slate-950 text-white">
              <Icon className="size-7" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
                {safetyAgreement.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                {safetyAgreement.title}
              </h1>
              <ul className="mt-7 grid gap-3">
                {safetyAgreement.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-white/75 p-4 text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-sky-700"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <label
                className={cn(
                  "mt-7 flex cursor-pointer gap-4 rounded-3xl border p-5 text-left shadow-sm transition",
                  hasConfirmedSafety
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white/80 text-slate-800 hover:bg-white",
                )}
              >
                <input
                  type="checkbox"
                  className="mt-1 size-5 accent-slate-950"
                  checked={hasConfirmedSafety}
                  onChange={(event) => onConfirmationChange(event.target.checked)}
                />
                <span className="text-base font-semibold leading-7">
                  {safetyAgreement.confirmation}
                </span>
              </label>
            </div>
          </div>
        </CardContent>
      </GradientCard>
    </div>
  );
}

type BeginStepProps = {
  selectedPathway: Dictionary["onboarding"]["pathways"][number] | undefined;
};

function BeginStep({
  selectedPathway,
  dictionary,
}: BeginStepProps & { dictionary: Dictionary }) {
  const beginExploration = dictionary.onboarding.begin;

  return (
    <div className="mx-auto max-w-4xl text-center">
      <GradientCard className="rounded-[2.5rem] bg-white/85">
        <CardContent className="p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
            {beginExploration.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-7xl">
            {beginExploration.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            {beginExploration.description}
          </p>

          {selectedPathway ? (
            <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-sky-200 bg-sky-50/80 p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
                {beginExploration.selectedPathway}
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-950">
                {selectedPathway.phase}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {selectedPathway.description}
              </p>
            </div>
          ) : null}
        </CardContent>
      </GradientCard>
    </div>
  );
}
