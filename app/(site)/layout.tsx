import type { Metadata } from "next";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import "../globals.css"

export const metadata: Metadata = {
  title: "Aghogho Emokiniovo: Portfolio Site",
  description: "The personal portfolio site of Aghogho Emokiniovo built with Sanity and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-main text-white">
        <Navbar />
        <div className="">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
