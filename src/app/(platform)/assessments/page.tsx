import type { Metadata } from "next";

import { AssessmentExperience } from "@/features/assessments/assessment-experience";

export const metadata: Metadata = {
  title: "Assessments",
  description:
    "A reflective, non-deterministic TruePath AI assessment foundation for safe student exploration.",
};

export default function AssessmentsPage() {
  return <AssessmentExperience />;
}
