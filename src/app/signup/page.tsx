"use client";

import { useState } from "react";

const partnerUrl = "https://example.com/your-affiliate-link";

export default function SignupPage() {
  const [screen, setScreen] = useState<"form" | "checkEmail" | "success">("form");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const canSubmit = email.includes("@") && password.length >= 4 && accepted;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setScreen("checkEmail");
  }

  function goToPartner() {
    window.open(partnerUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="signupJourney">
      <div className="signupBgPattern"></div>

      {screen === "form" && (
        <section className="signupScreen">
          <header className="signupTop">
            <a href="/" className="signupBack" aria-label="Back to home">
              ‹
            </a>

            <h1>Create Account</h1>

            <div className="signupMiniLogo">
              <span>RC</span>
            </div>
          </header>

          <div className="signupFormWrap">
            <p className="signupLabel">Sign up with:</p>

            <div className="socialSignupButtons">
              <button type="button" className="appleBtn">
                ● Apple
              </button>
              <button type="button" className="googleBtn">
                G Google
              </button>
              <button type="button" className="facebookBtn">
                f Facebook
              </button>
            </div>

            <div className="orDivider">
              <span></span>
              <p>Or by email</p>
              <span></span>
            </div>

            <form onSubmit={handleSubmit}>
              <label className="signupField">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              <label className="signupField">
                <span>Password</span>
                <div className="passwordInput">
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <b>◉</b>
                </div>
              </label>

              <label className="signupConsent">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(event) => setAccepted(event.currentTarget.checked)}
                />
                <span>
                  By creating an account, you agree to our{" "}
                  <a href="/terms">Terms of Service</a> and acknowledge our{" "}
                  <a href="/privacy">Privacy Policy</a>. You confirm that you
                  are 18+ and in an eligible location.
                </span>
              </label>

              <button
                className="createAccountBtn"
                disabled={!canSubmit}
                type="submit"
              >
                Create Account
              </button>
            </form>

            <p className="loginText">
              Already have an account? <a href="/">Log in</a>
            </p>
          </div>
        </section>
      )}

      {screen === "checkEmail" && (
        <section className="verificationOverlay">
          <div className="verificationModal">
            <button
              className="modalClose"
              type="button"
              onClick={() => setScreen("form")}
            >
              ×
            </button>

            <button
              className="modalBack"
              type="button"
              onClick={() => setScreen("form")}
            >
              ‹
            </button>

            <div className="modalHeader">
              <h2>Check Your Email</h2>
            </div>

            <div className="modalBody">
              <h3>
                Verify Your Account &<br />
                <span>Get Your Welcome Bonus!</span>
              </h3>

              <div className="emailIcon">✉</div>

              <p>
                We have sent a confirmation email to
                <strong>{email || "your email address"}</strong>
              </p>

              <p className="resendText">
                Not in inbox or spam folder? <button type="button">Resend</button>
              </p>

              <button
                className="verifyDemoBtn"
                type="button"
                onClick={() => setScreen("success")}
              >
                I verified my email
              </button>
            </div>
          </div>
        </section>
      )}

      {screen === "success" && (
        <section className="verificationOverlay">
          <div className="successModal">
            <button
              className="modalClose"
              type="button"
              onClick={() => setScreen("form")}
            >
              ×
            </button>

            <div className="modalHeader">
              <h2>Success!</h2>
            </div>

            <div className="modalBody">
              <p>Your email was verified successfully.</p>

              <div className="successIcon">
                <span>✉</span>
                <b>✓</b>
              </div>

              <button className="createAccountBtn" type="button" onClick={goToPartner}>
                Continue to Offer
              </button>

              <p className="signupSmall">
                You are leaving Radar Casino and visiting a third-party social
                casino partner. 18+ only. Terms apply.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
