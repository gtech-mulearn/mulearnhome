import { getInterestGroupDisplayItems, InterestGroupDirectory } from "@/shared";
import { kkem } from "../data/kkem.data";
import { IGAbout } from "./ig-about";
import { IGEvents } from "./ig-events";
import { IGSection } from "./ig-section";

export async function KkemView() {
  const groups = await getInterestGroupDisplayItems();

  return (
    <div className="max-w-800">
      <IGAbout />
      <IGSection />
      <InterestGroupDirectory groups={groups} />
      <IGEvents cards={kkem.pastEventCardData} />
    </div>
  );
}
