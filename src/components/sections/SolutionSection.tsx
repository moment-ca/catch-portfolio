"use client";

import { motion } from "framer-motion";
import { GlowyWavesHero } from "../glowy-waves-hero-shadcnui";
import DarkGrid from "../dark-grid";
import { SOLUTION_ITEMS } from "@/constants/grid-items";

export function SolutionSection() {
  return (
    <section id="product" className="py-20">
      <div className="mx-auto max-w-360 px-6 md:px-12">
        <DarkGrid items={SOLUTION_ITEMS} gridSpan="[ HOW IT WORKS ]" gridHeading="Built for real-world coordination." />
        <GlowyWavesHero />
      </div>
    </section>
  );
}
