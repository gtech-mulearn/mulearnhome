"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import { annualReports } from "@/data/data";
import { AnnualReport } from "@/lib/types";
import ReportHero from "./_components/ReportHero";
import ReportCard from "./_components/ReportCard";

export default function Report() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const handleDownload = (report: AnnualReport) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = report.pdfUrl;
    link.download = `${report.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-mulearn-whitish">
      <ReportHero />

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mulearn-blackish mb-4">
              Our{" "}
              <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                Annual Reports
              </span>
            </h2>
            <p className="text-lg md:text-xl text-mulearn-gray-600 max-w-3xl mx-auto">
              Explore our journey of growth, impact, and community building
              through our comprehensive annual reports.
            </p>
            <div className="w-20 h-1 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple mx-auto rounded-full mt-6" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid gap-8 md:gap-12"
          >
            {annualReports.map((report) => (
              <motion.div
                key={report.id}
                variants={fadeInUp}
                className="w-full"
              >
                <ReportCard
                  report={report}
                  onDownload={() => handleDownload(report)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
