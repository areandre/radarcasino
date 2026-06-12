import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/casinos", label: "Best Casinos" },
  { href: "/bonuses", label: "Bonuses" },
  { href: "/states", label: "States" },
  { href: "/banking", label: "Banking" },
  { href: "/guides", label: "Guides" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">SS</span>
          <span>
            <span className="block text-lg font-black tracking-tight text-slate-950">{siteConfig.name}</span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">Social casino comparison</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/casinos" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-soft hover:bg-slate-800">
          Compare Offers
        </Link>
      </div>
    </header>
  );
}
