"use client";

import { useEffect, useState } from "react";

const popupBrandUrl = "https://www.gambinoslot.com/";

const offers = [
  {
    rank: 1,
    brand: "Gambino Slots",
    logo: "/brands/gambino.png",
    label: "Featured Social Casino Brand",
    bonus: "Welcome reward available",
    rating: "9.8",
    features: [
      "Free-to-play social casino slots",
      "Daily rewards where available",
      "Mobile-friendly gameplay",
    ],
    url: "https://www.gambinoslot.com/",
  },
  {
    rank: 2,
    brand: "Slotomania",
    logo: "/brands/slotomania.png",
    label: "Popular Free Slots Brand",
    bonus: "Free coins and bonuses available",
    rating: "9.7",
    features: [
      "Large free slot game selection",
      "Social gaming community features",
      "Entertainment-only gameplay",
    ],
    url: "https://www.slotomania.com/",
  },
  {
    rank: 3,
    brand: "House of Fun",
    logo: "/brands/house-of-fun.png",
    label: "Free Social Slots",
    bonus: "Free coins and spins available",
    rating: "9.5",
    features: [
      "Free casino-style slot games",
      "In-game coins only",
      "Browser and mobile play options",
    ],
    url: "https://www.houseoffun.com/",
  },
  {
    rank: 4,
    brand: "DoubleDown Casino",
    logo: "/brands/doubledown.png",
    label: "Classic Social Casino",
    bonus: "Free chip bonus available",
    rating: "9.4",
    features: [
      "Free online slots and table-style games",
      "Daily free chip options",
      "Long-running social casino brand",
    ],
    url: "https://www.doubledowncasino.com/",
  },
  {
    rank: 5,
    brand: "SpinQuest",
    logo: "/brands/spinquest.png",
    label: "Play-for-Fun Social Casino",
    bonus: "Free-to-play social gaming",
    rating: "9.2",
    features: [
      "Play-for-fun platform",
      "No real-money gambling offered",
      "18+ social gaming experience",
    ],
    url: "https://spinquest.com/",
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
  <div className="popupOverlay" role="dialog" aria-modal="true">
    <div className="cleanPopup">
      <button
        className="cleanPopupClose"
        onClick={() => setShowPopup(false)}
        type="button"
        aria-label="Close popup"
      >
        ×
      </button>

      <div className="cleanPopupBadge">#1 Social Casino Pick</div>

      <div className="cleanPopupLogo">
        <img
          src="/brands/gambino.png"
          alt="Gambino Slots logo"
          className="popupBrandLogo"
        />
      </div>

      <h2>Gambino Slots</h2>

      <p>
        Gambino Slots is our featured social casino pick, offering free-to-play
        slot-style entertainment, daily rewards, and a mobile-friendly experience.
      </p>

      <div className="cleanOfferBox">
        <span>Gambino Slots Featured Offer</span>
        <strong>Welcome reward available</strong>
      </div>

      <button
        className="cleanPopupButton"
        onClick={goToPopupBrand}
        type="button"
      >
        Visit Gambino Slots
      </button>

      <p className="cleanPopupTerms">
        18+ only. Terms apply. Social casino entertainment only.
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
              <article
  className={`offerCard ${
    offer.rank === 1 ? "offerCardHero" : offer.rank === 2 ? "offerCardSecond" : ""
  }`}
  key={offer.brand}
>
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
