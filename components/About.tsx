"use client";
import React from "react";

export default function About() {
  const stats = [
    { label: "Peran utama", value: "Junior Web Developer ", color: "text-blue-600 dark:text-blue-400" },
    { label: "Jurusan", value: "Rekayasa Perangkat Lunak (RPL)", color: "text-green-600 dark:text-green-400" },
    { label: "Sekolah", value: "SMK Pelita Nusantara ", color: "text-red-600 dark:text-red-400" },
    // { label: "Hobi Belum Tau", value: "Laravel", color: "text-amber-600 dark:text-amber-400" }
  ];

  return (
    <section id="about" className="space-y-8 scroll-mt-20">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-2">
        Tentang Saya 🧱
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column - Narrative Bio (Liquid Glass) */}
        <div className="md:col-span-7 p-6 md:p-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg border border-white/50 dark:border-slate-800/50 shadow-lg rounded-3xl space-y-4">
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
            Halo! Perkenalkan, nama saya <strong className="text-indigo-600 dark:text-indigo-400">Faza Maf&apos;Alul Afif</strong>. Saya adalah seorang siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK Pelita Nusantara.
          </p>
          <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
            Ketertarikan saya pada dunia pemrograman bermula dari rasa penasaran tentang bagaimana sistem di tampilan layar . 
          </p>
          {/* <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
            Sama seperti menyusun <strong className="text-amber-500">Lego</strong>, menulis baris kode bagi saya adalah seni merangkai komponen logika satu per satu hingga menjadi suatu sistem utuh yang kokoh, terstruktur, dan siap memecahkan masalah di dunia nyata.
          </p> */}
        </div>

        {/* Right Column - Stats Lego Brick Card */}
        <div className="md:col-span-5 relative group bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:scale-[1.02] transition-all duration-300">
          {/* Lego Studs on top */}
          <div className="flex gap-2 justify-center absolute -top-[8px] left-0 right-0 z-20">
            <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
            <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
            <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
            <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
          </div>

          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
            Profile Card
          </h3>

          <div className="space-y-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                  {stat.label}
                </span>
                <span className={`text-sm font-bold mt-0.5 ${stat.color}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
