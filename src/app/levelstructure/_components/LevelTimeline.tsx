"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import { levelStructure } from "@/data/data";
import { ArrowRight, CheckCircle, Clock, Users, Target, Info } from "lucide-react";
import { useState } from "react";
import LevelDetailModal from "./LevelDetailModal";
import type { Level } from "@/lib/types";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const levelVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

export default function LevelTimeline() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLevelClick = (level: Level) => {
    setSelectedLevel(level);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLevel(null);
  };

  return (
    <motion.section
      id="timeline"
      className="py-20 md:py-28 bg-mulearn-whitish"
      variants={fadeInUp}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mulearn-blackish mb-6">
            Your Learning Journey
          </h2>
          <p className="text-lg md:text-xl text-mulearn-gray-600 max-w-3xl mx-auto">
            Progress through our structured levels, each building upon the previous one to create a comprehensive learning experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mulearn-trusty-blue to-mulearn-duke-purple transform md:-translate-x-0.5" />
          
          <div className="space-y-12 md:space-y-16">
            {levelStructure.levels.map((level: Level, index: number) => (
              <motion.div
                key={level.id}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-full transform -translate-x-2 md:-translate-x-2 z-10" />
                
                {/* Level Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    custom={index}
                    variants={levelVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`relative bg-white rounded-2xl shadow-lg border-2 ${level.borderColor} p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                    onClick={() => handleLevelClick(level)}
                  >
                    {/* Level Badge */}
                    <div className={`absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {level.level}
                    </div>
                    
                    {/* Level Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${level.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <level.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Level Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-mulearn-blackish mb-2">
                          {level.title}
                        </h3>
                        <p className="text-lg text-mulearn-gray-600 font-medium">
                          {level.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-mulearn-gray-600 leading-relaxed">
                        {level.description}
                      </p>
                      
                      {/* Level Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-mulearn-trusty-blue" />
                          <span className="text-sm text-mulearn-gray-600">
                            <strong>Duration:</strong> {level.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-mulearn-trusty-blue" />
                          <span className="text-sm text-mulearn-gray-600">
                            <strong>Prerequisites:</strong> {level.prerequisites}
                          </span>
                        </div>
                      </div>
                      
                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-mulearn-blackish flex items-center">
                          <Target className="w-4 h-4 mr-2 text-mulearn-trusty-blue" />
                          Key Skills
                        </h4>
                        <ul className="space-y-1">
                          {level.skills.slice(0, 3).map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center text-sm text-mulearn-gray-600">
                              <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                              {skill}
                            </li>
                          ))}
                          {level.skills.length > 3 && (
                            <li className="text-sm text-mulearn-gray-500 italic">
                              +{level.skills.length - 3} more skills
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      {/* Next Level Arrow */}
                      {index < levelStructure.levels.length - 1 && (
                        <div className="flex items-center justify-center pt-4">
                          <div className="flex items-center space-x-2 text-mulearn-trusty-blue font-medium">
                            <span className="text-sm">Next: {level.nextLevel}</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      )}
                      
                      {/* Learn More Button */}
                      <div className="flex items-center justify-center pt-4">
                        <div className="flex items-center space-x-2 text-mulearn-trusty-blue font-medium hover:text-mulearn-duke-purple transition-colors">
                          <Info className="w-4 h-4" />
                          <span className="text-sm">Click to learn more</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Level Detail Modal */}
      <LevelDetailModal
        level={selectedLevel}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </motion.section>
  );
}
