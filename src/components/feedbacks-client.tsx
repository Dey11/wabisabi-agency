"use client";

import { Dices } from "lucide-react";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedCounter } from "./animated-counter";

type FeedbackBoxProps = {
  author: string;
  content: string;
  where: string;
};

interface FeedbacksClientProps {
  initialFeedbacks: FeedbackBoxProps[];
  allFeedbacks: FeedbackBoxProps[];
}

export function FeedbacksClient({
  initialFeedbacks,
  allFeedbacks,
}: FeedbacksClientProps) {
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(initialFeedbacks);
  const [rollKey, setRollKey] = useState(0);
  const [shuffleKey, setShuffleKey] = useState(0);

  const handleShuffle = useCallback(() => {
    setRollKey((prev) => prev + 1);
    setShuffleKey((prev) => prev + 1);
    const shuffled = [...allFeedbacks]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    setVisibleFeedbacks(shuffled);
  }, [allFeedbacks]);

  const diceAnimation = {
    rotate: [0, -20, 180, 340, 360],
    y: [0, -6, 0, -3, 0],
    scale: [1, 1.2, 1.1, 1.15, 1],
  };

  const diceTransition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="grid grid-cols-8 gap-6 p-2 pb-5 lg:grid-cols-20">
      <div className="col-span-8 flex flex-col justify-between pt-10 lg:py-20">
        <div className="flex flex-col gap-2">
          <p>
            <AnimatedCounter value={103} />
          </p>
          <h1 className="text-2xl font-semibold">Client&apos;s feedbacks</h1>
        </div>
        <div className="text-secondary-foreground hidden flex-col gap-8 lg:flex">
          <h2 className="text-2xl leading-relaxed">
            Authentic experiences shared <br />
            by those <span className="font-semibold">
              who matter most
            </span> - <br /> our clients
          </h2>

          <button
            onClick={handleShuffle}
            className="hover:bg-accent flex w-fit items-center gap-2 rounded-full border-2 px-5 py-2 font-medium transition-colors"
          >
            Let&apos;s shuffle{" "}
            <motion.span
              key={rollKey}
              animate={diceAnimation}
              transition={diceTransition}
              className="inline-flex"
            >
              <Dices className="size-5" />
            </motion.span>
          </button>
        </div>
      </div>

      <div className="text-secondary-foreground col-span-8 flex flex-col justify-center gap-4 sm:grid sm:grid-cols-2 lg:col-span-12 lg:gap-10 lg:p-10">
        <AnimatePresence mode="wait">
          {visibleFeedbacks.map((feedback, idx) => (
            <motion.div
              key={`${shuffleKey}-${feedback.author}-${idx}`}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <FeedbackBox
                author={feedback.author}
                content={feedback.content}
                where={feedback.where}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.div
        className="text-secondary-foreground col-span-8 flex-col gap-8 lg:hidden"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl leading-relaxed">
          Authentic experiences shared by those{" "}
          <span className="font-semibold">who matter most</span> - our clients
        </h2>

        <button
          onClick={handleShuffle}
          className="hover:bg-accent mt-2 flex w-fit items-center gap-2 rounded-full border-2 px-3 py-1 font-medium transition-colors"
        >
          Let&apos;s shuffle{" "}
          <motion.span
            key={rollKey}
            animate={diceAnimation}
            transition={diceTransition}
            className="inline-flex"
          >
            <Dices className="size-5" />
          </motion.span>
        </button>
      </motion.div>
    </div>
  );
}

function FeedbackBox({ author, content, where }: FeedbackBoxProps) {
  return (
    <div className="border-foreground flex cursor-pointer flex-col justify-between gap-4 rounded-2xl border-2 p-4 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border hover:shadow-2xl lg:aspect-square">
      <p className="line-clamp-[8] text-sm leading-relaxed">{content}</p>

      <div className="flex items-center justify-end gap-2">
        <p className="font-semibold">@{author}</p>
        <img
          src={where}
          alt={`Feedback from ${author}`}
          className="size-4 rounded-full"
        />
      </div>
    </div>
  );
}
