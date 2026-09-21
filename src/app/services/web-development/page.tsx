"use client";

import Image from "next/image";
import Link from "next/link";
import { Bot, Check, LaptopMinimal } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import { useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { SOCIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "300",
  style: "italic",
});

type ServiceId = "web" | "app" | "bot";

type Service = {
  id: ServiceId;
  tabLabel: string;
  delivery: string;
  title: string;
  scriptTitle: string;
  audience: string;
  price: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    id: "web",
    tabLabel: "Web Development Service",
    delivery: "7–10 Days Delivery",
    title: "Website",
    scriptTitle: "Design & Development",
    audience: "Landing pages, portfolios, small business sites",
    price: "Starting at $349",
    benefits: [
      "Mobile responsiveness.",
      "Upload-ready files or deployment.",
      "Better user experience",
    ],
    image: "/services/web-development.png",
    imageAlt: "Website design and development portfolio mockups",
    icon: LaptopMinimal,
  },
  {
    id: "app",
    tabLabel: "App Development",
    delivery: "10–15 Days Delivery",
    title: "App",
    scriptTitle: "Development",
    audience: "Startups, MVPs, business tools",
    price: "Starting at $599",
    benefits: [
      "Working prototype of the app",
      "Source code & build files",
      "API integration if needed",
    ],
    image: "/services/app-development.png",
    imageAlt: "EatWise mobile application mockups",
    icon: AppDevelopmentIcon,
  },
  {
    id: "bot",
    tabLabel: "Bot Development",
    delivery: "5–7 Days Delivery",
    title: "Discord Bot",
    scriptTitle: "Development",
    audience: "Community servers, automation, and interactivity",
    price: "Starting at $199",
    benefits: [
      "A fully functional, tested Discord bot",
      "Hosting & setup guide",
      "Easy-to-use command structure",
    ],
    image: "/services/bot-development.png",
    imageAlt: "Three-dimensional Discord logo",
    icon: Bot,
  },
];

export default function WebDevelopmentPage() {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>("web");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeService =
    services.find((service) => service.id === activeServiceId) ?? services[0];
  const ActiveIcon = activeService.icon;

  function selectTab(index: number) {
    const service = services[index];
    if (!service) return;

    setActiveServiceId(service.id);
    tabRefs.current[index]?.focus();
  }

  function handleTabKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();

    if (event.key === "Home") return selectTab(0);
    if (event.key === "End") return selectTab(services.length - 1);

    const direction = event.key === "ArrowRight" ? 1 : -1;
    selectTab((index + direction + services.length) % services.length);
  }

  return (
    <main className="px-2 pt-10 pb-5 sm:pt-14 lg:pt-6 xl:[@media(min-height:980px)]:pt-[100px]">
      <section className="mx-auto max-w-[1276px]">
        <div className="grid lg:min-h-[100px] lg:grid-cols-[49%_51%] xl:[@media(min-height:980px)]:min-h-[136px]">
          <div className="pb-8 lg:pb-0 xl:[@media(min-height:980px)]:pt-1">
            <h1 className="text-foreground text-2xl font-semibold">
              What you want to build
              <br />
              with us?
            </h1>
          </div>

          <div className="bg-muted overflow-hidden rounded-t-[20px] p-4 sm:p-6 lg:self-end lg:px-4 lg:pt-4 lg:pb-3 xl:[@media(min-height:980px)]:px-6 xl:[@media(min-height:980px)]:pt-6 xl:[@media(min-height:980px)]:pb-4">
            <div
              role="tablist"
              aria-label="Development services"
              className="flex gap-3 overflow-x-auto [scrollbar-width:none] lg:grid lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-2 [&::-webkit-scrollbar]:hidden xl:[@media(min-height:980px)]:gap-4"
            >
              {services.map((service, index) => (
                <button
                  key={service.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  id={`service-tab-${service.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeServiceId === service.id}
                  aria-controls="service-panel"
                  tabIndex={activeServiceId === service.id ? 0 : -1}
                  onClick={() => setActiveServiceId(service.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={cn(
                    "h-[53px] shrink-0 cursor-pointer rounded-lg px-5 text-base font-semibold whitespace-nowrap outline-offset-2 transition-colors duration-150 sm:min-w-[210px] lg:h-11 lg:min-w-0 lg:px-2 lg:text-[13px] xl:[@media(min-height:980px)]:h-[53px] xl:[@media(min-height:980px)]:text-[15px]",
                    activeServiceId === service.id
                      ? "bg-foreground text-background"
                      : "bg-background text-secondary-foreground hover:bg-background/70",
                  )}
                >
                  {service.tabLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-b-[20px] p-4 sm:p-5 lg:h-[550px] lg:max-h-[calc(100dvh-216px)] lg:rounded-tl-[20px] lg:p-4 xl:[@media(min-height:980px)]:h-[650px] xl:[@media(min-height:980px)]:p-[21px]">
          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeService.id}`}
            className="bg-background grid rounded-xl p-4 sm:p-6 lg:h-full lg:grid-cols-[minmax(0,1.31fr)_minmax(0,1fr)] lg:gap-7 lg:px-6 lg:py-4 xl:[@media(min-height:980px)]:gap-[38px] xl:[@media(min-height:980px)]:px-[30px] xl:[@media(min-height:980px)]:py-[43px]"
          >
            <div className="relative aspect-[643/519] overflow-hidden rounded-2xl lg:aspect-auto lg:h-full xl:[@media(min-height:980px)]:aspect-[643/519] xl:[@media(min-height:980px)]:h-auto">
              <Image
                key={activeService.image}
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 643px, calc(100vw - 80px)"
                className="object-cover object-center"
              />
            </div>

            <div className="text-secondary-foreground flex min-w-0 flex-col pt-7 lg:pt-0">
              <div className="flex items-center gap-3 sm:gap-5 lg:gap-5 xl:[@media(min-height:980px)]:gap-8">
                <ActiveIcon
                  aria-hidden="true"
                  strokeWidth={1.8}
                  className="size-10 shrink-0 sm:size-12 lg:size-10 xl:[@media(min-height:980px)]:size-12"
                />
                <p className="bg-muted rounded-lg px-3 py-3 text-sm font-semibold whitespace-nowrap sm:px-4 sm:text-base lg:px-3 lg:py-3 lg:text-sm xl:[@media(min-height:980px)]:px-4 xl:[@media(min-height:980px)]:text-base">
                  {activeService.delivery}
                </p>
              </div>

              <h2 className="mt-7 text-[30px] leading-tight lg:mt-4 lg:text-[26px] xl:[@media(min-height:980px)]:mt-7 xl:[@media(min-height:980px)]:text-[30px]">
                <span className="font-semibold">{activeService.title}</span>{" "}
                <span
                  className={cn(
                    cormorantGaramond.className,
                    "text-[36px] leading-none font-light italic lg:text-[32px] xl:[@media(min-height:980px)]:text-[36px]",
                  )}
                >
                  {activeService.scriptTitle}
                </span>
              </h2>

              <p className="text-foreground mt-5 text-xl leading-[1.35] sm:text-2xl lg:mt-4 lg:text-xl xl:[@media(min-height:980px)]:mt-5 xl:[@media(min-height:980px)]:text-2xl">
                <strong className="font-semibold">Perfect for:</strong>{" "}
                {activeService.audience}
              </p>

              <Link
                href={SOCIALS.discord}
                className="bg-secondary-foreground text-background mt-8 w-full cursor-pointer rounded-lg px-8 py-4 text-center text-xl sm:w-fit sm:min-w-[286px] sm:text-2xl lg:mt-4 lg:min-w-[230px] lg:px-6 lg:py-3 lg:text-xl xl:[@media(min-height:980px)]:mt-8 xl:[@media(min-height:980px)]:min-w-[286px] xl:[@media(min-height:980px)]:px-8 xl:[@media(min-height:980px)]:py-4 xl:[@media(min-height:980px)]:text-2xl"
              >
                {activeService.price}
              </Link>

              <h3 className="mt-8 text-xl font-semibold sm:text-2xl lg:mt-4 lg:text-xl xl:[@media(min-height:980px)]:mt-8 xl:[@media(min-height:980px)]:text-2xl">
                What you get:
              </h3>

              <ul className="mt-4 space-y-4 text-lg sm:text-[22px] sm:leading-[1.45] lg:mt-3 lg:space-y-2 lg:text-lg lg:leading-7 xl:[@media(min-height:980px)]:mt-4 xl:[@media(min-height:980px)]:space-y-4 xl:[@media(min-height:980px)]:text-[22px] xl:[@media(min-height:980px)]:leading-[1.45]">
                {activeService.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <Check
                      aria-hidden="true"
                      strokeWidth={2.5}
                      className="mt-1 size-6 shrink-0 text-[#0C931E] lg:size-5 xl:[@media(min-height:980px)]:size-6"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="bg-secondary-foreground/25 mx-auto mt-4 h-px w-[189px] lg:mt-2 lg:w-[150px] xl:[@media(min-height:980px)]:mt-4 xl:[@media(min-height:980px)]:w-[189px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function AppDevelopmentIcon({
  className,
  strokeWidth = 1.8,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="12" y="3" width="24" height="42" rx="5" />
      <path d="M20 8h8M20 40h8" />
      <path d="M3 24h13m-5-5 5 5-5 5M45 24H32m5-5-5 5 5 5" />
    </svg>
  );
}
