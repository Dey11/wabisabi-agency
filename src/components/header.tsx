import { ArrowUp, Moon, User } from "lucide-react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function Header() {
  return (
    <header
      className={`flex items-center justify-between p-2 ${dmSans.variable}`}
    >
      <div className="flex gap-2 text-3xl font-bold">
        <img src="/logo.png" alt="Logo" className="size-12" />
        <span className="mt-4">Wabi Sabi</span>
      </div>

      <nav className="mt-4">
        <ul className="flex items-center gap-10 text-2xl">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.name}
              </a>
            </li>
          ))}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 rounded-full border-2 px-4 py-1 text-xl">
              <span>Purchase Plan</span>
              <ArrowUp className="size-5 rotate-45" />
            </button>
            <button className="rounded-full border-2 p-2">
              <User className="size-5" />
            </button>
            <button className="rounded-full border-2 p-2">
              <Moon className="size-5" />
            </button>
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
