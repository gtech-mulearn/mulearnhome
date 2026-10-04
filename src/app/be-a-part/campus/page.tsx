import { CampusView } from "@/features/be-a-part";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Campus Chapter",
  description:
    "Start a µLearn Campus Chapter — bring peer-led, proof-of-work learning to your college.",
  keywords: [
    "campus chapter",
    "college chapter",
    "start a chapter",
    "peer-led learning",
    "proof-of-work learning",
  ],
  canonical: "https://mulearn.org/be-a-part/campus",
});

export default async function CampusPage() {
  return <CampusView />;
}
