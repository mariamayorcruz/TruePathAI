import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type OnboardingProgressProps = {
  currentStep: number;
  steps: readonly string[];
};

export function OnboardingProgress({ currentStep, steps }: OnboardingProgressProps) {
  return (
    <nav aria-label="Onboarding progress">
      <ol className="grid gap-3 sm:grid-cols-4">
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <li
              key={step}
              className={cn(
                "rounded-2xl border bg-white/70 p-3 text-sm shadow-sm backdrop-blur",
                isCurrent
                  ? "border-sky-300 text-slate-950"
                  : "border-white/70 text-slate-600",
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full text-xs font-semibold",
                    isComplete && "bg-sky-700 text-white",
                    isCurrent && "bg-slate-950 text-white",
                    !isComplete && !isCurrent && "bg-slate-100 text-slate-500",
                  )}
                  aria-hidden="true"
                >
                  {isComplete ? <Check className="size-3.5" /> : index + 1}
                </span>
                <span className="font-medium">{step}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
