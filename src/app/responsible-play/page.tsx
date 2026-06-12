import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Play",
  description: "Responsible play information and safety reminders."
};

export default function ResponsiblePlayPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Responsible play</h1>
        <p className="mt-6 leading-7 text-slate-600">
          This site is for adults only. Set limits, never spend money you cannot afford to lose, and do not treat sweepstakes casino promotions as a way to make income.
        </p>
        <ul className="mt-6 grid gap-3 text-slate-700">
          <li>+ Use time and spending limits.</li>
          <li>+ Read official rules before participating.</li>
          <li>+ Take breaks if play stops being fun.</li>
          <li>+ Use operator self-exclusion or account limits where available.</li>
          <li>+ Seek professional support if gambling or gaming behavior feels difficult to control.</li>
        </ul>
      </div>
    </div>
  );
}
