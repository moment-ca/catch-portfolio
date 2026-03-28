"use client";

import { motion } from "framer-motion";
import FancyTextHover from "../ui/fancy-text-hover";
import { CallToAction } from "../cta-3";
import DarkGrid from "../dark-grid";
import {WHY_NOW_ITEMS } from "@/constants/grid-items";

export function ProblemSection() {
  return (
    <section id="problem" className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <CallToAction />
        {/* <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold text-white md:text-4xl"
          >
            Time is broken.
          </motion.h2>
          <motion.blockquote
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 space-y-4 text-left text-[#8B949E]"
          >
            <p className="italic">
              &ldquo;Every day, people spend hours trying to coordinate schedules
              across calendars, messages, and booking tools.&rdquo;
            </p>
            <p className="italic">
              &ldquo;Businesses lose revenue from missed appointments and
              inefficient scheduling.&rdquo;
            </p>
            <p className="italic">
              &ldquo;AI systems can automate tasks, but they still cannot coordinate
              real-world timing between people, services, and systems.&rdquo;
            </p>
            <p className="italic">
              &ldquo;Time is the most valuable resource we have — yet it remains one
              of the least structured.&rdquo;
            </p>
          </motion.blockquote>
        </div> */}

        {/* Why Now */}
        <DarkGrid items={WHY_NOW_ITEMS} gridSpan="[ WHY NOW? ]" gridHeading="The world doesn’t need another calendar. It needs a coordination layer." />
      </div>
    </section>
  );
}
