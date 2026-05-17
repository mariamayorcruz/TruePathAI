import { CardContent } from "@/components/ui/card";
import { GradientCard } from "@/components/shared/gradient-card";
import type { LucideIcon } from "lucide-react";

type PitchSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: readonly string[];
  icon: LucideIcon;
};

type PitchSectionCardProps = {
  section: PitchSection;
  index: number;
};

export function PitchSectionCard({ section, index }: PitchSectionCardProps) {
  const Icon = section.icon;

  return (
    <GradientCard
      id={section.id}
      className="scroll-mt-24 bg-white/84"
      aria-labelledby={`${section.id}-title`}
    >
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-3xl bg-slate-950 text-white">
            <Icon className="size-7" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-800">
              {String(index + 1).padStart(2, "0")} / {section.eyebrow}
            </p>
            <h2
              id={`${section.id}-title`}
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              {section.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
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
          </div>
        </div>
      </CardContent>
    </GradientCard>
  );
}
