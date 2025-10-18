"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-500 to-blue-700 py-16 px-4 sm:px-8 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8"
        >
          Ready to Partner?
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-400/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div>
              <h4 className="font-bold mb-2 text-blue-100">📧 Email</h4>
              <a
                href="mailto:partners@mulearn.org"
                className="text-white hover:text-blue-200 transition-colors font-semibold"
              >
                partners@mulearn.org
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-blue-100">📱 Phone</h4>
              <a
                href="tel:+918943647000"
                className="text-white hover:text-blue-200 transition-colors font-semibold"
              >
                +91 8943647000
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-blue-100">🌐 Website</h4>
              <a
                href="https://www.mulearn.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors font-semibold"
              >
                www.mulearn.org
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}