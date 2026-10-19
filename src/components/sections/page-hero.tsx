import type { ReactNode } from "react";
import { MotionDiv, MuImage } from "@/components/layouts";
import { cn } from "@/lib/utils";
import { Sparkles } from "./sparkles";

interface PageHeroProps {
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  image: { src: string; alt: string; width: number; height: number };
  /** Width constraints for the illustration column — portrait art needs a narrower cap. */
  imageClassName?: string;
  /** Edge fades for art cropped flat at its borders (it always fades out at the bottom). */
  maskClassName?: string;
}

/** Two-column page hero: illustration left, copy right (stacked on mobile). */
export function PageHero({
  title,
  description,
  actions,
  image,
  imageClassName,
  maskClassName,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative max-w-2xl mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left lg:order-2"
          >
            <Sparkles className="-top-14 right-4" />
            <h1 className="lg:text-5xl xl:text-6xl text-balance">{title}</h1>
            <div className="mt-5 text-lg md:text-xl font-medium text-mulearn-blackish">
              {description}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {actions}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
              "relative w-full mx-auto lg:order-1",
              imageClassName ?? "max-w-md sm:max-w-xl lg:max-w-none",
            )}
          >
            {/* Radial gradient rather than a blurred blob, so the glow fades out inside the
                section instead of being clipped into a visible edge by overflow-hidden. */}
            <div className="absolute -inset-8 bg-radial from-mulearn/35 to-transparent to-70% hidden sm:block" />
            <Sparkles className="-top-6 -left-2" />
            <MuImage
              src={image.src}
              alt={image.alt}
              className={cn("relative w-full h-auto object-contain mask-b-from-80%", maskClassName)}
              width={image.width}
              height={image.height}
              priority
              unoptimized
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
