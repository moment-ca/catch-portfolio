"use client";

import { motion } from "framer-motion";

const LOGOS = ["Stripe", "Twilio", "AWS", "Vercel", "Linear"];

export function TrustSection() {
  return (
    <section className="border-y border-[#30363D] py-8">
      <div className="mx-auto max-w-360 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-medium text-white">
            Built with the same principles behind the best developer platforms.
          </h3>
          <p className="mt-2 text-sm text-[#8B949E]">
            Inspired by infrastructure companies that turned complex systems into
            simple developer experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {LOGOS.map((logo, i) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="font-mono text-lg font-medium text-[#8B949E]"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
