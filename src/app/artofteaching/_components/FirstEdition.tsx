import { VideoFacade } from "@/components/VideoFacade";
import { artOfTeachingUrls } from "@/data/events";

const FirstEdition = () => {
  return (
    <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2>
          Art of Teaching <span className="text-category-teal">First Edition</span>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-mulearn-gray-600">
          The First Edition of Art of Teaching was a huge success with more than 100 distinct
          entries, all of which used creative teaching methods to simplify a topic for better
          understanding by a student.
        </p>
      </div>

      <VideoFacade
        videoId={artOfTeachingUrls.firstEditionVideoId}
        title="Art of Teaching First Edition"
        className="aspect-video w-full rounded-3xl"
        playClassName="bg-mulearn-whitish text-mulearn"
      />
    </section>
  );
};

export default FirstEdition;
