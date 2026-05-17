import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { CtaLink } from "@/components/shared/cta-link";
import { GradientCard } from "@/components/shared/gradient-card";
import { pitchCtas, pitchHero, pitchStats } from "@/features/pitch/content";

export function PitchHero() {
  return (
    <section
      className="relative overflow-hidden pt-32"
      aria-labelledby="pitch-hero-title"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(125,211,252,0.38),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(196,181,253,0.35),transparent_32%),linear-gradient(135deg,#fffdf8_0%,#eef8ff_46%,#faf5ff_100%)]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <Badge className="rounded-full border-sky-200 bg-white/80 px-4 py-2 text-sky-800 shadow-sm backdrop-blur">
              {pitchHero.eyebrow}
            </Badge>
            <h1
              id="pitch-hero-title"
              className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-7xl"
            >
              {pitchHero.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              {pitchHero.description}
            </p>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-600">
              {pitchHero.audience}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {pitchCtas.map((cta) => {
                const Icon = cta.icon;

                return (
                  <CtaLink
                    key={cta.href}
                    href={cta.href}
                    intent={cta.intent}
                    className="justify-center"
                  >
                    {cta.label}
                    <Icon className="size-4" aria-hidden="true" />
                  </CtaLink>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            {pitchStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <GradientCard key={stat.label} className="bg-white/82">
                  <div className="flex items-center gap-5 p-5">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">
                        {stat.helper}
                      </p>
                    </div>
                  </div>
                </GradientCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
