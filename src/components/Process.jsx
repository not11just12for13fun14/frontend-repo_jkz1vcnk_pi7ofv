import { motion } from "framer-motion";

const steps = [
  { title: "Kickoff & strategi", text: "Vi gennemgår dit brand, mål og produkter. Vi lægger en plan for at nå første salg." },
  { title: "Opsætning & design", text: "Shop, produkter, betalingsløsning, tracking, e-mail – alt sættes op korrekt." },
  { title: "Lancering", text: "Vi tester checkout, flows og performance – og går live uden friktion." },
  { title: "Optimering", text: "Vi overvåger, forbedrer og skalerer – så dit andet, tredje og tiende salg også kommer." },
];

export default function Process() {
  return (
    <section id="process" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          En enkel, effektiv proces
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6"
            >
              <div className="text-sm text-cyan-300/90">0{i + 1}</div>
              <h3 className="mt-2 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
