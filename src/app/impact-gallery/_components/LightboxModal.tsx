"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { GalleryItem } from "@/lib/types";

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-mulearn-blackish bg-opacity-90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-mulearn-whitish rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden border border-mulearn-greyish"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-6 border-b border-mulearn-greyish">
            <div>
              <h2 className="text-2xl font-bold text-mulearn-blackish font-display">{item.title}</h2>
              <p className="text-mulearn-gray-600 mt-1 font-sans">{item.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-mulearn-gray-600 hover:text-mulearn-blackish text-2xl p-2 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <div 
              className="aspect-video rounded-lg mb-6 flex items-center justify-center"
              style={{ background: "var(--mulearn-trusty)" }}
            >
              <span className="text-mulearn-whitish text-xl font-semibold font-sans">
                {item.title} - Image/Video Content
              </span>
            </div>

            {/* Stats if available */}
            {item.stats && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {item.stats.participants && (
                  <div className="text-center p-4 bg-mulearn-whitish rounded-lg border border-mulearn-greyish">
                    <div 
                      className="text-2xl font-bold mb-1 font-display"
                      style={{
                        background: "var(--mulearn-trusty)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      {item.stats.participants}+
                    </div>
                    <div className="text-sm text-mulearn-gray-600 font-sans">Participants</div>
                  </div>
                )}
                {item.stats.campuses && (
                  <div className="text-center p-4 bg-mulearn-whitish rounded-lg border border-mulearn-greyish">
                    <div 
                      className="text-2xl font-bold mb-1 font-display"
                      style={{
                        background: "var(--mulearn-trusty)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      {item.stats.campuses}+
                    </div>
                    <div className="text-sm text-mulearn-gray-600 font-sans">Campuses</div>
                  </div>
                )}
                {item.stats.companies && (
                  <div className="text-center p-4 bg-mulearn-whitish rounded-lg border border-mulearn-greyish">
                    <div 
                      className="text-2xl font-bold mb-1 font-display"
                      style={{
                        background: "var(--mulearn-trusty)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      {item.stats.companies}+
                    </div>
                    <div className="text-sm text-mulearn-gray-600 font-sans">Companies</div>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold text-mulearn-whitish ${getCategoryColor(item.category)} font-sans`}>
                {item.category.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </span>
              
              <button
                onClick={onClose}
                className="px-6 py-2 bg-mulearn-greyish text-mulearn-blackish rounded-full hover:bg-mulearn-gray-600 hover:text-mulearn-whitish transition-colors font-sans"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}