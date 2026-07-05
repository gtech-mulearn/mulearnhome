import { ArrowUpRight, Asterisk, Plus } from "lucide-react";
import Link from "next/link";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { artOfTeachingUrls } from "@/data/events";
import { cdnUrl } from "@/services/cdn";

const Hero = () => {
  const teachingGif = cdnUrl("/src/modules/Public/ArtOfTeaching/assets/Teaching.gif");

  return (
    <section className="relative">
      <Asterisk aria-hidden className="absolute left-0 top-0 size-8 text-mulearn-trusty-blue" />
      <Plus aria-hidden className="absolute right-0 top-2 size-6 text-category-amber" />

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-black leading-tight md:text-6xl">
          µLearn<br></br>
          <span className="text-mulearn"> Art of Teaching 4.0</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-mulearn-gray-600 md:text-lg">
          µLearn is returning with Art of Teaching to pay tribute to educators who shape the next
          generation.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href={artOfTeachingUrls.registerNow} target="_blank" rel="noopener noreferrer">
              Register Now
              <ArrowUpRight />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/enablers">Enablers</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">µlearn</Link>
          </Button>
        </div>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <li className="flex h-56 flex-col justify-end rounded-2xl bg-mulearn p-5 sm:h-80 sm:p-6 lg:h-96">
          <span className="text-3xl font-black text-mulearn-whitish sm:text-4xl">4.0</span>
          <span className="mt-1 text-sm font-semibold text-mulearn-whitish/90 sm:text-base">
            Lessons of The Future
          </span>
        </li>
        <li className="relative order-first col-span-2 h-56 sm:order-0 sm:col-span-1 sm:h-80 lg:h-96">
          <MuImage
            src={teachingGif}
            alt="Art of Teaching illustration"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-contain"
            unoptimized
          />
        </li>
        <li className="flex h-56 flex-col justify-end rounded-2xl bg-category-purple p-5 sm:h-80 sm:p-6 lg:h-96">
          <AnimatedNumber
            value={100}
            suffix="+"
            className="text-3xl font-black text-mulearn-whitish sm:text-4xl"
          />
          <span className="mt-1 text-sm font-semibold text-mulearn-whitish/90 sm:text-base">
            Entries Received
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
