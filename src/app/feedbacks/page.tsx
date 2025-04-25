import { Dices } from "lucide-react";

export default function FeedbacksPage() {
  return (
    <div className="grid h-[85dvh] grid-cols-20 gap-6">
      <div className="col-span-8 flex flex-col justify-between py-20">
        <div className="flex flex-col gap-2">
          <p>103</p>
          <h1 className="text-2xl font-semibold">Client's feedbacks</h1>
        </div>
        <div className="text-secondary-foreground flex flex-col gap-8">
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
      <div className="text-secondary-foreground col-span-12 grid grid-cols-2 gap-4 p-10">
        {feedbackArray.map((feedback, idx) => (
          <FeedbackBox
            key={idx}
            author={feedback.author}
            content={feedback.content}
            where={feedback.where}
          />
        ))}
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
    <div className="border-foreground flex aspect-square cursor-pointer flex-col justify-between gap-4 rounded-2xl border-2 p-4 transition-all duration-150 ease-in-out hover:border hover:shadow-2xl">
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
