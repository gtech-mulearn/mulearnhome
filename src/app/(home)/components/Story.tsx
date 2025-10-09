"use client";

import { motion, Variants, easeOut } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Story() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full pt-12">
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5 py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center max-w-[35rem] font-extrabold leading-normal">
              Understand μLearn with a{" "}
              <span className="text-[var(--mulearn-trusty-blue)]">Story</span>
            </h1>
            <h6 className="font-normal my-4 mb-8 max-w-[800px] text-left text-lg sm:text-xl text-[var(--mulearn-gray-600)]">
              Meet Aami, an eager learner hungry for growth! Join her voyage
              through the captivating µVerse, where she seizes opportunities,
              builds learning circles, and immerses herself in events, emerging
              industry-ready with newfound skills and confidence.
            </h6>
          </motion.div>
        </div>

        <div className="w-full h-full aspect-video">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="w-full h-full"
          >
            <iframe
              src="https://www.youtube.com/embed/M9serw-CLU0"
              title="YouTube video on Mulearn"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full border-none"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
