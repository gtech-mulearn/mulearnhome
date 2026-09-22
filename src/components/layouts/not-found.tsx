import Link from "next/link";
import { MuImage } from "@/components/layouts";
import { cdnUrl } from "@/shared";
import { Button } from "../ui/button";

export function NotFoundPage() {
  const stone = cdnUrl("src/components/assests/NotFound/Stone.webp");
  const ufo = cdnUrl("src/components/assests/NotFound/UFO.webp");
  const fourNotFour = cdnUrl("src/components/assests/NotFound/FourNotFour.webp");
  const smallRocks = cdnUrl("src/components/assests/NotFound/SmallRocks.webp");
  const marsSurface = cdnUrl("src/components/assests/NotFound/NoBgFourNotFour.webp");
  return (
    <div className="relative w-full h-screen overflow-hidden bg-mulearn-whitish">
      <div className="absolute flex flex-col items-center left-6 top-12 sm:left-10 sm:top-16 md:left-20 md:top-20">
        <div className="flex flex-row items-center gap-1 text-lg font-medium text-mulearn-gray-600 sm:text-2xl md:text-4xl">
          <div className="rotate-[6deg] mu-float-uh">uh,</div>
          <div className="relative top-1 rotate-[7deg] mu-float-oh">Oh!</div>
          <span className="flex flex-row relative top-1 -rotate-[12deg]">
            <div>you</div>
            <div className="rotate-[12deg]">&apos;ve</div>
          </span>
        </div>
        <div className="flex flex-row items-center gap-1 font-bold text-mulearn-gray-600 -mt-4 text-5xl sm:text-6xl md:text-8xl">
          <div className="mu-float-l">l</div>
          <MuImage
            src={stone}
            alt="stone"
            width={80}
            height={80}
            className="relative top-1 h-10 w-auto sm:h-14 md:h-20 mu-float-o"
          />
          <div className="mu-float-s">s</div>
          <div className="mu-float-t">t</div>
        </div>
        <div className="flex flex-row items-center gap-1 font-semibold text-mulearn-gray-600 -mt-6 text-2xl sm:text-3xl md:text-5xl">
          <div className="rotate-[3deg] mu-float-in">in</div>
          <div className="-rotate-[2deg] mu-float-space">space</div>
        </div>
      </div>
      <MuImage
        src={ufo}
        alt="UFO"
        width={400}
        height={200}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] mu-float-ufo
                   w-40 sm:w-60 md:w-80"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-[1]">
        <MuImage
          src={fourNotFour}
          alt="404"
          width={480}
          height={400}
          className="w-40 sm:w-60 md:w-[30rem]"
        />
        <Link href="/">
          <Button className="mt-6">Back to Home</Button>
        </Link>
      </div>
      <MuImage
        src={smallRocks}
        alt="Small Rocks"
        width={1920}
        height={600}
        className="absolute w-full bottom-20 z-0 mu-float-rocks"
      />
      <div className="absolute w-full h-48 sm:h-56 md:h-75 bottom-0 z-0">
        <MuImage src={marsSurface} alt="Mars Surface" fill sizes="100vw" className="object-cover" />
      </div>
    </div>
  );
}
