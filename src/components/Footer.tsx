import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-xl font-black">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Independent sweepstakes casino comparisons, bonus guides, redemption explainers, and state availability notes. Not a gambling operator. No real-money gambling is offered on this website.
          </p>
          <p className="mt-4 text-xs text-slate-400">For adults only: {siteConfig.minAge}. Play responsibly.</p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/casinos">Best Casinos</Link>
            <Link href="/bonuses">Bonuses</Link>
            <Link href="/states">State Guides</Link>
            <Link href="/banking">Banking</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Legal</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/legal">Affiliate Disclosure</Link>
            <Link href="/responsible-play">Responsible Play</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
