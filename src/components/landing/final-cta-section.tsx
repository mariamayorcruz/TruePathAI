import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { CtaLink } from "@/components/shared/cta-link";

export function FinalCtaSection() {
  return (
    <section className="pb-24" aria-labelledby="final-cta-heading">
      <Container>
        <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-14">
          <div className="max-w-3xl">
            <Badge className="rounded-full border-white/10 bg-white/10 px-4 py-2 text-cyan-100">
              Start gently
            </Badge>
            <h2
              id="final-cta-heading"
              className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              Help every student begin with curiosity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The first TruePath AI experience is an exploration, not a verdict.
              Students begin by noticing what is already within them.
            </p>
            <CtaLink href="/onboarding" intent="light" className="mt-9">
              Begin Exploration
              <ArrowRight className="size-4" />
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
