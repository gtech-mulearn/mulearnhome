"use client";

import { motion } from "framer-motion";
import { BookOpen, Users } from "lucide-react";

export default function LevelBenefitsCTA() {
  return (
    <motion.section
      className="py-20 md:py-28 bg-gradient-to-br from-mulearn-whitish via-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of learners who are already progressing through our structured learning levels and building their dream careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-mulearn-trusty-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>Start Learning</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-mulearn-trusty-blue transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
