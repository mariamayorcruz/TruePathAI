import { explorationDimensions } from "@/features/assessments/domain";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";

export function ExplorationSection() {
  return (
    <Section tone="dark" aria-labelledby="exploration-heading">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Exploration dimensions"
          inverse
          title={<span id="exploration-heading">A modern map for human development.</span>}
          description="TruePath begins with language students can grow with: flexible, validating, and open-ended by design."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {explorationDimensions.map((dimension) => (
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
