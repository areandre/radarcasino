import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://radarcasino.org"),
  title: "Radar Casino | Social Casino Offers",
  description:
    "Compare social casino offers, welcome rewards, daily bonuses, and entertainment-focused brands. 18+ only. Terms apply.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Radar Casino | Social Casino Offers",
    description:
      "Compare social casino offers, welcome rewards, daily bonuses, and entertainment-focused brands.",
    url: "https://radarcasino.org",
    siteName: "Radar Casino",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radar Casino social casino offers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radar Casino | Social Casino Offers",
    description:
      "Compare social casino offers, welcome rewards, daily bonuses, and entertainment-focused brands.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </head>

      <body>
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ267WHK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJ267WHK');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
