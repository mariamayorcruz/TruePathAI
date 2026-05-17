import type { Metadata } from "next";

import { PitchPage } from "@/features/pitch/pitch-page";

export const metadata: Metadata = {
  title: "Pitch",
  description:
    "A business-facing TruePath AI presentation for schools, parents, universities, and early sponsors.",
};

export default function PitchRoutePage() {
  return <PitchPage />;
}
