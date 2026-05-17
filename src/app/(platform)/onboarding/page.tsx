import type { Metadata } from "next";

import { OnboardingExperience } from "@/features/onboarding/onboarding-experience";

export const metadata: Metadata = {
  title: "Onboarding",
  description:
    "A gentle, age-aware introduction to TruePath AI before exploration begins.",
};

export default function OnboardingPage() {
  return <OnboardingExperience />;
}
