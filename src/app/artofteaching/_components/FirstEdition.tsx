import { artOfTeachingUrls } from "@/data/data";

const FirstEdition = () => {
  return (
    <div className="px-8 py-8 bg-white lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/5">
            <h2 className="text-4xl lg:text-6xl font-semibold text-mulearn-blackish leading-tight">
              Art of Teaching{" "}
              <span className="text-mulearn-trusty-blue">First Edition</span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-gray-600 lg:w-4/5">
              The First Edition of Art of Teaching was a huge success with more
              than 100 distinct entries, all of which used creative teaching
              methods to simplify a topic for better understanding by a student.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden">
              <iframe
                className="w-full h-56 lg:h-80 rounded-lg"
                src={artOfTeachingUrls.firstEdition}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstEdition;
