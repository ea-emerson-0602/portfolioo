import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import "../globals.css"

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next.js Portfolio Site",
  description: "A personal portfolio site built with Sanity and Next.js",
  // openGraph: {
  //   images: "add-your-open-graph-image-url-here",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#34353A] text-white">
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
