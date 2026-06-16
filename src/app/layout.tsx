import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Social Casino Offers | Radar Casino",
  description:
    "Compare social casino offers, welcome rewards, daily bonuses, and entertainment-focused brands. 18+ only. Terms apply.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
