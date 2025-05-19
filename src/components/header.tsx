"use client";

import { ArrowUp, Moon, User } from "lucide-react";
import { DM_Sans } from "next/font/google";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function Header() {
  const [currentTab, setCurrentTab] = useState<NavItem>(NavItem.Services);

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
            <li key={item.name} className="hidden lg:block">
              <a
                href={item.href}
                className={`${
                  currentTab === item.href ? "font-medium" : "text-gray-700"
                } hover:text-gray-900`}
              >
                {item.name}
              </a>
            </li>
          ))}
          <div className="flex items-center gap-2">
            <button className="group flex cursor-pointer items-center gap-1 rounded-full border-2 px-4 py-2 text-xs lg:py-1 lg:text-xl">
              <span>Purchase Plan</span>
              <ArrowUp className="size-5 rotate-45 transition-all group-hover:rotate-90" />
            </button>
            <Link href="/contact">
              <button className="hidden cursor-pointer rounded-full border-2 p-2 lg:block">
                <User className="size-5" />
              </button>
            </Link>
            <button className="rounded-full border-2 p-2">
              <Moon className="size-5" />
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
