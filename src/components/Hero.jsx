import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-20 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Vi gør din første online handel til virkelighed
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-slate-300"
            >
              Driver du en TikTok eller skaber produkter, men mangler webshop, setup og optimering? Vi bygger hele fundamentet og får dig til dit første salg – hurtigt og professionelt.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition"
              >
                Start dit projekt
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-white/90 font-medium hover:bg-white/5 transition"
              >
                Se hvordan vi arbejder
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center gap-6 text-slate-300/80"
            >
              <div className="text-sm">Komplet opsætning • Klar til salg • Skalerbar</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-indigo-400/30 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-to-tr from-cyan-400/30 to-indigo-400/30 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-4 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzQ1MjcwNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="dashboard" className="rounded-2xl object-cover aspect-video" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
