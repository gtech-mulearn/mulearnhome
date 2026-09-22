import { MuImage } from "@/components/layouts";
import { Card } from "@/components/ui/card";
import { fetchTopLearners } from "@/shared";

export async function RankingSection() {
  const topLearners = await fetchTopLearners(10);

  return (
    <section className="py-16 md:py-20 container mx-auto px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Top Learners</h2>
          <p className="text-base md:text-lg">
            Recognizing consistent learners strengthens motivation for all.
          </p>
        </div>

        {/* Learners Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto ">
          {topLearners.map((learner) => (
            <Card className="p-6 flex flex-col items-center text-center" key={learner.name}>
              {/* Profile Image */}
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden">
                {learner.avatar ? (
                  <MuImage
                    src={learner.avatar}
                    alt={learner.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-mulearn text-mulearn-whitish text-2xl font-bold">
                    {learner.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-base font-semibold mb-1">{learner.name}</h3>

              {/* Email */}
              <p className="text-xs mb-3">{learner.email}</p>

              {/* Karma Points Label */}
              <p className="text-xs mb-1 font-medium">Karma Points</p>

              {/* Karma Points Value */}
              <p className="text-xl font-bold">{learner.kp.toLocaleString()} KP</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
