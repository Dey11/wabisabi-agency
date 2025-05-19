"use client";

import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

enum NavItem {
  Services = "/services",
  Works = "/works",
  Feedbacks = "/feedbacks",
  Contact = "/contact",
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<NavItem>(NavItem.Services);

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentTab(pathname as NavItem);
  }, [pathname]);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="relative size-10 rounded-full border-2 p-2 lg:hidden">
          <X
            className={cn(
              "absolute inset-0 m-auto size-5 transition-all duration-300 ease-in-out",
              isOpen
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 -rotate-90 opacity-0",
            )}
          />
          <Menu
            className={cn(
              "absolute inset-0 m-auto size-5 transition-all duration-300 ease-in-out",
              isOpen
                ? "scale-0 rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100",
            )}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-transparent backdrop-blur-lg">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name}>
            <DropdownMenuItem
              key={item.name}
              className={cn(
                "text-gray-700",
                currentTab === item.href && "bg-[#EBEBEB]",
              )}
            >
              {item.name}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const navItems = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Our Works",
    href: "/works",
  },
  {
    name: "Feedbacks",
    href: "/feedbacks",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];
