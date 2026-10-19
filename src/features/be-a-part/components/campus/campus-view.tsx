import { Activities } from "./activities";
import { Apply } from "./apply";
import { BestPractices } from "./best-practices";
import { CampusHero } from "./hero";
import { Journey } from "./journey";
import { Structure } from "./structure";
import { WhyChapter } from "./why";

export function CampusView() {
  return (
    <div className="min-h-screen bg-mulearn-whitish">
      <CampusHero />
      <WhyChapter />
      <Structure />
      <Activities />
      <Journey />
      <BestPractices />
      <Apply />
    </div>
  );
}
