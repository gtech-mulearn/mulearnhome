import MuImage from '@/components/MuImage';
import { TopLearner, Testimonial } from '@/data/data';
import { cdnUrl } from '@/services/cdn';

interface RankingSectionProps {
  topLearners: TopLearner[];
  testimonials: Testimonial[];
}

const fallbackImage = cdnUrl("public/assets/team/default.webp");

const TopLearnerCard: React.FC<TopLearner & { rank: number }> = ({
  name,
  kp,
  imageUrl,
}) => (
  <div className="text-center group relative flex flex-col items-center">
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-400 to-white-300 rounded-xl   " />
      <MuImage
        src={imageUrl ? imageUrl : fallbackImage}
        alt={`${name}'s profile`}
        fill
        className="object-contain object-top"
      />
    </div>

    <div className="mt-4">
      <p className="text-lg font-bold text-gray-900 mb-1">{name}</p>
      <p className="text-xl font-extrabold text-gray-900">
        {kp.toLocaleString()}
        <span className="text-blue-600">KP</span>
      </p>
    </div>
  </div>
);


const SmallLearnerCard: React.FC<{
  name: string;
  kp: number;
  imageUrl: string;
}> = ({ name, kp, imageUrl }) => (
  <div className="relative w-44 sm:w-60 h-18 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700" />
    <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent" />
    <div className="relative h-full flex items-center px-3 gap-3">
      <MuImage
        src={imageUrl ? (imageUrl) : fallbackImage}
        alt={`${name}'s profile`}
        width={100}
        height={100}
        className="object-contain object-top"
      />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white truncate drop-shadow">
          {name}
        </p>
        <p className="text-xs font-medium text-white/90 drop-shadow">
          {kp.toLocaleString()} <span className="font-bold">KP</span>
        </p>
      </div>
    </div>

    <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
  </div>
);


const RankingSection: React.FC<RankingSectionProps> = ({ topLearners }) => {
  const showcaseLearners = topLearners.slice(0, 3);
  
  const smallLearners = topLearners.slice(3, 11).length >= 8 
    ? topLearners.slice(3, 11) 
    : [...topLearners.slice(3), ...topLearners.slice(0, Math.max(0, 8 - (topLearners.length - 3)))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-16 text-gray-900">
        Top <span className="text-blue-600">Learners</span>
      </h2>


      <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-12 mb-16 max-w-5xl mx-auto w-full">
        {showcaseLearners[0] && (
          <div className="order-1 md:order-2 md:mb-16 flex justify-center w-full md:w-auto">
            <TopLearnerCard {...showcaseLearners[0]} rank={1} />
          </div>
        )}

        {showcaseLearners[1] && (
          <div className="order-2 md:order-1 md:mt-16 flex justify-center w-full md:w-auto">
            <TopLearnerCard {...showcaseLearners[1]} rank={2} />
          </div>
        )}

        {showcaseLearners[2] && (
          <div className="order-3 md:order-3 md:mt-16 flex justify-center w-full md:w-auto">
            <TopLearnerCard {...showcaseLearners[2]} rank={3} />
          </div>
        )}
      </div>

      <div className="relative mt-12 mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-gray-50/80 to-transparent z-10 pointer-events-none hidden sm:block" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-gray-50/80 to-transparent z-10 pointer-events-none hidden sm:block" />
        <div className="max-w-6xl mx-auto px-4 sm:px-8"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 place-items-center lg:-ml-8">
            {smallLearners.slice(0, 4).map((learner, index) => (
              <SmallLearnerCard
                key={index}
                name={learner.name}
                kp={learner.kp}
                imageUrl={learner.imageUrl}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center lg:ml-8">
            {smallLearners.slice(4, 8).map((learner, index) => (
              <SmallLearnerCard
                key={`second-${index}`}
                name={learner.name}
                kp={learner.kp}
                imageUrl={learner.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingSection;