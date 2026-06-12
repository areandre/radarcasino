# SweepScout - Sweepstakes Affiliate Starter

This is a ready-to-deploy Next.js affiliate starter inspired by the structure of comparison sites, but with original branding, layout, and placeholder content.

Important: do not publish the placeholder casino data as real information. Replace it with real operator research, current terms, legal checks, and your real affiliate links.

## What is included

- Homepage with hero, top picks, comparison table, FAQ
- Casino ranking page
- Dynamic review pages at /reviews/[casino]
- Bonus hub
- 50 state guide pages
- Banking/redemption guide
- Affiliate disclosure, responsible play, privacy, and terms pages
- Affiliate redirect route at /go/[casino]
- robots.txt and sitemap.xml
- Editable casino data in src/content/casinos.json

## Files you need to edit first

1. src/lib/site.ts
   - Change the brand name, site URL, support email, and disclosure.

2. src/content/casinos.json
   - Replace sample casinos with real operators.
   - Replace affiliateUrl with your real tracking links.
   - Update restrictedStates after checking operator terms.
   - Update bonus, redemption, features, pros, cons, and review text.

3. public/favicon.svg
   - Optional. Replace the SS initials with your brand initials.

## Deploy without coding knowledge

### Step 1: Create accounts

Create accounts for:
- GitHub
- Vercel
- A domain registrar such as Cloudflare Registrar, Porkbun, Namecheap, or GoDaddy
- Google Search Console

### Step 2: Upload this project to GitHub

1. Create a new GitHub repository.
2. Unzip this project on your computer.
3. Upload all files and folders from the unzipped folder to the repository.
4. Commit the files.

### Step 3: Deploy to Vercel

1. Log into Vercel.
2. Click Add New Project.
3. Import your GitHub repository.
4. Keep the default build settings.
5. Add environment variable:
   - Key: NEXT_PUBLIC_SITE_URL
   - Value: https://yourdomain.com
6. Click Deploy.

### Step 4: Connect your domain

1. Buy a brandable domain.
2. In Vercel, open your project.
3. Go to Settings > Domains.
4. Add your domain.
5. Copy the DNS records Vercel gives you.
6. Add those records inside your domain registrar DNS panel.
7. Wait until Vercel marks the domain as valid.

### Step 5: Submit to Google

1. Open Google Search Console.
2. Add your domain property.
3. Verify ownership using the DNS record Google provides.
4. Submit this sitemap:
   https://yourdomain.com/sitemap.xml

## Editing casino data

Open src/content/casinos.json and edit one casino block at a time.

Example:

```json
{
  "slug": "example-casino",
  "name": "Example Casino",
  "logoText": "EC",
  "headline": "Short summary of why this brand is useful.",
  "rating": 4.7,
  "rank": 1,
  "bonus": "Example welcome bonus",
  "bonusLabel": "Welcome bonus",
  "cta": "Claim Bonus",
  "affiliateUrl": "https://your-affiliate-link.com",
  "officialUrl": "https://operator-website.com",
  "restrictedStates": ["WA", "ID"],
  "pros": ["Pro one", "Pro two", "Pro three"],
  "cons": ["Con one", "Con two"],
  "features": {
    "minimumRedemption": "$50",
    "redemptionSpeed": "3-5 business days",
    "paymentMethods": "ACH, card, gift card",
    "mobile": "Mobile web",
    "games": "Slots, jackpots, table-style games",
    "npr": "Check official rules"
  },
  "scores": {
    "bonus": 9.5,
    "games": 8.8,
    "redemption": 8.2,
    "trust": 8.7
  },
  "review": {
    "summary": "Your original review summary.",
    "experience": "Your original user experience notes.",
    "banking": "Your original banking and redemption notes.",
    "games": "Your original games section.",
    "verdict": "Your balanced final verdict."
  }
}
```

Rules:
- slug must be lowercase with hyphens.
- rank must be unique.
- affiliateUrl must be a valid URL.
- Do not leave placeholder claims on a live website.

## Compliance checklist

Before launch:
- Add affiliate disclosure near CTA links and at the top of commercial pages.
- Do not copy competitor text or design.
- Do not use the SweepsKings name, logo, layout, screenshots, or review text.
- Do not use casino trademarks in your domain name.
- Verify state restrictions directly with each operator.
- Verify bonus terms directly with each operator.
- Avoid phrases like guaranteed winnings, risk-free money, or legal in every state.
- Add responsible play content.
- Have privacy, terms, and disclosure pages reviewed for your jurisdiction.

## Suggested launch content

Minimum launch structure:
- 10 real casino reviews
- 1 best sweepstakes casinos page
- 1 bonuses page
- 10 state pages
- 1 banking/redemption guide
- 4 beginner guides
- Legal pages

## Local development, optional

If you want to preview locally:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.
