import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { CasinoLogo } from "@/components/CasinoLogo";
import { RatingBars } from "@/components/RatingBars";
import { getCasino, casinos } from "@/lib/casinos";
import { formatRating } from "@/lib/format";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return casinos.map((casino) => ({ slug: casino.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const casino = getCasino(slug);

  if (!casino) {
    return { title: "Review not found" };
  }

  return {
    title: `${casino.name} Review, Bonus and Redemption Guide`,
    description: `${casino.name} review with bonus details, pros and cons, redemption notes, state availability cautions, and affiliate disclosure.`
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const casino = getCasino(slug);

  if (!casino) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: casino.name
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: casino.rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: casino.review.summary
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div className="flex gap-5">
            <CasinoLogo text={casino.logoText} name={casino.name} />
            <div>
              <p className="text-sm font-bold text-emerald-300">Rank #{casino.rank} sweepstakes casino review</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{casino.name} Review</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{casino.headline}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
                <span className="rounded-full bg-white px-4 py-2 text-slate-950">Rating: {formatRating(casino.rating)}</span>
                <span className="rounded-full bg-emerald-500 px-4 py-2 text-white">Bonus: {casino.bonus}</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 text-slate-950 shadow-soft">
            <p className="text-sm font-black uppercase tracking-wide text-slate-500">Current offer</p>
            <p className="mt-2 text-3xl font-black">{casino.bonus}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">Verify this offer directly with the operator before publishing real content.</p>
            <Link href={`/go/${casino.slug}`} target="_blank" rel="sponsored nofollow noopener" className="mt-5 block rounded-full bg-emerald-500 px-5 py-4 text-center text-sm font-black text-white hover:bg-emerald-600">
              {casino.cta}
            </Link>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <AffiliateDisclosure />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-slate-950">Quick verdict</h2>
              <p className="mt-4 leading-7 text-slate-600">{casino.review.summary}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-black text-emerald-900">Pros</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-emerald-900">
                    {casino.pros.map((pro) => (
                      <li key={pro}>+ {pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-rose-50 p-5">
                  <h3 className="font-black text-rose-900">Cons</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-rose-900">
                    {casino.cons.map((con) => (
                      <li key={con}>- {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            {[
              ["User experience", casino.review.experience],
              ["Banking and redemption", casino.review.banking],
              ["Games and software", casino.review.games],
              ["Final verdict", casino.review.verdict]
            ].map(([title, text]) => (
              <section key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-black text-slate-950">{title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </section>
            ))}
          </div>
          <aside className="grid content-start gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black text-slate-950">Scorecard</h2>
              <div className="mt-5">
                <RatingBars casino={casino} />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black text-slate-950">Key facts</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                {Object.entries(casino.features).map(([key, value]) => (
                  <div key={key} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <dt className="font-black capitalize text-slate-950">{key.replace(/([A-Z])/g, " $1")}</dt>
                    <dd className="mt-1 text-slate-600">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
