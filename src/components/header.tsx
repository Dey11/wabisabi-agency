"use client";

import { ArrowUp, Moon, PhoneCall, Sun, User } from "lucide-react";
import { DM_Sans } from "next/font/google";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SOCIALS } from "@/lib/constants";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function Header() {
  const [currentTab, setCurrentTab] = useState<NavItem>(NavItem.Services);
  const [isDark, setIsDark] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = async () => {
    if (!ref.current) return;
    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDark(!isDark);
      });
    }).ready;

    const { top, left } = ref.current.getBoundingClientRect();
    const x = left;
    const y = top;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;

    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
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
  };

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentTab(pathname as NavItem);
  }, [pathname]);

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

      <nav className="mt-4">
        <ul className="flex items-center gap-10 text-2xl">
          {navItems.map((item) => (
            <li key={item.name} className="relative hidden lg:block">
              <Link
                href={item.href}
                className={`${
                  currentTab === item.href
                    ? "font-medium"
                    : "text-gray-700 dark:text-white"
                } dark:hover:text-foreground/80 relative px-1 py-1 hover:text-gray-900`}
              >
                {item.name}
                {currentTab === item.href && (
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
              <button className="group flex cursor-pointer items-center gap-1 rounded-full border-2 px-4 py-2 text-xs lg:py-1 lg:text-xl dark:border-white dark:text-white">
                <span>Purchase Plan</span>
                <ArrowUp className="size-5 rotate-45 transition-all group-hover:rotate-90" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="ring-animation hidden cursor-pointer rounded-full border-2 p-2 lg:block dark:border-white">
                <PhoneCall className="size-5 dark:text-white" />
              </button>
            </Link>
            <button
              onClick={toggleTheme}
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
    name: "Services",
    href: "/services",
  },
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Feedbacks",
    href: "/feedbacks",
  },
];

enum NavItem {
  Services = "/services",
  Works = "/works",
  Feedbacks = "/feedbacks",
}
