import { SOCIALS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-6 gap-4 p-2 py-5 sm:h-[85svh] sm:grid-cols-20 sm:gap-6">
      <div className="order-2 col-span-6 flex flex-row-reverse gap-4 sm:order-1 sm:col-span-9 sm:flex-col">
        <div className="flex items-end justify-center rounded-2xl bg-[#EED1E3] sm:grow">
          <img
            src="totoro.png"
            alt="Totoro"
            className="size-[60svw] rounded-2xl sm:size-[25svw] sm:rounded-none"
          />
        </div>

        <div className="flex grow flex-col justify-between gap-4 sm:grow-0 sm:flex-row">
          <Link
            href={SOCIALS.instagram}
            className="dark:bg-secondary flex aspect-square h-auto w-full items-center justify-center rounded-2xl bg-[#FBFBFB]"
          >
            <img
              src="icons/insta.svg"
              className="size-10 dark:hidden"
              alt="Instagram"
            />
            <img
              src="icons/dark/insta.svg"
              className="hidden size-10 dark:block"
              alt="Instagram"
            />
          </Link>
          <Link
            href={SOCIALS.behance}
            className="dark:bg-secondary flex aspect-square h-auto w-full items-center justify-center rounded-2xl bg-[#FBFBFB]"
          >
            <img
              src="icons/behance.svg"
              className="size-10 dark:hidden"
              alt="Instagram"
            />
            <img
              src="icons/dark/behance.svg"
              className="hidden size-10 dark:block"
              alt="Instagram"
            />
          </Link>
          <Link
            href={SOCIALS.discord}
            className="dark:bg-secondary flex aspect-square h-auto w-full items-center justify-center rounded-2xl bg-[#FBFBFB]"
          >
            <img
              src="icons/discord.svg"
              className="size-10 dark:hidden"
              alt="Instagram"
            />
            <img
              src="icons/dark/discord.svg"
              className="hidden size-10 dark:block"
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
      <div className="relative order-1 col-span-6 h-[30svh] sm:order-2 sm:col-span-11 sm:h-auto">
        <Image
          priority
          fill
          src="/hero/poster2.png"
          alt="Description"
          className="rounded-2xl object-cover opacity-90"
        />
        <div className="absolute inset-x-0 bottom-0 hidden flex-col gap-8 rounded-b-xl bg-black/40 pt-5 pr-10 pb-10 text-end text-white sm:flex">
          <h3 className="text-4xl font-semibold">
            Transforming Ideas Into <br />
            Stunning Designs
          </h3>

          <p className="text-xl font-normal">
            Empowering brands with creativity,
            <br />
            innovation, and visual storytelling
          </p>
        </div>
      </div>
      <div className="text-secondary-foreground order-3 col-span-6 h-fit sm:hidden">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-semibold">
            Transforming Ideas Into Stunning Designs
          </h3>

          <p className="text-xl font-normal">
            Empowering brands with creativity, innovation, and visual
            storytelling
          </p>
        </div>
      </div>
    </div>
  );
}
