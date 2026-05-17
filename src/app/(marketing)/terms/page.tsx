import type { Metadata } from "next";

import { termsContent } from "@/features/trust/content";
import { TrustPage } from "@/features/trust/trust-page";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Plain-language demo terms for the TruePath AI public presentation experience.",
  openGraph: {
    title: "TruePath AI Terms",
    description:
      "Plain-language demo terms for the TruePath AI public presentation experience.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return <TrustPage content={termsContent} />;
}
