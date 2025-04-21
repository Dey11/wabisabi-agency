import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-[85dvh] grid-cols-20 gap-6 p-2 pt-5">
      <div className="col-span-9 flex flex-col gap-4">
        <div className="flex grow items-end justify-center rounded-2xl bg-[#EED1E3]">
          <img src="logo.png" alt="Totoro" className="size-60" />
        </div>

        <div className="flex gap-4">
          <div className="flex aspect-square h-auto w-full items-center justify-center rounded-2xl bg-[#FBFBFB]">
            <img src="icons/insta.svg" className="size-10" alt="Instagram" />
          </div>
          <div className="flex aspect-square h-auto w-full items-center justify-center rounded-2xl bg-[#FBFBFB]">
            <img src="icons/behance.svg" className="size-10" alt="Instagram" />
          </div>
          <div className="flex aspect-square h-auto w-full items-center justify-center rounded-2xl bg-[#FBFBFB]">
            <img src="icons/discord.svg" className="size-10" alt="Instagram" />
          </div>
        </div>
      </div>
      <div className="relative col-span-11">
        <Image
          priority
          fill
          src="/hero/poster.png"
          alt="Description"
          className="rounded-2xl object-cover opacity-90"
        />

        <div className="absolute right-10 bottom-10 flex flex-col gap-8 text-end text-white">
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
    </main>
  );
}
