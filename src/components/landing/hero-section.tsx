"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { CtaLink } from "@/components/shared/cta-link";
import { ExplorationVisual } from "@/components/landing/exploration-visual";
import { heroSafetySignals } from "@/components/landing/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen pt-32 lg:pt-40"
      aria-labelledby="landing-hero-title"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(125,211,252,0.38),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(196,181,253,0.35),transparent_32%),linear-gradient(135deg,#fffdf8_0%,#eef8ff_46%,#faf5ff_100%)]" />
      <div className="absolute left-1/2 top-28 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/35 blur-3xl" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          transition={reduceMotion ? undefined : { staggerChildren: 0.12 }}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <Badge className="rounded-full border-sky-200 bg-white/80 px-4 py-2 text-sky-800 shadow-sm backdrop-blur">
              Ethical AI for youth self-discovery
            </Badge>
          </motion.div>

          <motion.h1
            id="landing-hero-title"
            variants={fadeUp}
            className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-7xl lg:text-8xl"
          >
            Every student has potential.
            <span className="block text-transparent [background:linear-gradient(110deg,#0f172a,#0369a1,#6d28d9)] bg-clip-text">
              Not every student has discovered it yet.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9"
          >
            TruePath AI helps students explore their strengths, personality,
            learning style, and future possibilities through ethical AI-powered
            self-discovery.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <CtaLink href="/onboarding">
              Begin Exploration
              <ArrowRight className="size-4" />
            </CtaLink>
            <CtaLink href="#ethics" intent="secondary">
              See our ethics
            </CtaLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.7, ease: "easeOut" }}
          className="relative"
          aria-label="Preview of a student reflection card"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-white/35 blur-2xl" />
          <Card className="rounded-[2.5rem] border-white/80 bg-white/75 p-3 shadow-2xl shadow-slate-900/12 backdrop-blur-2xl">
            <CardContent className="p-4 sm:p-6">
              <ExplorationVisual />

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {heroSafetySignals.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 text-sm font-medium text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
