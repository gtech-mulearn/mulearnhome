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
      <div className="flex flex-row-reverse flex-wrap items-center justify-between p-4 max-w-[1300px] w-full mx-auto max-[1240px]:flex-col max-[1240px]:items-start">
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

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 min-w-[300px]"
        >
          <h1 className="text-[4.5rem] font-semibold text-left leading-tight max-[1240px]:text-[3.75rem] max-[728px]:text-[3rem]">
            IN<span className="text-[#5570F1]">50</span>HOURS
          </h1>
          <p className="text-base font-normal text-left -mt-4 max-w-[30rem] max-[1240px]:text-[0.875rem] max-[728px]:text-[0.875rem] max-[728px]:mt-4">
            Get ready to hack your way to success in just 50 hours at In50Hr!
            Dive into a whirlwind of innovation, collaboration, and caffeine-fueled brilliance!
          </p>
          <p className="text-[1.05rem] font-semibold text-left mt-4 mb-2">
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

      {/* Features */}
      <div className="flex flex-row items-start justify-between max-w-[1300px] w-full mx-auto flex-wrap max-[728px]:justify-start">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-[20rem] m-4 mt-0"
          >
            <h3 className="text-[1.5rem] font-semibold text-left mt-4 max-[1240px]:text-[1.25rem] max-[728px]:text-[1.25rem]">
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
            <p className="text-base font-normal text-left mt-2 mb-4 max-[1240px]:text-[0.875rem] max-[728px]:text-[0.875rem]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* How To Join */}
      <div className="max-w-[1300px] w-full flex flex-row flex-wrap items-center justify-between p-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 min-w-[300px]"
        >
          <h2 className="text-[3.25rem] font-bold text-left max-[728px]:text-[2.25rem]">
            HOW <span className="text-[#5570F1]">TO</span> JOIN
          </h2>
          <p className="text-base font-normal text-left mb-4 max-w-[30rem] max-[728px]:text-[0.875rem]">
            If you are already into the level 5, you can participate in the event completely free of cost.
            If you are not, you can still participate by paying a nominal fee of INR 1000.
          </p>
          <p className="text-[1.05rem] font-semibold text-left mt-4 mb-2">
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

      {/* Steps */}
      <div className="flex flex-row items-start justify-between max-w-[1300px] w-full mx-auto flex-wrap max-[728px]:justify-start">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-[20rem] m-4 mt-0"
          >
            <h3 className="text-[1.5rem] font-semibold text-left mt-4 max-[1240px]:text-[1.25rem] max-[728px]:text-[1.25rem]">
              STEP <span className="text-[#5570F1]">{step.stepSpan}</span>
            </h3>
            <p className="text-base font-normal text-left mt-2 mb-4 max-[1240px]:text-[0.875rem] max-[728px]:text-[0.875rem]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}