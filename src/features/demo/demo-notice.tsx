import { Info } from "lucide-react";

import { demoNotice } from "@/features/demo/content";
import { cn } from "@/lib/utils";

type DemoNoticeProps = {
  className?: string;
};

export function DemoNotice({ className }: DemoNoticeProps) {
  return (
    <aside
      className={cn(
        "rounded-3xl border border-amber-200 bg-amber-50/85 p-4 text-sm leading-7 text-amber-950 shadow-sm",
        className,
      )}
      aria-label="Demo notice"
    >
      <div className="flex gap-3">
        <Info className="mt-1 size-4 shrink-0" aria-hidden="true" />
        <p>{demoNotice}</p>
      </div>
    </aside>
  );
}
