"use client";

import { motion, Variants } from "framer-motion";
import MuImage from "@/components/MuImage";
import { opportunities } from "@/data/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Opportunities() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
      <motion.section
        className="flex flex-col justify-center py-24 items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center" variants={fadeInUp}>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold">
            At The End Of a μLearners Journey
          </h1>
          <h6 className="font-normal mb-16 max-w-[800px] text-center text-lg sm:text-xl text-mulearn-gray-600 mt-2.5">
            At the end of a μLearner&apos;s journey, they are equipped with a
            plethora of opportunities to choose from. They can choose to work in
            a job, freelance, research, start their own venture, or work for a
            social cause.
          </h6>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-4 gap-8 justify-center border-none"
          variants={fadeInUp}
        >
          {opportunities.map((opportunity) => (
            <motion.div
              key={opportunity.id}
              className="flex flex-col items-center justify-center py-12 px-8 bg-mulearn-greyish/20 transition-all rounded-lg duration-500 ease-in-out hover:-translate-y-[5px] cursor-pointer min-h-[250px]"
              variants={fadeInUp}
            >
              <span className="w-full max-w-[150px]">
                <MuImage
                  src={opportunity.icon}
                  alt={opportunity.name}
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
              </span>
              <h6 className="text-2xl mt-6 font-semibold text-center">
                {opportunity.name}
              </h6>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
