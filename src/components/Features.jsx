import { motion } from "framer-motion";
import { Gauge, Store, Rocket, LineChart } from "lucide-react";

const items = [
  {
    icon: Store,
    title: "Webshop på plads",
    desc: "Vi bygger en moderne, hurtig og konverterende shop – klar til at modtage betalinger fra dag ét.",
  },
  {
    icon: Gauge,
    title: "Hurtig opsætning",
    desc: "Fra idé til første salg på få uger. Alt teknisk håndteres – du fokuserer på dit brand.",
  },
  {
    icon: LineChart,
    title: "Optimering for salg",
    desc: "Konverteringsrate, A/B tests, e-mail flows og tracking – vi sætter det hele op korrekt.",
  },
  {
    icon: Rocket,
    title: "Skaler klar",
    desc: "Vi gør din platform klar til at håndtere vækst, flere produkter og kampagner.",
  },
];

export default function Features() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Alt du behøver for at få dit første salg
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 shadow-lg"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-white/10 p-3">
                <item.icon className="w-5 h-5 text-cyan-300" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
