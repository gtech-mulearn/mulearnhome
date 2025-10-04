'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Steps = () => {
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
    <div className="flex flex-row items-start justify-between text-[#414d59] max-w-[1300px] w-full mx-auto flex-wrap max-[728px]:justify-start">
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="w-[20rem] m-4 mt-0"
        >
          <h3 className="text-[1.5rem] font-semibold text-left font-poppins mt-4 max-[1240px]:text-[1.25rem] max-[728px]:text-[1.25rem]">
            STEP <span className="text-[#5570F1]">{step.stepSpan}</span>
          </h3>
          <p className="text-base font-normal text-left font-poppins mt-2 mb-4 max-[1240px]:text-[0.875rem] max-[728px]:text-[0.875rem]">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Steps;