import { Activities } from "./activities";
import { Apply } from "./apply";
import { BestPractices } from "./best-practices";
import { CampusHero } from "./hero";
import { Journey } from "./journey";
import { Quote } from "./quote";
import { Structure } from "./structure";
import { WhyChapter } from "./why";

export function CampusView() {
  return (
    <div className="min-h-screen">
      <CampusHero />
      <WhyChapter />
      <Structure />
      <Activities />
      <Journey />
      <BestPractices />
      <Quote />
      <Apply />
    </div>
  );
}
