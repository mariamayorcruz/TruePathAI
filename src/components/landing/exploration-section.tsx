import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import type { Dictionary } from "@/i18n/get-dictionary";

type ExplorationSectionProps = {
  dictionary: Dictionary;
};

export function ExplorationSection({ dictionary }: ExplorationSectionProps) {
  const exploration = dictionary.landing.exploration;

  return (
    <Section tone="dark" aria-labelledby="exploration-heading">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow={exploration.eyebrow}
          inverse
          title={<span id="exploration-heading">{exploration.title}</span>}
          description={exploration.description}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {exploration.dimensions.map((dimension) => (
            <div
              key={dimension}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-lg font-medium text-slate-100"
            >
              {dimension}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
