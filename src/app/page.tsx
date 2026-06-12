import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { CasinoCard } from "@/components/CasinoCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { getFeaturedCasinos, getRankedCasinos } from "@/lib/casinos";

export default function HomePage() {
  const featured = getFeaturedCasinos(3);
  const ranked = getRankedCasinos();

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AffiliateDisclosure />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Top picks" title="Best sweepstakes casino offers">
          <p>Replace these placeholder brands with real operators, real offer data, and your own editorial testing notes.</p>
        </SectionHeader>
        <div className="grid gap-5">
          {featured.map((casino) => (
            <CasinoCard key={casino.slug} casino={casino} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Compare" title="Full comparison table">
          <p>Use this table for quick affiliate clicks, review navigation, and bonus comparison.</p>
        </SectionHeader>
        <ComparisonTable casinos={ranked} />
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Reviews", "Detailed casino review templates with pros, cons, scores, and affiliate CTAs.", "/casinos"],
            ["Bonuses", "A bonus hub for welcome offers, no-purchase options, and daily rewards.", "/bonuses"],
            ["State guides", "Landing pages for users searching by state and availability.", "/states"]
          ].map(([title, text, href]) => (
            <Link key={title} href={href} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:bg-white hover:shadow-soft">
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Beginner questions" />
        <FAQ />
      </section>
    </>
  );
}
