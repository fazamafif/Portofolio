"use client";

import React from "react";
import Image from "next/image";

export default function HeroPhoto() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const overlay = e.currentTarget.querySelector(".cursor-light") as HTMLElement | null;
    if (overlay) {
      overlay.style.setProperty("--x", `${x}px`);
      overlay.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <div
      className="relative group cursor-pointer overflow-visible rounded-2xl border-4 border-amber-400 bg-amber-400 shadow-xl transition-transform duration-300 hover:scale-105"
      onMouseMove={handleMouseMove}
      style={{ width: "240px", height: "360px" }}
    >
      {/* Yellow Lego Studs on top of photo */}
      <div className="flex gap-3 justify-center absolute -top-2 left-0 right-0 z-20">
        <div className="w-4 h-2.5 bg-amber-400 rounded-t border-t border-amber-200 shadow-sm" />
        <div className="w-4 h-2.5 bg-amber-400 rounded-t border-t border-amber-200 shadow-sm" />
        <div className="w-4 h-2.5 bg-amber-400 rounded-t border-t border-amber-200 shadow-sm" />
        <div className="w-4 h-2.5 bg-amber-400 rounded-t border-t border-amber-200 shadow-sm" />
      </div>
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-amber-300">
        <Image
          src="/Foto.webp"
          alt="Foto Profil Faza Maf'Alul Afif"
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="240px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* Cursor-Following Light Spot */}
      <div className="absolute inset-0 pointer-events-none cursor-light" />
    </div>
  );
}
