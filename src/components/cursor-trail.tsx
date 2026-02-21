"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TrailDot {
  x: number;
  y: number;
  id: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop (no touch)
    if (typeof window === "undefined") return;
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setIsVisible(true);
    let idCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newDot: TrailDot = {
        x: e.clientX,
        y: e.clientY,
        id: idCounter++,
      };

      setTrail((prev) => [...prev.slice(-12), newDot]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {trail.map((dot, index) => {
        const size = 4 + (index / trail.length) * 8;
        const opacity = (index / trail.length) * 0.3;
        return (
          <motion.div
            key={dot.id}
            className="bg-foreground absolute rounded-full"
            style={{
              left: dot.x - size / 2,
              top: dot.y - size / 2,
              width: size,
              height: size,
            }}
            initial={{ opacity, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
