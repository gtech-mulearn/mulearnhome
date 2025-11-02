"use client";

import { useState } from "react";
import { MotionDiv, MotionH2, MotionP } from "@/components/MuFramer";
import { CompanyFeatures, companyImages } from "@/data/data";
import MuImage from "@/components/MuImage";

const NetworkIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="trustyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E85FE" />
        <stop offset="100%" stopColor="#AF2EE6" />
      </linearGradient>
    </defs>
    <path
      d="M6.30664 13.1024C8.81583 13.1024 11.1141 14.9744 11.1143 17.5927C11.1143 20.211 8.81589 22.0829 6.30664 22.0829C3.79749 22.0828 1.5 20.211 1.5 17.5927C1.50011 14.9744 3.79755 13.1025 6.30664 13.1024Z"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <path
      d="M6.30664 35.1124C8.81583 35.1124 11.1141 36.9844 11.1143 39.6027C11.1143 42.221 8.81589 44.0929 6.30664 44.0929C3.79749 44.0928 1.5 42.221 1.5 39.6027C1.50011 36.9845 3.79755 35.1125 6.30664 35.1124Z"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <path
      d="M28 23.5099C30.5092 23.5099 32.8075 25.3818 32.8076 28.0001C32.8076 30.6185 30.5092 32.4904 28 32.4904C25.4909 32.4902 23.1934 30.6184 23.1934 28.0001C23.1935 25.3819 25.4909 23.51 28 23.5099Z"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <path
      d="M28 45.5186C30.5092 45.5186 32.8075 47.3905 32.8076 50.0088C32.8076 52.6272 30.5092 54.499 28 54.499C25.4909 54.4989 23.1934 52.6271 23.1934 50.0088C23.1935 47.3906 25.4909 45.5187 28 45.5186Z"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <path
      d="M49.6929 13.1024C52.2021 13.1024 54.5004 14.9744 54.5005 17.5927C54.5005 20.211 52.2021 22.0829 49.6929 22.0829C47.1837 22.0828 44.8862 20.211 44.8862 17.5927C44.8863 14.9744 47.1838 13.1025 49.6929 13.1024Z"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <path
      d="M49.6929 35.1124C52.2021 35.1124 54.5004 36.9844 54.5005 39.6027C54.5005 42.221 52.2021 44.0929 49.6929 44.0929C47.1837 44.0928 44.8862 42.221 44.8862 39.6027C44.8863 36.9845 47.1838 35.1125 49.6929 35.1124Z"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <path
      d="M28.0001 1.5C30.5092 1.5 32.8076 3.37195 32.8077 5.99023C32.8077 8.60862 30.5093 10.4805 28.0001 10.4805C25.4909 10.4803 23.1934 8.60854 23.1934 5.99023C23.1935 3.37203 25.491 1.50012 28.0001 1.5Z"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      x1="28.8389"
      y1="9.33972"
      x2="28.8389"
      y2="24.7703"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      y1="-1.5"
      x2="15.4306"
      y2="-1.5"
      transform="matrix(0 -1 -1 0 27.3389 46.7802)"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      x1="7.14551"
      y1="20.9424"
      x2="7.14551"
      y2="36.373"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      y1="-1.5"
      x2="16.7173"
      y2="-1.5"
      transform="matrix(-0.901232 0.433336 -0.506855 -0.862031 45.9761 18.6699)"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      y1="-1.5"
      x2="16.7173"
      y2="-1.5"
      transform="matrix(-0.901232 -0.433336 -0.506855 0.862031 46.373 37.8749)"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      y1="-1.5"
      x2="16.646"
      y2="-1.5"
      transform="matrix(-0.878668 -0.477432 0.55342 -0.832902 24.6372 26.2578)"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      y1="-1.5"
      x2="16.646"
      y2="-1.5"
      transform="matrix(-0.878668 0.477432 0.55342 0.832902 24.6372 30.0331)"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      x1="49.1191"
      y1="36.373"
      x2="49.1191"
      y2="20.9425"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      y1="-1.5"
      x2="16.5959"
      y2="-1.5"
      transform="matrix(-0.862301 -0.506395 0.583305 -0.812253 24.3208 49.3232)"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      y1="-1.5"
      x2="16.8043"
      y2="-1.5"
      transform="matrix(-0.927636 0.373486 -0.441711 -0.897157 47.4248 41.996)"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
    <line
      y1="-1.5"
      x2="16.6703"
      y2="-1.5"
      transform="matrix(-0.886454 0.462817 -0.538126 -0.842864 23.73 6.82727)"
      stroke="url(#trustyGradient)"
      strokeWidth="3"
    />
  </svg>
);

export default function WhyCollaborate() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="bg-mulearn-whitish py-16 px-4 sm:px-8 relative">
      <MuImage
        src={companyImages.note}
        alt="note icon"
        className="absolute right-24 top-0 w-[92px] h-[115px] rotate-[16deg] hidden lg:block"
        width={92}
        height={115}
      />
      <MuImage
        src={companyImages.handshake}
        alt="handshake icon"
        className="absolute left-12 top-4 w-[109px] h-[128px] rotate-[65deg] hidden lg:block"
        width={109}
        height={128}
      />
      <div className="max-w-6xl mx-auto">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-xl md:text-4xl font-semibold text-center mb-4 tracking-tight"
        >
          <span className="text-[#1A202C]">Why Collaborate with </span>
          <span className="text-mulearn-trusty-blue">µLearn</span>
          <span className="text-[#1A202C]">?</span>
        </MotionH2>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-16 font-light"
        >
          Join forces with a thriving community of learners and innovators.
          Together, we create meaningful impact through talent development,
          innovation, and collaborative growth opportunities.
        </MotionP>

        <div className="hidden lg:flex items-stretch justify-center gap-0">
          {CompanyFeatures.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              animate={{
                flex: hoveredIndex === index ? 1.8 : 1,
                backgroundColor: hoveredIndex === index ? "#E7F2FF" : "#FFF",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex flex-col items-center justify-start gap-5 py-8 px-4 border-2 border-[#EEE] transition-all duration-100 ease-in-out ${
                index === 0
                  ? "rounded-l-[10px] border-r-0"
                  : index === CompanyFeatures.length - 1
                  ? "rounded-r-[10px]"
                  : "border-r-0"
              }`}
            >
              <NetworkIcon />
              <h3
                className={`text-xl sm:text-2xl font-bold text-mulearn-trusty-blue text-center leading-tight transition-all duration-300`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-center font-thin text-mulearn-blackish leading-relaxed transition-all duration-300 ${
                  index === 0 ? "text-sm sm:text-sm" : "text-xs sm:text-sm"
                }`}
              >
                {feature.description}
              </p>
            </MotionDiv>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
          {CompanyFeatures.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center justify-start gap-5 p-6 border-2 border-[#EEE] rounded-lg transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: hoveredIndex === index ? "#E7F2FF" : "#FFF",
              }}
            >
              <NetworkIcon />
              <h3 className="text-xl sm:text-2xl font-bold text-mulearn-trusty-blue text-center leading-tight">
                {feature.title}
              </h3>
              <p className="text-center font-thin text-mulearn-blackish leading-relaxed text-base sm:text-lg">
                {feature.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
