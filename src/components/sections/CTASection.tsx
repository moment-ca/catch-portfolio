"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function CTASection() {
  const [phone, setPhone] = useState("");
  const [useCase, setUseCase] = useState("");

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#161B22] to-black" />
      <div className="relative mx-auto max-w-360 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Join the future of coordination.
          </h2>
          <p className="mt-6 text-lg text-[#8B949E]">
            Catch is currently in early development. Sign up to get early access
            and help shape the next layer of digital infrastructure.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-lg border border-[#30363D] bg-black px-3 py-2.5 text-sm text-white placeholder:text-[#8B949E] focus:border-[#A3CB31] focus:outline-none focus:ring-1 focus:ring-[#A3CB31] sm:min-w-40"
            />
            <input
              type="text"
              placeholder="How will you use Catch?"
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="rounded-lg border border-[#30363D] bg-black px-3 py-2.5 text-sm text-white placeholder:text-[#8B949E] focus:border-[#A3CB31] focus:outline-none focus:ring-1 focus:ring-[#A3CB31] sm:min-w-40"
            />
            <button
              type="submit"
              className="rounded-sm bg-[#008756] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Request Access
            </button>
          </form>

          <p className="mt-6 text-sm text-[#8B949E]">
            Or reach out directly:{" "}
            <a
              href="mailto:support@catchapp.ca"
              className="text-[#A3CB31] hover:underline"
            >
              support@catchapp.ca
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
