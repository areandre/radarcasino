import Link from "next/link";
import type { Casino } from "@/lib/casinos";
import { formatRating } from "@/lib/format";
import { CasinoLogo } from "@/components/CasinoLogo";

export function CasinoCard({ casino, compact = false }: { casino: Casino; compact?: boolean }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-4">
          <CasinoLogo text={casino.logoText} name={casino.name} />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">#{casino.rank}</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{formatRating(casino.rating)}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{casino.bonusLabel}</span>
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{casino.name}</h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">{casino.headline}</p>
            {!compact && (
              <ul className="mt-3 grid gap-1 text-sm text-slate-700 sm:grid-cols-2">
                {casino.pros.slice(0, 2).map((pro) => (
                  <li key={pro}>+ {pro}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="min-w-[220px] rounded-2xl bg-slate-50 p-4 text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Bonus</p>
          <p className="mt-1 text-xl font-black text-slate-950">{casino.bonus}</p>
          <div className="mt-4 grid gap-2">
            <Link href={`/go/${casino.slug}`} target="_blank" rel="sponsored nofollow noopener" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white hover:bg-emerald-600">
              {casino.cta}
            </Link>
            <Link href={`/reviews/${casino.slug}`} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:bg-white">
              Read Review
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
