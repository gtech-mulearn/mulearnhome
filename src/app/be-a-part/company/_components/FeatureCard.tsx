"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  children: ReactNode;
  variants?: Variants;
}

export default function FeatureCard({ title, children, variants }: FeatureCardProps) {
  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100 relative overflow-hidden"
    >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </motion.div>
  );
}