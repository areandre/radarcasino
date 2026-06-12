import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { CasinoCard } from "@/components/CasinoCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getCasinosForState } from "@/lib/casinos";
import { getStateBySlug, states } from "@/lib/states";

type Props = {
  params: Promise<{ state: string }>;
};

export function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) {
    return { title: "State guide not found" };
  }

  return {
    title: `Best Sweepstakes Casinos in ${state.name}`,
    description: `Compare sweepstakes casino offers and availability notes for ${state.name}.`
  };
}

export default async function StatePage({ params }: Props) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) {
    notFound();
  }

  const casinos = getCasinosForState(state.code);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="State guide" title={`Best sweepstakes casinos in ${state.name}`}>
        <p>This is not legal advice. Availability depends on the operator's current terms, local rules, and user eligibility. Verify every operator before publishing this page.</p>
      </SectionHeader>
      <AffiliateDisclosure />
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-black text-slate-950">How we filter {state.name}</h2>
        <p className="mt-4 leading-7 text-slate-600">
          The sample filter removes casinos where {state.code} appears in the casino's restrictedStates field. Edit src/content/casinos.json to update these restrictions after checking official operator terms.
        </p>
      </div>
      <div className="mt-8 grid gap-5">
        {casinos.length > 0 ? (
          casinos.map((casino) => <CasinoCard key={casino.slug} casino={casino} />)
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="font-bold text-slate-700">No sample casinos are currently marked as available for this state. Update your data after checking operator terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
