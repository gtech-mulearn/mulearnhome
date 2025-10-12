"use client";

import React from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { Event } from "@/lib/types";

interface Props {
  events: Event[];
  featured?: boolean;
}

export default function Grid({ events, featured = false }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {events.map((event, i) => {
        const isFeatured = featured && i === 0;
        return (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}
          >
            <EventCard event={event} featured={isFeatured} />
          </motion.div>
        );
      })}
    </div>
  );
}
