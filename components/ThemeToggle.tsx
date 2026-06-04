"use client";
import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex items-center w-[76px] h-[38px] bg-slate-200 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-full p-0.5 cursor-pointer shadow-md select-none transition-colors duration-300 relative overflow-visible"
      aria-label="Toggle Theme"
    >
      {/* Tiny Lego studs inside the slider channel */}
      <div className="flex gap-2 justify-center absolute left-0 right-0 top-1/2 -translate-y-1/2 opacity-35 px-2 pointer-events-none">
        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full" />
        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full" />
        <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full" />
      </div>

      {/* The 3D Lego Brick Slider */}
      <div 
        className={`w-7 h-7 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] absolute top-[3px] shadow-md border ${
          theme === "light" 
            ? "left-[3px] bg-amber-400 border-amber-500 shadow-[0_2px_0_#b45309]" 
            : "left-[41px] bg-blue-600 border-blue-700 shadow-[0_2px_0_#1e3a8a]"
        }`}
      >
        {/* Lego Studs on top of sliding block */}
        <div className="flex gap-1 justify-center absolute -top-[4px] left-0 right-0">
          <div className={`w-2 h-1 rounded-t border-t shadow-sm ${theme === "light" ? "bg-amber-400 border-amber-300" : "bg-blue-600 border-blue-400"}`} />
          <div className={`w-2 h-1 rounded-t border-t shadow-sm ${theme === "light" ? "bg-amber-400 border-amber-300" : "bg-blue-600 border-blue-400"}`} />
        </div>
        
        {/* Theme Icon symbol */}
        <span className="flex items-center justify-center w-full h-full text-xs select-none">
          {theme === "light" ? "☀️" : "🌙"}
        </span>
      </div>
    </button>
  );
}
