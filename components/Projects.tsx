import Image from "next/image";
import { title } from "process";

export default function Projects() {
  const projects = [
    {
      title: "E-Voting Pemilihan Ketua OSIS",
      description: "Aplikasi voting digital yang saya buat untuk menyederhanakan pemilihan ketua OSIS di sekolah. Menghindari golput dan mempercepat perhitungan suara secara realtime.",
      tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
      image: "/images/evoting-preview.webp", // Pastikan gambar ini ada di folder public/images
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
    {
      title: "Kantin Digital Sekolah",
      description: "Aplikasi Kantin digital yang saya buat untuk memudahkan siswa memesan makanan tanpa antri. Fitur realtime order tracking dan pembayaran online membuatnya sangat praktis.",
      tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
      // Pastikan gambar ini ada di folder public/images
      image: "/images/evoting-preview.webp",
      repoLink: "https://github.com",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-2">
        Proyek Pilihan 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="relative group bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-xl flex flex-col transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500 hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(99,102,241,0.08)] mt-3">
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
              {/* Light sweep overlay */}
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
    </section>
  );
}