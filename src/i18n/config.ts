export const locales = ["en", "es"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function toLocalizedPath(path: string, locale: Locale) {
  if (locale === defaultLocale) {
    return path;
  }

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function getUnlocalizedPathname(pathname: string) {
  if (pathname === "/es") {
    return "/";
  }

  return pathname.startsWith("/es/") ? pathname.slice(3) : pathname;
}

export function getAlternateLocalePath(pathname: string) {
  const locale = getLocaleFromPathname(pathname);
  const unlocalized = getUnlocalizedPathname(pathname);

  return locale === "es" ? unlocalized : toLocalizedPath(unlocalized, "es");
}
