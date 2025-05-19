import { Dices } from "lucide-react";

export default function FeedbacksPage() {
  return (
    <div className="grid grid-cols-8 gap-6 p-2 sm:h-[85dvh] sm:grid-cols-20">
      <div className="col-span-8 flex flex-col justify-between pt-10 sm:py-20">
        <div className="flex flex-col gap-2">
          <p>103</p>
          <h1 className="text-2xl font-semibold">Client's feedbacks</h1>
        </div>
        <div className="text-secondary-foreground hidden flex-col gap-8 sm:flex">
          <h2 className="text-2xl leading-relaxed">
            Authentic experiences shared <br />
            by those <span className="font-semibold">
              who matter most
            </span> - <br /> our clients
          </h2>

          <button className="flex w-fit items-center gap-2 rounded-full border-2 px-5 py-2 font-medium">
            Let's shuffle <Dices className="size-5" />
          </button>
        </div>
      </div>

      <div className="text-secondary-foreground col-span-8 flex flex-col justify-center gap-4 sm:col-span-12 sm:grid sm:grid-cols-1 sm:pt-10 sm:pl-10 lg:grid-cols-2">
        {feedbackArray.map((feedback, idx) => (
          <FeedbackBox
            key={idx}
            author={feedback.author}
            content={feedback.content}
            where={feedback.where}
          />
        ))}
      </div>
      <div className="text-secondary-foreground col-span-8 flex-col gap-8 sm:hidden">
        <h2 className="text-xl leading-relaxed">
          Authentic experiences shared by those{" "}
          <span className="font-semibold">who matter most</span> - our clients
        </h2>

        <button className="mt-2 flex w-fit items-center gap-2 rounded-full border-2 px-3 py-1 font-medium">
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

export function FeedbackBox({ author, content, where }: FeedbackBoxProps) {
  return (
    <div className="border-foreground flex cursor-pointer flex-col justify-between gap-4 rounded-2xl border-2 p-4 transition-all duration-150 ease-in-out hover:border hover:shadow-2xl lg:aspect-square">
      <p>{content}</p>

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
      "Thses guys have great work, trustworthy and relaiable . I would highly recommend them for any type of graphic design . 10/10",
    author: "Rez",
    where: "/icons/discord.svg",
  },
  {
    content:
      "Thses guys have great work, trustworthy and relaiable . I would highly recommend them for any type of graphic design . 10/10",
    author: "Rez",
    where: "/icons/discord.svg",
  },
  {
    content:
      "Thses guys have great work, trustworthy and relaiable . I would highly recommend them for any type of graphic design . 10/10",
    author: "Rez",
    where: "/icons/discord.svg",
  },
  {
    content:
      "Thses guys have great work, trustworthy and relaiable . I would highly recommend them for any type of graphic design . 10/10",
    author: "Rez",
    where: "/icons/discord.svg",
  },
];
