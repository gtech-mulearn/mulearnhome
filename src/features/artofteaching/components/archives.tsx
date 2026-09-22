import { YouTubeEmbed } from "@next/third-parties/google";
import { artOfTeachingUrls } from "../data/artofteaching.data";

export const Archives = () => {
  return (
    <div className="px-8 py-8 bg-mulearn-whitish">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl lg:text-6xl font-semibold text-mulearn-blackish leading-tight mb-4">
            Art of Teaching <span className="text-mulearn">Archives</span>
          </h2>
          <p className="text-base lg:text-lg text-mulearn-gray-600 lg:w-2/5">
            Take a look at the top submissions by the teachers from the first edition of The Art of
            Teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {artOfTeachingUrls.archives.map((videoUrl) => (
            <div key={videoUrl} className="relative w-full rounded-lg overflow-hidden aspect-video">
              <div className="absolute top-0 left-0 w-full h-full">
                <YouTubeEmbed
                  videoid={videoUrl}
                  style="border-none"
                  playlabel="true"
                  params="disablekb=1&enablejsapi=1&playsinline=1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
