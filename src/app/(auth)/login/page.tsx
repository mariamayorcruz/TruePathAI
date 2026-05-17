import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Account access is not active in the TruePath AI public MVP demo.",
};

export default function LoginPage() {
  return (
    <PlaceholderPage
      eyebrow="Public MVP demo"
      title="Accounts are not active in this public demonstration build."
      description="Secure account systems are planned for a later phase, after consent, privacy, and school data responsibilities are fully defined. This demo does not create accounts or store student information."
      icon={ShieldCheck}
    />
  );
}
