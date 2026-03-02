import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";

const inter = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHOP.CO | Find Clothes That Match Your Style",
  description:
    "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#0a0a1a] text-white`}>
        <Navbar />
        <main className="min-h-screen relative">
          {/* Background orbs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="orb orb-purple w-[600px] h-[600px] top-[-200px] left-[-200px]" />
            <div className="orb orb-blue w-[500px] h-[500px] bottom-[-100px] right-[-100px]" />
            <div className="orb orb-pink w-[400px] h-[400px] top-[40%] left-[60%]" />
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
