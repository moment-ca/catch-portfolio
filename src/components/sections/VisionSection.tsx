"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function VisionSection() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-360 px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Infrastructure for coordinated action.
            </h2>
            <p className="mt-6 text-[#8B949E]">
              Payment infrastructure made online commerce possible. Coordination infrastructure will do the same for autonomous systems and intelligent services.
            </p>
            <p className="mt-4 text-[#8B949E]">
              Catch builds the world’s first availability graph, turning fragmented schedules into coordinated action across people, businesses, and intelligent systems.
            </p>
            {/* <p className="mt-6 font-medium text-white">
              When something needs to happen — Catch decides when.
            </p> */}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video overflow-hidden rounded-xl"
          >
            <Image
              src="/slide-vision.png"
              alt="Catch vision - the default time layer"
              fill
              className="object-contain"
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
