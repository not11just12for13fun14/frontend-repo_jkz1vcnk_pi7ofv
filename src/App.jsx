import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Results from "./components/Results";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.06),transparent_40%)]"></div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Process />
        <Results />
        <CTA />
      </main>

      <footer className="relative py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} FørsteSalg — Vi bygger fundamentet til dit første salg
        </div>
      </footer>
    </div>
  );
}

export default App;
