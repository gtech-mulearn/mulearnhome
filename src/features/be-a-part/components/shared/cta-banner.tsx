import Link from "next/link";
import type { ReactNode } from "react";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { Sparkles } from "./sparkles";

interface CtaBannerProps {
  title: ReactNode;
  description: ReactNode;
  action: { label: string; href: string; external?: boolean };
  /** Optional art anchored to the bottom-right; without it the banner centers its copy. */
  image?: { src: string; alt: string; width: number; height: number };
}

export function CtaBanner({ title, description, action, image }: CtaBannerProps) {
  return (
    <Section>
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl bg-mulearn-trusty-blue"
      >
        {image ? (
          <Sparkles className="top-8 right-10 text-mulearn-whitish" />
        ) : (
          <>
            <Sparkles className="top-10 left-10 text-mulearn-whitish" />
            <Sparkles className="bottom-12 right-14 text-mulearn-whitish" />
          </>
        )}

        <div className={cn("grid items-end", image && "lg:grid-cols-2")}>
          <div
            className={cn(
              "px-6 py-14 sm:px-12 sm:py-16 text-center",
              image ? "lg:pl-20 lg:pr-0 lg:py-20 lg:text-left" : "mx-auto max-w-3xl",
            )}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-balance text-mulearn-whitish">
              {title}
            </h2>
            <p className="mt-4 text-lg md:text-xl text-mulearn-whitish/90 text-pretty">
              {description}
            </p>
            <Button asChild variant="inverted" className="mt-8 h-11 px-7 text-base">
              <Link
                href={action.href}
                {...(action.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {action.label}
              </Link>
            </Button>
          </div>

          {image && (
            <div className="hidden lg:flex justify-end pr-10">
              <MuImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full max-w-md h-auto object-contain mask-l-from-75%"
                unoptimized
              />
            </div>
          )}
        </div>
      </MotionDiv>
    </Section>
  );
}
