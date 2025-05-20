"use client";

import { Dices } from "lucide-react";
import { useState, useCallback } from "react";

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

  const handleShuffle = useCallback(() => {
    const shuffled = [...allFeedbacks]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    setVisibleFeedbacks(shuffled);
  }, [allFeedbacks]);

  return (
    <div className="grid grid-cols-8 gap-6 p-2 pb-5 lg:grid-cols-20">
      <div className="col-span-8 flex flex-col justify-between pt-10 lg:py-20">
        <div className="flex flex-col gap-2">
          <p>103</p>
          <h1 className="text-2xl font-semibold">Client's feedbacks</h1>
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
            Let's shuffle <Dices className="size-5" />
          </button>
        </div>
      </div>

      <div className="text-secondary-foreground col-span-8 flex flex-col justify-center gap-4 sm:grid sm:grid-cols-2 lg:col-span-12 lg:gap-10 lg:p-10">
        {visibleFeedbacks.map((feedback, idx) => (
          <FeedbackBox
            key={`${feedback.author}-${idx}`}
            author={feedback.author}
            content={feedback.content}
            where={feedback.where}
          />
        ))}
      </div>
      <div className="text-secondary-foreground col-span-8 flex-col gap-8 lg:hidden">
        <h2 className="text-xl leading-relaxed">
          Authentic experiences shared by those{" "}
          <span className="font-semibold">who matter most</span> - our clients
        </h2>

        <button
          onClick={handleShuffle}
          className="hover:bg-accent mt-2 flex w-fit items-center gap-2 rounded-full border-2 px-3 py-1 font-medium transition-colors"
        >
          Let's shuffle <Dices className="size-5" />
        </button>
      </div>
    </div>
  );
}

function FeedbackBox({ author, content, where }: FeedbackBoxProps) {
  return (
    <div className="border-foreground flex cursor-pointer flex-col justify-between gap-4 rounded-2xl border-2 p-4 transition-all duration-150 ease-in-out hover:border hover:shadow-2xl lg:aspect-square">
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
