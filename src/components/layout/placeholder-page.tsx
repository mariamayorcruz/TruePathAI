import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon: Icon,
}: PlaceholderPageProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.25),transparent_35%),linear-gradient(135deg,#fffdf8,#eef8ff_48%,#f7f2ff)] px-5 py-8 text-slate-950">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl items-center justify-center">
        <Card className="w-full overflow-hidden border-white/80 bg-white/80 shadow-2xl shadow-slate-900/10 backdrop-blur">
          <CardContent className="p-8 sm:p-12">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-10 rounded-full text-slate-600 hover:text-slate-950",
              )}
            >
              <ArrowLeft className="size-4" />
              Back home
            </Link>

            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
                <Icon className="size-7" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                  {eyebrow}
                </p>
                <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  {description}
                </p>
                <p className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm leading-7 text-slate-600">
                  This route is intentionally a placeholder for the MVP foundation. Future
                  work should add real workflows only after the product, privacy, and ethics
                  contracts are defined.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
