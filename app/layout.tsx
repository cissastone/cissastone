import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Cıssa Stone",
  description: "Çissa Stone 3D Tasarım & Kalıp Hizmetleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-t from-neutral-1000 to-neutral-800 min-h-screen  w-full selection:text-primary selection:bg-neutral-600   ">
        <div className="max-w-[1440px] mx-auto max-sm:px-4 relative 2xl:max-w-[1536px] 2xl:px-4  ">
          <Navbar />
          <div className="relative top-[60px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
