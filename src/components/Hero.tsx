import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.20),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-emerald-200 ring-1 ring-white/15">Updated comparison hub</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Compare sweepstakes casinos, bonuses, and redemption options.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{siteConfig.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/casinos" className="rounded-full bg-emerald-500 px-6 py-4 text-center text-sm font-black text-white hover:bg-emerald-600">
              See Top Casinos
            </Link>
            <Link href="/guides" className="rounded-full bg-white px-6 py-4 text-center text-sm font-black text-slate-950 hover:bg-slate-100">
              Learn How It Works
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-200">Our review checklist</p>
          <div className="mt-6 grid gap-4">
            {["Bonus value and terms", "Game variety", "Redemption methods", "State availability", "Responsible play tools"].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-white ring-1 ring-white/10">+ {item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
