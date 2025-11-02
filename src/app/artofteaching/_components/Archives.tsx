import { artOfTeachingUrls } from "@/data/data";

const Archives = () => {
  return (
    <div className="px-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl lg:text-6xl font-semibold text-mulearn-blackish leading-tight mb-4">
            Art of Teaching{" "}
            <span className="text-mulearn-trusty-blue">Archives</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 lg:w-2/5">
            Take a look at the top submissions by the teachers from the first
            edition of The Art of Teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {artOfTeachingUrls.archives.map((videoUrl, index) => (
            <div
              key={index}
              className="relative w-full rounded-lg overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full border-none"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archives;
