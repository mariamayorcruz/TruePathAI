import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { toLocalizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Login",
  description:
    "El acceso con cuentas no está activo en la demo pública MVP de TruePath AI.",
};

export default function SpanishLoginPage() {
  const dictionary = getDictionary("es");

  return (
    <PlaceholderPage
      eyebrow={dictionary.login.eyebrow}
      title={dictionary.login.title}
      description={dictionary.login.description}
      note={dictionary.login.note}
      backLabel={dictionary.common.backHome}
      backHref={toLocalizedPath("/", "es")}
      icon={ShieldCheck}
    />
  );
}
