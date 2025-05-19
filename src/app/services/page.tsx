"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MoveUpRight } from "lucide-react";
import { getCurrentPosters, ServiceType, services } from "@/lib/utils";

export default function ServicesPage() {
  const [currIdx, setCurrIdx] = useState(0);
  const [currService, setCurrService] = useState<ServiceType["type"]>("banner");

  const currentPosters = getCurrentPosters(currService);

  function handleNext() {
    setCurrIdx((prev) => Math.min(prev + 1, currentPosters.length - 1));
  }

  function handlePrev() {
    setCurrIdx((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div className="grid h-[90svh] grid-cols-20 gap-6 pb-5">
      <div className="col-span-8 flex flex-col justify-between pt-10 pb-20">
        <div className="flex flex-col gap-2">
          <p>101</p>
          <h1 className="text-2xl font-semibold">Our expertise</h1>
        </div>

        <h2 className="text-secondary-foreground text-2xl leading-relaxed">
          Creative Solutions <br />
          <span className="font-semibold">
            Tailored To Your <br /> Brand's Vision
          </span>
        </h2>
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <button
            onClick={handlePrev}
            className="cursor-pointer rounded-2xl bg-[#FDF2F0] px-4 py-2"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer rounded-2xl bg-[#FDF2F0] px-4 py-2"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="text-secondary-foreground col-span-12 flex flex-col overflow-clip pt-10 pl-10">
        <div className="mb-5 flex w-full items-center justify-end gap-5">
          {services.map((service, idx) => {
            const serviceType = service
              .toLowerCase()
              .replace(" ", "") as ServiceType["type"];
            return (
              <button
                key={idx}
                onClick={() => {
                  setCurrService(serviceType);
                  setCurrIdx(0);
                }}
                className={`rounded-md px-4 py-1 text-xl transition-colors ${
                  currService === serviceType
                    ? "bg-[#CA207833] text-[#CA2078] hover:bg-[#CA207833]/70"
                    : "bg-[#C7C7C7] hover:bg-[#c7c7c7]/70"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
        <motion.div
          animate={{ x: `-${currIdx * 60}svh` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center gap-5 rounded-3xl"
        >
          {currentPosters.length > 0 ? (
            currentPosters.map((poster) => (
              <div
                className="relative aspect-square h-[60svh] rounded-3xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${poster.src})`,
                }}
                key={poster.id}
              >
                <div className="group absolute inset-0 z-10 rounded-3xl bg-gradient-to-b from-transparent from-30% to-180% transition-colors delay-100 hover:bg-gradient-to-b hover:to-white">
                  <div className="absolute top-5 right-5">
                    <MoveUpRight className="size-8 rounded-full border border-white bg-white p-2 opacity-0 transition-all delay-100 group-hover:opacity-100" />
                  </div>
                  <div className="absolute bottom-0 max-w-sm rounded-3xl p-5 text-white opacity-0 transition-all delay-100 group-hover:opacity-100">
                    <p className="font-bold">{poster.title}</p>
                    <p className="font-bold">{poster.type}</p>
                    <p>{poster.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-[60svh] items-center justify-center">
              <p>No images available for this service</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
