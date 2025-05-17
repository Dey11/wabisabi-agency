"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MoveUpRight } from "lucide-react";
import { services } from "@/lib/utils";
import { ServiceType } from "@/lib/utils";
import { getCurrentPosters } from "@/lib/utils";

export default function WorksPage() {
  const [currService, setCurrService] = useState<ServiceType["type"]>("banner");
  const [currIdx, setCurrIdx] = useState(0);

  const currentPosters = getCurrentPosters(currService);

  return (
    <div className="flex h-[85dvh] flex-col gap-6 pt-20 pb-10">
      <div className="flex items-end justify-between gap-2">
        <div className="flex flex-col gap-2">
          <p>102</p>
          <h1 className="text-2xl font-semibold">Explore Our Works</h1>
        </div>

        <div className="flex items-center gap-5">
          {services.map((service, idx) => {
            return (
              <button
                key={idx}
                onClick={() =>
                  setCurrService(service.toLowerCase() as ServiceType["type"])
                }
                className={`text-lg ${
                  currService === service.toLowerCase()
                    ? "text-foreground hover:text-foreground/80 font-medium"
                    : "hover:text-secondary-foreground/80 text-secondary-foreground"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative w-full overflow-x-hidden py-2">
        <div className="absolute inset-0 z-10 bg-linear-[90deg,white_0%,transparent_10%,transparent_90%,white_100%,white]" />
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {currentPosters.map((poster, idx) => (
            <img
              key={`first-${idx}`}
              src={poster.src}
              alt={`carousel-${idx}`}
              className="aspect-square h-[50dvh] rounded-lg bg-slate-400 object-cover shadow-md"
            />
          ))}

          {currentPosters.map((poster, idx) => (
            <img
              key={`second-${idx}`}
              src={poster.src}
              alt={`carousel-duplicate-${idx}`}
              className="aspect-square h-[50dvh] rounded-lg bg-slate-400 object-cover shadow-md"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
