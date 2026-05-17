import type { Metadata } from "next";

import { AssessmentExperience } from "@/features/assessments/assessment-experience";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Evaluaciones",
  description:
    "Fundamento reflexivo y no determinista de TruePath AI para exploración estudiantil segura.",
  openGraph: {
    title: "TruePath AI — Evaluaciones",
    description:
      "Fundamento reflexivo y no determinista de TruePath AI para exploración estudiantil segura.",
    url: "/es/assessments",
  },
};

export default function SpanishAssessmentsPage() {
  return <AssessmentExperience dictionary={getDictionary("es")} locale="es" />;
}
