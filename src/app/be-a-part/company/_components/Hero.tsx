"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/10 backdrop-blur-lg pt-16 pb-8 px-4 sm:px-8 text-center border-b border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight drop-shadow-lg">
          μLearn x Companies
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 font-medium max-w-3xl mx-auto">
          Partnership & Collaboration Playbook
        </p>
        <a
          href="https://airtable.com/app0v220Yc0G3CPMr/shrpiEQrpuIFTMNh1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-2 border-white px-8 sm:px-10 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
          >
            🚀 Start Partnership Journey
          </motion.button>
        </a>
      </div>
    </motion.section>
  );
}