import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
            <span className="text-sm font-semibold">Nebula Finance</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-zinc-400">
            A dark-themed fintech experience for modern teams. Analytics, payments, and treasury in one place.
          </p>
        </div>
        <div className="text-sm text-zinc-400">
          <div className="font-medium text-zinc-300">Resources</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#docs" className="hover:text-zinc-200">Documentation</a></li>
            <li><a href="#pricing" className="hover:text-zinc-200">Pricing</a></li>
            <li><a href="#features" className="hover:text-zinc-200">Features</a></li>
          </ul>
        </div>
        <div className="text-sm text-zinc-400">
          <div className="font-medium text-zinc-300">Legal</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-zinc-200">Privacy</a></li>
            <li><a href="#" className="hover:text-zinc-200">Terms</a></li>
            <li><a href="#" className="hover:text-zinc-200">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Nebula Finance. All rights reserved.
      </div>
    </footer>
  );
}
