import { Compass } from "lucide-react";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export default function OnboardingPage() {
  return (
    <PlaceholderPage
      eyebrow="Onboarding"
      title="A gentle start to self-discovery."
      description="The future onboarding flow will introduce students to TruePath AI with consent-aware, age-appropriate language and a calm first reflection."
      icon={Compass}
    />
  );
}
