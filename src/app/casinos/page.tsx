import type { Metadata } from "next";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { CasinoCard } from "@/components/CasinoCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SectionHeader } from "@/components/SectionHeader";
import { getRankedCasinos } from "@/lib/casinos";

export const metadata: Metadata = {
  title: "Best Sweepstakes Casinos",
  description: "Compare sweepstakes casino bonuses, features, redemption notes, and review scores."
};

export default function CasinosPage() {
  const casinos = getRankedCasinos();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Rankings" title="Best sweepstakes casinos">
        <p>Use this page as your main money page. Update the rankings only after checking each operator's current offer, terms, and state restrictions.</p>
      </SectionHeader>
      <AffiliateDisclosure />
      <div className="mt-8 grid gap-5">
        {casinos.map((casino) => (
          <CasinoCard key={casino.slug} casino={casino} />
        ))}
      </div>
      <div className="mt-10">
        <ComparisonTable casinos={casinos} />
      </div>
    </div>
  );
}
