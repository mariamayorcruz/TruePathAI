import type { Metadata } from "next";

import { PitchPage } from "@/features/pitch/pitch-page";

export const metadata: Metadata = {
  title: "Pitch",
  description:
    "A business-facing TruePath AI presentation for schools, parents, universities, and early sponsors.",
  openGraph: {
    title: "TruePath AI Pitch",
    description:
      "A school- and sponsor-ready presentation for the TruePath AI public demo and pilot proposal.",
    url: "/pitch",
  },
};

export default function PitchRoutePage() {
  return <PitchPage />;
}
