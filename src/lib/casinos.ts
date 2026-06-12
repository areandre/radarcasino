import rawCasinos from "@/content/casinos.json";

export type Casino = {
  slug: string;
  name: string;
  logoText: string;
  headline: string;
  rating: number;
  rank: number;
  bonus: string;
  bonusLabel: string;
  cta: string;
  affiliateUrl: string;
  officialUrl: string;
  restrictedStates: string[];
  pros: string[];
  cons: string[];
  features: {
    minimumRedemption: string;
    redemptionSpeed: string;
    paymentMethods: string;
    mobile: string;
    games: string;
    npr: string;
  };
  scores: {
    bonus: number;
    games: number;
    redemption: number;
    trust: number;
  };
  review: {
    summary: string;
    experience: string;
    banking: string;
    games: string;
    verdict: string;
  };
};

export const casinos = rawCasinos as Casino[];

export function getCasino(slug: string) {
  return casinos.find((casino) => casino.slug === slug);
}

export function getRankedCasinos() {
  return [...casinos].sort((a, b) => a.rank - b.rank);
}

export function getFeaturedCasinos(limit = 3) {
  return getRankedCasinos().slice(0, limit);
}

export function getCasinosForState(stateCode: string) {
  return getRankedCasinos().filter(
    (casino) => !casino.restrictedStates.includes(stateCode.toUpperCase())
  );
}
