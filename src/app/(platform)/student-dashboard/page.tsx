import type { Metadata } from "next";

import { DemoPreviewPage } from "@/features/demo/demo-preview-page";
import { studentDemo } from "@/features/demo/content";

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
  return (
    <DemoPreviewPage
      eyebrow={studentDemo.eyebrow}
      badge={studentDemo.badge}
      title={studentDemo.title}
      description={studentDemo.description}
      sections={studentDemo.sections}
    />
  );
}
