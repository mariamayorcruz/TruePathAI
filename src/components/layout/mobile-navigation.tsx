"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname, toLocalizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LanguageToggle } from "@/components/layout/language-toggle";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/40"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-5 top-20 rounded-[1.5rem] border border-white/80 bg-white/95 p-4 shadow-2xl shadow-slate-950/12 backdrop-blur"
        >
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {dictionary.site.navigation.map((item) => (
              <Link
                key={item.href}
                href={toLocalizedPath(item.href, locale)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/30"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3">
            <LanguageToggle className="w-full" />
          </div>
          <Link
            href={toLocalizedPath("/onboarding", locale)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-3 h-12 w-full rounded-full bg-slate-950 text-white hover:bg-slate-800",
            )}
            onClick={() => setIsOpen(false)}
          >
            {dictionary.common.beginExploration}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
