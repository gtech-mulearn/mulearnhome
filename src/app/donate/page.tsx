import { Suspense } from "react";
import DonateHero from "@/app/donate/_components/DonateHero";
import DonationForm from "@/app/donate/_components/DonationForm";
import GallerySneakPeek from "@/app/donate/_components/GallerySneakPeek";
import TrustBar from "@/app/donate/_components/TrustBar";
import WhereItGoes from "@/app/donate/_components/WhereItGoes";

export default function DonatePage() {
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
