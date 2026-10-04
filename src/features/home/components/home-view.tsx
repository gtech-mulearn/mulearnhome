import dynamic from "next/dynamic";
import { Features } from "./features";
import { Hero } from "./hero";

const Story = dynamic(() => import("./story").then((m) => m.Story));
const SpecialEvents = dynamic(() => import("./special-events").then((m) => m.SpecialEvents));
const Gallery = dynamic(() => import("./gallery").then((m) => m.Gallery));
const Comparison = dynamic(() => import("./comparison").then((m) => m.Comparison));
const Opportunities = dynamic(() => import("./opportunities").then((m) => m.Opportunities));
const Roles = dynamic(() => import("./roles").then((m) => m.Roles));
const Stats = dynamic(() => import("./stats").then((m) => m.Stats));
const Community = dynamic(() => import("./community").then((m) => m.Community));
const Newsletter = dynamic(() => import("./newsletter").then((m) => m.Newsletter));

export function HomeView() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Story />
      <SpecialEvents />
      <Gallery />
      <Comparison />
      <Opportunities />
      <Roles />
      <Stats />
      <Community />
      <Newsletter />
    </div>
  );
}
