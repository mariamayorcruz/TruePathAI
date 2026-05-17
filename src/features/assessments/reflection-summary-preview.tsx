import Link from "next/link";
import { BarChart3, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { GradientCard } from "@/components/shared/gradient-card";
import { DemoNotice } from "@/features/demo/demo-notice";
import { toLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

type ReflectionSummaryPreviewProps = {
  mode: {
    phase: string;
    ageRange: string;
  };
  answeredCount: number;
  totalQuestions: number;
  dictionary: Dictionary;
  locale: Locale;
};

export function ReflectionSummaryPreview({
  mode,
  answeredCount,
  totalQuestions,
  dictionary,
  locale,
}: ReflectionSummaryPreviewProps) {
  const summaryPreview = dictionary.assessments.summary;

  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      <GradientCard className="rounded-[2.5rem] bg-white/85">
        <CardContent className="p-8 sm:p-12">
          <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
            <ShieldCheck className="size-7" aria-hidden="true" />
          </div>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
            {summaryPreview.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {summaryPreview.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            {summaryPreview.description}
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
                {summaryPreview.mode}
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-950">
                {mode.phase}
              </p>
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
