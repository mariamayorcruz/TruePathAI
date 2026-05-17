import type { Metadata } from "next";

import { privacyContent } from "@/features/trust/content";
import { TrustPage } from "@/features/trust/trust-page";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Plain-language privacy and student trust information for the TruePath AI public demo.",
  openGraph: {
    title: "TruePath AI Privacy",
    description:
      "Plain-language privacy and student trust information for the TruePath AI public demo.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return <TrustPage content={privacyContent} />;
}
