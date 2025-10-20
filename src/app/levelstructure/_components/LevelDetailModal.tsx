"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Clock, Users, Target, BookOpen, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LevelDetailModalProps {
  level: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function LevelDetailModal({ level, isOpen, onClose }: LevelDetailModalProps) {
  if (!level) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`relative p-8 rounded-t-2xl bg-gradient-to-r ${level.color} text-white`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <level.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{level.title}</h2>
                  <p className="text-xl opacity-90">{level.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg opacity-90 leading-relaxed">
                {level.description}
              </p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Level Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-5 h-5 text-mulearn-trusty-blue" />
                  <div>
                    <p className="font-semibold text-mulearn-blackish">Duration</p>
                    <p className="text-mulearn-gray-600">{level.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Users className="w-5 h-5 text-mulearn-trusty-blue" />
                  <div>
                    <p className="font-semibold text-mulearn-blackish">Prerequisites</p>
                    <p className="text-mulearn-gray-600">{level.prerequisites}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Award className="w-5 h-5 text-mulearn-trusty-blue" />
                  <div>
                    <p className="font-semibold text-mulearn-blackish">Next Level</p>
                    <p className="text-mulearn-gray-600">{level.nextLevel}</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold text-mulearn-blackish mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-mulearn-trusty-blue" />
                  Key Skills You'll Learn
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {level.skills.map((skill: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-mulearn-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h3 className="text-2xl font-bold text-mulearn-blackish mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-mulearn-trusty-blue" />
                  Activities & Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {level.activities.map((activity: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-mulearn-trusty-blue flex-shrink-0" />
                      <span className="text-mulearn-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div>
                <h3 className="text-2xl font-bold text-mulearn-blackish mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-mulearn-trusty-blue" />
                  Milestones to Achieve
                </h3>
                <div className="space-y-3">
                  {level.milestones.map((milestone: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                      <div className="w-6 h-6 bg-mulearn-trusty-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-mulearn-gray-700">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <Button variant="mulearn" className="flex-1">
                  Start This Level
                </Button>
                <Button variant="mulearn-outline" className="flex-1">
                  View Prerequisites
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
