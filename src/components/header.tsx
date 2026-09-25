"use client";

import { ArrowUp, ChevronDown, Moon, PhoneCall, Sun } from "lucide-react";
import { DM_Sans } from "next/font/google";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SOCIALS } from "@/lib/constants";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const [hoveredServiceHref, setHoveredServiceHref] = useState<string | null>(
    null,
  );
  const ref = useRef<HTMLButtonElement | null>(null);
  const themeTransitionRef = useRef(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme !== "light";

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);

    if (savedTheme === null) localStorage.setItem("theme", "dark");
  }, []);

  const applyTheme = (dark: boolean) => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    setIsDark(dark);
  };

  const toggleTheme = async () => {
    if (!ref.current || themeTransitionRef.current) return;

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => ViewTransition;
      activeViewTransition?: ViewTransition | null;
    };

    themeTransitionRef.current = true;
    setIsThemeTransitioning(true);

    try {
      await doc.activeViewTransition?.finished.catch(() => undefined);

      const button = ref.current;
      if (!button) return;

      const nextIsDark = !doc.documentElement.classList.contains("dark");

      if (!doc.startViewTransition || doc.visibilityState !== "visible") {
        applyTheme(nextIsDark);
        return;
      }

      let themeApplied = false;
      const transition = doc.startViewTransition(() => {
        flushSync(() => {
          applyTheme(nextIsDark);
          themeApplied = true;
        });
      });

      try {
        await transition.ready;

        const { top, left, width, height } = button.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y),
        );

        const reveal = doc.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );

        await Promise.allSettled([reveal.finished, transition.finished]);
      } catch {
        await transition.updateCallbackDone.catch(() => undefined);
        if (!themeApplied) applyTheme(nextIsDark);
      }
    } finally {
      themeTransitionRef.current = false;
      setIsThemeTransitioning(false);
    }
  };

  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services/");

  return (
    <header
      className={`flex items-center justify-between p-2 ${dmSans.variable}`}
    >
      <Link href="/" className="group">
        <div className="flex gap-2 text-lg font-bold lg:text-3xl">
          <img
            src="/logo.png"
            alt="Logo"
            className="mt-2 size-10 transition-all group-hover:scale-110 sm:mt-0 lg:size-12"
          />
          <span className="mt-4 hidden transition-all sm:block">Wabi Sabi</span>
        </div>
      </Link>

      <nav className="mt-1 lg:mt-4">
        <ul className="flex items-center gap-2 text-2xl sm:gap-3 lg:gap-10">
          <li className="relative hidden lg:block">
            <DropdownMenu
              onOpenChange={(open) => {
                if (!open) setHoveredServiceHref(null);
              }}
            >
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "group dark:hover:text-foreground/80 relative flex cursor-pointer items-center gap-2 px-1 py-1 outline-none hover:text-gray-900",
                    servicesActive
                      ? "text-foreground font-medium"
                      : "text-gray-700 dark:text-white",
                  )}
                >
                  Services
                  <ChevronDown className="size-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {servicesActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="bg-foreground absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="dark:text-foreground w-[192px] min-w-0 border-0 bg-[#FBFBFB] p-2 text-[#77413A] shadow-sm dark:bg-[#292828]"
              >
                {serviceNavItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    onPointerEnter={() => setHoveredServiceHref(item.href)}
                    onPointerLeave={() => setHoveredServiceHref(null)}
                    className={cn(
                      "dark:focus:text-foreground cursor-pointer rounded px-2.5 py-1.5 text-xs whitespace-nowrap focus:bg-[#EBEBEB] focus:text-[#77413A] dark:focus:bg-white/10",
                      pathname === item.href &&
                        hoveredServiceHref === null &&
                        "bg-[#EBEBEB] dark:bg-white/10",
                    )}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          {navItems.map((item) => (
            <li key={item.name} className="relative hidden lg:block">
              <Link
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "font-medium"
                    : "text-gray-700 dark:text-white"
                } dark:hover:text-foreground/80 relative px-1 py-1 hover:text-gray-900`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="bg-foreground absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
          <div className="flex items-center gap-2">
            <Link href={SOCIALS.discord}>
              <button className="group flex cursor-pointer items-center gap-1 rounded-full border-2 px-2.5 py-1.5 text-[10px] whitespace-nowrap min-[360px]:text-xs sm:px-4 sm:py-2 lg:py-1 lg:text-xl dark:border-white dark:text-white">
                <span>Purchase Plan</span>
                <ArrowUp className="size-4 rotate-45 transition-all group-hover:rotate-90 min-[360px]:size-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="ring-animation hidden cursor-pointer rounded-full border-2 p-2 lg:block dark:border-white">
                <PhoneCall className="size-5 dark:text-white" />
              </button>
            </Link>
            <button
              onClick={toggleTheme}
              disabled={isThemeTransitioning}
              className="relative size-9.5 cursor-pointer overflow-hidden rounded-full border-2 dark:border-white"
              ref={ref}
            >
              <Sun
                className={cn(
                  "absolute inset-0 m-auto size-5 transition-all duration-300",
                  !isDark ? "sun-moon-animation-reverse" : "sun-moon-animation",
                )}
              />
              <Moon
                className={cn(
                  "absolute inset-0 m-auto size-5 transition-all duration-300",
                  isDark ? "sun-moon-animation-reverse" : "sun-moon-animation",
                )}
              />
            </button>
            <MobileMenu />
          </div>
        </ul>
      </nav>
    </header>
  );
}

const navItems = [
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Feedbacks",
    href: "/feedbacks",
  },
];

const serviceNavItems = [
  {
    name: "Design",
    href: "/services/design",
  },
  {
    name: "Web Development",
    href: "/services/web-development",
  },
];
