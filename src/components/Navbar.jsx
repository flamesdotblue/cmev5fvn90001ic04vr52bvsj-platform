import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/20" />
          <span className="text-lg font-semibold tracking-tight">Nebula Finance</span>
        </div>
        <ul className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#docs" className="hover:text-white transition-colors">Docs</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 md:inline-flex">Sign in</button>
          <button className="rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 hover:from-indigo-500 hover:to-fuchsia-500">Get started</button>
        </div>
      </nav>
    </header>
  );
}
