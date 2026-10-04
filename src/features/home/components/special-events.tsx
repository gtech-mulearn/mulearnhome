"use client";

import type { Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { MotionDiv, MotionSection } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Carousel, type CarouselHandle, CarouselSlide } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { EventCard, safeMapEvents, useFeaturedEvents } from "@/features/events";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export function SpecialEvents() {
  const carouselRef = useRef<CarouselHandle>(null);
  const { data, error, isLoading } = useFeaturedEvents({ pageIndex: 1, perPage: 6 });
  const events = error ? null : safeMapEvents(data, "featured");

  if (!isLoading && (!events || events.length === 0)) return null;

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionDiv variants={fadeInUp} className="text-center mb-12">
          <h2 className="mb-4">
            Special <span className="text-mulearn">Events</span>
          </h2>
          <p className="font-medium text-lg text-mulearn-gray-600 max-w-3xl mx-auto">
            Discover exclusive events designed to inspire innovation, enhance skills, and foster
            meaningful connections across technology, management, and creativity.
          </p>

          <div className="relative mt-12 px-0 sm:px-14">
            {!isLoading && events && events.length > 1 && (
              <>
                <Button
                  variant="default"
                  onClick={() => carouselRef.current?.scrollPrev()}
                  className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12"
                >
                  <ChevronLeft className="w-6 h-6 text-mulearn-whitish" />
                </Button>
                <Button
                  variant="default"
                  onClick={() => carouselRef.current?.scrollNext()}
                  className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12"
                >
                  <ChevronRight className="w-6 h-6 text-mulearn-whitish" />
                </Button>
              </>
            )}

            {isLoading ? (
              <div className="flex flex-wrap justify-center gap-8">
                {Array.from({ length: 3 }).map((_, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static placeholder list, never reordered
                  <Skeleton key={index} className="w-full sm:w-[380px] h-[460px] rounded-2xl" />
                ))}
              </div>
            ) : (
              <Carousel
                ref={carouselRef}
                options={{ loop: (events?.length ?? 0) > 1, align: "center" }}
                autoplay={
                  (events?.length ?? 0) > 1 ? { delay: 4000, pauseOnMouseEnter: true } : undefined
                }
                trackClassName="-ml-6"
                className="pb-4"
              >
                {events?.map((event) => (
                  <CarouselSlide
                    key={event.link ?? event.title}
                    className="pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] flex justify-center"
                  >
                    <EventCard event={event} />
                  </CarouselSlide>
                ))}
              </Carousel>
            )}
          </div>
          <div className="mt-12">
            <Link href="/events">
              <Button variant={"default"} className="px-8 py-3 font-semibold">
                View All Events
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
