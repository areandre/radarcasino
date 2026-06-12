import { siteConfig } from "@/lib/site";

export function AffiliateDisclosure() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950">
      <strong>Affiliate disclosure:</strong> {siteConfig.disclosure} Always check the operator's current terms, availability, and eligibility rules before signing up.
    </div>
  );
}
