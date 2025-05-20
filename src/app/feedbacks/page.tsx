"use client";

import { Dices } from "lucide-react";
import { useState, useCallback } from "react";

export default function FeedbacksPage() {
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(() => {
    return [...feedbackArray].sort(() => Math.random() - 0.5).slice(0, 4);
  });

  const handleShuffle = useCallback(() => {
    const shuffled = [...feedbackArray]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    setVisibleFeedbacks(shuffled);
  }, []);

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

type FeedbackBoxProps = {
  author: string;
  content: string;
  where: string;
};

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

const feedbackArray: FeedbackBoxProps[] = [
  {
    content:
      "I've ordered a bunch of new icons for our website redesign and I have to say due to the complexity of the projet it did take a few to come through but the results have so far been worth the wait, and I will continue to order from here our designs, we just love what they do, honestly 5 stars.",
    author: "Salty",
    where: "/icons/discord.svg",
  },
  {
    content:
      "I can definitely say @! Rudraksh R. has done perfecto yet again! Somehow knew exactly what I wanted without me describing what I wanted in full detail. Man really hooked me up! 10/10 definitely buying again",
    author: "Skull",
    where: "/icons/discord.svg",
  },
  {
    content:
      "Once again, they have done it! Perfection with minimal information. As someone with zero imagination, they have done a great job of fulfilling my vision. I couldn't be happier with the logos they've made. I will always choose Wabisabi!",
    author: "Hagge956",
    where: "/icons/discord.svg",
  },
  {
    content:
      "I've had the pleasure of working with @! Rudraksh R. and his team over the past six years. He's done numerous pieces of artwork for my personal and commercial use. His revisioning policies and creative insight allow us to meet our artistic goals each and every time. I'll continue to use WabiSabi moving forward.",
    author: "Triax",
    where: "/icons/discord.svg",
  },
  {
    content:
      "It was an absolute pleasure working with @! Rudraksh R. I came to them with a big idea, unsure if they could bring it to life. After numerous brainstorming sessions and revisions, they turned my vision into exactly what I had imagined. The artist truly went above and beyond to ensure every detail was perfect. I'm giving them a 6/5 rating! Highly recommend their work!",
    author: "BrokenGears",
    where: "/icons/discord.svg",
  },
  {
    content:
      "+rep Extremely professional and allows lots of input along the way. Very involved and makes sure that you are getting exactly what you envisioned. Whether you know exactly what you want or are just starting with a rough idea, this is the place to go.",
    author: "Frost",
    where: "/icons/discord.svg",
  },
  {
    content:
      "Im sure you all will appreciate this beautiful piece of artwork from the artists with Wabi Sabi. This is my Second time having them make some stuff for me, and all i can say is holy crap. The amount of detail put into every piece has always amazed me and i love coming in here to see other peoples commissions, but this one, has to be some of their best work yet! Not their typical rust style, but they nailed it! Exactly what I wanted delivered in a timely manner once again! Worth the wait and an amazing price! @! Rudraksh R. is the best to work with!",
    author: "Hawkzy",
    where: "/icons/discord.svg",
  },
  {
    content:
      "+ Fantastic work, @! Rudraksh R. is the #1 artist to commission for all of your artwork needs, he's very knowledgeable about the process from start to finish, and is also very willing to make adjustments when requested, thanks so much for all the work Rud, your the best!",
    author: "SheriffAlpaca",
    where: "/icons/discord.svg",
  },
  {
    content:
      "This is my first time having a design made up. They were very patient with me. I wasn't sure which avenue to take when it came to having the design made. I had no idea what to expect. But then they allowed me to brain storm for a while. Then, they showed me some examples of designs similar to what I was looking for. I would highly recommend them to anyone and I also would utilize their services again.",
    author: "BoarFather",
    where: "/icons/discord.svg",
  },
  {
    content:
      "What more can you say? When players start messaging you about the new sick artwork before announcing the new art to anyone you know it is top quality!!",
    author: "Bill",
    where: "/icons/discord.svg",
  },
  {
    content:
      "Above Satisfied w/ What They Have Created For My Community, They Devoted Long Hours & Working Closely With Me To Create Unique And Exclusive VIP Images For Our GameServers @ HavocMadness Rust. They Work w/ You To Achieve Your Goals & Make Sure Things Come Out Right! 100% Coming Back & Recommending Them To Others. Compared To Other Rust Illustrators , You Cant Beat The Pricing & Quickly Realize They're Charing A lot Less Than Competitors. Long Review, But Worth The Time. Thanks Wabi Sabi Studios🥶",
    author: "kodakvac",
    where: "/icons/discord.svg",
  },
];
