import type { Metadata } from "next";

import { DemoPreviewPage } from "@/features/demo/demo-preview-page";
import { schoolDemo } from "@/features/demo/content";

export const metadata: Metadata = {
  title: "School Preview",
  description:
    "A demo-only TruePath AI school preview using mock aggregate student development signals.",
};

export default function SchoolDashboardPage() {
  return (
    <DemoPreviewPage
      eyebrow={schoolDemo.eyebrow}
      badge={schoolDemo.badge}
      title={schoolDemo.title}
      description={schoolDemo.description}
      sections={schoolDemo.sections}
      metrics={schoolDemo.mockMetrics}
    />
  );
}
