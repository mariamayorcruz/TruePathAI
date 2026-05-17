import type { Metadata } from "next";

import { DemoPreviewPage } from "@/features/demo/demo-preview-page";
import { schoolDemo } from "@/features/demo/content";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Vista de escuela",
  description:
    "Una vista demo de TruePath AI para escuelas con señales agregadas de muestra.",
};

export default function SpanishSchoolDashboardPage() {
  const dictionary = getDictionary("es");
  const sections = schoolDemo.sections.map((section, index) => ({
    icon: section.icon,
    ...dictionary.demo.school.sections[index],
  }));

  return (
    <DemoPreviewPage
      eyebrow={dictionary.demo.school.eyebrow}
      badge={dictionary.demo.school.badge}
      title={dictionary.demo.school.title}
      description={dictionary.demo.school.description}
      sections={sections}
      metrics={dictionary.demo.school.mockMetrics}
      dictionary={dictionary}
      locale="es"
    />
  );
}
