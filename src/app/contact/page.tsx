import { SOCIALS } from "@/lib/constants";
import { Allura } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ContactPage() {
  return (
    <div className="grid grid-cols-10 gap-6 p-2 pb-5 lg:h-[90svh] lg:grid-cols-20">
      <div className="col-span-10 flex flex-col justify-between pt-10">
        <div className="flex flex-col gap-2">
          <p>104</p>
          <h1 className="text-2xl font-semibold">Let's meet out Founder</h1>
        </div>

        <h2
          className={`${allura.className} text-secondary-foreground hidden text-5xl leading-relaxed font-bold lg:block`}
        >
          Rudraksh Roy
        </h2>

        <p className="hidden lg:block">
          With over 5 years of experience, our agency has grown into a trusted
          partner for brands seeking exceptional design solutions.
        </p>

        <div className="hidden flex-col gap-10 lg:flex">
          <h3 className="text-secondary-foreground text-xl font-semibold">
            Follow us on
          </h3>

          <div className="flex gap-4">
            <Link href={SOCIALS.discord}>
              <div className="relative flex size-36 flex-col justify-end overflow-hidden rounded-3xl bg-[#B7D4FF] p-4">
                <img
                  src="/contact/discord.svg"
                  alt="discord"
                  className="absolute top-0 -right-2 size-20"
                />
                <p className="text-lg font-medium text-[#3070CF]">Discord</p>
              </div>
            </Link>
            <Link href={SOCIALS.instagram}>
              <div className="relative flex size-36 flex-col justify-end overflow-hidden rounded-3xl bg-[#FFA9ED] p-4">
                <img
                  src="/contact/instagram.svg"
                  alt="instagram"
                  className="absolute top-0 -right-2 size-20"
                />
                <p className="text-lg font-medium text-[#CA2078]">Instagram</p>
              </div>
            </Link>
            <Link href={SOCIALS.behance}>
              <div className="relative flex size-36 flex-col justify-end overflow-hidden rounded-3xl bg-[#C7D7FF] p-4">
                <img
                  src="/contact/behance.svg"
                  alt="behance"
                  className="absolute top-0 -right-1 size-20"
                />
                <p className="text-lg font-medium text-[#527FEE]">Behance</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative col-span-10 flex justify-end overflow-hidden px-10 lg:px-0 lg:pt-10">
        <Image
          src="/rudrakshpic.jpg"
          alt="rudraksh"
          width={380}
          height={200}
          priority
          className="mx-auto rounded-t-3xl rounded-b-3xl object-cover lg:absolute lg:-bottom-1/4 lg:mx-0 lg:rounded-b-none"
        />
      </div>

      <div className="col-span-10 flex flex-col gap-2 lg:hidden">
        <h2
          className={`${allura.className} text-secondary-foreground text-5xl leading-relaxed font-bold`}
        >
          Rudraksh Roy
        </h2>

        <p className="">
          With over 5 years of experience, our agency has grown into a trusted
          partner for brands seeking exceptional design solutions.
        </p>

        <div className="pt-5">
          <h3 className="text-secondary-foreground pb-5 text-xl font-semibold">
            Follow us on
          </h3>

          <div className="flex gap-4">
            <Link href={SOCIALS.discord}>
              <div className="relative flex size-20 flex-col justify-end overflow-hidden rounded-2xl bg-[#B7D4FF] p-4">
                <img
                  src="/contact/discord.svg"
                  alt="discord"
                  className="absolute top-0 -right-2 size-12"
                />
                <p className="text-xs font-medium text-[#3070CF]">Discord</p>
              </div>
            </Link>
            <Link href={SOCIALS.instagram}>
              <div className="relative flex size-20 flex-col justify-end overflow-hidden rounded-2xl bg-[#FFA9ED] p-4">
                <img
                  src="/contact/instagram.svg"
                  alt="instagram"
                  className="absolute top-0 -right-2 size-12"
                />
                <p className="text-xs font-medium text-[#CA2078]">Instagram</p>
              </div>
            </Link>
            <Link href={SOCIALS.behance}>
              <div className="relative flex size-20 flex-col justify-end overflow-hidden rounded-2xl bg-[#C7D7FF] p-4">
                <img
                  src="/contact/behance.svg"
                  alt="behance"
                  className="absolute top-0 -right-1 size-12"
                />
                <p className="text-xs font-medium text-[#527FEE]">Behance</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
