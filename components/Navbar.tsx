"use client";
import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

const emptySubscribe = () => () => {};

const themeListeners = new Set<() => void>();

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);
  if (typeof window !== "undefined") {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const mediaListener = () => callback();
    media.addEventListener("change", mediaListener);

    return () => {
      themeListeners.delete(callback);
      media.removeEventListener("change", mediaListener);
    };
  }
  return () => {
    themeListeners.delete(callback);
  };
}

function getThemeSnapshot(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getThemeServerSnapshot(): "light" | "dark" {
  return "light";
}

// Custom SVG Icons with Lego Color Support
const HomeIcon = ({ active }: { active: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={active ? "#78350f" : "#64748b"}
    className="w-5 h-5 transition-colors duration-300"
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
    className="w-5 h-5 transition-colors duration-300"
  >
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
  </svg>
);

const ProjectIcon = ({ active }: { active: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={active ? "#ffffff" : "#64748b"}
    className="w-5 h-5 transition-colors duration-300"
  >
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1.5A1.5 1.5 0 004.5 6v12a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0018 4.5H6zm3 4.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 019 9zm0 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm.75 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" clipRule="evenodd" />
  </svg>
);

const ContactIcon = ({ active }: { active: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={active ? "#ffffff" : "#64748b"}
    className="w-5 h-5 transition-colors duration-300"
  >
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A9.75 9.75 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
  </svg>
);

const CertificatesIcon = ({ active }: { active: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={active ? "#ffffff" : "#64748b"}
    className="w-5 h-5 transition-colors duration-300"
  >
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const navItems = [
  { id: "hero", label: "Home", icon: (active: boolean) => <HomeIcon active={active} /> },
  { id: "about", label: "About", icon: (active: boolean) => <AboutIcon active={active} /> },
  { id: "work", label: "My Work", icon: (active: boolean) => <ProjectIcon active={active} /> },
  { id: "certificates", label: "Certs", icon: (active: boolean) => <CertificatesIcon active={active} /> },
  { id: "contact", label: "Kontak", icon: (active: boolean) => <ContactIcon active={active} /> },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("hero");
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  const colors = [
    { bg: "bg-amber-400 border-amber-500 shadow-[0_3px_0_#b45309]", stud: "bg-amber-400 border-amber-300", text: "text-amber-950 font-black" },
    { bg: "bg-orange-500 border-orange-600 shadow-[0_3px_0_#9a3412]", stud: "bg-orange-500 border-orange-400", text: "text-white font-black" },
    { bg: "bg-blue-600 border-blue-700 shadow-[0_3px_0_#1e3a8a]", stud: "bg-blue-600 border-blue-400", text: "text-white font-black" },
    { bg: "bg-emerald-500 border-emerald-600 shadow-[0_3px_0_#047857]", stud: "bg-emerald-500 border-emerald-400", text: "text-white font-black" },
    { bg: "bg-red-600 border-red-700 shadow-[0_3px_0_#7f1d1d]", stud: "bg-red-600 border-red-400", text: "text-white font-black" },
  ];

  const activeIndex = navItems.findIndex((item) => item.id === activeTab);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
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
    const nextTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    themeListeners.forEach((listener) => listener());
  };

  return (
    <header
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 select-none"
      style={{
        width: "min(420px, 95vw)",
        height: "64px",
        background: "var(--navbar-bg, rgba(241,245,249,1))",
        border: "1px solid rgba(226,232,240,1)",
        borderRadius: "1rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        display: "flex",
        alignItems: "center",
        padding: "0 4px",
      }}
    >
      {/* Dark mode CSS variable override */}
      <style>{`
        .dark header {
          --navbar-bg: rgba(15,23,42,1);
          border-color: rgba(30,41,59,1);
        }
      `}</style>

      {/* Grey Lego Studs on top of the navbar baseplate */}
      <div className="flex gap-2 justify-center absolute top-[1.5px] left-0 right-0 px-4 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-1.5 bg-slate-100 dark:bg-slate-900 rounded-t border-t border-slate-200 dark:border-slate-800 shadow-sm"
          />
        ))}
      </div>

      {/* Navigation Items — flex row, each item takes equal space */}
      <div className="relative flex-1 h-full flex min-w-0">
        {/* Sliding 3D Lego Brick Indicator */}
        {activeIndex !== -1 && (
          <div
            className="absolute top-1 bottom-1.5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0 pointer-events-none"
            style={{
              width: `${100 / navItems.length}%`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          >
            <div className={`w-full h-full rounded-xl border ${colors[activeIndex].bg} relative`}>
              {/* Lego Studs on top of sliding block */}
              <div className="flex gap-1.5 justify-center absolute -top-1 left-0 right-0">
                <div className={`w-2.5 h-1 rounded-t border-t shadow-sm ${colors[activeIndex].stud}`} />
                <div className={`w-2.5 h-1 rounded-t border-t shadow-sm ${colors[activeIndex].stud}`} />
              </div>
            </div>
          </div>
        )}

        {navItems.map((item, idx) => {
          const isActive = activeTab === item.id;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className="flex-1 h-full flex flex-col justify-center items-center z-10 relative pb-1 min-w-0"
            >
              {/* Icon */}
              <div className="transition-transform duration-200 hover:scale-110 flex items-center justify-center">
                {item.icon(isActive)}
              </div>

              {/* Item Label */}
              <span
                className={`text-[9px] font-bold tracking-wide transition-colors duration-200 mt-0.5 leading-none whitespace-nowrap ${
                  isActive ? colors[idx].text : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Vertical Divider line */}
      <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 -shrink-0 mx-0.5" />

      {/* Theme Toggle Button — fixed width so it never gets squeezed */}
      <button
        onClick={toggleTheme}
        className="-shrink-0 h-full flex flex-col justify-center items-center cursor-pointer z-10 relative pb-1 hover:scale-105 active:scale-95 transition-all duration-200 group"
        style={{ width: "52px" }}
        aria-label="Toggle dark mode"
      >
        <span className="text-lg transition-transform duration-200 group-hover:rotate-12 leading-none">
          {isMounted ? (theme === "light" ? "☀️" : "🌙") : "☀️"}
        </span>
        <span className="text-[9px] font-bold tracking-wide text-slate-500 dark:text-slate-400 mt-0.5 leading-none">
          {isMounted ? (theme === "light" ? "Light" : "Dark") : "Light"}
        </span>
      </button>
    </header>
  );
}