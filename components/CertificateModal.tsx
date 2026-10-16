"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import type { Certificate } from "@/types/certificate";

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
  // Navigasi keyboard (Escape untuk tutup, panah kiri/kanan untuk navigasi antar sertifikat)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Kunci scroll halaman belakang saat modal aktif
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    /* 1. Struktur Modal & Backdrop (Latar Belakang Gelap) */
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail Sertifikat ${index + 1}`}
    >
      {/* Wadah Kotak Dialog Pembungkus Konten */}
      <div
        className="relative w-[95vw] max-w-6xl h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 2. Pembungkus Komponen Image Berukuran Penuh */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 3. Posisi Tombol "X" (Close) di Pojok Kanan Atas Gambar */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup modal sertifikat"
            className="absolute top-2 right-2 z-50 bg-zinc-900/80 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>

          {/* Foto Sertifikat (fill & object-contain tanpa terpotong) */}
          <Image
            src={cert.image}
            alt={`Sertifikat ${index + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 95vw, (max-width: 1280px) 90vw, 1200px"
            className="object-contain w-full h-full"
          />
        </div>

        {/* 4. Navigasi & Indikator (Counter di Kiri, Tombol Panah Navigasi di Kanan) */}
        <div className="flex items-center justify-between w-full pt-3 px-1 sm:px-2">
          {/* Info Sertifikat / Counter (Kiri Bawah) */}
          <div className="flex items-center gap-2 text-sm text-white/80 font-medium tabular-nums">
            <span className="text-white font-bold text-base">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/60">Certificate {index + 1}</span>
          </div>

          {/* Grup Tombol Panah Navigasi (Kanan Bawah) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Tombol Panah Kiri (Previous) */}
            <button
              type="button"
              onClick={onPrev}
              disabled={index === 0}
              aria-label="Sertifikat sebelumnya"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-200 hover:bg-white/25 hover:scale-105 active:scale-95 disabled:opacity-25 disabled:pointer-events-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Tombol Panah Kanan (Next) */}
            <button
              type="button"
              onClick={onNext}
              disabled={index === total - 1}
              aria-label="Sertifikat berikutnya"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-200 hover:bg-white/25 hover:scale-105 active:scale-95 disabled:opacity-25 disabled:pointer-events-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
