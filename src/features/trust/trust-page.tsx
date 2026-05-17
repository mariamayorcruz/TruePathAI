import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { CardContent } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import type { TrustPageContent } from "@/features/trust/content";

type TrustPageProps = {
  content: TrustPageContent;
};

export function TrustPage({ content }: TrustPageProps) {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[radial-gradient(circle_at_12%_12%,rgba(125,211,252,0.34),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(167,139,250,0.32),transparent_30%),linear-gradient(135deg,#fffdf8,#eff9ff_52%,#fbf7ff)] py-8 text-slate-950"
    >
      <Container>
        <header className="flex items-center justify-between py-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/40"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-slate-950 text-xs text-white">
              TP
            </span>
            TruePath AI
          </Link>
          <p className="hidden text-sm font-medium text-slate-600 sm:block">
            Public trust
          </p>
        </header>

        <section className="py-14" aria-labelledby="trust-page-title">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
                {content.eyebrow}
              </p>
              <h1
                id="trust-page-title"
                className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl"
              >
                {content.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                {content.description}
              </p>
            </div>

            <GradientCard className="bg-white/84">
              <CardContent className="flex gap-4 p-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </div>
                <p className="text-sm leading-7 text-slate-700">
                  {content.effectiveNote}
                </p>
              </CardContent>
            </GradientCard>
          </div>
        </section>

        <section className="grid gap-5 pb-14 lg:grid-cols-2" aria-label="Trust details">
          {content.sections.map((section) => (
            <GradientCard key={section.title} className="bg-white/84">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {section.body}
                </p>
                <ul className="mt-6 grid gap-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-slate-200 bg-white/76 p-4 text-sm leading-7 text-slate-700"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </GradientCard>
          ))}
        </section>

        <section className="pb-12" aria-label="Trust page next step">
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to see the demo flow?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Start with onboarding to see how TruePath AI introduces exploration
              before any future profile, AI analysis, or production account exists.
            </p>
            <Link
              href="/onboarding"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/40"
            >
              View Demo Flow
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
