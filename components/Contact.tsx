"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contacts = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/faza.m.a?igsh=MW9jZDRmb2dhb2I4",
      cardClass: "bg-red-600 border-red-700 shadow-[0_6px_0_#7f1d1d] text-white  flex flex-col justify-center items-center",
      studClass: "bg-red-600 border-red-400",
      labelClass: "text-red-100",
      valueClass: "text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/faza-maf-alul-afif-923738405/",
      cardClass: "bg-blue-600 border-blue-700 shadow-[0_6px_0_#1e3a8a] text-white flex flex-col justify-center items-center",
      studClass: "bg-blue-600 border-blue-400",
      labelClass: "text-blue-100",
      valueClass: "text-white"
    },
    {
      name: "GitHub",
      href: "https://github.com/fazamafif/fazamafif",
      cardClass: "bg-amber-400 border-amber-500 shadow-[0_6px_0_#b45309] text-amber-950  flex flex-col justify-center items-center",
      studClass: "bg-amber-400 border-amber-300",
      labelClass: "text-amber-900",
      valueClass: "text-amber-950 font-bold"
    }
  ];

  // 1. Tempat logika handleSubmit diletakkan (DI ATAS return, DI DALAM komponen)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validasi dasar memastikan tidak ada field yang kosong
    if (!formData.name || !formData.email || !formData.message) {
      alert("Semua kolom formulir wajib diisi!");
      return;
    }

    // Objek penampung data untuk dikirim ke API Web3Forms
    const dataToSend = {
      // Mengambil kunci aman dari file .env.local
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string, 
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        // Memicu tampilan kotak sukses hijau bawaan UI Anda
        setSubmitted(true);
        
        // Reset form otomatis setelah 5 detik
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 5000);
      } else {
        alert("Gagal mengirim pesan: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan jaringan.");
    }
  };

  // 2. Awal dari blok tampilan UI komponen Anda
  return (
    <section id="contact" className="space-y-8 scroll-mt-20">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-2">
        Mari Terhubung! 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column - Lego Info Cards (occupies 5 cols) */}
        <div className="md:col-span-5 flex flex-col gap-6 pt-3">
          {contacts.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group flex items-center gap-4 p-5 border rounded-2xl transition-all duration-200 hover:scale-[1.03] hover:translate-y-[2px] ${item.cardClass}`}
            >
              {/* Lego Studs on top */}
              <div className="flex gap-2 justify-center absolute -top-[8px] left-0 right-0 z-20">
                <div className={`w-4 h-2 rounded-t border-t shadow-sm ${item.studClass}`} />
                <div className={`w-4 h-2 rounded-t border-t shadow-sm ${item.studClass}`} />
                <div className={`w-4 h-2 rounded-t border-t shadow-sm ${item.studClass}`} />
                <div className={`w-4 h-2 rounded-t border-t shadow-sm ${item.studClass}`} />
              </div>

              <div>
                <h3 className={`text-xs font-bold uppercase tracking-wider ${item.labelClass}`}>{item.name}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* Right Column - Liquid Glass Contact Form (occupies 7 cols) */}
        <div className="md:col-span-7 p-6 md:p-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg border border-white/50 dark:border-slate-800/50 shadow-lg rounded-3xl">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6">
            Kirim Pesan 
          </h3>

          {submitted ? (
            <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-xl text-green-600 dark:text-green-400 font-medium text-center animate-fade-in-down">
              Pesan berhasil terkirim! Terima kasih telah menghubungi saya.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name" // <-- Sudah ditambahkan
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email" // <-- Sudah ditambahkan
                  required
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Isi Pesan
                </label>
                <textarea
                  rows={4}
                  name="message" // <-- Sudah ditambahkan
                  required
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                {/* Lego Green Button */}
                <button
                  type="submit"
                  className="relative w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-[0_4px_0_#15803d] transition-all duration-100 hover:translate-y-[2px] hover:shadow-[0_2px_0_#15803d] active:translate-y-[4px] active:shadow-none select-none cursor-pointer"
                >
                  {/* Lego Studs */}
                  <div className="flex gap-2 justify-center absolute -top-[6px] left-0 right-0">
                    <div className="w-3.5 h-1.5 bg-green-500 rounded-t border-t border-green-300 shadow-sm" />
                    <div className="w-3.5 h-1.5 bg-green-500 rounded-t border-t border-green-300 shadow-sm" />
                    <div className="w-3.5 h-1.5 bg-green-500 rounded-t border-t border-green-300 shadow-sm" />
                  </div>
                  Kirim Pesan
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  ); // 3. Akhir dari return komponen
}
