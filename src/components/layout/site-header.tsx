"use client";

import Image from "next/image";
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
          className="flex shrink-0 items-center"
          aria-label={dictionary.common.logoAria}
        >
          <Image
            src="/truepath-ai-mark.svg"
            alt=""
            width={36}
            height={36}
            className="shrink-0 md:hidden"
            priority
            sizes="36px"
            aria-hidden
          />
          <Image
            src="/truepath-ai-logo.svg"
            alt=""
            width={211}
            height={38}
            className="hidden shrink-0 md:block"
            priority
            sizes="211px"
            aria-hidden
          />
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
