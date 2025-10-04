'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
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

  return (
    <div className="flex flex-row items-start justify-between text-[#414d59] max-w-[1300px] w-full mx-auto flex-wrap max-[728px]:justify-start">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="w-[20rem] m-4 mt-0"
        >
          <h3 className="text-[1.5rem] font-semibold text-left font-poppins mt-4 max-[1240px]:text-[1.25rem] max-[728px]:text-[1.25rem]">
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
          <p className="text-base font-normal text-left font-poppins mt-2 mb-4 max-[1240px]:text-[0.875rem] max-[728px]:text-[0.875rem]">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;