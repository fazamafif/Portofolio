export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-8 mt-12 text-slate-500">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between text-sm">
        <p>&copy; {new Date().getFullYear()} Faza Maf&apos;Alul Afif. Dibuat dengan 💻 & Lego.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/fazamafif/fazamafif" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
          <a href="mailto:fazamafalul@gmail.com" className="hover:text-indigo-600 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}