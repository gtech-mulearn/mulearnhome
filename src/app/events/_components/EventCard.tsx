"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { type Event } from "@/data/data";

interface Props {
  event: Event;
  featured?: boolean;
}

export default function EventCard({ event, featured = false }: Props) {
  return (
    <motion.div
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`group relative h-full bg-mulearn-whitish rounded-2xl overflow-visible shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-mulearn-trusty-blue ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <div className={`p-6 space-y-4 ${featured ? "lg:p-8 lg:space-y-6" : ""}`}>
        <div className="space-y-3">
          <h3
            className={`text-mulearn-trusty-blue group-hover:text-mulearn-trusty-blue transition-colors duration-300 line-clamp-2 leading-snug ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {event.title}
          </h3>
          {event.date && (
            <div className="flex items-center gap-2 text-mulearn-blackish text-sm">
              <Calendar className="w-4 h-4 flex-shrink-0 text-mulearn-blackish/60" />
              <span>{event.date}</span>
            </div>
          )}
        </div>

        <p className="text-mulearn-blackish text-sm leading-relaxed">
          {event.description}
        </p>

        {event.link && (
          <Link href={event.link} className="block mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full flex items-center justify-center gap-3
                bg-mulearn-trusty-blue hover:bg-mulearn-duke-purple text-mulearn-whitish rounded-xl
                px-5 py-3 font-semibold text-sm shadow-sm
                hover:shadow-md transition-all duration-300 cursor-pointer
              "
            >
              <span className="flex items-center gap-2">
                Check it out!
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
