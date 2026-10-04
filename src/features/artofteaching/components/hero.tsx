import Link from "next/link";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { cdnUrl } from "@/shared";
import { artOfTeachingUrls } from "../data/artofteaching.data";

export const Hero = () => {
  const teachingGif = cdnUrl("/src/modules/Public/ArtOfTeaching/assets/Teaching.gif");

  return (
    <div className="px-8 py-8 lg:px-12 lg:py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center p-4 justify-between max-w-7xl mx-auto">
        <div className="text-center  lg:text-left lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-semibold text-mulearn-blackish leading-tight">
            <span className="text-mulearn">µLearn Art</span> of Teaching 4.0
          </h1>
          <p className="mt-2 text-base lg:text-lg text-mulearn-gray-600 lg:w-4/5">
            µLearn is returning with Art of Teaching to pay tribute to educators who shape the next
            generation.
          </p>

          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 mt-2 w-full ">
            <Link href={artOfTeachingUrls.registerNow} className="no-underline w-full">
              <Button
                variant={"default"}
                className="w-full px-6 py-3 text-center font-bold mt-4 transition-colors"
              >
                Register Now
              </Button>
            </Link>

            <div className="flex flex-row justify-center items-center gap-2 mt-2 w-full">
              <Link href="/enablers" className="flex-1">
                <Button
                  variant={"outline"}
                  className="w-full px-6 py-2 font-bold transition-colors"
                >
                  Enablers
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button
                  variant={"outline"}
                  className="w-full px-6 py-2 font-bold transition-colors"
                >
                  µlearn
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <MuImage
            src={teachingGif}
            alt="Art of Teaching Illustration"
            width={400}
            height={400}
            className="w-72 lg:w-[28rem] h-auto"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};
