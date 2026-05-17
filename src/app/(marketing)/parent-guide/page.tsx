import type { Metadata } from "next";

import { TrustPage } from "@/features/trust/trust-page";
import { getDictionary } from "@/i18n/get-dictionary";

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
  const dictionary = getDictionary("en");

  return <TrustPage content={dictionary.trust.parentGuide} dictionary={dictionary} locale="en" />;
}
