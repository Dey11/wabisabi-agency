"use client";

import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full border-2 p-2 lg:hidden">
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
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
