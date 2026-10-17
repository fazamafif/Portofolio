"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Certificate } from "@/types/certificate";

const emptySubscribe = () => () => {};

interface CertificateModalProps {
  cert: Certificate;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function CertificateModal({
  cert,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: CertificateModalProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, onPrev, onNext]);

  if (!isClient) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail Sertifikat ${index + 1}`}
    >
      {/* ── Top Bar: Info Sertifikat & Tombol Close yang Jelas ── */}
      <div
        className="w-full max-w-7xl mx-auto flex items-center justify-between px-2 pt-1 pb-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Info Counter */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-white font-medium shadow-md">
          <span className="font-bold text-amber-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-white/40">/</span>
          <span>{String(total).padStart(2, "0")}</span>
          <span className="text-white/40 hidden sm:inline">·</span>
          <span className="text-white/80 hidden sm:inline">Sertifikat {index + 1}</span>
        </div>

        {/* Tombol Tutup / Close (Sangat Jelas & Menonjol) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup sertifikat"
          className="group flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/15 hover:bg-red-600 text-white font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
        >
          <span>Tutup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:rotate-90"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>

      {/* ── Area Gambar Utama (Hampir Full Layar) & Tombol Navigasi Samping ── */}
      <div
        className="relative w-full max-w-7xl mx-auto flex-1 min-h-0 flex items-center justify-center p-1 sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Panah Kiri (Prev) */}
        <button
          type="button"
          onClick={onPrev}
          disabled={index === 0}
          aria-label="Sertifikat sebelumnya"
          className="absolute left-1 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 border border-white/20 text-white shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-20 disabled:pointer-events-none cursor-pointer backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Kontainer Gambar Full Viewport */}
        <div className="relative w-full h-full max-h-[82vh] flex items-center justify-center">
          <Image
            src={cert.image}
            alt={`Sertifikat ${index + 1}`}
            fill
            priority
            sizes="95vw"
            className="object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Tombol Panah Kanan (Next) */}
        <button
          type="button"
          onClick={onNext}
          disabled={index === total - 1}
          aria-label="Sertifikat berikutnya"
          className="absolute right-1 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 border border-white/20 text-white shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-20 disabled:pointer-events-none cursor-pointer backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* ── Bottom Bar: Indikator & Panduan Shortcut ── */}
      <div
        className="w-full max-w-7xl mx-auto flex items-center justify-center gap-4 px-2 pt-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-white/50 text-xs hidden sm:inline-block">
          Tekan <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20 text-white/70">Esc</kbd> untuk menutup atau gunakan tombol panah <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20 text-white/70">←</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20 text-white/70">→</kbd>
        </span>
      </div>
    </div>,
    document.body
  );
}
