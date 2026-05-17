import type { Metadata } from "next";

import { DemoPreviewPage } from "@/features/demo/demo-preview-page";
import { studentDemo } from "@/features/demo/content";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Vista de estudiante",
  description:
    "Una vista demo de TruePath AI para estudiantes con secciones de reflexión no deterministas.",
};

export default function SpanishStudentDashboardPage() {
  const dictionary = getDictionary("es");
  const sections = studentDemo.sections.map((section, index) => ({
    icon: section.icon,
    ...dictionary.demo.student.sections[index],
  }));

  return (
    <DemoPreviewPage
      eyebrow={dictionary.demo.student.eyebrow}
      badge={dictionary.demo.student.badge}
      title={dictionary.demo.student.title}
      description={dictionary.demo.student.description}
      sections={sections}
      dictionary={dictionary}
      locale="es"
    />
  );
}
