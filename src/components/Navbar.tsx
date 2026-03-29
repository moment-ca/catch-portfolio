"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

const NAV_LINKS = [
  { label: "Product", href: "#preview" },
  { label: "Platform", href: "#platform" },
  { label: "Developers", href: "#platform" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-[#30363D] bg-black/95 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-full max-w-360 items-center justify-between px-6 md:px-12">
        <a href="#" className="flex items-center">
          <Image
            src="/hashtag_1.png"
            alt="Catch"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
          />
          <span className="text-2xl font-semibold tracking-tight text-white">
            Catch
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#8B949E] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://apps.apple.com/us/app/catch/id6756760303"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-[#30363D] bg-transparent px-3 py-2 text-white transition-colors hover:border-white hover:bg-white/10"
            aria-label="Download on Apple App Store"
          >
            <Image
              src="/griffin-apple-idea.png"
              alt="Download on the App Store"
              width={135}
              height={40}
              className="h-5 w-auto"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.crazydev0409.catchapp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-[#30363D] bg-transparent px-3 py-2 text-white transition-colors hover:border-white hover:bg-white/10"
            aria-label="Download on Google Play Store"
          >
            <Image
              src="/griffin-playstore-idea.png"
              alt="Download on Google Play"
              width={155}
              height={60}
              className="h-5 w-auto"
            />
          </a>

          <a
            href="#preview"
            className="rounded-sm bg-[#008756] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 top-20 border-b border-[#30363D] bg-black md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#8B949E] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
