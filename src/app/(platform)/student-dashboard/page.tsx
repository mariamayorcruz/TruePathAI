import type { Metadata } from "next";

import { DemoPreviewPage } from "@/features/demo/demo-preview-page";
import { studentDemo } from "@/features/demo/content";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Student Preview",
  description:
    "A demo-only TruePath AI student preview showing non-deterministic reflection sections.",
  openGraph: {
    title: "TruePath AI Student Preview",
    description:
      "A demo-only TruePath AI student preview showing non-deterministic reflection sections.",
    url: "/student-dashboard",
  },
};

export default function StudentDashboardPage() {
  const dictionary = getDictionary("en");
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
      locale="en"
    />
  );
}
