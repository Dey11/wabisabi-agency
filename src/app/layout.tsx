import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
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
            if (theme !== 'light') document.documentElement.classList.add('dark');
          } catch (e) {}
        })();`,
          }}
        />
      </head>
      <body className={poppins.className}>
        <div className="mx-auto w-full max-w-[1400px] antialiased">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
