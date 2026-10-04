import type React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Donate",
  description:
    "Support µLearn's mission of peer-to-peer, proof-of-work learning with a one-time or recurring donation.",
  keywords: ["donate to mulearn", "support mulearn", "mulearn foundation donation"],
  canonical: "https://mulearn.org/donate",
});

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <section className="donate-layout">{children}</section>;
}
