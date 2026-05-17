import { Container } from "@/components/shared/container";
import { CtaLink } from "@/components/shared/cta-link";
import { PitchHero } from "@/features/pitch/pitch-hero";
import { PitchSectionCard } from "@/features/pitch/pitch-section-card";
import { pitchCtas, pitchSections } from "@/features/pitch/content";

export function PitchPage() {
  return (
    <main id="main-content" className="overflow-hidden bg-[#fffdf8] text-slate-950">
      <PitchHero />

      <section className="py-20" aria-label="Pitch presentation sections">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <aside className="top-24 hidden rounded-[2rem] border border-white/80 bg-white/78 p-5 shadow-xl shadow-slate-900/5 backdrop-blur lg:sticky lg:block">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-800">
                Pitch outline
              </p>
              <nav className="mt-5 grid gap-1" aria-label="Pitch sections">
                {pitchSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/30"
                  >
                    {section.eyebrow}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="grid gap-5">
              {pitchSections.map((section, index) => (
                <PitchSectionCard
                  key={section.id}
                  section={section}
                  index={index}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24" aria-labelledby="pitch-final-cta">
        <Container>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100">
              Presentation next step
            </p>
            <h2
              id="pitch-final-cta"
              className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              Walk stakeholders through the demo, then design the pilot safely.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              TruePath AI is ready to communicate the vision, show the MVP demo,
              and start serious conversations with schools, parents, universities,
              and sponsors.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {pitchCtas.map((cta) => {
                const Icon = cta.icon;

                return (
                  <CtaLink
                    key={cta.href}
                    href={cta.href}
                    intent={cta.intent === "primary" ? "light" : "secondary"}
                  >
                    {cta.label}
                    <Icon className="size-4" aria-hidden="true" />
                  </CtaLink>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
