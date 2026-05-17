"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname, toLocalizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { LanguageToggle } from "@/components/layout/language-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href={toLocalizedPath("/", locale)}
          className="flex items-center gap-2"
          aria-label={dictionary.common.logoAria}
        >
          <span className="flex size-9 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/15">
            TP
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-950">
            {dictionary.common.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {dictionary.site.navigation.map((item) => (
            <Link
              key={item.href}
              href={toLocalizedPath(item.href, locale)}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={toLocalizedPath("/onboarding", locale)}
          className={cn(
            buttonVariants({ size: "sm" }),
            "hidden rounded-full bg-slate-950 px-4 text-white hover:bg-slate-800 sm:inline-flex",
          )}
        >
          {dictionary.common.begin}
        </Link>

        <LanguageToggle className="hidden md:inline-flex" />
        <MobileNavigation />
      </div>
    </header>
  );
}
