import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 to-slate-900/60 backdrop-blur p-8 text-center shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">Klar til dit første salg?</h3>
          <p className="mt-3 text-slate-300">Fortæl kort om dit brand og produkt, så vender vi tilbage med en konkret plan.</p>
          <form className="mt-6 grid sm:grid-cols-2 gap-3 text-left">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Navn" />
            <input type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
            <input className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Link til din TikTok/brand" />
            <textarea rows={4} className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Hvad vil du sælge?" />
            <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">Send besked</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
