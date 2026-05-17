"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { assessmentPrinciples, explorationDimensions } from "@/features/assessments/domain";
import { aiReadinessPrinciples } from "@/features/ai/principles";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const audiences = [
  {
    id: "students",
    title: "For students",
    description:
      "A safe place to notice strengths, explore identity, and build confidence without pressure to have everything figured out.",
    icon: Sparkles,
    accent: "from-sky-400 to-cyan-300",
  },
  {
    id: "parents",
    title: "For parents",
    description:
      "Supportive language that helps families understand growth, curiosity, emotions, and future possibilities together.",
    icon: HeartHandshake,
    accent: "from-rose-300 to-orange-300",
  },
  {
    id: "schools",
    title: "For schools",
    description:
      "A scalable foundation for advisory, wellbeing, and future-readiness programs grounded in ethical student development.",
    icon: GraduationCap,
    accent: "from-violet-400 to-indigo-300",
  },
] as const;

const platformPillars = [
  {
    title: "Explore strengths",
    description:
      "Reflection-led experiences help students identify patterns in energy, creativity, learning, and contribution.",
    icon: Lightbulb,
  },
  {
    title: "Grow emotional insight",
    description:
      "Prompts normalize uncertainty, support language for feelings, and encourage thoughtful communication.",
    icon: MessageCircleHeart,
  },
  {
    title: "Imagine possibilities",
    description:
      "Students can connect interests to many possible futures without being assigned a single track.",
    icon: Brain,
  },
] as const;

export function LandingPage() {
  return (
    <main className="overflow-hidden bg-[#fffdf8] text-slate-950">
      <section className="relative min-h-screen px-5 pt-32 sm:px-8 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(125,211,252,0.38),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(196,181,253,0.35),transparent_32%),linear-gradient(135deg,#fffdf8_0%,#eef8ff_46%,#faf5ff_100%)]" />
        <div className="absolute left-1/2 top-28 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <Badge className="rounded-full border-sky-200 bg-white/70 px-4 py-2 text-sky-700 shadow-sm backdrop-blur">
                Ethical AI for youth self-discovery
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-8xl"
            >
              Every student has potential.
              <span className="block text-transparent [background:linear-gradient(110deg,#0f172a,#0284c7,#7c3aed)] bg-clip-text">
                Not every student has discovered it yet.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9"
            >
              TruePath AI helps students explore their strengths, personality,
              learning style, and future possibilities through ethical AI-powered
              self-discovery.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/onboarding"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 rounded-full bg-slate-950 px-7 text-base text-white shadow-2xl shadow-slate-950/20 hover:bg-slate-800",
                )}
              >
                Begin Exploration
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#ethics"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-14 rounded-full border-white/80 bg-white/70 px-7 text-base text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur hover:bg-white",
                )}
              >
                See our ethics
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-white/35 blur-2xl" />
            <Card className="rounded-[2.5rem] border-white/80 bg-white/72 p-3 shadow-2xl shadow-slate-900/12 backdrop-blur-2xl">
              <CardContent className="p-4 sm:p-6">
                <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-cyan-100">Discovery space</p>
                    <ShieldCheck className="size-5 text-cyan-200" />
                  </div>
                  <div className="mt-12">
                    <p className="text-sm text-slate-300">Today&apos;s reflection</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                      What gives you energy when you learn something new?
                    </h2>
                  </div>
                  <div className="mt-8 grid gap-3">
                    {["Creating ideas", "Helping people", "Solving puzzles"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-100 backdrop-blur"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {["No labels", "Many talents", "Student agency"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Badge className="rounded-full bg-sky-50 px-4 py-2 text-sky-700">
              Built for the whole ecosystem
            </Badge>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              Self-discovery should feel supportive, not deterministic.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <Card
                  id={audience.id}
                  key={audience.id}
                  className="rounded-[2rem] border-slate-200/80 bg-white/80 p-3 shadow-xl shadow-slate-900/5"
                >
                  <CardHeader className="gap-4 p-5">
                    <div
                      className={cn(
                        "flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                        audience.accent,
                      )}
                    >
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-2xl font-semibold tracking-tight">
                      {audience.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-slate-600">
                      {audience.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {platformPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <Card
                  key={pillar.title}
                  className="rounded-[2rem] border-slate-200/80 bg-gradient-to-br from-white to-sky-50/70 p-3 shadow-xl shadow-slate-900/5"
                >
                  <CardHeader className="p-5">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="mt-4 text-xl font-semibold">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-slate-600">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge className="rounded-full border-white/10 bg-white/10 px-4 py-2 text-cyan-100">
              Exploration dimensions
            </Badge>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              A modern map for human development.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              TruePath begins with language students can grow with: flexible,
              validating, and open-ended by design.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {explorationDimensions.map((dimension) => (
              <div
                key={dimension}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-lg font-medium text-slate-100"
              >
                {dimension}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ethics" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <Badge className="rounded-full bg-violet-50 px-4 py-2 text-violet-700">
                Ethical positioning
              </Badge>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
                AI should make students feel more human, not more measured.
              </h2>
            </div>

            <div className="grid gap-4">
              {assessmentPrinciples.map((principle, index) => (
                <Card
                  key={principle}
                  className="rounded-3xl border-slate-200/80 bg-white/80 p-2 shadow-lg shadow-slate-900/5"
                >
                  <CardContent className="flex gap-5 p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <p className="text-lg leading-8 text-slate-700">{principle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-16 bg-slate-200" />

          <div className="grid gap-5 md:grid-cols-3">
            {aiReadinessPrinciples.map((principle) => (
              <Card key={principle.title} className="rounded-3xl bg-slate-50/80 p-3">
                <CardHeader className="p-5">
                  <Users className="size-6 text-sky-700" />
                  <CardTitle className="mt-4 text-xl font-semibold">
                    {principle.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-slate-600">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-14">
          <div className="max-w-3xl">
            <Badge className="rounded-full border-white/10 bg-white/10 px-4 py-2 text-cyan-100">
              Start gently
            </Badge>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              Help every student begin with curiosity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              The first TruePath AI experience is an exploration, not a verdict.
              Students begin by noticing what is already within them.
            </p>
            <Link
              href="/onboarding"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-9 h-14 rounded-full bg-white px-7 text-base text-slate-950 hover:bg-cyan-50",
              )}
            >
              Begin Exploration
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
