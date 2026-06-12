import type { Casino } from "@/lib/casinos";
import { percent } from "@/lib/format";

const labels: Array<{ key: keyof Casino["scores"]; label: string }> = [
  { key: "bonus", label: "Bonus value" },
  { key: "games", label: "Game variety" },
  { key: "redemption", label: "Redemption" },
  { key: "trust", label: "Trust signals" }
];

export function RatingBars({ casino }: { casino: Casino }) {
  return (
    <div className="grid gap-4">
      {labels.map((item) => (
        <div key={item.key}>
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
            <span>{item.label}</span>
            <span>{casino.scores[item.key].toFixed(1)}/10</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-slate-950" style={{ width: percent(casino.scores[item.key]) }} />
          </div>
        </div>
      ))}
    </div>
  );
}
