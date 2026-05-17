import type { Metadata } from "next";

import { TrustPage } from "@/features/trust/trust-page";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Guía para familias",
  description:
    "Una guía para padres y tutores sobre la demo de TruePath AI y expectativas futuras de consentimiento.",
};

export default function SpanishParentGuidePage() {
  const dictionary = getDictionary("es");

  return (
    <TrustPage
      content={dictionary.trust.parentGuide}
      dictionary={dictionary}
      locale="es"
    />
  );
}
