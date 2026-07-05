import { VideoFacade } from "@/components/VideoFacade";
import { artOfTeachingUrls } from "@/data/events";

const prizeBadge = ["bg-category-amber", "bg-mulearn-blackish", "bg-category-purple"];

const Archives = () => {
  return (
    <section>
      <h2>
        Art of Teaching <span className="text-category-pink">Archives</span>
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-mulearn-gray-600">
        Take a look at the top submissions by the teachers from the first edition of The Art of
        Teaching.
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {artOfTeachingUrls.archives.map((archive, index) => (
          <li key={archive.videoId}>
            <VideoFacade
              videoId={archive.videoId}
              title={`${archive.name} — ${archive.prize}`}
              className="aspect-video w-full rounded-2xl"
            >
              <span
                className={`pointer-events-none absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-mulearn-whitish ${
                  prizeBadge[index % prizeBadge.length]
                }`}
              >
                {archive.prize}
              </span>
            </VideoFacade>
            <h3 className="mt-4 text-base font-bold text-mulearn-blackish">{archive.name}</h3>
            <p className="mt-1 text-sm text-mulearn-gray-600">{archive.college}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Archives;
