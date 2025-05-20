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
    <div className="grid h-[90lvh] grid-cols-10 gap-6 p-2 pb-5 lg:grid-cols-20">
      <div className="col-span-10 flex flex-col justify-between pt-10 lg:col-span-8 lg:pb-10">
        <div className="flex flex-col gap-2">
          <p>101</p>
          <h1 className="text-2xl font-semibold">Our expertise</h1>
        </div>

        <h2 className="text-secondary-foreground hidden text-2xl leading-relaxed lg:block">
          Creative Solutions <br />
          <span className="font-semibold">
            Tailored To Your <br /> Brand's Vision
          </span>
        </h2>
        <div className="hidden items-center gap-3 text-2xl font-semibold lg:flex">
          <button
            onClick={handlePrev}
            disabled={currIdx === 0}
            className="dark:bg-secondary dark:hover:bg-secondary/70 cursor-pointer rounded-2xl bg-[#FDF2F0] px-4 py-2 hover:bg-[#FDF2F0]/70"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            disabled={currIdx === currentPosters.length - 1}
            className="dark:bg-secondary dark:hover:bg-secondary/70 cursor-pointer rounded-2xl bg-[#FDF2F0] px-4 py-2 hover:bg-[#FDF2F0]/70"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="text-secondary-foreground col-span-10 flex flex-col overflow-clip lg:col-span-12 lg:pt-10 lg:pl-10">
        <div className="mb-5 flex w-full flex-wrap items-center gap-3 sm:gap-5 lg:justify-end">
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
                className={`cursor-pointer rounded-lg px-2 py-1 transition-colors lg:text-xl ${
                  currService === serviceType
                    ? "dark:text-primary dark:bg-foreground dark:hover:bg-foreground/70 bg-[#C7C7C7]/30 text-[#CA2078] hover:bg-[#CA207833]/70 lg:bg-[#CA207833]"
                    : "text-secondary-foreground/80 lg:dark:text-secondary border border-slate-300 hover:bg-[#c7c7c7]/70 lg:border-0 lg:bg-[#C7C7C7]"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
        <motion.div
          animate={{ x: `-${currIdx * 68}lvh` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="hidden items-center gap-5 rounded-3xl lg:flex"
        >
          {currentPosters.length > 0 ? (
            currentPosters.map((poster) => (
              <div
                className="relative aspect-square h-[70lvh] rounded-3xl bg-cover bg-center transition-all delay-75 duration-75 ease-in"
                style={{
                  backgroundImage: `url(${poster.src})`,
                }}
                key={poster.id}
              >
                <div className="group absolute inset-0 z-10 rounded-3xl bg-gradient-to-b from-transparent from-30% to-180% transition-colors delay-100 hover:bg-gradient-to-b hover:to-black">
                  <div className="absolute top-5 right-5">
                    <MoveUpRight className="size-8 rounded-full border border-white bg-white p-2 opacity-0 transition-all delay-100 group-hover:opacity-100 dark:border-black dark:text-black" />
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
            <div className="flex h-[60lvh] items-center justify-center">
              <p>No images available for this service</p>
            </div>
          )}
        </motion.div>
        <motion.div
          animate={{ x: `-${currIdx * 43}lvh` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center gap-5 rounded-3xl lg:hidden"
        >
          {currentPosters.length > 0 ? (
            currentPosters.map((poster) => (
              <div
                className="relative aspect-square h-[40lvh] rounded-3xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${poster.src})`,
                }}
                key={poster.id}
              >
                <div className="group absolute inset-0 z-10 rounded-3xl bg-gradient-to-b from-transparent from-30% to-black to-180% transition-colors delay-100">
                  <div className="absolute top-5 right-5">
                    <MoveUpRight className="size-8 rounded-full border border-white bg-white p-2 transition-all delay-100" />
                  </div>
                  <div className="absolute bottom-0 max-w-sm rounded-3xl p-5 text-white transition-all delay-100">
                    <p className="font-bold">{poster.title}</p>
                    <p className="font-bold">{poster.type}</p>
                    <p>{poster.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-[40lvh] items-center justify-center lg:h-[60lvh]">
              <p>No images available for this service</p>
            </div>
          )}
        </motion.div>
      </div>
      <div className="col-span-10 flex items-center justify-end gap-5 text-2xl font-semibold lg:hidden">
        <button
          onClick={handlePrev}
          className="dark:bg-secondary dark:hover:bg-secondary/70 cursor-pointer rounded-2xl bg-[#FDF2F0] px-4 py-2 hover:bg-[#FDF2F0]/70"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="dark:bg-secondary dark:hover:bg-secondary/70 cursor-pointer rounded-2xl bg-[#FDF2F0] px-4 py-2 hover:bg-[#FDF2F0]/70"
        >
          {">"}
        </button>
      </div>

      <div className="col-span-10 pb-5">
        <h2 className="text-secondary-foreground text-lg leading-relaxed lg:hidden">
          Creative Solutions
          <span className="font-semibold">
            {" "}
            Tailored To Your Brand's Vision
          </span>
        </h2>
      </div>
    </div>
  );
}
