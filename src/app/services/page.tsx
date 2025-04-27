"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MoveUpRight } from "lucide-react";

type ServiceType = {
  type: "logo" | "banner" | "vip" | "header";
};

export default function ServicesPage() {
  const [currIdx, setCurrIdx] = useState(0);
  const [currService, setCurrService] = useState<ServiceType["type"]>("logo");

  function handleNext() {
    setCurrIdx((prev) => Math.min(prev + 1, posters.length - 1));
  }

  function handlePrev() {
    setCurrIdx((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div className="grid h-[85dvh] grid-cols-20 gap-6">
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

      <div className="text-secondary-foreground col-span-12 flex flex-col overflow-clip p-10">
        <div className="mb-5 flex items-center gap-3">
          {services.map((service, idx) => {
            return (
              <button
                key={idx}
                onClick={() =>
                  setCurrService(service.toLowerCase() as ServiceType["type"])
                }
                className={`rounded-md px-4 py-1 text-xl transition-colors ${
                  currService === service.toLowerCase()
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
          animate={{ x: `-${currIdx * 60}dvh` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex items-center gap-5 rounded-3xl"
        >
          {posters.map((poster, idx) => {
            return (
              <div
                className={`transition-mask relative aspect-square h-[60dvh] rounded-3xl bg-cover bg-center`}
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
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

const services = ["Banner", "Logo", "VIP Packs", "Header"];

const posters = [
  {
    id: 1,
    src: "/hero/poster.png",
    title: "Punisher",
    type: "Mascot Logo",
    description: "Created by Rudraksh Roy with Adobe Illustrator",
  },
  {
    id: 2,
    src: "/hero/poster2.png",
    title: "Punisher",
    type: "Mascot Logo",
    description: "Created by Rudraksh Roy with Adobe Illustrator",
  },
  {
    id: 3,
    src: "/hero/poster3.png",
    title: "Punisher",
    type: "Mascot Logo",
    description: "Created by Rudraksh Roy with Adobe Illustrator",
  },
  {
    id: 4,
    src: "/hero/poster4.png",
    title: "Punisher",
    type: "Mascot Logo",
    description: "Created by Rudraksh Roy with Adobe Illustrator",
  },
  {
    id: 5,
    src: "/hero/poster5.png",
    title: "Punisher",
    type: "Mascot Logo",
    description: "Created by Rudraksh Roy with Adobe Illustrator",
  },
  {
    id: 6,
    src: "/hero/poster6.png",
    title: "Punisher",
    type: "Mascot Logo",
    description: "Created by Rudraksh Roy with Adobe Illustrator",
  },
];
