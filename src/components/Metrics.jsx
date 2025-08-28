import React from "react";

const items = [
  { label: "Managed Volume", value: "$4.2B", change: "+12.4% MoM" },
  { label: "Active Accounts", value: "284k", change: "+8.1%" },
  { label: "Avg. Settlement", value: "1.2s", change: "-23% latency" },
  { label: "Fraud Detection", value: "99.3%", change: "+0.7%" },
];

export default function Metrics() {
  return (
    <section id="features" className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Built for performance</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400 md:text-base">
            Scalable infrastructure, bank‑grade security, and real‑time analytics. Everything you need to ship modern financial products.
          </p>
        </div>
        <a href="#docs" className="hidden text-sm text-indigo-400 hover:text-indigo-300 md:inline">Explore docs →</a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div
            key={i.label}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-xl shadow-black/30"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(99,102,241,0.15), transparent 40%)" }} />
            <div className="relative">
              <div className="text-xs uppercase tracking-wide text-zinc-400">{i.label}</div>
              <div className="mt-2 text-3xl font-semibold text-white">{i.value}</div>
              <div className="mt-1 text-xs text-emerald-400">{i.change}</div>
            </div>
          </div>
        ))}
      </div>

      <div id="pricing" className="mt-14 grid gap-6 md:grid-cols-3">
        <PricingCard title="Starter" price="$0" description="For personal finance and prototypes" features={["Unlimited wallets","Basic analytics","Community support"]} cta="Start free" />
        <PricingCard title="Growth" price="$29" highlight description="For SaaS and small teams" features={["Team accounts","Realtime webhooks","Priority support"]} cta="Upgrade" />
        <PricingCard title="Enterprise" price="Custom" description="For scale, compliance, and SLAs" features={["SAML/SSO","Audit trails","Dedicated support"]} cta="Talk to sales" />
      </div>
    </section>
  );
}

function PricingCard({ title, price, description, features, cta, highlight }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border ${highlight ? "border-indigo-400/40" : "border-white/10"} bg-white/5 p-6 shadow-2xl shadow-black/30`}>
      {highlight && (
        <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-2 py-1 text-[10px] font-medium tracking-wide text-white">
          Popular
        </div>
      )}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-zinc-400">{description}</p>
      <div className="mt-4 text-4xl font-bold text-white">{price}<span className="ml-1 text-base font-normal text-zinc-400">{price !== "Custom" ? "/mo" : ""}</span></div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> {f}
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-medium ${highlight ? "bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white" : "border border-white/10 text-zinc-200 hover:bg-white/5"}`}>
        {cta}
      </button>
    </div>
  );
}
