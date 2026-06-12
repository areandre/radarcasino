import Link from "next/link";
import type { Casino } from "@/lib/casinos";
import { formatRating } from "@/lib/format";

export function ComparisonTable({ casinos }: { casinos: Casino[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-black uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-4">Rank</th>
              <th className="px-5 py-4">Casino</th>
              <th className="px-5 py-4">Bonus</th>
              <th className="px-5 py-4">Rating</th>
              <th className="px-5 py-4">Redemption</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {casinos.map((casino) => (
              <tr key={casino.slug} className="align-middle">
                <td className="px-5 py-4 font-black text-slate-950">#{casino.rank}</td>
                <td className="px-5 py-4">
                  <Link href={`/reviews/${casino.slug}`} className="font-black text-slate-950 hover:underline">
                    {casino.name}
                  </Link>
                  <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">{casino.headline}</p>
                </td>
                <td className="px-5 py-4 font-bold text-slate-800">{casino.bonus}</td>
                <td className="px-5 py-4 font-bold text-emerald-700">{formatRating(casino.rating)}</td>
                <td className="px-5 py-4 text-slate-700">{casino.features.redemptionSpeed}</td>
                <td className="px-5 py-4">
                  <Link href={`/go/${casino.slug}`} target="_blank" rel="sponsored nofollow noopener" className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white hover:bg-slate-800">
                    Visit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
