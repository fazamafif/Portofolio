"use client";
import React from "react";

export default function Hero() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const overlay = e.currentTarget.querySelector('.cursor-light') as HTMLElement;
    if (overlay) {
      overlay.style.setProperty('--x', `${x}px`);
      overlay.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center pt-8 md:pt-16 select-none min-h-[60vh]">
      {/* Left Column (Text & Buttons) with Liquid Glass Style */}
      <div className="md:col-span-7 flex flex-col items-start order-2 md:order-1 p-6 md:p-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg border border-white/50 dark:border-slate-800/50 shadow-lg rounded-3xl">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-3 leading-tight tracking-tight custom-fade-up delay-100 sm:whitespace-nowrap">
          Faza Maf&apos;Alul Afif
        </h1>

        <p className="text-base md:text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide uppercase">
          Siswa & Web Developer Enthusiast
        </p>

        <p className="text-lg max-w-xl leading-relaxed mb-8 text-slate-600 dark:text-slate-400 custom-fade-up delay-200">
          Halo! Saya Faza, siswa SMK Pelita Nusantara yang suka ngoding backend dan bikin aplikasi web. Senang memecahkan masalah logika lewat baris kode, mengelola database, dan menyusun sistem yang rapi.
        </p>

        <div className="flex flex-wrap gap-6 custom-fade-up delay-300 pt-3">
          {/* Lego Red Button */}
          <a href="#projects" className="relative px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-[0_4px_0_#991b1b] transition-all duration-100 hover:translate-y-[2px] hover:shadow-[0_2px_0_#991b1b] active:translate-y-[4px] active:shadow-none select-none">
            {/* Studs */}
            <div className="flex gap-2 justify-center absolute -top-[6px] left-0 right-0">
              <div className="w-3.5 h-1.5 bg-red-500 rounded-t border-t border-red-300 shadow-sm" />
              <div className="w-3.5 h-1.5 bg-red-500 rounded-t border-t border-red-300 shadow-sm" />
              <div className="w-3.5 h-1.5 bg-red-500 rounded-t border-t border-red-300 shadow-sm" />
            </div>
            Lihat Proyek
          </a>

          {/* Lego Blue Button */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-[0_4px_0_#1e40af] transition-all duration-100 hover:translate-y-[2px] hover:shadow-[0_2px_0_#1e40af] active:translate-y-[4px] active:shadow-none select-none">
            {/* Studs */}
            <div className="flex gap-2 justify-center absolute -top-[6px] left-0 right-0">
              <div className="w-3.5 h-1.5 bg-blue-500 rounded-t border-t border-blue-300 shadow-sm" />
              <div className="w-3.5 h-1.5 bg-blue-500 rounded-t border-t border-blue-300 shadow-sm" />
              <div className="w-3.5 h-1.5 bg-blue-500 rounded-t border-t border-blue-300 shadow-sm" />
            </div>
            GitHub
          </a>
        </div>
      </div>

      {/* Right Column (Photo Frame) */}
      <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
        <div 
          className="relative group cursor-pointer overflow-visible rounded-2xl border-4 border-amber-400 bg-amber-400 shadow-xl transition-all duration-500"
          onMouseMove={handleMouseMove}
          style={{ width: "240px", height: "360px" }}
        >
          {/* Yellow Lego Studs on top of photo */}
          <div className="flex gap-3 justify-center absolute -top-[10px] left-0 right-0 z-20">
            <div className="w-4 h-2.5 bg-amber-400 rounded-t border-t border-amber-200 shadow-sm" />
            <div className="w-4 h-2.5 bg-amber-400 rounded-t border-t border-amber-200 shadow-sm" />
            <div className="w-4 h-2.5 bg-amber-400 rounded-t border-t border-amber-200 shadow-sm" />
            <div className="w-4 h-2.5 bg-amber-400 rounded-t border-t border-amber-200 shadow-sm" />
          </div>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img 
              src="/profile_placeholder.png" 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 photo-frame" 
            />
          </div>
          {/* Cursor-Following Light Spot */}
          <div className="absolute inset-0 pointer-events-none cursor-light" />
        </div>
      </div>
    </section>
  );
}