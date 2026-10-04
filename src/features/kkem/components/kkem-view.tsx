import { interestGroups } from "@/features/interest-groups";
import { kkem } from "../data/kkem.data";
import { IGAbout } from "./ig-about";
import { IGEvents } from "./ig-events";
import { IGSection } from "./ig-section";

export function KkemView() {
  return (
    <div className="max-w-800">
      <IGAbout />
      <IGSection cards={interestGroups} />
      <div id="events">
        <IGEvents cards={kkem.pastEventCardData} heading="Partnered Events" largeImg={true} />
      </div>
    </div>
  );
}
