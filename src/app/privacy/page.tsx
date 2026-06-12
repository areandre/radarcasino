import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy template."
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Privacy policy</h1>
        <p className="mt-6 leading-7 text-slate-600">
          This is a starter privacy policy placeholder. Replace it with a policy reviewed for your business, analytics tools, affiliate networks, cookies, email capture tools, and jurisdictions.
        </p>
        <h2 className="mt-8 text-2xl font-black text-slate-950">Contact</h2>
        <p className="mt-4 leading-7 text-slate-600">Questions can be sent to {siteConfig.supportEmail}.</p>
      </div>
    </div>
  );
}
