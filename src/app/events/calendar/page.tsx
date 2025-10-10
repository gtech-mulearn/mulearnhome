"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Calendar() {
  return (
    <>
      <div className="mx-4 md:mx-auto md:max-w-[1000px] mt-4 md:mt-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center my-8"
        >
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] font-semibold text-mulearn-trusty-blue">
            µLearn <span className="text-mulearn-blackish">Calendar</span>
          </h2>
          <p className="mt-2 text-base md:text-lg text-mulearn-gray-600 leading-relaxed">
            There are a lot of opportunities for you to learn and improve
            yourself. Want to join and learn from such opportunities? Keep a
            close watch on this calendar. We have many surprises for you on the
            way!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          id="calendardiv"
          className="my-8 mx-4 md:mx-auto md:max-w-[1300px] border-none"
        >
          <div className="mt-8 md:mt-12 mx-0 md:mx-8">
            <div className="mt-4 md:mt-8">
              <iframe
                src="https://embed.styledcalendar.com/#hew26NgCmtLDa4E2BeTK"
                title="Styled Calendar"
                className="w-full h-[700px] border-none rounded-lg"
                data-cy="calendar-embed-iframe"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
