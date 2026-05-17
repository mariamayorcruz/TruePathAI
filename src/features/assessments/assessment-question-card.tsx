import { CheckCircle2 } from "lucide-react";

import { CardContent } from "@/components/ui/card";
import { GradientCard } from "@/components/shared/gradient-card";
import type {
  AssessmentQuestion,
  ChoiceOption,
  VisualCardOption,
} from "@/features/assessments/content";
import { questionTypeLabels } from "@/features/assessments/content";
import { cn } from "@/lib/utils";

type AssessmentQuestionCardProps = {
  question: AssessmentQuestion;
  value: string;
  onChange: (value: string) => void;
};

export function AssessmentQuestionCard({
  question,
  value,
  onChange,
}: AssessmentQuestionCardProps) {
  return (
    <GradientCard className="rounded-[2.5rem] bg-white/85">
      <CardContent className="p-7 sm:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-800">
            {question.dimension}
          </p>
          <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {questionTypeLabels[question.type]}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {question.prompt}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">{question.helper}</p>

        {"scenario" in question ? (
          <div className="mt-6 rounded-3xl border border-sky-100 bg-sky-50/80 p-5 text-base leading-7 text-slate-700">
            {question.scenario}
          </div>
        ) : null}

        {question.type === "reflection-prompt" ? (
          <label className="mt-8 block">
            <span className="sr-only">Reflection response</span>
            <textarea
              value={value}
              onChange={(event) => onChange(event.target.value)}
              placeholder={question.placeholder}
              className="min-h-40 w-full resize-y rounded-3xl border border-slate-200 bg-white/90 p-5 text-base leading-7 text-slate-800 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-3 focus:ring-sky-500/20"
            />
          </label>
        ) : null}

        {question.type === "scenario-choice" ||
        question.type === "preference-choice" ? (
          <ChoiceList
            options={question.options}
            selectedValue={value}
            onSelect={onChange}
          />
        ) : null}

        {question.type === "visual-card-choice" ? (
          <VisualChoiceGrid
            options={question.options}
            selectedValue={value}
            onSelect={onChange}
          />
        ) : null}
      </CardContent>
    </GradientCard>
  );
}

type ChoiceListProps = {
  options: ChoiceOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

function ChoiceList({ options, selectedValue, onSelect }: ChoiceListProps) {
  return (
    <div className="mt-8 grid gap-3" role="radiogroup" aria-label="Answer choices">
      {options.map((option) => {
        const isSelected = selectedValue === option.id;

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            className={cn(
              "flex gap-4 rounded-3xl border p-5 text-left shadow-sm transition focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/30",
              isSelected
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-200 bg-white/80 text-slate-800 hover:bg-white",
            )}
            onClick={() => onSelect(option.id)}
          >
            <CheckCircle2
              className={cn(
                "mt-0.5 size-5 shrink-0",
                isSelected ? "text-cyan-200" : "text-sky-700",
              )}
              aria-hidden="true"
            />
            <span>
              <span className="block font-semibold">{option.label}</span>
              {option.description ? (
                <span
                  className={cn(
                    "mt-1 block text-sm leading-6",
                    isSelected ? "text-slate-200" : "text-slate-600",
                  )}
                >
                  {option.description}
                </span>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

type VisualChoiceGridProps = {
  options: VisualCardOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

function VisualChoiceGrid({
  options,
  selectedValue,
  onSelect,
}: VisualChoiceGridProps) {
  return (
    <div
      className="mt-8 grid gap-4 sm:grid-cols-3"
      role="radiogroup"
      aria-label="Visual-style answer choices"
    >
      {options.map((option) => {
        const isSelected = selectedValue === option.id;

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            className={cn(
              "overflow-hidden rounded-3xl border bg-white text-left shadow-sm transition motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/30",
              isSelected ? "border-slate-950 ring-3 ring-slate-950/10" : "border-slate-200",
            )}
            onClick={() => onSelect(option.id)}
          >
            <div className={cn("h-24 bg-gradient-to-br", option.accent)} />
            <div className="p-5">
              <span className="text-lg font-semibold text-slate-950">
                {option.label}
              </span>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {option.description}
              </p>
              <span
                className={cn(
                  "mt-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                  isSelected
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-700",
                )}
              >
                {isSelected ? "Selected" : "Choose"}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
