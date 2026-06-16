"use client";

import { useEffect, useState } from "react";

const popupBrandUrl = "https://sweetsweeps.com";

const offers = [
  {
    rank: 1,
    brand: "SpinBlitz",
    logo: "B1",
    label: "Top Social Casino Pick",
    bonus: "Welcome offer available",
    rating: "9.8",
    features: [
      "Daily reward opportunities",
      "Mobile-friendly experience",
      "Gold Coin style gameplay",
    ],
    url: "https://spinblitz.com",
  },
  {
    rank: 2,
    brand: "Gambino",
    logo: "B2",
    label: "Popular New Player Offer",
    bonus: "New player reward available",
    rating: "9.6",
    features: [
      "Large game selection",
      "Simple signup flow",
      "Promotional coin gameplay where available",
    ],
    url: "https://gambinoslot.com//",
  },
  {
    rank: 3,
    brand: "SweetSweet",
    logo: "B3",
    label: "Daily Rewards",
    bonus: "Daily bonus available",
    rating: "9.4",
    features: [
      "Entertainment-focused games",
      "Fast account setup",
      "Terms and location rules apply",
    ],
    url: "https://example.com/your-affiliate-link-3",
  },
];

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem("radar_popup_closed");

    if (!hasClosedPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  function closePopup() {
    sessionStorage.setItem("radar_popup_closed", "true");
    setShowPopup(false);
  }

  function goToPopupBrand() {
    window.open(popupBrandUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      {showPopup && (
        <div className="popupOverlay">
          <div className="cleanPopup">
            <button
              className="cleanPopupClose"
              onClick={closePopup}
              aria-label="Close popup"
              type="button"
            >
              ×
            </button>

            <div className="cleanPopupBadge">Welcome Offer</div>

            <div className="cleanPopupLogo">RC</div>

            <h2>Exclusive Social Casino Offer</h2>

            <p className="cleanPopupSubtitle">
              New players can explore a featured social casino partner with a
              welcome reward available where permitted.
            </p>

            <div className="cleanOfferBox">
              <span>Featured Offer</span>
              <strong>Welcome Bonus Available</strong>
              <small>18+ only · Terms apply · Availability varies by location</small>
            </div>

            <button
              className="cleanPopupButton"
              onClick={goToPopupBrand}
              type="button"
            >
              Visit Site
            </button>

            <p className="cleanPopupTerms">
              Social casino entertainment only. No purchase necessary where
              available. Radar Casino may earn a commission from partner links.
            </p>
          </div>
        </div>
      )}

      <header className="siteHeader">
        <div className="container headerInner">
          <div className="brand">
            <div className="brandMark">RC</div>
            <div>
              <strong>Radar Casino</strong>
              <span>Social Casino Offers</span>
            </div>
          </div>

          <nav className="nav">
            <a href="#offers">Top Offers</a>
            <a href="#how">How We Compare</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroContent">
            <div className="breadcrumb">
              Home <span>›</span> Social Casino Offers
            </div>

            <h1>Best Social Casino Offers Available Now</h1>

            <p className="intro">
              Compare selected social casino brands, welcome rewards, daily
              bonuses, and entertainment-focused gameplay options. Radar Casino
              does not provide gambling services.
            </p>

            <div className="metaBox">
              <div>
                <strong>Updated:</strong> Today
              </div>
              <div>
                <strong>Category:</strong> Social Casino
              </div>
              <div>
                <strong>Notice:</strong> 18+ only. Terms apply.
              </div>
            </div>
          </div>

          <aside className="heroPanel">
            <h2>Quick Checklist</h2>
            <ul>
              <li>Welcome offer clarity</li>
              <li>Daily reward availability</li>
              <li>Mobile experience</li>
              <li>Location restrictions</li>
              <li>No purchase necessary terms</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="offers" className="offersWrap">
        <div className="container">
          <div className="sectionTitle">
            <p>Radar Casino Rankings</p>
            <h2>Top Social Casino Offers</h2>
            <span>
              Replace the placeholder brands with your approved partners and
              affiliate links.
            </span>
          </div>

          <div className="offersList">
            {offers.map((offer) => (
              <article className="offerCard" key={offer.brand}>
                <div className="rankCol">
                  <div className="rankNumber">#{offer.rank}</div>
                  <div className="score">{offer.rating}</div>
                  <div className="scoreText">Rating</div>
                </div>

                <div className="casinoCol">
                  <div className="logoBox">{offer.logo}</div>
                  <div>
                    <h3>{offer.brand}</h3>
                    <p>{offer.label}</p>
                  </div>
                </div>

                <div className="bonusCol">
                  <span>Welcome Reward</span>
                  <strong>{offer.bonus}</strong>
                  <small>Availability varies by location and operator.</small>
                </div>

                <div className="featuresCol">
                  <ul>
                    {offer.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="ctaCol">
                  <a
                    href={offer.url}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                  >
                    Visit Site
                  </a>
                  <small>18+ · Terms apply</small>
                </div>
              </article>
            ))}
          </div>

          <div className="showMore">More social casino offers coming soon</div>
        </div>
      </section>

      <section id="how" className="contentArea">
        <div className="container contentGrid">
          <article className="mainArticle">
            <h2>How We Compare Social Casino Offers</h2>
            <p>
              Radar Casino compares social casino brands using simple,
              conversion-focused criteria: welcome offer clarity, daily rewards,
              ease of signup, mobile experience, brand reputation, and location
              availability.
            </p>

            <h2>Important Social Casino Notice</h2>
            <p>
              Social casino games are intended for entertainment. This site does
              not operate games, process payments, provide gambling services, or
              guarantee any outcome. Always review the operator&apos;s official
              terms before creating an account.
            </p>

            <h2>Affiliate Disclosure</h2>
            <p>
              Radar Casino contains affiliate links. We may earn a commission if
              you click a link and sign up with a partner brand, at no extra cost
              to you. Rankings are editorial and may be influenced by commercial
              relationships.
            </p>

            <h2>Responsible Play</h2>
            <p>
              18+ only, or legal age in your location. No purchase is necessary
              to play where available. Void where prohibited. If gaming stops
              being fun, take a break and seek support from appropriate local
              resources.
            </p>
          </article>

          <aside className="sideBox">
            <h3>Why this page is PPC-ready</h3>
            <ul>
              <li>Clear offerwall above the fold</li>
              <li>Affiliate disclosure visible</li>
              <li>No misleading winning claims</li>
              <li>Social casino positioning</li>
              <li>Simple mobile layout</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <h2>Social Casino FAQ</h2>

          <div className="faqItem">
            <h3>Is Radar Casino a gambling operator?</h3>
            <p>
              No. Radar Casino is a comparison and affiliate website. We do not
              operate casino games or process player transactions.
            </p>
          </div>

          <div className="faqItem">
            <h3>Are these real-money casino offers?</h3>
            <p>
              No. This page is positioned for social casino offers only. Always
              verify each operator&apos;s terms, eligibility rules, and location
              restrictions.
            </p>
          </div>

          <div className="faqItem">
            <h3>Do you earn money from links?</h3>
            <p>
              Yes. Some links are affiliate links, meaning we may earn a
              commission if you click and sign up.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            <strong>Radar Casino</strong>
            <p>Social casino comparison site. 18+ only. Terms apply.</p>
          </div>
          <div>
            <a href="#offers">Offers</a>
            <a href="#how">Disclosure</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
