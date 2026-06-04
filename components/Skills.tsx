'use client';
import React from 'react';

export default function Skills() {
  const tech = [
    { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
    { name: 'Tools', items: ['GitHub', 'Laragon', 'Docker'] },
  ];

  const colors = [
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
    <section id="skills" className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
        Teknologi yang Digunakan 🚀
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3">
        {tech.map((cat, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-6 border transition-all duration-200 hover:scale-[1.03] hover:translate-y-[2px] hover:shadow-md ${colors[i].cardClass}`}
          >
            {/* Lego Studs on top of card */}
            <div className="flex gap-2 justify-center absolute -top-[8px] left-0 right-0 z-20">
              <div className={`w-4 h-2 rounded-t border-t shadow-sm ${colors[i].studClass}`} />
              <div className={`w-4 h-2 rounded-t border-t shadow-sm ${colors[i].studClass}`} />
              <div className={`w-4 h-2 rounded-t border-t shadow-sm ${colors[i].studClass}`} />
              <div className={`w-4 h-2 rounded-t border-t shadow-sm ${colors[i].studClass}`} />
            </div>
            
            <h3 className={`text-xl mb-4 tracking-wider uppercase text-center ${colors[i].titleClass}`}>{cat.name}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {cat.items.map((it, j) => (
                <span 
                  key={j} 
                  className={`text-xs px-3 py-1.5 rounded-lg shadow-sm ${colors[i].itemClass}`}
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}