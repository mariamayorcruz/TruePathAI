"use client";

import { Info } from "lucide-react";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

type DemoNoticeProps = {
  className?: string;
};

export function DemoNotice({ className }: DemoNoticeProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <aside
      className={cn(
        "rounded-3xl border border-sky-200/80 bg-white/78 p-4 text-sm leading-7 text-slate-700 shadow-sm backdrop-blur",
        className,
      )}
      aria-label="Demo notice"
    >
      <div className="flex gap-3">
        <Info className="mt-1 size-4 shrink-0 text-sky-700" aria-hidden="true" />
        <p>
          <span className="font-semibold text-slate-950">
            {dictionary.demo.noticeLabel}{" "}
          </span>
          {dictionary.demo.notice}
        </p>
      </div>
    </aside>
  );
}
