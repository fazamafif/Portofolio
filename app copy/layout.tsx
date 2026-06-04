import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Full-Stack Developer",
  description: "Portofolio profesional menampilkan solusi web dan otomasi data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-400 antialiased relative min-h-screen flex flex-col`}>
        {/* Efek Aurora Glow Statis (Performa Tinggi) */}
        <div className="fixed inset-0 z-[-1] bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]"></div>
        
        <Navbar />
        <main className="flex-grow pt-24 pb-12 px-6 md:px-12 max-w-5xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}