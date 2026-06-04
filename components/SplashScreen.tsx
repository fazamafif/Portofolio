"use client";
import React, { useEffect, useState } from "react";

export default function SplashScreen() {
  const [loading, setLoading] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lock scroll when splash is visible
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    // Fast loading simulation
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 15) + 5;
      currentProgress = Math.min(currentProgress + increment, 100);
      setLoading(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Start fade out transition
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setVisible(false);
            document.body.style.overflow = "";
          }, 600); // fade out duration
        }, 600); // hold at 100%
      }
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 600);
  };

  if (!visible) return null;

  const rows = [
    {
      word: "FAZA",
      colors: ["bg-red-500 border-red-600 shadow-[0_4px_0_#b91c1c]", "bg-amber-400 border-amber-500 shadow-[0_4px_0_#b45309]", "bg-blue-600 border-blue-700 shadow-[0_4px_0_#1d4ed8]", "bg-green-600 border-green-700 shadow-[0_4px_0_#047857]"]
    },
    {
      word: "MAF'ALUL",
      colors: [
        "bg-orange-500 border-orange-600 shadow-[0_4px_0_#c2410c]",
        "bg-amber-400 border-amber-500 shadow-[0_4px_0_#b45309]",
        "bg-red-500 border-red-600 shadow-[0_4px_0_#b91c1c]",
        "bg-slate-400 border-slate-500 shadow-[0_4px_0_#475569]", // for the quote
        "bg-blue-600 border-blue-700 shadow-[0_4px_0_#1d4ed8]",
        "bg-green-600 border-green-700 shadow-[0_4px_0_#047857]",
        "bg-purple-600 border-purple-700 shadow-[0_4px_0_#6b21a8]",
        "bg-orange-500 border-orange-600 shadow-[0_4px_0_#c2410c]"
      ]
    },
    {
      word: "AFIF",
      colors: ["bg-blue-600 border-blue-700 shadow-[0_4px_0_#1d4ed8]", "bg-green-600 border-green-700 shadow-[0_4px_0_#047857]", "bg-amber-400 border-amber-500 shadow-[0_4px_0_#b45309]", "bg-red-500 border-red-600 shadow-[0_4px_0_#b91c1c]"]
    }
  ];

  // Map each letter's delay to create a neat staggered drop effect
  let globalCharIndex = 0;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-[#111215] select-none transition-all duration-700 ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 18px 18px, rgba(255,255,255,0.02) 8px, transparent 10px),
          linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)
        `,
        backgroundSize: "36px 36px"
      }}
    >
      {/* Title */}
      <div className="absolute top-10 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">
          Assembling Portfolio
        </span>
      </div>

      {/* Skip Button */}
      <button 
        onClick={handleSkip}
        className="absolute top-8 right-8 px-4 py-1.5 border border-slate-800 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:border-slate-600 transition-all cursor-pointer"
      >
        Skip &rarr;
      </button>

      {/* Lego Name Container */}
      <div className="flex flex-col gap-6 items-center justify-center max-w-full px-4 mb-16">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="flex gap-2.5 flex-wrap justify-center">
            {row.word.split("").map((char, cIdx) => {
              const colorClass = row.colors[cIdx] || "bg-indigo-600 border-indigo-700 shadow-[0_4px_0_#4338ca]";
              const delay = globalCharIndex * 60;
              globalCharIndex++;

              return (
                <div
                  key={cIdx}
                  className={`relative flex items-center justify-center w-12 h-14 md:w-16 md:h-18 rounded-lg border text-2xl md:text-3xl text-white font-black shadow-md cursor-default drop-brick ${colorClass}`}
                  style={{
                    animationDelay: `${delay}ms`,
                    ...({
                      "--tw-border-opacity": "0.3"
                    } as React.CSSProperties)
                  }}
                >
                  {/* Lego Studs on top of each brick character */}
                  <div className="absolute -top-[5px] left-0 right-0 flex justify-center gap-1">
                    <div className="w-2.5 h-1.5 bg-inherit border-t border-white/40 rounded-t shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]" />
                    <div className="w-2.5 h-1.5 bg-inherit border-t border-white/40 rounded-t shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]" />
                  </div>

                  {/* Character */}
                  <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] select-none">
                    {char}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lego Loader Bar */}
      <div className="w-[80%] max-w-[320px] flex flex-col gap-2 items-center">
        {/* Grey Lego baseplate for the loader */}
        <div className="relative w-full h-8 bg-slate-800 border border-slate-700 rounded-lg overflow-hidden flex items-center p-1 shadow-inner">
          {/* Studs on background plate */}
          <div className="absolute inset-0 flex justify-between px-2 items-center opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white" />
            ))}
          </div>

          {/* Growing Lego brick loader */}
          <div 
            className="h-full rounded-md bg-green-500 border border-green-600 shadow-[0_2px_0_#15803d] transition-all duration-300 ease-out relative flex items-center justify-end px-1"
            style={{ width: `${loading}%` }}
          >
            {/* Stud highlights inside loading bar */}
            <div className="absolute inset-0 flex gap-2 items-center justify-around overflow-hidden px-2 opacity-50">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              ))}
            </div>
          </div>
        </div>

        {/* Loading percentage */}
        <span className="text-[10px] tracking-widest font-mono text-slate-500 font-bold uppercase mt-1">
          {loading}% built
        </span>
      </div>
    </div>
  );
}
