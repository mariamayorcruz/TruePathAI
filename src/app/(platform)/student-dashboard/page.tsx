import { Sparkles } from "lucide-react";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export default function StudentDashboardPage() {
  return (
    <PlaceholderPage
      eyebrow="Student dashboard"
      title="A personal growth space for students."
      description="The student dashboard will eventually collect reflections, strengths, learning preferences, and next-step invitations without turning them into fixed labels."
      icon={Sparkles}
    />
  );
}
