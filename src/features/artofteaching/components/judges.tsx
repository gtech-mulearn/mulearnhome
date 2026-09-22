import { artOfTeachingMentors } from "../data/artofteaching.data";
import { MentorCard } from "./mentor-card";

export const Judges = () => {
  return (
    <div className="px-8 py-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl lg:text-6xl font-semibold text-mulearn-blackish leading-tight mb-4">
            The Former <span className="text-mulearn">Judging Panel</span>
          </h2>
          <p className="text-base lg:text-lg text-mulearn-gray-600 lg:w-2/5">
            We needed some really creative people with amazing mentoring skills to judge all your
            submissions. Listed below were our judges for the first edition of Art of Teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artOfTeachingMentors.map((mentor) => (
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              designation={mentor.designation}
              image={mentor.image}
              linkedIn={mentor.linkedIn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
