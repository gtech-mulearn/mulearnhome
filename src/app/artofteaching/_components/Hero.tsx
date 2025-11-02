import Link from "next/link";
import Image from "next/image";
import { artOfTeachingUrls } from "@/data/data";
import { cdnUrl } from "@/services/cdn";

const Hero = () => {
  const teachingGif = cdnUrl(
    "/src/modules/Public/ArtOfTeaching/assets/Teaching.gif"
  );

  return (
    <div className="px-8 py-8 bg-white lg:px-12 lg:py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-7xl font-semibold text-mulearn-blackish leading-tight">
            <span className="text-mulearn-trusty-blue">µLearn Art</span> of
            Teaching 3.0
          </h1>
          <p className="mt-2 text-base lg:text-lg text-gray-600 lg:w-4/5">
            µLearn is returning with Art of Teaching to pay tribute to educators
            who shape the next generation.
          </p>

          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 mt-2">
            <Link href={artOfTeachingUrls.registerNow} className="no-underline">
              <button className="bg-mulearn-trusty-blue text-mulearn-whitish px-6 py-2 rounded-md w-[300px] text-center font-bold mt-4 hover:bg-mulearn-duke-purple transition-colors">
                Register Now
              </button>
            </Link>

            <div className="flex flex-row justify-center items-center gap-1 mt-2">
              <Link href="/enablers">
                <button className="border-2 border-mulearn-trusty-blue text-mulearn-trusty-blue px-6 py-2 rounded-md w-[150px] font-bold hover:bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple hover:bg-opacity-10 transition-colors">
                  Enablers
                </button>
              </Link>
              <Link href="/">
                <button className="border-2 border-mulearn-trusty-blue text-mulearn-trusty-blue px-6 py-2 rounded-md w-[150px] font-bold hover:bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple hover:bg-opacity-10 transition-colors">
                  µlearn
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
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

export default Hero;
