import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-blue-500/30 via-cyan-400/30 to-indigo-500/30 blur"></div>
              <div className="relative rounded-xl bg-slate-900/90 border border-white/10 p-2.5">
                <Sparkles className="w-5 h-5 text-cyan-300" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">FørsteSalg</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition">Løsning</a>
            <a href="#process" className="hover:text-white transition">Proces</a>
            <a href="#results" className="hover:text-white transition">Resultater</a>
            <a href="#cta" className="hover:text-white transition">Kontakt</a>
          </div>

          <button className="md:hidden text-slate-200" aria-label="menu">
            <Menu className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
