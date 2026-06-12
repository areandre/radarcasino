import { NextRequest, NextResponse } from "next/server";
import { getCasino } from "@/lib/casinos";
import { siteConfig } from "@/lib/site";

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: NextRequest, context: Context) {
  const { slug } = await context.params;
  const casino = getCasino(slug);

  if (!casino) {
    return NextResponse.redirect(new URL("/casinos", request.url), 302);
  }

  const target = new URL(casino.affiliateUrl);
  target.searchParams.set("utm_source", siteConfig.name.toLowerCase());
  target.searchParams.set("utm_medium", "affiliate");
  target.searchParams.set("utm_campaign", casino.slug);

  return NextResponse.redirect(target, 302);
}
