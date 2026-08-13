import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegoBricks from "@/components/LegoBricks";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Faza Maf'Alul Afif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} text-slate-600 dark:text-slate-300 antialiase relative min-h-screen flex flex-col`} suppressHydrationWarning>
        {/* Splash Screen Lego */}
        <SplashScreen />

        {/* Mainan Lego Berwarna-warni di Background */}
        <LegoBricks />
        {/* Efek Aurora Glow Statis */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.1),rgba(255,255,255,0))] pointer-events-none"></div>

        <Navbar />
        <main className="flex-grow pt-24 pb-12 px-6 md:px-12 max-w-5xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
