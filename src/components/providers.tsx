"use client";

import { useRef } from "react";
import Header from "./header";

export default function Providers({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const toggleTheme = () => {
    ref.current?.classList.toggle("dark");
  };

  return (
    <main ref={ref} className="">
      <Header toggleTheme={toggleTheme} />
      {children}
    </main>
  );
}
