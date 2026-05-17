import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { toLocalizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Account access is not active in the TruePath AI public MVP demo.",
};

export default function LoginPage() {
  const dictionary = getDictionary("en");

  return (
    <PlaceholderPage
      eyebrow={dictionary.login.eyebrow}
      title={dictionary.login.title}
      description={dictionary.login.description}
      note={dictionary.login.note}
      backLabel={dictionary.common.backHome}
      backHref={toLocalizedPath("/", "en")}
      icon={ShieldCheck}
    />
  );
}
