import type { ComponentPropsWithoutRef } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type GradientCardProps = ComponentPropsWithoutRef<typeof Card> & {
  variant?: "glass" | "soft" | "dark";
};

export function GradientCard({
  className,
  variant = "glass",
  ...props
}: GradientCardProps) {
  return (
    <Card
      className={cn(
        "rounded-[2rem] p-3 shadow-xl shadow-slate-900/5",
        variant === "glass" && "border-white/80 bg-white/80 backdrop-blur",
        variant === "soft" &&
          "border-slate-200/80 bg-gradient-to-br from-white to-sky-50/70",
        variant === "dark" &&
          "border-white/10 bg-white/[0.06] text-white shadow-slate-950/20",
        className,
      )}
      {...props}
    />
  );
}
