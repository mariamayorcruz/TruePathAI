import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { platformPillars } from "@/components/landing/content";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import type { Dictionary } from "@/i18n/get-dictionary";

type PillarsSectionProps = {
  dictionary: Dictionary;
};

export function PillarsSection({ dictionary }: PillarsSectionProps) {
  return (
    <section className="pb-24" aria-label="TruePath AI product pillars">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {platformPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const content = dictionary.landing.pillars[index];

            return (
              <GradientCard key={content.title} variant="soft">
                <CardHeader className="p-5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-slate-700">
                    {content.description}
                  </CardDescription>
                </CardHeader>
              </GradientCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
