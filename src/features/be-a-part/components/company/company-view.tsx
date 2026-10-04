import { About } from "./about";
import { CompanyBenefits } from "./benefits";
import { Change } from "./change";
import { Contact } from "./contact";
import { CompanyHero } from "./hero";
import { Mission } from "./mission";
import { CompanyPartnersSection } from "./partners";
import { Success } from "./success";

export function CompanyView() {
  return (
    <div className="bg-mulearn-whitish min-h-screen ">
      <CompanyHero />
      <About />
      <CompanyBenefits />
      <CompanyPartnersSection />
      <Success />
      <Mission />
      <Change />
      <Contact />
    </div>
  );
}
