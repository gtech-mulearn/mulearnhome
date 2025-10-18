"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { CompanyPartner } from "@/data/data";
import CompanyCard from "@/app/company-partners/_components/CompanyCard";
import { cdnUrl } from "@/services/cdn";

import Connecting_teams from "../../../public/assets/company-partners/Connecting_teams.gif";

export default function CompanyPartnersPage() {
  const companies = CompanyPartner;

  return (
    <div className="min-h-screen bg-white">
      <section className="px-4 sm:px-8 py-1 sm:py-1 lg:py-1">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-mulearn-blackish)] leading-tight mb-4">
                <span className="text-[var(--color-mulearn-trusty-blue)]">µLearn Partnered</span>
                <br />
                Companies
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 lg:w-[90%]">
                There are multiple opportunities around you right now. All you
                have to do is look out for the best one that suits you as well
                as your passion and skills.
              </p>
            </motion.div>

            <motion.div 
              className="flex-1 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[35rem] lg:h-[35rem]">
                <Image
                  src={cdnUrl(Connecting_teams.src)}
                  alt="Connecting teams"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 sm:py-16 bg-[var(--color-mulearn-whitish)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-mulearn-blackish)] text-center lg:text-left mb-3 sm:mb-4">
              Company <span className="text-[var(--color-mulearn-trusty-blue)]">Onboardings</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 text-center lg:text-left max-w-3xl">
              µLearn has partnered with multiple Companies to provide the
              student the best Resources and Opportunities possible
            </p>
          </motion.div>

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