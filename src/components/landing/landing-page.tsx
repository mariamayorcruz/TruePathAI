import { AudienceSection } from "@/components/landing/audience-section";
import { EthicsSection } from "@/components/landing/ethics-section";
import { ExplorationSection } from "@/components/landing/exploration-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { PillarsSection } from "@/components/landing/pillars-section";

export function LandingPage() {
  return (
    <main id="main-content" className="overflow-hidden bg-[#fffdf8] text-slate-950">
      <HeroSection />
      <AudienceSection />
      <PillarsSection />
      <ExplorationSection />
      <EthicsSection />
      <FinalCtaSection />
    </main>
  );
}
