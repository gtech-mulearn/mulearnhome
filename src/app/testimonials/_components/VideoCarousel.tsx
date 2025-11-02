import { MotionDiv } from "@/components/MuFramer";
import { VideoTestimonial } from "@/lib/types";
import VideoTestimonialCard from "./VideoTestimonialcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface VideoCarouselProps {
  testimonials: VideoTestimonial[];
}

export default function VideoCarousel({ testimonials }: VideoCarouselProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full h-full max-w-3xl md:max-w-4xl mx-auto px-7"
    >
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <VideoTestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MotionDiv>
  );
}
