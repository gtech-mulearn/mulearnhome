import { Sparkle } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionP, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { clientEnv } from "@/config/env.client";
import { ImpactGalleryView, ImpactStats } from "@/features/impact-gallery";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Impact Gallery",
  description:
    "See µLearn's impact through numbers, stories, and moments captured across the community.",
  keywords: ["impact gallery", "mulearn impact", "community stories", "milestones"],
  canonical: "https://mulearn.org/impact-gallery",
});

export default async function ImpactGallery() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-mulearn/4 blur-[400px]" />
        <div className="absolute top-[30%] right-[-10%] w-[40%] aspect-square rounded-full bg-mulearn/4 blur-[400px]" />
        <div className="absolute top-[20%] left-[-15%] w-[45%] aspect-square rounded-full bg-mulearn/4 blur-[400px]" />
        <div className="absolute top-[50%] left-[-15%] w-[50%] aspect-square rounded-full bg-mulearn/4 blur-[400px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[45%] aspect-square rounded-full bg-mulearn/4 blur-[400px]" />
        <div className="absolute bottom-[1%] left-[-5%] w-[40%] aspect-square rounded-full bg-mulearn/4 blur-[400px]" />
      </div>
      <main
        className="pt-10 pb-20"
        style={{
          background: "linear-gradient(0deg, #ffffff 0%, #f1f2f7 30%, #dce0f4 100%)",
        }}
      >
        <div className="absolute top-20 left-10 md:left-20 opacity-30">
          <Sparkle size={48} className="animate-pulse text-mulearn fill-mulearn" />
        </div>
        <div className="absolute top-40 right-10 md:right-32 opacity-20">
          <Sparkle size={32} className="text-mulearn fill-mulearn" />
        </div>

        <MotionDiv
          initial={{ opacity: 0, x: -30, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="hidden md:block absolute top-10 left-5 w-200 pointer-events-none select-none"
        >
          <MuImage
            src="/assets/impact-gallery/mu.svg"
            alt="μLearn Logo Backdrop"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </MotionDiv>
        <div className="absolute bottom-20 left-1/4 opacity-10">
          <Sparkle size={24} className="text-mulearn fill-mulearn" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span>μLearn</span> <span className="text-mulearn">Impact Gallery</span>
          </MotionH1>

          <div className="flex justify-center mb-8">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-2xl aspect-4/3"
            >
              <MuImage
                src="/assets/impact-gallery/hero-pic.webp"
                alt="μLearn Impact Gallery"
                fill
                sizes="(max-width: 768px) 100vw, 42rem"
                className="object-contain"
                priority
                fetchPriority="high"
                quality={85}
              />
            </MotionDiv>
          </div>

          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-6 font-medium"
          >
            A journey of milestones, growth, and the impact we&apos;ve created together.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-x-2 gap-y-2 mb-10 text-sm md:text-base font-semibold text-mulearn"
          >
            <span className="hover:underline cursor-pointer">Stay Curious</span>
            <span className="text-mulearn-gray-600">|</span>
            <span className="hover:underline cursor-pointer">Stay Active</span>
            <span className="text-mulearn-gray-600">|</span>
            <span className="hover:underline cursor-pointer">Grow Every Day</span>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href={clientEnv.NEXT_PUBLIC_APP_URL} target="_blank" rel="noreferrer">
              <Button variant="default">Join µLearn</Button>
            </Link>
          </MotionDiv>
        </div>
      </main>

      <ImpactStats />

      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-mulearn">Impact</span> in Action
            </h2>
            <div className="h-1.5 w-24 bg-mulearn mx-auto rounded-full" />
          </div>

          <ImpactGalleryView />
        </div>

        <div className="absolute top-1/4 left-5  opacity-20">
          <Sparkle size={24} className="text-mulearn fill-mulearn" />
        </div>
        <div className="absolute top-3/4 right-10  opacity-20">
          <Sparkle size={32} className="text-mulearn fill-mulearn" />
        </div>
        <div className="absolute bottom-10 left-1/3  opacity-10">
          <Sparkle size={18} className="text-mulearn fill-mulearn" />
        </div>
      </section>
    </div>
  );
}
