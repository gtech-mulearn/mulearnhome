"use client";

import { motion, Variants, easeOut } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Newsletter() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
      <motion.section
        id="newsletter"
        className="bg-[#f7f7f7] rounded-2xl py-8 my-8 mx-auto max-w-[1000px] shadow-[0_2px_16px_0_rgba(0,0,0,0.02)] flex flex-col items-center gap-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-[1.7rem] font-bold mb-5 text-[var(--mulearn-trusty-blue)] text-center px-4"
        >
          Subscribe to our Newsletter
        </motion.h2>

        <form
          method="post"
          action="https://newsletter.mulearn.org/subscription/form"
          className="w-full flex flex-col items-center gap-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 w-full mb-4 flex-wrap justify-center items-center px-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              className="py-3 px-4 border border-[var(--mulearn-gray-600)] rounded-lg text-base max-w-[500px] w-full sm:w-[400px] bg-[var(--mulearn-whitish)] transition-all duration-200 focus:border-[1.5px] focus:border-[var(--mulearn-trusty-blue)] focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Name (optional)"
              className="py-3 px-4 border border-[var(--mulearn-gray-600)] rounded-lg text-base max-w-[500px] w-full sm:w-[400px] bg-[var(--mulearn-whitish)] transition-all duration-200 focus:border-[1.5px] focus:border-[var(--mulearn-trusty-blue)] focus:outline-none"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-2 mb-4 text-base px-4"
          >
            <input
              id="a1ef1"
              type="checkbox"
              name="l"
              defaultChecked
              value="a1ef1095-7430-4b91-973f-8826ac7c79d7"
            />
            <label htmlFor="a1ef1">
              I agree to subscribe to the μPulse Newsletter
            </label>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            type="submit"
            className="bg-[var(--mulearn-trusty-blue)] text-[var(--mulearn-whitish)] border-none rounded-[20px] py-3 px-8 mb-8 font-bold text-base cursor-pointer transition-all duration-200 hover:bg-[var(--mulearn-duke-purple)]"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.section>
    </div>
  );
}
