"use client";
import React from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Event } from "@/lib/types";

interface Props {
  events: Event[];
}

export default function EventCarousel({ events }: Props) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={events.length > 3}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="!pb-12"
      >
        {events.map((event, i) => (
          <SwiperSlide key={event.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <EventCard event={event} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
