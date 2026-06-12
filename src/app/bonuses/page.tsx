import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { SectionHeader } from "@/components/SectionHeader";
import { getRankedCasinos } from "@/lib/casinos";

export const metadata: Metadata = {
  title: "Sweepstakes Casino Bonuses and Promo Codes",
  description: "Compare welcome bonuses, daily rewards, and promo-code style offers from sweepstakes casinos."
};

export default function BonusesPage() {
  const casinos = getRankedCasinos();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Bonus hub" title="Sweepstakes casino bonuses">
        <p>Create dedicated pages for welcome bonuses, no-purchase options, daily login rewards, and promo codes. This starter uses one bonus hub for speed.</p>
      </SectionHeader>
      <AffiliateDisclosure />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {casinos.map((casino) => (
          <article key={casino.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-black uppercase tracking-wide text-emerald-600">{casino.bonusLabel}</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">{casino.name}</h2>
            <p className="mt-2 text-3xl font-black text-slate-950">{casino.bonus}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">{casino.headline}</p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Link href={`/go/${casino.slug}`} target="_blank" rel="sponsored nofollow noopener" className="rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-black text-white hover:bg-emerald-600">
                {casino.cta}
              </Link>
              <Link href={`/reviews/${casino.slug}`} className="rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-bold text-slate-800 hover:bg-slate-50">
                Read Review
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
