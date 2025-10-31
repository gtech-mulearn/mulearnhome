// src/app/events/salt-mango-tree/page.tsx

import { cdnUrl } from "@/services/cdn";
import { saltMangoTreeEpisodes, SaltMangoTreeEpisode } from "@/data/data";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button component
import { Card, CardContent } from "@/components/ui/card"; // Assuming shadcn/ui Card component
import Image from "next/image";
import Link from "next/link";

// -----------------------------------------------------------------------------
// EPISODE CARD COMPONENT (REUSABLE UI)
// -----------------------------------------------------------------------------

interface EpisodeCardProps {
  episode: SaltMangoTreeEpisode;
}

const SaltMangoTreeCard = ({ episode }: EpisodeCardProps) => {
  const imageUrl = cdnUrl(episode.image);

  // Determine button text and action
  const buttonText = episode.isUpcoming ? "Set Reminder" : "Listen Now";

  // Use muLearn color system classes (Tailwind utility classes are used here
  // but should map to the CSS variables in globals.css per guidelines)
  const tagColor = episode.tags.includes("Tech from Kerala")
    ? "text-mulearn-trusty-blue"
    : "text-mulearn-duke-purple";

  // Use dynamic image src
  const imageSrc = imageUrl;

  return (
    <Card className="max-w-sm w-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-mulearn-duke-purple/20">
      {/* Episode Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={`Cover image for ${episode.title}`}
          fill={true}
          className="rounded-t-lg object-cover"
        />
        {/* Duration Overlay */}
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {episode.duration}
        </div>
      </div>

      <CardContent className="p-4 flex flex-col space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          {episode.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-0.5 rounded-full bg-mulearn-duke-purple/10 ${tagColor}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl font-display text-mulearn-blackish font-bold">
          {episode.title}
        </h2>

        {/* Speaker Info */}
        <div className="text-sm text-gray-600">
          <p className="font-semibold text-mulearn-blackish">
            {episode.speaker}
          </p>
          <p className="text-xs text-mulearn-gray-600">{episode.role}</p>
        </div>

        {/* Summary & Date */}
        <p className="text-sm text-mulearn-gray-600 italic border-l-2 border-mulearn-trusty-blue pl-2">
          {episode.summary}
        </p>

        <p className="text-xs text-mulearn-gray-600 pt-1">
          Airs on {episode.airDate}
        </p>

        {/* CTA Button */}
        <Link href={episode.link} passHref>
          <Button
            className="mt-4 w-full text-mulearn-blackish font-bold"
            // Using inline style to demonstrate gradient/specific brand color for CTA button
            style={{
              background:
                "linear-gradient(135deg, var(--mulearn-trusty-blue) 0%, var(--mulearn-duke-purple) 100%)",
              color: "var(--mulearn-whitish)",
            }}
          >
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

// -----------------------------------------------------------------------------
// MAIN PAGE COMPONENT
// -----------------------------------------------------------------------------

export default function SaltMangoTreePage() {
  // Use the defined font classes for consistent styling
  const pageTitleClasses =
    "text-5xl md:text-7xl font-display bg-clip-text text-transparent bg-gradient-to-r from-mulearn-trusty-blue to-mulearn-duke-purple mb-4";
  const subtitleClasses =
    "text-mulearn-gray-600 text-lg md:text-xl font-sans max-w-3xl mx-auto";

  return (
    <div className="min-h-screen bg-mulearn-whitish text-mulearn-blackish py-16">
      <div className="container mx-auto px-4">
        {/* 1. HERO / INTRODUCTION SECTION */}
        <section id="hero" className="text-center mb-20 pt-12">
          <h1 className={pageTitleClasses}>
            Salt Mango Tree | സാൾട്ട് മാംഗോ ട്രീ
          </h1>

          <p className={subtitleClasses}>
            A Malayalam storytelling space by µLearn — celebrating our roots,
            voices, and ideas through the warmth of our language and the pride
            of our land.
          </p>

          <p className="text-sm mt-4 max-w-3xl mx-auto text-mulearn-blackish/80">
            Salt Mango Tree is µLearn's Malayalam community series exploring
            culture, lived experiences, innovation, and local perspectives. It's
            about the stories we carry, the places we come from, and the pride
            that keeps us rooted while we grow.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="#episodes-previous" passHref>
              <Button className="bg-mulearn-trusty-blue hover:bg-mulearn-duke-purple font-semibold">
                Listen Now
              </Button>
            </Link>
            <Link href="#episodes-upcoming" passHref>
              <Button
                variant="outline"
                className="border-mulearn-duke-purple text-mulearn-duke-purple hover:bg-mulearn-duke-purple/10"
              >
                Set Reminder
              </Button>
            </Link>
          </div>
        </section>

        {/* 2. EPISODE SHOWCASE SECTION */}
        <section id="episodes" className="pt-8">
          <h2 className="text-4xl font-display text-center font-bold mb-10 text-mulearn-blackish">
            Episode Showcase
          </h2>

          <div
            id="episodes-all"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {saltMangoTreeEpisodes.map((episode) => (
              <SaltMangoTreeCard key={episode.title} episode={episode} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
