"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, type CarouselHandle, CarouselSlide } from "@/components/ui/carousel";
import { enablerColleges as colleges } from "../../data/enablers.data";

export function FiftyPlusColleges() {
  const carouselRef = useRef<CarouselHandle>(null);

  return (
    <section className="mx-auto max-w-7xl py-10">
      <div className="flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-5xl">
            Over 80+ Colleges are <span className="text-mulearn">µLearn</span>ified
          </h2>
        </div>

        <div className="relative px-14 w-full">
          <Button
            variant="default"
            onClick={() => carouselRef.current?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6 text-mulearn-whitish" />
          </Button>

          <Button
            variant="default"
            onClick={() => carouselRef.current?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full w-12 h-12"
          >
            <ChevronRight className="w-6 h-6 text-mulearn-whitish" />
          </Button>

          <Carousel
            ref={carouselRef}
            options={{ loop: true }}
            autoplay={{ delay: 2000, reverseDirection: true, pauseOnMouseEnter: true }}
            trackClassName="-ml-6"
            className="pb-4"
          >
            {colleges.map((college) => (
              <CarouselSlide
                key={`${college.title}`}
                className="h-auto pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Card className="h-40 shrink-0 flex flex-col border-mulearn/10 bg-linear-to-br from-mulearn-whitish to-mulearn/5">
                  <CardContent className="flex items-center justify-center p-3 h-full">
                    <p className="text-md font-bold text-center leading-snug">{college.title}</p>
                  </CardContent>
                </Card>
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
