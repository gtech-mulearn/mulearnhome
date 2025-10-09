"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function In50HoursPage() {
  // features list
  const features = [
    {
      title: "PITCH",
      titleSpan: "IT",
      description: "Pitch your boldest ideas and captivate them all in just minutes."
    },
    {
      title: "PROTOTYPE",
      titleSpan: "TO",
      description: "Dive into the hustle and bustle of collaboration as teams form and dive headfirst into building their prototypes."
    },
    {
      title: "GET FUNDED",
      titleSpan: "GET",
      description: "Pitch your boldest ideas and captivate them all in just minutes."
    }
  ];

  // steps for how to join
  const steps = [
    {
      step: "STEP 1",
      stepSpan: "1",
      description: "Collect your coupons, got to the to In-50hr-Challenge and type /get-in50hours-coupon to get your coupon code."
    },
    {
      step: "STEP 2",
      stepSpan: "2",
      description: "Go to MakeMyPass.com and register for the event using the coupon code. In case you are not in level 5, you can pay and register."
    },
    {
      step: "STEP 3",
      stepSpan: "3",
      description: "You will receive a confirmation mail having the ticket for joining the event on the 23rd of February."
    }
  ];

  return (
    <div className="flex flex-col justify-between items-center text-[#414d59]">
      {/* Hero */}
      <div className="flex flex-col items-center justify-between p-2 sm:p-4 max-w-[1300px] w-full mx-auto md:flex-row md:items-center">
        {/* Text Content - above image on mobile, left side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full text-center md:text-left px-2 sm:px-0"
        >
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] font-semibold leading-tight break-words">
            IN<span className="text-[#5570F1]">50</span>HOURS
          </h1>
          <p className="text-sm sm:text-base font-normal -mt-2 sm:-mt-4 max-w-full sm:max-w-[30rem] mx-auto md:mx-0">
            Get ready to hack your way to success in just 50 hours at In50Hr!
            Dive into a whirlwind of innovation, collaboration, and caffeine-fueled brilliance!
          </p>
          <p className="text-base sm:text-[1.05rem] font-semibold mt-3 sm:mt-4 mb-2">
            Organized By
          </p>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/in50hours/supporters.png"
              alt="Supporters"
              width={288}
              height={60}
              className="w-[16rem] sm:w-[18rem] mb-4"
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.makemypass.com/in50hours"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5570F1] text-white mt-2 sm:mt-4 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-[#4a5fd4] transition-colors duration-300 text-sm sm:text-base"
              >
                Register Now
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Image - below text on mobile, right side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[35rem] lg:max-w-[40rem] mx-auto md:mx-0"
        >
          <Image
            src="/assets/in50hours/heroimg.png"
            alt="In50Hours Hero"
            width={720}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Features */}
      <div className="flex flex-col sm:flex-row items-start justify-between max-w-[1300px] w-full mx-auto p-2 sm:p-4 gap-4 sm:gap-0">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full sm:w-[20rem] flex-1 px-2 sm:px-4"
          >
            <h3 className="text-lg sm:text-[1.25rem] md:text-[1.5rem] font-semibold text-center sm:text-left mt-4 break-words">
              {feature.titleSpan === "GET" ? (
                <>
                  <span className="text-[#5570F1]">{feature.titleSpan}</span> FUNDED
                </>
              ) : feature.titleSpan === "IT" ? (
                <>
                  P<span className="text-[#5570F1]">{feature.titleSpan}</span>CH
                </>
              ) : (
                <>
                  PRO<span className="text-[#5570F1]">{feature.titleSpan}</span>TYPE
                </>
              )}
            </h3>
            <p className="text-sm sm:text-base font-normal text-center sm:text-left mt-2 mb-4 break-words">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* How To Join */}
      <div className="max-w-[1300px] w-full flex flex-col md:flex-row items-center justify-between p-2 sm:p-4 mx-auto gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full text-center md:text-left px-2"
        >
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-bold break-words">
            HOW <span className="text-[#5570F1]">TO</span> JOIN
          </h2>
          <p className="text-sm sm:text-base font-normal mb-4 max-w-full mx-auto md:mx-0">
            If you are already into the level 5, you can participate in the event completely free of cost.
            If you are not, you can still participate by paying a nominal fee of INR 1000.
          </p>
          <p className="text-base sm:text-[1.05rem] font-semibold mt-4 mb-2">
            Ticketing Partner
          </p>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/in50hours/makemypass-logo.png"
              alt="MakeMyPass"
              width={128}
              height={32}
              className="w-[6rem] sm:w-[8rem]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem]"
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

      {/* Steps */}
      <div className="flex flex-col sm:flex-row items-start justify-between max-w-[1300px] w-full mx-auto p-2 sm:p-4 gap-4 sm:gap-0">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full sm:w-[20rem] flex-1 px-2 sm:px-4"
          >
            <h3 className="text-lg sm:text-[1.25rem] md:text-[1.5rem] font-semibold text-center sm:text-left mt-4 break-words">
              STEP <span className="text-[#5570F1]">{step.stepSpan}</span>
            </h3>
            <p className="text-sm sm:text-base font-normal text-center sm:text-left mt-2 mb-4 break-words">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}