import type { Metadata } from "next";

import { TrustPage } from "@/features/trust/trust-page";
import { getDictionary } from "@/i18n/get-dictionary";

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
  const dictionary = getDictionary("en");

  return <TrustPage content={dictionary.trust.privacy} dictionary={dictionary} locale="en" />;
}
