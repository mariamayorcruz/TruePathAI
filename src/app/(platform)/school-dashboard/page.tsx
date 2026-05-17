import { School } from "lucide-react";

import { PlaceholderPage } from "@/components/layout/placeholder-page";

export default function SchoolDashboardPage() {
  return (
    <PlaceholderPage
      eyebrow="School dashboard"
      title="A future-ready view for ethical student support."
      description="The school dashboard will support educators with aggregate, privacy-conscious program insights rather than student labels or deterministic predictions."
      icon={School}
    />
  );
}
