"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  createContext,
  forwardRef,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export interface CarouselAutoplayOptions {
  delay: number;
  /** Scrolls backward instead of forward. Embla's Autoplay plugin has no such option, so
   * autoplay here is hand-rolled via setInterval + scrollPrev/scrollNext instead of the plugin. */
  reverseDirection?: boolean;
  pauseOnMouseEnter?: boolean;
}

export interface CarouselHandle {
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
}

interface CarouselProps {
  children: ReactNode;
  className?: string;
  /** className for the inner flex track — use a negative margin here (e.g. "-ml-6") to pair
   * with each CarouselSlide's matching padding for gap-like spacing. */
  trackClassName?: string;
  options?: EmblaOptionsType;
  autoplay?: CarouselAutoplayOptions;
  onSlideChange?: (index: number) => void;
}

const CarouselSelectedIndexContext = createContext(0);

export const Carousel = forwardRef<CarouselHandle, CarouselProps>(function Carousel(
  { children, className, trackClassName, options, autoplay, onSlideChange },
  ref,
) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isHovering = useRef(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    onSlideChange?.(index);
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const id = setInterval(() => {
      if (isHovering.current) return;
      if (autoplay.reverseDirection) {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }
    }, autoplay.delay);
    return () => clearInterval(id);
  }, [emblaApi, autoplay]);

  useImperativeHandle(ref, () => ({
    scrollPrev: () => emblaApi?.scrollPrev(),
    scrollNext: () => emblaApi?.scrollNext(),
    scrollTo: (index: number) => emblaApi?.scrollTo(index),
  }));

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: mouse-only hover state to pause autoplay
    <div
      className={cn("overflow-hidden", className)}
      ref={emblaRef}
      onMouseEnter={() => {
        if (autoplay?.pauseOnMouseEnter) isHovering.current = true;
      }}
      onMouseLeave={() => {
        isHovering.current = false;
      }}
    >
      <CarouselSelectedIndexContext.Provider value={selectedIndex}>
        <div className={cn("flex", trackClassName)}>{children}</div>
      </CarouselSelectedIndexContext.Provider>
    </div>
  );
});

export function useCarouselSelectedIndex() {
  return useContext(CarouselSelectedIndexContext);
}

export function CarouselSlide({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("min-w-0 shrink-0 grow-0", className)}>{children}</div>;
}
