"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface CollaborationTrackProps {
  badge: string;
  badgeStyle: string;
  title: string;
  children: ReactNode;
  variants?: Variants;
}

export default function CollaborationTrack({
  badge,
  badgeStyle,
  title,
  children,
  variants,
}: CollaborationTrackProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 text-gray-800 shadow-2xl"
    >
      <div className={`inline-block px-4 py-2 rounded-full mb-4 text-sm font-bold ${badgeStyle}`}>
        {badge}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-600">{title}</h3>
      {children}
    </motion.div>
  );
}