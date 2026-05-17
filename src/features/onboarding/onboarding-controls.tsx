import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type OnboardingControlsProps = {
  canGoBack: boolean;
  canContinue?: boolean;
  disabledReason?: string;
  isFinal?: boolean;
  labels: {
    back: string;
    continue: string;
    beginExploration: string;
  };
  assessmentsHref: string;
  onBack: () => void;
  onNext: () => void;
};

export function OnboardingControls({
  canGoBack,
  canContinue = true,
  disabledReason,
  isFinal = false,
  labels,
  assessmentsHref,
  onBack,
  onNext,
}: OnboardingControlsProps) {
  return (
    <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Button
        type="button"
        variant="ghost"
        size="lg"
        className={cn(
          "h-12 rounded-full px-5 text-slate-700 hover:text-slate-950",
          !canGoBack && "invisible",
        )}
        onClick={onBack}
        aria-hidden={!canGoBack}
        tabIndex={canGoBack ? 0 : -1}
      >
        <ArrowLeft className="size-4" />
        {labels.back}
      </Button>

      <div className="flex flex-col items-stretch gap-2 sm:items-end">
        {isFinal ? (
          <Link
            href={assessmentsHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 rounded-full bg-slate-950 px-7 text-base text-white shadow-xl shadow-slate-950/20 hover:bg-slate-800",
            )}
          >
            {labels.beginExploration}
            <ArrowRight className="size-4" />
          </Link>
        ) : (
          <>
            <Button
              type="button"
              size="lg"
              className="h-14 rounded-full bg-slate-950 px-7 text-base text-white shadow-xl shadow-slate-950/20 hover:bg-slate-800 disabled:translate-y-0"
              onClick={onNext}
              disabled={!canContinue}
            >
              {labels.continue}
              <ArrowRight className="size-4" />
            </Button>
            {!canContinue && disabledReason ? (
              <p className="max-w-xs text-center text-xs leading-5 text-slate-600 sm:text-right">
                {disabledReason}
              </p>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
