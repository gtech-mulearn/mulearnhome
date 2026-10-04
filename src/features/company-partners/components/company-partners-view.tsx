import { MotionDiv, MuImage } from "@/components/layouts";
import { cdnUrl } from "@/shared";
import { CompanyPartner } from "../data/company-partners.data";
import { CompanyCard } from "./company-card";

export function CompanyPartnersView() {
  const companies = CompanyPartner;
  const Connecting_teams = cdnUrl(
    "/src/modules/Public/CompanyPartners/assets/Connecting teams.gif",
  );
  return (
    <div className="min-h-screen bg-mulearn-whitish">
      <section className="px-4 sm:px-8 py-1 sm:py-1 lg:py-1">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <MotionDiv
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4">
                <span className="text-mulearn">µLearn Partnered</span>
                <br />
                Companies
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-mulearn-blackish max-w-2xl mx-auto lg:mx-0 lg:w-[90%]">
                There are multiple opportunities around you right now. All you have to do is look
                out for the best one that suits you as well as your passion and skills.
              </p>
            </MotionDiv>

            <MotionDiv
              className="flex-1 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-140 lg:h-140">
                <MuImage
                  src={Connecting_teams}
                  alt="Connecting teams"
                  fill
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 35rem"
                  className="object-contain"
                  priority
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 sm:py-16 bg-mulearn-whitish">
        <div className="max-w-7xl mx-auto">
          <MotionDiv
            className="mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-mulearn-blackish text-center lg:text-left mb-3 sm:mb-4">
              Company <span className="text-mulearn">Onboardings</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-mulearn-blackish text-center lg:text-left max-w-3xl">
              µLearn has partnered with multiple Companies to provide the student the best Resources
              and Opportunities possible
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {companies.map((company, index) => (
              <CompanyCard key={company.name} company={company} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
