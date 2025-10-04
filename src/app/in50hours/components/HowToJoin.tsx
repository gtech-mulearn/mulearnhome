'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HowToJoin = () => {
  return (
    <div className="max-w-[1300px] w-full flex flex-row flex-wrap items-center justify-between p-4 text-[#414d59] mx-auto">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 min-w-[300px]"
      >
        <h2 className="text-[3.25rem] font-bold text-left font-poppins max-[728px]:text-[2.25rem]">
          HOW <span className="text-[#5570F1]">TO</span> JOIN
        </h2>
        
        <p className="text-base font-normal text-left font-poppins mb-4 max-w-[30rem] max-[728px]:text-[0.875rem]">
          If you are already into the level 5, you can participate in the event completely free of cost. 
          If you are not, you can still participate by paying a nominal fee of INR 1000.
        </p>
        
        <p className="text-[1.05rem] font-semibold text-left font-poppins mt-4 mb-2">
          Ticketing Partner
        </p>
        
        <Image
          src="/assets/in50hours/makemypass-logo.png"
          alt="MakeMyPass"
          width={128}
          height={32}
          className="w-[8rem] max-[728px]:w-[5rem]"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-[30rem] max-[728px]:w-[20rem]"
      >
        <Image
          src="/assets/in50hours/tsimg.png"
          alt="How to Join Illustration"
          width={480}
          height={320}
          className="w-full"
        />
      </motion.div>
    </div>
  );
};

export default HowToJoin;