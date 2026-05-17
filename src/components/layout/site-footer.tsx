"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname, toLocalizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <footer className="border-t border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">
            {dictionary.common.brand}
          </p>
          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
            {dictionary.common.footerDescription}
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-5 gap-y-2"
          aria-label="Footer navigation"
        >
          {dictionary.common.footerLinks.map((link) => (
            <Link
              key={link.href}
              href={toLocalizedPath(link.href, locale)}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/30"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
