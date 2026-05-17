import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { OnboardingProgress } from "@/features/onboarding/onboarding-progress";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { toLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type OnboardingFrameProps = {
  currentStep: number;
  dictionary: Dictionary;
  locale: Locale;
  children: ReactNode;
};

export function OnboardingFrame({
  currentStep,
  dictionary,
  locale,
  children,
}: OnboardingFrameProps) {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[radial-gradient(circle_at_10%_12%,rgba(125,211,252,0.36),transparent_30%),radial-gradient(circle_at_90%_18%,rgba(196,181,253,0.34),transparent_30%),linear-gradient(135deg,#fffdf8,#eef8ff_52%,#fbf7ff)] py-8 text-slate-950"
    >
      <Container className="flex min-h-[calc(100vh-4rem)] flex-col">
        <header className="flex items-center justify-between py-2">
          <Link
            href={toLocalizedPath("/", locale)}
            className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/40"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-slate-950 text-xs text-white">
              TP
            </span>
            {dictionary.common.brand}
          </Link>
          <div className="flex items-center gap-3">
            <p className="hidden text-sm font-medium text-slate-600 sm:block">
              {dictionary.common.explorationBeginsGently}
            </p>
            <LanguageToggle />
          </div>
        </header>

        <div className="mt-8">
          <OnboardingProgress
            currentStep={currentStep}
            steps={dictionary.onboarding.steps}
          />
        </div>

        <div className="flex flex-1 items-center py-10">{children}</div>
      </Container>
    </main>
  );
}
