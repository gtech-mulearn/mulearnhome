import LogoLoop from "@/components/ui/logo-loop";
import { CompanyPartners1, CompanyPartners as CompanyPartnersData } from "../../data/company.data";

export const CompanyPartnersSection = () => {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Our <span className="text-mulearn">Company Partners</span>
          </h2>
        </div>

        <div className="relative">
          <div className="mb-12 mt-12 space-y-6 overflow-hidden">
            <LogoLoop
              logos={CompanyPartnersData.map((company) => ({
                ...company,
                src: company.image,
              }))}
              speed={30}
              direction="left"
              logoHeight={60}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Career partners row 1"
            />
            <LogoLoop
              logos={CompanyPartners1.map((company) => ({
                ...company,
                src: company.image,
              }))}
              speed={25}
              direction="right"
              logoHeight={60}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Career partners row 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
