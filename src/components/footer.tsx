"use client";

import Link from "next/link";
import { SOCIALS } from "@/lib/constants";
import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      className="border-border mx-auto mt-12 max-w-[1400px] border-t px-4 py-6 sm:mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex gap-6">
          <Link
            href={SOCIALS.discord}
            className="text-secondary-foreground hover:text-foreground text-sm transition-colors"
          >
            Discord
          </Link>
          <Link
            href={SOCIALS.instagram}
            className="text-secondary-foreground hover:text-foreground text-sm transition-colors"
          >
            Instagram
          </Link>
          <Link
            href={SOCIALS.behance}
            className="text-secondary-foreground hover:text-foreground text-sm transition-colors"
          >
            Behance
          </Link>
        </div>
        <p className="text-secondary-foreground text-xs">
          &copy; 2020&ndash;{new Date().getFullYear()} Wabi Sabi. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
}
