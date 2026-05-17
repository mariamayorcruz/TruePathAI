import type { Metadata } from "next";

import { AssessmentExperience } from "@/features/assessments/assessment-experience";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Assessments",
  description:
    "Una base de reflexión no determinista de TruePath AI para exploración estudiantil segura.",
};

export default function SpanishAssessmentsPage() {
  return <AssessmentExperience dictionary={getDictionary("es")} locale="es" />;
}
