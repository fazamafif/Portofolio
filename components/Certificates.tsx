"use client";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/types/certificate";

// Lebar + gap tiap kartu (px) — harus sinkron dengan CARD_WIDTH di bawah
const CARD_WIDTH = 260;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;

// Lazy load modal sertifikat sehingga tidak membengkakkan main bundle saat initial load
const CertificateModal = dynamic(() => import("./CertificateModal"), {
  ssr: false,
});

/* ─── Komponen utama ────────────────────────────────────────────────────────── */
export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = certificates.length;

  /* Scroll carousel ke kartu tertentu */
  const scrollTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, total - 1));
      setCurrentIndex(clamped);
      if (trackRef.current) {
        trackRef.current.scrollTo({ left: clamped * STEP, behavior: "smooth" });
      }
    },
    [total]
  );

  /* Sinkronisasi counter saat user geser manual */
  const handleScroll = () => {
    if (trackRef.current) {
      const idx = Math.round(trackRef.current.scrollLeft / STEP);
      setCurrentIndex(Math.max(0, Math.min(idx, total - 1)));
    }
  };

  /* Navigasi dalam modal */
  const modalPrev = useCallback(() => {
    if (modalIndex === null) return;
    const next = Math.max(0, modalIndex - 1);
    setModalIndex(next);
    scrollTo(next);
  }, [modalIndex, scrollTo]);

  const modalNext = useCallback(() => {
    if (modalIndex === null) return;
    const next = Math.min(total - 1, modalIndex + 1);
    setModalIndex(next);
    scrollTo(next);
  }, [modalIndex, total, scrollTo]);

  return (
    <section
      id="certificates"
      className="scroll-mt-20 py-16 bg-linear-to-b from-white/60 dark:from-slate-900/60 backdrop-blur-lg overflow-hidden"
    >
      {/* ── Header: judul + counter + panah ─────────────────────────── */}
      <div className="flex items-center justify-between px-6 max-w-5xl mx-auto mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          Sertifikat Saya
        </h2>

        <div className="flex items-center gap-3">
          {/* Badge counter */}
          <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm">
            <span>{currentIndex + 1}</span>
            <span className="text-slate-400">/</span>
            <span>{total}</span>
          </span>

          {/* Tombol Prev */}
          <button
            onClick={() => scrollTo(currentIndex - 1)}
            disabled={currentIndex === 0 || undefined}
            aria-label="Sertifikat sebelumnya"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-600 dark:text-slate-300">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Tombol Next */}
          <button
            onClick={() => scrollTo(currentIndex + 1)}
            disabled={currentIndex === total - 1 || undefined}
            aria-label="Sertifikat berikutnya"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-600 dark:text-slate-300">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Track kartu horizontal ──────────────────────────────────── */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="cert-track flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
      >
        {certificates.map((cert: Certificate, idx: number) => (
          <button
            key={cert.id}
            onClick={() => {
              setModalIndex(idx);
              scrollTo(idx);
            }}
            className="group relative flex-none w-65 aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/70 shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700/80 snap-start transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label={`Lihat sertifikat ${idx + 1}`}
          >
            {/* Wrapper div menggunakan aspect-[4/3] responsif tanpa fixed height */}
            <div className="relative w-full h-full aspect-4/3 flex items-center justify-center p-2">
              <Image
                src={cert.image}
                alt={`Certificate ${idx + 1}`}
                fill
                sizes="260px"
                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Overlay "View" saat hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-bold text-sm tracking-widest uppercase drop-shadow">
                View
              </span>
            </div>

            {/* Badge nomor urut */}
            <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {idx + 1}
            </div>
          </button>
        ))}
      </div>

      {/* ── Dot indicators (accessible tap targets minimum 28x28px) ── */}
      <div className="flex justify-center items-center gap-1 mt-4">
        {certificates.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollTo(idx)}
            aria-label={`Pergi ke sertifikat ${idx + 1}`}
            className="flex items-center justify-center p-2 min-w-[32px] min-h-[32px] cursor-pointer"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: idx === currentIndex ? "20px" : "8px",
                height: "8px",
                backgroundColor:
                  idx === currentIndex
                    ? "rgb(251 191 36)"   /* amber-400 */
                    : "rgb(203 213 225)", /* slate-300 */
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Modal / Lightbox ───────────────────────────────────────── */}
      {modalIndex !== null && (
        <CertificateModal
          cert={certificates[modalIndex]}
          index={modalIndex}
          total={total}
          onClose={() => setModalIndex(null)}
          onPrev={modalPrev}
          onNext={modalNext}
        />
      )}
    </section>
  );
}
