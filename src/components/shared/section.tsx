import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "light" | "dark";
};

export function Section({ className, tone = "light", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-24",
        tone === "dark" && "bg-slate-950 text-white",
        className,
      )}
      {...props}
    />
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Badge
          className={cn(
            "rounded-full px-4 py-2",
            inverse
              ? "border-white/10 bg-white/10 text-cyan-100"
              : "bg-sky-50 text-sky-800",
          )}
        >
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "mt-6 text-4xl font-semibold tracking-tight sm:text-6xl",
          inverse ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 text-lg leading-8",
            inverse ? "text-slate-300" : "text-slate-700",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
