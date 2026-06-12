import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { getRankedCasinos } from "@/lib/casinos";

export const metadata: Metadata = {
  title: "Sweepstakes Casino Banking and Redemption Guide",
  description: "Learn how redemption, payment methods, KYC checks, and processing times usually work for sweepstakes casinos."
};

export default function BankingPage() {
  const casinos = getRankedCasinos();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Banking" title="Redemption and banking guide">
        <p>Use this hub to rank operators by redemption speed, minimum redemption, identity checks, and payment methods.</p>
      </SectionHeader>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">What to verify</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
            <li>+ Minimum redemption amount</li>
            <li>+ Processing window and delays</li>
            <li>+ KYC identity verification requirements</li>
            <li>+ Payment and gift-card options</li>
            <li>+ Excluded states and account restrictions</li>
          </ul>
        </section>
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-black uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-4">Casino</th>
                <th className="px-5 py-4">Minimum</th>
                <th className="px-5 py-4">Speed</th>
                <th className="px-5 py-4">Methods</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {casinos.map((casino) => (
                <tr key={casino.slug}>
                  <td className="px-5 py-4 font-black text-slate-950">{casino.name}</td>
                  <td className="px-5 py-4">{casino.features.minimumRedemption}</td>
                  <td className="px-5 py-4">{casino.features.redemptionSpeed}</td>
                  <td className="px-5 py-4">{casino.features.paymentMethods}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
