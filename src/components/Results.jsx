import { motion } from "framer-motion";

export default function Results() {
  return (
    <section id="results" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Resultater der mærkes
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {["+18% konvertering", "2-4 uger til launch", "100% klar til skalering"].map((t, i) => (
            <motion.div
              key={t}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 text-center"
            >
              <div className="text-2xl font-bold text-white">{t}</div>
              <div className="mt-2 text-slate-300 text-sm">Faktiske forbedringer set på kundecases.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
