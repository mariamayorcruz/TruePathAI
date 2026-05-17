"use client";

import Link from "next/link";
import { BarChart3, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";
import { useMemo } from "react";

import { buttonVariants } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { GradientCard } from "@/components/shared/gradient-card";
import type { AssessmentMode } from "@/features/assessments/content";
import {
  interpretAssessmentRuntime,
  localizedExplorationThemesList,
} from "@/features/assessments/interpretation";
import type { AssessmentLocale } from "@/features/assessments/types";
import { interpretationMessages } from "@/features/assessments/types";
import { DemoNotice } from "@/features/demo/demo-notice";
import { toLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

type ReflectionSummaryPreviewProps = {
  mode: AssessmentMode;
  answers: Record<string, string>;
  answeredCount: number;
  totalQuestions: number;
  dictionary: Dictionary;
  locale: Locale;
};

export function ReflectionSummaryPreview({
  mode,
  answers,
  answeredCount,
  totalQuestions,
  dictionary,
  locale,
}: ReflectionSummaryPreviewProps) {
  const summaryPreview = dictionary.assessments.summary;
  const msgs = interpretationMessages(locale as AssessmentLocale);
  const preview = useMemo(
    () => interpretAssessmentRuntime(mode, answers, locale as AssessmentLocale),
    [mode, answers, locale],
  );
  const themeBullets = useMemo(
    () => localizedExplorationThemesList(preview.orderedThemes, locale as AssessmentLocale),
    [preview.orderedThemes, locale],
  );

  const environmentLines =
    preview.environments.length > 0 ? preview.environments : msgs.fallbackEnvironmentIdeas;
  const skillLines =
    preview.skillsToPractice.length > 0 ? preview.skillsToPractice : msgs.fallbackSkillIdeas;

  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      <GradientCard className="rounded-[2.5rem] bg-white/85">
        <CardContent className="p-8 sm:p-12">
          <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
            <ShieldCheck className="size-7" aria-hidden="true" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
            {msgs.exploreEyebrow}
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {msgs.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            {msgs.tonePrefixByMode[mode.id]} {msgs.notLabelNotice}
          </p>

          <p className="mx-auto mt-4 max-w-2xl rounded-3xl border border-sky-300 bg-sky-50 p-5 text-base font-semibold leading-7 text-slate-900">
            {msgs.localDisclaimer}
          </p>

          {preview.showDiversePathsNotice ? (
            <div className="mx-auto mt-6 max-w-2xl rounded-3xl border border-amber-200 bg-amber-50/90 p-5 text-base leading-7 text-amber-950">
              {msgs.diverseNotice}
            </div>
          ) : null}

          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
                {summaryPreview.mode}
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-950">{mode.phase}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {summaryPreview.agePrefix} {mode.ageRange}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
                {summaryPreview.reflections}
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-950">
                {answeredCount} {summaryPreview.of} {totalQuestions}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {summaryPreview.storedOnly}
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 text-left text-slate-800">
            <h2 className="text-lg font-semibold text-slate-950">{msgs.possibleThemesTitle}</h2>
            <p className="mt-3 text-base leading-7">{msgs.themesMaySuggest}</p>
            {themeBullets.length ? (
              <ul className="mt-5 grid list-disc gap-2 pl-5 text-base leading-7 marker:text-emerald-600">
                {themeBullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <>
                <p className="mt-5 text-base font-semibold text-slate-950">
                  {msgs.emptyThemesFallbackTitle}
                </p>
                <p className="mt-3 text-base leading-7">{msgs.emptyThemesFallbackBody}</p>
                <ul className="mt-4 grid list-disc gap-2 pl-5 text-base leading-7 marker:text-emerald-600">
                  <li>{msgs.emptyListFallbackBullet}</li>
                </ul>
              </>
            )}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-indigo-200 bg-indigo-50/55 p-6 text-left text-slate-800">
            <h2 className="text-lg font-semibold text-slate-950">{msgs.environmentsTitle}</h2>
            <p className="mt-3 text-base leading-7">{msgs.environmentsIntro}</p>
            <ul className="mt-5 grid list-disc gap-2 pl-5 text-base leading-7 marker:text-indigo-600">
              {environmentLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-sky-200 bg-white/90 p-6 text-left text-slate-800">
            <h2 className="text-lg font-semibold text-slate-950">{msgs.skillsTitle}</h2>
            <p className="mt-3 text-base leading-7">{msgs.skillsIntro}</p>
            <ul className="mt-5 grid list-disc gap-2 pl-5 text-base leading-7 marker:text-sky-600">
              {skillLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-violet-200 bg-violet-50/40 p-6 text-left text-slate-800">
            <h2 className="text-lg font-semibold text-slate-950">{msgs.reflectionTitle}</h2>
            <p className="mt-3 text-base leading-7">{msgs.reflectionIntro}</p>
            <ul className="mt-5 grid list-disc gap-2 pl-5 text-base leading-7 marker:text-violet-600">
              {preview.reflectionQuestions.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-8 max-w-2xl rounded-3xl border border-sky-200 bg-sky-50/80 p-5 text-sm leading-7 text-slate-700">
            {summaryPreview.reminder}
          </p>

          <DemoNotice className="mx-auto mt-5 max-w-2xl text-left" />

          <div className="mt-9 grid gap-3 md:grid-cols-3">
            <Link
              href={toLocalizedPath("/student-dashboard", locale)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 rounded-full bg-slate-950 px-5 text-base text-white shadow-xl shadow-slate-950/20 hover:bg-slate-800",
              )}
            >
              <Sparkles className="size-4" />
              {summaryPreview.viewStudent}
            </Link>
            <Link
              href={toLocalizedPath("/school-dashboard", locale)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 rounded-full border-slate-300 bg-white/80 px-5 text-base text-slate-800 hover:bg-white",
              )}
            >
              <BarChart3 className="size-4" />
              {summaryPreview.exploreSchool}
            </Link>
            <Link
              href={toLocalizedPath("/onboarding", locale)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 rounded-full border-slate-300 bg-white/80 px-5 text-base text-slate-800 hover:bg-white",
              )}
            >
              <RotateCcw className="size-4" />
              {summaryPreview.startAgain}
            </Link>
          </div>
        </CardContent>
      </GradientCard>
    </div>
  );
}
