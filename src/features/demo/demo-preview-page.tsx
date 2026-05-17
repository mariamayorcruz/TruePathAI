import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { CardContent } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import { DemoNotice } from "@/features/demo/demo-notice";
import { demoNavigation } from "@/features/demo/content";
import { cn } from "@/lib/utils";

type DemoSection = {
  title: string;
  icon: LucideIcon;
  description: string;
  items: readonly string[];
};

type DemoMetric = {
  label: string;
  value: string;
  helper: string;
};

type DemoPreviewPageProps = {
  eyebrow: string;
  badge: string;
  title: string;
  description: string;
  sections: readonly DemoSection[];
  metrics?: readonly DemoMetric[];
};

export function DemoPreviewPage({
  eyebrow,
  badge,
  title,
  description,
  sections,
  metrics,
}: DemoPreviewPageProps) {
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
            Presentation preview
          </p>
        </header>

        <section className="py-14" aria-labelledby="demo-preview-title">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-800">
                {eyebrow}
              </p>
              <div className="mt-5 inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-900 shadow-sm">
                {badge}
              </div>
              <h1
                id="demo-preview-title"
                className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl"
              >
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                {description}
              </p>
            </div>

            <DemoNotice />
          </div>

          {metrics ? (
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {metrics.map((metric) => (
                <GradientCard key={metric.label} className="bg-white/82">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {metric.helper}
                    </p>
                  </CardContent>
                </GradientCard>
              ))}
            </div>
          ) : null}
        </section>

        <section
          className="grid gap-5 pb-14 lg:grid-cols-2"
          aria-label="Demo preview sections"
        >
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <GradientCard key={section.title} className="bg-white/84">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-white/76 p-4 text-sm leading-7 text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </GradientCard>
            );
          })}
        </section>

        <nav
          className="grid gap-3 pb-12 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Demo navigation"
        >
          {demoNavigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group rounded-3xl border border-white/80 bg-white/78 p-4 text-sm font-semibold text-slate-800 shadow-lg shadow-slate-900/5 backdrop-blur transition",
                  "hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/30 motion-reduce:hover:translate-y-0",
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-2xl bg-sky-100 text-sky-800">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </Container>
    </main>
  );
}
