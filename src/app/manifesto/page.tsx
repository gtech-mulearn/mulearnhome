"use client";
import React from "react";
import { cdnUrl } from "src/services/cdn";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="relative min-h-[120px] flex flex-col md:flex-row bg-[#5570f1] mt-[6vw] md:h-[20vw] h-[40vw] pl-0 rounded-t-[1.2rem] md:rounded-none">
        <Image
          src={cdnUrl("assets/manifesto/µ.png")}
          alt="µLearn background logo"
          width={400}
          height={400}
          className="absolute w-[55vw] md:w-[35vw] h-[200px] align-middle"
        />
        <div className="flex flex-col justify-center w-full md:w-4/5 pl-[1.2rem] md:pl-20 pt-[1.2rem] md:pt-12 h-full">
          <div className="bg-white/30 rounded-full pr-[6vw] md:pr-16 pl-[5vw] md:pl-8 py-[1vw] md:py-2 w-fit md:mb-4 uppercase text-white text-[1.5vw] md:text-[1.3vw] font-medium">
            Our Manifesto
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-[10vw] md:text-[6.5vw] leading-[1.5] md:leading-none"
            style={{ fontFamily: "Retro Team" }}
          >
            We,The Unbound, The Unbowed
          </motion.h1>
        </div>

        <Image
          src={cdnUrl("assets/manifesto/hand.png")}
          alt="Hand illustration"
          width={400}
          height={400}
          className="absolute my-0 mx-auto -right-[5vw] md:right-[4vw] bottom-0 w-[30vw] md:w-[20vw] h-auto"
        />
      </div>

      <div className="px-2 py-[1.2rem] sm:py-8 sm:px-4 md:px-20 md:py-16 text-center">
        <p className="text-[1.1rem] sm:text-[1.8rem] md:text-[2rem] tracking-wide">
          <span className="font-semibold">We, the Unbound, the Unbowed</span>, a
          tribe of relentless learners, rise from the ashes of a broken
          education system.
          <span className="font-semibold">
            We are the mavericks who dared to question the status quo
          </span>
          , the misfits who refused to be cogs in the machine of rote
          memorization. Too long have we wandered in the stale corridors of
          conformity — <span className="font-semibold">not anymore!</span>
        </p>
      </div>

      <div className="px-2 sm:px-4 md:px-24 text-center">
        <p className="text-[1.1rem] sm:text-[1.8rem] md:text-[2rem] tracking-wide">
          <span className="text-[#5570f1] font-medium">
            µLearn is our revolution.
          </span>{" "}
          Here, curiosity <span className="text-[#5570f1]">reigns</span>, and
          collaboration is our strongest weapon. We{" "}
          <span className="text-[#5570f1]">transform</span> failures into
          stepping stones, and together we{" "}
          <span className="text-[#5570f1]">redefine</span> learning.
        </p>
      </div>

      <div className="bg-[#5570f1] text-white flex flex-col justify-center items-center h-fit gap-4 md:gap-8 mt-8 mb-[1.2rem] mx-0 sm:mt-20 sm:mb-24 text-center pt-[0.8rem] px-[0.2rem] pb-4 sm:py-[1.2rem] sm:px-[0.5rem] md:p-4 rounded-b-2xl rounded-none">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[1rem] sm:text-[2rem] w-full"
          >
            Welcome to the <span className="font-semibold">µLearn.</span>
            <br />
            Welcome to the <span className="font-semibold">Revolution.</span>
          </motion.h2>

          <a href="https://app.mulearn.org" target="_blank" rel="noreferrer">
            <button className="bg-white text-[#5570f1] py-[5px] px-[0.8rem] sm:px-8 sm:py-3 rounded-[10px] font-semibold text-[0.95rem] sm:text-[1.3rem] shadow hover:scale-105 transition">
              Join µLearn
            </button>
          </a>
      </div>
    </section>
  );
};

export default Page;
