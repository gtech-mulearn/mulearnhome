import { Plus } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/MuFramer";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative text-center">
      <Plus aria-hidden className="absolute left-1/4 top-0 hidden size-4 text-mulearn lg:block" />
      <Plus
        aria-hidden
        className="absolute right-1/4 top-4 hidden size-4 text-category-amber lg:block"
      />

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Empower Your Campus
          <br />
          with <span className="text-mulearn">µLearn</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-mulearn-gray-600">
          Become a µLearn Campus Enabler and join the movement!
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="outline">
            <Link href="https://app.mulearn.org/" target="_blank" rel="noopener noreferrer">
              Explore Learners
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://app.mulearn.org/" target="_blank" rel="noopener noreferrer">
              Join as Enabler
            </Link>
          </Button>
        </div>
      </MotionDiv>
    </section>
  );
}
