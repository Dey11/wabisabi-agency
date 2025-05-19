"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { services } from "@/lib/utils";
import { ServiceType } from "@/lib/utils";
import { getCurrentPosters } from "@/lib/utils";

export default function WorksPage() {
  const [currService, setCurrService] = useState<ServiceType["type"]>("banner");

  const currentPosters = getCurrentPosters(currService);

  return (
    <div className="flex h-auto flex-col gap-4 p-2 pb-5 sm:h-[90svh] sm:gap-6 sm:pt-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <p>102</p>
          <h1 className="text-xl font-semibold sm:text-2xl">
            Explore Our Works
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {services.map((service, idx) => {
            return (
              <button
                key={idx}
                onClick={() =>
                  setCurrService(service.toLowerCase() as ServiceType["type"])
                }
                className={`rounded-md px-2 py-1 text-base transition-colors sm:text-lg ${
                  currService === service.toLowerCase()
                    ? "border bg-[#C7C7C7]/30 text-[#CA2078] hover:bg-[#CA207833]/70 sm:border-none sm:bg-transparent"
                    : "text-secondary-foreground/80 border border-slate-300 hover:bg-[#c7c7c7]/70 sm:border-none sm:bg-transparent"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative w-full overflow-x-hidden py-2">
        <div className="absolute inset-0 z-10 bg-linear-[90deg,white_-3%,transparent_10%,transparent_90%,white_103%,white]" />
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: currentPosters.length * 10,
            ease: "linear",
          }}
        >
          {currentPosters.map((poster, idx) => (
            <img
              key={`first-${idx}`}
              src={poster.src}
              alt={`carousel-${idx}`}
              className="aspect-square h-[35svh] rounded-lg bg-slate-400 object-cover shadow-md sm:h-[50svh]"
            />
          ))}

          {currentPosters.map((poster, idx) => (
            <img
              key={`second-${idx}`}
              src={poster.src}
              alt={`carousel-duplicate-${idx}`}
              className="aspect-square h-[35svh] rounded-lg bg-slate-400 object-cover shadow-md sm:h-[50svh]"
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-4 sm:hidden">
        <h2 className="text-secondary-foreground text-lg leading-relaxed">
          View our creative portfolio
          <span className="font-semibold"> showcasing our best work</span>
        </h2>
      </div>
    </div>
  );
}
