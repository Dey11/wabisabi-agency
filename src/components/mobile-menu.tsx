"use client";

import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
      <DropdownMenuContent className="bg-transparent backdrop-blur-2xl">
        {navItems.map((item) => (
          <DropdownMenuItem key={item.name}>{item.name}</DropdownMenuItem>
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
