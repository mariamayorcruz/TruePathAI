import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  intent?: "primary" | "secondary" | "light";
};

export function CtaLink({
  className,
  intent = "primary",
  ...props
}: CtaLinkProps) {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: intent === "secondary" ? "outline" : "default",
          size: "lg",
        }),
        "h-14 rounded-full px-7 text-base shadow-lg transition-transform motion-safe:hover:-translate-y-0.5",
        intent === "primary" &&
          "bg-slate-950 text-white shadow-slate-950/20 hover:bg-slate-800",
        intent === "secondary" &&
          "border-slate-300 bg-white/80 text-slate-800 shadow-slate-900/5 backdrop-blur hover:bg-white",
        intent === "light" &&
          "bg-white text-slate-950 shadow-slate-950/20 hover:bg-cyan-50",
        className,
      )}
      {...props}
    />
  );
}
