import { TrivialIdeasView } from "@/features/trivial-ideas";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Trivial Ideas",
  description:
    "Trivial Ideas — a µLearn initiative for exploring small, playful ideas worth building.",
  keywords: ["trivial ideas", "playful ideas", "mulearn initiative"],
  canonical: "https://mulearn.org/trivial-ideas",
});

export default async function TrivialIdeasPage() {
  return <TrivialIdeasView />;
}
