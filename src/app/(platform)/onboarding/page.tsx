import type { Metadata } from "next";

import { OnboardingExperience } from "@/features/onboarding/onboarding-experience";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Onboarding",
  description:
    "A gentle, age-aware introduction to TruePath AI before exploration begins.",
  openGraph: {
    title: "TruePath AI Onboarding",
    description:
      "A gentle, age-aware introduction to TruePath AI before exploration begins.",
    url: "/onboarding",
  },
};

export default function OnboardingPage() {
  return <OnboardingExperience dictionary={getDictionary("en")} locale="en" />;
}
