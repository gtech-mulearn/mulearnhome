"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { enablers } from "@/data/enablers";

import "swiper/css";

const colleges = enablers.colleges;

export default function Colleges() {
  return (
    <section id="colleges">
      <h2 className="text-center">
        Over 80+ Colleges are <span className="text-mulearn">µLearn</span>ified
      </h2>

      <div className="mt-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            reverseDirection: true,
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {colleges.map((college) => (
            <SwiperSlide key={college.title}>
              <div className="flex min-h-20 items-center justify-center rounded-2xl border border-border px-6 py-5 text-center">
                <p className="text-sm font-bold text-mulearn-blackish">{college.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
