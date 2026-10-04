import { Suspense } from "react";
import { DonateHero } from "./donate-hero";
import { DonationForm } from "./donation-form";
import { GallerySneakPeek } from "./gallery-sneak-peek";
import { TrustBar } from "./trust-bar";
import { WhereItGoes } from "./where-it-goes";

export async function DonateView() {
  return (
    <div className="min-h-screen">
      <DonateHero />
      <Suspense fallback={null}>
        <DonationForm />
      </Suspense>
      <WhereItGoes />
      <GallerySneakPeek />
      <TrustBar />
    </div>
  );
}
