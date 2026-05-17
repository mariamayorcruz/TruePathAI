"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  getAlternateLocalePath,
  getLocaleFromPathname,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  className?: string;
};

export function LanguageToggle({ className }: LanguageToggleProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const alternatePath = getAlternateLocalePath(pathname);

  return (
    <Link
      href={alternatePath}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-full border border-slate-200 bg-white/75 px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/30",
        className,
      )}
      aria-label={
        locale === "es"
          ? `${dictionary.common.languageToggle}: ${dictionary.common.english}`
          : `${dictionary.common.languageToggle}: ${dictionary.common.spanish}`
      }
    >
      {locale === "es" ? "EN" : "ES"}
    </Link>
  );
}
