import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(32,33,41,0.6),rgba(6,7,10,1))] text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>
      <Navbar />
      <main className="relative">
        <Hero />
        <Metrics />
      </main>
      <Footer />
    </div>
  );
}
