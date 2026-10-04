import { Archives } from "./archives";
import { FirstEdition } from "./first-edition";
import { Guidelines } from "./guidelines";
import { Hero } from "./hero";
import { Judges } from "./judges";

export function ArtOfTeachingView() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Guidelines />
      <FirstEdition />
      <Judges />
      <Archives />
    </div>
  );
}
