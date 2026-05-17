import type { Metadata } from "next";

import { PitchPage } from "@/features/pitch/pitch-page";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Presentación",
  description:
    "Una presentación de TruePath AI para escuelas, familias, universidades y patrocinadores iniciales.",
};

export default function SpanishPitchPage() {
  return <PitchPage dictionary={getDictionary("es")} locale="es" />;
}
