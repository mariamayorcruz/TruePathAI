import type { Metadata } from "next";

import { parentGuideContent } from "@/features/trust/content";
import { TrustPage } from "@/features/trust/trust-page";

export const metadata: Metadata = {
  title: "Parent Guide",
  description:
    "A parent and guardian guide to understanding the TruePath AI demo and future consent expectations.",
  openGraph: {
    title: "TruePath AI Parent Guide",
    description:
      "A parent and guardian guide to understanding the TruePath AI demo and future consent expectations.",
    url: "/parent-guide",
  },
};

export default function ParentGuidePage() {
  return <TrustPage content={parentGuideContent} />;
}
