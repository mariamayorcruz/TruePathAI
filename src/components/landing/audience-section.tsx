import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { landingAudiences } from "@/components/landing/content";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import { Section, SectionHeading } from "@/components/shared/section";
import { cn } from "@/lib/utils";

export function AudienceSection() {
  return (
    <Section aria-labelledby="audience-heading">
      <Container>
        <SectionHeading
          eyebrow="Built for the whole ecosystem"
          title={
            <span id="audience-heading">
              Self-discovery should feel supportive, not deterministic.
            </span>
          }
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {landingAudiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <GradientCard id={audience.id} key={audience.id}>
                <CardHeader className="gap-4 p-5">
                  <div
                    className={cn(
                      "flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                      audience.accent,
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    {audience.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-slate-700">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
              </GradientCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
