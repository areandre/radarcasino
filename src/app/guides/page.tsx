import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Sweepstakes Casino Guides",
  description: "Beginner guides for sweepstakes casinos, virtual currencies, bonuses, and responsible play."
};

const guides = [
  {
    title: "How sweepstakes casinos work",
    text: "Explain virtual currencies, promotional sweepstakes entries, eligibility, and why users must read the official rules."
  },
  {
    title: "Gold Coins vs Sweeps Coins",
    text: "Create a simple glossary that explains the difference between entertainment-only coins and promotional entries where applicable."
  },
  {
    title: "How to compare bonuses",
    text: "Teach readers to check bonus size, playthrough-style rules if any, redemption rules, limits, and expiration."
  },
  {
    title: "Responsible play checklist",
    text: "Add reminders about age limits, budget limits, time limits, support resources, and operator tools."
  }
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Guides" title="Beginner education hub">
        <p>Publish educational articles before scaling aggressive commercial pages. It helps readers trust the site and gives search engines useful supporting content.</p>
      </SectionHeader>
      <div className="grid gap-5 md:grid-cols-2">
        {guides.map((guide) => (
          <article key={guide.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black text-slate-950">{guide.title}</h2>
            <p className="mt-4 leading-7 text-slate-600">{guide.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
