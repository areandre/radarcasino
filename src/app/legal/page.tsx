import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure and editorial policy."
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Affiliate disclosure</h1>
        <p className="mt-6 leading-7 text-slate-600">{siteConfig.disclosure}</p>
        <h2 className="mt-8 text-2xl font-black text-slate-950">Editorial policy</h2>
        <p className="mt-4 leading-7 text-slate-600">
          Rankings should be based on documented criteria such as bonus value, terms, redemption options, state availability, user experience, support quality, and responsible play tools. Affiliate compensation should not be the only ranking factor.
        </p>
        <h2 className="mt-8 text-2xl font-black text-slate-950">Important note</h2>
        <p className="mt-4 leading-7 text-slate-600">
          This website is not a gambling operator, law firm, financial advisor, or consumer protection agency. Always verify information directly with the operator and seek qualified legal advice where needed.
        </p>
      </div>
    </div>
  );
}
