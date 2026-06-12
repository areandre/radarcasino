import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use template."
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Terms of use</h1>
        <p className="mt-6 leading-7 text-slate-600">
          This website provides informational comparison content only. It does not operate casino games, process payments, guarantee availability, guarantee winnings, or provide legal advice.
        </p>
        <p className="mt-4 leading-7 text-slate-600">
          Replace this placeholder with terms drafted for your company, location, affiliate relationships, and data practices.
        </p>
      </div>
    </div>
  );
}
