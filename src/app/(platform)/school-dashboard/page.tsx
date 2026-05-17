import type { Metadata } from "next";

import { DemoPreviewPage } from "@/features/demo/demo-preview-page";
import { schoolDemo } from "@/features/demo/content";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "School Preview",
  description:
    "A demo-only TruePath AI school preview using mock aggregate student development signals.",
  openGraph: {
    title: "TruePath AI School Preview",
    description:
      "A demo-only TruePath AI school preview using mock aggregate student development signals.",
    url: "/school-dashboard",
  },
};

export default function SchoolDashboardPage() {
  const dictionary = getDictionary("en");
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
      locale="en"
    />
  );
}
