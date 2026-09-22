import { EnablersBenefits } from "./benefits";
import { FiftyPlusColleges } from "./colleges";
import { GetInTouch } from "./get-in-touch";
import { EnablersHero } from "./hero";
import { Onboarding } from "./how-to-begin";
import { MissionAndGrowth } from "./mission-and-growth";
import { EnablersSuccessStories } from "./success-stories";
import { WhoIsEnabler } from "./who-is-enabler";

export function EnablersView() {
  return (
    <main className="min-h-screen bg-mulearn-whitish">
      <EnablersHero />
      <WhoIsEnabler />
      <EnablersBenefits />
      <FiftyPlusColleges />
      <EnablersSuccessStories />
      <MissionAndGrowth />
      <Onboarding />
      <GetInTouch />
    </main>
  );
}
