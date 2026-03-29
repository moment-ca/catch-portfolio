"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SCREENSHOTS = [
  { src: "/app-dashboard.png", alt: "Timeline dashboard" },
  { src: "/app-scheduling.png", alt: "Meeting request interface" },
  { src: "/app-platform.png", alt: "Availability graph" },
];

export function ProductPreviewSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const closeExpand = useCallback(() => {
    setExpandedImage(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeExpand();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeExpand]);

  return (
    <section id="preview" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-360 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Product preview
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8B949E]">
            Catch simplifies complex coordination into a single timeline
            interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SCREENSHOTS.map((screenshot) => (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => setExpandedImage(screenshot.src)}
              className="group relative flex min-h-100 cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border border-[#30363D] bg-black text-left transition-colors hover:border-[#A3CB31]/50 focus:outline-none focus:ring-2 focus:ring-[#A3CB31] focus:ring-offset-2 focus:ring-offset-black"
              aria-label={`View ${screenshot.alt} in full size`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-contain transition-transform group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </button>
          ))}
        </motion.div>

        <AnimatePresence>
          {expandedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeExpand}
              className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/95 p-4"
            >
              <div
                className="max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={expandedImage}
                  alt="Expanded screenshot"
                  className="block select-none"
                  draggable={false}
                />
              </div>
              <button
                type="button"
                onClick={closeExpand}
                className="absolute right-4 top-4 rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                aria-label="Close"
              >
                ✕
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
                Scroll to view · Click outside to close
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          id="app-download"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-xl p-8 scroll-mt-24"
        >
          <a
            href="https://apps.apple.com/us/app/catch/id6756760303"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-90"
            aria-label="Download on the App Store"
          >
            <Image
              src="/app-store.png"
              alt="Download on the App Store"
              width={135}
              height={40}
              className="h-12 w-auto"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.crazydev0409.catchapp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-90"
            aria-label="Get it on Google Play"
          >
            <Image
              src="/google-play.png"
              alt="Get it on Google Play"
              width={155}
              height={60}
              className="h-12 w-auto"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
