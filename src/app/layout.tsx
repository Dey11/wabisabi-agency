import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { unstable_ViewTransition as ViewTransition } from "react";
import { CursorTrail } from "@/components/cursor-trail";
import { Footer } from "@/components/footer";
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wabi Sabi",
  description: "A design and development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
          try {
            const theme = localStorage.getItem('theme');
            if (theme === 'dark') document.documentElement.classList.add('dark');
          } catch (e) {}
        })();`,
          }}
        />
      </head>
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <CursorTrail />
        <div className={`mx-auto w-full max-w-[1400px] flex-1 antialiased`}>
          <Header />
          <ViewTransition name="pages">{children}</ViewTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
