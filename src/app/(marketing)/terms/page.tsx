import type { Metadata } from "next";

import { TrustPage } from "@/features/trust/trust-page";
import { getDictionary } from "@/i18n/get-dictionary";

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
  const dictionary = getDictionary("en");

  return <TrustPage content={dictionary.trust.terms} dictionary={dictionary} locale="en" />;
}
