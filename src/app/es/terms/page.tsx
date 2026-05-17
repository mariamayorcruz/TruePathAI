import type { Metadata } from "next";

import { TrustPage } from "@/features/trust/trust-page";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Términos",
  description:
    "Términos de demo en lenguaje claro para la experiencia pública de TruePath AI.",
};

export default function SpanishTermsPage() {
  const dictionary = getDictionary("es");

  return <TrustPage content={dictionary.trust.terms} dictionary={dictionary} locale="es" />;
}
