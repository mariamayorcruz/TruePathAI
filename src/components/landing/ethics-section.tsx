import { Users } from "lucide-react";

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { aiReadinessPrinciples } from "@/features/ai/principles";
import { assessmentPrinciples } from "@/features/assessments/domain";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import { Section, SectionHeading } from "@/components/shared/section";

export function EthicsSection() {
  return (
    <Section id="ethics" aria-labelledby="ethics-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Ethical positioning"
            title={
              <span id="ethics-heading">
                AI should make students feel more human, not more measured.
              </span>
            }
          />

          <div className="grid gap-4">
            {assessmentPrinciples.map((principle, index) => (
              <GradientCard key={principle}>
                <CardContent className="flex gap-5 p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p className="text-lg leading-8 text-slate-700">{principle}</p>
                </CardContent>
              </GradientCard>
            ))}
          </div>
        </div>

        <Separator className="my-16 bg-slate-200" />

        <div className="grid gap-5 md:grid-cols-3">
          {aiReadinessPrinciples.map((principle) => (
            <GradientCard key={principle.title} variant="soft">
              <CardHeader className="p-5">
                <Users className="size-6 text-sky-700" aria-hidden="true" />
                <CardTitle className="mt-4 text-xl font-semibold">
                  {principle.title}
                </CardTitle>
                <CardDescription className="text-base leading-7 text-slate-700">
                  {principle.description}
                </CardDescription>
              </CardHeader>
            </GradientCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
