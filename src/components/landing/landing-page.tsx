import { AudienceSection } from "@/components/landing/audience-section";
import { EthicsSection } from "@/components/landing/ethics-section";
import { ExplorationSection } from "@/components/landing/exploration-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { PillarsSection } from "@/components/landing/pillars-section";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type LandingPageProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function LandingPage({ dictionary, locale }: LandingPageProps) {
  return (
    <main id="main-content" className="overflow-hidden bg-[#fffdf8] text-slate-950">
      <HeroSection dictionary={dictionary} locale={locale} />
      <AudienceSection dictionary={dictionary} />
      <PillarsSection dictionary={dictionary} />
      <ExplorationSection dictionary={dictionary} />
      <EthicsSection dictionary={dictionary} />
      <FinalCtaSection dictionary={dictionary} locale={locale} />
    </main>
  );
}
