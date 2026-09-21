"use client";

import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="relative size-10 rounded-full border-2 p-2 lg:hidden dark:border-white"
        >
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
      <DropdownMenuContent className="bg-white dark:bg-[#212020]">
        <DropdownMenuLabel className="text-foreground">
          Services
        </DropdownMenuLabel>
        {serviceNavItems.map((item) => (
          <DropdownMenuItem
            key={item.href}
            asChild
            className={cn(
              "cursor-pointer pl-4 text-gray-700 dark:text-white",
              pathname === item.href && "bg-[#EBEBEB] dark:bg-black/20",
            )}
          >
            <Link href={item.href}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        {navItems.map((item) => (
          <DropdownMenuItem
            key={item.href}
            asChild
            className={cn(
              "cursor-pointer text-gray-700 dark:text-white",
              pathname === item.href && "bg-[#EBEBEB] dark:bg-black/20",
            )}
          >
            <Link href={item.href}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const navItems = [
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
