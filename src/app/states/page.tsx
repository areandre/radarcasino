import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { states } from "@/lib/states";

export const metadata: Metadata = {
  title: "Sweepstakes Casino State Guides",
  description: "Browse sweepstakes casino availability notes by US state."
};

export default function StatesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="State guides" title="Sweepstakes casino guides by state">
        <p>These pages help users find state-specific availability notes. Replace placeholder data with reviewed operator terms and legal guidance where needed.</p>
      </SectionHeader>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {states.map((state) => (
          <Link key={state.code} href={`/states/${state.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-slate-950 shadow-soft hover:bg-slate-50">
            {state.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
