import Link from "next/link";
import { VideoFacade } from "@/components/VideoFacade";
import { artOfTeachingUrls } from "@/data/events";

const Recap = () => {
  const { recapVideoId } = artOfTeachingUrls;

  return (
    <section>
      <VideoFacade
        videoId={recapVideoId}
        title="Art of Teaching 3.0 recap"
        className="aspect-video w-full rounded-3xl"
      >
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-mulearn-blackish px-3 py-1 text-xs font-bold text-mulearn-whitish">
          3rd Edition
        </span>
        <Link
          href={`https://www.youtube.com/watch?v=${recapVideoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 rounded-full bg-mulearn-blackish px-4 py-2 text-xs font-semibold text-mulearn-whitish transition-opacity hover:opacity-90"
        >
          Watch on YouTube
        </Link>
      </VideoFacade>
    </section>
  );
};

export default Recap;
