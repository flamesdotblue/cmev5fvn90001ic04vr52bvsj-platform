import React from "react";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-10 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Real-time market insights
          </div>
          <h1 className="text-balance bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
            The dark, elegant way to manage your money
          </h1>
          <p className="mt-4 max-w-prose text-pretty text-zinc-300/90 md:text-lg">
            Nebula Finance is a next‑gen fintech platform for analytics, payments, and treasury. Explore your data through an immersive 3D canvas of micro‑dashboards.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200">Create account</button>
            <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5">Live demo</button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-zinc-400">
            <div className="flex -space-x-2">
              <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-600 ring-2 ring-black" />
              <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-600 ring-2 ring-black" />
              <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-tr from-orange-500 to-pink-600 ring-2 ring-black" />
            </div>
            <span>Trusted by builders and teams worldwide</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/50">
            <iframe
              title="Spline 3D - Multiple little screens"
              src="https://my.spline.design/thegreatvideotemplate-fxadBztqKB7okGHS8gw9jyN1/"
              loading="lazy"
              allow="fullscreen; xr-spatial-tracking"
              allowFullScreen
              className="h-[380px] w-full md:h-[520px]"
              style={{ display: "block" }}
            />
          </div>
          <p className="mt-3 text-center text-xs text-zinc-400">
            3D experience: multiple little screens in center and grid configurations
          </p>
        </div>
      </div>
    </section>
  );
}
