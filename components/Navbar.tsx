"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Custom SVG Icons with Lego Color Support
const HomeIcon = ({ active }: { active: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={active ? "#78350f" : "#64748b"} 
    className="w-5.5 h-5.5 transition-colors duration-300"
  >
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);

const AboutIcon = ({ active }: { active: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={active ? "#ffffff" : "#64748b"} 
    className="w-5.5 h-5.5 transition-colors duration-300"
  >
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
  </svg>
);

const ProjectIcon = ({ active }: { active: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={active ? "#ffffff" : "#64748b"} 
    className="w-5.5 h-5.5 transition-colors duration-300"
  >
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1.5A1.5 1.5 0 004.5 6v12a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0018 4.5H6zm3 4.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 019 9zm0 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm.75 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" clipRule="evenodd" />
  </svg>
);

const SkillsIcon = ({ active }: { active: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={active ? "#ffffff" : "#64748b"} 
    className="w-5.5 h-5.5 transition-colors duration-300"
  >
    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
  </svg>
);

const ContactIcon = ({ active }: { active: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={active ? "#ffffff" : "#64748b"} 
    className="w-5.5 h-5.5 transition-colors duration-300"
  >
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A9.75 9.75 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
  </svg>
);

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("hero");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navItems = [
    { id: "hero", label: "Home", icon: (active: boolean) => <HomeIcon active={active} /> },
    { id: "about", label: "About", icon: (active: boolean) => <AboutIcon active={active} /> },
    { id: "work", label: "My Work", icon: (active: boolean) => <ProjectIcon active={active} /> },
    { id: "contact", label: "Kontak", icon: (active: boolean) => <ContactIcon active={active} /> },
  ];

  const colors = [
    { bg: "bg-amber-400 border-amber-500 shadow-[0_3px_0_#b45309]", stud: "bg-amber-400 border-amber-300", text: "text-amber-950 font-black" },
    { bg: "bg-orange-500 border-orange-600 shadow-[0_3px_0_#9a3412]", stud: "bg-orange-500 border-orange-400", text: "text-white font-black" },
    { bg: "bg-blue-600 border-blue-700 shadow-[0_3px_0_#1e3a8a]", stud: "bg-blue-600 border-blue-400", text: "text-white font-black" },
    { bg: "bg-red-600 border-red-700 shadow-[0_3px_0_#7f1d1d]", stud: "bg-red-600 border-red-400", text: "text-white font-black" },
  ];

  const activeIndex = navItems.findIndex(item => item.id === activeTab);

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Scroll Observer
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
    <header className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[400px] z-50 h-[64px] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-2xl flex items-center px-1 select-none">
      {/* Grey Lego Studs on top of the navbar baseplate */}
      <div className="flex gap-2 justify-center absolute -top-[6px] left-0 right-0 px-4">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="w-3.5 h-1.5 bg-slate-100 dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm" />
        ))}
      </div>

      {/* Sliding 3D Lego Brick Indicator (Slides across the content tabs) */}
      {activeIndex !== -1 && (
        <div 
          className="absolute top-[6px] bottom-[10px] left-[6px] w-[calc(20%-3px)] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        >
          <div className={`w-full h-full rounded-xl border ${colors[activeIndex].bg}`}>
            {/* Lego Studs on top of sliding block */}
            <div className="flex gap-1.5 justify-center absolute -top-[5px] left-0 right-0">
              <div className={`w-2.5 h-1.5 rounded-t border-t shadow-sm ${colors[activeIndex].stud}`} />
              <div className={`w-2.5 h-1.5 rounded-t border-t shadow-sm ${colors[activeIndex].stud}`} />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Items (80% width for content, 4 items) */}
      <div className="w-[80%] h-full flex">
        {navItems.map((item, idx) => {
          const isActive = activeTab === item.id;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className="w-1/4 h-full flex flex-col justify-center items-center z-10 relative pb-1"
            >
              {/* Icon */}
              <div className="transition-transform duration-200 hover:scale-110">
                {item.icon(isActive)}
              </div>
              
              {/* Item Label */}
              <span className={`text-[10px] font-bold tracking-wide transition-colors duration-200 mt-1 ${
                isActive ? colors[idx].text : "text-slate-500 dark:text-slate-400"
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Vertical Divider line */}
      <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-800" />

      {/* Theme Toggle Button (20% width) */}
      <button 
        onClick={toggleTheme}
        className="w-[20%] h-full flex flex-col justify-center items-center cursor-pointer z-10 relative pb-1 hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <span className="text-xl transition-transform duration-200 group-hover:rotate-12">
          {theme === "light" ? "☀️" : "🌙"}
        </span>
        <span className="text-[10px] font-bold tracking-wide text-slate-500 dark:text-slate-400 mt-1">
          {theme === "light" ? "Light" : "Dark"}
        </span>
      </button>
    </header>
  );
}