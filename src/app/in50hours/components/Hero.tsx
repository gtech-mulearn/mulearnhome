'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-row-reverse flex-wrap items-center justify-between p-4 text-[#414d59] max-w-[1300px] w-full mx-auto max-[1240px]:flex-col max-[1240px]:items-start">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[45rem] w-full max-[1240px]:max-w-[30rem] max-[728px]:w-[20rem]"
      >
        <Image
          src="/assets/in50hours/heroimg.png"
          alt="In50Hours Hero"
          width={720}
          height={400}
          className="w-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 min-w-[300px]"
      >
        <h1 className="text-[4.5rem] font-semibold text-left font-poppins leading-tight max-[1240px]:text-[3.75rem] max-[728px]:text-[3rem]">
          IN<span className="text-[#5570F1]">50</span>HOURS
        </h1>
        
        <p className="text-base font-normal text-left font-poppins -mt-4 max-w-[30rem] max-[1240px]:text-[0.875rem] max-[728px]:text-[0.875rem] max-[728px]:mt-4">
          Get ready to hack your way to success in just 50 hours at In50Hr! 
          Dive into a whirlwind of innovation, collaboration, and caffeine-fueled brilliance!
        </p>
        
        <p className="text-[1.05rem] font-semibold text-left font-poppins mt-4 mb-2">
          Organized By
        </p>
        
        <Image
          src="/assets/in50hours/supporters.png"
          alt="Supporters"
          width={288}
          height={60}
          className="w-[18rem] mb-4"
        />
        
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.makemypass.com/in50hours"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5570F1] text-white mt-4 px-6 py-2 rounded-lg font-semibold hover:bg-[#4a5fd4] transition-colors duration-300"
          >
            Register Now
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;