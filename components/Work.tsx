"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Work() {
  const [subTab, setSubTab] = useState<"projects" | "skills">("projects");

  const projects = [
    {
      title: "E-Voting Pemilihan Ketua OSIS",
      description: "Aplikasi voting digital yang saya buat untuk menyederhanakan pemilihan ketua OSIS di sekolah. Menghindari golput dan mempercepat perhitungan suara secara realtime.",
      tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
      image: "/images/evoting-preview.webp",
      repoLink: "https://github.com",
      demoLink: "#"
    },
    {
      title: "Scraper Lowongan Kerja Otomatis",
      description: "Script Python sederhana untuk mengambil info loker terbaru dari internet dan menyusunnya langsung ke file Excel. Sangat membantu untuk mencari lowongan magang.",
      tags: ["Python", "BeautifulSoup", "Pandas"],
      image: "/images/scraper-preview.webp",
      repoLink: "https://github.com",
      demoLink: "#"
    },
    // {
    //   title: "Kantin Digital Sekolah",
    //   description: "Aplikasi Kantin digital yang saya buat untuk memudahkan siswa memesan makanan tanpa antri. Fitur realtime order tracking dan pembayaran online membuatnya sangat praktis.",
    //   tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    //   // Pastikan gambar ini ada di folder public/images
    //   image: "/images/evoting-preview.webp",
    //   repoLink: "https://github.com",
    //   demoLink: "#"
    // }
  ];


  const tech = [
    { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
    { name: 'Tools', items: ['GitHub', 'Laragon', 'Docker'] },
  ];

  const skillColors = [
    {
      cardClass: "bg-amber-400 border-amber-500 shadow-[0_6px_0_#b45309]",
      titleClass: "text-amber-950 font-black",
      itemClass: "text-amber-950 font-semibold bg-white/60 border border-amber-500/20",
      studClass: "bg-amber-400 border-amber-300"
    },
    {
      cardClass: "bg-blue-600 border-blue-700 shadow-[0_6px_0_#1e3a8a]",
      titleClass: "text-white font-black",
      itemClass: "text-blue-500 font-bold bg-white border border-blue-700/20",
      studClass: "bg-blue-600 border-blue-400"
    },
    {
      cardClass: "bg-red-600 border-red-700 shadow-[0_6px_0_#7f1d1d]",
      titleClass: "text-white font-black",
      itemClass: "text-red-500 font-bold bg-white border border-red-700/20",
      studClass: "bg-red-600 border-red-400"
    }
  ];

  return (
    <section id="work" className="space-y-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          My Work 
        </h2>

        {/* Sub-Navbar (Lego styled) */}
        <div className="relative flex p-1 bg-slate-200/80 dark:bg-slate-900 border border-slate-300/40 dark:border-slate-800 rounded-xl w-fit h-[42px] select-none items-center">
          {/* Sliding active Lego brick indicator */}
          <div 
            className={`absolute top-[4px] bottom-[4px] w-[calc(50%-4px)] rounded-lg transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0 ${
              subTab === "projects" 
                ? "left-[4px] bg-indigo-600 border-indigo-700 shadow-[0_2px_0_#4338ca]" 
                : "left-[50%] bg-green-600 border-green-700 shadow-[0_2px_0_#15803d]"
            }`}
          >
            {/* Tiny stud on active sub-tab indicator */}
            <div className="w-2.5 h-1 bg-white/20 rounded-t absolute -top-[3px] left-1/2 -translate-x-1/2" />
          </div>

          <button 
            onClick={() => setSubTab("projects")}
            className={`px-4 h-full text-xs font-bold rounded-lg transition-colors duration-200 z-10 ${
              subTab === "projects" ? "text-white" : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Proyek Pilihan
          </button>
          <button 
            onClick={() => setSubTab("skills")}
            className={`px-4 h-full text-xs font-bold rounded-lg transition-colors duration-200 z-10 ${
              subTab === "skills" ? "text-white" : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Keahlian Tech
          </button>
        </div>
      </div>

      {/* Conditionally Render Sub-Sections */}
      <div className="min-h-[300px]">
        {subTab === "projects" ? (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 animate-fade-in-down">
            {projects.map((proj, idx) => (
              <div key={idx} className="relative group bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-xl flex flex-col transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(99,102,241,0.08)] mt-3">
                {/* Lego Studs on top */}
                <div className="flex gap-2 justify-center absolute -top-[7px] left-0 right-0 z-20">
                  <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
                  <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
                  <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
                  <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
                  <div className="w-3.5 h-2 bg-white dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
                </div>
                <div className="relative h-48 w-full rounded-t-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{proj.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-medium">
                    <a href={proj.repoLink} className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Kode Sumber &rarr;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Skills Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 animate-fade-in-down">
            {tech.map((cat, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 border transition-all duration-200 hover:scale-[1.03] hover:translate-y-[2px] hover:shadow-md ${skillColors[i].cardClass}`}
              >
                {/* Lego Studs on top */}
                <div className="flex gap-2 justify-center absolute -top-[8px] left-0 right-0 z-20">
                  <div className={`w-4 h-2 rounded-t border-t shadow-sm ${skillColors[i].studClass}`} />
                  <div className={`w-4 h-2 rounded-t border-t shadow-sm ${skillColors[i].studClass}`} />
                  <div className={`w-4 h-2 rounded-t border-t shadow-sm ${skillColors[i].studClass}`} />
                  <div className={`w-4 h-2 rounded-t border-t shadow-sm ${skillColors[i].studClass}`} />
                </div>
                
                <h3 className={`text-xl mb-4 tracking-wider uppercase text-center ${skillColors[i].titleClass}`}>{cat.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cat.items.map((it, j) => (
                    <span 
                      key={j} 
                      className={`text-xs px-3 py-1.5 rounded-lg shadow-sm ${skillColors[i].itemClass}`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
