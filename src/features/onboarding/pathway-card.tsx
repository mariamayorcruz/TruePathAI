import type { LucideIcon } from "lucide-react";

import type { OnboardingPathwayId } from "@/features/onboarding/content";
import { cn } from "@/lib/utils";

type Pathway = {
  id: string;
  ageRange: string;
  phase: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
};

type PathwayCardProps = {
  pathway: Pathway;
  isSelected: boolean;
  labels: {
    choose: string;
    selected: string;
    agePrefix: string;
  };
  onSelect: (pathwayId: OnboardingPathwayId) => void;
};

export function PathwayCard({
  pathway,
  isSelected,
  labels,
  onSelect,
}: PathwayCardProps) {
  const Icon = pathway.icon;

  return (
    <button
      type="button"
      className={cn(
        "group rounded-[2rem] border bg-white/78 p-5 text-left shadow-xl shadow-slate-900/5 backdrop-blur transition motion-safe:hover:-translate-y-1",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/35",
        isSelected
          ? "border-slate-950 ring-3 ring-slate-950/10"
          : "border-white/80 hover:border-sky-200",
      )}
      aria-pressed={isSelected}
      onClick={() => onSelect(pathway.id as OnboardingPathwayId)}
    >
      <div
        className={cn(
          "flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
          pathway.tone,
        )}
      >
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-sky-800">
        {labels.agePrefix} {pathway.ageRange}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {pathway.phase}
      </h3>
      <p className="mt-2 text-base font-medium text-slate-700">{pathway.title}</p>
      <p className="mt-4 text-sm leading-7 text-slate-700">{pathway.description}</p>
      <span
        className={cn(
          "mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold",
          isSelected
            ? "bg-slate-950 text-white"
            : "bg-slate-100 text-slate-700 group-hover:bg-sky-100",
        )}
      >
        {isSelected ? labels.selected : labels.choose}
      </span>
    </button>
  );
}
