import { ShieldCheck } from "lucide-react";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export default function LoginPage() {
  return (
    <PlaceholderPage
      eyebrow="Login"
      title="Secure access will come before personal data."
      description="Authentication will be added with privacy-first defaults for students, guardians, educators, and school administrators."
      icon={ShieldCheck}
    />
  );
}
