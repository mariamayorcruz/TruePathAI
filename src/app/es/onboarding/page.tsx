import type { Metadata } from "next";

import { OnboardingExperience } from "@/features/onboarding/onboarding-experience";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Onboarding",
  description:
    "Una introducción suave y apropiada por edad a TruePath AI antes de comenzar la exploración.",
};

export default function SpanishOnboardingPage() {
  return <OnboardingExperience dictionary={getDictionary("es")} locale="es" />;
}
