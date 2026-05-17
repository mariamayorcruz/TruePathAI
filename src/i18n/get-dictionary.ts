import { en, type Dictionary } from "@/i18n/dictionaries/en";
import { es } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
};

export function getDictionary(locale: Locale = "en") {
  return dictionaries[locale];
}

export type { Dictionary };
