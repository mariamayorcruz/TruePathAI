import type { Metadata } from "next";

import { AssessmentExperience } from "@/features/assessments/assessment-experience";

export const metadata: Metadata = {
  title: "Assessments",
  description:
    "A reflective, non-deterministic TruePath AI assessment foundation for safe student exploration.",
  openGraph: {
    title: "TruePath AI Assessments",
    description:
      "A reflective, non-deterministic TruePath AI assessment foundation for safe student exploration.",
    url: "/assessments",
  },
};

export default function AssessmentsPage() {
  return <AssessmentExperience />;
}
