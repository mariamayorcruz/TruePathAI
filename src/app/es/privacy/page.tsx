import type { Metadata } from "next";

import { TrustPage } from "@/features/trust/trust-page";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Información en lenguaje claro sobre privacidad y confianza estudiantil para la demo pública de TruePath AI.",
};

export default function SpanishPrivacyPage() {
  const dictionary = getDictionary("es");

  return <TrustPage content={dictionary.trust.privacy} dictionary={dictionary} locale="es" />;
}
