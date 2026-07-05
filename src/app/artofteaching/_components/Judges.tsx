import { artOfTeachingMentors } from "@/data/events";
import MentorCard, { type MentorAccent } from "./MentorCard";

const accents: MentorAccent[] = ["blue", "purple", "amber"];

const Judges = () => {
  return (
    <section>
      <h2>
        The Former <span className="text-mulearn">Judging Panel</span>
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-mulearn-gray-600">
        We needed some really creative people with amazing mentoring skills to judge all your
        submissions. Listed below were our judges for the first edition of Art of Teaching.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {artOfTeachingMentors.map((mentor, index) => (
          <MentorCard
            key={mentor.name}
            name={mentor.name}
            designation={mentor.designation}
            linkedIn={mentor.linkedIn}
            accent={accents[index % accents.length]}
          />
        ))}
      </div>
    </section>
  );
};

export default Judges;
