"use client";

import { motion } from "framer-motion";
import { GalleryItem } from "@/lib/types";
import { 
   School, Building2, Eye, UsersRound, Calendar,Target,Award,Users2,Briefcase,
  GraduationCap,Sparkles
} from "lucide-react";

interface MediaCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function MediaCard({ item, onClick }: MediaCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "events": return "bg-mulearn-trusty-blue";
      case "students": return "bg-mulearn-duke-purple";
      case "companies": return "bg-mulearn-gray-600";
      case "mentors": return "bg-mulearn-blackish";
      case "impact-stories": return "bg-mulearn-trusty";
      default: return "bg-mulearn-trusty-blue";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "events": return <Calendar size={16} />;
      case "students": return <GraduationCap size={16} />;
      case "companies": return <Briefcase size={16} />;
      case "mentors": return <Users2 size={16} />;
      case "impact-stories": return <Sparkles size={16} />;
      default: return <Target size={16} />;
    }
  };

  const getStatIcon = (statType: string) => {
    switch (statType) {
      case "participants": return <UsersRound size={12} />;
      case "campuses": return <School size={12} />;
      case "companies": return <Building2 size={12} />;
      default: return <Award size={12} />;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-mulearn-whitish rounded-lg overflow-hidden cursor-pointer group border border-mulearn-greyish hover:shadow-xl transition-all font-sans"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Placeholder for image */}
        <div className="w-full h-full bg-mulearn-trusty flex items-center justify-center">
          <span className="text-mulearn-whitish text-lg font-semibold text-center px-4">
            {item.title}
          </span>
        </div>
        
        {/* Category Badge with Icon */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-mulearn-whitish ${getCategoryColor(item.category)} flex items-center gap-1`}>
            {getCategoryIcon(item.category)}
            {item.category.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-mulearn-blackish bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="text-mulearn-whitish text-center"
          >
            <div className="bg-mulearn-blackish bg-opacity-70 rounded-full p-3">
              <Eye size={20} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-mulearn-blackish mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-mulearn-gray-600 text-sm line-clamp-2">{item.description}</p>
        
        {/* Stats Section */}
        <div className="mt-3 flex flex-wrap gap-2">
          {/* Show stats if available */}
          {item.stats && Object.entries(item.stats).map(([key, value]) => (
            <span key={key} className="text-xs bg-mulearn-whitish text-mulearn-gray-600 px-2 py-1 rounded border border-mulearn-greyish flex items-center gap-1">
              {getStatIcon(key)}
              {value}+
            </span>
          ))}
          
          {/* Always show category icon badge */}
          <span className="text-xs bg-mulearn-whitish text-mulearn-gray-600 px-2 py-1 rounded border border-mulearn-greyish flex items-center gap-1">
            {getCategoryIcon(item.category)}
            {item.category.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </span>
        </div>
      </div>
    </motion.div>
  );
}